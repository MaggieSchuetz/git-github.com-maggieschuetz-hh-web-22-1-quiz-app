export default function Logout(profileLogout) {
  const logoutButton = profileLogout.querySelector('[data-js="logout-button"]');

  logoutButton.addEventListener('click', () => {
    if (logoutButton.textContent.trim() === 'Log Out') {
      logoutButton.textContent = 'Log In';
    } else {
      logoutButton.textContent = 'Log Out';
    }
    /*answerText.classList.toggle('profile--hide');*/
  });
}
