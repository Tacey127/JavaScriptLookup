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

