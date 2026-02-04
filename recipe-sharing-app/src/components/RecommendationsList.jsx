import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function RecommendationsList() {
  const recommendations = useRecipeStore(
    (state) => state.recommendedRecipes()
  );
  const favorites = useRecipeStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <p>
        Add some recipes to favorites to get
        personalized recommendations 🙂
      </p>
    );
  }

  if (recommendations.length === 0) {
    return <p>No recommendations available right now.</p>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>Category: {recipe.category}</p>

          <Link to={`/recipes/${recipe.id}`}>
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecommendationsList;
