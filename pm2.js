console.log("Anurag welcome! World")



// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output:
// min = 1, max =  10000

let arr=[3,2,1,56,10000,167]
let note =Infinity

for(let i=0;i<=6;i++){
    if(arr[i]<note)
    note=arr[i]
}
console.log(note)


// let note1= -Infinity
// for(let j=0;j<=6;j++){
//    if(arr[j]>note1)
//    note1=arr[j]
// }
// console.log(note1)

// for( let i=1;i<=10;i++){
//     let bag = ""
//      for(let j=1;j<=10;j++){
//         bag+="6"+" "
//     }console.log(bag)
// }

for (let i=1;i<=5;i++){
    let bag=""
    for (let j=1;j<=5;j++){
      bag+=[j,i]
    }console.log(bag)
}




const date = new Date();
console.log(date[Symbol.toPrimitive]('string'));





