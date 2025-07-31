let display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function calculate() {
  display.value = eval(display.value);
} 

function clearDisplay() {
  display.value = "";
}
