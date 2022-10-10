let flights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];
let nameAnswer;
function askName() {
    nameAnswer = prompt('Bienvenido a ISDI AIRLINES,¿Cúal es tu nombre?');
    if (nameAnswer === '') {
        return askName();
    } else if (nameAnswer === null) {
        alert('Gracias.¡¡Hasta pronto!!!🙋‍♀️🙋‍♂️');
        return undefined;
    } else if (isNaN(nameAnswer) === false) {
        alert('No se admiten numeros. Intentalo nuevamente');
        return askName();
    } else {
        alert(`✈️🌍✈️Bienvenido ${nameAnswer} a ISDI AIRLINES ✈️🌍✈️`);
    }
}
//askName();
let infoScale;
function infoFlights() {
    flights.forEach((flight) => {
        infoScale = '';
        if (flight.scale === true) {
            infoScale = 'tiene escala';
        } else {
            infoScale = 'no tiene escala';
        }
    });
}
//infoFlights();
function averageCost() {
    let averagePrice = [];
    let average = 0;
    flights.forEach((flights) => {
        averagePrice.push(flights.cost);
    });
    for (let i = 0; i < averagePrice.length; i++) {
        average = average + averagePrice[i];
    }
    alert(
        `💸💸El coste medio de todos los vuelos de ISDI AIRLINES es: ${(
            average / averagePrice.length
        ).toFixed(2)}€💸💸`
    );
}
//averageCost();
function flightScale() {
    let flightsScale = 0;
    flights.forEach((flight) => {
        if (flight.scale) {
            flightsScale++;
        }
    });
    alert(`Podemos encontrar ${flightsScale} vuelos con escala`);
}
//flightScale()
//ultimos 5 vuelos
function infoLast() {
    alert(
        `Los últimos 5 destinos para el día de hoy son: ${
            flights[flights.length - 5]['to']
        }, ${flights[flights.length - 4]['to']}, ${
            flights[flights.length - 3]['to']
        }, ${flights[flights.length - 2]['to']} y ${
            flights[flights.length - 1]['to']
        }`
    );
}
//infoLast();
function askRole() {
    const role = prompt('¿Eres user/ admin?');
    if (role === null) {
        askRole();
    } else if (
        role.toUpperCase() !== 'USER' &&
        role.toUpperCase() !== 'ADMIN'
    ) {
        askRole();
    } else {
        return role.toLowerCase();
    }
}
//askRole();
function askAction() {
    const action = prompt('¿Qué quieres hacer? (CREAR/ELIMINAR)');
    if (action != null) {
        if (
            action.toUpperCase() !== 'CREAR' &&
            action.toUpperCase() !== 'ELIMINAR'
        ) {
            askAction();
        } else {
            return action.toUpperCase();
        }
    } else {
        alert('Gracias.¡Hasta pronto!');
        return action;
    }
}
//askAction();

//admin

function doAdmin() {
    const askAdmin = askAction('CREAR');
    if (askAdmin === 'CREAR') {
        const newFlight = {};
        newFlight.toFlight = prompt('Introduzca origen de su vuelo');
        newFlight.fromFlight = prompt('Introduzca destino de su vuelo');
        newFlight.costFlight = prompt('Introduzca el precio de su vuelo');
        newFlight.scaleFlight = prompt('¿Prefire con escala?');
        newFlight.idFlight = flights.length;
        flights.push(newFlight);
        infoFlights();
        console.log(
            `Usted ha creado un vuelo con origen en: ${newFlight.toFlight} con destino ${newFlight.fromFlight}, con un precio de ${newFlight.costFlight} y con escala: ${newFlight.scaleFlight}`
        );
    } else {
        const idToDelete = prompt('ID para eliminar');
        flights.splice(idToDelete - 1, 1);
        infoFlights();
        alert(`usted a eliminado el ID ${idToDelete}`);
    }
    createDelete();
}
//doAdmin();

function createDelete() {
    let newAction = prompt('¿Le gustaria volver a CREAR/ELIMINAR?(si/no)');
    if (newAction === 'si') {
        for (let i = 0; i < newAction.length; i++);
        return doAdmin();
    } else if (newAction === '') {
        return createDelete();
    } else if (newAction == null || 'no') {
        alert('Gracias.¡¡Hasta Pronto!!');
        return undefined;
    } else {
        console.log('adios');
    }
}
//createDelete();

// opciones usuario

function doUser() {
    let userPrice = prompt('Introduzca el precio para buscar su vuelo');
    if (userPrice !== isNaN) {
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost <= userPrice) {
                let flightPrice = `ID: ${flights[i].id}, Vuelo origen ${flights[i].from} con destino ${flights[i].to}, tiene un precio de ${flights[i].cost}`;
                if (flights[i].scale) {
                    console.log(`${flightPrice} con escala`);
                } else {
                    console.log(`${flightPrice} sin escala`);
                }
            }
        }
    } else {
        doUser();
    }
    userBuyFlight();
}
//doUser();

function userBuyFlight() {
    let userFlight = prompt('Introduce ID que desea comprar');
    if (isNaN(userFlight) === true) {
        alert('Solo ID');
        return userBuyFlight();
    } else if (userFlight == '') {
        alert('No ha seleccionado ningun ID');
        return userBuyFlight();
    } else if (userFlight == null) {
        alert('Gracias. Hasta pronto');
        return undefined;
    } else {
        alert(`usted a comprado el vuelo con ID ${userFlight}`);
    }
    newPurchase();
}
//userBuyFlight();

function newPurchase() {
    let buyOneMore = prompt('¿Desea comprar otro vuelo?(si/no)');
    if (buyOneMore === 'si') {
        for (let i = 0; i < buyOneMore.length; i++) return userBuyFlight();
    } else if (buyOneMore == null || 'no' || '') {
        alert('Gracias! Hasta pronto');
        return undefined;
    } else {
        console.log('ADIOS');
    }
}
//BuyOneMore();

function ailinesPro() {
    askName();
    if (nameAnswer === null) {
        return undefined;
    } else {
        infoFlights();
        averageCost();
        flightScale();
        infoLast();
        let answerRole = askRole();
        if (answerRole === 'user') {
            doUser();
        } else {
            doAdmin();
        }
    }
}
ailinesPro();
