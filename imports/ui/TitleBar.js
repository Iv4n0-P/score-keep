import React from 'react'

export default (props) => (
        <div className="title-bar">
        <div className="wrapper">
        <h1>{props.title}</h1>
        {props.subtitle && <h3 className="title-bar__subtitle">{props.subtitle}</h3>}
        </div>
        </div>
    )