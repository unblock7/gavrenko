if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(
		//Получили позицию
		function(position){
				console.log(position);
		},
		//В случае если пользователь не подтвердит разрешение, либо какая-то ошибка
		function(){
			alert('Невозможно получить Вашу позицию')
		}
	);
}
