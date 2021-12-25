const number = null
const float = null
const str = null
const bool = null
const undef = null
const nullVar = null

const square = (n) => {
    // your code here
    return n * n
}

const hello = (name) => {
    // your code here
    return "Hello, " + name + "!"
}

const concat = (strings) => {
    // your code here
    return strings.join()
}

const getType = (value) => {
    // your code here
    typeof value
}

const max = (a, b) => {
    // your code here
    if (a > b ) {
        return a
    } else {
        return b
    }
}

const max3 = (a, b, c) => {
    // your code here
    if (a >= b) {
        if (a >= c) {
            return a
        } else {
            return c
        }
    } else {
        if (b >= c) {
            return b
        } else {
            return c
        }
    }
}

const change = (N, C, K, L) => {
    // your code here
    R = (K * 100 + L) - (N * 100 + C)
    if (R >= 0) {
        return "$" + R
    } else {
        return "not enough"
    }
}

const triangle = (height) => {
    // your code here
    for (let i = 1; i <= height; i++) {
        let str = ""
        for (let j = 1; j <= i; j ++) {
            str += "#"
        }
        console.log(str)
    }
    console.log()
}

const fizzbuzz = (N) => {
    // your code here
    let arr = []
    for (let i = 1; i < N; i++) {
        if (i % 3 === 0) {
            arr.push("Fizz")
        }
        else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    }
    return arr
}

const countChar = (str, char) => {
    // your code here
    let c = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            c++
        }
    }
    return c
}

// 🚫 don't edit this export
module.exports = {
    number, float, str, bool, undef, nullVar,
    square,
    hello,
    concat,
    getType,
    max,
    max3,
    change,
    triangle,
    fizzbuzz,
    countChar
}
