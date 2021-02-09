{
    //nodes
    let list = document.childNodes[1].childNodes[2].childNodes[1];//get ordered list
    console.log(list);
    console.log(list.parentElement);
    console.log(list.nextSibling.nextSibling);
    
    //
    let alist = document.getElementsByTagName
    ("li");
    console.log(alist);

    //
    let clist = document.getElementsByClassName("border");
    console.log(alist);

}

//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
{
    let list = document.getElementsByTagName("li");

    console.log(list[0]);
    
    console.log(list[0].childNodes[0]);

    if(list[0] === 1)
    {
        console.log("type element");
    }
    else if(list[0].nodeType === 3)
    {
        console.log("text");
    }
}


{
    //grab all paragraphs
    let paragraphs = document.getElementsByTagName("p");//[0];
    console.log(paragraphs);

    //strong element
    console.log(paragraphs[0].childNodes[0]);
    
    //innerhtml, nodevalue, textContent, innertext
    paragraphs[0].childNodes[0].childNodes[0].nodeValue = "llamas";


    let alist = document.getElementsByTagName("ol");
    console.log(alist);
    let ourList = alist[0];

    ourList.onmouseover = function () {
        console.log("mouseOver");
        ourList.childNodes[1].childNodes[0].nodeValue = "House";
        document.getElementById("special").innerHTML = "House";
    }

    let button = document.getElementById("clickme");
    button.onmouseenter = function () {
        button.innerHTML = "revealed";
    }
    button.onmouseleave = function () {
        button.innerHTML = "hoveroverme";
    }

}

