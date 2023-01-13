initiate
# TOC
   - [Test Suit](#test-suit)
<a name=""></a>

<a name="test-suit"></a>
# Test Suit
Testing the add method.

```js
let [actual, expected] = [myObj.add(1, 2), 3];
assert.deepEqual(actual, expected, "Add method testing failed");
```

Testing the subtract method.

```js
let [actual, expected] = [myObj.subtract(2, 1), 1];
assert.deepEqual(actual, expected, "Add method testing failed");