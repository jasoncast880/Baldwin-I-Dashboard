const pagesKey = 'pages';

//local storage temporarily; eventually replace with a linking api to a backend
let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
  getAllPages() {
    return pagesStore;
  },
    
  getSinglePage(index) {
    return pagesStore[index];
  }
}
