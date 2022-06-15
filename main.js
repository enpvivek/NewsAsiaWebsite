console.log("### Script Starts Here ###");

let apiKey = "05d083b91dea45f0ab8110d532b2ba62";
var category = "general";
let container = document.getElementById("container");
function business() {
  category = "business";
  sendRequest();
}
function sports() {
  category = "sports";
  sendRequest();
}
function science() {
  category = "science";
  sendRequest();
}
function technology() {
  category = "technology";
  sendRequest();
}

window.onload = sendRequest();

function sendRequest() {
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newsHTML = "";

      articles.forEach((element) => {
        let news = `<div class="card text-center my-4">
                    <div class="card-header"> <h3> <span class="badge bg-secondary mt-2"> ${category.toUpperCase()} </span> </h3></div>
                    <div class="card-body">
                      <h5 class="card-title"> ${element["title"]} </h5>
                      <p class="card-text"> ${element["description"]} </p>
                      <a href="${
                        element["url"]
                      }" target="_blank" class="btn btn-primary">View Full Article</a>
                    </div>
                    <div class="card-footer text-muted"> ${
                      element["publishedAt"]
                    } </div>
                  </div>`;
        newsHTML += news;
      });
      container.innerHTML = newsHTML;
    } else {
      console.log("Some error occured");
    }
  };
  xhr.send();
}
