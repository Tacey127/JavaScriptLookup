var username = prompt();//assign prompt input funtion to execute
//alert(username);//not good
console.log(username);//better

//events
{
    document.getElementById("evtListener").onclick = () =>
    {
        console.log("Clicked");
    };

    document.getElementById("evtListener").onmouseover = () =>
    {
        console.log("mouseover");
    };

}


{//exeption handling
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling


    try
    {
        doesntexist;
    }
    catch(e)
    {
        //does on fail
        console.log(e);//e shows error of exeption
    }
    finally
    {
        //does no mater what
        console.log(test);
    }

}