fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((response)=>{

    let callEvents = (data)=>{

        let cardEvents = document.querySelector("section.secard")


        cardEvents.innerHTML = '';
        for(let event of data.events){
            cardEvents.innerHTML+=`
            <div class="card bg-body-tertiary rounded border-danger-subtle m-2" style="width: 20rem;">
                <div class="m-2">
                    <img src="${event.image}" alt="Cinema card" class="card-img-top rounded-3 h-img">
                </div>
                <div class="detail-card text-center m-3">
                    <h3>${event.name}</h3>
                    <p>${event.description}</p>
                </div>
                <div class="price-card d-flex justify-content-between m-4">
                    <h4>$ ${event.price}</h4> 
                    <a href="./Details.html?id=${event._id}" class="vermas-button rounded text-white border-0 p-2">ver más...
                    </a>
                </div>
            </div>`;
        }
    }
    callEvents(response)
})