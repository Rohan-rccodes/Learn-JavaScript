
        let specialstring = "LearnJavaScript";

        let obj = {
            item: "Pen",
            price: 20,
        };


        //print the string value 
        console.log(specialstring);

        //check its type
        console.log(typeof specialstring);

        //Print with our Template Literals:

        console.log("The cost of", obj.item, "is", obj.price, "rupees.");

        //Printing with Template Literals :

        let output = `The cost of ${obj.item} is ${obj.price} rupees.`;

        //IT IS CALLED * STRING INTERPOLATION 
        console.log(output);