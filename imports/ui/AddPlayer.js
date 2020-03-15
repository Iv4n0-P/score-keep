import React from 'react'
import {Players} from '../api/players'

const handleOnSubmit = (e) => {
            e.preventDefault()
            const playerName = e.target.playerName.value
            Players.insert({name: playerName, score: 0})
        }

export default () => (
    <div className="item">
    <form className="form" onSubmit={handleOnSubmit}>
                <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                <button className="button">Add Player</button>
                </form>
    </div>
)