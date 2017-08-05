// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require tether
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

document.addEventListener("turbolinks:load", function() {
  tinymce.remove();
  tinymce.init({
    height:'480',
    selector:'textarea#post_body',
    plugins: "codesample image media link code",
    toolbar: "undo redo | styleselect | bold italic | codesample image media link code"
  });
})
