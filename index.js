if (navigator.geolocation) {
    console.log('222');

  const successCallback = (position) => {
	  console.log(position);
  };

  const errorCallback = (position) => {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
}
