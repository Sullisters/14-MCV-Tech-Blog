
const signupForm = document.querySelector("#signup-form");
const data = undefined;

signupForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("prevent default")

    const userObj = {
        name: document.querySelector("#signupName").value,
        email: document.querySelector("#signupEmail").value,
        password : document.querySelector("#signupPassword").value
    }

    console.log(JSON.stringify(userObj))

    fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type" : "application/json"
        }
        
    }).then(res=>{
        if(res.ok){
           location.assign('/login')
        } else {
            alert("trumpet sound")
        }
    })
})