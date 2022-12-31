function print(val){
    document.getElementById("result").value+=val;
}
function solve(){
    let exp = document.getElementById("result").value;
    exp = eval(exp);
    document.getElementById("result").value=exp;
}
function erase(){
    document.getElementById("result").value="";
}
function back(){
    exp = document.getElementById("result").value;
    document.getElementById("result").value=exp.substring(0,exp.length-1);
}