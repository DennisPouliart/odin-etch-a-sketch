const container = document.querySelector('#container');

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
        event.target.style.backgroundColor = "#df4c39";
    }) 

    box.addEventListener("mouseleave", (event) => {
        console.log("event leave fired");
        event.target.style.backgroundColor = "#df4c39";
    }) 
});

/*box.addEventListener("mouseover", (event) => {
    console.log("event fired");
    event.target.style.backgroundColor = "purple";
}) */
