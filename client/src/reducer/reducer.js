const initialState = {
    dogs: [],
    temperamentos: [],
    dogsDetalles: []
}

function rootReducer(state = initialState, { type, payload }) {
    if (type === 'GET_DOGS') {
        return {
            ...state,
            dogs: state.dogs.concat(payload)
        }
    }
    if (type === 'DELETE_DOG') {
        return {
            ...state,
            dogs: state.dogs.filter(dog => dog.idPerro !== payload)
        }
    }
    if (type === 'GET_DETALLES') {
        return {
            dogsDetalles: state.dogsDetalles.shift(),
            ...state,
            // eslint-disable-next-line no-dupe-keys
            dogsDetalles: state.dogsDetalles.concat(payload)
        }
    }
    if (type === 'POST_DOGS') {
        return {
            ...state,
            dogs: state.dogs.concat(payload)
        }
    }
    if(type === 'UPDATE_DOGS'){
        return {
            ...state,
            dogs: state.dogs.concat(payload)
        }
    }
    return state
}

export default rootReducer