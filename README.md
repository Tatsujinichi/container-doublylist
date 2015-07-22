# container-doublylist
DoublyList implementation in JavaScript

To manage a list of elements from which elements are frequently being removed.
Complexity in O(1) for addition and removal. Iteration seem as fast as iterating through arrays

To **instanciate** a new list:
``` javascript
var myList = new DoublyList();
```

To **add** an element:
``` javascript
var myObjectReference = myList.add(myObject); // add on front by default
// or
var myObjectReference = myList.addFront(myObject); // add on front
// or
var myObjectReference = myList.addBack(myObject); // add on back
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
var myObject = myList.popFront(); // pop from front
// or
var myObject = myList.popBack(); // pop from back
```

To **iterate** through the elements:
``` javascript
for (var node = this.first; node !== null; node = node.next) {
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