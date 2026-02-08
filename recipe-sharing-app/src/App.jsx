import { useState } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
function App(){
    return (
      
      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
     </Routes>
     </BrowserRouter>
      <SearchBar />
      <RecipeList />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />
      </div>
    )
} 



export default App
