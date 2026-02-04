import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "../components/DeleteRecipeButton";
import EditRecipeForm from "../components/EditRecipeForm";

function RecipeDetails() {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}

export default RecipeDetails;
