// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  _selected: null,// change to reflect whatever is automatically

  // TODO: Define methods which allow you to add rooms, update the list, mark a room as selected, etc.

  addRoom: function(roomname) {
    App.fetch(() => {
      Rooms.updateSelected(roomname);
    });
  },

  updateSelected: function(roomSelection) {
    Rooms._selected = roomSelection;
    RoomsView.renderRoom(roomSelection);
  },


  // .createRoom
  createRoom: function(initialMessage, roomname) {
    var newMessage = {};
    newMessage.username = App.username;
    newMessage.text = initialMessage;
    newMessage.roomname = roomname;
    Parse.create(newMessage, () => {
      Rooms.addRoom(roomname);
    });

  },

};