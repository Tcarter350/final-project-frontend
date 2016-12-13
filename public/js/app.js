"use strict";function Auth(e,t){e.loginUrl=t+"/login",e.signupUrl=t+"/register",e.tokenPrefix=""}function RegisterController(e,t){function o(){e.signup(r.user).then(function(){t.go("login")})}var r=this;r.user={},r.submit=o}function LoginController(e,t){function o(){e.login(r.credentials).then(function(){t.go("usersIndex")})}var r=this;r.credentials={},r.submit=o}function CategoriesIndexController(e){var t=this;t.all=e.query()}function CategoriesShowController(e,t){var o=this;o.category=e.get(t.params)}function CategoriesNewController(e,t){var o=this;o.category=e.get(t.params)}function Category(e,t){return new e(t+"/categories/:id",{id:"@id"},{update:{method:"PUT"}})}function MainController(e,t,o){function r(){e.logout().then(function(){t.go("usersIndex")})}function s(o,r,s){l.message=null,(!e.isAuthenticated()&&n.includes(r.name)||"usersEdit"===r.name&&parseFloat(s.id)!==e.getPayload().id)&&(o.preventDefault(),t.go("login"),l.message="You must be logged in to go there!")}var l=this;l.isLoggedIn=e.isAuthenticated,l.message=null;var n=["usersEdit","usersNew"];o.$on("$stateChangeStart",s),l.logout=r}function Post(e,t){return new e(t+"/posts/:id",{id:"@id"},{update:{method:"PUT"}})}function PostsIndexController(e){var t=this;t.all=e.query()}function PostsShowController(e,t,o){function r(){o.save(s.newSuggestion,function(){s.newSuggestion={post_id:t.params.id},s.post=e.get(t.params),s.formVisible=!1})}var s=this;s.formVisible=!1,s.newSuggestion={post_id:t.params.id},s.post=e.get(t.params),s.createSuggestion=r}function PostsNewController(e,t){var o=this;o.post={}}function Router(e,t){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("usersShow",{url:"/users/:id",templateUrl:"templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("postsIndex",{url:"/posts",templateUrl:"/templates/postsIndex.html",controller:"PostsIndexController as postsIndex"}).state("postsNew",{url:"/posts/new",templateUrl:"/templates/postsNew.html",controller:"PostsNewController as postsNew"}).state("postsShow",{url:"/posts/:id",templateUrl:"/templates/postsShow.html",controller:"PostsShowController as postsShow"}).state("categoriesShow",{url:"/categories/:id",templateUrl:"/templates/categoriesShow.html",controller:"CategoriesShowController as categoriesShow"}).state("categoriesIndex",{url:"/categories",templateUrl:"/templates/categoriesIndex.html",controller:"CategoriesIndexController as categoriesIndex"}).state("categoriesNew",{url:"/categories",templateUrl:"/templates/categoriesShow.html",controller:"CategoriesShowController as categoriesShow"}).state("suggestionsIndex",{url:"/suggestions",templateUrl:"/templates/suggestionsIndex.html",controller:"SuggestionsIndexController as suggestionsIndex"}).state("suggestionsNew",{url:"/suggestions",templateUrl:"/templates/suggestionsShow.html",controller:"SuggestionsShowController as suggestionsShow"}),t.otherwise("/posts")}function Suggestion(e,t){return new e(t+"/suggestions/:id",{id:"@id"},{update:{method:"PUT"}})}function SuggestionsIndexController(e){var t=this;t.all=e.query()}function SuggestionsShowController(e,t){var o=this;o.post=e.get(t.params)}function SuggestionsNewController(e,t){var o=this;o.post=e.get(t.params)}function User(e,t){return new e(t+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var t=this;t.all=e.query()}function UsersShowController(e,t,o){function r(){l.user.$remove(function(){t.go("usersIndex")})}function s(){return o.getPayload().id===Number(t.params.id)}var l=this;l.user=e.get(t.params),l.isCurrentUser=s,l.delete=r,l.isLoggedIn=o.isAuthenticated}function UsersEditController(e,t){function o(){r.user.$update(function(){t.go("usersShow",t.params)})}var r=this;r.user=e.get(t.params),this.update=o}function ProfileFeedController(e,t){var o=this;o.all=t.query(e.params)}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").controller("CategoriesIndexController",CategoriesIndexController).controller("CategoriesShowController",CategoriesShowController).controller("CategoriesNewController",CategoriesNewController),CategoriesIndexController.$inject=["Category"],CategoriesShowController.$inject=["Category","$state"],CategoriesNewController.$inject=["Category","$state"],angular.module("finalProject").factory("Category",Category),Category.$inject=["$resource","API_URL"],angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("finalProject").factory("Post",Post),Post.$inject=["$resource","API_URL"],angular.module("finalProject").controller("PostsIndexController",PostsIndexController).controller("PostsShowController",PostsShowController).controller("PostsNewController",PostsNewController),PostsIndexController.$inject=["Post"],PostsShowController.$inject=["Post","$state","Suggestion"],PostsNewController.$inject=["Post","$state"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("Suggestion",Suggestion),Suggestion.$inject=["$resource","API_URL"],angular.module("finalProject").controller("SuggestionsIndexController",SuggestionsIndexController).controller("SuggestionsShowController",SuggestionsShowController).controller("SuggestionsNewController",SuggestionsNewController),SuggestionsIndexController.$inject=["Suggestion"],SuggestionsShowController.$inject=["Suggestion","$state"],SuggestionsNewController.$inject=["Suggestion","$state"],angular.module("finalProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state"],ProfileFeedController.$inject=["$state","ProfileFeed"];
//# sourceMappingURL=app.js.map
