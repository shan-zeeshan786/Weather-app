const request=require('request')


  

// for processing of weather 


const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + address+ ".json?access_token=pk.eyJ1Ijoic2hhbi0tYWxhbSIsImEiOiJja3k2cnR4eGYwajJ2MndwZmJnNnl5enVlIn0.MXy9c--Kw3KjL4lniWXT9A"
    request({url,json:true},(error,response)=>{
   
      if(error){
          callback("Check your internet connection",undefined)
      }else if(response.body.features.length===0){
        callback('unable to fetch data',undefined)
      }else{
         callback(undefined,{
         longitude:response.body.features[0].center[0],
        latitude:response.body.features[0].center[1],
        location:response.body.features[0].place_name
         })
      }
    })
    
  
  }
   
module.exports=geocode
 





