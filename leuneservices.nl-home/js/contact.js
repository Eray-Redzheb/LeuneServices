console.log('.contact.js');

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : ocument.getElementById("email_id").value,
        message : ocument.getElementById("message").value
    }
    emailjs.send("service_ldblv4u", "template_sivkv8q", params).then(function (res) {
        alert("Success!" + res.status);
    })
}