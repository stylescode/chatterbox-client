// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  // TODO: Render _all_ the messages.
  render: function(messagesArray) {
    MessagesView.$chats.empty();
    messagesArray = messagesArray || Messages._data;
    for (var message of messagesArray) {
      // run renderMessage on each element
      MessagesView.renderMessage(message);
    }
  },

  // TODO: Render a single message.
  renderMessage: function(message) {
    // check roomname against Room.selected
    // declare renderedMessage, as message applied to MessageView.render
    var renderedMessage = MessageView.render(message);
    // append renderedMessage to chats div
    MessagesView.$chats.append(renderedMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

  }

};