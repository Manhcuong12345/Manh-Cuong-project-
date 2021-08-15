
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach,map,filter  ,sort,reduce

//1. forEach
for(let i=0; i<=companies.length; i++) {
    console.log(companies[i])
}
console.log("==================================")
companies.forEach(compare =>{
     console.log(compare.name)
})
// console.log("==================================")
//ES6
companies.forEach(function(companie){
    // console.log(companie.name)
})
ages.forEach(age =>{
    // console.log(age)
})

/////////////////////////////////////////////////////////////////////////
//2.Map
const Name = companies.map((names =>{
      return names.name + names.category
}))

// console.log(Name)
const birth = companies.map(birth =>{
    return `${birth.name} [${birth.end - birth.start}] ${birth.category}` 
})
// console.log(birth)
const numbers = ages.map(age =>{
    // return (age * 2)/2
    // return Math.sqrt(age)
    return Math.floor(age * 2,4)
})
const even = ages.map(ages => ages %2 == 0 ? 'chia het' : 'khong het')

// const evensssss = ages.map(function(ages){
//     if( ages %2 == 0){
//         return 'chia het'
//     }else{
//         return 'khong het'
//     }
// })
console.log(even)
// console.log(numbers)
///////////////////////////////////////////////////////////////////////////
//3. Filter

const checkCate = companies.filter(company => company.category === "Finance" && company.name === "Company One")
console.log(checkCate)

const Age = companies.filter(function(age){
   return age.start >= 1980 && age.start <=1999
})
const age = companies.filter(age => (age.end >= 1996 && age.end <=2007))
// console.log(Age)
// console.log(age)

const Even = ages.filter(age => age > 50)
// console.log(Even)
const evens = ages.filter(age =>{
    if(!age %2 ==0){
        return true;
    }else{
        return false;
    }
})
// console.log(evens)

///////////////////////////////////////////////////
//4.Sort

const checkYear = companies.sort(function(a,b){
    return b.start - a.start
})
// console.log(checkYear)
const checknum = ages.sort((a,b)=> a - b)
// console.log(checknum)

////////////////////////////////////////
//5. reduce
const Sum = ages.reduce((acc,cur)=> acc + cur,0)
const sum = ages.reduce(function(acc,cur){
     return acc + cur
},0)
const sums = ages.reduce((acc,cur)=>{
    return acc + cur
},0)

const sumStart = companies.reduce((acc,cur)=> acc + (cur.start - cur.end),0)
// console.log(sumStart)

let sumAge = 0
for(let i = 0; i < ages.length; i++){
    sumAge += ages[i]
}
// console.log(sumAge)
// console.log(Sum)
// console.log(sum)
// console.log(sums)