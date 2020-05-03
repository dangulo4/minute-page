$(document).ready(function () {
  const getStarted = $('#get-started-btn');

  // When user clicks add-btn
  $(getStarted).on('click', function (event) {
    event.preventDefault();

    // Make a newPage object
    var newPage = {
      name: $('#company-name').val().trim(),
      header: $('#header').val().trim(),
      description: $('#desc').val().trim(),
      pointOne: $('#first-point').val().trim(),
      pointTwo: $('#second-point').val().trim(),
      title: $('#title').val().trim(),
      formDesc: $('#form-desc').val().trim(),
      UserId: 1,
    };

    console.log(newPage);

    //Send an AJAX POST-request with jQuery
    $.post('/api/pages', newPage)
      // On success, run the following code
      .then(function () {
        var row = $('<div>');
        row.addClass('page');

        row.append('<p>' + newPage.name + ' pages: </p>');
        row.append('<p>' + newPage.body + '</p>');

        $('#page-area').prepend(row);
        var url = window.location.search;
        var userId;
        // if (url.indexOf('?page_id=') !== -1) {
        //   userId = url.split('=')[1];
        //   getUsers(userId);
        // }
        // // If there's no UserId we just get all posts as usual
        // else {
        //   getPages();
        // }
      });

    // $('#company-name').val('');
    // $('#header').val('');
    // $('#desc').val('');
    // $('#first-point').val('');
    // $('#second-point').val('');
    // // $('#third-point').val('');
    // // $('#fourth-point').val('');
    // $('#title').val('');
    // $('#form-desc').val('');
    // // $('#quote').val('');
    // // $('#image').val('');
    // // $('#file').val('');
    // UserId = '';
    // window.location.href = '/gallery';
  });
});
