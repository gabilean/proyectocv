function toggleText() {
    var msg = document.getElementById("showMore");
    if (msg.style.display === "none") {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
  }

  function successPopup() {
    alert("Formulario enviado");
  }