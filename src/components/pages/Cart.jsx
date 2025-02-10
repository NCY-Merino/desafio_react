import React, { useState, useEffect, useContext } from 'react';
import { PizzaContext , CartContext, TokenContext} from '../context/Context.jsx'; // Asegúrate de importar correctamente

const Cart = () => {
  const { data, setData } = useContext(PizzaContext);
  const { totalContext, setTotalContext } = useContext(CartContext);
  let {token} = useContext(TokenContext);

  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fnTotal();
  }, [data]);

  function fnTotal() {
    let sum = 0;
    data.forEach((pizza) => (sum += pizza.price * pizza.count));
    setShow(sum > 0);
    setTotal(sum);
    setTotalContext(sum);
  }

  const handleQtyUp = (item) => {
    setSumar(item.id);
  };

  const handleQtyDown = (item) => {
    setQuitar(item.id);
  };

  function setSumar(_id) {
    const updatedData = data.map((item) => {
      if (item.id === _id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setData(updatedData);
  }

  function setQuitar(_id) {
    const updatedData = data
      .map((item) => {
        if (item.id === _id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0);

    setData(updatedData);
  }

  const handlePayment = () => {
      alert('puede pagar');
  }

  

  return (
    <div className="container my-5">
      <h2 className="title-page mb-5">Carrito de Compras</h2>

      <div className={!show ? 'd-flex justify-content-center align-items-center empty-content' : 'hidden'}>
        El 🛒 esta vacío
      </div>

      <div className={show ? 'min-heigth-content' : 'hidden'}>
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
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={item.img} width="70" alt="Pizza" />
                </td>
                <td className="text-capitalize fw-bold align-middle">{item.name}</td>
                <td className="align-middle">${new Intl.NumberFormat('es-CL').format(item.price)}</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-qty" onClick={() => handleQtyDown(item)}>
                    ➖
                  </button>
                  <span className="count-number">{item.count} </span>
                  <button className="btn btn-sm btn-qty" onClick={() => handleQtyUp(item)}>
                    ➕
                  </button>
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
        <p className="fs-1 text-end">
          <b>Total:</b> ${new Intl.NumberFormat('es-CL').format(total)}
        </p>
        <button className="btn cart-btn btn-outline-dark btn-sm mt-3 btn-end-shop" disabled={!token} onClick={() => handlePayment}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;