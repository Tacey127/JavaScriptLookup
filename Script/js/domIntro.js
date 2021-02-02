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
    let paragraphs = document.getElementsByTagName("p");//[0];
    console.log(paragraphs);
}

