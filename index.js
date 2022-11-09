const inputEL = document.getElementById("input");
const encodeEL = document.getElementById("encode");
const messageEL = document.getElementById("message");

//Button Click
encodeEL.addEventListener("click", function () {
  let finalMessage = "";
  let message = inputEL.value;
  message = message.toUpperCase();
  //   console.log(message);
  for (let i = 0; i < message.length; i++) {
    let asciiCode = message[i].charCodeAt();
    // console.log("13: ", finalMessage);
    if (asciiCode >= 65 && asciiCode <= 77) {
      finalMessage += String.fromCharCode(asciiCode + 13);
      //   console.log(finalMessage);
    } else if (asciiCode >= 78 && asciiCode <= 90) {
      finalMessage += String.fromCharCode(asciiCode - 13);
    } else {
      finalMessage += message[i];
    }
    console.log(finalMessage[i]);
  }

  messageEL.textContent = finalMessage;
});
