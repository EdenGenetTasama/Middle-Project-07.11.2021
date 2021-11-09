const apiAddress = "https://moviesmern.herokuapp.com/movies/saveMovie";

async function GetApiAddress(option) {
  try {
    return await fetch(apiAddress, option);
  } catch (error) {
    return error;
  }
}

class NewMovie {
  movieName;
  rating;
  image;
  Synopsis;
  linkToMovie;
  constructor(_movieName, _rating, _image, _Synopsis, _linkToMovie) {
    this.movieName = _movieName;
    this.rating = _rating;
    this.image = _image;
    this.synopsis = _Synopsis;
    this.linkToMovie = _linkToMovie;
  }
}

sendEditButton.onclick = () => {
  let newMovie = new NewMovie(
    movieNameId.value,
    ratingId.value,
    MovieImageId.value,
    SynopsisId.value,
    linkToMovieId.value
    );
    const optionAdd = {
        method: "POST",
        body: JSON.stringify({newMovie}),
        headers: { "Content-Type": "application/json" },
    };
    console.log(optionAdd.body);
    GetApiAddress(optionAdd).then(res=>console.log(res))
};

