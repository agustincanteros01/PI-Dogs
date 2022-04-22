import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Detalles(props) {

    const [detalles, setDetalles] = useState();

    useEffect(() => {
        setDetalles(props.dogsDetalles)
    }, [props.dogsDetalles]);

    return (
        <div>
            {
                setTimeout(() => {
                    console.log(detalles)
                  }, 5000)
            }
        </div>
    )



}

const mapStateToProps = state => ({
    dogsDetalles: state.dogsDetalles
})

export default connect(mapStateToProps, {})(Detalles)