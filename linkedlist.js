class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
        }
    
    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        } else if (this.head === this.tail) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return value;
        } else {
            const value = this.tail.value;
            const newTail = this.at(this.length - 2);
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            return value;
        }
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
        }
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            index++;
        }
    }

    toString() {
        let currentNode = this.head;
        let string = '';
        while (currentNode) {
            string += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        return string + 'null';
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            const newNode = new Node(value);
            const previousNode = this.at(index - 1);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
            return true;
        }
    }
    
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        } else {
            const previousNode = this.at(index - 1);
            const value = previousNode.next.value;
            previousNode.next = previousNode.next.next;
            this.length--;
            return value;
        }
    }
}   

const list = new LinkedList();


console.log(list.toString());
