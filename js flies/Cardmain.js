const apiMainURL = "https://moviesmern.herokuapp.com/";

function promiseFunction(api, src) {
  return new Promise((resolve, reject) => {
    fetch(`${api}${src}`)
      .then((res) => res.json())
      .then((res) =>
        res.data.length > 0 ? resolve(res.data) : reject({ message: "ERROR" })
      );
  });
}
async function getAllMovies() {
  try {
    return await promiseFunction(apiMainURL, "movies/all");
  } catch (error) {
    return error;
  }
}

function runAllArrayOfObject(arrayOfObject) {
  for (const item of arrayOfObject) {
    // if (item.name || item.image || item.rating == undefined) console.log(item);
    // console.log(item);
    divOfInfo.innerHTML += `<article class="cardClass">
        <img src="${item.image}" id="imgOfInfo">
        <h1 class="nameTitle">${item.movieName}</h1>
        <p>${item.rating}</p>
        <button id="edit${item._id}" class="buttonStyleCard" onclick="editClick(this.id)">EDIT</button>
        <button id="learnMore${item._id}" class="buttonStyleCard" onclick="">LEARN MORE</button>
        <button id="delete${item._id}" class="buttonStyleCard" onclick="">DELETE</button>

        </article>
        `;
  }
}

// getAllMovies().then((res) => runAllArrayOfObject(res));

function editClick(id) {
  console.log(id);
  window.open(
    "file:///C:/Users/edent/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/%D7%98%D7%A7%20%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94/%D7%9E%D7%91%D7%97%D7%A0%D7%99%D7%9D%20%D7%95%D7%94%D7%92%D7%A9%D7%95%D7%AA/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%D7%99%D7%9D/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%20%D7%90%D7%AA%D7%A8%20%D7%A1%D7%A8%D7%98%D7%99%D7%9D%207.11.2021/pagesIndex.html/addPage.html"
  );
}

//! search select;

async function searchByName(nameInput) {
  try {
    return await fetch(
      `${apiMainURL}movies/movie/searchByName/${nameInput}`
    ).then((res) => res.json());
  } catch (error) {
    return error;
  }
}

async function searchById(idInput) {
  try {
    return await fetch(`${apiMainURL}movies/movie/${idInput}'`);
  } catch (error) {
    return error;
  }
}

function showSearchByName(object) {
  for (const item of object.data) {
    console.log(item);
    divOfInfo.innerHTML += `<article class="cardClass">
    <img src="${item.image}" id="imgOfInfo">
    <h1 class="nameTitle">${item.movieName}</h1>
    <p>${item.rating}</p>
    <button id="edit${item._id}" class="buttonStyleCard" onclick="editClick(this.id)">EDIT</button>
    <button id="learnMore${item._id}" class="buttonStyleCard" onclick="">LEARN MORE</button>
    <button id="delete${item._id}" class="buttonStyleCard" onclick="">DELETE</button>
  
    </article>`;
  }
}
inputOfSearch.oninput = () => {
  if (inputOfSearch.value.length <= 3) divOfInfo.innerHTML = " ";
  if (inputOfSearch.value.length > 3) {

    searchByName(inputOfSearch.value)
      .then((res) => showSearchByName(res))

  }
};

//! sort select;
// let array= [45,12,5,69,8,2,66]
// console.log(array.sort((a,b)=>a-b));

// function sortFunction(arrayOfObject) {
//   for (const item of arrayOfObject.data) {
//     if(item.rating > )

//   }

// }

buttonOfSort.onclick = () => {
  let selectOptionSort = selectOption.value;
  // console.log(selectOptionSort);
  switch (selectOptionSort) {
    case "NameSelectValue":
      getAllMovies(apiMainURL, `/movies /movie/:${NameSelectValue}`)
        .then()
        .catch();
      console.log("NameSelectValue");

      break;

    case "RatingSelectValue":
      console.log("RatingSelectValue");

      break;

    case "addLatelySelectValue":
      console.log("addLatelySelectValue9");

      break;

    default:
      alert("Search is Flie, try again");
      break;
  }
};
