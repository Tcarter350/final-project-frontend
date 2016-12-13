angular.module('finalProject')
  .controller('PostsIndexController', PostsIndexController)
  .controller('PostsShowController', PostsShowController);
  // .controller('PostsEditController', PostsEditController);

PostsIndexController.$inject = ['Post'];
function PostsIndexController(Post) {
  const postsIndex = this;
  postsIndex.all = Post.query();
}

PostsShowController.$inject = ['Post', '$state', 'Suggestion', '$auth'];
function PostsShowController(Post, $state, Suggestion, $auth) {
  const postsShow = this;
  postsShow.formVisible = false;

  postsShow.newSuggestion = {
    post_id: $state.params.id
  };

  Post.get($state.params).$promise.then((post) => {
    postsShow.post = post;
    if ($auth.isAuthenticated()) {
      // If the id stored in the token, is the same as the id of the post's user, then we can show the delete button
      postsShow.postOwner = $auth.getPayload().id === postsShow.post.user.id;
    }
  });

  function createSuggestion() {
    Suggestion.save(postsShow.newSuggestion, () => {
      postsShow.newSuggestion = {
        post_id: $state.params.id
      };
      postsShow.post = Post.get($state.params);
      postsShow.formVisible = false;
    });
  }

  function deletePost() {
    postsShow.post.$remove(() => {
      $state.go('postsIndex');
    });
  }

  function deleteSuggestion(suggestion) {
    console.log(suggestion);


    Suggestion.delete(suggestion, () => {
      const index = postsShow.post.suggestions.indexOf(suggestion);
      postsShow.post.suggestions.splice(index, 1);
    });
  }

  postsShow.createSuggestion = createSuggestion;
  postsShow.deleteSuggestion = deleteSuggestion;
  postsShow.deletePost = deletePost;
}
