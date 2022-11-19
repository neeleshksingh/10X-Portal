let inp = document.getElementById('max-sum')
let rangeAvalue = document.getElementById('range-a-value')
let rangeBvalue = document.getElementById('range-b-value')
let sliderA = document.getElementById('a')
let sliderB = document.getElementById('b')
let sum = document.getElementById('sum')
console.log(sliderB.value)
sliderB.value = inp.value
sliderB.addEventListener('input', function(){
    rangeBvalue.innerHTML = sliderB.value
    if(sliderB.value <= 25){
        sliderA.setAttribute('max',25)
        sliderA.addEventListener('input', function(){
            rangeAvalue.innerHTML = sliderA.value
        })
}
else if(sliderB.value>25){
    sliderA.setAttribute('max', 0)
}
sum.innerHTML = `total sum is:-  ${parseInt(sliderA.value)+parseInt(sliderB.value)}`
})