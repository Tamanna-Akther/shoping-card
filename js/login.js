document.getElementById('login-submit').addEventListener('click', function(){
    // console.log('button clicked')
    const emailField = document.getElementById('your-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    // ei email ar userPassword ta likhle valid user dekhabe ar bangking site e niye jabe
    // button e click korle onno website e niye jabe 
    if (userEmail == 'sonthan@baap.com' && userPassword == 'secret'){
        // console.log('valid user');
        window.location.href = 'banking.html';
    }

});


