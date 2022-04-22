import axios from 'axios'

export function getDogs(){
    return function(dispatch){
        return axios.get('http://localhost:3001/dogs').then(d => {
            return d.data
        }).then(dog => {
            dispatch({ type: 'GET_DOGS', payload: dog})
        })
    }
}

export function getDetails(name){
    return function(dispatch){
        return axios.get('http://localhost:3001/dogs?name=' + name).then(d => {
            return d.data
        }).then(dog => {
            dispatch({ type: 'GET_DETALLES', payload: dog})
        })
    }
}