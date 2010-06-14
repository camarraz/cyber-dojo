
function runTests()
{
  // _js_editor_menu.html.erb
  // ......... callback: function(e) { runTests(); } ..........
  $('play').click();
}

function preRunTests()
{
  // app/views/kata/view.html.erb
  // form_remote_tag :url => {...}, 
  //                 :before   => "preRunTests();",
  saveCurrentFile();
  $('play').setAttribute('style', 'display:none');
  $('run_tests_spinner').setAttribute('style', 'visibility:visible');
}

function postRunTests()
{
  // app/views/kata/view.html.erb
  // form_remote_tag :url => {...}, 
  //                 :complete => "postRunTests();"
  $('run_tests_spinner').setAttribute('style', 'display:none');
  $('play').setAttribute('style', 'visibility:visible');
  // new increment could affect layout
  refreshLineNumbering();
  $('editor').focus();
}

