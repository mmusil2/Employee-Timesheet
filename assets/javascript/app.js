// function renderTrains(list) {
//     // add for loop

//     var tRow = $("<tr>");
    
//     var nameTd = $("<td>").text(list.name);
//     var destTd = $("<td>").text(list.dest);
//     var freqTd = $("<td>").text(list.freq);
//     var nextTd = $("<td>").text(list.next);
//     var minTd = $("<td>").text(list.min);
    
//     tRow.append(nameTd, destTd, freqTd, nextTd, minTd);
    
//     $("tbody").append(tRow);
// }

// list = {
//     name: "train",
//     dest: "NYC",
//     freq: "30",
//     next: "12:30 AM",
//     min: "5"
// }

// renderTrains(list);


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCgNJIApfmEWrTWHbVF2snpn5KhSw7PLfY",
    authDomain: "employee-463cf.firebaseapp.com",
    databaseURL: "https://employee-463cf.firebaseio.com",
    projectId: "employee-463cf",
    storageBucket: "employee-463cf.appspot.com",
    messagingSenderId: "208712003593"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
    event.preventDefault();
  
    var name = $("#name").val().trim();
    var role = $("#role").val().trim();
    var date = $("#date").val().trim();
    var rate = $("#rate").val().trim();

    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate
    });
});

var dateAdded = firebase.database.ServerValue.TIMESTAMP;
console.log(dateAdded);

// database.ref().orderByChild(dateAdded).limitToLast(1).on(child_added, function(snapshot) {
//     console.log(snapshot);
// });

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    console.log(snapshot.val().name);

});

