import React, { useState, useEffect } from 'react'
import { pizzaCart } from '../assets/js/pizzas.js'

const Cart = () => {
    const [total, setTotal] = useState(0);
    const [count, setQty] = useState(1);
    const [show, setShow] = useState(false);


    useEffect(() => {
        // se ejecuta al entrar a cart.jsx lo que permite que se cargue en total inicial
        fnTotal();
    }, [])

    function fnTotal() {
        let sum = 0;
        pizzaCart.forEach(pizza => sum += pizza.price * pizza.count);
        if(sum > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
        setTotal(sum);
    }

    const handleQtyUp = e => {
        setSumar(e.id);
        fnTotal();
    }

    const handleQtyDown = e => {
        setQuitar(e.id);
        fnTotal();
    }

    function setSumar(_id) {
        const pizza = pizzaCart.findIndex(x => x.id === _id);
        setQty(prevCount => prevCount + 1);
        pizzaCart[pizza].count++;
        fnTotal();
    }

    function setQuitar(_id) {
        const pizza = pizzaCart.findIndex(x => x.id === _id);
        setQty(prevCount => prevCount - 1);
        pizzaCart[pizza].count--;

        if (pizzaCart[pizza].count < 1) {
            pizzaCart.splice(pizza, 1);
        }
        fnTotal();
    }

    return (
        <div className="container my-5">
            <h2 className="title-page mb-5">Carrito de Compras</h2>

            <div className={!show ? 'd-flex justify-content-center align-items-center empty-content':'hidden'}>
            El 🛒 esta vacío
            </div>


        <div className={show ? 'min-heigth-content':'hidden'}>
            <table className="table table-striped mt-5 mb-5">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col"></th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaCart.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <img src={item.img} width="70" alt="Pizza" />
                            </td>
                            <td className="text-capitalize fw-bold align-middle">{item.name}</td>
                            <td className="align-middle">${new Intl.NumberFormat('es-CL').format(item.price)}</td>
                            <td className="align-middle">
                                <button className="btn btn-sm btn-qty" onClick={() => handleQtyDown(item)}>➖</button>
                                <span className="count-number">{item.count} </span>
                                <button className="btn btn-sm btn-qty" onClick={() => handleQtyUp(item)}>➕</button>
                            </td>
                            <td className="align-middle">
                                ${new Intl.NumberFormat('es-CL').format(item.price * item.count)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <div className="d-flex flex-column mt-5 justify-content-end align-items-end">
                <p className="fs-1 text-end"><b>Total:</b> ${new Intl.NumberFormat('es-CL').format(total)}</p>
                <button className="btn cart-btn btn-outline-dark btn-sm mt-3 btn-end-shop" >Finalizar Compra</button>
            </div>
            </div>

        

    )
}

export default Cart