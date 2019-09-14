function rattery_info() {
  document.getElementById("rattery_info").innerHTML = "De eigenaar heet Nikki en ze woont in Alphen a/d Rijn";
}

function rattery_fb() {
  window.open("https://www.facebook.com/RatteryCreepycritters/");
}

function title_color() {
  document.getElementById("title").style.color='red';
}

function check_ratjes() {
  var ratjes_aantal = document.getElementById("antwoord").value;
  if (isNaN(ratjes_aantal)) {
    alert("Je moet wel een getal invoeren");
    return;
  }
  if (ratjes_aantal < 4) {
    ratjes_aantal = 4 - ratjes_aantal;
    document.getElementById("form_result").innerHTML = "Je hebt " + ratjes_aantal + " ratjes minder dan ik";
  }
  else if (ratjes_aantal > 4) {
    ratjes_aantal = ratjes_aantal - 4;
    document.getElementById("form_result").innerHTML = "Je hebt " + ratjes_aantal + " ratjes meer dan ik";
  }
  else {
    document.getElementById("form_result").innerHTML = "Je hebt evenveel ratjes als ik";
  }

}

function print_title() {
  var rats = new Array("Raichu", "Pichu", "Eevee", "Loki");
  var Rlen = rats.length;
  var titel = "";
  for (i=0; i<Rlen; i++) {
    titel += rats[i]
    if (i == 0 || i == 1)
      titel += ", ";
    else if (i == 2)
      titel += " & "
  }
  document.getElementById("title").innerHTML = titel;
}
