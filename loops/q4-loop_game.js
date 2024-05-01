
        //HUESS THE GAME NUMBER: 

        let gameNum = 25;



        //promt funtion return the values as a strings;
        let userNum = prompt("Game the number : ");
        while (userNum != gameNum) {
            userNum = prompt("You entered the wrong number, Guess again");

        }
        console.log("Congratulations, You enter the right Number  ");



