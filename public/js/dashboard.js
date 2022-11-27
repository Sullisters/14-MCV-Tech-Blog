const eventForm = document.querySelector("#newEventBtn");
eventForm.addEventListener("submit",e=>{
    e.preventDefault();
    const projObj = {
        date:document.querySelector("#eventDate").value,
        description:document.querySelector("#eventDescription").value,
    }

    fetch("/api/events",{
        method:"POST",
        body:JSON.stringify(projObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})