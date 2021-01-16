alert("hello world");

var number;// when created, gets attached to the "window" variable(global scope)
let hidden; // global, not in "window"
number = 50;

var message = "number = " + number;

//link event to functon, must be below element id or deferred
document.getElementById("button").onclick = function(){
    document.getElementById("confirm").innerHTML = "order placed.";
    document.getElementById("button").style.display = "none";
}

(function(){
    //immediately invoked function expression
    var privateNum = 1; //private scope
    let number = 1;//private scope, does not look out of scope

})();

{
    //in block scope
    let y = 10;
    const y = 20;

    console.log(y, x);

    var z = 100;//in window scope
}



//data types:
//primitive https://developer.mozilla.org/en-US/docs/Glossary/Primitive
{
    let x = 5;//only one data type for numbers(double)
    x++;
    let b = "10";
    let infin;
    infin = 1/0;//gives infinity
    x = x + b;
    console.log(x);
}
//objects
let o = {
    name: "s \n a",
    sn: 90,
    dn: "sssssss",
    fun: function(){
        console.log("obj function");
    }
}
{
    let objectstring = new String("objectString");
}
o.fun();

let now = new Date();
let arr = [1, 2, 3, 4];

{
    //take string and convert to num
    let x = 109234456.1234;
    x.toExponential(5);//...10e(12)

    x.toFixed(2);//...4456.12

    var trunc = Math.trunc(4.999999);

    let y = "2";
    let yint = Number.parseInt(y);
    let strInt = Number.parseFloat("10.123 is a number cropped from string")
}


//templatise
{

    let example = "example";

    console.log(`this is an ${example}!`);

}

//string methods
{
    var instanceOfString = "in stan ce";
    console.log(instanceOfString.charAt(2));
    console.log(instanceOfString.concat(" of string"));
    console.log(instanceOfString + "of string");


    let search1 = "in";
    let search2 = "stan";
    let instanceSubString = instanceOfString.includes(search1);
    console.log(instanceOfString.indexOf(search2));

    console.log(instanceOfString.substring(4, 9));//absolute index
    console.log(instanceOfString.substring(4, 4));//relative index
    
    console.log(search1.repeat(4));//Repeats
}

//functioins
{
    let position = {
        x:10,
        y:20
        ,
        print: function(){
            console.log(`X: ${this.x}, Y: ${this.y}`);
        }
    }

}

//if https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
{
    var nam = prompt();
    if(nam === "Test")
    {
        console.log("Tested!");
    }
    else
    {
        console.log("Irish wristwatch");
    }

    nam === test? console.log("Tested!") : console.log("Irish wristwatch");
    var stiring = nam === test? "Tested!" : "Irish wristwatch";
}

//switch
{
    let prom = "";
    switch(prom)
    {
        case "I":
            ;
            break;
            default:
                ;
                break;

    }
}

//loop

{
    let i = 0;
    while(i < 10)
    {
        ;//code
        i++;
    }

    let password;
    do{
        password = prompt("passcode?");

    }while(password.toLowerCase() !== "let me in");

    let i = 0;
    while(i < 10)
    {
        break;
        i++;
    }

    let i = 0;
    while(i < 10)
    {
        continue;
        i++;
    }
}

//array
{
    let arrr = [1,2, 34, 5, "a", {}, function(){console.log("hello")}];
    arrr[6];

    arrr.unshift(40);
    arrr.shift(10);

    let tosort = [1, 6, 3, 7 ,4 ,65, 2,23 , 5,47,1, 8, 9, 45, 7, 2, 5, 78, 9,0 ,12, 34];

    tosort.sort();
    tosort.sort(function(a, b){return a-b});
    tosort.reverse();

    let tomerge = [1,2  ,3];
    tosort.concat(tosort);

    tosort.forEach(function(element)
    {
        console.log(element);
    });

    //multi

    let multiarr = [1, 2, 3][2, 3, 4][3, 4, 5];

    multiarr.forEach(
        function(row)
        {
            row.forEach(function(col)
            {
                console.log(col);
            }
            );
        }
    );
}


//42903