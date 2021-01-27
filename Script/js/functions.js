{
    //let pow = function(x, y){
    function pow(x, y){
        let total = 1;
        for(let i = 0; i < y; i++)
        {
            total *= x;
        }
        return total;
    }
    
    console.log(pow(3, 3));

    let functionArr = [pow];
    console.log(functionArr[0](3, 3));


    let mathFunctions = 
    {
        power: pow

    };

    console.log(mathFunctions.power(3, 3));
}

//memoisation
{

    pow.calculated = {};
    function pow(x, y)
    {
        let stringVersion = x + "^" + y;
        console.log("string version: " + stringVersion);

        if(stringVersion in pow.calculated)
        {
            console.log("found");
            return pow.calculated[stringVersion];
        }

        let total = 1;
        for(let i = 0; i < y; i++)
        {
            total *= x;
        }
        //pow.calculated.push(total);
        pow.calculated[stringVersion] = total;
        console.log(pow.calculated);
        return total;
    }
    pow(3, 3);
    pow(3, 4);
    pow(3, 3);
}

{
    //let pow = function(x, y){
    function pow(x, y = 2){
        let total = 1;
        for(let i = 0; i < y; i++)
        {
            total *= x;
        }
        return total;
    }
    
    console.log(pow(3));

    function largest(x, ...extra)
    {
        let largest = x;
        for( let i=0; i < extra.length; i++)
        {
            if(extra[i] > largest)
            {
                largest = extra[i];
            }
        }
        return largest;
    }

    console.log(largest(10, 5, 3, 6));
}

//dates https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
{
    let myDate = new Date(2020, 11, 10);
    console.log(myDate);


    let aDate = Date.parse('12 January 1995');//doesnt work on all browsers?
}

//this
{
    let exampl = {
        ttext: "test",
        outtput: function(){
            console.log(this);
            console.log(this.name);
        },

        altOpt: AltOpt
    };

    function AltOpt(){
        console.log(this);
    }

    function AltOptStrct(){
        'use strict';
        console.log(this);
    }


    exampl.outtput();

}

//call/apply

{
    function stuff(input, input2){
        console.log(input);
        console.log(this);
    }

    dostuff.call("this", 1, 2);

    let args = [5, 10];
    dostuff.apply("this", args);

    let exem = {nm:"sd"};
    let newfunc = dostuff.bind(exem, 6, 7);
    newfunc();
}

//arrow functions
{
    
    //let cubeArrow = x => x*x*x;
    //let cubeArrow = (x) => x*x*x;
    let cubeArrow = (x) => {
        return x*x*x
    };
    console.log(cubeArrow);
}

//arrow &this

{
    let arrow = () => this;
    function normal(){
        return this;
    }

    console.log(arrow());
    console.log(normal());

    let functions = {
        arrow: arrow,
        normal: normal,
        arrowtest : () => this
    };

    console.log(functions.arrow());//always window object
    console.log(functions.arrowtest());//window object
    console.log(functions.normal());


}

//arrow &bind

{
    let arrow = () => this;

    newFunc = arrow.bind("hello");
    console.log(newFunc);//does not return "hello"
}


