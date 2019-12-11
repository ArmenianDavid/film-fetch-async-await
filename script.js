// endpoint: https://ghibliapi.herokuapp.com/films.

const filmsDiv = document.getElementById("films");
const showBtn = document.getElementsByClassName("btn")[0];

const fetchingUrl = async () => {
  const res = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await res.json();
  console.log(data);
  const filmsCollection = data.forEach(film => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    div.classList.add("film-card");
    h2.innerText = film.title;
    div.appendChild(h2);
    p.innerText = "Release date :" + film.release_date;
    div.appendChild(p);
    p2.innerText = "Director :" + film.director;
    div.appendChild(p2);
    p3.innerText = "Description :" + film.description;
    div.appendChild(p3);
    filmsDiv.appendChild(div);
  });
};
showBtn.addEventListener("click", fetchingUrl);
