function Submit() {
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    if (!firstName || !lastName) {
        alert("Please fill in all fields");
    } else {
        const fullName = ("Hello " + firstName + " " + lastName + " and welcome to my practice website!");
        document.getElementById("name-box").innerHTML = fullName;
    }
}