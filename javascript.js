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
            if(!current.next){
                console.log(current.data)
            }
        }
    }

    pop() {
        let current = this.head;
        let previous;
        while(current.next){
            previous = current
            current = current.next;
            
            if(!current.next){
                current.data = null
                previous.next = null
            }
        }
        this.size--
    }

    contains(value) {
        let current = this.head;
        while(current) {
            if(current.data === value){
                console.log(true)
                return
            }
            current = current.next;
        }
        console.log(false)
    }

    find(value){
        let current = this.head;
        let count = 0
        while(current) {
            if(current.data === value){
                console.log(count)
                return
            }
            current = current.next;
            count++
        }
        console.log(null)
    }

    toString(){
        let current = this.head;
        let arr = []
        while(current) {
            let value = `( ${current.data} )`
            arr.push(value)
            current = current.next;
        }
        arr.push('null')
        let newString = arr.join(' -> ')
        console.log(newString)
    }
}

const ll = new LinkedList();

ll.prependValue(300)
ll.prependValue(200)
ll.prependValue(100)
ll.appendValue(400)
ll.insertAt(500, 10)
ll.printListData()

ll.getSize()

//ll.getHeadGiggity()

//ll.tail()
//ll.getAt(0)

ll.pop()
ll.printListData()
ll.tail()
console.log(ll)

ll.find(100)

ll.toString()