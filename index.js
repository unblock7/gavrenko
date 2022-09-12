document.querySelector('h1').addEventListener('click', () => {
  console.log(111);

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
}
