const axios = require('axios')

let URL = 'https://swapi.co/api/people/1/'
const options = {
    url:URL,
    method:'POST',
    data:{
        name:'Hai'
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }
}

axios(options).then(data => console.log(data))
.catch(error => console.log('ERROR:',error))