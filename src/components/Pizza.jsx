import React, { useState, useEffect } from 'react'

const Pizza = () => {

    const [pizzaRes, setInfo] = useState([]);

    useEffect(() => {
        getPizzas();
    }, []);

    const getPizzas = async () => {
        const url = "http://localhost:5000/api/pizzas/p001";
        const response = await fetch(url);
        const pizzaRes = await response.json();
        setInfo(pizzaRes);
    };

    const isLast = pizzaRes.ingredients.length - 1;

    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={pizzaRes.img} className="card-img-top" alt="Pizza" />
                    <div className="card-body p-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5 className="card-title text-capitalize pb-0 pt-2">{pizzaRes.name}</h5>
                            </li>
                            <li className="list-group-item">
                                <div className="d-block text-center fs-6">
                                    Ingredientes
                                </div>
                                <ul className="d-flex col-12 justify-content-center flex-wrap no-list fs-7 ps-0">
                                    🍕 {pizzaRes.ingredients.map((ing, i) => <li className="me-1" key={i}>{ing}{isLast === i ? '' : ','}</li>)}
                                </ul>
                                <div className="d-block text-start fs-5 mt-3 mb-2">
                                    Descripción
                                </div>
                                <p>
                                    {pizzaRes.desc}
                                </p>
                            </li>

                            <li className="list-group-item">
                                <div className="d-flex col-12 justify-content-around my-4">
                                <h4 className="text-center">Precio: ${new Intl.NumberFormat('es-CL').format(pizzaRes.price)}</h4>
                                    <button type="button" className="btn btn-dark btn-sm">Añadir 🛒</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pizza