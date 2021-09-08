// sum [1,4,6,3]

const arr = [1,4,6,3]

function sumArray(myArray) {

    let sum =0

    for(let index = 0; index < myArray.length; index++) {

        sum = sum + myArray[index]
    }
    return sum
}
const sum = sumArray(arr)
console.log(sum)



// average grade
const arr = [80,55,90,100]

function averageArray(myArray) {

    let sum =0

    for(let index = 0; index < myArray.length; index++) {

        sum = sum + myArray[index]
    }
    return sum / myArray.length
}
const sum = averageArray(arr)
console.log(sum)

// another option
const arr2 = [80,55,90,100]

function averageArray2(myArray) {
    return sumArray(myArray) / myArray.length
}
const sum2 = averageArray2(arr2)
console.log(sum2)


// sum + num
const arr = [1,4,6,3]

function sumBiggerThanNum(myArray, num) {

    let sum =0

    for(let index = 0; index < myArray.length; index++) {
        if(myArray[index] > num){
            sum = sum + myArray[index]
        }
        
    }
    return sum
}
const sum = sumBiggerThanNum(arr, 3)
console.log(sum)

// count how many times 7 apeears
const arr = [3,6,7,55,7,9,7,4,1]

function countNumInstances(myArray, num) {

    let numsCount = 0

    for(let index = 0; index < myArray.length; index++) {
        if(myArray[index] === num){
    
            // numsCount = numsCount + 1
            numsCount++
        }
        
    }
    return numsCount
}
const count = countNumInstances(arr, 7)
console.log(count)

// check numbers of even
const arr = [9,2,13,7,6,3,4]

function evenNumbers(myArray) {

    let newArray = []

    for(let index = 0; index < myArray.length; index++) {
        if(myArray[index] % 2 === 0){

            newArray.push(myArray[index])
    

        }
        
    }
    return newArray
}
const count = evenNumbers(arr)
console.log(count)


// arrays & objects
const arr = [
    {firstName: 'Eli', grades: [90,80,60]}, 
    {firstName: 'Evyatar', grades: [95, 100, 78]}
]

function calcStudendsAverageGrades(myArray) {

    let newArray = []

    for(let index = 0; index < myArray.length; index++) {
        let sum = 0
        let grades = myArray[index].grades

        for(let index = 0; index < grades.length; index++) {
    
            sum = sum + grades[index]
        }
        let average = sum / grades.length

        newArray.push({firstName: myArray[index].firstName , average: average})
        
    }
    return newArray
}
const objectAverages = calcStudendsAverageGrades(arr)
console.log(objectAverages)



