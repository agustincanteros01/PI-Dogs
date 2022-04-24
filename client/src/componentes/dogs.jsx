import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getDogs, getDetails } from "../actions/actions";
import { Link } from 'react-router-dom'

function Dogs(props) {
    const [title, setTitle] = useState('');
    const [dogs, setDogs] = useState([]);
    const [dogsDetalles, setDogsDetalles] = useState([]);

    useEffect(() => {
        setDogs(props.dogs)
    }, [props.dogs])

    useEffect(() => {
        setDogsDetalles(props.dogsDetalles)
    }, [props.dogsDetalles])

    const handleClick = (event) => {
        props.getDetails(event.target.textContent)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].name === title) {
                return props.getDetails(title)
            }
        }   
    }


    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div>

            <Link to='/'>VOLVER</Link>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>
                        Raza:
                        <input type="text" id='title' value={title} onChange={(e) => handleChange(e)} />
                    </label>
                </div>
                <button type="submit">BUSCAR</button>
            </form>


            <Link to='/dogs/creacionDog'><button>CREAR UNA RAZA</button></Link>


            {
                dogsDetalles.length > 0 && title === dogsDetalles[0][0].name ?
                    dogsDetalles.map(a => {
                        return (
                            <div key={a[0].idDogs}>
                                <ul>
                                    <Link to={`/dogs/${a[0].name}`}><li onClick={(e) => handleClick(e)}>{a[0].name}</li></Link>
                                    <li>Id: {a[0].idDogs}</li>
                                    { a[0].peso.imperial ? <li>{a[0].peso.imperial}</li> : <li>{a[0].peso}</li>}
                                </ul>
                            </div>
                        )
                    })

                    :

                    dogs.map(a => {
                        return (
                            <div key={a.idDogs}>
                                <ul>
                                    <Link to={`/dogs/${a.name}`}><li onClick={(e) => handleClick(e)}>{a.name}</li></Link>
                                    <li>Id: {a.idDogs}</li>
                                    { a.peso.imperial ? <li>{a.peso.imperial}</li> : <li>{a.peso}</li>}
                                </ul>
                            </div>
                        )
                    })
            }

        </div>
    )
}

const mapStateToProps = state => ({
    dogs: state.dogs,
    dogsDetalles: state.dogsDetalles
})

export default connect(mapStateToProps, { getDogs, getDetails })(Dogs)