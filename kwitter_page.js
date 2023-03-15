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

//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name +"</h4>";
message_with_tag="<h4 class='message_h4>'"+ message +"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id + "value= " + like + "onclick='updatelike(this.id)'>likes:" + like + "</button>";

row=name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML +=row;
//End code
} });  }); }
getData();

function logout(){

      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      
      msg=document.getElementById("msg").ariaValueMax;
      firebaseConfig.datebase().ref(room_name).push({
            name:user_name
            message:msg
            like:0
      })

      document.getElementsById("msg").value="";

}
function updatelike(message_id){

 console.log("cliked on lije button -" + message_id);
 button_id=message_id;
 like=document.getElementById(button_id).value;
 update_like=Number(like) + 1;
 console.log(update_like);

 firebase.database().ref(room_name).child(message_id).update({
     
      like:update_like
 });
 
}