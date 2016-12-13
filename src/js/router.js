angular.module('finalProject')
 .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('usersIndex', {
       url: '/users',
       templateUrl: '/templates/usersIndex.html',
       controller: 'UsersIndexController as usersIndex'
     })
     .state('register', {
       url: '/register',
       templateUrl: '/templates/register.html',
       controller: 'RegisterController as register'
     })
     .state('login', {
       url: '/login',
       templateUrl: '/templates/login.html',
       controller: 'LoginController as login'
     })
     .state('usersShow', {
       url: '/users/:id',
       templateUrl: 'templates/usersShow.html',
       controller: 'UsersShowController as usersShow'
     })
     .state('usersEdit', {
       url: '/users/:id/edit',
       templateUrl: 'templates/usersEdit.html',
       controller: 'UsersEditController as usersEdit'
     })
     .state('postsIndex', {
       url: '/posts',
       templateUrl: '/templates/postsIndex.html',
       controller: 'PostsIndexController as postsIndex'
     })
     .state('postsNew', {
       url: '/posts/new',
       templateUrl: '/templates/postsNew.html',
       controller: 'PostsNewController as postsNew'
     })
     .state('postsShow', {
       url: '/posts/:id',
       templateUrl: '/templates/postsShow.html',
       controller: 'PostsShowController as postsShow'
     })
     .state('categoriesShow', {
       url: '/categories/:id',
       templateUrl: '/templates/categoriesShow.html',
       controller: 'CategoriesShowController as categoriesShow'
     })

     .state('categoriesIndex', {
       url: '/categories',
       templateUrl: '/templates/categoriesIndex.html',
       controller: 'CategoriesIndexController as categoriesIndex'
     })

     .state('categoriesNew', {
       url: '/categories',
       templateUrl: '/templates/categoriesShow.html',
       controller: 'CategoriesShowController as categoriesShow'
     })

    //  .state('suggestionsShow', {
    //    url: '/suggestions/:id',
    //    templateUrl: '/templates/suggestionsShow.html',
    //    controller: 'SuggestionsShowController as suggestionsShow'
    //  })

     .state('suggestionsIndex', {
       url: '/suggestions',
       templateUrl: '/templates/suggestionsIndex.html',
       controller: 'SuggestionsIndexController as suggestionsIndex'
     })

     .state('suggestionsNew', {
       url: '/suggestions',
       templateUrl: '/templates/suggestionsShow.html',
       controller: 'SuggestionsShowController as suggestionsShow'
     });

  $urlRouterProvider.otherwise('/posts');
}
