var fav = JSON.parse(localStorage.getItem("fav"));
const app = document.getElementById('app');

// Add Child
for(var i = 0; i < fav.length; i++) {
    var obj = fav[i];
    // let newImage = document.createElement('img');
    let newP = document.createElement('p');
    let newApp = document.createElement('a');
    newApp.setAttribute('class', 'icon iconapp');
    newApp.setAttribute('href', obj.link);
    newApp.setAttribute('id', obj.id);
    newP.textContent = obj.name;

    // newApp.appendChild(newImage);
    newApp.appendChild(newP);
    app.appendChild(newApp);

    // console.log(obj.name);
}
// ()
function a() {
    console.log(fav);
}
// Add App
function addApp() {
    var newId = fav.length + 1;
    var newAppData = {
        "id": newId,
        "name": document.getElementById('appname').value,
        "link": document.getElementById('applink').value
    }
    var apps = JSON.parse(localStorage.getItem("fav")) || [];
    apps.push(newAppData);
    localStorage.setItem("fav", JSON.stringify(apps));
    location.reload();
}
document.getElementById('simpanbutton').addEventListener('click', addApp);

// Delete App
var iconapp = document.getElementsByClassName('iconapp');
for (var i = 0; i < iconapp.length; i++) {
    iconapp[i].addEventListener('click', delApp(this));
}
function delApp(a) {
    a.getAttribute('id');
    var apps = JSON.parse(localStorage.getItem("fav")) || [];
    apps.push(newAppData);
    localStorage.setItem("fav", JSON.stringify(apps));
    location.reload();
}