import React from 'react'
import {Button} from '@material-ui/core'

class Counter extends  React.Component{
    constructor(props){
        super(props)
        this.state ={Counter : 0}
        this.counterHandeler = this.counterHandeler.bind(this)
    }

    componentDidMount(){}

    componentWillUnmount(){}

    counterHandeler(){
        this.setState(
            {
                Counter : this.state.Counter + 1
            }
        )
    }

    render(){
        return(
            <div>
                <Button onClick={this.counterHandeler} color="primary"  variant="contained" size= "large">Button counter:{this.state.Counter}</Button>
               
            </div>
        )
    }
}

export default Counter