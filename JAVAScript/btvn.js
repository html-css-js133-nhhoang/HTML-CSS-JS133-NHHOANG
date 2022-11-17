//1.tinh tong 3 so tu nhien
function add3sotunhien(so1,so2,so3){
    let sum =0;
    sum = so1 + so2 + so3;
    console.log(sum);
}
add3sotunhien(1 , 2 , 3);
add3sotunhien(10, 15, 27);

//2.ho ten
function getfullName(Ho, Dem, Ten){
    let fullName = "";
    fullName = Ho + "" + Dem + "" + Ten;
    console.log(fullName);
}
getfullName(Nguyen, Hoc, Hoang);

//3.lay du 2 so bat ki
function Du2so(a, b) {
    let soDu = 0;
    soDu = a % b;
    console.log(soDu);
}
Du2so(27, 10);

//4.Hieu 3 so
function Hieu3so(a, b, c) {
    let hieu3so = 0;
    hieu3so = a - b - c;
    console.log(hieu3so);
    
}
Hieu3so(96, 59, 7);

//5.trung binh cong 3 so
function Trungbinhcong3so(a, b, c) {
    let sum = 0;
    sum = a + b + c;
    let TBC3so = 0;
    TBC3so = sum / 3;
    console.log(TBC3so);
    
}
Trungbinhcong3so(50, 22, 33);

//6.
function Truyen3so(a, b, c) {
    let a = 0;
    a = a*2;
    let b = 0;
    b = b/3;
    let c= 0;
    c = c -12;
    let bieuthuc = 0;
    bieuthuc = a + b / c;
    console.log(bieuthuc);
    var numb = bieuthuc;
    numb = numb.toFixed(3);
}
Truyen3so(10, 11, 15);