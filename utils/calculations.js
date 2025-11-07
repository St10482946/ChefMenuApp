export function calculateAverages(menuItems) {
  const courses = ["Starter", "Main", "Dessert", "Beverage"];
  const result = { Starter: "—", Main: "—", Dessert: "—", Beverage: "—" };

  courses.forEach(c => {
    const items = menuItems.filter(i => i.course === c);
    if (items.length === 0) {
      result[c] = "—";
    } else {
      const avg = items.reduce((s, it) => s + (Number(it.price) || 0), 0) / items.length;
      result[c] = `R${avg.toFixed(2)}`;
    }
  });

  return result;
}