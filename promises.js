 const promisesOne = new Promise(function(resolve, reject) {
    // do an anisk task
    // DB calls , cryptography etc
    setTimeout(function() {
        console.log('Async task is  complete');
        resolve()

    }, 1000)
});

promisesOne.then(function() {
    console.log('promisse consume')
}); 

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 is complete');
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolved")
});

const PromiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({uername: "chai", email:"chai@example.com"})
    }, 1000);

})

PromiseThree.then(function(user) {
    console.log(user)
});

const PromiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if ( !error)
        {
            resolve({username: "ashish", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
        
    } ,1000)
});

 PromiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);

}).catch(function(error) {
    console.log(error);
    
}).finally(()=>  {
    console.log(" promise is resolved or rejected")
});

// promise 5

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if ( !error)
        {
            resolve({username: "aryan", password:"123"})
        }else{
            reject('khele ga free fire')
        }
        
    } ,1000)
});

async function consumePromiseFive (){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()

// in yry catch form
/*async function getallusers() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    }catch (error) {
        console.log("E:",error);
    }
}
getallusers()
*/
 fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>
{  
    return response.json()
})
.then((data) => 
    {console.log(data)})
.catch((error) => console.log(error)
)