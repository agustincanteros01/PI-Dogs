import React, { useState } from "react";
import { connect } from "react-redux";
import { getDetails } from "../actions/actions";

function Buscador(props) {

    const [title, setTitle] = useState('');

    console.log(props)

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getDetails(title)
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (

        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>
                        Raza:
                        <input type="text" id='title' value={title} onChange={(e) => handleChange(e)} />
                    </label>
                </div>
                <button type="submit">BUSCAR</button>
            </form>

        </div>

    )

}

const mapStateToProps = state => ({
    dogsDetalles: state.dogsDetalles
})

export default connect(mapStateToProps, { getDetails })(Buscador)