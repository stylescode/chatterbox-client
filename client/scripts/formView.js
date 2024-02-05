// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  // TODO: Currently, this is all handleSubmit does.
  // Make this function actually send a message to the Parse API.
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // var message = {
    //   username: 'shawndrost', // App.username
    //   text: 'trololo', // $('#message').innerText
    //   roomname: '4chan',
    // };

    if ($('#message').val().length) {
      var message = {};
      message.username = App.username;
      message.text = $('#message').val();
      message.roomname = Rooms._selected;

      // invoke parse create ( $('#message').innerText, successCB() {
      // invoke fetch with argument
      Parse.create(message, () => {
        // messagesView.render
        App.fetch(() => {
          RoomsView.renderRoom(message.roomname);
          $('#message').val('');
        });
        // console.log(data);
      });

    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};