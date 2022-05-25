const url='https://localhost:44398/api/Interns/';
const da = document.getElementById('div1');

document.getElementById('btn1').addEventListener('click',getData);

function getData(){

    var requestOptions = {

        method: 'GET',

        redirect: 'follow'

      };

     

      fetch("https://localhost:44398/api/Interns/", requestOptions)

        .then(response => response.text())

        .then(result => showData(result))

        .catch(error => console.log('error', error));}

function showData(data) {

    document.getElementById('div1').innerHTML = data;

//   _displayCount(data.length);

}
document.getElementById('btn-2').addEventListener('click',getSingle);

 function getSingle(){

     var id=document.getElementById("input").value;
     console.log(id);

     var url="https://localhost:44398/api/Interns/"+ id;

    fetch(url)

    .then(response => response.text())

    .then(result => showRecord(result))

    .catch(error => console.log('error', error));}

function showRecord(data) {

document.getElementById('div1').innerHTML = data;

}
let Phonenumber = document.getElementById('phone');

console.log(Phonenumber);

function insert(){

           

   

    let sportsName = document.getElementById("name");

    let sportsType = document.getElementById("age");

    let maxMembers = document.getElementById("university");

    let Phonenumber = document.getElementById('phone');

    console.log(Phonenumber);
   

    // Creating a XHR object

    let xhr = new XMLHttpRequest();

    let url = "https://localhost:44398/api/Interns";



    // open a connection

    xhr.open("POST", url, true);



    // Set the request header i.e. which type of content you are sending

    xhr.setRequestHeader("Content-Type", "application/json");



    // Create a state change callback

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {



            // Print received data from server

            da.innerHTML = this.responseText;



        }

    };



    // Converting JSON data to string

    var response = JSON.stringify({  "internName": sportsName.value , "internAge":sportsType.value, "internUniversity":maxMembers.value  , "internPhonenumber": Phonenumber.value});

    document.getElementById('div1').innerHTML = response;

    // Sending data with the request

    xhr.send(data);

}
document.getElementById('div1').innerHTML = data;

function search() {

   

    var id=document.getElementById("searchbox").value;

    var url="https://localhost:44398/api/Interns/"+id;

    fetch(url)

    .then((res) => res.text())

    .then(res => showData(res))  

    }

       

     

  function showData(data)

  {

      document.getElementById('div1').innerHTML=data;

  }
