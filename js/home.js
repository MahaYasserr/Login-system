if(localStorage.getItem('userName')){
    document.getElementById('username').innerHTML =localStorage.getItem('userName')
}else{
    location.href='../pages/login.html'
}

console.log(localStorage.getItem('userName'));

function logout(){
    localStorage.removeItem('userName')
}