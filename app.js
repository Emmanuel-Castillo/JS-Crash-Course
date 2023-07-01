// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email")
// console.log(emailRef)

// 1. Then: runs in background
// One promise to fetch data from backend (api response) and another to make data compatible with frontend

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//   response.json().then(data => {
//     console.log(data)
//     emailRef.innerHTML = data.email;
//   })
// })

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//   return response.json()
// }).then(data => {
//   console.log(data)
//   emailRef.innerHTML = data.email
// })

// 2. Async/Await: runs line by line

// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//   const data = await response.json()
//   console.log(data)
// }

// main()

//practice

const statusRef = document.querySelector('.status')
//Creating a promise

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP")
  })
}

//1. Then
// getSubscriptionStatus().then(response => console.log(response))

//2. Async/Await 
async function main1() {
  const status = await getSubscriptionStatus()
  console.log(status)
  statusRef.innerHTML = status
}

//practice
const videoRef = document.querySelector('.video')

function getVideo(getSubscriptionStatus){
  return new Promise((resolve,reject) => {
    if (getSubscriptionStatus === "VIP")
      resolve("show video")
    else if (getSubscriptionStatus === "FREE")
      resolve("show trailer")
    else 
      reject("no video")
  })
}

async function main2() {
  main1()
  try{
    const result = await getVideo("VIP")
    console.log(result)
    videoRef.innerHTML = result
  }
  catch(e){
    console.log(e)
    videoRef.innerHTML = e
  }
}

main2()
