export default function Compile(switchClick) {
  const buttonHome = switchClick.querySelector('[data-nav="nav-home"]');
  const buttonBookmarks = switchClick.querySelector(
    '[data-nav="nav-bookmark"]'
  );
  const buttonCreate = switchClick.querySelector('[data-nav="nav-create"]');
  const buttonProfile = switchClick.querySelector('[data-nav="nav-profile"]');

  const pageHome = switchClick.querySelector('[data-page="page__home"]');
  const pageBookmarks = switchClick.querySelector(
    '[data-page="page__bookmarks"]'
  );
  const pageCreate = switchClick.querySelector('[data-page="page__create"]');
  const pageProfile = switchClick.querySelector('[data-page="page__profile"]');

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.add('active');
    buttonBookmarks.classList.remove('active');
    buttonCreate.classList.remove('active');
    buttonProfile.classList.remove('active');
  });

  buttonBookmarks.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('active');
    buttonBookmarks.classList.add('active');
    buttonCreate.classList.remove('active');
    buttonProfile.classList.remove('active');
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('active');
    buttonBookmarks.classList.remove('active');
    buttonCreate.classList.add('active');
    buttonProfile.classList.remove('active');
  });

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');

    buttonHome.classList.remove('active');
    buttonBookmarks.classList.remove('active');
    buttonCreate.classList.remove('active');
    buttonProfile.classList.add('active');
  });
}
