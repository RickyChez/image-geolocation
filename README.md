# Image Geolocation

A simple Node.js module to extract geolocation data from image files.

## Installation

Install the package via npm:

```bash
npm install image-geolocation
```

## Usage

```javascript
const getImageGeolocation = require('image-geolocation');

const imagePath = 'path/to/your/image.jpg';

getImageGeolocation(imagePath)
    .then(({ latitude, longitude }) => {
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
