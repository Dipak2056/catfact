//api end point
const API_ENDPOINT = "https://catfact.ninja/facts?page=";

//for targeting random page and random fact item
const randomGenerator = (n) => {
  return Math.floor(Math.random() * n);
};

const fetchFact = async () => {
  return await fetch(API_ENDPOINT + randomGenerator(34))
    .then((response) => response.json())
    .then(({ data }) => data[randomGenerator(9)]);
};

export default fetchFact;
