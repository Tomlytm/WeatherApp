import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={lat: null, errorMessage: ''}
        window.navigator.geolocation.getCurrentPosition(
            position=>{this.setState({lat:position.coords.latitude})}, 
            err=> {this.setState({errorMessage:err.message})}
        )
    }
    render(){

        if(!this.state.errorMessage && this.state.lat){
    return(
            <div><SeasonDisplay lat={this.state.lat}/></div>
    )
}
if(this.state.errorMessage && !this.state.lat){
    return(
            <div>error:{this.state.errorMessage}</div>
    )
}
return(
    <div>Loading...</div>
)

}
}

ReactDom.render(<App />, document.querySelector('#root'))