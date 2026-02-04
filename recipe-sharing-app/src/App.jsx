import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
function App(){
    return (
      
      <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
      <RecipeList />
      <AddRecipeForm />
      </div>
    )
} 



export default App
