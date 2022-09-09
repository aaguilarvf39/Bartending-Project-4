import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyCocktailPage from '../MyCocktailPage/MyCocktailPage';
import NavBar from '../../components/NavBar/NavBar';
import DrinkIndex from '../DrinkIndex/DrinkIndex';
import MysteryCocktailPage from '../MysteryCocktailPage/MysteryCocktailPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/mydrinks' element={<MyCocktailPage />} />
            <Route path='/drinks' element={<DrinkIndex />} />
            <Route path='/random' element={<MysteryCocktailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
