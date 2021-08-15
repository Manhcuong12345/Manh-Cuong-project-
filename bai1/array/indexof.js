
// vi du mua hàng trong cua hang
const storeItems = ["Thit","Ca","Rau","Trai Cay","Ga","Heo","Chim","Rau Xanh","Khoai tay"]
const itemPrice = [2,3,5,6,2,2,10,6,3]
//danh mục sản phẩm mua
const groceryList = ['Ca','Thit','Banana','Ga','Heo','Chim','Trai Cay','Buoi','Khoai tays']

//Bây giờ ta muốn chọn mặt hàng sản phẩm trong cửa hàng

function getItem(storeItems,itemPrice,groceryList){
    if(groceryList.length !==0 ){
        //ta muốn chọn 1 sản phẩm trong danh mục mà trong cửa hàng có sản phẩm đó
        const myItems = groceryList.pop()
        //check xem tìm kiếm trong cửa hàng có sản phẩm cá hay không
        const storeItem = storeItems.indexOf(myItems)
        console.log(storeItem)
        const itemPrices = itemPrice[storeItem]
        if(storeItem !== -1){
            return `Sản phẩm ${myItems} có giá là $${itemPrices} đã được cho vào giỏ`
        }else{
            return `Xin lỗi, sản phẩm ${myItems} không có trong cửa hàng`
        }
    }
}
 
while(groceryList.length !==0 ){
    console.log(getItem(storeItems,itemPrice,groceryList))
}
