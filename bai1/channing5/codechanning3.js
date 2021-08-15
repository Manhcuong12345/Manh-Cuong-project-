const food = "Hamburger"
const FoodPrice = food === "Hamburger" ? 8 : food === "Lasagna" ? 15 : 20
// console.log(food,FoodPrice)
const beverage = "Water"
const foodBeverge = beverage === "Water" ? 0 : beverage === "Soda" ? 3 : 5
// console.log(beverage,foodBeverge)
const Subtotal = FoodPrice + foodBeverge
// console.log(Subtotal)
const tax = 0.08 * Subtotal // 8% => .08 || 0.08
// console.log(tax)
const Service = "good"
const Tip = Service === "bad" ? .05 * Subtotal : Service === "good" ? .15 * Subtotal : .2 * Subtotal
const Bill = Subtotal + tax + Tip
// console.log(Bill)

console.log(
    `Food:${food}: $${FoodPrice}
     Beverage:${beverage}: $${foodBeverge}
     Subtotal:${Subtotal}
     Tax:${tax}
     Tip:${Tip}
     Bill:${Bill}`)