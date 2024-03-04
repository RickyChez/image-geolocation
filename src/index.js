const ExifImage = require('exif').ExifImage;

function getImageGeolocation(imagePath) {
    return new Promise((resolve, reject) => {
        try {
            new ExifImage({ image: imagePath }, (error, exifData) => {
                if (error) {
                    reject(error);
                } else {
                    if (exifData.gps && exifData.gps.GPSLatitude && exifData.gps.GPSLongitude) {
                        const latitude = convertDMSToDD(exifData.gps.GPSLatitude);
                        const longitude = convertDMSToDD(exifData.gps.GPSLongitude);
                        resolve({ latitude, longitude });
                    } else {
                        reject(new Error('Image does not contain GPS metadata.'));
                    }
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

function convertDMSToDD(dms) {
    const degrees = dms[0];
    const minutes = dms[1];
    const seconds = dms[2];
    return degrees + minutes / 60 + seconds / 3600;
}

module.exports = getImageGeolocation;
