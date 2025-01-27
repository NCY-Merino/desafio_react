import React from 'react'
import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="container">

            <div className="d-flex justify-content-center align-items-center flex-column py-4">

                <h1 className='fw-bold'>¡404!</h1>

                <p>Lo sentimos esta pagina no existe</p>

                <div className="imagen_triste"></div>

                <h2>Pizza no encontrada</h2>

                <Link className="btn btn-outline-dark" to="/">🍕 Regresar al Home 🍕</Link>
            </div>
        </div>
    )
}

export default NotFound