angular.module('finalProject')
  .controller('PostsIndexController', PostsIndexController)
  .controller('PostsShowController', PostsShowController)
  .controller('PostsNewController', PostsNewController);
  // .controller('PostsEditController', PostsEditController);
PostsIndexController.$inject = ['Post'];
function PostsIndexController(Post) {
  const postsIndex = this;
  postsIndex.all = Post.query();
}

PostsShowController.$inject = ['Post', '$state', 'Suggestion'];
function PostsShowController(Post, $state, Suggestion) {
  const postsShow = this;
  postsShow.formVisible = false;

  postsShow.newSuggestion = {
    post_id: $state.params.id
  };
  postsShow.post = Post.get($state.params);

  function createSuggestion() {
    Suggestion.save(postsShow.newSuggestion, () => {
      postsShow.newSuggestion = {
        post_id: $state.params.id
      };
      postsShow.post = Post.get($state.params);
      postsShow.formVisible = false;
    });
  }

  postsShow.createSuggestion = createSuggestion;
}

PostsNewController.$inject = ['Post', '$state'];
function PostsNewController(Post, $state) {
  const postsNew = this;
  postsNew.post = {};
}
