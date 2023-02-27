let upcomingevents = "";
for(let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);

    if (eventDate > currentDate) {
        // console.log("evento futuro")
        upcomingevents+=`<div class="card d-flex justify-content-center bg-body-tertiary rounded border-danger-subtle">
        <div class="image-card m-2">
            <img src="${event.image}" alt="Cinema card" class="rounded-3">
        </div>
        <div class="detail-card text-center m-3">
            <h3>${event.name}</h3>
            <p>${event.description}</p>
        </div>
        <div class="price-card d-flex justify-content-between m-4">
            <h4>$ ${event.price}</h4>
            <a href="./Details.html" class="vermas-button rounded text-white border-0 p-2">ver más...
            </a>
        </div>
    </div>`;
    } else {
        // console.log("evento pasado")
    }
    
}
document.querySelector('section.secard').innerHTML += upcomingevents;

