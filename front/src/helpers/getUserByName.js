export default async function getUserByName(name) {
  const url = `http://localhost:3001/twitter/user/${name}`;
  const user = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return user;
}