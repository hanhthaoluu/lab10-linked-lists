'use strict';

const LinkedList = require('../lib/linked-list.js');
const LinkedListNode = require('../lib/LinkedListNode.js');

describe('append function', () => {
  it('should append if the list is empty, meaning this.head equals to null', () => {
    let secondLinkedList = new LinkedList();
    secondLinkedList.append('Hello Thao');
    secondLinkedList.print();
    expect(secondLinkedList.head.value).toEqual('Hello Thao');
  });

  it('should append, adding the new value "peonies" to the end of the list, if the list is not empty', () => {
    let thirdLinkedList = new LinkedList();
    thirdLinkedList.append('ranunculus');
    thirdLinkedList.print();
    thirdLinkedList.append('peonies');
    expect(thirdLinkedList.head.next.value).toEqual('peonies');
  });

  it('should append if the value is a linked list node', () => {
    let fourthLinkedList = new LinkedList();
    let firstLinkedListNode = new LinkedListNode();
    firstLinkedListNode.value = 'roses';
    fourthLinkedList.append(firstLinkedListNode);
    expect(fourthLinkedList.head).toEqual(firstLinkedListNode);
  });
});

describe('prepend function', () => {
  it('should prepend if the value, secondLinkedListNode, is an instance of a linked list node', () => {
    let secondLinkedListNode = new LinkedListNode();
    secondLinkedListNode.value = 'lilies';
    let fifthLinkedList = new LinkedList();
    fifthLinkedList.prepend('magnolias');
    fifthLinkedList.prepend(secondLinkedListNode);
    fifthLinkedList.print();
    expect(fifthLinkedList.head.value).toEqual('lilies');
  });

  it('should prepend even when the value, "dahlias" is NOT an instance of a linked list node', () => {
    let sixthLinkedList = new LinkedList();
    sixthLinkedList.prepend('dahlias');
    expect(sixthLinkedList.head.value).toEqual('dahlias');
  });

  it('should prepend or adding the new value, "tulips" to the front of the list', () => {
    let seventhLinkList = new LinkedList();
    seventhLinkList.prepend('jasmines');
    seventhLinkList.prepend('tulips');
    expect(seventhLinkList.head.value).toEqual('tulips');;
  });
});
