import React from 'react'
import {Players} from '../api/players'

export default (props) => (
    <div className={`item item--position-${props.player.rank}`}>
        <div className="player">
            <div>
                <h3 className="player__name">{props.player.name}</h3>
                <p className="player__stats">{props.player.position} place - {props.player.score} point(s)</p>
            </div>
            <div className="player__actions">
                <button className="button button--round" onClick={() => { Players.update({ _id: props.player._id }, { $inc: { score: 1 } }) }}>+1</button>
                <button className="button button--round" onClick={() => { Players.update({ _id: props.player._id }, { $inc: { score: -1 } }) }}>-1</button>
                <button className="button button--round" onClick={() => { Players.remove({ _id: props.player._id }) }}>x</button>
            </div>
        </div>
    </div>
)