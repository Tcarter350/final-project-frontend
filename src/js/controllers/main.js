angular.module('finalProject')
.controller('MainController', MainController);
MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;
  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;
  main.loginVisible = false;
  main.registerVisible = false;
  function logout() {
    $auth.logout()
    .then(() => {
      $state.go('postsIndex');
    });
  }

  function getUserId() {
    const userId = $auth.getPayload().id;
    $state.go('usersShow', {id: userId});
  }




  const protectedStates = ['usersEdit', 'usersNew'];
  function secureState(e, toState, toParams) {
    main.message = null;
    main.loginVisible = false;
    main.registerVisible = false;
    if((!$auth.isAuthenticated() &&
    protectedStates.includes(toState.name)) ||
    toState.name === 'usersEdit' && (parseFloat(toParams.id) !== $auth.getPayload().id)) {
      e.preventDefault();
      $state.go('login');
      main.message = 'You must be logged in to go there!';
    }
  }
  $rootScope.$on('$stateChangeStart', secureState);
  main.logout = logout;
  main.getUserId = getUserId;
}
