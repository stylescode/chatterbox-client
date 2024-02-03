// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // TODO: Perform any work which needs to be done
  // when this view loads.
  initialize: function() {
    RoomsView.$button.on.click(RoomsView.handleChange);
  },

  // TODO: Render out the list of rooms.
  render: function() {
    // iterate through rooms_.data
    // append option tags to select tag, eg
      // <select name="choice">
      //   <option value="first">First Value</option>
      //   <option value="second" selected>Second Value</option>
      //   <option value="third">Third Value</option>
      // </select>
  },

  // TODO: Render out a single room.
  renderRoom: function(roomname) {
    // var messages = invoke Message.retrieve with roomname
    // invoke Messages.render
  },

  // TODO: Handle a user selecting a different room from the dropdown.
  // rendering the selected room
  handleChange: function(event) {
    // fetch
      // callback renderRoom
    // invoke .updateSelected
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // prompt the user for a name and initial message
    // pass input as an argument to Room.createRoom
  }
};
