let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/ie.png');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
    }
}

var MyButton = document.querySelector("button");
var myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem("name")){
  setUserName();
} else{
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
MyButton.onclick = function(){
  setUserName();
}
