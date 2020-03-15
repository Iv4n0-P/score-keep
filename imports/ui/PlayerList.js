import React from 'react'
import Player from './Player'

export default (props) => (
    <div>
        {props.players.length === 0 ? <div className="item"><p className="item__message">Add your first player to get started</p></div> : props.players.map((player) => <Player key={player._id} player={player} />)}
    </div>
)