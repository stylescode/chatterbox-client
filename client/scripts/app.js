// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(() => {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    });

    // var checkForUpdates = function() {
    //   setTimeout(() => {
    //     App.fetch(() => {
    //       RoomsView.renderRoom(Rooms._selected);
    //     });
    //     checkForUpdates();
    //   }, 4000);

    // };
    // checkForUpdates();

    setInterval(App.fetch, 3000);

    // setTimeout(App.fetch, 4000);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    // dancer.step = function() {
    //   // the basic dancer doesn't do anything interesting at all on each step,
    //   // it just schedules the next step
    //   setTimeout(dancer.step, timeBetweenSteps);
    // };
    // dancer.step();
  },

  // TODO: in fetch, use the data to update Messages and Rooms
  // and re-render the corresponding views.
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // compare the size of current messages to retrieved
      var newMessagesCount = data.length - Messages._data.length;
      // loop over the difference
      for (var i = newMessagesCount - 1; i >= 0; i--) {
        // invoke messages.add to each message in the difference
        //console.log(Messages.add);
        Messages.add(data[i]);
      }

      // apply map to data for roomnames, apply uniq to the map
      var rooms = _.map(data, (message) => {
        return message.roomname;
      });
      var uniqueRooms = _.uniq(rooms);
      // set room._data to result array
      Rooms._data = uniqueRooms;
      //console.log(Messages._data);
      //console.log(Rooms._data);
      callback();
    });

    // invoke callback function
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
