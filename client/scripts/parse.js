// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message

    // use jquery ajax
    $.ajax({
      // url parse server
      url: Parse.server,
      // type POST
      type: 'POST',
      // data message
      data: JSON.stringify(message),
      // contentType app json
      contentType: 'application/json',
      // success: successCB
      success: successCB,
      // error: errorCB
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post message', error);
      }
    });

  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};