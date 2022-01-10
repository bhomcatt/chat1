username = "";

function iniciate(){
    userName = document.getElementById("input1").value;
    console.log(userName);
    localStorage.setItem("user name",userName);
}