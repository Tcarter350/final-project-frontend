angular.module('finalProject')
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController);

RegisterController.$inject = ['$auth', '$state', '$window'];
function RegisterController($auth, $state, $window) {
  const register = this;

  register.user = {};

  function submit() {
    $auth.signup(register.user)
      .then((res) => {
        $window.localStorage.setItem('token', res.data.token);
        const id = $auth.getPayload().id;
        $state.go('usersShow', {id: id});
      });
  }

  register.submit = submit;
}

LoginController.$inject = ['$auth', '$state'];
function LoginController($auth, $state) {
  const login = this;

  login.credentials = {};

  function submit() {
    $auth.login(login.credentials)
      .then(() => {
        const id = $auth.getPayload().id;
        $state.go('usersShow', {id: id});
      });
  }

  login.submit = submit;
}
