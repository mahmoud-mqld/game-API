"use strict";

// let url = `https://www.freetogame.com/api/games?category=shooter`

// let myhttp = new XMLHttpRequest();
// myhttp.open("GET", url)
// myhttp.send()

// myhttp.addEventListener("readystatechange",function () {
//     if (this.readyState==4 && this.status==200) {
//         console.log(myhttp.response);

//     }

// })

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === 4) {
// 		console.log(JSON.parse(this.responseText));
// 	}
// });

// xhr.open('GET', 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc');
// xhr.setRequestHeader('X-RapidAPI-Key', '4380213c57msh6a89f7bb7c992c0p13e23fjsn2cbd61d5da8d');
// xhr.setRequestHeader('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');

// xhr.send(data);

const card = document.getElementById("card");
const modal = document.querySelector("dialog")
const closeBtn = document.querySelector("button#close")

let data = ``;
const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4380213c57msh6a89f7bb7c992c0p13e23fjsn2cbd61d5da8d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

async function get() {
  let response = await fetch(url, options);
  let result = await response.text();

  let data = JSON.parse(result);
  console.log(data);
  display(data);
  card.addEventListener("click", ()=>{console.log("hi");})
}  


get();
function display(data) {
  for (let i = 0; i < data.length; i++) {
	
    let catoona = `
  
	<div onclick="modal.showModal()" id="card" class="card col-md-3  ">
	<div class="card-body d-flex flex-column justify-content-between">
			  <div>			  
			 
			  <p class="card-header bg-dark text-bg-dark text-center  text-capitalize">
			  ${data[i].title}
		  </p>
		  <picture class="card-img">
			  <img class="card-img" src="${data[i].thumbnail}" alt="">
		  </picture> 	 
			  </div>			  
			  <p class="card-text">
			  ${data[i].short_description}
		   </p>
		   <div class="card-footer  d-flex justify-content-between align-items-baseline">
			   <p> "${data[i].genre}"</p>
			   <a class="btn btn-link" target="_blank" href=" ${data[i].game_url}">Link</a>			   
		   </div>
			 
			 
			  

				
				
			  </div>
		  </div>
  `;
  

    document.querySelector(".container").innerHTML += catoona;


  }


}
// card.addEventListener("click", )


closeBtn.addEventListener("click", close)


// function openModal (){
// 	modal.showModal()

// 	// console.log("open");
// 	// modal.showModal
// }

function close() {
	modal.close()
}
