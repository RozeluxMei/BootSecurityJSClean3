$('document').ready(function () {


    $('.table .eBtn').on('click', function (event) {

        event.preventDefault();
        var href = $(this).attr('href');

        $.get(href, function (user, status) {
            $('.myForm #id').val(user.id);
            $('.myForm #Username').val(user.name);
            $('.myForm #lastName').val(user.lastName);
            $('.myForm #age').val(user.age);
            $('.myForm #email').val(user.email);
            $('.myForm #password').val(user.password);
            $('.myForm #role').val(user.role);
        });

        $('.myForm #exampleModal').modal();
    });




});



