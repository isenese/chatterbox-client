
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {

    //$('#rooms select').append(`<option>${room}</option>`)
  },

  renderRoom: function(room) {

    console.log(room.length);
    // var roomsObj = [] ;
    // if (!roomsObj.includes(room)) {
    //   roomsObj.push(room)
    // console.log
    //for loop add
    for (var i = 0; i < room.length; i ++) {
      if ($('#rooms select').value !== `${room}`) {
        $('#rooms select').append(`<option value="${rooms}">${room[i]}</option>`);
      }
    }

    // }



  }

};
