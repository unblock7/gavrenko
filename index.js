if (navigator.geolocation) {
    console.log('start');

  const successCallback = (position) => {
	  console.log(position);
  };

  const errorCallback = (position) => {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
	
	console.log("end");
}
