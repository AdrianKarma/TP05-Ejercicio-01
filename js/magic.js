let magicNumber;
let startButton = document.getElementById("start");
let gameDiv = document.getElementById("game");
let numberInput = document.getElementById("number");
let sendButton = document.getElementById("send");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function startGame() {
  magicNumber = generateRandomNumber();
  startButton.classList.add("d-none");
  gameDiv.classList.remove("d-none");
  numberInput.value = "";
  numberInput.focus();
}
function sendNumber() {
  let number = parseInt(numberInput.value);
  if (isNaN(number) || number < 1 || number > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
  } else {
    if (number === magicNumber) {
      alert("¡Felicitaciones! Has adivinado el número mágico.");
      startGame();
    } else if (number < magicNumber) {
      alert(
        "El número que ingresaste es menor al número mágico. Intenta de nuevo."
      );
      numberInput.value = "";
      numberInput.focus();
    } else {
      alert(
        "El número que ingresaste es mayor al número mágico. Intenta de nuevo."
      );
      numberInput.value = "";
      numberInput.focus();
    }
  }
}

startButton.addEventListener("click", startGame);
sendButton.addEventListener("click", sendNumber);
