var SignUpName= document.getElementById('name-signup')
var SignUpEmail= document.getElementById('email-signup')
var SignUpPW= document.getElementById('password-signup')
var userInfo=[]


if (localStorage.getItem('userInfo')!=null){
    userInfo= JSON.parse(localStorage.getItem('userInfo'))
}

function signUp(){
    if(SignUpName.value=='' || SignUpEmail=='' || SignUpPW==''){
        document.getElementById('warning').innerHTML= `<p>Please enter all the required data!</p>`}
        else{
            var userData={
                name: SignUpName.value,
                email: SignUpEmail.value,
                password: SignUpPW.value
            }
            
                
            userInfo.push(userData);
            location.href = "../pages.login.html";
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            // if (SignUpEmail.value==userEmail.email){
            //     document.getElementById('warning2').innerHTML=`<p>This email alraedy exists!</p>`}
        }
}


function validateEmail(){
    var text= SignUpEmail.value
    var regex= /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if (regex.test(text)==true){
        console.log('match');
        SignUpEmail.classList.add("is-valid")
        SignUpEmail.classList.remove("is-invalid")
    }else{
        console.log('no match');
        SignUpEmail.classList.add("is-invalid")
        SignUpEmail.classList.remove("is-valid")
    }
}