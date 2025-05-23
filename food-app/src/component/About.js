import React, {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('parent constructor');
    }
    
    componentDidMount() {
        console.log('parent component Did Mount');
    }
    
    render() {
        console.log('parent render');
        return (
            <div>
                <h1>About</h1>
                <h2>This is About component</h2>
                <User contact="@govindkalani23" name="Govind" location="Pune"/>
                <UserClass contact="@geetkalani23" name="Govind" location="Delhi"/>
            </div>
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is About component</h2>
//              <User contact="@govindkalani23" name="Govind" location="Pune"/>
//              <UserClass contact="@geetkalani23" name="Govind" location="Delhi"/>
//         </div>
//     );
// }

export default About;