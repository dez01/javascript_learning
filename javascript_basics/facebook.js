const database = [
  {
    username: "Alexis",
    password: "secret"
  }
]

const newfeeds = [
  {
    username: "Imane",
    timeline: "Javascript script is so cool!"
  },
  {
    username: "Loic",
    timeline: "Javascript script is so cool!"
  }
];

const userNamePrompt = prompt("What's you're name?");
const passwordPrompt = prompt("What's you're password?");

function signIn(user, pass) {
  if(user === database[0].username && pass === database[0].password) {
    console.log(newfeeds);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt)