const regexEmail = RegExp("^[a-zA-Z0-9$%!._-]+\@[a-z]+\.[a-z]{2,4}$", "g");

$(".ancor-next").click(function() {
    let inputEmail = $("#input-email").val();
    let inputPassword = $("input-password").val();


    if(inputEmail.match(regexEmail)) {
        console.log("Foi");
    }else {
        console.log("Invalido");
    }

})