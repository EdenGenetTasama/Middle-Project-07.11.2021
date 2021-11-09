let movieArray = {
  success: true,
  data: [
    {
      _id: "6182d48e7df14206307896b8",
      movieName: "Harry Potter",
      linkToMovie: "String",
      synopsis: "String hhhhhh",
      image: "https://wallpaperaccess.com/full/3421252.jpg",
      rating: 3,
      date: "2021-11-03T18:27:26.573Z",
      __v: 0,
    },
    {
      _id: "6187dfcd4eec870016e667fa",
      movieName: "avatar",
      rating: 4,
      image: "https://wallpapercave.com/wp/wp6542877.jpg",
      synopsis: "avatar is blue",
      date: "2021-11-07T14:16:45.900Z",
      __v: 0,
    },
    {
      _id: "6187e7baa65c7f0016a126b1",
      movieName: "spider-man homecoming",
      rating: 7,
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      synopsis:
        "Following the Battle of New York in 2012,[N 1] Adrian Toomes and his salvage company are contracted to clean up the city, but their operation is taken over by the Department of Damage Control (DODC), a partnership between Tony Stark and the U.S. government. Enraged at being driven out of business, Toomes persuades his employees to keep the Chitauri technology they have already scavenged and use it to create and sell advanced weapons, including a flying Vulture suit Toomes uses to steal Chitauri power cells. Eight years later,[N 2] Peter Parker is drafted into the Avengers by Stark to help with an internal dispute in Berlin,[N 3] but resumes his studies at the Midtown School of Science and Technology when Stark tells him he is not yet ready to become a full Avenger.",
      linkToMovie: "https://en.wikipedia.org/wiki/Spider-Man:_Homecoming",
      date: "2021-11-07T14:50:34.580Z",
      __v: 0,
    },
    {
      _id: "6187e7f4a65c7f0016a126e3",
      movieName: "spider-man  Far From Home",
      rating: 6,
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
      synopsis:
        "Spider-Man: Far From Home was released on July 2, 2019.[266][267] Watts returned to direct,[268] from a script by McKenna and Sommers.[269] Holland, Favreau, Zendaya, Tomei, and Batalon reprise their roles,[270][271] with Jake Gyllenhaal joining as Mysterio.[272] Samuel L. Jackson and Cobie Smulders also reprised their roles as Nick Fury and Maria Hill, respectively, from previous MCU media.[273]",
      linkToMovie: "https://en.wikipedia.org/wiki/Spider-Man:_Far_From_Home",
      date: "2021-11-07T14:51:32.722Z",
      __v: 0,
    },
    {
      _id: "6187e826a65c7f0016a126fd",
      movieName: "spider-man No Way Home",
      rating: 8,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Spider-Man_No_Way_Home_logo.jpg/330px-Spider-Man_No_Way_Home_logo.jpg",
      synopsis:
        "Spider-Man: Far From Home was released on July 2, 2019.[266][267] Watts returned to direct,[268] from a script by McKenna and Sommers.[269] Holland, Favreau, Zendaya, Tomei, and Batalon reprise their roles,[270][271] with Jake Gyllenhaal joining as Mysterio.[272] Samuel L. Jackson and Cobie Smulders also reprised their roles as Nick Fury and Maria Hill, respectively, from previous MCU media.[273]",
      linkToMovie: "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
      date: "2021-11-07T14:52:22.181Z",
      __v: 0,
    },
  ],
};

const apiMainURL = "https://moviesmern.herokuapp.com/";

let arrayOFObject = JSON.stringify(movieArray);

let arrayOFObjectTwo = JSON.parse(arrayOFObject);
console.log(arrayOFObjectTwo);

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

async function testFunction(api) {
  try {
    return await api;
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

function showOnlyOneAtTime(arrayOfObject) {
  for (const item of arrayOfObject) {
    // if (item.name || item.image || item.rating == undefined) console.log(item);
    // console.log(item);
    divOfInfo.innerHTML = `<article class="cardClass">
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

getAllMovies().then((res) => runAllArrayOfObject(res));
// testFunction(arrayOFObject).then((res) => runAllArrayOfObject(res));

// runAllArrayOfObject(arrayOFObjectTwo)

function editClick(id) {
  console.log(id);
  window.open(
    "file:///C:/Users/edent/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/%D7%98%D7%A7%20%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94/%D7%9E%D7%91%D7%97%D7%A0%D7%99%D7%9D%20%D7%95%D7%94%D7%92%D7%A9%D7%95%D7%AA/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%D7%99%D7%9D/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%20%D7%90%D7%AA%D7%A8%20%D7%A1%D7%A8%D7%98%D7%99%D7%9D%207.11.2021/pagesIndex.html/addPage.html"
  );
}

async function deleteFromApi(idToDelete, optionDelete) {
  try {
    return await fetch(
      `https://moviesmern.herokuapp.com//movies/movie/${idToDelete}`,
      optionDelete
    );
  } catch (error) {
    return error;
  }
}

// buttonStyleCard.onclick=()=>{
//   console.log("click");
//   class DeleteClass {
//     movieName;
//     rating;
//     image;
//     Synopsis;
//     linkToMovie;
//     constructor(_movieName, _rating, _image, _Synopsis, _linkToMovie) {
//       this.movieName = _movieName;
//       this.rating = _rating;
//       this.image = _image;
//       this.Synopsis = _Synopsis;
//       this.linkToMovie = _linkToMovie;
//     }
//   }
//   let deleteMovie = new DeleteClass();
//   const optionDelete = {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newMovie),
//   }

// }

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

inputOfSearch.oninput = () => {
  if (inputOfSearch.value.length < 3) divOfInfo.innerHTML = " ";
  if (inputOfSearch.value.length > 3) {
    searchByName(inputOfSearch.value).then((res) =>
      showOnlyOneAtTime(res.data)
    );
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

//!sort function
// function sortFuncrion(obj) {
//   obj.data.sort(function (a, b) {
//     return (a.rating) - (b.rating);
//   });
//   divOfInfo.innerHTML = " ";
//   divOfInfo.innerHTML = divOfInfo.innerHTML = `<article class="cardClass">
//   <img src="${item.image}" id="imgOfInfo">
//   <h1 class="nameTitle">${item.movieName}</h1>
//   <p>${item.rating}</p>
//   <button id="edit${item._id}" class="buttonStyleCard" onclick="editClick(this.id)">EDIT</button>
//   <button id="learnMore${item._id}" class="buttonStyleCard" onclick="">LEARN MORE</button>
//   <button id="delete${item._id}" class="buttonStyleCard" onclick="">DELETE</button>

//   </article>
//   `;
// }

function displayAllInfoByRating(info) {
  let arraySort = info.sort(function (a, b) {
    return b.rating - a.rating;
  });
  return showAfterSort(arraySort);
}

function showAfterSort(sortArray) {
  for (let item of sortArray) {
    divOfInfo.innerHTML = " ";
    divOfInfo.innerHTML += `<article class="cardClass">
    //   <img src="${item.image}" id="imgOfInfo">
    //   <h1 class="nameTitle">${item.movieName}</h1>
    //   <p>${item.rating}</p>
    //   <button id="edit${item._id}" class="buttonStyleCard" onclick="editClick(this.id)">EDIT</button>
    //   <button id="learnMore${item._id}" class="buttonStyleCard" onclick="">LEARN MORE</button>
    //   <button id="delete${item._id}" class="buttonStyleCard" onclick="">DELETE</button>
    
    //   </article>`;
  }
}

buttonOfSort.onclick = () => {
  let selectOptionSort = selectOption.value;
  // console.log(selectOptionSort);
  switch (selectOptionSort) {
    case "NameSelectValue":
      getAllMovies(apiMainURL, `/movies /movie/:${NameSelectValue}`)
        .then()
        .catch();
      console.log("NameSelectValue");

    case "RatingSelectValue":
      getAllMovies().then((res) => {
        displayAllInfoByRating(res);
      });
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
