const path=require("path")
const express=require("express")
const hbs=require("hbs")
const forecast=require("./utilis/forecast")
const geocode=require("./utilis/geocode")


const app=express()





//To setup path of different items
const publicDirectoryPath=path.join(__dirname,'../public')
const viewDirectory=path.join(__dirname,'../templates/views')
const partialsDirectory=path.join(__dirname,"../templates/partials")


//To set express values
app.set('view engine','hbs')
app.set('views',viewDirectory)
hbs.registerPartials(partialsDirectory)

app.use(express.static(publicDirectoryPath))

// const middle=(req,res,next)=>{
//     console.log("hello");               //MIddleware
//     res.send("NOT wokring")
//     next();
// }
app.get('/',(req,res)=>{
res.render('index',{
    title:"Weather-App"
})
})

// app.get('/about',middle,(req,res)=>{
    app.get('/about',(req,res)=>{
    res.render('About',{
        title:"About this website designer"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Send us any kind of doubt or suggestion"
    })
})
  
app.get('/login',(req,res)=>{
        res.render('Login',{
            title:"Login Page"
        })
}) 

app.get('/weather',(req,res)=>{
    // if(!req.query.place){
    //     return res.send({
    //         Error:"you must provide an address"
    //     })
    // }

    // res.send({
    //     forecast:"It's snowing",
    //     Place:"New Delhi",
    //     address:req.query.place
    // })
    const address=req.query.place
if(!address){
     res.send({
        Error:"please! provide address"
    })
}else{

geocode(address,(error,data)=>{//callback1
  if(error){
    return res.send({Error:error})
   }
   //callback chaining
  forecast(data.longitude,data.latitude,(error,weather)=>{//callback2
   if(error){
       return res.send({Error: error})
   }
   console.log(weather)
    res.send({
        Latitude:data.latitude,
        Data: weather,
        Address:weather
    })
    })

})
}

})
app.get('*',(req,res)=>{
      res.render('404',{
        msg:"ERROR!"
      })
})
        
    











app.listen(3000,()=>{
    console.log("connected")
})