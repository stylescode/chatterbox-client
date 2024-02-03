// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  _selected: null

  // TODO: Define methods which allow you to add rooms, update the list, mark a room as selected, etc.

  // .addRooms(array)
    // Rooms._data = array

  // .updateSelected
    // update _selected
    // invoke render room

  // .createRoom
    // invoke Parse.create() (message,
      // successCB
        // invoke RoomsView.renderRoom
        // invokes .updateSelected
      // errorCB)

};