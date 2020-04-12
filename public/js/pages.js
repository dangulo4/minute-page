$(document).ready(function () {
  const getStarted = $('#get-started-btn');

  // When user clicks add-btn
  $(getStarted).on('click', function (event) {
    event.preventDefault();

    // Make a newUser object
    var newPage = {
      name: $('#company-name').val().trim(),
      header: $('#header').val().trim(),
      desc: $('#desc').val().trim(),
      one: $('#first-point').val().trim(),
      two: $('#second-point').val().trim(),
      three: $('#third-point').val().trim(),
      four: $('#fourth-point').val().trim(),
      title: $('#title').val().trim(),
      formDesc: $('#form-desc').val().trim(),
      quote: $('#quote').val().trim(),
      logo: $('#image').val().trim(),
      file: $('#file').val().trim(),
      // userId: $('/api/user/${req.params}'),
    };

    console.log(newPage);

    // Send an AJAX POST-request with jQuery
    $.post('/api/pages', newPage)
      // On success, run the following code
      .then(function () {
        var row = $('<div>');
        row.addClass('user');

        row.append('<p>' + newPage.name + ' pages: </p>');
        row.append('<p>' + newPage.body + '</p>');

        $('#page-area').prepend(row);
      });

    // Empty each input box by replacing the value with an empty string
    $('#style').val('');
  });
});
