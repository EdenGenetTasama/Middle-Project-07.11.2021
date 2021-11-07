const apiMainURL = "https://moviesmern.herokuapp.com/";



async function getAllMovies(api,src) {
  try {
      return await fetch(`${api}${src}`).then((res)=>res.json())
  } catch (error) {
    return error;
  }
}



function runAllArrayOfObject(arrayOfObject) {

    for (const item of arrayOfObject.data) {
        console.log(item);
        divOfInfo.innerHTML += `<article class="cardClass">
        <img src="${item.image}" id="imgOfInfo">
        <h1 class="nameTitle">${item.movieName}</h1>
        <p>${item.rating}</p>
        </article>
        `;
    }
}




getAllMovies(apiMainURL , "movies/all").then((res)=>runAllArrayOfObject(res));
