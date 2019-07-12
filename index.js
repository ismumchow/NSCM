// used for later 
var team = {
    "name" : "Green Bay Packers", 
    "numOfPlayers" : 52, 
}

console.log ('this works');

window.onload = function () {
    
        let salary_span = document.getElementById("nfl-salary"); //dom variables 
        let salary = parseFloat(salary_span.innerHTML, 10);
        console.log(salary);

        const salRef = document.getElementById("nfl-salary");
        const addBtn = document.getElementById('add'); 
        const subtractBtn = document.getElementById('subtract'); 

        addBtn.onclick = function addToSalaryCap() {

            salary += 10.0; 
            console.log("the value was just added, it is now " + salary);
            salary_span.innerHTML = salary;

        }
        subtractBtn.onclick = function addToSalaryCap() {
            if (salary <= 10) {
                alert('you are under the salary cap');
            }
            else {
            salary -= 10.0;
            console.log("the value was just subtracted, it is now " + salary);
            salary_span.innerHTML = salary;
            }
        }


}