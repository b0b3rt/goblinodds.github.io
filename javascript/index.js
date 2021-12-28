function protagSubmit() {
  let x = document.getElementById("frm1");
  let protag = "";
  for (let i = 0; i < (x.length - 1) ;i++) {
    protag += x.elements[i].value + "<br>";
  }
  document.getElementById("protag name").innerHTML = protag;
}
