import React from "react";
import App from "../App";

class Form extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <label>First name</label>
                    <input type="text" name="Name" />
                </div>
                <div class="container">
                    <label>Last Name</label>
                    <input type="text" name="Last-Name" />
                </div>
                <div class="container">
                    <label>Email Address</label>
                    <input type="text" name="Email-Address" />
                </div>
                <div class="container">
                    <label>your date of birth</label>
                    <input type="text" name="Birthday" />
                </div>
                <div class="btn">
                    <button class="cancel">Cancel</button>
                    <button id="submit">
                        Submit</button>
                </div>
            </div >
        );
    }
}

export default Form;