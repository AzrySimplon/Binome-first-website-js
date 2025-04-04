const colorsArray = {
    textTitle: ["hsl(227, 75%, 14%)", "hsl(200, 60%, 99%)"],
    bgGradient: ["linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)", "linear-gradient(180deg, #040918 0%, #091540 100%)"],
}





async function fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
}

function populateSection(array, section) {
    section.replaceChildren();
    array.forEach(element => {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "extension-div")

        const topDiv = document.createElement("div");

        const image = document.createElement("img")
        image.setAttribute("src", element.logo)

        const textDiv = document.createElement("div");

        const name = document.createElement("h3");
        name.innerText = element.name;

        const interactiveDiv = document.createElement("div");
        interactiveDiv.setAttribute("id", element.name);

        const removebutton = document.createElement("button");
        removebutton.innerText = "Remove";

        const input = document.createElement("input")
        input.setAttribute("type", "checkbox");
        input.setAttribute("onclick", "activeInactive(this.parentElement.id)");
        // onclick={} /

        const paragraph = document.createElement("p");
        paragraph.innerText = element.description;

        interactiveDiv.appendChild(removebutton);
        interactiveDiv.appendChild(input);
        topDiv.appendChild(image);
        textDiv.appendChild(name);
        textDiv.appendChild(paragraph);
        topDiv.appendChild(textDiv);
        mainDiv.appendChild(topDiv);
        mainDiv.appendChild(interactiveDiv);
        section.appendChild(mainDiv);
    });
}

function filterArray(state) {
    let returnArray;
    if (state === true || state === false) {
        returnArray = dataJSON.filter((obj) => obj.isActive === state);
    }
    else {
        returnArray = dataJSON;
    }
    populateSection(returnArray, extensionsSection);
}

function changeColorMode() {
    let index;
    if (activeMode === "light") {
        index = 0;
    }
    else {
        index = 1;
    }

    /*document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');*/

    //edit button image

}

function activeInactive(id) {
    console.log(id);
    const listIndex = dataJSON.findIndex((obj) => obj.name === id);
    dataJSON[listIndex].isActive = !dataJSON[listIndex].isActive;
}

const extensionsSection = document.getElementById("extensions-section");
let dataJSON;
let activeMode = "light";

fetchData().then(data => {
    populateSection(data, extensionsSection); dataJSON = data
});
