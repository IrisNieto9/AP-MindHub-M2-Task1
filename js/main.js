let cardEvents = "";
for(let event of data.events){
        
    cardEvents+=`<div class="card d-flex justify-content-center bg-body-tertiary rounded border-danger-subtle">
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
}

document.querySelector('section.seccard').innerHTML += cardEvents;



