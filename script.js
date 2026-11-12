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
      throw new Error(`errorstatus: ${response.status}`);
    }
    let films = await response.json();
    
    
    films.results.forEach(film => {
      let div = document.createElement("div");  
      let title = document.createElement("h2");    
      title.textContent = film.title;
      let director = document.createElement("p");   
      director.textContent = `The Director: ${film.director}`;
      let producer = document.createElement("p");
      producer.textContent = `The Producer: ${film.producer}`;
      let releaseDate = document.createElement("p");
      releaseDate.textContent = `The Release Date: ${film.release_date}`;
      div.appendChild(title);
      div.appendChild(director);
      div.appendChild(producer);
      div.appendChild(releaseDate);
      main.appendChild(div);
    

      //SET A TIMOUT TO REMOVE THE DIV AFTER 5 SECONDS. IF I HAD MORE TIME I WOULD HAVE MODIFIED THE FUNCTION TO REMOVE THE CARD WHEN CLICKING ON THE CHARACTERS BUTTON.
      setTimeout(() => {
        div.style.display = "none";
      }, 5000);


    });
  } catch (error) {
    console.error("The Was an Error fetching the films:", error);}
 
   



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
      let div = document.createElement("div");
      let name = document.createElement("h2");    
      name.textContent = `Character: ${character.name}`;
      let gender = document.createElement("p");   
      gender.textContent = `Gender: ${character.gender}`;
      let birthYear = document.createElement("p");
      birthYear.textContent = `Birth Year: ${character.birth_year}`;
      div.appendChild(name);
      div.appendChild(gender);
      div.appendChild(birthYear);
      main.appendChild(div);


      // AGAIN, SET A TIMOUT TO REMOVE THE DIV AFTER 5 SECONDS. IF I HAD MORE TIME I WOULD HAVE MODIFIED THE FUNCTION TO REMOVE THE DIV WHEN CLICKING ON THE FILMS BUTTON.
      setTimeout(() => {
        div.style.display = "none";
      }, 5000);  
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
  } 
    
}



// EVENT LISTENER FOR THE CHARACTERS BUTTON   
characters.addEventListener("click", getCharacters);

