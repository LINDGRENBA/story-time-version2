$(document).ready(function() {
  $("#mad-lib-form").submit(function(event) {


    let entries = ['person1', 'person2', 'location', 'noun', 'plural-noun1', 'transportation', 'exclamation', 'adjective', 'plural-noun2'];

    entries.forEach(function(entry) {
      let userInput = $("input#" + entry).val();
      $("." + entry).text(userInput);
    });


    $("#story-body").show();
    event.preventDefault();

  }); 
});
