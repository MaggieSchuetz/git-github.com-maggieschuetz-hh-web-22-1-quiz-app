export function bookmarks() {
  const bookmark = document.querySelector('[data-js="js-bookmark"]');

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bg-teal');
  });
}
