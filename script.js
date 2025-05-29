const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const change = document.querySelector('#change');

for(i=0; i<256; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "box");
    container.appendChild(square);
    console.log("test");
}

const box = document.querySelectorAll('#box');

console.log(box);

box.forEach(box => {
    box.addEventListener("mouseenter", (event) => {
        console.log("event enter fired");
        event.target.classList.add("active");
    }) 
});

reset.addEventListener("click", function (e) {
    console.log("reset");
    box.forEach((box) => {
        box.classList.remove("active");
    })
});

