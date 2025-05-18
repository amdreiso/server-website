
/*
const PHOTOS_DIV = document.getElementById("photos");
const DIR = "/home/amdrei/backup/old/";

function createImage() {
	let img = document.createElement("img");
	img.src = DIR+"AND2.jpg";

	PHOTOS_DIV.append(img);
}
createImage();

*/

function displayImage(path) {
	document.getElementById('photo-display-image').src = path;
}

fetch('/api/photos')
  .then(res => res.json())
  .then(images => {
    images.forEach(file => {
      const img = document.createElement('img');
			var path = `/photos/${file}`;
      img.src = path;
      img.alt = file;
      img.style = 'max-width: 200px; margin: 5px;';
			img.onclick = () => {
				document.getElementById('photo-display-image').src = path;
			};
      document.getElementById('photos').appendChild(img);
    });
  })
  .catch(err => {
    console.error('Failed to load images:', err);
  });

