/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here
        makeObservable(this,{
            list: observable,
            length:observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem:action

        })

    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    addItem = (name) => {
        const newItem = new Item(name)
        this.list.push(newItem)
    }
    editItem = (itemName,newLocation) => {
        let item = this.list.find(u => u.name === itemName)
        item.location = newLocation
    }
    deleteItem = (itemName) => {
        let itemIndex = this.list.findIndex(u => u.name === itemName)
        this.list.splice(itemIndex,1)
    }
    
}

