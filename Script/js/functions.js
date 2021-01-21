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
}