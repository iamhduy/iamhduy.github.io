let count     = 0;
document.getElementById('login').addEventListener('click', checkCredentials);
document.getElementById('adminLogin').addEventListener('click', checkCredentialsAdmin);
document.getElementById('signUp').addEventListener('click', signUpRedirect);

function signUpRedirect() {
    window.location.href = "/new_user";
}

function checkCredentialsAdmin() {
    // package data in a JSON object
    var data_d = {'email': 'owner@email.com', 'password': 'password'}
    console.log('data_d', data_d)

    // SEND DATA TO SERVER VIA jQuery.ajax({})
    jQuery.ajax({
        url: "/processlogin",
        data: data_d,
        type: "POST",
        success:function(returned_data){
            returned_data = JSON.parse(returned_data);
            window.location.href = "/home";
        }
    });
}

function checkCredentials() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        document.getElementById("loginStatus").innerText = "Missing email or password";
        return;
    }

    const data_d = {
        'email': email,
        'password': password
    };
    console.log('data_d', data_d)

    jQuery.ajax({
        url: "/processlogin",
        type: "POST",
        data: data_d,
        dataType: "json",

        success: function(returned_data) {
            if (returned_data.success) {
                window.location.href = "/home";
                email.value = '';
            } else {
                count++;
                document.getElementById("loginStatus").innerText =
                    returned_data.message + ". Attempt #" + count;
            }
        },
    });
}