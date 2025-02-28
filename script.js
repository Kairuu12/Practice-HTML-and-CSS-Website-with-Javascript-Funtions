function Submit() {
    let x = document.getElementById("fname").value;
    let y = document.getElementById("lname").value;
    let z = ("Hello " + x + " " + y + " ! " + "Welcome to my Practice Website!");
    document.getElementById("name-box").innerHTML = z;
}