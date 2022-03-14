let sentToAirport = false;


let p = new Promise(function(resolve, reject){
    if(sentToAirport){
        //console.log("sent to airport")
        resolve("from resolve(); order confirm, sent to airport")
    }else{
        reject("from reject(); order canceled ")
    }

}) 

p
.then(function(message){ 
    console.log(`${message}-promise resolve`)
})
.catch(function(message){
    console.log(`${message}-promise reject`)
})

