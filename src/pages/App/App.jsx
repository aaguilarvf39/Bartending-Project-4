import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyDrinksPage from '../MyDrinksPage/MyDrinksPage';
import NavBar from '../../components/NavBar/NavBar';
import DrinkIndex from '../DrinkIndex/DrinkIndex';
import GetRandomDrinkPage from '../GetRandomDrinkPage/GetRandomDrinkPage'
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
            <Route path='/mydrinks' element={<MyDrinksPage />} />
            <Route path='/drinks' element={<DrinkIndex />} />
            <Route path='/random' element={<GetRandomDrinkPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
