//1.every():check if all elements in the array satisfy/all elements pass the condition, every() returns true otherwise, it returns false.
let arr=[22,23,21,24,22];
let result=arr.every(i=>i>21);
console.log(result);

let array=[{id:1,
            name:"shirt",
            price:550,
            stock:true,
           },
          {id:2,
           name:"watch",
           price:5500,
           stock:false,}]
           let c=array.every(item=>item.stock);
           console.log(c);

//2.fill():fills all or part of an array with a specific value
let a=[2024,2024,2024];
let b=a.fill(2025);
console.log(b);

let bs=[2020,2020,2020].fill(2024);
console.log(bs);

let x=[1,2,3,4,5].fill(6,3,4);
console.log(x);

//3.filter():creates a new array with only items that pass a condition
let y=[1,2,3,4,5].filter(z=> z%2==0);
console.log(y);

let product=[{
    id:1,
    name:"samsung j4+",
    price:20000,
},
{id:2,
    name:"samsung s24",
    price:30000,},
    {id:3,
    name:"samsung s35",
    price:80000,},].filter(items=>items.price<50000);
console.log(product);

//4.find():used to return the first element in an array that satisfies a provided testing function. If no elements pass the test, it returns undefined.
const numbers = [5, 12, 8, 130, 44].find(n=>n>10);
console.log(numbers); 
const users = [
    { id: 1, name: 'John',age:20},
    { id: 2, name: 'Jane',age:16 },
    { id: 3, name: 'Jack',age:17 }
  ];
   const user = users.find(user => user.name === 'Jane');
  console.log(user);  

  //5.flat():flatterns nested array into single a array
  const p=[1,2,3,[4,5]].flat()
  console.log(p);

  const p2=[1,2,[3,4,[5,6,[7,8]]]].flat(Infinity);
  console.log(p2);
 
  const p3=[1,2, ,4,5].flat();
  console.log(p3);

  //6.include():checks if an array contains a specific value returns true/false
  const num = [1, 2, 3, 4, 5];
 const r = num.includes(3, 3);//3,3-is index value
 console.log(r);  // Output: false

 const text = "Hello, world!".includes("Hello");
 console.log(text);

//7.map(): creates a new array by applying a provided function to each element of the original array. It does not modify the original array but returns a transformed version of it.
const d=[2,3,5,8].map(k=>k*2);
console.log(d);

const usr=[
    {id:1,name:"A", age:12},
    {id:2,name:"B",age:13},
    {id:3,name:"C",age:14}
].map(u=>u.name);
console.log(usr);

const e=["Hello" ,"World"];
const up=e.map(s=>s.toUpperCase());
console.log(up);
  
//8.sort():sorts the items in an array
const f=[1,20,10,50,100].sort();
console.log(f);

const n = [10, 5, 40, 25].sort((a,b)=> a-b);
console.log(n);//ascending 

const n2 = [10, 5, 40, 25].sort((a,b)=> b-a);
console.log(n2);//descending 

const g=["Ram","Raju","Vijay","Akhil"].sort();
console.log(g);

