async function getData () {
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then((response)=>{
 
    
    let paramLocation = location.search;
    let params = new URLSearchParams(paramLocation);
    let id = params.get("id");


    let events = response.events.find(event => event._id == id);
    let asistenciaPast = "";

    let currentDate = new Date(response.currentDate);
    let eventDate = new Date(events.date);
    if (eventDate < currentDate) {
        asistenciaPast = `<p class="detail-card card-text text-center">Assistance: ${events.assistance}</p>`;
    }



    let detailContainer = document.getElementById("details-container")

    let detailCardOpen=  `
      <div class="card m-5 p-4 mb-6 border-danger-subtle align-content-center">
          <div class="flex-row g-0 d-flex m-4" style="width: 50vw; height: 40vh;">
            <div class="col-md-4 d-flex" style="width: 35vw;">
              <img src="${events.image}" class="rounded float-start" alt="Gente en el cine" style="height: 13vw;">
            </div>
            <div class="m-2 d-flex">
              <div class="card-body">
                <h3 class="card-title  fs-1">${events.name}</h3>
                <p class="card-text text-end">${events.description}</p>
                <p class="card-text text-end">$ ${events.price}</p>
                <p class="card-text text-end">${asistenciaPast}</p>
              </div>
            </div>
          </div>
        </div>`;
            
    detailContainer.innerHTML += detailCardOpen;

})
}
getData()

    