var input = document.getElementById("input");
var add = document.getElementById("add");
var tareas_container = document.getElementById("tareas");

add.addEventListener("click", function (e) {
  var inputValue = document.getElementById("input").value;
  e.preventDefault();
  if (inputValue == "") {
    console.log("error");
  } else {
    tareas_container.innerHTML += `
      <div class="todo">
        <div class="check" id="uno"></div>
        <p class="line" id="dos">${inputValue}</p>
      </div>
    `;
    inputValue = "";
    var check = document.getElementById();
    var line = document.getElementById();
    check.addEventListener("click", function(e){
      line.classList.toggle("complete")
    })
  }
    
});
