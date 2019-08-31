function getRand() {
    for (var w = 0; w < 12; w++) {
        var n = Math.random();
        n = n * 101;
        n = Math.floor(n);

    }
    return n;
}
getRand();


function refreshServer() {
    var players = 0, queue = 0;
    players = getRand();
    queue = getRand();
    document.getElementById("players").innerHTML = players + " | " + queue;

}
refreshServer();

function refreshServer2() {
    setTimeout(refreshServer, 3000);
    $('#serverModal').modal('hide');
}

function checkStatus() {
    if (navigator.onLine) {
        $('#offlineModal').modal('hide');
    }
    else {
        $('#offlineModal').modal('show');
    }
}
var asd = setInterval(checkStatus, 1000);

function enableButton() {
    document.getElementById("1we").classList.remove("disabled");
}

function launchGame() {
    restartTimer();
    $('#serverModal').modal('show');
}

function download() {
    for (i = 0; i <= 100; i++) {
        $("#progressBarLauncher").css("width", i + "%");
    }

}

function allServersOffline() {
    var status = document.getElementById("serverStatus");
    if (status) {
        return false;
    }
    else {
        return true;
    }
}



function restartTimer() {
    // Set the date we're counting down to

    
    var countDownDate = new Date("Aug 27 2019 21:59:53").getTime();

    var x = setInterval(function () 
    {

        var usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        usaTime = new Date(usaTime);

        const now = usaTime.getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        console.log(countDownDate);

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element 
        document.getElementById("modalRestartTimer").innerHTML = "Restart in: " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over
        if (distance < 0) 
        {
            clearInterval(x);


            if(whichRestart > 3) whichRestart = 0;
    

            document.getElementById("modalRestartTimer").innerHTML = "Restarting...";
            whichRestart++;

        }

    }, 1000);
}


function login()
{
    alert("triggered");
}