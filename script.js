// Door Opening

function openDoor(){

let door =
document.querySelector(".door");


door.classList.toggle("open");


let msg =
document.getElementById("message");


if(door.classList.contains("open"))
{

msg.innerHTML =
"👻 A dark shadow appears inside the room...";

}
else{

msg.innerHTML =
"Click the door to enter the forbidden room...";

}

}



// Jump Scare

function jumpScare(){

let monster =
document.getElementById("monster");


monster.style.display="flex";


// Hide after 3 seconds

setTimeout(()=>{

monster.style.display="none";

},3000);

}