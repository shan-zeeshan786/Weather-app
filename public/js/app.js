 console.log("loaded")
// const url= "http://localhost:3000/weather?place=@##"
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//          console.log(data) 
//     })
// })

const weatherForm=document.querySelector('form')
console.log(weatherForm)
const search=document.querySelector('input')
console.log(search)

const messageOne=document.querySelector('#message-1')
console.log(messageOne)
const messageTwo=document.querySelector('#message-2')





weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
     
    const location=search.value
 
    if(!location){
     return   alert("Please! Enter address")
    }
    messageOne.textContent='Loading...'
    messageTwo.textContent = " "
    // const url= "http://localhost:3000/weather?place="+location
    // fetch('http://localhost:3000/weather?place='+location).then((response)=>{
    //     response.json().then((data)=>{
    //       if(data.error!=undefined){
    //         console.log(data.error)
    //       } else{
    //         console.log(data.location)
    //         console.log(data.forecast)
    //       }
    //     })
    // })
    const url= "http://localhost:3000/weather?place="+location
fetch(url).then((response)=>{
    response.json().then((detail)=>{
         if(detail.error){
          messageOne.textContent=detail.error             
         console.log(detail.error)
                
                            
            
         }else{
            messageOne.textContent="Location : "+detail.Data.forecast.location.name
            messageTwo.textContent="Temperature (°C) : " +detail.Data.forecast.current.temperature
            console.log(detail)
            // console.log(detail.Address)
         }
    })
})
})