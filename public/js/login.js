const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit',e => {
    e.preventDefault();
    console.log('prevented default')
    const userObj = {
        email:document.querySelector('#loginEmail').value,
        password:document.querySelector('#loginPassword').value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{ 
            'Content-Type': 'application/json' 
        }
    }).then(res=>{
        if(res.ok){
            console.log("youre logged in")
            location.assign('/events')
            location.reload()
        } else {
            alert('incorrect login')
        }
        return res.json()
    }).then(data=>{
        console.log(data);
    })
})


  