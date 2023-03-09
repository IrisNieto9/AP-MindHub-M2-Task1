let callEvents = (data)=>{

let cardEvents = document.querySelector("section.seccard")


    cardEvents.innerHTML = ''
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
            <a href="./Details.html?id=${event._id}" class="vermas-button rounded text-white border-0 p-2">ver más...
            </a>
        </div>
    </div>`;
    }
}
callEvents(data) 



// let callEvents = (data)=>{

//     let cardEvents = document.querySelector("section.section-cards")


//     cardEvents.innerHTML = ''

    
//     for (let event of data.events){
//             cardEvents.innerHTML += `
//             <div class="card m-4" style="width: 23rem;">
//                 <img src="${event.image}" class="card-img-top h-img" alt="Image card of ${event.name}" title="${event.name}">
//                 <div class="card-body detail-card flex flex-wrap text-center">
//                     <h3 class="card-title text-center">${event.name}</h3>
//                     <p class="detail-card card-text text-center">${event.description}</p>
//                     <div class="price-card d-flex justify-content-between">
//                         <h4 class="">$ ${event.price}</h4>
//                         <a href="../pages/details.html?id=${event._id}" class="vermas-button rounded text-white border-0 p-2">Ver más..</a>
//                     </div>
//                 </div>
//             </div>
//             `;
//         }
// }

// callEvents(data)