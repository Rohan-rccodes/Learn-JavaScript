//print all the values of stringor arrays places on each index

        /* FOR-OF LOOP

        SYNTAX:

        for(let val of strVal)
        {
        //do work
        }
        */

        let str = "JavaScript";
        let str2 = "testing";
        let size = 0;

        for (let i of str) // iterator >> characters
        {
            console.log("i = ", i);
            size++;
        }

        for (let i of str2) // iterator >> characters
        {
            console.log("i = ", i);
            size++;
        }


        //calculate the string length : 
        console.log("String Size = ", size);