document.getElementById('reg').addEventListener('click', createAccount);
function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (!email || !password) {
        document.getElementById("loginStatus").innerText = "Missing email or password";
        return;
    }
    const data_d = {
        'email': email,
        'password': password,
        'role': role
    };
    console.log('data_d', data_d)

    jQuery.ajax({
        url: "/register",
        type: "POST",
        data: data_d,
        dataType: "json",

        success: function(returned_data) {
            if (returned_data.success) {
                window.location.href = "/login";
            } else {
                document.getElementById("loginStatus").innerText = "Email already exists";
            }
        },
    });
}
