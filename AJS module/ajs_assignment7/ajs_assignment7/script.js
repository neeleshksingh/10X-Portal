let user;
async function firstUser(){
    user=  await fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => data.results[0]);
    document.getElementById("fullName").innerText=user.name.title+"."+" "+user.name.first+" "+user.name.last;
    document.getElementById("user-img").src=user.picture.large;
}
async function getNewUser()  {
  user=  await fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => data.results[0]);
  document.getElementById("fullName").innerText=user.name.title+"."+" "+user.name.first+" "+user.name.last;
  document.getElementById("user-img").src=user.picture.large;
  document.getElementById("detail").innerText="";
}
function getUserAge(){
    document.getElementById("detail").innerText=user.dob.age;
}
function getUserEmail(){
    document.getElementById("detail").innerText=user.email;
}
function getUserPhone(){
    document.getElementById("detail").innerText=user.phone;
}