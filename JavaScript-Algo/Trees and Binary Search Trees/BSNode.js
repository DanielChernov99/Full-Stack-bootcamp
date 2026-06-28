class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode = function(val){
    if (this.value == val){
        console.log("true");       
        return true;
    }
    else if (val > this.value && this.rightChild){
        return this.rightChild.findNode(val)
    }
    else if(val <= this.value && this.leftChild){
        return this.leftChild.findNode(val)
    }
    console.log("false"); 
    return false;
    }

    findCommonParent = function(val1,val2){
        if ((val1 > this.value && val2 < this.value) ||
            (val2 > this.value && val1 < this.value)) {
        return this.value
        }

        if (val1 < this.value && val2 < this.value) {
            if (this.leftChild.value === val1 || this.leftChild.value === val2) {
                return this.value
            }
            return this.leftChild.findCommonParent(val1, val2)
        }

        if (val1 > this.value && val2 > this.value) {
            if (this.rightChild.value === val1 || this.rightChild.value === val2) {
                return this.value
            }
            return this.rightChild.findCommonParent(val1, val2)
        }
    }

    findMaxValue = function () {
        if (this.rightChild) {
            return this.rightChild.findMaxValue()
        }

        return this.value
    }

    removeNode = function (parent, val) {
        // searching to the left
        if (val < this.value) {
            if (this.leftChild) {
                return this.leftChild.removeNode(this, val)
            }

            return false
        }

        // searching to the right
        else if (val > this.value) {
            if (this.rightChild) {
                return this.rightChild.removeNode(this, val)
            }

            return false
        }

        // found the node we want to delete
        else {

            // no childs at all
            if (!this.leftChild && !this.rightChild) {
                if (parent.leftChild === this) {
                    parent.leftChild = null
                }
                else if (parent.rightChild === this) {
                    parent.rightChild = null
                }
                else {
                    this.value = null
                }
            }

            // only right child
            else if (!this.leftChild && this.rightChild) {
                if (parent.leftChild === this) {
                    parent.leftChild = this.rightChild
                }
                else if (parent.rightChild === this) {
                    parent.rightChild = this.rightChild
                }
                else {
                    this.value = this.rightChild.value
                    this.leftChild = this.rightChild.leftChild
                    this.rightChild = this.rightChild.rightChild
                }
            }

            //only left child
            else if (this.leftChild && !this.rightChild) {
                if (parent.leftChild === this) {
                    parent.leftChild = this.leftChild
                }
                else if (parent.rightChild === this) {
                    parent.rightChild = this.leftChild
                }
                else {
                    this.value = this.leftChild.value
                    this.rightChild = this.leftChild.rightChild
                    this.leftChild = this.leftChild.leftChild
                }
            }

            // two childs
            else {
                const maxValue = this.leftChild.findMaxValue()
                this.value = maxValue
                this.leftChild.removeNode(this, maxValue)
            }
            return parent
        }
    }
}

module.exports = BSNode