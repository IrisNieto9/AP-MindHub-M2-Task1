let htmlEvents = "";
for(let event of data.events){

    htmlEvents += `<div class="card">
    <img src="${event.image}" alt="">
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    </div>`;

    }

console.log(htmlEvents);