var firebaseConfig = {
      apiKey: "AIzaSyAITwDcPVHhM7eLM3e0I0Wc06ZjAMeqors",
      authDomain: "kwitter-1-cd5db.firebaseapp.com",
      databaseURL: "https://kwitter-1-cd5db-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-cd5db",
      storageBucket: "kwitter-1-cd5db.appspot.com",
      messagingSenderId: "25894480034",
      appId: "1:25894480034:web:b0bf199b7a12569fc20ffb"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;

function addRoom(){

      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(

            {
                  purpose:"adding room name"
            }

      );
      
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name ="+Room_names);
      row="<div class='room_name'+id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name" ,name);
      window.location="kwitter_page.html";
}

function logout(){

      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}
