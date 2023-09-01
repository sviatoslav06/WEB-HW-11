const createBtn = document.querySelector('#create-btn');
const clearBtn = document.querySelector('#clear-btn');
const model = document.querySelector('#model');
const mark = document.querySelector('#mark');
const speed = document.querySelector('#speed');
const tableBody = document.querySelector('#carTable tbody');
// const findBtn = document.querySelector('#find-btn');
// const name = document.querySelector('.name');
// const find = document.querySelector('#find');

// findBtn.onclick = (e) => {
//     if(find.value.toLowerCase() == name.value.toLowerCase()){

//     }
// }

createBtn.onclick = (e) => {
    if (model.value != '' && mark.value != '' && speed.value != '') {
        let car = new Car(mark.value, model.value, speed.value);
        console.log(car);
        addCarToTable(car);
    }
    else alert('Enter all inputs!!!');
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
}

function addCarToTable(car) {
    tableBody.innerHTML += `<tr>
                                <td class="name">${car.mark}</td>
                                <td>${car.model}</td>
                                <td>${car.speed} км/год</td>
                            </tr>`;
}

class Car {
    constructor(mark, model, speed) {
        this.mark = mark;
        this.model = model;
        this.speed = speed;
    }
}