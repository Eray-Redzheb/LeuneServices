// Form Status

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var form = event.target;
    var statusElement = document.getElementById("my-form-status");
  
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        statusElement.style.display = "block";
      } else {
        statusElement.textContent = "Er was een foutje geweest probeer het later opnieuw!";
        statusElement.style.color = "#db3c3c";
        statusElement.style.display = "block";
      }
    };
    xhr.send(new FormData(form));
  });