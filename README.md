# container-doublylist
DoublyList implementation in JavaScript

To manage a list of elements. Best use case: elements are frequently removed from the list.
Complexity in O(1) for addition and removal.

Note: Benchmarks seem to show that iteration seem as fast as array iteration.

To **instanciate** a new list:
``` javascript
var myList = new DoublyList();
```

To **add** an element:
``` javascript
var myObjectReference = myList.add(myObject); // add on front by default
// or
var myObjectReference = myList.addFront(myObject);
// or
var myObjectReference = myList.addBack(myObject);
```

To **remove** an element:
``` javascript
myList.removeByReference(myObjectReference); // O(1)
// or
myList.remove(myObject); // O(n)
```

To **pop** an element:
``` javascript
var myObject = myList.pop(); // pop from front by default
// or
var myObject = myList.popFront();
// or
var myObject = myList.popBack();
```

To **iterate** through the elements:
``` javascript
for (var node = myList.first; node !== null; node = node.next) {
	node.object += 1;
}
```

To **apply a treatment** on all the elements:
``` javascript
myList.forEach(function (object) {
	console.log(object);
});
```

To **convert into an array**:
``` javascript
var myArray = myList.toArray();
```