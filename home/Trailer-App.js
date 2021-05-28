function makeTrailer(title, actor, director, gender, durration, link, image) {
  return {
    title: title,
    actor: actor,
    director: director,
    gender: gender,
    durration: durration,
    link: link,
    image: image,
  }
};

var trailer1 = makeTrailer("Shawshank Redemption", "Tim Robbins", "Frank Darabont", "Drama", "142 minutes", "https://www.youtube.com/watch?v=NmzuHjWmXOc", "https://cdn.hmv.com/r/w-1280/hmv/files/ff/ff154dab-a882-4ee2-a3e6-b8fde1339c5a.jpg");
var trailer2 = makeTrailer("The God Father", "Marlon Brando", "Francis Ford Coppola", "Drama", "175 minutes", "https://www.youtube.com/watch?v=1x0GpEZnwa8", "https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg");
var trailer3 = makeTrailer("The Dark Knight", "Christian Bale", "Christopher Nolan", "Superhero", "153 minutes", "https://www.youtube.com/watch?v=EXeTwQWrcwY", "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg");
var trailer4 = makeTrailer("pulp Fiction", "John Travolta", "Quentin Tarantino", "Comedy", "154 minutes", "https://www.youtube.com/watch?v=5ZAhzsi1ybM", "https://i1.wp.com/cinedweller.com/wp-content/uploads/2020/04/pulp-fiction-affiche-francaise-cannes.jpg?resize=400%2C650&ssl=1");
var trailer5 = makeTrailer("the lord of the rings fantasy", "Viggo Mortensen", "Peter Jackson", "Fantasy", "228 minutes", "https://www.youtube.com/watch?v=LbfMDwc4azU", "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg");
var trailer6 = makeTrailer("Fight Club", "Edward Norton", "David Fincher", "Action", "139 minutes", "https://www.youtube.com/watch?v=qtRKdVHc-cE", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdLTXtlwgmOU3b9iXMccLmWsFVJlBxwG3PBodcNk2O3SfJx1Jx");
var trailer7 = makeTrailer("Forrest Gump", "Tom Hanks", "Robert Zemeckis", "Comedy", "142 minutes", "https://www.youtube.com/watch?v=XHhAG-YLdk8", "https://img8.cdn.cinoche.com/images/9d85f441a28d25ff78c327a42b6f7faf.jpg");
var trailer8 = makeTrailer("Inception", "Leonardo DiCaprio", "Christopher Nolan", "Sience-Fiction", "148 minutes", "https://www.youtube.com/watch?v=YoHD9XEInc0", "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg");
var trailer9 = makeTrailer("The Matrix", "Keanu Reeves", "The Wachowski", "Sience-Fiction", "130 minutes", "https://www.youtube.com/watch?v=vKQi3bBA1y8", "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg");
var trailer10 = makeTrailer("Avengers Endgame", "Robert Downey Jr ", "Anthony & Joe Russo", "Superhero", "181 minutes", "https://www.youtube.com/watch?v=TcMBFSGVi1c", "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810");
var trailer11 = makeTrailer("Al Rissalah", "Abdullah Gaith ", "	Moustapha Akkad", "Biography", "198 minutes", "https://www.youtube.com/watch?v=NAm0AWFy3b0", "https://associationculturam.files.wordpress.com/2015/02/affiche_film-el-rissala.jpg?w=256&h=360&crop=1");
var trailer12 = makeTrailer("Interstellar", "Matthew McConaughey", "Christopher Nolan", "Sience-Fiction", "169 minutes", "https://www.youtube.com/watch?v=Lm8p5rlrSkY", "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg");
var trailer13 = makeTrailer("The Martian", "Matt Damon", "Ridley Scott", "Sience-Fiction", "141 minutes", "https://www.youtube.com/watch?v=ej3ioOneTy8", "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg");
var trailer14 = makeTrailer("Joker", "Joaquin Phoenix", "Todd Phillips", "Drama", "122 minutes", "https://www.youtube.com/watch?v=zAGVQLHvwOY", "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg");
var trailer15 = makeTrailer("Venom ", "Tom Hardy", "Ruben Fleischer", "Action", "112 minutes", "https://www.youtube.com/watch?v=u9Mv98Gr5pY", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfrc7hHLB9_7Z5CzeEw50twkyPllsfC-OMrLgwA3v34-xV-9Xe");
var trailer16 = makeTrailer("Deadpool", "Ryan Reynolds", "Tim Miller", "Action", "108 minutes", "https://www.youtube.com/watch?v=Xithigfg7dA", "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png");
var trailer17 = makeTrailer("Mad Max:Fury Road", "Tom Hardy", "George Miller", "Fantasy", "120 minutes", "https://www.youtube.com/watch?v=hEJnMQG9ev8", "http://www.princessebrunette.com/wp-content/uploads/2015/06/Mad-Max-4-150331.jpg");
var trailer18 = makeTrailer("Noura Dream", "Hend Sabri", "Hinde Boujemaa", "Drama", "90 minutes", "https://www.youtube.com/watch?v=vJcsiBuwKlE", "https://medias.unifrance.org/medias/135/68/214151/format_page/media.jpg");
var trailer19 = makeTrailer("Titanic", "Kate Winslet", "James Cameron", "Romantic", "195 minutes", "https://www.youtube.com/watch?v=kVrqfYjkTdQ", "https://www.telerama.fr/sites/tr_master/files/4d284051-ddd4-4ee7-8a15-74064ea61510_2.jpg");
var trailer20 = makeTrailer("Me Before You", "Emilia Clarke", "Thea Sharrock", "Romantic", "110 minutes", "https://www.youtube.com/watch?v=Eh993__rOxA", "https://images-na.ssl-images-amazon.com/images/I/81inxJbBAIL._AC_SL1500_.jpg")
var trailer21 = makeTrailer("Shawshank Redemption", "Tim Robbins", "Frank Darabont", "Drama", "142 minutes", "https://www.youtube.com/watch?v=NmzuHjWmXOc", "https://cdn.hmv.com/r/w-1280/hmv/files/ff/ff154dab-a882-4ee2-a3e6-b8fde1339c5a.jpg");
var trailer22 = makeTrailer("The God Father", "Marlon Brando", "Francis Ford Coppola", "Drama", "175 minutes", "https://www.youtube.com/watch?v=1x0GpEZnwa8", "https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg");
var trailer23 = makeTrailer("The Dark Knight", "Christian Bale", "Christopher Nolan", "Superhero", "153 minutes", "https://www.youtube.com/watch?v=EXeTwQWrcwY", "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg");
var trailer24 = makeTrailer("pulp Fiction", "John Travolta", "Quentin Tarantino", "Comedy", "154 minutes", "https://www.youtube.com/watch?v=5ZAhzsi1ybM", "https://i1.wp.com/cinedweller.com/wp-content/uploads/2020/04/pulp-fiction-affiche-francaise-cannes.jpg?resize=400%2C650&ssl=1");
var trailer25 = makeTrailer("the lord of the rings fantasy", "Viggo Mortensen", "Peter Jackson", "Fantasy", "228 minutes", "https://www.youtube.com/watch?v=LbfMDwc4azU", "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg");
var trailer26 = makeTrailer("Fight Club", "Edward Norton", "David Fincher", "Action", "139 minutes", "https://www.youtube.com/watch?v=qtRKdVHc-cE", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdLTXtlwgmOU3b9iXMccLmWsFVJlBxwG3PBodcNk2O3SfJx1Jx");
var trailer27 = makeTrailer("Forrest Gump", "Tom Hanks", "Robert Zemeckis", "Comedy", "142 minutes", "https://www.youtube.com/watch?v=XHhAG-YLdk8", "https://img8.cdn.cinoche.com/images/9d85f441a28d25ff78c327a42b6f7faf.jpg");
var trailer28 = makeTrailer("Inception", "Leonardo DiCaprio", "Christopher Nolan", "Sience-Fiction", "148 minutes", "https://www.youtube.com/watch?v=YoHD9XEInc0", "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg");
var trailer29 = makeTrailer("The Matrix", "Keanu Reeves", "The Wachowski", "Sience-Fiction", "130 minutes", "https://www.youtube.com/watch?v=vKQi3bBA1y8", "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg");
var trailer30 = makeTrailer("Avengers Endgame", "Robert Downey Jr ", "Anthony & Joe Russo", "Superhero", "181 minutes", "https://www.youtube.com/watch?v=TcMBFSGVi1c", "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810");
var trailer31 = makeTrailer("Al Rissalah", "Abdullah Gaith ", "	Moustapha Akkad", "Biography", "198 minutes", "https://www.youtube.com/watch?v=NAm0AWFy3b0", "https://associationculturam.files.wordpress.com/2015/02/affiche_film-el-rissala.jpg?w=256&h=360&crop=1");
var trailer32 = makeTrailer("Interstellar", "Matthew McConaughey", "Christopher Nolan", "Sience-Fiction", "169 minutes", "https://www.youtube.com/watch?v=Lm8p5rlrSkY", "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg");
var trailer33 = makeTrailer("The Martian", "Matt Damon", "Ridley Scott", "Sience-Fiction", "141 minutes", "https://www.youtube.com/watch?v=ej3ioOneTy8", "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg");
var trailer34 = makeTrailer("Joker", "Joaquin Phoenix", "Todd Phillips", "Drama", "122 minutes", "https://www.youtube.com/watch?v=zAGVQLHvwOY", "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg");
var trailer35 = makeTrailer("Venom ", "Tom Hardy", "Ruben Fleischer", "Action", "112 minutes", "https://www.youtube.com/watch?v=u9Mv98Gr5pY", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfrc7hHLB9_7Z5CzeEw50twkyPllsfC-OMrLgwA3v34-xV-9Xe");
var trailer36 = makeTrailer("Deadpool", "Ryan Reynolds", "Tim Miller", "Action", "108 minutes", "https://www.youtube.com/watch?v=Xithigfg7dA", "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png");
var trailer37 = makeTrailer("Mad Max:Fury Road", "Tom Hardy", "George Miller", "Fantasy", "120 minutes", "https://www.youtube.com/watch?v=hEJnMQG9ev8", "http://www.princessebrunette.com/wp-content/uploads/2015/06/Mad-Max-4-150331.jpg");
var trailer38 = makeTrailer("Noura Dream", "Hend Sabri", "Hinde Boujemaa", "Drama", "90 minutes", "https://www.youtube.com/watch?v=vJcsiBuwKlE", "https://medias.unifrance.org/medias/135/68/214151/format_page/media.jpg");
var trailer39 = makeTrailer("Titanic", "Kate Winslet", "James Cameron", "Romantic", "195 minutes", "https://www.youtube.com/watch?v=kVrqfYjkTdQ", "https://www.telerama.fr/sites/tr_master/files/4d284051-ddd4-4ee7-8a15-74064ea61510_2.jpg");
var trailer40 = makeTrailer("Me Before You", "Emilia Clarke", "Thea Sharrock", "Romantic", "110 minutes", "https://www.youtube.com/watch?v=Eh993__rOxA", "https://images-na.ssl-images-amazon.com/images/I/81inxJbBAIL._AC_SL1500_.jpg")
var trailer41 = makeTrailer("Shawshank Redemption", "Tim Robbins", "Frank Darabont", "Drama", "142 minutes", "https://www.youtube.com/watch?v=NmzuHjWmXOc", "https://cdn.hmv.com/r/w-1280/hmv/files/ff/ff154dab-a882-4ee2-a3e6-b8fde1339c5a.jpg");
var trailer42 = makeTrailer("The God Father", "Marlon Brando", "Francis Ford Coppola", "Drama", "175 minutes", "https://www.youtube.com/watch?v=1x0GpEZnwa8", "https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg");
var trailer43 = makeTrailer("The Dark Knight", "Christian Bale", "Christopher Nolan", "Superhero", "153 minutes", "https://www.youtube.com/watch?v=EXeTwQWrcwY", "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg");
var trailer44 = makeTrailer("pulp Fiction", "John Travolta", "Quentin Tarantino", "Comedy", "154 minutes", "https://www.youtube.com/watch?v=5ZAhzsi1ybM", "https://i1.wp.com/cinedweller.com/wp-content/uploads/2020/04/pulp-fiction-affiche-francaise-cannes.jpg?resize=400%2C650&ssl=1");
var trailer45 = makeTrailer("the lord of the rings fantasy", "Viggo Mortensen", "Peter Jackson", "Fantasy", "228 minutes", "https://www.youtube.com/watch?v=LbfMDwc4azU", "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg");
var trailer46 = makeTrailer("Fight Club", "Edward Norton", "David Fincher", "Action", "139 minutes", "https://www.youtube.com/watch?v=qtRKdVHc-cE", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdLTXtlwgmOU3b9iXMccLmWsFVJlBxwG3PBodcNk2O3SfJx1Jx");
var trailer47 = makeTrailer("Forrest Gump", "Tom Hanks", "Robert Zemeckis", "Comedy", "142 minutes", "https://www.youtube.com/watch?v=XHhAG-YLdk8", "https://img8.cdn.cinoche.com/images/9d85f441a28d25ff78c327a42b6f7faf.jpg");
var trailer48 = makeTrailer("Inception", "Leonardo DiCaprio", "Christopher Nolan", "Sience-Fiction", "148 minutes", "https://www.youtube.com/watch?v=YoHD9XEInc0", "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg");
var trailer49 = makeTrailer("The Matrix", "Keanu Reeves", "The Wachowski", "Sience-Fiction", "130 minutes", "https://www.youtube.com/watch?v=vKQi3bBA1y8", "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg");
var trailer50 = makeTrailer("Avengers Endgame", "Robert Downey Jr ", "Anthony & Joe Russo", "Superhero", "181 minutes", "https://www.youtube.com/watch?v=TcMBFSGVi1c", "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810");
var trailers = [trailer1, trailer2, trailer3, trailer4, trailer5, trailer6, trailer7, trailer8, trailer10, trailer11, trailer12, trailer13, trailer14, trailer15, trailer16, trailer17, trailer18, trailer19, trailer20, trailer21, trailer22, trailer23, trailer24, trailer25, trailer26, trailer27, trailer28, trailer30, trailer31, trailer32, trailer33, trailer34, trailer35, trailer36, trailer37, trailer38, trailer39, trailer40, trailer41, trailer42, trailer43, trailer44, trailer45, trailer46, trailer47, trailer48, trailer49, trailer50];


function addTrailer(trailers, newtrailer) {
  return trailers.push(newtrailer);
}

var home = $("<button><span>Home</span></button>");
home.addClass("home");
$(".topnav").append(home)

var newtrailer = $("<button><span>Add Trailer</span></button>");
newtrailer.addClass("newtrailer");
$(".topnav").append(newtrailer);

var news = $("<button><span>News</span></button>");
news.addClass("news");
$(".topnav").append(news);

$(".myform").hide()

$(".newtrailer").click(function () {
  $(".myform").toggle(2000);
});


$(".news").click(function () {
  alert("Nothing updated this week")
});



function createCards(trailer) {
  var column = document.createElement("div");
  column.id = "column";
  document.getElementById("mycards").appendChild(column);

  var card = document.createElement("div");
  card.id = "card";
  document.getElementById("column").appendChild(card);

  var image = document.createElement("img");
  image.src = trailer.image;
  document.getElementById("card").appendChild(image);

  // var div = document.createElement("div");
  // div.id="text";
  // div.innerHTML='<h1 id='+'title'+'>'+"Title :"+trailer.title+'</h1>'
  // document.getElementById("card").appendChild(div);

};

function displaytrailers(trailers) {
  document.getElementById("mycards").innerHTML = "";
  var cards = document.getElementById("card");
  for (var i = 0; i < trailers.length; i++) {
    createCards(trailers[i]);
  }
};
displaytrailers(trailers);


$(".myform").submit(function (e) {
  e.preventDefault();


  var takeValue = $("input");

  var newtrailer = makeTrailer(takeValue[0].value, takeValue[1].value, takeValue[2].value, takeValue[3].value, takeValue[4].value, takeValue[5].value, takeValue[6].value);

  addTrailer(trailers, newtrailer);
  $('.mycards').html('')
  displaytrailers(trailers);

});

var newarr = [];

$(".Search-btn").click(function () {
  for (var i = 0; i < trailers.length; i++) {
    if (trailers[i].title.toUpperCase().includes($(".Search-txt").val().toUpperCase())) {
      newarr.push(trailers[i])
    }
  }
  displaytrailers(newarr)

})




