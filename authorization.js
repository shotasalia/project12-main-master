
let submitForm=document.getElementById("submitForm");
submitForm.addEventListener("submit", async function(event){
    event.preventDefault()
    let username=document.getElementById("fusername")
    let password=document.getElementById("fpassword")
    let loader=document.getElementById("loading")
    // loader.style.display="block"
    try{
        let response=await fetch("./users.json");
        console.log(response)
        let users=await response.json()
        console.log(users)
        console.log(username.value)
        let check=users.find(user=> user.username===username.value && 
            user.password===password.value)
            console.log(check)
            if(check){
                localStorage.setItem('login', JSON.stringify(check))
                setTimeout(()=> window.location.href="index.html",)
            }
            else{
                alert("username is not correct")
            }

    }catch(error){
    console.log(error)}
    // finally{
    //     loader.style.display="none"
    // }
}

)

// ===========================================

