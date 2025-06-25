if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      // Success callback: User granted permission and location data is available
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      // You can now use the location data
    },
    function(error) {
      // Error callback: User denied permission or an error occurred
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
    },
    {
      // Optional options object
      enableHighAccuracy: true, // Request high accuracy if available
      timeout: 5000,           // Maximum time in milliseconds to wait for a position
      maximumAge: 0            // Don't use a cached position
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.log("Geolocation is not supported by this browser.");
}