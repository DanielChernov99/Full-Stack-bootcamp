import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }


  editItem = () => {
    const item = this.props.item
    const newLocation = window.prompt("Enter new location:", item.location)
    if (newLocation) {
      this.props.store.editItem(item.name, newLocation)
    }
  }

  deleteItem = () => {
    const item = this.props.item
    this.props.store.deleteItem(item.name)
  }

  render() {
    let item = this.props.item;

    return (
      <div className={item.completed ? "crossed" : null}>
        <input 
          type="checkbox"
          onClick = {this.checkItem}
          value={item.name}
        />
        {item.name} - {item.location}
        <button 
          className="editButton"
          onClick={this.editItem}
          >
          Edit
        </button>
        <button 
          className="deleteButton"
          onClick={this.deleteItem}
          >
          Delete
        </button>
      </div>
    );
  }
}

export default observer(Item);