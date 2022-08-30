export default async function getUserById(id) {
  const url = `http://localhost:3001/twitter/usersById/${id}`;
  const user = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return user;
}