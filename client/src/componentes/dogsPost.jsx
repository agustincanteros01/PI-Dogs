import React, { useState } from "react";
import { getDatosPost } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function DogPost(props) {

  const [dog, setDog] = useState({
    name: '',
    altura: '',
    peso: '',
    promVida: 0,
  })

  const formSubmit = (event) => {
    event.preventDefault();
    props.getDatosPost(dog)
    console.log('hola')
  }

  const handleChange = (event) => {
    setDog({
      ...dog,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div>

    <Link to='/dogs'><button>VOLVER</button></Link>

      <h1>Ingrese los datos:</h1>
      <form onSubmit={(e) => { formSubmit(e) }}>
        <div>
          <label>
            Nombre:
            <input type="text" id='name' value={dog.name} onChange={(e) => handleChange(e)} />
          </label>

          <label>
            Altura:
            <input type="text" id="altura" value={dog.altura} onChange={(e) => handleChange(e)} />
          </label>

          <label>
            Peso:
            <input type="text" id="peso" value={dog.peso} onChange={(e) => handleChange(e)} />
          </label>

          <label>
            promVida:
            <input type="text" id="promVida" value={dog.promVida} onChange={(e) => handleChange(e)} />
          </label>
        </div>
        <button type='submit'>CREAR</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { getDatosPost })(DogPost)
