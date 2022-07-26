const request=require("request")


const forecast=(longitude,latitude,callback)=>{
const url="http://api.weatherstack.com/current?access_key=1e90d42b77823e7080bb7724ae81ee3c&query="+latitude +"," + longitude;

request({url,json:true},(error,res)=>{
  if(error){
     callback('check your internet connection',undefined)
}else if(res.body.error){
    callback("unable to fetch data",undefined)
}else{
   callback(undefined,{
     forecast:res.body
    //  location: res.body.features[0].place_name
    //  .temperature
  })   
}
})

}
module.exports=forecast

  