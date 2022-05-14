const number = 12
const float = 3.14
const str = "Code"
const bool = true
const undef = undefined
const nullVar = null

const square = (n) => {
    // your code here!
    return n * n
}

const hello = (name) => {
    const res = `Hello, ${name}`;
    return res;
}

const concat = (strings) => {
    // your code here
    return strings.join()
}

const getType = (value) => {
    // your code here
    typeof (value)
}

const max = (a, b) => {
    // your code here
    if (a > b) {
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
    let R = ((K * 100 + L) - (N * 100 + C)) / 100
    if (R >= 0) {
        return "$" + R
    } else {
        return "not enough"
    }
}

const triangle = (height) => {
    // your code here
    let res = ""
    for (let i = 1; i <= height; i++) {
        let str = ""
        for (let j = 1; j <= i; j++) {
            str += "#"
        }
        res += str + "\n"
        // console.log(str)
    }
    return res
    // console.log()
}

const fizzbuzz = (N) => {
    // your code here
    let arr = []
    for (let i = 1; i < N; i++) {
        if (i % 5 === 0 && i % 3 !== 0) {
            arr.push("Buzz")
        } else if (i % 3 === 0) {
            arr.push("Fizz")
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
        if (char == null) {
            if (str[i] === 'C') {
                c++
            }
        }
        if (str[i] === char) {
            c++
        }
    }
    return c
}

// 🚫 don't edit this export
module.exports = {
    number,
    float,
    str,
    bool,
    undef,
    nullVar,
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