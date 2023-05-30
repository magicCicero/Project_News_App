let dateToday = new Date();
const apiKey = "e51c8c1155f24894be9ad0c0be0e5c95";

// Ausführung der App beim Betätigen der Enter Taste. Es wird beim Entern auf dem "Submit" Button geklickt und die Funktion ausgeführt
const searchBtn = document.querySelector(".searchbtn");
searchBtn.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    searchNewsByKeyword();
  }
});

const searchNewsByKeyword = () => {
  const outputOne = document.querySelector(".categoryheadlinecontainer");
  outputOne.innerHTML = "";
  const outputTwo = document.querySelector(".trending-news-container");
  outputTwo.innerHTML = "";
  const outputThree = document.querySelector(".newest-news-container");
  outputThree.innerHTML = "";
  let inputValue = document.querySelector("#searchkeywordinput").value;
  console.log(inputValue);
  fetch(
    `https://newsapi.org/v2/everything?q=${inputValue}&from=${dateToday.getFullYear()}-${
      dateToday.getMonth() + 1
    }-${dateToday.getDate() - 1}&to=${dateToday.getFullYear()}-${
      dateToday.getMonth() + 1
    }-${
      dateToday.getDate() - 1
    }&sortBy=popularity&language=de&excludeDomains=google.com,businessinsider.de,pro-linux.de,amazon.de,golem.de&pageSize=20&searchIn=title,description&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const searchData = data.articles;

      searchData.forEach((newsData) => {
        const categoryHeadLineItems = `<article class="categoryheadlineitem">
        <img class="categoryheadlineitemimg" src="${
          newsData.urlToImage
        }" alt="" />
        <div class="categoryinformations">
          <h3 class="categoryheadlinetitle">${newsData.title}</h3>
          <div class="categorymetainformations">
            <div class="leftmetainformation">
              <h4 class="newssrc">${newsData.source.name}</h4>
              <h4 class="newsauthor">${newsData.author}</h4>
              <h5 class="publish-date">${new Date(
                newsData.publishedAt
              ).toLocaleDateString()}</h5>
            </div>
            <div class="rightmetainformations">
              <a href="save" class="savebtn">
                S
              </a>
              <a href="like" class="likebtn">
                L
              </a>
            </div>
          </div>
        </div>
      </article>`;
        document
          .querySelector(".categoryheadlinecontainer")
          .insertAdjacentHTML("beforeend", categoryHeadLineItems);
      });
      fetchTrendings(inputValue);
      fetchNewests(inputValue);
    })
    .catch((error) => console.log("Fehler beim Laden: ", error));
};

const fetchTrendings = (inputValue) => {
  console.log(inputValue);
  fetch(
    `https://newsapi.org/v2/everything?q=${inputValue}&from=${dateToday.getFullYear()}-${
      dateToday.getMonth() + 1
    }-${dateToday.getDate() - 7}&to=${dateToday.getFullYear()}-${
      dateToday.getMonth() + 1
    }-${
      dateToday.getDate() - 1
    }&sortBy=relevancy&language=de&pageSize=7&excludeDomains=google.com&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const secondDataFetch = data.articles;
      console.log(secondDataFetch);

      secondDataFetch.forEach((newsData) => {
        const shortenURL = newsData.urlToImage;
        const trendingNewsItems = `          <article class="newslistitem">
        <img src="${newsData.urlToImage}" alt="" />
        <div class="newslistinformations">
          <h3 class="newslistcategory">${newsData.source.name}</h3>
          <h3 class="newslisttitle">
          ${newsData.title}
          </h3>
          <h5 class="publish-date">${new Date(
            newsData.publishedAt
          ).toLocaleDateString()}</h5>
        </div>
      </article>`;
        document
          .querySelector(".trending-news-container")
          .insertAdjacentHTML("beforeend", trendingNewsItems);
      });
    })
    .catch((error) => console.log("Fehler beim Laden: ", error));
};

const fetchNewests = (inputValue) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${inputValue}&from=${dateToday.getFullYear()}-${
      dateToday.getMonth() + 1
    }-${dateToday.getDate() - 20}&to=${dateToday.getFullYear()}-${
      dateToday.getMonth() + 1
    }-${
      dateToday.getDate() - 1
    }&sortBy=publishedAt&language=de&pageSize=7&excludeDomains=google.com&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const thirdDataFetch = data.articles;
      console.log(thirdDataFetch);

      thirdDataFetch.forEach((newsData) => {
        const shortenURL = newsData.urlToImage;
        const newestNewsItems = `          <article class="newslistitem">
        <img src="${newsData.urlToImage}" alt="" />
        <div class="newslistinformations">
          <h3 class="newslistcategory">${newsData.source.name}</h3>
          <h3 class="newslisttitle">
          ${newsData.title}
          </h3>
          <h5 class="publish-date">${new Date(
            newsData.publishedAt
          ).toLocaleDateString()}</h5>
        </div>
      </article>`;
        document
          .querySelector(".newest-news-container")
          .insertAdjacentHTML("beforeend", newestNewsItems);
      });
    })
    .catch((error) => console.log("Fehler beim Laden: ", error));
};
fetch(
  `https://newsapi.org/v2/everything?q=New&from=${dateToday.getFullYear()}-${
    dateToday.getMonth() + 1
  }-${dateToday.getDate() - 1}&to=${dateToday.getFullYear()}-${
    dateToday.getMonth() + 1
  }-${
    dateToday.getDate() - 1
  }&sortBy=popularity&language=de&excludeDomains=google.com,businessinsider.de,pro-linux.de,amazon.de&pageSize=20&apiKey=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => {
    const firstDataFetch = data.articles;
    console.log(firstDataFetch);
    firstDataFetch.forEach((newsData) => {
      const shortenURL = newsData.urlToImage;
      const categoryHeadLineItems = `<article class="categoryheadlineitem">
      <img class="categoryheadlineitemimg" src="${
        newsData.urlToImage
      }" alt="" />
      <div class="categoryinformations">
        <h3 class="categoryheadlinetitle">${newsData.title}</h3>
        <div class="categorymetainformations">
          <div class="leftmetainformation">
            <h4 class="newssrc">${newsData.source.name}</h4>
            <h4 class="newsauthor">${newsData.author}</h4>
            <h5 class="publish-date">${new Date(
              newsData.publishedAt
            ).toLocaleDateString()}</h5>
          </div>
          <div class="rightmetainformations">
            <a href="save" class="savebtn">
              S
            </a>
            <a href="like" class="likebtn">
              L
            </a>
          </div>
        </div>
      </div>
    </article>`;
      document
        .querySelector(".categoryheadlinecontainer")
        .insertAdjacentHTML("beforeend", categoryHeadLineItems);
    });
  })
  .catch((error) => console.log("Fehler beim Laden: ", error));

// Fetch der beliebtesten Nachrichten der Woche
fetch(
  `https://newsapi.org/v2/everything?q=beliebte+news&from=${dateToday.getFullYear()}-${
    dateToday.getMonth() + 1
  }-${dateToday.getDate() - 7}&to=${dateToday.getFullYear()}-${
    dateToday.getMonth() + 1
  }-${
    dateToday.getDate() - 1
  }&sortBy=publishedAt&language=de&pageSize=7&excludeDomains=google.com&apiKey=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => {
    const secondDataFetch = data.articles;
    console.log(secondDataFetch);

    secondDataFetch.forEach((newsData) => {
      const shortenURL = newsData.urlToImage;
      const trendingNewsItems = `          <article class="newslistitem">
      <img src="${newsData.urlToImage}" alt="" />
      <div class="newslistinformations">
        <h3 class="newslistcategory">${newsData.source.name}</h3>
        <h3 class="newslisttitle">
        ${newsData.title}
        </h3>
        <h5 class="publish-date">${new Date(
          newsData.publishedAt
        ).toLocaleDateString()}</h5>
      </div>
    </article>`;
      document
        .querySelector(".trending-news-container")
        .insertAdjacentHTML("beforeend", trendingNewsItems);
    });
  })
  .catch((error) => console.log("Fehler beim Laden: ", error));

// Fetch der neusten Nachrichten
fetch(
  `https://newsapi.org/v2/everything?q=neue+news&from=${dateToday.getFullYear()}-${
    dateToday.getMonth() + 1
  }-${dateToday.getDate() - 2}&to=${dateToday.getFullYear()}-${
    dateToday.getMonth() + 1
  }-${
    dateToday.getDate() - 1
  }&sortBy=publishedAt&language=de&pageSize=7&excludeDomains=google.com&apiKey=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => {
    const thirdDataFetch = data.articles;
    console.log(thirdDataFetch);

    thirdDataFetch.forEach((newsData) => {
      const shortenURL = newsData.urlToImage;
      const newestNewsItems = `          <article class="newslistitem">
      <img src="${newsData.urlToImage}" alt="" />
      <div class="newslistinformations">
        <h3 class="newslistcategory">${newsData.source.name}</h3>
        <h3 class="newslisttitle">
        ${newsData.title}
        </h3>
        <h5 class="publish-date">${new Date(
          newsData.publishedAt
        ).toLocaleDateString()}</h5>
      </div>
    </article>`;
      document
        .querySelector(".newest-news-container")
        .insertAdjacentHTML("beforeend", newestNewsItems);
    });
  })
  .catch((error) => console.log("Fehler beim Laden: ", error));

// Funktion zum Kürzen des Textes und Hinzufügen von "..."
function kuerzeTextUndAnzeigen(element, maxLength) {
  var text = element.textContent;
  if (text.length > maxLength) {
    element.textContent = text.substring(0, maxLength - 3) + "...";
  }
}

// Event-Handler, der aufgerufen wird, wenn das Dokument geladen wurde
document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".categoryheadlinecontainer"); // ID des Containers, in dem sich die Elemente befinden

  // Funktion zum Kürzen des Textes auf alle Elemente im Container anwenden
  var elemente = container.getElementsByClassName("categoryheadlinetitle"); // Elementtyp auswählen (hier: <p>-Tags)
  for (var i = 0; i < elemente.length; i++) {
    kuerzeTextUndAnzeigen(elemente[i], 50);
  }
});

// Event-Handler, der aufgerufen wird, wenn sich der Inhalt des Containers ändert
document
  .querySelector(".categoryheadlinecontainer")
  .addEventListener("DOMSubtreeModified", function () {
    var container = document.querySelector(".categoryheadlinecontainer"); // ID des Containers, in dem sich die Elemente befinden

    // Funktion zum Kürzen des Textes auf alle Elemente im Container anwenden
    var elemente = container.getElementsByClassName("categoryheadlinetitle"); // Elementtyp auswählen (hier: <p>-Tags)
    for (var i = 0; i < elemente.length; i++) {
      kuerzeTextUndAnzeigen(elemente[i], 65);
    }
  });

// Event-Handler, der aufgerufen wird, wenn das Dokument geladen wurde
document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".trending-news-container"); // ID des Containers, in dem sich die Elemente befinden

  // Funktion zum Kürzen des Textes auf alle Elemente im Container anwenden
  var elemente = container.getElementsByClassName("newslisttitle"); // Elementtyp auswählen (hier: <p>-Tags)
  for (var i = 0; i < elemente.length; i++) {
    kuerzeTextUndAnzeigen(elemente[i], 50);
  }
});

// Event-Handler, der aufgerufen wird, wenn sich der Inhalt des Containers ändert
document
  .querySelector(".trending-news-container")
  .addEventListener("DOMSubtreeModified", function () {
    var container = document.querySelector(".trending-news-container"); // ID des Containers, in dem sich die Elemente befinden

    // Funktion zum Kürzen des Textes auf alle Elemente im Container anwenden
    var elemente = container.getElementsByClassName("newslisttitle"); // Elementtyp auswählen (hier: <p>-Tags)
    for (var i = 0; i < elemente.length; i++) {
      kuerzeTextUndAnzeigen(elemente[i], 65);
    }
  });

// Event-Handler, der aufgerufen wird, wenn das Dokument geladen wurde
document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".newest-news-container"); // ID des Containers, in dem sich die Elemente befinden

  // Funktion zum Kürzen des Textes auf alle Elemente im Container anwenden
  var elemente = container.getElementsByClassName("newslisttitle"); // Elementtyp auswählen (hier: <p>-Tags)
  for (var i = 0; i < elemente.length; i++) {
    kuerzeTextUndAnzeigen(elemente[i], 50);
  }
});

// Event-Handler, der aufgerufen wird, wenn sich der Inhalt des Containers ändert
document
  .querySelector(".newest-news-container")
  .addEventListener("DOMSubtreeModified", function () {
    var container = document.querySelector(".newest-news-container"); // ID des Containers, in dem sich die Elemente befinden

    // Funktion zum Kürzen des Textes auf alle Elemente im Container anwenden
    var elemente = container.getElementsByClassName("newslisttitle"); // Elementtyp auswählen (hier: <p>-Tags)
    for (var i = 0; i < elemente.length; i++) {
      kuerzeTextUndAnzeigen(elemente[i], 65);
    }
  });
