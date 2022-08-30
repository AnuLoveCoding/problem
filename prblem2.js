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


let note1= -Infinity
for(let j=0;j<=6;j++){
   if(arr[j]>note1)
   note1=arr[j]
}
console.log(note1)

console.log("Hello world!")
console.log("Anurag")
console.log("pagal World!")
console.log("Zila School")
console.log("pagal world 2")
