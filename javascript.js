class Node {
    constructor(data, next = null){ //list doesn't have a next node by default
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; //list has no first node by default
        this.size = 0; //list is empty by default
    }

    //insert first node
    prependValue(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    //insert last node
    appendValue(data){
        let node = new Node(data);
        let current;
        //If empty, make head
        if(!this.head){
            this.head = node
        } else {
            current = this.head;
            
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++
    }

    //insert at index
    insertAt(data, index) {
        //if index is out of range
        if(index > 0 && index > this.size){
            this.appendValue(data)
            return
        }

        //if first index
        if(index === 0){
            this.prependValue(data)
            return
        }

        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head
        let count = 0

        while(count < index) {
            previous = current //node before index we want to insert
            count++
            current = current.next //node after index
        }

        node.next = current
        previous.next = node
        this.size++
    }

    //get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }

    //remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return
        }

        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if(index === 0){
            this.head = current.next
        } else {
            while(count < index){
                count++
                previous = current
                current = current.next
            }
            
            previous.next = current.next;
        }
        
        this.size--
    }

    //clear list
    clearList() {
        this.head = null
        this.size = 0
    }

    //print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next;
        }
    }

    getSize() {
        console.log(this.size)
    }

    getHeadGiggity() {
        console.log(this.head.data)
    }

    tail(){
        let current = this.head;
        while(current.next){
            current = current.next;
            //if(!current.next){
                console.log(current)
            //}
        }
    }
}

const ll = new LinkedList();
ll.prependValue(100)
ll.prependValue(200)
ll.prependValue(300)
ll.appendValue(400)
ll.insertAt(500, 10)
ll.printListData()

ll.getSize()

ll.getHeadGiggity()

//ll.tail()