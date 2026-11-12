// DECLARING VARIABLES FOR DOM ELEMENTS

let body=document.querySelector("body");
let films = document.getElementById("films-link");
let characters = document.getElementById("characters-link");
var main = document.querySelector("main");



// THIS FUNCTION WILL FETCH THE FILMS FROM THE API AND DISPLAY THEM ON THE PAGE
async function getFilms() {
  try {
    let response = await fetch("https://swapi.dev/api/films/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    
    
    data.results.forEach(film => {
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
      card.appendChild(title);
      card.appendChild(director);
      card.appendChild(producer);
      card.appendChild(releaseDate);
      main.appendChild(card);
    
      setTimeout(() => {
        card.style.display = "none";
      }, 5000);


    });
  } catch (error) {
    console.error("Error fetching films:", error);}
 
   



 }




// EVENT LISTENER FOR THE FILMS BUTTON
films.addEventListener("click", getFilms); 



// THIS FUNCTION WILL FETCH THE CHARACTERS FROM THE API AND DISPLAY THEM ON THE PAGE
async function getCharacters() {
  try { 
    let response = await fetch("https://swapi.dev/api/people/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 

     let chars = await response.json(); 

    chars.results.forEach(character => {
      let card = document.createElement("div");
      card.className = "card";  
      let name = document.createElement("h2");    
      name.textContent = character.name;
      let gender = document.createElement("p");   
      gender.textContent = `Gender: ${character.gender}`;
      let birthYear = document.createElement("p");
      birthYear.textContent = `Birth Year: ${character.birth_year}`;
      card.appendChild(name);
      card.appendChild(gender);
      card.appendChild(birthYear);
      main.appendChild(card);

      setTimeout(() => {
        card.style.display = "none";
      }, 5000);  
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
  } 
    
}



// EVENT LISTENER FOR THE CHARACTERS BUTTON   
characters.addEventListener("click", getCharacters);

