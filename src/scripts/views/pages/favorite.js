import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import listRestaurant from '../templates/list-restaurant-template';

const Favorite = {
  async render() {
    return `
    <div tabindex='0' id="main-content" class="explore">
      <h1>List Restoran Favorit Anda</h1>
      <div id='list-restaurants' class="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const list = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(list);
    const listContainer = document.querySelector('.restaurants');

    if (list.length === 0) {
      listContainer.innerHTML = `
      Silahkan tambah restaurant favoritemu dulu di halaman utama
      `;
    }
    list.forEach((restaurant) => {
      listContainer.innerHTML += listRestaurant(restaurant);
    });
  },
};

export default Favorite;
