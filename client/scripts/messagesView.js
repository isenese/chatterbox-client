var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.on(App.fetch(), MessagesView.renderMessage());
  //console.log(App.fetch())
    Messages.fetchMessages();
    //MessagesView.renderMessage();
  },

  render: function () {
    //renders all messages
  },

  renderMessage: function (message) {
    var username = this.username;
    var text = this.text;
    //console.log(message, 'this is renderMessages')
    $('#chats').append(MessageView.render(message));

  }

};