let btnAdd = document.querySelector(".btnAdd");
let btnDelete = document.querySelector(".btnDelete");
let btnUpdate = document.querySelector(".btnUpdate");
let mainTable = document.querySelector(".mainTable");

                /*CREATING CLASS PET*/
class Pet {
    constructor(name, age, days) {
        this.name = name;
        this.age = age;
        this.days = days;
    }
}

                /*ADD PET*/
btnAdd.addEventListener('click', function(){
    let petName = prompt("Enter the name of your pet");
    let petAge = prompt("Enter the age of your pet");
    let petDaysAttended = prompt("Enter the days attended");
    if(isEmpty(petName, petAge, petDaysAttended)){
        alert("Please provide all information (Pet Name, Age, and days attended. Try again)");
    }
    else{
        let dog = new Pet(petName, petAge, petDaysAttended);
        mainTable.innerHTML += `
        <td> ${dog.name} </td>
        <td> ${dog.age} </td>
        <td> ${dog.days} </td>
        `;
    }  
});

                /*DELETE PET*/
btnDelete.addEventListener('click', function(){
    let success = false;
    let petName = prompt("Enter the name of pet to delete");

    for (let row of mainTable.rows) {
        for(let cell of row.cells) {
            if(cell.innerText == petName){
                success = true;
                alert(`"${cell.innerText}" will be deleted.`)
                row.innerHTML = "";
            }
        }
    }
    if(!success){
        alert(`Cannot find "${petName}" in the list.`)
    } 
});

                /*UPDATE PET*/
btnUpdate.addEventListener('click', function(){
    let success = false;
    let petName = prompt("Enter the name of pet to edit");

    for (let row of mainTable.rows) {
        for(let cell of row.cells) {
            if(cell.innerText == petName){
                success = true;
                let newPetName = prompt("Enter the pet's new name: ");
                let newPetAge = prompt("Enter the pet's new age: ");
                let newPetDaysAttended = prompt("Enter the pet's new days attended: ");

                if(isEmpty(newPetName, newPetAge, newPetDaysAttended)){
                    alert("Please provide all information (Pet Name, Age, and days attended. Try again)");
                }
                else{
                    row.innerHTML = `
                    <td> ${newPetName} </td>
                    <td> ${newPetAge} </td>
                    <td> ${newPetDaysAttended} </td>
                    `;
                } 
                
            }
    }
}
if(!success){
    alert(`Cannot find "${petName}" in the list.`)
}
});

            /*CHECK IF ENTERED IS EMPTY*/
function isEmpty(name, age, days){
    return (name == null || name.length === 0 || age == null || age.length === 0 || days == null || days.length === 0);
  }
