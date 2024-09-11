import { FavoritesView } from './Favorites.js'

new FavoritesView('#app')



import { setupTable } from './table.js';
import { setupSearch } from './search.js';

document.addEventListener("DOMContentLoaded", function() {
    setupTable();
    setupSearch();
});
