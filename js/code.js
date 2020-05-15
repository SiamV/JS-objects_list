//переменные
let powerCar = document.getElementById("powerId");
let speedCar = document.getElementById("speedId");
let list = document.getElementById("listAuto");
let imgCar = document.getElementById("imgId");

// объекты
let chevroletCorvette = {
    power: 490,
    maxSpeed: 312
}

let mercedes = {
    power: 362,
    maxSpeed: 250
}

let defoultCar = {
    power: 0,
    maxSpeed: 0
}

// универсальная функция name в зависимости от cars выводит свойства объекта
function name(cars) {
    powerCar.value = cars.power;
    speedCar.value = cars.maxSpeed;
}

// обработчик события select option - onchange
list.onchange = function changeList() {
    if (list.options.selectedIndex == 0) { // если options.selectedIndex поменялся на 0, выводим функцию name
        imgCar.src = this.value;
        name(chevroletCorvette);
    } else if (list.options.selectedIndex == 1) {
        name(mercedes);
        imgCar.src = this.value;
    } else {
        name(defoultCar);
        imgCar.src = this.value;
    }

}