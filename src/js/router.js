angular.module('finalProject')
 .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
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
     });

  $urlRouterProvider.otherwise('/posts');
}
