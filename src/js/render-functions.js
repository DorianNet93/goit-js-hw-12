export function renderImages(images) {
  return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <div class="likes">
              <b>Likes</b>
              <p>${likes}</p>
            </div>
            <div class="views">
              <b>Views</b>
              <p>${views}</p>
            </div>
            <div class="comments">
              <b>Comments</b>
              <p>${comments}</p>
            </div>
            <div class="downloads">
              <b>Downloads</b>
              <p>${downloads}</p>
            </div>
          </div>
      </a>
  `).join('');
}

export function clearGallery(container) {
  container.innerHTML = '';
}