document.querySelector('h1').addEventListener('click', () => {
  console.log(111);

  if (navigator.geolocation) {
    console.log('222');

    navigator.geolocation.getCurrentPosition(
      //Функция получения позиции
      function (position) {
        console.log('333');
        console.log(position);
      },
      //Функция в случае ошибки
      function () {
        alert('Невозможно получить Вашу позицию');
        console.log('555');
      }
    );
  }
});
