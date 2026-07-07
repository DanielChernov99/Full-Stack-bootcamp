import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    seatReservation = () => {
        const { RestaurantStore, res } = this.props
        RestaurantStore.seatRes(res.id)
    }
    completeReservation = () => {
        const { RestaurantStore, res } = this.props
        RestaurantStore.completeRes(res.id)
    }

    render() {
        const { res } = this.props
        return (
            <div className={res.completed ? "conditional" : ""}>
                <span>
                    {res.name} - {res.numPeople} people
                </span>
                <button onClick={this.seatReservation}>
                    Seat Reservation
                </button>

                <button onClick={this.completeReservation}>
                    Complete Reservation
                </button>
            </div>
            
        )
    }
}

export default inject("RestaurantStore")(observer(Reservation))