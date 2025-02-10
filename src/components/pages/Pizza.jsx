import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
    const [pizzaRes, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getPizzas(id);
    }, [id]);

    const getPizzas = async (_id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/pizzas/${_id}`);
            if (!response.ok) throw new Error("Error al obtener pizza");
            const data = await response.json();
            setInfo(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Cargando pizza...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container">
            <div className="card">
                <img
                    src={pizzaRes.img || ''}
                    className="card-img-top"
                    alt="Pizza"
                    onError={(e) => e.target.src = 'ruta/imagen-default.jpg'}
                />
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5 className="card-title text-capitalize pb-0 pt-2">
                                {pizzaRes.name || 'Nombre no disponible'}
                            </h5>
                        </li>

                        <li className="list-group-item">
                            <div className="d-block text-center fs-6">Ingredientes</div>
                            <ul className="d-flex col-12 justify-content-center flex-wrap no-list fs-7 ps-0">
                                {pizzaRes.ingredients?.length > 0 ? (
                                    pizzaRes.ingredients.map((ing, i) => {
                                        const isLast = i === pizzaRes.ingredients.length - 1;
                                        return (
                                            <li className="me-1" key={i}>
                                                {ing}
                                                {!isLast && ','}
                                            </li>
                                        );
                                    })
                                ) : (
                                    <li>No hay ingredientes disponibles</li>
                                )}
                            </ul>

                            <div className="d-block text-start fs-5 mt-3 mb-2">
                                Descripción
                            </div>
                            <p>{pizzaRes.desc || 'Descripción no disponible'}</p>
                        </li>

                        <li className="list-group-item">
                            <div className="d-flex col-12 justify-content-around my-4">
                                <h4 className="text-center">
                                    Precio: ${new Intl.NumberFormat('es-CL').format(pizzaRes.price || 0)}
                                </h4>
                                <button type="button" className="btn btn-dark btn-sm">
                                    Añadir 🛒
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pizza;