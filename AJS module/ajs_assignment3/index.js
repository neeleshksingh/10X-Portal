function reverse(str) {
    let words = str.split(' ')
    let ans = []
    for (let i = 0; i < words.length; i++) {
        ans.push(words[i].split('').reverse().join(''))
    }
    return ans.join(' ')
}
let str = 'Welcome to this Javascript Guide!'
console.log(reverse(str))