function myFunction() {
    var bill = Number(document.getElementById('bill').value);
    console.log(bill)
    var persentage = Number(document.getElementById('select').value);

    var numOfper = Number(document.getElementById('num').value);

    if (bill == '') {
        alert("Please enter bill amount");

    } else if (persentage == '' || persentage == 0) {

        alert('Please select persentage of amount');

    } else if (numOfper == '') {
        alert('Please enter number of person')

    }

    console.log(typeof(bill))
    console.log(typeof(persentage))
    console.log(typeof(numOfper))
    var amount = (persentage / 100) * bill

    var tipPer = amount / numOfper;

    console.log(tipPer)
    document.getElementById('heading2').innerHTML = `Tip per person is :- ${tipPer}; &#9787`;
}












