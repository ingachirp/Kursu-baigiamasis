import React from "react";
import App from "../App";

class Form extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <input type="text" name="Name" placeholder="Vardas" />
                </div>
                <div class="container">
                    <input type="text" name="Last-Name" placeholder="Pavardė" />
                </div>
                <div class="container">
                    <input type="text" name="Email-Address" placeholder="el. paštas"/>
                </div>
                <div class="container">
                    <input type="text" name="Age" placeholder="amžius"/>
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