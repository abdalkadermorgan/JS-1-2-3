
function personalinfo () {
    var x = document.getElementById("name").value;
        y = document.getElementById("age").value;
        m = document.getElementById("email").value;
        z = document.getElementById("phone").value;
    document.getElementById("your-name").innerHTML = x;
    document.getElementById("your-age").innerHTML = y;
    document.getElementById("your-email").innerHTML = m;
    document.getElementById("your-phone").innerHTML = z;
    document.getElementById("name").value='';
    document.getElementById("age").value='';
    document.getElementById("email").value='';
    document.getElementById("phone").value='';
}


function add () {
    var x= parseInt(document.getElementById("num1").value);
        y=parseInt(document.getElementById("num2").value);

            document.getElementById("result").innerHTML= x+y;
            
}

function Sub() {
    var x= parseInt(document.getElementById("num1").value);
        y=parseInt(document.getElementById("num2").value);

            document.getElementById("result").innerHTML= x-y;
}

function divide() {
    var x= parseInt(document.getElementById("num1").value);
        y=parseInt(document.getElementById("num2").value);

            document.getElementById("result").innerHTML= x/y;
}

function multiply() {
    var x= parseInt(document.getElementById("num1").value);
        y=parseInt(document.getElementById("num2").value);

            document.getElementById("result").innerHTML= x*y;
}

function avareg() {
    
var i =0;
var totalSum = 0;
do {

    var num = prompt("please Enter a Number")
    totalSum += parseInt(num);
    i++;
}while (i < 5);
document.getElementById("avareg").innerHTML=(totalSum/i);
}


function testLogin () {
    var x= document.getElementById("test").value;

    if (x == 0) {
        alert (" you should input user name")
    }
    else if ( x < 2 || x > 15)  {
        alert ("Welcome to X Team ")
    }
        
    else {
        alert ("sorry, you should enter username bigger than 2 and less")
    }

}

function number () {
    var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    for (var i = 0 ; i < x.length; i++ ){
        if (x[i] % 2 == 0) {
            document.writeln(x[i], "<br />");
        }
    }
    }

    function number2 () {
        var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        
        for (var i = 0 ; i < x.length; i++ ){
            if (x[i] % 2 == 1) {
                document.writeln(x[i], "<br />");
            }
        }
        }

        function arraySlice () {
            var animals = ['dog','cat','elephant','bison','donkey','monkey'];
            var x = parseInt(document.getElementById("slice1").value);
            var y = parseInt(document.getElementById("slice2").value);
            document.getElementById("slice-result").innerHTML=animals.slice(x, y);
        }

        function substr() {
            var z = "I'm worked JavaScript"
                
                x = parseInt(document.getElementById("substr1").value);
                y = parseInt(document.getElementById("substr2").value);

                document.getElementById("substr-result").innerHTML=z.substr(x,y);
        }

        function substring() {
            var z = "I'm worked JavaScript"
                
                x = parseInt(document.getElementById("substring1").value);
                y = parseInt(document.getElementById("substring2").value);

                document.getElementById("substring-result").innerHTML=z.substring(x,y);
        }