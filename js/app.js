
function message(){
    let name = prompt("Введите ваше имя");
    alert(`Приветствую, ${name}`);
}

function app() {
    var message = document.getElementById("mess").value
    var name = document.getElementById("name").value
    document.getElementById("message1").innerText = (`${name}: ${message}`) //вывод в поле чата имени и сообщения
    console.log("Сообщение:", message, ".", "Имя:", name) //вывод в консоль имени и сообщения
}
