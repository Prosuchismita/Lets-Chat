var firebaseConfig = {
  apiKey: "AIzaSyC6iSHtUyq8jooMFzU-6bty7uDHXF-ETzk",
  authDomain: "lets-chat-a0409.firebaseapp.com",
  projectId: "lets-chat-a0409",
  storageBucket: "lets-chat-a0409.appspot.com",
  messagingSenderId: "274301922790",
  appId: "1:274301922790:web:d141fadbc78c84d4ca3a27",
  measurementId: "G-EN65SK0MWL"
};

// Initialize Firebase
firebaase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addUser(){
    user_name = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", user_name);
      window.location = "kwitter_room.html";
}

