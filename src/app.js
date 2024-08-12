import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["My dog", "My grandma", "The mailman", "My bird", "My mom"];
  let action = ["ate", "peed", "crushed", "broke", "stole"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before class",
    "while I was sleeping",
    "while I was exercising",
    "during my lunch break",
    "while I was taking a shower"
  ];

  // Objetos Random
  // -> declarar variable -> operaciones mathematicas de redondeo y random -> * array.lenght del index array

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
};
