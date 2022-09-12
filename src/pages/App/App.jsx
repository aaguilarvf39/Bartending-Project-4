import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyDrinksPage from '../MyDrinksPage/MyDrinksPage';
import NavBar from '../../components/NavBar/NavBar';
import DrinksList from '../DrinksList/DrinksList';
import RandomDrink from '../RandomDrink/RandomDrink';
import Home from '../Home/Home';
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
            <Route path='/' element={<Home/>} />
            <Route path='/mydrinks' element={<MyDrinksPage />} />
            <Route path='/drinks' element={<DrinksList />} />
            <Route path='/random' element={<RandomDrink />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
