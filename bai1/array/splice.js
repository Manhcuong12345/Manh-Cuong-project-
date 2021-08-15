//Splice muon thay the phan tu
//phan tu thu nhat la vi tri thay the, p tu thu 2 la so luong muon xoa tu vi tri thay the
const foods = ["Xoai","Mit","Cam","Du Du","Dua","Chuoi","Quuyt"]
console.log(foods)
foods.splice(3,1,"Dao")
// foods.splice(-3,3,"Oi")
console.log('-------------------------------------------------')
console.log(foods)


const deleteItem = foods.splice(2,foods.length - 2)
// console.log(deleteItem)

//Bài toán đánh giá món ăn nếu món ăn dở thì bị loại

const ListFoods = ["Com Tam","Ga chien","Mi Xao","Thit Nuong","Xuc Xich","Mi Tom"]
const disLiked = ["Ga chien","Mi Xao","Mi Tom"]
// console.log(ListFoods)
console.log('=========================')
//Muon danh ga dick lai ta duyet phan tu qua danh sach listFood
disLiked.forEach(item =>{
     let myItem = ListFoods.indexOf(item)
    //  console.log(myItem)
     if(myItem >= -1){
        ListFoods.splice(myItem,1)
     }
})
// console.log(ListFoods)

