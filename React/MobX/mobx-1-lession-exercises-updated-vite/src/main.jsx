import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Item } from './stores/Item';
import { ShoppingList } from './stores/ShoppingList';

let potatoes = new Item("Potatoes");
let groceryList = new ShoppingList();
groceryList.list.push(potatoes);

// Use the prop "store" for your store
ReactDOM.render(<App store={groceryList} />, document.getElementById('root'));