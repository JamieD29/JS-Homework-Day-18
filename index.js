
var arr = new Array();
function addNumberIntoArray() {

    if (arr[0] === "") {
        arr.shift();
    }
    var interger= +document.getElementById('inputNumber').value;
    if(Number.isInteger(interger)){
      arr.push(+document.getElementById('inputNumber').value);  
    }
    
    document.getElementById('outputArry').innerHTML = arr;

}

document.getElementById('deleteArray').onclick= function(){
    arr = [];
    document.getElementById('outputArry').innerHTML = arr;
    
}

var newArr = new Array();
function addRealNumberIntoNewArray() {

    if (newArr[0] === "") {
        newArr.shift();
    }
    newArr.push(+document.getElementById('inputNewNumber').value);
    document.getElementById('outputNewArry').innerHTML = newArr;
   // console.log(newArr); 
}

document.getElementById('deleteNewArray').onclick= function(){
    newArr = [];
    document.getElementById('outputNewArry').innerHTML = newArr;
  // console.log(newArr); 
}

document.getElementById('countingIntergerNumber').onclick= function(){
    var countInt= 0;
    for(var i= 0 ; i < newArr.length; i++){
        if(Number.isInteger(newArr[i])){
            countInt++;
        }
    }

    document.getElementById('intergerResult').innerHTML = "Mảng số thực có " + countInt + " số nguyên.";
}


function sumArray() {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    document.getElementById('sumResult').innerHTML = sum;
}

function countingPosNumberInArray() {
    var countPosNum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPosNum++;
        }
    }

    document.getElementById('countingPosNumResult').innerHTML = countPosNum;
}

function findingMinimumArray() {
    var minimum = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (minimum > arr[i]) {
            minimum = arr[i];
        }
    }

    document.getElementById('minimumResult').innerHTML = minimum;
}

function findingMinPosNumArray() {
    var PosArr = new Array();


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            PosArr.push(arr[i]);
        }

    }
    var minPosnum = 0;

    if (PosArr === null) {
        minPosnum = 0;
    } else {
        minPosnum = PosArr[0];
        for (var j = 0; j < PosArr.length; j++) {

            if (minPosnum > PosArr[j]) {
                minPosnum = PosArr[j];
            }
        }

    }


    document.getElementById('minPosNumResult').innerHTML = minPosnum;

}

function findingLastEvenNumArray() {
    var lastEvenNum = 0;
    
    for (var i = (arr.length - 1); i < arr.length; i--) {
        if (arr[i] % 2 === 0) {
            lastEvenNum = arr[i];
            document.getElementById('lastEvenNumResult').innerHTML = lastEvenNum;
            return;
        }
        else if(i === 0){
            document.getElementById('lastEvenNumResult').innerHTML = -1;
            return;
        }

    }

}

function SwapNumInArray(){
    var index1 = +document.getElementById('indexOne').value;
    var index2 = +document.getElementById('indexTwo').value;
    var temp ; 

    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    
    document.getElementById('SwapResult').innerHTML="Mảng sau khi đổi: " + arr;
}

document.getElementById('LowestToHighest').onclick = function(){
    for(var i =0; i < arr.length - 1; i ++)
    {
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i]> arr[j]){
                var temp = arr[i];
                arr[i]= arr[j];
                arr[j]= temp;
            }
        }
    }

    document.getElementById('LtHResult').innerHTML= "Mảng sau khi sắp xếp: " + arr ;
}

function checkPrime(n){
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

document.getElementById('findingFirstPrime').onclick = function(){

    for(var i = 0 ; i< arr.length ; i ++){
        if(checkPrime(arr[i])){
            document.getElementById('PrimeResult').innerHTML = "Số nguyên tố đầu tiên: " + arr[i];
            return;
        }
        else{
            document.getElementById('PrimeResult').innerHTML = -1;

        }

    }
}

document.getElementById('countingNegNPos').onclick = function(){
    var countPos = 0;
    var countNeg = 0;
    
    for(var i = 0 ; i< arr.length ; i ++){
        if(arr[i] < 0){
            countNeg ++;
        }
        else{
            countPos++;
        }
    }

    if(countNeg > countPos){
        document.getElementById('countingNnP_Result').innerHTML= countNeg +" Số âm" +" > " + countPos +" Số dương";
    }else if(countNeg === countPos){
        document.getElementById('countingNnP_Result').innerHTML= countNeg +" Số âm" +" = " + countPos +" Số dương";
    }else{
        document.getElementById('countingNnP_Result').innerHTML= countNeg +" Số âm" +" < " + countPos +" Số dương";
    }
}

