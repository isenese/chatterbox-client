var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(App.fetch, 3000);

  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      if (!data.results || !data.results.length) { return; }

      Rooms.update(data.results, RoomsView.render);
      Messages.update(data.results, MessagesView.render);

      callback();
    });
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

//var rooms = [];
// examine the response from the server request:
// console.log(data.results, 'this is coming from App.js');
// data.results.filter(message => message.text && message.username && message.roomname)
//   .forEach(message => {
//     MessagesView.renderMessage(message);
//   //console.log(message, "What is this");
//   });

// data.results.filter(message => message.roomname)

//   .forEach(room => {
//     if (!rooms.includes(room.roomname)) {
//       rooms.push(room.roomname);
//     }
//     RoomsView.renderRoom(rooms);
//   });
// console.log(rooms);