

function songaunhien(a, b, c, d, e) {
    const cacso = [a, b, c, d, e];

    console.log(Math.max(...cacso));
    console.log(Math.min(...cacso));

    let trungbinhcong = 0;
    cacso.forEach(function (element) {
        trungbinhcong = element
    });
    console.log(trungbinhcong);

    let sohon10 = cacso;
    for (let i = 0; i < cacso.length; i++) {
        if (sohon10[i] > 10) {
            console.log(sohon10[i]);
        }
    }
    let sobe20 = cacso;
    for (let i = 0; i < cacso.length; i++) {
        if (sobe20[i] < 20) {
            console.log(sobe20[i]);
        }
    }
    // let sum = 0;
    // sum = a + b + c + d + e;
    // console.log(sum);

    //    let sum = 0;
    //    for (let i = 0; i < cacso.length; i++) {
    //     sum = cacso[i]; 
    //    }
    //    return sum;
    //    console.log(sum cacso);

    cacso.splice(2, 0, 15);
    console.log(cacso);



}



songaunhien(10, 14, 21, 32, 58);