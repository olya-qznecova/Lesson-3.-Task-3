// Урок 3//
function ButtonSetDefaultValue () {
    var buttonEl = document.getElementById('checkButton');
    buttonEl.addEventListener('click', function (event) { //отменяем действия браузера по умолчанию, при клике форма не отправляется
        event.preventDefault();
    });
}

checkButton.onclick = function CheckData()
{
    CheckElement("name",/[a-zа-я]+$/,"Неверное имя!");

    var regEmail=/^(\w+)@([a-z]+\.[a-z]{2,6})$|^(\w+\.\w+)@([a-z]+\.[a-z]{2,6})$|^(\w+\-\w+)@([a-z]+\.[a-z]{2,6})$/;
    CheckElement("email",regEmail, "Неверный Email!");

    CheckElement("phone",/^\+7\(\d{3}\)\d{3}-\d{4}/, "Неверный номер телефона!");

};

function CheckElement(id, reg, errorText)
{
    var elem = document.getElementById(id);
     if (elem==null)
    {
        //error;
    }
    //если элемент найден
    else{
        //не прошел проверку
        if(!reg.test(elem))
            //отображаем ошибку
            showError(elem, errorText);

    }
  }

function showError(elem, errorText) {
    elem.className="error";
    var txt = document.createTextNode(errorText);
    txt.className="error";
    elem.parentNode.appendChild(txt);

}
// Урок 4. Задание 2.получаем список городов после загрузки страницы
(function ($) {
    $(function() {
           $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                dataType: 'json',
                success: function (users) {
                    $.each(users, function (i, user) {
                        var $option = $('<option />').text(user.address.city);
                        $('.cities').append($option);
                    });

                }
            })
        });
})(jQuery);