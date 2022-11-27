const newEvent = document.querySelector(".addEvent");


newEvent.addEventListener("submit", async event => {
    event.preventDefault();

    const eventObj = {
        date: document.querySelector('#eventDate').value,
        title: document.querySelector('#eventTitle').value,
        description: document.querySelector('#eventDescription').value, 
        // eventURL 
    }
    console.log(JSON.stringify(eventObj))
    const res = await fetch("/api/events/", {
        method: "POST",
        body: JSON.stringify(eventObj),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    if (res.ok) {
        location.replace("/events");
    } else {
        alert("Failed to create event")
    }
})