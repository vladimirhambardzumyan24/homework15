let Pagination = {
  books: [],
  page: 1,
  pageSize: 4,
  init: function (arr, itemCount) {
    let arrPage = [];
    for (let i = 4, j = 0; i <= arr.length; i += 4, j += 4) {
      if (arr.length - i > 4) {
        arrPage.push(arr.slice(j, i));
      } else {
        arrPage.push(arr.slice(i, arr.length));
      }
    }
    Pagination.books = arrPage;
  },
  getPageItems: function () {
    return Pagination.books[Pagination.page - 1];
  },
  nextPage: function () {
    return Pagination.books[Pagination.page++];
  },
  firstPage: function () {
    return Pagination.books[0];
  },
  lastPage: function () {
    return Pagination.books[Pagination.books.length - 1];
  },
  goToPage: function (goPage) {
    return Pagination.books[goPage];
  },
};
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems());
console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.firstPage());
console.log(Pagination.lastPage());
console.log(Pagination.goToPage(3));
