import React , {useContext} from 'react'
import { TokenContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const { user } = useContext(TokenContext);
  const { logout } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      logout();
      navigate('/login');
    } catch (error) {
      console.log('No se ha podido cerrar la sesión');
    }
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="title-page mb-5">Perfil</h2>
            <h3>Email: {user.email}</h3>
            <br/>

          <button type="submit" className="btn btn-dark btn-sm" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </>
  )
}

export default Profile