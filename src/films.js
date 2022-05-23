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
.filter()
Per a això, hauràs d'implementar la funció moviesAverage(), 
la qual rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.
*/
function moviesAverageOfDirector(array, director) {
  let pelisDirector = array.filter(n => n.director == director);
  result = moviesAverage(pelisDirector);

  return result;

}

function moviesAverage(pelis) {
  // Devuelve un float con la puntiación media de un array de películas
  let suma = 0;
  let long = pelis.length;
  if (!long) return 0;
  pelis.forEach(function (pelicula) {
    suma = suma + pelicula.score;
    if (!pelicula.score) long--;  // No tener en cuenta esta peli
  });
  let result = (suma / long).toFixed(2);
  result = parseFloat(result);        // parseFloat porque toFixed() lo convierte a String
  //console.log(result);
  return (result);
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
    // Los años y títulos son iguales, no cambia
    return 0;
  });

  return (pelis);

}





// Exercise 6: Calculate the average of the movies in a category
// usar  Exercise 3: moviesAverage()
function moviesAverageByCategory(array, categoria) {
  let result = 0;
  let peliculas = array.filter(x => x.genre.includes(categoria));
  if (!peliculas) return (0);
  // console.log(peliculas);

  result = moviesAverage(peliculas);
  return (result);
}




// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let pelisList = array.map((x) => x);  // Clonar el array (1=>1)
  let horas = 0;
  let minutos = 0;
  let auxArray = [];

  let result = pelisList.map(function (pelicula) {
    auxArray = pelicula.duration.split(" ");
    horas = parseInt(auxArray[0]);
    minutos = parseInt(auxArray[1]);
    if (auxArray.length == 1) minutos = 0;    // Solo hay horas, no minutos
    //console.log(`pelicula.duration: ${pelicula.duration} horas: ${horas} minutos: ${minutos}`);
    pelicula.duration = parseInt((horas * 60) + minutos);

    return (pelicula);
  });

  return result;

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
