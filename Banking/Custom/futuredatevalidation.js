
function isFutureDate(idate) {
    var today = new Date().getTime(),
        idate = idate.split("-");
    //alert(idate[0]);
    idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
    return (today - idate) < 0;
}
var res = isFutureDate("2022-03-22");

if (res) {
    alert("HI");
}
else {
    alert("NO HI");
}
// Demo example
console.log(); // true
console.log(isFutureDate("01/01/2014")); // false