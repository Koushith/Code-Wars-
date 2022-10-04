/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */


const isValid =(s)=>{
    const hashMap={
        "(" : ")",
        "[":"]",
        "{":"}"
    }

    const stack =[]

    for(let ch of s){
        if(hashMap[ch]){
            stack.push(hashMap[ch])
        }
        else if (stack.length>0 && stack[stack.length-1]===ch){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length===0
}

