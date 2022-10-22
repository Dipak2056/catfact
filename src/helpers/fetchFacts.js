//api end point
const API_ENDPOINT = "https://catfact.ninja/facts?page=";

//for targeting random page and random fact item
const randomGenerator = (n) => {
  return Math.floor(Math.random() * n);
};

const fetchFact = async () => {
  try {
    return await fetch(API_ENDPOINT + randomGenerator(34))
      .then((response) => response.json())
      .then(({ data }) => data[randomGenerator(9)]);
  } catch (error) {
    return "There is some error fetching data from server, please try again.";
  }
};

export default fetchFact;
