function validate(){
    let status = false;
    let email = 'manjusha.152002@gmail.com';
    let password = '123456';

    let emailInputValue = document.getElementById('email').value;
    let passInputValue = document.getElementById('password').value;

    if(email === emailInputValue && password === passInputValue){
        console.log(emailInputValue);
        status = true;
    }
}