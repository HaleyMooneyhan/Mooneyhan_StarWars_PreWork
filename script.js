let body=document.querySelector("body");
let dashboard = document.getElementById("dashboard-link");
let films = document.getElementById("films-link");
let characters = document.getElementById("characters-link");
var main = document.querySelector("main");
var dashdescription = document.querySelector("#dashboard-description");




// THIS FUNCTION WILL FETCH THE FILMS FROM THE API AND DISPLAY THEM ON THE PAGE
async function getFilms() {
  try {
    let response = await fetch("https://swapi.dev/api/films/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    
    dashdescription.innerHTML ="hello"
    data.results.forEach(film => {
      var dashdescription = document.getElementById("dashboard-description")
      let card = document.createElement("div");
      card.className = "card";  
      let title = document.createElement("h2");    
      title.textContent = film.title;
      let director = document.createElement("p");   
    director.textContent = `Director: ${film.director}`;
      let producer = document.createElement("p");
      producer.textContent = `Producer: ${film.producer}`;
      let releaseDate = document.createElement("p");
      releaseDate.textContent = `Release Date: ${film.release_date}`;
      let filmsLink2 = document.createElement("a");
      filmsLink2.innerHTML= "Back To Films";
      card.appendChild(title);
      card.appendChild(director);
      card.appendChild(producer);
      card.appendChild(releaseDate);
      card.appendChild(filmsLink2);
      main.appendChild(card);
    
      


    });
  } catch (error) {
    console.error("Error fetching films:", error);}




 }


//getFilms();


films.addEventListener("click", getFilms); 
  

