var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
    //MessagesView.renderMessage();
  },

  render: function () {
    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
    // Messages
    // .items()
    // .each((message) => {
    //   var $message = MessageView.render(message);
    //   MessagesView.$chats.append($message);
    // });
    //renders all messages
  },

  renderMessage: function (message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    Friends.toggleStatus(username, MessagesView.render);
  }

};

// renderMessage: function (message) {
//   var username = this.username;
//   var text = this.text;
//   //console.log(message, 'this is renderMessages')
//   $('#chats').append(MessageView.render(message));

// }