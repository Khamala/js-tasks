const favouriteMovies = [
  { director: "Christopher Nolan", name: "Interstellar" },
  { director: "Quentin Tarantino", name: "Pulp Fiction" },
  { director: "Christopher Nolan", name: "Inception" },
  { director: "Christopher Nolan", name: "The Dark Knight" },
  { director: "Martin Scorsese", name: "Taxi driver" },
  { director: "Quentin Tarantino", name: "Inglorious Basterds" },
  { director: "Martin Scorsese", name: "Silence" },
];

// const uniqDirectors = favouriteMovies.filter(({ director }, index) => favouriteMovies.findIndex(({ di }) => director === di) === index);

// const uniqDirectors = favouriteMovies.reduce((acc, { director, name }) => {
//   if (!acc[director]) acc[director] = [];
//     acc[director].push(name);
//   return acc;
// }, {});

// console.log(uniqDirectors);

// favouriteMovies.indexOf(movie) = index;

const uniqDirectors = {};
favouriteMovies.forEach(({ director, name }) => {
  if (!uniqDirectors[director]) uniqDirectors[director] = [];
  uniqDirectors[director].push(name);
});
console.log(uniqDirectors);
