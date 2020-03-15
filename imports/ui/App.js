import React from 'react'
import TitleBar from './TitleBar'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'

export default (props) => (
    <div>
    <TitleBar title={'Score Keep'} subtitle={'Created by Ivanko Perišić'}/>
    <div className="wrapper">
    <PlayerList players={props.players}/>
    <AddPlayer />
    </div>
    </div>
)