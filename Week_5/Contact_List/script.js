/**
 * 1. display image with text over it
 * * hover
 * * 
 * 2. Onclick action
 * * Student details
 * * Name 
 * * Job description
 * * age
 * * hobby
 * * eye color
 * * nationality
 */

const students = [];

students[0] = {
    job: "Powercoders Participant",
    name: "Gebremedhin",
    age: 31,
    hobby: "Football",
    photo: "images/Gebre.png"
};

students[1] = {
    job: "Powercoders Participant",
    name: "Farah",
    age: 31,
    hobby: "Football",
    photo: "images/Fara.jpg"
};

students[2] = {
    job: "Powercoders Participant",
    name: "Sasha",
    age: 31,
    hobby: "Football",
    photo: "images/Sasha.jpg"
};

function change(section, id) {
    const appendDetails = [];
    const newElement = [];
    section.textContent = ""; 

    
    appendDetails[0] = `Name: ${students[id].name}`;
    appendDetails[1] = `Job: ${students[id].job}`;
    appendDetails[2] = `Age: ${students[id].age}`;
    appendDetails[3] = `Hobby: ${students[id].hobby}`;

    for(let index = 0; index < appendDetails.length; index++){
        newElement[index] = document.createElement('p');
        newElement[index].innerText = appendDetails[index];
        section.appendChild(newElement[index]);      
    }

    section.style.fontWeight = "bold";
    section.style.backgroundImage = "images/Sasha.jpg";
    section.style.lineHeight = "40px";

   }
  
  
