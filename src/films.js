// Exercise 1: Get the array of all directors.

/*
array.map() Devuelve un nuevo array que contiene el resultado de ejecutar cada elemento a través 
de la función pasada al map
*/
function getAllDirectors(array) {
  let result = array.map(function (pelicula) {
    return (pelicula.director);
  });

  console.log("EXERCICE 1 ->", result);
  return result;
}




// Exercise 2: Get the films of a certain director
/*
array.filter() Devuelve un nuevo array que solo contiene valores que devuelven verdadero a la función pasada al filtro
*/
function getMoviesFromDirector(array, director) {
  let result = array.filter(function (pelicula) {
    return (pelicula.director == director);
  });
  console.log("EXERCICE 2 ->", result);
  return result;
}




// Exercise 3: Calculate the average of the films of a given director.
/*
.reduce() ?
Per a això, hauràs d'implementar la funció moviesAverage(), 
la qual rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.
*/
function moviesAverageOfDirector(array, director) {
  var suma = 0;
  var conta = 0;
  var result = 0;

  array.forEach(function (pelicula) {
    if (pelicula.director == director) {
      suma = suma + pelicula.score;
      conta++;
    }
  });

  result = (suma / conta).toFixed(2);
  result = parseFloat(result);        // toFixed() lo convierte a String

  console.log(`suma:${suma}`);
  console.log(`conta:${conta}`);
  console.log("EXERCICE 3 ->", result);

  console.log(typeof result);

  return result;

}






// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let pelis = array.map((x) => x);  // Clonar el array (1=>1)
  let pelis_20 = [];
  let titulos = [];

  // .sort() Ordenar según lo devuelto por fuction()
  pelis.sort(function (a, b) {
    var peliA = a.title.toUpperCase();
    var peliB = b.title.toUpperCase();
    if (peliA < peliB) {
      return -1;
    }
    if (peliA > peliB) {
      return 1;
    }
    // Los títulos son iguales
    return 0;
  });

  //Tomar los 20 primeros
  pelis_20 = pelis.slice(0, 20);

  //Crear un array 'titulos' con los titulos de pelis
  titulos = pelis_20.map(peliculas => peliculas.title);
  return titulos;
}






// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let pelis = array.map((x) => x);  // Clonar el array (1=>1)

  // .sort() Ordenar según lo devuelto por fuction()
  pelis.sort(function (a, b) {
    var peliA = a.year;
    var peliB = b.year;
    if (peliA < peliB) {
      return -1;
    }
    if (peliA > peliB) {
      return 1;
    }
    // Mismo año, ordenar por titulo 
    peliA = a.title.toUpperCase();
    peliB = b.title.toUpperCase();
    if (peliA < peliB) {
      return -1;
    }
    if (peliA > peliB) {
      return 1;
    }
    // Los años y títulos son iguales
    return 0;
  });

  return (pelis);

}





// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
