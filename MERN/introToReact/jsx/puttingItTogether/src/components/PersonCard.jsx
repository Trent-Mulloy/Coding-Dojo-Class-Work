import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {age : this.props.age, hair : this.props.hair}
    }
    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hair}</h3>
                <button onClick={ () => this.setState({age : this.state.age += 1})}>{this.props.firstName} birthday button</button>
            </div>
        )
    }
}
export default PersonCard;