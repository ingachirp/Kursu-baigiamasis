import React from "react";
import App from "../App";
import form from '/form';

const addBtn = document.getElementById('submit');

async function dropdownDb () {
    const result = await fetch('mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/CCenter?retryWrites=true&w=majority');
    const json = await result.json();
    console.log(json)
    json.forEach(element => {
        const {name, _id} = element;
        const select = document.getElementById('Members');
        const options = document.createElement('option');
        options.value = _id;
        options.text = name;
        select.appendChild(options);
    });
}

dropdownDb ()

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = createInputObject();
    const formDataString = JSON.stringify(formData);
    login(formDataString);
});

function createInputObject() {
    debugger
    const formData = {
        usersName:usersName.value,
        usersSurname:usersSurname.value,
        usersEmail:usersEmail.value,
        usersAge:userAge.value
    };
    return formData;
}
async function login(formDataString) {
   const result = await fetch('mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/CCenter?retryWrites=true&w=majority', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: formDataString
    })
    console.log(result)
    if (result.ok) {
        window.location.replace("mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/CCenter?retryWrites=true&w=majority");  
    } else {
        alert('Blogai');
    }
}