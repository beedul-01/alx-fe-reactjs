import create  from 'zustand';


const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) =>
  set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      favorites: state.favorites.filter(
        (fav) => fav.id !== id
      ),
    })),

     favorites: state.favorites.map((fav) =>
        fav.id === updatedRecipe.id
          ? updatedRecipe
          : fav
      ),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

   setSearchTerm: (term) =>
    set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  },
   addToFavorites: (recipe) =>
    set((state) => ({
      favorites: state.favorites.some(
        (fav) => fav.id === recipe.id
      )
        ? state.favorites
        : [...state.favorites, recipe],
    })),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (fav) => fav.id !== id
      ),
    })),

  isFavorite: (id) => {
    const { favorites } = get();
    return favorites.some((fav) => fav.id === id);
  },

  recommendedRecipes: () => {
    const { recipes, favorites } = get();

    if (favorites.length === 0) return [];

    const favoriteCategories = favorites.map(
      (fav) => fav.category
    );

    return recipes.filter(
      (recipe) =>
        favoriteCategories.includes(recipe.category) &&
        !favorites.some((fav) => fav.id === recipe.id)
    );
  },

}));

export default useRecipeStore;