console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
    const filterDropdown = document.getElementById('breed-dropdown');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
  
        filterDropdown.addEventListener('change', function(event) {
          const selectedLetter = event.target.value;
          const breedListItems = dogBreedsList.getElementsByTagName('li');
  
          Array.from(breedListItems).forEach(item => {
            const breedName = item.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
              item.style.display = 'list-item';
            } else {
              item.style.display = 'none';
            }
          });
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  });
  