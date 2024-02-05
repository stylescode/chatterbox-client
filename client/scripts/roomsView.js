// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // TODO: Perform any work which needs to be done
  // when this view loads.
  initialize: function() {
    //RoomsView.$button.on.click(RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.render();
    // console.log('from inside rooms initialize:', Rooms._data);
    // run update selcted?
    Rooms.updateSelected(Rooms._data[0]);

  },

  // TODO: Render out the list of rooms.
  render: function() {
    // iterate through rooms_.data
    for (var room of Rooms._data) {
      // append option tags to select tag, eg
      RoomsView.$select.append(`<option>${room}</option>`);
    }
      // <select name="choice">
      //   <option value="first">First Value</option>
      //   <option value="second" selected>Second Value</option>
      //   <option value="third">Third Value</option>
      // </select>
  },

  // TODO: Render out a single room.
  renderRoom: function(roomname) {
    // var messages = invoke Message.retrieve with roomname
    var messages = Messages.retrieve(roomname);
    // invoke Messages.render
    MessagesView.render(messages);
  },

  // TODO: Handle a user selecting a different room from the dropdown.
  // rendering the selected room
  handleChange: function(event) {
    var selectedRoom = $( "#roomSelector option:selected" ).text();
    // fetch
    App.fetch(() => {
      //
      Rooms.updateSelected(selectedRoom);
    });

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // prompt the user for a name and initial message
    var roomname = prompt('enter a new room name');
    var initialMessage = prompt('please type an initial message');
    if (roomname.length > 0 && initialMessage.length > 0) {
      Rooms.createRoom(initialMessage, roomname);
    }
  }
};
