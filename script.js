var lista = [1, 2, 3, 4, 5, 6, 7, 8];



function sum_of_elements(lista) {
    
    var sum = 0;
    for (var i = 0; i < lista.length; i++) {
        sum = sum + lista[i];
    }

    document.write("THE SUM IS: ",sum);
}


sum_of_elements(lista);


//THIS IS TASK 2 WHERE  I USE A BUBBLE SORT TO SORT THE LISGT
var listb = [5, 1, 7, 2, 3, 9, 8, 4];

function bubbleSort(listb) {
    var temp;
    
    document.write("The unsorted array is: ",listb,"<br>");
    for (var i = 0; i < listb.length; i++) {
        for (var t = i + 1; t < listb.length; t++){

            if (listb[i] > listb[t]) {
                temp = listb[i];
                listb[i] = listb[t];
                listb[t] = temp;
            }
        }

    }
    
    document.write("The sorted array is: ",listb,"<br>");
}

function sortBubble(){
    
    bubbleSort(listb);

}


function tableprint(){
    var value;
    var number = Number(document.getElementById("multiple").value);
    for (var t =1;t<=10;t++){
        value = number*t;
        document.write(number,"*",t,": ",value,"<br>");
        
    }

}

function area(){


    
    var square_area = 5*5;
    var rectangle_area = (4)*15;
    var total = square_area+rectangle_area;
    document.getElementById("area").innerHTML = total;


}

function weekday(){
    var day = document.getElementById("weekday").value;
    
    if(day == "MONDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else if (day == "TUESDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else if (day == "WEDNESDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else if (day == "THURSDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else if (day == "FRIDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else if (day == "SATURDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else if (day == "SUNDAY"){
        document.getElementById("day").innerHTML = "IT IS A WEEKDAY";
    }else{
        document.getElementById("day").innerHTML = "IT IS NOT A WEEKDAY";
    }
    
}