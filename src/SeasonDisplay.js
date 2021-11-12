import './SeasonDisplays.css'
import React from 'react'


const seasonsConfig = {
    winter: {
        text: 'buur it\'s chilly',
        iconName: 'snowflake'
    }, 
    summer: {
        text: 'let\'s hit the beach',
        iconName: 'sun'
    }
}

const getSeason =(lat, month)=> {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'winter' : 'summer'
    }
}


const SeasonDisplay =(props)=> {

    const season = getSeason (props.lat, new Date())
const {text, iconName} = seasonsConfig[season]
    return(
        <div className ={`get-season`}>
            <i className={`top-left massive ${iconName} icon`}></i>
            <p>{text}</p>
            <i className={`bottom-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;