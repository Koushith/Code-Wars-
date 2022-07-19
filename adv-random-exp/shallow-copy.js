// let obj = {
//     a: "a",

//     b: "b",

//     c: "c"
// }


// let obj2 = obj;

// console.log("obj", obj)
// console.log("obj2", obj2)

// // use object,assign method- if you want to copy not reference.

// let clonned = Object.assign({}, obj)


let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try to copy me!!!"
    }
}

let clone = Object.assign({}, obj)
let clone2 = { ...obj }

console.log(obj === clone)

obj.c.deep = "hahahaah"

console.log("after modify,", obj)

console.log("clonned", clone)



console.log(obj === clone)