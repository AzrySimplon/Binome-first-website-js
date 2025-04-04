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
        //add image
        //add text Div
        //add h3
        //add p
        //add interactive Div
        //add remove button
        //add input
        const paragraph = document.createElement("p");
        paragraph.innerText = element.description;

        mainDiv.appendChild(paragraph);
        section.appendChild(mainDiv);
    });
}


const extensionsSection = document.getElementById("extensions-section");

fetchData().then(data => populateSection(data, extensionsSection));
