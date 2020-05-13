document.addEventListener("keydown", updateKey);

function updateKey(event) {
    if (event.keyCode == 13) {
       sendMsg();
       
    } 
}


function sendMsg() {
    var name = document.getElementById("nameInput").value;  
    var message = document.getElementById("msgInput").value;

    if(name != "" && message != ""){
        firebase.database().ref().child('chatApp').push({
            name: name,
            message: message,
        }, function(){
            var name = document.getElementById("nameInput").value = '';
            var message = document.getElementById("msgInput").value = '';
        })

    }
}
//snapshot imagine as a variable; or we can use any name but snapshot is the default name;
firebase.database().ref().child('chatApp').on('child_added', function(snapshot){
    console.log(snapshot.val());
    var dataName = snapshot.val().name;
    var dataMsg = snapshot.val().message;

    $("#chat-room").append(`<div class="chat-box">
    <p class="lol">${dataName}</p>
    ${dataMsg}
    </div>`);
});   











