const destinations = [
  { name: "Amalfi", page: "amalfi.html" },
  { name: "Bled", page: "#" },
  { name: "Cairo", page: "#" },
  { name: "Kotor", page: "#" },
  { name: "Lofoten", page: "#" },
  { name: "Madeira", page: "#" },
  { name: "Manarola", page: "#" },
  { name: "Naples", page: "#" },
  { name: "Ogrid", page: "#" },
  { name: "Paris", page: "#" },
  { name: "Rome", page: "#" },
  { name: "San Francisco", page: "#" },
  { name: "Sydney", page: "#" },
  { name: "Theth", page: "#" },
  { name: "Tokyo", page: "#" }
];

const input = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');

input.addEventListener('input', function() {
  const value = this.value.trim().toLowerCase();
  suggestions.innerHTML = '';
  if (value.length === 0) return;
  const matches = destinations.filter(dest => dest.name.toLowerCase().includes(value));
  matches.forEach(dest => {
    const li = document.createElement('li');
    li.textContent = dest.name;
    li.addEventListener('click', () => {
      window.location.href = dest.page;
    });
    suggestions.appendChild(li);
  });
});

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const value = this.value.trim().toLowerCase();
    const match = destinations.find(dest => dest.name.toLowerCase() === value);
    if (match) {
      window.location.href = match.page;
    }
  }
});

document.addEventListener('click', function(e) {
  if (!input.contains(e.target) && !suggestions.contains(e.target)) {
    suggestions.innerHTML = '';
  }
});

// Toggle search box on mobile
const searchToggle = document.getElementById('search-toggle');
const searchBox = document.querySelector('.search-box');

searchToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  searchBox.classList.toggle('active');
  if (searchBox.classList.contains('active')) {
    document.getElementById('search-input').focus();
  }
});

// Hide search box when clicking outside (mobile)
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 450 && !searchBox.contains(e.target) && e.target !== searchToggle) {
    searchBox.classList.remove('active');
  }
});

const form = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');
const formError = document.getElementById('formError');
form.addEventListener('input', function () {
    submitBtn.disabled = !form.checkValidity();
    formError.classList.remove('active');
});
form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        formError.classList.add('active');
    } else {
        e.preventDefault();
        window.location.href = 'contact_succes.html';
    }
});