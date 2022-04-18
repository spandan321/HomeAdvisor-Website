var firebaseConfig = {
    apiKey: "AIzaSyDmVPdy2tRyn7X8q22QeHp_Rd8soyq5IXY",
    authDomain: "sign-in-page-52489.firebaseapp.com",
    projectId: "sign-in-page-52489",
    storageBucket: "sign-in-page-52489.appspot.com",
    messagingSenderId: "290523756214",
    appId: "1:290523756214:web:ff625b63cdc5544cff5817",
    measurementId: "G-NQBTFXJZC7"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});


// db.collection('workers').get().then((snapshot) => {
//    // const docs = snapshot.docs.map(doc => doc.data());
//    // console.log(docs);
   



// })

const  form = document.querySelector("#add-worker-data");
// const  v1 = document.querySelector(".btns").value;
// const  v2 = document.querySelector(".pro").value;
// const  v3 = document.querySelector(".experience").value;
// const  v4 = document.querySelector(".city").value;
// const  v5 = document.querySelector(".area").value;
// const  v6 = document.querySelector(".mb_no").value;




// button.addEventListener('click', ()=> {
// 	console.log(v1,v2,v3.v4,v5,v6);
// })

// console.log(v1,v2,v3.v4,v5,v6);

form.addEventListener('submit', (e) =>{
	e.preventDefault();
	db.collection('workers').add({
		 Name: document.querySelector(".name").value,
		 Profession: document.querySelector(".pro").value,
		 Work_exp: document.querySelector(".experience").value,
		 City: document.querySelector(".city").value,
		 Area: document.querySelector(".area").value,
		 Mob_no: document.querySelector(".mb_no").value 
	}).then(() => {
		alert("successfully saved to Firestore");
		window.location = "home.html"
	})
	// window.location = "home.html"
})


