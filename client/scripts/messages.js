var Messages = {

  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};



// fetchMessages: function(callback = ()=>{}) {

//   var messages = [];
//   Parse.readAll((data) => {
//     // examine the response from the server request:
//   //  console.log(data, 'this is coming from Messages.js');
//   //console.log(data.results, 'fetchmessages')
//     for (var i = 0; i < data.results.length; i++) {
//       // debugger;
//       var obj = data.results[i];
//       var tempObj = {};
//       for (var key in obj) {
//         if (key === 'roomname' || key === 'username' || key === 'text') {
//           tempObj[key] = obj[key];
//         }
//       }
//       messages.push(tempObj);
//     }

// console.log(messages.results)
//     // array of objects from each object we need  'roomname', 'text' and 'username'
//     callback();
//   });
//   //console.log(messages);
//   return messages;
// }
