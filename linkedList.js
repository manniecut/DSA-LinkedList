//constucting the class for a node

class _Node {       //underscore indicates private class
    constructor(value, next) {    // sets up default values for the class
        this.value = value;       // sets space for data contained in node
        this.next = next;         // sets space to point to next node
    }
}


class LinkedList {      // buildling a linked list
    constructor() {
        this.head = null;   // head indicates beginning of list and contains first node

    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)

    }

    insertLast(item) {
        if (this.head === null) {       // if the list is empty add
            this.insertFirst(item);     // then use the insertFirst function
        } else {
            let tempNode = this.head;           // tempNode (the focus node) starts at the beginning
            while (tempNode.next !== null) {    // as long as a node follows
                tempNode = tempNode.next;       // shift tempNode to the next node
            }                                       // when we get to the end
            tempNode.next = new _Node(item, null)   // create a new node .next of tempNode and point it to null (end)
        }
    }

    find(item) {
        let currNode = this.head        //start at the head
        if (!this.head) {
            return null;                //if list is empty return null
        }
        while (currNode.value !== item) {   //keep looping until item match
            if (currNode.next === null) {   //if no more items return null
                return null;
            } else {                        //else continue search
                currNode = currNode.next;
            }
        }
        return currNode;    //when found
    }

}