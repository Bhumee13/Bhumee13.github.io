function darkMode() {
    document.getElementById('mainPage').style = "background-color : #202020";
    document.getElementById('heading0').style = "color : #D3D3D3";
    document.getElementById('heading1').style = "color : #D3D3D3";
    document.getElementById('heading2').style = "color : #D3D3D3";
    document.getElementById('para1').style = "color : #B0B0B0	";
    document.getElementById('para2').style = "color : #B0B0B0	";
    document.getElementById('para3').style = "color : #B0B0B0	";
    document.getElementById('current').textContent = "Dark";
}

function lightMode() {
    document.getElementById('mainPage').style = "background-color : #B0C4DE";
    document.getElementById('heading0').style = "color : #191970";
    document.getElementById('heading1').style = "color : #191970";
    document.getElementById('heading2').style = "color : #191970";
    document.getElementById('para1').style = "color : #4682B4	";
    document.getElementById('para2').style = "color : #4682B4	";
    document.getElementById('para3').style = "color : #4682B4	";
    document.getElementById('current').innerHTML = "Light";

}

function Default() {
    document.getElementById('mainPage').style = "background-color : white";
    document.getElementById('heading0').style = "color : black";
    document.getElementById('heading1').style = "color : black";
    document.getElementById('heading2').style = "color : black";
    document.getElementById('para1').style = "color : black	";
    document.getElementById('para2').style = "color : black	";
    document.getElementById('para3').style = "color : black	";
    document.getElementById('current').innerHTML = "Default";
 
}