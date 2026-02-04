import { useState } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
function App(){
    return (
      
      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
     </Routes>
     </BrowserRouter>
      <RecipeList />
      <AddRecipeForm />
      </div>
    )
} 



export default App
