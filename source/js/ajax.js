$(document).ready(function () {
  $("#my_form").click(
    function () {
      console.log('asd');
      sendAjaxForm('result_form', 'ajax_form', 'http://localhost:8080/source/action_ajax_form.php');

      return false;
    }
  );


  function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
      url: url, //url страницы (action_ajax_form.php)
      type: "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#" + ajax_form).serialize(), // Сеарилизуем объект


      success: function (response) { //Данные отправлены успешно
        result = $.parseJSON(response);
        console.log(result);
        $('#result_form').html('Имя: ' + result.name + 'Email: ' + result.email + 'Телефон: ' + result.tel + 'Сообщение: ' + result.textarea);
      },
      error: function (response) { // Данные не отправлены
        $('#result_form').html('Ошибка. Данные не отправлены.');
      }
    });

    if (!data.success) {
      if (data.errors.name) {
        $("#name-group").addClass("has-error");
        $("#name-group").append(
          '<div class="help-block">' + data.errors.name + "</div>"
        );
      }

      if (data.errors.email) {
        $("#email-group").addClass("has-error");
        $("#email-group").append(
          '<div class="help-block">' + data.errors.email + "</div>"
        );
      }

      if (data.errors.superheroAlias) {
        $("#superhero-group").addClass("has-error");
        $("#superhero-group").append(
          '<div class="help-block">' + data.errors.superheroAlias + "</div>"
        );
      }
    } else {
      $("form").html(
        '<div class="alert alert-success">' + data.message + "</div>"
      );
    }
  }
});
