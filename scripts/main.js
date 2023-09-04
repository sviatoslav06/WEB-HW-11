const createBtn = document.querySelector('#create-btn');
const clearBtn = document.querySelector('#clear-btn');
const findBtn = document.querySelector('#find-btn');
const model = document.querySelector('#model');
const mark = document.querySelector('#mark');
const speed = document.querySelector('#speed');
const tableBody = document.querySelector('#carTable tbody');

class Car {
    constructor(mark, model, speed) {
        this.mark = mark;
        this.model = model;
        this.speed = speed;
    }
}

class Cars {
    constructor() {
        this.cars = new Array();
    }
    AddCar(mark, model, speed) {
        // let car = new Car(mark, model, speed);   
        this.cars += new Car(mark, model, speed);
    }
    Search(name) {
        for (let i = 0; i < this.cars.length; i++) {
            if (cars[i].mark.toLowerCase() == name.toLowerCase()) {
                tableBody.innerHTML += `<tr>
                                <td class="name">${cars[i].mark}</td>
                                <td>${cars[i].model}</td>
                                <td>${cars[i].speed} км/год</td>
                            </tr>`;
            }
        }
    }
    DrowToTable() {
        tableBody.innerHTML = '';
        for (let i = 0; i < this.cars.length; i++) {
            tableBody.innerHTML += `<tr>
                                <td class="name">${cars[i].mark}</td>
                                <td>${cars[i].model}</td>
                                <td>${cars[i].speed} км/год</td>
                            </tr>`;
        }
    }
    Clear() {
        tableBody.innerHTML = '';
        this.cars = null;
    }
}

let cars = new Cars();

findBtn.onclick = (e) => {
    Search();
}

createBtn.onclick = (e) => {
    if (model.value != '' && mark.value != '' && speed.value != '') {
        // let car = new Car(mark.value, model.value, speed.value);
        cars.AddCar(mark.value, model.value, speed.value);
        console.log(cars);
        cars.DrowToTable();
    }
    else alert('Enter all inputs!!!');
}

clearBtn.onclick = () => {
    cars.Clear();
}