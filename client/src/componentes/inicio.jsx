import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../actions/actions";

function Inicio(props) {

    if (props.dogs[0]) {
        return (
            <section>
                <Link to='/dogs'><button>DOGS PAGE</button></Link>
            </section>
        )
    } else {
        return (
            <section>
                <Link to='/dogs'><button onClick={() => props.getDogs()}>DOGS PAGE</button></Link>
            </section>
        )
    }

}

const mapStateToProps = state => ({
    dogs: state.dogs
})

export default connect(mapStateToProps, { getDogs })(Inicio)