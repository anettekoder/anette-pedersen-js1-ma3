const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=94153055669a463f99fecca127ffab68";

const resultsContainer = document.querySelector(".results");

async function getData() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      //console.log(facts[i].name + facts[i].rating + " " + facts[i].tags.length);
      if (i === 7) {
        break;
      }

      resultsContainer.innerHTML += ` <div><b> Name: </b>${facts[i].name}<p><b>Rating: </b>${facts[i].tags.length}</p>
      <p><b>Number of tags: </b>${facts[i].tags.length}</p><br></div>`;
    }
  } catch (error) {
    const displayError = "An error occurred when calling the API";
    resultsContainer.innerHTML = displayError;
  }
}

getData();
