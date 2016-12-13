angular.module('finalProject')
  .controller('UsersShowController', UsersShowController)
  .controller('UsersEditController', UsersEditController);

UsersShowController.$inject = ['User', '$state', '$auth', 'Post'];
function UsersShowController(User, $state, $auth, Post) {
  const usersShow = this;
  usersShow.postformVisible = false;
  usersShow.user = User.get($state.params);
  function deleteUser() {
    usersShow.user.$remove(() => {
      $state.go('usersIndex');
    });
  }

  function isCurrentUser() {
    if ($auth.isAuthenticated()) {
      return $auth.getPayload().id === Number($state.params.id);
    }
  }

  usersShow.isCurrentUser = isCurrentUser;
  usersShow.delete = deleteUser;
  usersShow.isLoggedIn = $auth.isAuthenticated;
  //form visibility set to false. now in the usersShow.html the hide/show button code will work

  usersShow.newPost = {
    user_id: $state.params.id
  };
  usersShow.user = User.get($state.params);

  function createPost() {
    Post.save(usersShow.newPost, () => {
      usersShow.newPost = {
        user_id: $state.params.id
      };
      usersShow.user = User.get($state.params);
      usersShow.postformVisible = false;

    });
  }

  usersShow.createPost = createPost;
}


UsersEditController.$inject = ['User', '$state'];
function UsersEditController(User, $state) {
  const usersEdit = this;
  usersEdit.user = User.get($state.params);
  function update() {
    usersEdit.user.$update(() => {
      $state.go('usersShow', $state.params);
    });
  }
  this.update = update;
}

// ProfileFeedController.$inject = [ '$state', 'ProfileFeed' ];
// function ProfileFeedController($state, ProfileFeed) {
//   const profileFeed = this;
//
//   profileFeed.all = ProfileFeed.query($state.params);
// }
