const a = [1,3,5,6,7]

function abc (val)
{

    console.log(val)
}

var sum_value = 0

function avgerage (ele)
{
    sum_value = sum_value + ele
}
function avg (ele)
{
        avgerage (ele)
}
a.forEach(abc)
a.forEach(avg)
console.log(sum_value/5)