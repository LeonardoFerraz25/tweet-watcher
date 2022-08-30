export default async function getUserTweets(id) {
  const url = `http://localhost:3001/twitter/tweets/${id}`;
  const tweets = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return tweets;
}