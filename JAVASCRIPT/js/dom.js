const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
btn.addEventListener("click", function () {
    console.log(document.body.style);
    const currentColor = document.body.style.backgroundColor;
    if (currentColor === "black") {
        document.body.style.backgroundColor = "white";
        heading.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        heading.style.color = "white";
    }
    console.log(currentColor);
});