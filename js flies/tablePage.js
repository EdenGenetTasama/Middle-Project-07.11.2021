let movieArray ={
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



const apiMainURLTablePage = "https://moviesmern.herokuapp.com/";
let tableID = document.getElementById("tableID");

function loadingGif() {
  container.innerHTML += '<img src="../images/loading gif.gif" id="gifId">';
}

function stopLoading() {
  gifId.style.display = "none";
}

async function getAllMovies(api) {
  try {
    loadingGif()
    // return await fetch(`${api}${src}`).then((res) => res.json());
    return await api 
  } catch (error) {
    return error;
  }
}

function tableShowFunction(arrayOfObject) {
  for (const item of arrayOfObject.data) {
    console.log(item);
    tableID.innerHTML += `
    <tr>
        <td class= "tdClassHader">${item.movieName}</td>
        <td class= "tdClass">${item.image}</td>
        <td class= "tdClass">${item.linkToMovie}</td>
        <td class= "tdClass">${item.rating}</td>
        <td class= "tdClass">${item.synopsis}</td>
        <td class= "tdClass">${item._id}</td>
        <td class= "tdClass">${item.date}</td>
    </tr>
        
        `;
  }
}


// getAllMovies(apiMainURLTablePage, "movies/all")

getAllMovies(movieArray)
  .then((res) => tableShowFunction(res))
  .catch((rej) => console.log(rej))
  .finally(stopLoading());


  
