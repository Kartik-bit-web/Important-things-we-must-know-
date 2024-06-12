// function naam(name){
//     if(name){
//         let n = `Welcome to Profile ${name} `
//         setTimeout(() => {
//             console.log(n)
//         }, 5000)
        
//     }else{
//         console.log('nahi Hua bhai')
//     }
// }

// function detail(name, age, gender, callback){
//     console.log(`Your data: name: ${name} age: ${age} gender: ${gender}`)
//     callback(name)
// }

// detail('kartik', 24, 'male', (result)=>{
//     naam(result);
// })


                                       /////////Promise////////////////



// const startPromise = new Promise((resolve, reject) => {
//     resolve(setTimeout(function(){console.log("I really Love MySelf Beleive it")}, 3000) )
//     reject('Error hai Bhai')
// })


// startPromise.then((result) => {
//     return result
// }).catch((err) => {
//     console.log('err')
// }).finally(console.log('Done'))



                                       /////////Async/Await////////////////

//same meaning as we going to do on async

// function myfunction(){
//     return Promise.resolve('Hello')
// }

// async function myfunction(){
//     let s = new Promise((resolve) => {
//         resolve(setTimeout(() => {console.log('I fuck you')}, 3000))
//     })

//     let value = await s;
//     console.log(value)

//     console.log('work after the await')
// }

// myfunction()

//same meaning as we going to do with Await:-

// myfunction().then((result) => {
//     console.log(result)
// })



/////////////////////////////////////////reverse String/Words////////////////////////////

// const string = "Welcome To This Javascript Guide!"


//First type Baics:-

// let perword = string.split("")
// let perwordreverce = perword.reverse()
// let mainString = perwordreverce.join('')

// let rAgain = mainString.split(" ");
// let reverseAgain = rAgain.reverse();
// console.log(reverseAgain.join(' '))


//Second type of simple:-
// let perwords = solution(string, '');
// let fulword = solution(perwords, ' ')

// function solution(string, saprate){
//     return string.split(saprate).reverse().join(saprate)
// }

// console.log(fulword)



/////////////////////Bind Function///////////////////

// function binding(){
//     return `First name is ${this.name} and last name is ${this.lastname}`
// }

// let names = {
//     name: 'Kartik',
//     lastname: 'Mehra'
// }

// console.log(binding.bind(names)())


/////////////////////////// Binary recursive /////////////////////////////////

function binary(n){
    if(n==1){
        return 1;
    }
    return binary(n -1)
}


// console.log(binary(5))



/////////////////////// Interpolation /////////////////////////////////////

function Interpolation(arr, x){
    let low = 0;
    let high = arr.length -1;

    while(low <= high && x >= arr[low] && x <= arr[high]){
        if(low === high){
            if(arr[low] === x){
                return arr[low]
            }
        }

        let pos = low + Math.floor((x-arr[low]) * ((high-low) / (arr[high]-arr[low])) )

        if (arr[pos] === x) return pos;

        if(arr[pos] < x){
            return pos + 1 ;
        }
        else{
            return pos -1
        }
    }

    return -1

}

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
let x = 42;

let value = Interpolation(arr, x);

console.log(`Position of Element: ${value}`)