//Method Concat
const evenNumber = [0,2,4,6,8]
const oddNumber = [1,3,5,7,9]
// const allNumber = evenNumber.concat(oddNumber)
const allNumber = [].concat(evenNumber,oddNumber)

// console.log(allNumber)
////////////////////////////////////
const array = [2,4,5,7,6]
let array1 = array
array1 = array.concat()
//gan
array[0] = "Day la so"
console.log(array)
////////////////////////////////////

//Object
class Items {
    constructor(item, price, stock) {
      this.item = item;
      this.price = price;
      this.stock = stock;
    }
    description() {
      return `${this.item} costs $${this.price}. We currently have ${this.stock} in our store.`;
    }
  }
  const groceryItems = [
    new Items("Bread", 3, 30),
    new Items("Milk", 4, 50),
    new Items("Steak", 5, 10),
    new Items("Rice", 1, 100),
  ];
  const generalItems = [
    new Items("Broom", 10, 3),
    new Items("Microwave", 50, 2),
    new Items("TV", 1000, 1),
    new Items("Paper", 2, 300),
  ];

  const allObject = [].concat(generalItems,groceryItems)
  const all = groceryItems.concat(groceryItems)
  //dung vong lap
  allObject.forEach((Item)=>{
    // console.log(Item.description())
  })
  // console.log(allObject)
  // console.log(all)

  ///////////////////////////////////////////////////////////////////////
  //$$$$$: push,unshift,shift,pop
  
  const playList = [["Dom","Cuong"],["Mommy","Trung"],["Heart Break","Minh"],["Hello Boy","Duc"],["Tell Me Why","Tai"]];

  function getSong(song){
    if(song.length === 0){
        return `Your playlist is empty!`
    }else{
       const mucis = song.shift()
       return `You current song is ${mucis[0]} va duoc trinh bay boi ${mucis[1]}`
    }
  }
  while(playList.length !== 0){
  // console.log(getSong(playList))
  }
  