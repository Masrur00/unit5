import "./style.css";

import logo from './img/logo_img.png';
console.log("hello");

const div = document.createElement('div');
const p =   document.createElement('p');
const img = document.createElement('img');

p.textContent = "Everthing is working fine";
// p.addEventListener("class", "para");
// img.addEventListener("id","jpg");
img.src = logo;

div.append(img,p);

document.body.append(div);
