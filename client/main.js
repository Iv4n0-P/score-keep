import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import {Players, calculatePlayerPosition} from '../imports/api/players'
import { Tracker } from 'meteor/tracker'
import TitleBar from '../imports/ui/TitleBar'
import AddPlayer from '../imports/ui/AddPlayer'
import PlayerList from '../imports/ui/PlayerList'
import App from '../imports/ui/App'


Meteor.startup(() => {
    Tracker.autorun(() => {
       

        const players = Players.find({}, {sort: {score: -1} }).fetch()
        const title = 'Score Keep'
        const subtitle = 'Subtitle'
        const positionedPlayers = calculatePlayerPosition(players)

        ReactDOM.render(<App players={positionedPlayers} title={title} subtitle={subtitle} />, document.getElementById('app'))
    })
})