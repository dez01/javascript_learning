const database = [
  {
    username: "Alexis",
    password: "secret"
  },
  {
    username: "Imane",
    password: "supersecret"
  },
  {
    username: "Loic",
    password: "topsecret"
  }
];



function isUserValid(user, pass){
  let result = [];
  database.forEach(function(credentials) {
    result.push(credentials);
    if(user === credentials.username && pass === credentials.password){
      
      
    }
  });

}

// function signIn(user, pass){
//   console.log(isUserValid(user, pass));

// }

isUserValid("Alexis", "secret");