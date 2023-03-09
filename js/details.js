let paramLocation = location.search;
let params = new URLSearchParams(paramLocation);
let id = params.get("id");


let events = data.events.find(event => event._id == id);
let asistenciaPast = "";

let currentDate = new Date(data.currentDate);
let eventDate = new Date(events.date);
if (eventDate < currentDate) {
    asistenciaPast = `<p class="detail-card card-text text-center">Assistance: ${events.assistance}</p>`;
}



let detailContainer = document.getElementById("details-container")
let detailCardOpen=  `
<div class="d-flex justify-content-center">
        <div class="card m-5 p-4 mb-6 border-danger-subtle align-content-center " >
          <div class="flex-row g-0 d-flex m-4" style="width: 50vw; height: 40vh;">
            <div class="col-md-4 d-flex" style="width: 35vw;">
              <img src="${events.image}" class="rounded float-start" alt="Gente en el cine" style="height: 13vw;">
            </div>
            <div class="m-2 d-flex">
              <div class="card-body">
                <h2 class="card-title  fs-1">${events.name}</h2>
                <p class="card-text text-end">${events.description}</p>
                <div>
                    <h4 class="">$ ${events.price}</h4>
                    ${asistenciaPast}
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    
        `;
        
detailContainer.innerHTML += detailCardOpen;




    //   <div class="card m-4" style="width: 50rem;">
    //         <img src="${events.image}" class="card-img-top h-img" alt="Image card of ${events.name}" title="${events.name}">
    //         <div class="card-body detail-card flex flex-wrap text-center">
    //             <h3 class="card-title text-center">${events.name}</h3>
    //             <p class="detail-card card-text text-center">${events.description}</p>
    //             <div class="price-card d-flex justify-content-between">
    //                 <h4 class="">$ ${events.price}</h4>
    //                 ${asistenciaPast}
    //             </div>
    //         </div>
    //     </div>