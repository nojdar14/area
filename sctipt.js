document.getElementById("calc-butt").addEventListener("click", clickedbtn);

function clickedbtn() {
  //Input
  input1 = Number(document.getElementById("A").value);
  input2 = Number(document.getElementById("B").value);
  input3 = Number(document.getElementById("H").value);
  let menu = document.getElementById("measurment");
  let choice = menu.value;
  console.log(choice);
  //Process

  inputAll = ((input1 + input2) / 2) * input3;
  inputAll = inputAll.toFixed(2);

  // Output
  document.getElementById("output1").innerHTML = inputAll;
  document.getElementById("A").Value = "";
  document.getElementById("B").value = "";
  document.getElementById("H").value = "";
  document.getElementById("output1").style.border = "2px solid green";
  document.getElementById("image").src = "img/images.png";
}
