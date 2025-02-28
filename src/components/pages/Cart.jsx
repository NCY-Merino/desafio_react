import React, { useState, useEffect, useContext } from 'react';
import { PizzaContext , CartContext, TokenContext} from '../context/Context.jsx';

const Cart = () => {
  const { data, setData } = useContext(PizzaContext);
  const { totalContext, setTotalContext } = useContext(CartContext);
  let { token } = useContext(TokenContext);

  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleCheckout = async () => {
    if (!token) {
      setMessage("Por favor, inicia sesión para realizar la compra.");
      return; 
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify( data ),
      });

      if (!response.ok) {
        throw new Error("Error al procesar la compra.");
      }
      setMessage('ok');
      clearCart(); 
    } catch (error) {
      setMessage('error');
    }
  };

  const clearCart = () => {
    setData([]);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleRetry = () => {
    setMessage('');
  };

  

  return (
    <div className="container my-5">
      <h2 className="title-page mb-5">Carrito de Compras</h2>

      <div className={!show && message === "" ? 'd-flex justify-content-center align-items-center empty-content' : 'hidden'}>
        El 🛒 esta vacío
      </div>

      <div className={show && message === "" ? 'min-heigth-content' : 'hidden'}>
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

      { message === "" ? 
      <div className="d-flex flex-column mt-5 justify-content-end align-items-end">
        <p className="fs-1 text-end">
          <b>Total:</b> ${new Intl.NumberFormat('es-CL').format(total)}
        </p>
        <button type="button" className="btn cart-btn btn-outline-dark btn-sm mt-3 btn-end-shop" onClick={handleCheckout} disabled={!token}>Finalizar Compra</button>
      </div>
      : 
      
      <div>{message === 'ok' ? 
          <>
            <div class="alert alert-success" role="alert">
              Compra realizada con exito
            </div>

            <div className="imagen_feliz"></div>
          </>
          : 
          <>
            <div class="alert alert-danger" role="alert">
              Tuvimos un error al procesar la compra
            </div>
            <button type="button" className="btn cart-btn btn-outline-dark btn-sm mt-3 btn-end-shop" onClick={handleRetry} >Reintentar</button>
          </>
        }
      </div> 
      
      }
    </div>
  );
};

export default Cart;