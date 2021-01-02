x=[];
function submit(){
    var i = document.getElementById("i1").value;
    var j = document.getElementById("i2").value;
    var k = document.getElementById("i3").value;
    var l = document.getElementById("i4").value;
    x.push(i);
    x.push(j);
    x.push(k);
    x.push(l);
    console.log(x);
    document.getElementById("ans1").innerHTML=x;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block";
}
function change(){
    x.sort();
    console.log(x);
    document.getElementById("ans1").innerHTML=x;
}