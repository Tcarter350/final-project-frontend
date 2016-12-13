angular.module('finalProject')
  .controller('SuggestionsIndexController', SuggestionsIndexController)
  .controller('SuggestionsShowController', SuggestionsShowController)
  .controller('SuggestionsNewController', SuggestionsNewController);
  // .controller('PostsEditController', PostsEditController);
SuggestionsIndexController.$inject = ['Suggestion'];
function SuggestionsIndexController(Suggestion) {
  const suggestionsIndex = this;
  suggestionsIndex.all = Suggestion.query();
}

SuggestionsShowController.$inject = ['Suggestion', '$state'];
function SuggestionsShowController(Suggestion, $state) {
  const suggestionsShow = this;
  suggestionsShow.post = Suggestion.get($state.params);
}

SuggestionsNewController.$inject = ['Suggestion', '$state'];
function SuggestionsNewController(Suggestion, $state) {
  const suggestionsNew = this;
  suggestionsNew.post = Suggestion.get($state.params);
}
