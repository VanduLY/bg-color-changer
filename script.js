// Select elements
const button = document.getElementById('colorButton');
const colorName = document.getElementById('colorName');
const body = document.body;

// Array of colors with names
const colors = [
    { name: 'Red', code: '#f28b82' },
    { name: 'Orange', code: '#fbbc04' },
    { name: 'Yellow', code: '#fff475' },
    { name: 'Green', code: '#ccff90' },
    { name: 'Teal', code: '#a7ffeb' },
    { name: 'Blue', code: '#cbf0f8' },
    { name: 'Purple', code: '#d7aefb' },
    { name: 'Pink', code: '#fdcfe8' },
    { name: 'Cyan', code: '#00ffff' },
    { name: 'Lime', code: '#bfff00' },
    { name: 'Indigo', code: '#4b0082' },
    { name: 'Brown', code: '#8b4513' },
    { name: 'Magenta', code: '#ff00ff' },
    { name: 'Peach', code: '#ffcba4' },
    { name: 'Lavender', code: '#e6e6fa' },
    { name: 'Gold', code: '#ffd700' },
    { name: 'Silver', code: '#c0c0c0' },
    { name: 'Coral', code: '#ff7f50' },
    { name: 'Violet', code: '#8a2be2' },
    { name: 'Olive', code: '#808000' },
    { name: 'Maroon', code: '#800000' },
    { name: 'Crimson', code: '#dc143c' },
    { name: 'Black', code: '#000000' },
  ];

// Add event listener to the button
button.addEventListener('click', () => {
  // Get a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Change the background color of the page
  body.style.backgroundColor = randomColor.code;

  // Update the color name text and background
  colorName.textContent = randomColor.name;
  colorName.style.backgroundColor = 'white'; // Keep this distinct for visibility
  colorName.style.color = randomColor.code;  // Match text color with the background
});
