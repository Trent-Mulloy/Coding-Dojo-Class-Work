class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class SLList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront(num) {
        // create a new node with the value set to the passed in number
        var newNode = new Node(num);
        // take newNode's .next pointer and point it into the list
        newNode.next = this.head;

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;    
        } else {
            // change .head pointer to point at our newNode
            this.head = newNode;
        }
    }

    addToBack(num) {
        // create a newNode with the given number
        var newNode = new Node(num);
        // take tail pointer and point it at the new node

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // take tail.next and point it to newNode
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // removes the first item in your list
    removeFromFront() {
        if(this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!");
            // return 'this' to end function and allow chaining of methods
            return this;
        }
        // if we simply move out head pointer over, that creates a new entry point to our list 
        // we cannot traverse backwards!
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;

        return this;
    }

    // removes the last item in your list
    removeFromBack() {
        // this handles 2 edge cases: nothing in list, and only 1 item in list
        if(this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // ** alternate edge case handling, handles if there is only 1 items in the list or no items separately
        // if(this.head == null) {
        //     console.log("Nothing in the list! Cannot remove from back")
        //     return this
        // }
        // if(this.head.next == null) {
        //     this.head = null
        //     return this
        // }
        // set runner to start at the beginning of list
        var runner = this.head;

        // run all the way through this list until you hit the second to last item and stop
        while(runner.next != this.tail) {
            runner = runner.next
        }
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;
        this.tail = runner;
        return this
    }

    // move through a given list and determine if a given num is contained in it; return true/false
    contains(num) {
        // edge case: what if there's nothing in the list?
        if(!this.head) { //this.head === null
            console.log("There's nothing in this list, so it cannot contain anything!")
            return false
        }
        // start runner at the beginning of the list
        // var runner = this.head;
        // while(runner != null)
