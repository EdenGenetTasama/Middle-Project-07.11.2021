const apiMainURLTablePage = "https://moviesmern.herokuapp.com/";
let tableID = document.getElementById("tableID");

function loadingGif() {
    container.innerHTML = '<img src="../images/loading gif.gif" id="gifId">';
}

function stopLoading() {
  gifId.style.display = "none";
}

async function getAllMovies(api, src) {
  try {
    // loadingGif()
    return await fetch(`${api}${src}`).then((res) => res.json());
  } catch (error) {
    return error;
  }
}

function tableShowFunction(arrayOfObject) {
  for (const item of arrayOfObject.data) {
    console.log(item);
    tableID.innerHTML += `
    <tr>
        <td>${item.movieName}</td>
        <td>${item.image}</td><br>
        <td>${item.linkToMovie}</td>
        <td>${item.rating}</td>
        <td>${item.synopsis}</td><br>
        <td>${item._id}</td>
        <td>${item.date}</td>
    </tr>
        
        `;
  }
}


getAllMovies(apiMainURLTablePage, "movies/all")
  .then((res) => tableShowFunction(res))
  .catch((rej) => console.log(rej))
  .finally(stopLoading());
