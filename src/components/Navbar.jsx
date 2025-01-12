import React from 'react'

const Navbar = () => {
    const total = new Intl.NumberFormat('es-CL').format(25000);
    const [token, setToken] = React.useState(false);

    const handleLogin = () => {
        setToken(!token);
        if (!token) {
            console.log('User logged out');
        } else {
            console.log('User logged in');
        }
    };
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <button className="btn btn-outline-light btn-sm me-md-2">🍕 Home</button>
                    <button className="btn btn-outline-light btn-sm me-md-2" onClick={handleLogin}>{!token ? '🔐 Login' : '🔓 Logout' }</button>
                    <button className="btn btn-outline-light btn-sm me-md-2" onClick={handleLogin}>{!token ? '🔐 Register' : '🔒 Profile'}</button>
                </div>
            <div className="position-absolute top-25 end-0 pe-2">
            <button className="btn cart-btn btn-outline-info btn-sm me-2" >🛒 ${total}</button>

            <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>

            </div>
            
        </nav>
    );
};

export default Navbar