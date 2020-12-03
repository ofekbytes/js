
let number = 12345;

reverse(number);

function reverse(number) {

    console.log("number is: " + number);

    console.log(totalNumbers(12));

}

function totalNumbers(number) {

    let count = 0;
    let tmp = number;

    console.log("number == " + number + " tmp == " + tmp);

    console.log(tmp / 10);
    console.log(tmp % 10);

    // let index=1;
    // for (index=0; index <= 5; index++) {
    //     count ++;
    //     number = number % 10;
    //     tmp = tmp / 10;
    //     console.log("number = " + number + " tmp = " + tmp + " count = " + count);
    // }


    while(tmp > 0) {
        console.log('tmp == ' + tmp);
        tmp = tmp / 10;
        
        count++;
    }

    //console.log("number == " + number + " count == " + count);

    return count;
}