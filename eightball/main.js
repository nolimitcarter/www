
let q = document.querySelector('#question')
let a = document.querySelector('#answer')

/*
// old school functions
function greet(name) {
  console.log(`Hello ${name}`)
}
*/

// var name

let name = "Rob"
let last = 'Muhlestein'
let likesPie = true
let score = 10
let rate = 2.38
let cube = x => x**3
const PI = 3.1

/*
function cube(x) {
  return x**3
}

let cube = (x) => {
  return x**e
}
*/


let greet = name => console.log(`Hello ${name}`)

setTimeout(() => {
  greet = name => console.log(`Hey there ${name}`)
}, 5000)

q.onenter(e=>console.log(e))