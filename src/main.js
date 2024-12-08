import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let query = '';
let page = 1;
const perPage = 15;

const lightbox = new SimpleLightbox('.gallery a');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({ message: 'Search query cannot be empty!' });
    return;
  }

  page = 1;
  loadMoreButton.style.display = 'none';
  clearGallery(gallery);
  showLoader();

  try {
    const data = await fetchImages(query, page, perPage);
    if (data.hits.length === 0) {
      iziToast.warning({ message: 'No images found. Try another query.' });
      return;
    }

    gallery.innerHTML = renderImages(data.hits);
    lightbox.refresh();

    if (data.totalHits > perPage) {
      loadMoreButton.style.display = 'block';
    }
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    hideLoader();
  }
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await fetchImages(query, page, perPage);
    gallery.insertAdjacentHTML('beforeend', renderImages(data.hits));
    lightbox.refresh();

    const cardHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page * perPage >= data.totalHits) {
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      loadMoreButton.style.display = 'none';
    }
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    hideLoader();
  }
});
