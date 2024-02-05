// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.

  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  retrieve: function(roomName) {
    // declare result var as empty array
    var result = [];
    // iterate through _data
    for (var element of Messages._data) {
      // if message.roomname matches roomname
      if (element.roomname === roomName) {
        result.push(element);
      }
    }
    return result;
  },

  // add
  add: function(message) {
    // Messages._data.unShift(message);
    // console.log(message);
    // console.log('message data:', Messages._data);
    Messages._data.unshift(message);
  },

};