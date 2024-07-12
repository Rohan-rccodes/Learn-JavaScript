
        //FOR-IN LOOP ARE USE FOR OBJECTS

        let student =
        {
            name: "Rahul Kuamr",
            age: 20,
            cgpa: 7.5,
            ispass: true,
        };


        // for in loop return the keys of objects
        for (let val in student) {
            console.log("Keys in students onjects : ", val);

            console.log("Values ", student[val]);
        }
