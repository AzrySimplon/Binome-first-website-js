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


const extensionsSection = document.getElementById("extensions-section");

fetchData().then(data => populateSection(data, extensionsSection));
