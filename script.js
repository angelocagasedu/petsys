let btnAdd = document.querySelector(".btnAdd");
let btnDelete = document.querySelector(".btnDelete");
let btnUpdate = document.querySelector(".btnUpdate");
let mainTable = document.querySelector(".mainTable");

class Pet {
    constructor(name, age, days) {
        this.name = name;
        this.age = age;
        this.days = days;
    }
}

btnAdd.addEventListener('click', function(){
    let petName = prompt("Enter the name of your pet");
    let petAge = prompt("Enter the age of your pet");
    let petDaysAttended = prompt("Enter the days attended");

    let dog = new Pet(petName, petAge, petDaysAttended);

    mainTable.innerHTML += `
    <td> ${dog.name} </td>
    <td> ${dog.age} </td>
    <td> ${dog.days} </td>
    `;
});

btnDelete.addEventListener('click', function(){
    let petName = prompt("Enter the name of pet to delete");

    for (let row of mainTable.rows) {
        for(let cell of row.cells) {
            if(cell.innerText == petName){
                alert(`${cell.innerText} will be deleted.`)
                row.innerHTML = "";
            }
        }
    } 
});

btnUpdate.addEventListener('click', function(){
    let petName = prompt("Enter the name of pet to edit");
    let newPetName = prompt("Enter the pet's new name: ");
    let newPetAge = prompt("Enter the pet's new age: ");
    let newPetDaysAttended = prompt("Enter the pet's new days attended: ");

    for (let row of mainTable.rows) {
        for(let cell of row.cells) {
            if(cell.innerText == petName){
                row.innerHTML = `
                <td> ${newPetName} </td>
                <td> ${newPetAge} </td>
                <td> ${newPetDaysAttended} </td>
                `
       }
    }
}
    
});