if (navigator.geolocation) {
    console.log('start');

  const successCallback = (position) => {
	  console.log(position);
  };

  const errorCallback = (position) => {
    console.log(error.code + ':' + error.message);
  };
	
var geo_options = {
  timeout           : 5000
};

  navigator.geolocation.getCurrentPosition(successCallback,errorCallback, geo_options);
	
	console.log("end");
}
