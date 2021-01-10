
draw();

function draw(){
	let example = document.getElementById("canvas");
	let ctx = example.getContext("2d");
	example.height = 400;
	example.weight = 400;
	//ctx.beginPath();
	//ctx.fill(); // *14
	//ctx.moveTo(x, y); 
	//ctx.moveTo(100, 0);
	//ctx.lineTo(100, 100);
	//ctx.lineTo(60, 100);
	//ctx.lineTo(80, 20);
	//ctx.lineTo(100, 100);
	//ctx.lineTo(140, 40);
	//ctx.lineTo(120, 140);
	//ctx.stroke(); // *22
	//ctx.fillRect(5,5,50,50);
	//ctx.fillStyle = "rgba (255,0,0,0.2)";
	for(i=15;i>0;i--){
		ctx.strokeStyle = "blue";
		ctx.lineWidth = i;
		ctx.beginPath();
		ctx.moveTo(55,15+(15-i)*24);
		ctx.lineTo(355,15+(15-i)*24);
	ctx.stroke();
	}
	ctx.font = '24px "Tahoma"';
	ctx.fillText("FIGURA SYSTEMS",0,30); 
	BuildCandles(data());
	BuildAxis(data());
	for(let i = 0;i < open.length;i++){
		console.log(open[i]+" "+high[i]+" "+low[i]+" "+close[i]);
	}

}

function data(){
	let arr =[{open: 1.102, high: 1.200, low: 1.099, close: 1.100},
		{open: 1.100, high: 1.200, low: 1.099, close: 1.124},
		{open: 1.124, high: 1.200, low: 1.099, close: 1.119}];
	return arr;
}

function ReadFile(){
}

function OpenFile(){
	// Открытие файла на сервере средствами Python
	// Передача происходит только части данных которые нужны
}
//Начальное построение графика
function Begin(){
	// Имеем массив с данными data
	// Количество данных это количество свечей data.length
	// Минимальное количество отображаемых свечей
	// Максимальное количество отображаемых свчей
	// Построение осей BuildAxis(data)
	// 	Ось X - зависит от количества отображаемых свечей
	//	Ось Y - зависит от макс и мин значений этого кол-ва свечей
	//

}

function BuildAxisX(){
	let MaxCandles = 100;
	let MinCandles = 1;

}


// Построение осей
function BuildAxis(data){
	let len = data.length;
	console.log("Length data = "+len);
}

// Построение свечей
function BuildCandles(data){
	for (let arr of data){
		console.log(arr.open+" "+arr.close);
	}
}

// Масштабирование графика
function ChartZoom(){
	// Минимальное количество отображаемых свечей
	// Максимальное количество отображаемых свчей

}

