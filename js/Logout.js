export default function Logout(profileLogout) {
  const logoutButton = profileLogout.querySelector('[data-js="logout-button"]');
  const sectionHide = profileLogout.querySelector('[data-js="show-hide"]');

  logoutButton.addEventListener('click', () => {
    if (logoutButton.textContent.trim() === 'Log Out') {
      logoutButton.textContent = 'Log In';
    } else {
      logoutButton.textContent = 'Log Out';
    }
    sectionHide.classList.toggle('hidden');
  });
}
