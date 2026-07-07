import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{

    addReservation = () =>{
        const {GeneralStore,RestaurantStore } = this.props
        RestaurantStore.addRes(GeneralStore.name,GeneralStore.numPeople)

    }




    render () {
        const { RestaurantStore } = this.props
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>
                    people in the restaurant : {this.props.RestaurantStore.restPopulation}
                </div>
                
                <div id="completedTables">
                    Completed tables: {this.props.RestaurantStore.completedTables}
                </div>
                <ResInput/>
                <button id="addRes" onClick={this.addReservation}>Add Reservation</button>
                <div className = "reservations">
                    {RestaurantStore.reservations.map(res => {
                        return <Reservation key={res.id} res={res}/>
                    })}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))