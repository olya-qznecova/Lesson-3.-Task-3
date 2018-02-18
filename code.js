function CheckData()
{
    CheckElement("name",/[a-zа-я]+$/,"Неверное имя!");

    var regEmail=/^(\w+)@([a-z]+\.[a-z]{2,6})$|^(\w+\.\w+)@([a-z]+\.[a-z]{2,6})$|^(\w+\-\w+)@([a-z]+\.[a-z]{2,6})$/;
    CheckElement("email",regEmail, "Неверный Email!");

    CheckElement("phone",/^\+7\(\d{3}\)\d{3}-\d{4}/, "Неверный номер телефона!");
}

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
