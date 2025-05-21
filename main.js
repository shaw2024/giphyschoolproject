document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  const results = document.getElementById('results');
  results.innerHTML = '';

  if (!query) return;

  const apiKey = 'txesF9QO5dR8DXAcu6RmEds7aWszE1rW'; // Replace with your Giphy API key
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    data.data.forEach(gif => {
      const img = document.createElement('img');
      img.src = gif.images.fixed_height.url;
      img.alt = gif.title;
      results.appendChild(img);
    });
  } catch (error) {
    results.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    console.error(error);
  }
});
