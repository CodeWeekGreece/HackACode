//This code runs through code.org
//You can view the full project here:
//https://studio.code.org/projects/applab/nHcLbGI0Hx1dV-Omxoahc19BC0SYvC3yV-xiWjKmOUk/view

onEvent("checkboxcon", "click", function( ) {
  setScreen("user_type");
  setChecked("checkboxcon", false);
});
onEvent("button_back1", "click", function( ) {
  setScreen("start");
});
onEvent("button_customer", "click", function( ) {
  setScreen("screen_customer");
});
onEvent("button_owner", "click", function( ) {
  setScreen("screen_owner");
});
onEvent("button_back2", "click", function( ) {
  setScreen("user_type");
});
onEvent("res", "click", function( ) {
  Reservation();
  setScreen("tables");
});
onEvent("super", "click", function( ) {
  Reservation();
});
onEvent("hairsalon", "click", function( ) {
  Reservation();
});
onEvent("other", "click", function( ) {
  Reservation();
});
function Reservation() {
  setScreen("screen_reserv");
  var x;
  while (1) {
    x = getText("text_input18");
    if (x >= 15 && x <= 18 || x.length != 2) {
      showElement("label2");
      hideElement("label26");
      hideElement("checkbox_finish");
    } else {
      hideElement("label2");
      showElement("label26");
      showElement("checkbox_finish");
    }
    if (getChecked("checkbox_finish")) {
      setScreen("done");
      setChecked("checkbox_finish", false);
      setText("text_input15", "");
      setText("text_input17", "");
      setText("text_input18", "");
      setText("text_input1", "");
      return;
    }
  }
}
onEvent("button1", "click", function( ) {
  Reservation();
  setScreen("tables");
});
onEvent("button2", "click", function( ) {
  setScreen("done");
});
onEvent("button3", "click", function( ) {
  setScreen("done");
});
onEvent("button4", "click", function( ) {
  setScreen("done");
});
onEvent("button_owner", "click", function( ) {
  setScreen("screen_owner");
});
onEvent("buttonback3", "click", function( ) {
  setScreen("user_type");
});
onEvent("checkbox3", "click", function( ) {
  setScreen("done");
});
onEvent("logo1", "click", function( ) {
  setScreen("start");
});
