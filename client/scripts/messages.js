var Messages = {



  fetchMessages: function(callback = ()=>{}) {

    var messages = [];
    Parse.readAll((data) => {
      // examine the response from the server request:
    //  console.log(data, 'this is coming from Messages.js');
    //console.log(data.results, 'fetchmessages')
      for (var i = 0; i < data.results.length; i++) {
        // debugger;
        var obj = data.results[i];
        var tempObj = {};
        for (var key in obj) {
          if (key === 'roomname' || key === 'username' || key === 'text') {
            tempObj[key] = obj[key];
          }
        }
        messages.push(tempObj);
      }

      // console.log(messages.results)
      // array of objects from each object we need  'roomname', 'text' and 'username'
      callback();
    });
    //console.log(messages);
    return messages;
  }
};