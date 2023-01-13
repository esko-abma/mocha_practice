var Base = require('mocha/lib/reporters/base');
var color = Base.color;
var cursor = Base.cursor;
var inherits = require('mocha/lib/utils').inherits;
// var spec = require('../node_modules/mocha/lib/reporters/min')


function Spec(runner) {
    Base.call(this, runner);

    var self = this;
    var indents = 0;
    var n = 0;

    function indent() {
        return Array(indents).join('  ');
    }

    runner.on('start', function () {
        console.log();
        self.stats.start = new Date();
    });

    runner.on('end', function () {
        self.stats.end = new Date();
        self.stats.duration = self.stats.end - self.stats.start;
    });

    runner.on('test', function (test) {
        test.start = new Date();
    });

    runner.on('suite', function (suite) {
        ++indents;
        console.log(color('suite', '%s%s'), indent(), suite.title);
    });

    runner.on('suite end', function () {
        --indents;
        if (indents === 1) {
            console.log();
        }
    });

    runner.on('pending', function (test) {
        const started = '(started: ' + test.start + ')';
        const fmt = indent() + color('pending', '  - %s') + ' ' + started;
        console.log(fmt, test.title, test.started);
    });

    runner.on('pass', function (test) {
        checkTestEnd(test);
        var fmt;
        const interval = '(started: ' + test.start + ', ended: ' + test.end + ')';
        if (test.speed === 'fast') {
            fmt = indent()
                + color('checkmark', '  ' + Base.symbols.ok)
                + color('pass', ' %s %s');
            cursor.CR();
            console.log(fmt, test.title, interval);
        } else {
            fmt = indent()
                + color('checkmark', '  ' + Base.symbols.ok)
                + color('pass', ' %s')
                + color(test.speed, ' (%dms)')
                + ' %s';
            cursor.CR();
            console.log(fmt, test.title, test.duration, interval);
        }
    });

    runner.on('fail', function (test) {
        checkTestEnd(test);
        cursor.CR();
        const interval = '(started: ' + test.start + ', ended: ' + test.end + ')';
        console.log(indent() + color('fail', '  %d) %s %s'),
            ++n,
            test.title,
            interval);
    });

    runner.on('end', self.epilogue.bind(self));

    function checkTestEnd(test) {
        test.end = new Date();
    }
}

inherits(Spec, Base);

module.exports = Spec;