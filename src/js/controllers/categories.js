angular.module('finalProject')
  .controller('CategoriesIndexController', CategoriesIndexController)
  .controller('CategoriesShowController', CategoriesShowController);

CategoriesIndexController.$inject = ['Category'];
function CategoriesIndexController(Category) {
  const categoriesIndex = this;
  categoriesIndex.all = Category.query();
}

CategoriesShowController.$inject = ['Category', '$state'];
function CategoriesShowController(Category, $state) {
  const categoriesShow = this;
  categoriesShow.category = Category.get($state.params);
}
