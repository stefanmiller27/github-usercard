import axios from 'axios'


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get( `https://api.github.com/users/stefanmiller27` )

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    console.log(res.data);
    const theirGitHub = userCardMaker(res.data);
    const cards = document.querySelector('.cards');
    cards.appendChild(theirGitHub);

  })
    .catch(err => {
      console.error(err);
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/



function userCardMaker({avatar_url, name, login, location, html_url, followers, following, bio}) {

  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const myName = document.createElement('h3');
  const userName = document.createElement('p');
  const myLocation = document.createElement('p');
  const profile = document.createElement('p');
  const userLink = document.createElement('a');
  const myFollowers = document.createElement('p');
  const myFollowing = document.createElement('p');
  const myBio = document.createElement('p');


card.appendChild(image);
card.appendChild(cardInfo);
cardInfo.appendChild(myName);
cardInfo.appendChild(userName);
cardInfo.appendChild(myLocation);
cardInfo.appendChild(profile);
cardInfo.appendChild(myFollowers);
cardInfo.appendChild(myFollowing);
cardInfo.appendChild(myBio);


profile.textContent = 'Profile';
profile.appendChild(userLink);

card.classList.add('card');
cardInfo.classList.add('card-info');
myName.classList.add('name');
userName.classList.add('username');


image.setAttribute('src', avatar_url);
image.alt = 'github user'
myName.textContent = name;
userName.textContent = login;
myLocation.textContent = location;
userLink.innerHTML = html_url;
userLink.setAttribute('href', html_url);
userLink.setAttribute('target', 'blank');
myFollowers.textContent = `Followers: ${followers}`;
myFollowing.textContent = `Following: ${following}`;
myBio.textContent = bio;



return card;

}