const firebaseConfig = {
    apiKey: "AIzaSyCiX9ooSIEuTWTkCCd-oKN8aUrfATArGlE",
    authDomain: "mssolar-652ad.firebaseapp.com",
    databaseURL: "https://mssolar-652ad-default-rtdb.firebaseio.com",
    projectId: "mssolar-652ad",
    storageBucket: "mssolar-652ad.appspot.com",
    messagingSenderId: "395886386706",
    appId: "1:395886386706:web:f38175f265b651837e82cb"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //refrence database

var MssolarFormDB = firebase.database().ref('MssolarForm');

document.getElementById('MssolarForm').addEventListener('submit', submitForm);

function submitForm(e){
   
    e.preventDefault();

    var name = 
}

const getElementVal=(id)=>{

    return document.getElementById(id).value;
};