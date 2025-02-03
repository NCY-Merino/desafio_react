import React, { useState, setShow, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PizzaContext } from '../components/context/Context'


const CardPizza = (props) => {
    const { data, setData } = useContext(PizzaContext);
    const [pizza, setPizza] = useState({
        id: "",
        name: "",
        price: 0,
        count: 1,
        img: "",
      });
    
      const handleAdded = (_pizza) => {
        const pizza = {
            id: _pizza.id,
            name: _pizza.name,
            price: _pizza.price,
            count: 1,
            img: _pizza.img,
        };
        const existe = data.some(x => x.id === pizza.id);
        if(!existe){
            setData([...data, pizza]);
            console.log("Pizza agregada");
        } else {
            console.log("Pizza agregada anteriormente"); 
        }
      };

    const isLast = props.pizza.ingredients.length - 1;
    const price = new Intl.NumberFormat('es-CL').format(props.pizza.price);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="col-12 col-md-4 p-2" id={props.pizza.id}>
                <div className="card">
                    <img src={props.pizza.img} className="card-img-top" alt="Pizza" />
                    <div className="card-body p-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5 className="card-title text-capitalize pb-0 pt-2">{props.pizza.name}</h5>
                            </li>
                            <li className="list-group-item">
                                <div className="d-block text-center fs-6">
                                    Ingredientes
                                </div>
                                    <ul className="d-flex col-12 justify-content-center flex-wrap no-list fs-7 ps-0">
                                    🍕 {props.pizza.ingredients.map((ing, i) => <li className="me-1" key={i}>{ing}{isLast === i ? '' : ','}</li>)}
                                    </ul>
                            </li>

                            <li className="list-group-item">
                                <h4 className="text-center">Precio: ${price}</h4>

                                <div className="d-flex col-12 justify-content-around my-4">
                                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleShow}>Ver más 👀</button>
                                    <button type="button" className="btn btn-dark btn-sm" onClick={() => handleAdded(props.pizza)}>Añadir 🛒</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>🍕 <b>Descripción</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">

                        <img src={props.pizza.img} alt="Pizza" width="45%" />
                        <div className='text-start ps-3'>
                            <div className="d-block fs-6 text-capitalize mb-2 fw-bold">
                                {props.pizza.name}                    </div>

                            <div className="fs-7">
                                {props.pizza.desc}

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CardPizza