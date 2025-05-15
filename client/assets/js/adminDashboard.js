    function toggleDropdown() {
      const dropdown = document.getElementById('profile-dropdown');
      const button = document.getElementById('profile-dropdown-button');
      if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
        // Close dropdown on outside click
        document.addEventListener('click', outsideClickListener);
      } else {
        dropdown.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', outsideClickListener);
      }
    }
    function outsideClickListener(event) {
      const container = document.getElementById('profile-dropdown-container');
      const button = document.getElementById('profile-dropdown-button');
      if (!container.contains(event.target)) {
        document.getElementById('profile-dropdown').classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', outsideClickListener);
      }
    }