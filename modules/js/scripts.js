function getRand()
{
    for(var w = 0; w < 12; w++)
    {
        var n = Math.random();
        n = n*101;
        n = Math.floor(n);

    }
    return n;
}
getRand();


var players = 0, queue = 0;
players = getRand();
queue = getRand();
document.getElementById("players").innerHTML = players + " | "+ queue;


function checkStatus()
{
    if(navigator.onLine)
    {
        $('#offlineModal').modal('hide');
    } 
    else 
    {
        $('#offlineModal').modal('show');
    }
}
var asd = setInterval(checkStatus,1000);