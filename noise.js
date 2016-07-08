
// this is how I make shit play: $('#cAudio')[0].play()

// this is how I access a button: $('button')[0]

var Keyboard = function() {
 var self = this;

  this.initialize = function() {
    self.doTheThing()
  }

  this.doTheThing = function() {

  //all the buttons:
    var buttons = $('button')
    var AudioC = $('#cAudio')[0]
    var AudioD = $('#dAudio')[0]
    var AudioE = $('#eAudio')[0]
    var AudioF = $('#fAudio')[0]
    var AudioG = $('#gAudio')[0]
    var AudioA = $('#aAudio')[0]
    var AudioB = $('#bAudio')[0]

    buttons.on('click', function(event) {
      event.preventDefault()

      var button = $(this)
      if (button.hasClass('note c')) {
        AudioC.play()
      } else if (button.hasClass('note d')) {
          AudioD.play()
      } else if (button.hasClass('note e')) {
          AudioE.play()
      } else if (button.hasClass('note f')) {
          AudioF.play()
      } else if (button.hasClass('note g')) {
          AudioG.play()
      } else if (button.hasClass('note a')) {
          AudioA.play()
      } else if (button.hasClass('note b')) {
          AudioB.play()
      }
    })
  }
}



$(document).ready( function() {
  var keyboard = new Keyboard
  keyboard.initialize()
});












// this.getButton = function() {
//   //then this button note is clicked do this thing
//   $('button.note').click(function() {
//     //the thing to do is access the class of this note and make into array by splitting the elements then accessing the note part which is the [1] index of the new array built from splitting
//     var note = $(this).attr('class').split(' ')[1]
//     //now tell the keyboard to play the note variable by passing the note to another method which will be in chargeof playing the sound
//     self.playNote(note);
//   })
// }
//
// this.playNote = function(note) {
//   //get the audio id of the note you passed to this method ( such as '#cAduio') and set it to a variable you can call play() on
//   var audioId = '#' + note + 'Audio'
//   //call play on this (see above way to access it), but since its a variable, you dont need to put it in ''
//   $(audioId)[0].play()
//
//   //current time thing for the 8 sec stuffs:
//   $(audioId)[0].currentTime = 0
// }
