const bingo = () => {
    let player1 = {
        name: '',
        points: 100,
    };
    let player2 = {
        name: 'STEVE',
        points: 80,
    };
    let player3 = {
        name: 'TONY',
        points: 65,
    };
    let player4 = {
        name: 'NATASHA',
        points: 30,
    };
    let player5 = {
        name: 'BRUCE',
        points: 20,
    };

    let cartoon = [];
    let gameRandom = [];
    let newNumber = false;
    let numberPushed = false;
    let correctLine = false;

    let askName = prompt('¿Cúal es tu nombre?');
    player1.name = askName;
    alert(
        `${player1.name} El total de puntos actuales son: ${player1.points}, en cada turno se te restara 1 punto. Buena suerte.`
    );

    const divideArray = (colum) => {
        let newDiv = [];
        for (let i = 0; i < colum.length; i += 5) {
            newDiv.push(colum.slice(i, i + 5));
        }
        return newDiv;
    };
    const doCartoonAgain = () => {
        const bingo = () => {
            cartoon = [];

            while (cartoon.length < 15) {
                let randomNum1 = (Math.random() * 20).toFixed(0);
                if (cartoon.length < 1) {
                    cartoon.push(randomNum1);
                } else if (
                    !cartoon.some(function (elem) {
                        return elem == randomNum1;
                    })
                ) {
                    cartoon.push(randomNum1);
                    if (cartoon.length === 15) {
                        console.table(divideArray(cartoon));
                    }
                }
            }
        };

        bingo();

        let anotherCartoon = prompt('¿Quieres cambiar de carton? y/n');
        if (anotherCartoon === 'y') {
            doCartoonAgain();
        }
    };
    doCartoonAgain();

    const generateNum = () => {
        let askNum = prompt('¿Mostrar numero? y/n');

        if (askNum === 'y') {
            newNumber = true;
        } else if (askNum === 'n') {
            newNumber = false;
        }

        while (numberPushed === false) {
            let bingoBall = (Math.random() * 20).toFixed(0);
            if (gameRandom.length < 1) {
                gameRandom.push(bingoBall);
                console.log(bingoBall);
                player1.points--;
            } else if (
                !gameRandom.some(function (elem) {
                    return elem == bingoBall;
                })
            ) {
                gameRandom.push(bingoBall);
                console.log(bingoBall);
                numberPushed = true;
                player1.points--;
            }

            function allX(number) {
                return number === 'x';
            }

            const checkLine = (allCartoon) => {
                const firstColumn = allCartoon.slice(0, 5).every(allX);
                const secondColumn = allCartoon.slice(5, 10).every(allX);
                const thirdColumn = allCartoon.slice(10, 15).every(allX);

                if (
                    (firstColumn || secondColumn || thirdColumn) &&
                    correctLine === false
                ) {
                    alert('BINGO!');
                    correctLine = true;
                }
            };

            cartoon.forEach(function (num) {
                if (num === bingoBall) {
                    let index = cartoon.indexOf(num);
                    cartoon.splice(index, 1, 'x');
                    console.table(divideArray(cartoon));
                    checkLine(cartoon);

                    if (cartoon.every(allX)) {
                        let playersForRanking = [];
                        playersForRanking.push(
                            player1,
                            player2,
                            player3,
                            player4,
                            player5
                        );

                        const playersOrder = playersForRanking.sort(
                            (play1, play2) => {
                                return play2.points - play1.points;
                            }
                        );

                        alert('BINGO!');
                        console.log(
                            `${player1.name} tu puntuacion es de: ${player1.points}.`
                        );
                        console.log('RANKING:');
                        console.log(playersOrder);
                        newNumber = false;
                    }
                }
            });
        }

        while (newNumber === true && numberPushed === true) {
            numberPushed = false;
            generateNum();
        }
    };
    generateNum();
    let anotherplay = prompt('¿Quieres jugar de nuevo? y/n');
    if (anotherplay === 'y') {
        bingo();
    }
};
bingo();
