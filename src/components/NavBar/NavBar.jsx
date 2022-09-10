import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar" style={{color:"black"}}>
      <Link style={{color:"black"}} to='/mydrinks'>My Cocktail List</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"rebeccapurple"}} to='/drinks'>All Cocktails</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to='/random'>Mystery Cocktails</Link>
      &nbsp; | &nbsp;
      <span style={{color:"rebeccapurple"}}>Buenos Dias, {user.name}</span>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}