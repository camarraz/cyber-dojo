/*global $,cyberDojo*/

var cyberDojo = (function(cd, $) {
  "use strict";
  
  // The run method is called from the two home page
  // button handlers: start, resume.
  // See app/views/dojo/_start_button.html.erb
  // See app/views/dojo/_resume_button.html.erb
  // In each case the callback method func() contains
  // a way to progress:
  //    start: shows your animal, clicking ok open a new edit-page
  //   resume: shows the started animals, clicking one opens a new edit page
  // This common format is deliberate. It means there is a _direct_
  // connection (in javascript) between the final start/resume
  // click and the POST.
  // This is important because if the connection is not direct (for
  // example if there is an _intervening_ $.getJSON call) then the
  // new page will get a (possibly suppressed) "popup blocked".

  cd.run = function(methodName, ok, func) {    
    var id = $('#kata_id_input').val();
    id = $.trim(id);
    if (id === '') {
      cd.dialog_noId(ok).dialog('open');
    }
    else {
      $.getJSON('/dojo/' + methodName , { id: id }, function(dojo) {
        if (!dojo.exists) {
          cd.dialog_cantFindDojo(id, ok).dialog('open');
        }
        else {
          func(id, dojo);
        }
      });
    }
  };

  return cd;
})(cyberDojo || {}, $);



