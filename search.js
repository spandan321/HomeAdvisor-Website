 
let list_div= document.querySelector(".table");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");


input1.addEventListener("input",forCity);

input2.addEventListener("input",forProf);


//const city = document.querySelector(".input1").value;
//const prof= document.querySelector(".input2").value;

// function attribute()
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDmVPdy2tRyn7X8q22QeHp_Rd8soyq5IXY",
    authDomain: "sign-in-page-52489.firebaseapp.com",
    projectId: "sign-in-page-52489",
    storageBucket: "sign-in-page-52489.appspot.com",
    messagingSenderId: "290523756214",
    appId: "1:290523756214:web:ff625b63cdc5544cff5817",
    measurementId: "G-NQBTFXJZC7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});




 db.collection("workers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list_div.innerHTML += "<tr class='list_item '><td>" + doc.data().Name + "</td><td class='Profession'>" + doc.data().Profession
         + "</td><td>" + doc.data().Area +"</td><td class='city'>" + doc.data().City +"</td><td>" + doc.data().Mob_no +"</td></tr>"
    });
});

  
// setTimeout(forCity, 10000);  
function forCity(e) {
  const city = e.target.value.toLowerCase();
  const lists = document.querySelectorAll(".list_item");
  input2.addEventListener("input", function() {
    const val = document.querySelector(".input2").value;
    
   if(city.length !=0 || val.length !=0 ) {
    // console.log(city)
    if(val.length !=0) {
      lists.forEach((list_item) => {
      const dataInput = list_item.querySelector(".city").innerHTML.toLowerCase();
      const profInput = list_item.querySelector(".Profession").innerHTML.toLowerCase();
      if(dataInput.indexOf(city) >-1 && profInput.indexOf(val) > -1){
        list_item.style.display = '';
      } else {
       list_item.style.display = 'none';
      }

    });
    }else {
      lists.forEach((list_item) => {
      list_item.style.display = 'table-row';
     });
    }
    
  } else {
    lists.forEach((list_item) => {
      list_item.style.display = 'table-row';
  });
}

 });
}
//   const lists = document.querySelectorAll(".list_item");
//   if(city.length !=0) {
//     // console.log(city)
//     lists.forEach((list_item) => {
//       const dataInput = list_item.querySelector(".city").innerHTML.toLowerCase();
//       if(dataInput.indexOf(city) >-1){
//         list_item.style.display = '';
//       } else {
//        list_item.style.display = 'none';
//       }

//     })
//   } else {
//     lists.forEach((list_item) => {
//       list_item.style.display = 'table-row';
//   });
// }
// if(input2.value == ""){
//   // console.log(city)
//  second(city)
 
// }
// };
// dataInput.indexOf(city) >-1
function forProf(e) {
  const prof = e.target.value.toLowerCase();
  const lists = document.querySelectorAll(".list_item");
  if(prof.length !=0 ) {
    // console.log(city)
    lists.forEach((list_item) => {
      const profInput = list_item.querySelector(".Profession").innerHTML.toLowerCase();
      if(profInput.indexOf(prof) >-1){
        list_item.style.display = '';
      } else {
       list_item.style.display = 'none';
      }
    })
  } else {
    lists.forEach((list_item) => {
      list_item.style.display = 'table-row';
  });
}};

// function second(city) {
//   // console.log(city);
//   input2.addEventListener("input", function() {
//     const val = document.querySelector(".input2").value;
//     console.log(city,val);
//      // lists.forEach((list_item) => {
//      //   const profInput1 = list_item.querySelector(".Profession").innerHTML.toLowerCase();
//      //   if( profInput1 == val  && city == dataInput){
//      //     list_item.style.display = '';
//      //   } else {
//      //    list_item.style.display = 'none';
//      //   }
//      // })
  
//  });
// }