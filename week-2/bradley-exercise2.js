/*
============================================
; Title:  bradley-exercise2.js
; Author: Gunner Bradley
; Date:   03 June 2021
; Description: Displays message to the alert window, and adds text to p-tag. 
;===========================================
*/

document.addEventListener("DOMContentLoaded", function(){
  //variables  
  const btnMyCourse = document.getElementById("btnMyCourse");
  const txtMyWorld = document.getElementById("txtMyWorld");

    //btnMyCourse
    btnMyCourse.addEventListener("click", () => {
        alert("WEB 231 – Enterprise JavaScript I")
    });

    //txtMyWorld
    let studentLastName = "Bradley";
    txtMyWorld.innerHTML="You are now in " + studentLastName + "'s world!";


});