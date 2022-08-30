import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage';
import BookContainer from './components/BookContainer';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<BookContainer />} />
          <Route path="Categories" element={<CategoriesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
