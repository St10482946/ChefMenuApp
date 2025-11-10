// /global/menu.js
let menu = [];

export const getMenu = () => menu;

export const setMenu = (newMenu) => {
  menu = newMenu;
};

export const addDish = (dish) => {
  menu.unshift(dish); // add to beginning
};

export const removeDish = (id) => {
  menu = menu.filter((dish) => dish.id !== id);
};