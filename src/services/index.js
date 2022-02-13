export async function fetchIngredientFoods(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  const { meals } = data;
  return meals;
}
