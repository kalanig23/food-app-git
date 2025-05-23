import React from "react";

class UserClass extends React.Component {
    //1. first step constructor called 
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }
        console.log('child constructor');
    }

    //3. third component Did Mount called
    // use case of componentDidMount: api called (),
    componentDidMount() {
        console.log('child component Did Mount');
    }

    //2. second step render called
    render() {
        const {name, location, contact} = this.props;
        const {count} = this.state;
        console.log('child render');
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({count: this.state.count+1})
                }}>Count increase</button>
                <h2>Name: {name}</h2>
                <h3>Location {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        )
    }
}

export default UserClass;