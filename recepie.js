const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const recipeResults = document.querySelector('.recipe-results');

const recipesData = [
  { title: "Chicken Curry", description: "A delicious Indian curry recipe with chicken and vegetables.", url: "chicken-curry.html" },
  { title: "Spaghetti Bolognese", description: "A classic Italian pasta dish with minced beef and tomato sauce.", url: "spaghetti-bolognese.html" },
];

searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value.trim().toLowerCase();

  if (searchQuery === '') {
    console.warn('Please enter a search query');
    return;
  }
});

  const matchingRecipes = recipesData.filter(recipe => {
    const title = recipe.title.toLowerCase();
    const description = recipe.description.toLowerCase();
    return title.includes(searchQuery) || description.includes(searchQuery);
  });

  if (matchingRecipes.length > 0) {
    recipeResults.innerHTML = '';
    matchingRecipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      recipeCard.innerHTML = `
        <img src="recipe-image.jpg" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <a href="${recipe.url}">View Recipe</a>
      `;
      recipeResults.appendChild(recipeCard);
    });
  } else {
    recipeResults.textContent = 'No matching recipes found.';
  }