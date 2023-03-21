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
        asistenciaPast = `<p class="detail-card card-text text-center"><b>Assistance:</b> ${events.assistance}</p>`;
    }else if (eventDate > currentDate) {
      asistenciaPast = `<p><b>Estimate:</b> ${events.estimate}</p>`;
    }



    let detailContainer = document.getElementById("details-container")

    let detailCardOpen = `
      <div class="card m-5 p-4 d-flex flex-column border-danger-subtle details-img-container" style="width: 50rem;">
        

          <img src="${events.image}" class="d-flex rounded details-img" alt="Image card of ${events.name}">
          
          <div class="card-body">
            <h3 class="card-title fs-1">${events.name}</h3>
            <p>${events.description}</p>
            <p><b>Place:</b> ${events.place}</p>
            <p><b>Capacity:</b> ${events.capacity}</p>
            <p>${asistenciaPast}</p>
            <h4 class="fs-6"><b>Date:</b> ${events.date}</h4>
            <h4 class="card-text fs-3 m-3"><b>$ ${events.price}</b></h4>
          </div>
          
        
      </div>`;
            
    detailContainer.innerHTML += detailCardOpen;

})
}
getData()

    