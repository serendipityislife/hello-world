
function christmas(){

    let d = new Date(2020, 11, 25);
    if(Date.now() < d ){
        
        let y = new Date(Date.now());
        // console.log(y);
        // console.log(d);

        let x = d-y; // returns in millisecond
        days = Math.floor(x / (1000 * 60 * 60 * 24));
        console.log(days + " days");

        return days + " days until Christmas.";

        
    }
    else return "Merry Christmas!!🎄"

}

document.getElementById("testPaula").innerHTML = christmas();


/*
function findMax() {
    var i;
    var max = -Infinity;                    // nifty thing to remember
    for(i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
}



document.getElementById("demo").innerHTML = findMax(4, 5, 6);
*/