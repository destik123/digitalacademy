/* eslint-disable no-undef */
$(document).ready(() => {
    const isValid = (name, phone, email) => {
        if (!/^[а-яё -]+$/i.test(name)) {
            $('.status').css('color', 'red').html('Введите корректное ФИО');
            return false;
        }
        if (!/^[+1-9- ]+$/i.test(phone)) {
            $('.status').css('color', 'red').html('Введите корректный номер');
            return false;
        }
        if (!/\S+@\S+\.\S+/i.test(email)) {
            $('.status').css('color', 'red').html('Неверный формат email');
            return false;
        }
        return true;
    };

    // eslint-disable-next-line func-names
    $('#form').submit(function (event) {
        event.preventDefault();
        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        if (isValid(name, phone, email)) {
            const postUrl = $(this).attr('action');
            const requestMethod = $(this).attr('method');
            const formData = $(this).serialize();
            $.ajax({
                url: postUrl,
                type: requestMethod,
                data: formData,
                success(responseData) {
                    $('.status').css('color', 'green').html(responseData);
                },
                error(jqXHR, textStatus, errorThrown) {
                    $('.status').html(errorThrown);
                },
            });
        }
    });
});
