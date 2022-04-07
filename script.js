'use strict';

//-----------------------------------------async await get
// let arr = [];

// const getData = async (url) => {
//     let response = await fetch(url);
    
//     return await response.json();    
// }

// const result = getData('http://localhost:3000/menu');

// result.then(data => console.log(data));

//------------------------------------------pure fetch get
let arr = [];

fetch('http://localhost:3000/users')
.then(data => data.json())
.then(data => {
    data.forEach(obj => {
        arr.push(obj);
    });
})
.then(data => console.log(arr));

//------------------------------------------fetch post
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
    
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: jsonData
    })
    .then(data => {
        data.json()
        .then(item => console.log(item));
    });
});