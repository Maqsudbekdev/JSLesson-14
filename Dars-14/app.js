// const products = [400,1000,50,70];
// const total = products.reduce((a,b) => a+b);
// console.log(total);

// 2
const products = [200,4899,299,100];
const total = products.reduce((a,b)=> a+b);
console.log(total);

const letters = ["First ", "Second ", "Third "];
const totalLetters = letters.reduce((n,m)=> n+m);
console.log(totalLetters);

const boughtProducts = [
    {
      productCost: 300,
      productName: "TV"
    },
    {
      productCost: 1000,
      productName: "iPhone 13 pro"
    },
    {
      productCost: 500,
      productName: "Apple Watch Series 7"
    }
  ]

  // const prices = boughtProducts.map(p=>p.productCost)
  // console.log(prices);
  // const totalPrice = prices.reduce((d,c)=> c+d)
  // console.log(totalPrice);


  // const prices =[]
  // boughtProducts.forEach(cost=>{
  //   prices.push(cost.productCost)
  // })
  // console.log(prices);
  // const totalMoney = prices.reduce((o,p)=>o+p);

//   const totalPrice = boughtProducts.map(cost=>cost.productCost)
//   console.log(totalPrice);

//   const overal = totalPrice.reduce((c,f)=> c+f)
//   console.log(overal);


// const prices = [];
// boughtProducts.forEach(g=>{
//     prices.push(g.productCost);
// });

// const totalMoney = prices.reduce((a,b)=>a+b)
// console.log(totalMoney);



// const totalPrice = boughtProducts.reduce((a,b)=>({productCost: a.productCost + b.productCost}))


const totalPrice = boughtProducts.reduce((k,l)=>({productCost: k.productCost + l.productCost}));
console.log(totalPrice);
// console.log(totalPrice);



// SOME ========> true / false

// const snumbers = [6,8,9,10,11];
// const result = snumbers.some(a=>a>10); // bittasi
// console.log(result);


const snumbers = [66,7,22,8,4,0];
const result = snumbers.some(a=>a>10)
console.log(result);

const enums = [66,7,22,8,4,0];
const resulte = enums.every(k=>k>10)
console.log(resulte);
// EVERY ========> 

// const enumbers = [9,10,1,6,3];
// const resulte = enumbers.every(c=>c<0); // hammasi

// console.log(resulte);




// const arr2 = [5,3,2,10,9 , "te"]
// const natija = arr2.every(a=> typeof a === "number");
// if (natija === true) {
//     const two = arr2.map(b=>b*2);
//     console.log(two);
// }
// else{
//     console.log("Hmmasi raqam bo'lishi kerak");
// }

const arr3 = [1,2,3,4,5,66,7,8,9,0,10];
const natija = arr3.every(o=> typeof o === "number" );
if (natija === true) {
  const twoTimes = arr3.map(a=>a*2)
  console.log(twoTimes);
  
}
else{
  console.error("Hammasi raqam emas!");
}
// const k = [7,2,5,7,43,223,4]
// const teskari = k.reverse();
// console.log(teskari);



const p = [ 1,2,3,4,5,6,7,8,9]
const teskari = p.reverse();
console.log(teskari);


// const allnums = [5, 10, 30, 50, 90, 100, 200, 10, 3, 2000, 202, 21,32]

 const allnumbrs = [182,27,28,10,199,192,190,45,678]
 const sorted = allnumbrs.sort((q,w)=>w-q);
 console.log(sorted[0]);
// const  biggest = allnums.sort((t,r) => r - t);
// console.log(biggest[0]);

// swich if for math 

// const allnums = [5, 10, 30, -30, 50, 90, 100, 200, -2, 10, 3, 2000, -3, 202, 21, 32];

// const filtered = allnums.filter(v=>v<0)
// console.log(filtered);
// const kvadrat = filtered.map(m=>m*m).map(l=>l.toString()) 
// console.log(kvadrat);

//  p=>'${p*p}'


const allnums = [5, 10, 30, -30, 50, 90, 100, 200, -2, 10, 3, 2000, -3, 202, 21, 32];
const filtered = allnums.filter(a=>a<0);
console.log(filtered);
const kvadrat = filtered.map(p=>p*p).map(o=>o.toString())
console.log(kvadrat);







