const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const change = document.querySelector('#change');

for(i=0; i<256; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "box");
    container.appendChild(square);
    console.log("test");
}

const box = boxSelection();

function boxSelection() {
    return document.querySelectorAll('#box');
}

function mouseLeave() {
    box.forEach(box => {
        box.addEventListener("mouseleave", (event) => {
            console.log("mouse left");
            event.target.classList.add("active");
        }) 
    });
};

box.forEach(box => {
    box.addEventListener("mouseenter", (event) => {
        console.log("event enter fired");
        event.target.classList.add("active");
    }) 
});

reset.addEventListener("click", function () {
    console.log("reset");
    box.forEach((box) => {
        box.classList.remove("active");
    })
});

change.addEventListener("click", function () {
    console.log("change");
    //let size = window.prompt("Enter new grid size", "0x0");
    let existingBoxes = document.querySelector('#container');
    let child = existingBoxes.lastElementChild;

    /* while (child) {
        existingBoxes.removeChild(child);
        child = existingBoxes.lastElementChild;
    } */

        for(x=256; x>0; x--) {
            existingBoxes.removeChild(child);
            child = existingBoxes.lastElementChild;
        }

    test();

});

function test() {

    for(z=0; z<256; z++) {
        const op = document.createElement("div");
        op.setAttribute("id", "box");
        container.appendChild(op);
        console.log("test 2");
        
    }

    const bow = document.querySelectorAll('#box');

    bow.forEach(bow => {
        bow.addEventListener("mouseenter", (event) => {
            console.log("event enter fired 2");
            event.target.classList.add("active");
        }) 
    });
};