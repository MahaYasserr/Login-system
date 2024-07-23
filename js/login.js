var emailLogin= document.getElementById('emailLogin')
var pwLogin= document.getElementById('pwLogin')
var user=[];
user= JSON.parse(localStorage.getItem('userInfo'))




function login(){
    if (emailLogin.value==''||pwLogin==''){
        document.getElementById('warning').innerHTML=`<p>Please enter a valid data!</p>`
    }else{
        userVerification()
    }

}

function userVerification(){
    for (let i = 0; i < user.length; i++) {
        if (emailLogin.value==user[i].email && pwLogin.value==user[i].password){
            var x = user[i].name;
            localStorage.setItem('userName',x);
            location.href= '../pages/home.html';
        }
        
    }
}