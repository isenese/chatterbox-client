var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {

    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }

};
//console.log(room.length);
// var roomsObj = [] ;
// if (!roomsObj.includes(room)) {
//   roomsObj.push(room)
// console.log
//for loop add
// for (var i = 0; i < room.length; i ++) {
//   if ($('#rooms select').value !== `${room}`) {
//     $('#rooms select').append(`<option value="${rooms}">${room[i]}</option>`);
//   }
// }

//}
//   },

//   handleChange: function(event) {
//     Rooms.selected = RoomsView.$select.val();
//     MessagesView.render();
//   },

//   handleClick: function(event) {
//     var roomname = prompt('Enter room name');
//     if (roomname) {
//       Rooms.add(roomname, () => {
//         RoomsView.render();
//         MessagesView.render();
//       });
//     }
//   }
// };
