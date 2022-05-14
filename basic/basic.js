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
    // your code here!
    return `Hello, ${name}!`
}

const concat = (strings) => {
    // your code here
    let str = ''
    strings.forEach(s => {
        str += s
    });
    return str
}

const getType = (value) => {
    // your code here
    return typeof (value)
}

const max = (a, b) => {
    // your code here
    let m
    if (a > b) {
        m = a
    } else {
        m = b
    }
    return m
}

const max3 = (a, b, c) => {
    // your code here
    let m2
    if (a >= b) {
        if (a >= c) {
            m2 = a
        } else {
            m2 = c
        }
    } else {
        if (b >= c) {
            m2 = b
        } else {
            m2 = c
        }
    }
    return m2
}

const change = (N, C, K, L) => {
    // your code here
    let res
    let R = ((K * 100 + L) - (N * 100 + C)) / 100
    if (R >= 0) {
        res = "$" + R
    } else {
        res = "not enough"
    }
    return res
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
    }
    return res
}

const fizzbuzz = (N) => {
    // your code here
    let arr = []
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0) arr[i - 1] = "Fizz"
        else if (i % 5 === 0) arr[i - 1] = "Buzz"
        else arr.push(i.toString())
    }
    return arr.values()
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