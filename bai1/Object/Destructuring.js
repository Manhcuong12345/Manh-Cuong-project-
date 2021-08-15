
const mall = {
    mallName: "Mall of Irvine",
    address: {
      street: "555 Main Street",
      city: "Irvine",
      state: "CA",
      zip: "92620"
    },
    anchorStores: ["Macy's", "Sears", "Dick's Sporting Goods", "JCPenny"],
    fastFood: ["Panda Express 🐥", "Subway 🥪", "Burger King 🍔"],
    restaurants: ["Red Lobster", "Cheesecake Factory", "California Pizza Kitchen"],
  };

  const {mallName:localMall,anchorStores:localAnc,fastFood:foodFat,restaurants:restaurantsAdress,
         address:{street:addressStress,city:CityAd,state:State,zip:ZipCode}} = mall
  
  foodFat.forEach(food =>{
      console.log(`${food} o trong ${restaurantsAdress} o dia chi ${addressStress} trong ${CityAd} va ${State} ${ZipCode}`)
  })
  ////////////////////////////////////////////////////////////////////////////////
  // const localMall = mall.mallName
  // const localanch = mall.anchorStores
  
  //Gan phan tu thanh mot object phai trung voi name object
  const {mallName,anchorStores} = mall
  // console.log(mallName)
  // console.log(anchorStores)
  
  //thay doi bien khong can giong nhau
  const {mallName:localM,anchorStores:ancho,...rest} = mall
  // console.log(localM)
  // console.log(ancho)
  // console.log(rest)
  // console.log(localanch)
  // console.log(localMall)

  