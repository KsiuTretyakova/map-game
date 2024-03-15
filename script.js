// Для отримання випадкового числа від 0 до (size-1)
function getRandomNumber(size) {
    // Math.random()  -->  [0,1)
    // [0,1) * 5 = [0*5,1*5) -->  [0;5)
    // [0,1) * size = [0*size,1*size) -->  [0;size)
    // Math.random() * size -->  [0;size)
    let num = Math.floor(Math.random() * size);
    return num;
}

// Розраховує відстань від кліку (event) до скарбу (target)
function getDistance(Aevent, Btarget) {
    const diffX = Aevent.offsetX - Btarget.x;
    const diffY = Aevent.offsetY - Btarget.y;
    const dist = Math.sqrt((diffX * diffX) + (diffY * diffY));
    return dist;
}

// Задання відстані для отримання підсказки
function getDistanceHint(distance) {
    if (distance < 10) {
        return "Пече!";
    } else if (distance < 20) {
        return "Дуже гаряче";
    } else if (distance < 40) {
        return "Гаряче";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Дуже холодно";
    } else {
        return "Можна замерзнути!";
    }
}

// Створюємо змінні
const width = 450;
const height = 400;
let click = 0; // для підрахунку кількості кліків

// Випадкове розміщення скарбу
const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

// Додаємо елементу #map обробник кліку
const mapElement = document.getElementById("map");
mapElement.addEventListener("click", (event) => {
    click++; // click = click + 1
    // console.log(click);

    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);

    const distanceElement = document.getElementById("distance");
    distanceElement.textContent = distanceHint;

    if (distance < 8) {
        alert("Yoa are win!")
    }
});