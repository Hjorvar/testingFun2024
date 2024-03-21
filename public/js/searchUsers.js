document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const form = document.querySelector('form');
  const resultsContainer = document.getElementById('results');

  form.addEventListener('submit', function(event) {
    // Prevent the default form submission which causes page reload
    event.preventDefault();
  });

  searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value;

    // If the search bar is empty, clear the results and return early
    if (!searchValue.trim()) {
      resultsContainer.innerHTML = '';
      return; // Exit the function early
    }

    // Use `fetch` to send a POST request to your server
    fetch('/', { // Make sure this matches the route in your server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ search: searchValue }),
    })
    .then(response => response.json())
    .then(users => {
      // Clear previous results
      resultsContainer.innerHTML = '';
      // Display the filtered users
      users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = user.username;
        resultsContainer.appendChild(userElement);
      });
    })
    .catch(error => console.error('Error:', error));
  });
});
