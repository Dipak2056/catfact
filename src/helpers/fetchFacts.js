const API_ENDPOINT = "https://catfact.ninja/facts?page=";
const randomGenerator = (n) => {
  return Math.ceil(Math.random() * n);
};

const fetchFact = async () => {
  await fetch(API_ENDPOINT + randomGenerator(34))
    .then((response) => response.json())
    .then(({ data }) => data[randomGenerator(9)]);
};

export default fetchFact;
