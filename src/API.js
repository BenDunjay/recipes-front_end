const baseUrl = "http://localhost:3000/api/v1/";
const baseUserRecipesUrl = (userId) => baseUrl + "users/" + userId;
// auth controller
const userLogin = baseUrl + "login";

// recipes controller
const allRecipes = baseUrl + "recipes";

// user_recipes controller
const allUserRecipes = (userId) => baseUserRecipesUrl(userId) + "/my_recipes";
const updateUserRecipe = (userId) =>
  baseUserRecipesUrl(userId) + "/users_recipes/";
// user controller

const get = (url) => {
  return fetch(url, {
    headers: { Authorization: localStorage.token },
  }).then((resp) => resp.json());
};

const getUsersRecipes = (user) => {
  return get(allUserRecipes(user.id));
};

export default { getUsersRecipes };
