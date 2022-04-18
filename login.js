

function clicked() {
	// window.alert("Button got clicked"); 
	var userEmail = document.querySelector("#email_field").value;
	var userPassword = document.querySelector("#password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location = "home.html"
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Alert: " + errorMessage);
    window.location = "login.html"
  });

	
}


// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     function logOut() {
//     	firebase.auth().signOut();
//     }
//   } else {
    
//   }
// });

function logOut() {
    	firebase.auth().signOut();
    	window.location ="login.html"
    }