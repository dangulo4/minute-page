$(document).ready(function () {
  const close = document.getElementById('close');
  const open = document.getElementById('signUp');
  const modal = document.getElementById('modal');

  // Show modal
  open.addEventListener('click', () => modal.classList.add('show-modal'));

  // Hide modal
  close.addEventListener('click', () => modal.classList.remove('show-modal'));

  // Hide modal on outside click
  window.addEventListener('click', (e) =>
    e.target == modal ? modal.classList.remove('show-modal') : false
  );

  // When user clicks add-btn
  $('.submit-btn').on('click', function (event) {
    event.preventDefault();

    // Make a newUser object
    var newUser = {
      username: $('#user-name').val().trim(),
      firstname: $('#first-name').val().trim(),
      lastname: $('#last-name').val().trim(),
      email: $('#email').val().trim(),
      password: $('#password').val().trim(),
    };

    console.log(newUser);

    // Send an AJAX POST-request with jQuery
    $.post('/api/users', newUser)
      // On success, run the following code
      .then(function () {
        var row = $('<div>');
        row.addClass('user');

        row.append('<p>' + newUser.username + ' users: </p>');
        row.append('<p>' + newUser.body + '</p>');

        $('#user-area').prepend(row);
        getUsers();
      });
    window.location.href = '/user';
    // window.location.href = '/user?user_id=' + newUser.id;
    // Empty each input box by replacing the value with an empty string
    $('#user-name').val('');
    $('#first-name').val('');
    $('#last-name').val('');
    $('#email').val('');
    $('#password').val('');
    $('#password2').val('');

    // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
  });

  function createUserRow(userData) {
    console.log(userData);
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getUsers() {
    $.get('/api/users', function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createUserRow(data[i]));
      }
      // renderUserList(rowsToAdd);
    });
  }
});
