const API = "https://api.github.com/users/";

const img = document.getElementById("img");
const login = document.getElementById("log");
const id = document.getElementById("id");
const following = document.getElementById("following");
const followers = document.getElementById("followers");
const publick = document.getElementById("publick");
const search = document.getElementById("search");

async function getUsers(event) {
  event.preventDefault();
  const response = await fetch(API + search.value);
  const users = await response.json();
  console.log("users: ", users);

  img.src = users.avatar_url;
  login.innerHTML = users.login;
  id.innerHTML = users.id;
  followers.innerHTML = users.followers;
  following.innerHTML = users.following;
  publick.innerHTML = users.public_repos;
}
