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

			assert.strictEqual(dlist.first, node1);
			assert.strictEqual(dlist.last, node1);
			assert.strictEqual(dlist.length, 1);

			assert.strictEqual(node1.object, 1);
			assert.strictEqual(node1.previous, null);
			assert.strictEqual(node1.next, null);
			assert.strictEqual(node1.container, dlist);
		});
		it('list should be correct after adding 2', function () {
			var node1 = dlist.addFront(1);
			var node2 = dlist.addFront(2);

			assert.strictEqual(dlist.first, node2);
			assert.strictEqual(dlist.last, node1);
			assert.strictEqual(dlist.length, 2);

			assert.strictEqual(node2.object, 2);
			assert.strictEqual(node2.previous, null);
			assert.strictEqual(node2.next, node1);
			assert.strictEqual(node2.container, dlist);
		});
		it('list should be correct after adding 3', function () {
			var node1 = dlist.addFront(1);
			var node2 = dlist.addFront(2);
			var node3 = dlist.addFront(3);

			assert.strictEqual(dlist.first, node3);
			assert.strictEqual(dlist.last, node1);
			assert.strictEqual(dlist.length, 3);

			assert.strictEqual(node3.object, 3);
			assert.strictEqual(node3.previous, null);
			assert.strictEqual(node3.next, node2);
			assert.strictEqual(node3.container, dlist);
		});
		it('list should be correct after adding 4', function () {
			var node1 = dlist.addFront(1);
			var node2 = dlist.addFront(2);
			var node3 = dlist.addFront(3);
			var node4 = dlist.addFront(4);

			// check list
			assert.strictEqual(dlist.first, node4);
			assert.strictEqual(dlist.last, node1);
			assert.strictEqual(dlist.length, 4);

			// 1
			assert.strictEqual(node1.object, 1);
			assert.strictEqual(node1.previous, node2);
			assert.strictEqual(node1.next, null);
			assert.strictEqual(node1.container, dlist);

			// 2
			assert.strictEqual(node2.object, 2);
			assert.strictEqual(node2.previous, node3);
			assert.strictEqual(node2.next, node1);
			assert.strictEqual(node2.container, dlist);

			// 3
			assert.strictEqual(node3.object, 3);
			assert.strictEqual(node3.previous, node4);
			assert.strictEqual(node3.next, node2);
			assert.strictEqual(node3.container, dlist);

			// 4
			assert.strictEqual(node4.object, 4);
			assert.strictEqual(node4.previous, null);
			assert.strictEqual(node4.next, node3);
			assert.strictEqual(node4.container, dlist);
		});

		it('state of list and nodes should be correct', function () {
			dlist.addFront(1);
			dlist.addFront(2);
			dlist.addFront(3);
			dlist.addFront(4);

			var expectedOutput = [4, 3, 2, 1];
			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				assert.strictEqual(expectedOutput[i], node.object);
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

			assert.strictEqual(dlist.first, node1);
			assert.strictEqual(dlist.last, node1);
			assert.strictEqual(dlist.length, 1);

			assert.strictEqual(node1.object, 1);
			assert.strictEqual(node1.previous, null);
			assert.strictEqual(node1.next, null);
			assert.strictEqual(node1.container, dlist);
		});
		it('list should be correct after adding 2', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);

			assert.strictEqual(dlist.first, node1);
			assert.strictEqual(dlist.last, node2);
			assert.strictEqual(dlist.length, 2);

			assert.strictEqual(node2.object, 2);
			assert.strictEqual(node2.previous, node1);
			assert.strictEqual(node2.next, null);
			assert.strictEqual(node2.container, dlist);
		});
		it('list should be correct after adding 3', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);
			var node3 = dlist.addBack(3);

			assert.strictEqual(dlist.first, node1);
			assert.strictEqual(dlist.last, node3);
			assert.strictEqual(dlist.length, 3);

			assert.strictEqual(node3.object, 3);
			assert.strictEqual(node3.previous, node2);
			assert.strictEqual(node3.next, null);
			assert.strictEqual(node3.container, dlist);
		});
		it('list should be correct after adding 4', function () {
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);
			var node3 = dlist.addBack(3);
			var node4 = dlist.addBack(4);

			// check list
			assert.strictEqual(dlist.first, node1);
			assert.strictEqual(dlist.last, node4);
			assert.strictEqual(dlist.length, 4);

			// 1
			assert.strictEqual(node1.object, 1);
			assert.strictEqual(node1.previous, null);
			assert.strictEqual(node1.next, node2);
			assert.strictEqual(node1.container, dlist);

			// 2
			assert.strictEqual(node2.object, 2);
			assert.strictEqual(node2.previous, node1);
			assert.strictEqual(node2.next, node3);
			assert.strictEqual(node2.container, dlist);

			// 3
			assert.strictEqual(node3.object, 3);
			assert.strictEqual(node3.previous, node2);
			assert.strictEqual(node3.next, node4);
			assert.strictEqual(node3.container, dlist);

			// 4
			assert.strictEqual(node4.object, 4);
			assert.strictEqual(node4.previous, node3);
			assert.strictEqual(node4.next, null);
			assert.strictEqual(node4.container, dlist);
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
			assert.strictEqual(popped1, 1);

			var popped2 = dlist.popFront();
			assert.strictEqual(popped2, 2);

			var popped3 = dlist.popFront();
			assert.strictEqual(popped3, 3);

			var popped4 = dlist.popFront();
			assert.strictEqual(popped4, 4);

			// TODO: i think this is a bug.
			// // list
			// assert.strictEqual(dlist.first, null);
			// assert.strictEqual(dlist.last, null);
			// assert.strictEqual(dlist.length, 0);
			//
			// // node 1
			// assert.strictEqual(node1.object, 1);
			// assert.strictEqual(node1.previous, null);
			// assert.strictEqual(node1.next, null);
			// assert.strictEqual(node1.container, null);
			//
			// // node 2
			// assert.strictEqual(node2.object, 2);
			// assert.strictEqual(node2.previous, null);
			// assert.strictEqual(node2.next, null);
			// assert.strictEqual(node2.container, null);
			//
			// // node 3
			// assert.strictEqual(node3.object, 3);
			// assert.strictEqual(node3.previous, null);
			// assert.strictEqual(node3.next, null);
			// assert.strictEqual(node3.container, null);
			//
			// // node 4
			// assert.strictEqual(node4.object, 4);
			// assert.strictEqual(node4.previous, null);
			// assert.strictEqual(node4.next, null);
			// assert.strictEqual(node4.container, null);
		});

		it('should iterate forward correctly after popping', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 4);

			var popped4 = dlist.popBack();
			assert.strictEqual(popped4, 4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 3);

			var popped3 = dlist.popBack();
			assert.strictEqual(popped3, 3);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 2);

			var popped2 = dlist.popBack();
			assert.strictEqual(popped2, 2);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 1);

			var popped1 = dlist.popBack();
			assert.strictEqual(popped1, 1);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 0);
		});

		it('should iterate backwards correctly after popping', function () {
			dlist.addBack(1);
			dlist.addBack(2);
			dlist.addBack(3);
			dlist.addBack(4);

			var i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(i, 4);

			var popped4 = dlist.popBack();
			assert.strictEqual(popped4, 4);

			var i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(i, 3);

			var popped3 = dlist.popBack();
			assert.strictEqual(popped3, 3);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(i, 2);

			var popped2 = dlist.popBack();
			assert.strictEqual(popped2, 2);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(i, 1);

			var popped1 = dlist.popBack();
			assert.strictEqual(popped1, 1);

			i = 0;
			for (var node = dlist.last; node !== null; node = node.previous) {
				i++;
			}
			assert.strictEqual(i, 0);
		});

		it('should popFront while modifying the list in the loop, and iterate FORWARDS correctly', function () {
			// Because the nodes are not properly updated on remove, I expect one of these to fail
			
		});

		it('should popFront while modifying the list in the loop, and iterate BACKWARDS correctly', function () {
			// Because the nodes are not properly updated on remove, I expect one of these to fail

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
			var node1 = dlist.addBack(1);
			var node2 = dlist.addBack(2);
			var node3 = dlist.addBack(3);
			var node4 = dlist.addBack(4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 4);

			var popped4 = dlist.popBack();
			assert.strictEqual(popped4, 4);

			var i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 3);

			var popped3 = dlist.popBack();
			assert.strictEqual(popped3, 3);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 2);

			var popped2 = dlist.popBack();
			assert.strictEqual(popped2, 2);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			assert.strictEqual(i, 1);

			var popped1 = dlist.popBack();
			assert.strictEqual(popped1, 1);

			i = 0;
			for (var node = dlist.first; node !== null; node = node.next) {
				i++;
			}
			// we should not be able to iterate on nodes that are removed from the list
			assert.strictEqual(i, 0);
		})
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
