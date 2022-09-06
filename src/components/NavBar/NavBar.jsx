import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/mydrinks'>My Cocktail List</Link>
      &nbsp; | &nbsp;
      <Link to='/drinks'>All Cocktails</Link>
      &nbsp; | &nbsp;
      <Link to='/random'>Mystery Cocktails</Link>
      &nbsp; | &nbsp;
      Well Hello There {user.name}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}