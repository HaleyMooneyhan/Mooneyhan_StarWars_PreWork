let body=document.querySelector("body");
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
      body.appendChild(card);

    });
  } catch (error) {
    console.error("Error fetching films:", error);}




 }


getFilms();



  

