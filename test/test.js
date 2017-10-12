var assert = require('assert');
var DoublyList = require('../index.js');

// TODO:
// verify all state after each convert
// function ListNode(obj, previous, next, container) {
// 	this.object    = obj;
// 	this.previous  = previous;
// 	this.next      = next;
// 	this.container = container;
// }
//
// function DoublyList() {
// 	this.first  = null;
// 	this.last   = null;
// 	this.length = 0;
// }


describe('container-doublylist tests', function() {

	// addFront = function (obj) {
	describe('addFront', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('list should be correct after adding 1', function () {
			var node1 = dlist.addFront(1);

			assert.strictEqual(node1, dlist.first);
			assert.strictEqual(node1, dlist.last);
			assert.strictEqual(1, dlist.length);

			assert.strictEqual(1, node1.object);
			assert.strictEqual(null, node1.previous);
			assert.strictEqual(null, node1.next);
			assert.strictEqual(dlist, node1.container);
		});
		it('list should be correct after adding 2', function () {
			var node1 = dlist.addFront(1);
			var node2 = dlist.addFront(2);

			assert.strictEqual(node2, dlist.first);
			assert.strictEqual(node1, dlist.last);
			assert.strictEqual(2, dlist.length);

			assert.strictEqual(2, node2.object);
			assert.strictEqual(null, node2.previous);
			assert.strictEqual(node1, node2.next);
			assert.strictEqual(dlist, node2.container);
		});
		it('list should be correct after adding 3', function () {
			var node1 = dlist.addFront(1);
			var node2 = dlist.addFront(2);
			var node3 = dlist.addFront(3);

			assert.strictEqual(node3, dlist.first);
			assert.strictEqual(node1, dlist.last);
			assert.strictEqual(3, dlist.length);
			assert.strictEqual(3, node3.object);

			assert.strictEqual(null, node3.previous);
			assert.strictEqual(node2, node3.next);
			assert.strictEqual(dlist, node3.container);
		});
		it('list should be correct after adding 4', function () {
			var node1 = dlist.addFront(1);
			var node2 = dlist.addFront(2);
			var node3 = dlist.addFront(3);
			var node4 = dlist.addFront(4);

			// check list
			assert.strictEqual(node4, dlist.first);
			assert.strictEqual(node1, dlist.last);
			assert.strictEqual(4, dlist.length);

			// 1
			assert.strictEqual(1, node1.object);
			assert.strictEqual(node2, node1.previous);
			assert.strictEqual(null, node1.next);
			assert.strictEqual(dlist, node1.container);

			// 2
			assert.strictEqual(2, node2.object);
			assert.strictEqual(node3, node2.previous);
			assert.strictEqual(node1, node2.next);
			assert.strictEqual(dlist, node2.container);

			// 3
			assert.strictEqual(3, node3.object);
			assert.strictEqual(node4, node3.previous);
			assert.strictEqual(node2, node3.next);
			assert.strictEqual(dlist, node3.container);

			// 4
			assert.strictEqual(4, node4.object);
			assert.strictEqual(null, node4.previous);
			assert.strictEqual(node3, node4.next);
			assert.strictEqual(dlist, node4.container);
		});

		it('state of list and nodes should be correct', function () {
			dlist.addFront(1);
			dlist.addFront(2);
			dlist.addFront(3);
			dlist.addFront(4);

			var expectedOutput = [4, 3, 2, 1];
			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				assert.strictEqual(node.object, expectedOutput[i]);
				i++;
			}
		});
	});

	// addBack = function (obj) {
	describe('addBack', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('list should be correct after adding 1', function () {
			var node1 = dlist.addBack(1);

			assert.strictEqual(node1, dlist.first);
			assert.strictEqual(node1, dlist.last);
			assert.strictEqual(1, dlist.length);

			assert.strictEqual(1, node1.object);
			assert.strictEqual(null, node1.previous);
			assert.strictEqual(null, node1.next);
			assert.strictEqual(dlist, node1.container);
		});
		it('list should be correct after adding 2', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);

			assert.strictEqual(node1, dlist.first);
			assert.strictEqual(node2, dlist.last);
			assert.strictEqual(2, dlist.length);

			assert.strictEqual(2, node2.object);
			assert.strictEqual(node1, node2.previous);
			assert.strictEqual(null, node2.next);
			assert.strictEqual(dlist, node2.container);
		});
		it('list should be correct after adding 3', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);
			var node3 = dlist.addBack(3);

			assert.strictEqual(node1, dlist.first);
			assert.strictEqual(node3, dlist.last);
			assert.strictEqual(3, dlist.length);

			assert.strictEqual(3, node3.object);
			assert.strictEqual(node2, node3.previous);
			assert.strictEqual(null, node3.next);
			assert.strictEqual(dlist, node3.container);
		});
		it('list should be correct after adding 4', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);
			var node3 = dlist.addBack(3);
			var node4 = dlist.addBack(4);

			// check list
			assert.strictEqual(node1, dlist.first);
			assert.strictEqual(node4, dlist.last);
			assert.strictEqual(4, dlist.length);

			// 1
			assert.strictEqual(1, node1.object);
			assert.strictEqual(null, node1.previous);
			assert.strictEqual(node2, node1.next);
			assert.strictEqual(dlist, node1.container);

			// 2
			assert.strictEqual(2, node2.object);
			assert.strictEqual(node1, node2.previous);
			assert.strictEqual(node3, node2.next);
			assert.strictEqual(dlist, node2.container);

			// 3
			assert.strictEqual(3, node3.object);
			assert.strictEqual(node2, node3.previous);
			assert.strictEqual(node4, node3.next);
			assert.strictEqual(dlist, node3.container);

			// 4
			assert.strictEqual(4, node4.object);
			assert.strictEqual(node3, node4.previous);
			assert.strictEqual(null, node4.next);
			assert.strictEqual(dlist, node4.container);
		});

		it('state of list and nodes should be correct', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var expectedOutput = [1, 2, 3, 4];
			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				assert.strictEqual(expectedOutput[i], node.object);
				i++;
			}
		});
	});

	// popFront = function () {
	describe('popFront', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should be correct order', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			var expectedOutput = [1, 2, 3, 4];
			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				assert.strictEqual(expectedOutput[i], dlist.popFront());
				i++;
			}
		});

		it('should leave all nodes and list in correct state', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);
			var node3 = dlist.addBack(3);
			var node4 = dlist.addBack(4);

			var popped1 = dlist.popFront();
			assert.strictEqual(1, popped1);

			var popped2 = dlist.popFront();
			assert.strictEqual(2, popped2);

			var popped3 = dlist.popFront();
			assert.strictEqual(3, popped3);

			var popped4 = dlist.popFront();
			assert.strictEqual(4, popped4);

			// list
			assert.strictEqual(null, dlist.first);
			assert.strictEqual(null, dlist.last);
			assert.strictEqual(0, dlist.length);

			// node 1
			assert.strictEqual(1, node1.object);
			assert.strictEqual(null, node1.previous);
			assert.strictEqual(null, node1.next);
			assert.strictEqual(null, node1.container);

			// node 2
			assert.strictEqual(2, node2.object);
			assert.strictEqual(null, node2.previous);
			assert.strictEqual(null, node2.next);
			assert.strictEqual(null, node2.container);

			// node 3
			assert.strictEqual(3, node3.object);
			assert.strictEqual(null, node3.previous);
			assert.strictEqual(null, node3.next);
			assert.strictEqual(null, node3.container);

			// node 4
			assert.strictEqual(4, node4.object);
			assert.strictEqual(null, node4.previous);
			assert.strictEqual(null, node4.next);
			assert.strictEqual(null, node4.container);
		});

		it('should iterate FORWARDS correctly after popping', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(4, i);

			var popped1 = dlist.popFront();
			assert.strictEqual(1, popped1);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(3, i);

			var popped2 = dlist.popFront();
			assert.strictEqual(2, popped2);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(2, i);

			var popped3 = dlist.popFront();
			assert.strictEqual(3, popped3);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(1, i);

			var popped4 = dlist.popFront();
			assert.strictEqual(4, popped4);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(0, i);
		});

		it('should iterate BACKWARDS correctly after popping', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(4, i);

			var popped1 = dlist.popFront();
			assert.strictEqual(1, popped1);

			var i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(3, i);

			var popped2 = dlist.popFront();
			assert.strictEqual(2, popped2);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(2, i);

			var popped3 = dlist.popFront();
			assert.strictEqual(3, popped3);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(1, i);

			var popped4 = dlist.popFront();
			assert.strictEqual(4, popped4);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(0, i);
		});

		it('should iterate correctly while modifying the list in the loop, FORWARDS FORWARDS', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var expectedValues = [1];
			var actualValues = [];

			for (var node = dlist.first; node !== null; node = node.next) {
				dlist.popFront();
				// innerNode should now be detached and removed from list.
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.next) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});

		it('should iterate correctly while modifying the list in the loop, FORWARDS BACKWARDS', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var expectedValues = [1];
			var actualValues = [];

			for (var node = dlist.first; node !== null; node = node.next) {
				dlist.popFront();
				// innerNode should now be detached and removed from list.
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.previous) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});

		it('should iterate correctly while modifying the list in the loop, BACKWARDS FORWARDS ', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var actualValues = [];
			var expectedValues = [5, 4, 5, 3]; // 5, then 4-5, then 3 (special because 3 gets removed on its iteration)

			for (var node = dlist.last; node !== null; node = node.previous) {
				dlist.popFront();
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.next) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});

		it('should iterate correctly while modifying the list in the loop, and iterate BACKWARDS BACKWARDS correctly', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var actualValues = [];
			var expectedValues = [5, 4, 3, 2, 4, 3, 3]; // 5432, 43, 3
			for (var node = dlist.last; node !== null; node = node.previous) {
				dlist.popFront();
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.previous) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});
	});

	// popBack = function () {
	describe('popBack', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});

		it('should be correct order', function () {});

		it('should leave all nodes and list in correct state', function () {});

		it('should iterate FORWARDS correctly after popping', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(4, i);

			var popped4 = dlist.popBack();
			assert.strictEqual(4, popped4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(3, i);

			var popped3 = dlist.popBack();
			assert.strictEqual(3, popped3);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(2, i);

			var popped2 = dlist.popBack();
			assert.strictEqual(2, popped2);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(1, i);

			var popped1 = dlist.popBack();
			assert.strictEqual(1, popped1);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			// we should not be able to iterate on nodes that are removed from the list
			assert.strictEqual(0, i);
		});

		it('should iterate BACKWARDS correctly after popping', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(4, i);

			var popped4 = dlist.popBack();
			assert.strictEqual(4, popped4);

			var i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(3, i);

			var popped3 = dlist.popBack();
			assert.strictEqual(3, popped3);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(2, i);

			var popped2 = dlist.popBack();
			assert.strictEqual(2, popped2);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(1, i);

			var popped1 = dlist.popBack();
			assert.strictEqual(1, popped1);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(0, i);
		});

		it('should iterate correctly while modifying the list in the loop, FORWARDS FORWARDS', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var actualValues = [];
			var expectedValues = [1, 2, 3, 4, 2, 3]; // 1234, 23, 3

			for (var node = dlist.first; node !== null; node = node.next) {
				dlist.popBack();
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.next) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});

		it('should iterate correctly while modifying the list in the loop, FORWARDS BACKWARDS', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var actualValues = [5];
			var expectedValues = [5];

			for (var node = dlist.first; node !== null; node = node.next) {
				dlist.popBack();
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.previous) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});

		it('should iterate correctly while modifying the list in the loop, BACKWARDS FORWARDS ', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var actualValues = [];
			var expectedValues = [];

			for (var node = dlist.last; node !== null; node = node.previous) {
				dlist.popBack();
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.next) {
					actualValues.push(innerNode.object);
				}
			}

			assert.deepStrictEqual(expectedValues, actualValues);
		});

		it('should iterate correctly while modifying the list in the loop, and iterate BACKWARDS BACKWARDS correctly', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);
			dlist.addBack(5);

			var actualValues = [];
			var expectedValues = [];

			for (var node = dlist.last; node !== null; node = node.previous) {
				dlist.popBack();
				for (var innerNode = node; innerNode !== null; innerNode = innerNode.previous) {
					actualValues.push(innerNode.object);
				}
			}
			assert.deepStrictEqual(expectedValues, actualValues);
		});
	});

	// addBefore = function (node, obj) {
	describe('addBefore', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// addAfter = function (node, obj) {
	describe('addAfter', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// moveToTheBeginning = function (node) {
	describe('moveToTheBeginning', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// moveToTheEnd = function (node) {
	describe('moveToTheEnd', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// removeByReference = function (node) {
	describe('removeByReference', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// remove = function (object) {
	describe('remove', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// clear = function () {
	describe('clear', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// forEach = function (processingFunc, params) {
	describe('forEach', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});

	// toArray = function () {
	describe('toArray', function () {
		var dlist;
		beforeEach(function () {
			dlist = new DoublyList();
		});
		it('should ', function () {

		});
	});
});

// TODO: right now it seems that if you modify the list while you are in the middle of iterating, you can get screwed.
// write test showing this.
