var Repos = require('./../js/githubapi.js').repoModule;

var displayRepo = function(userName, repoData) {
  repoData.forEach(function(repo) {
    $("ul").prepend("<li>" + repo + "</li>");
  })
};

$(document).ready(function() {
  var insertedUsername = new Repos();
  $('#listRepo').click(function() {
    var userName = $('#userInput').val();
    $('#userInput').val("");
    insertedUsername.getRepos(userName, displayRepo);
  });
});
