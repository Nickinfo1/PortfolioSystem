class Chart
{
	constructor(data){
		this.data = data;
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
	}

	constructor(date, time, open, high, low, close){
		this.date = date;
		this.time = time;
		this.open = open;
		this.high = high;
		this.low = low;
		this.close = close;
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
	}
	
	BuildAxises(high, low, date, time){
		let LengthX = date.length;
		let LengthY = high.max - low.min;

	}
	BuildAxisX(length){
		let axisX = new AxisX(length, this.canvas);
		axisX.Build();
	}
	BuildAxisY(data){
		let axisY = new AxisY(data, this.canvas);
		axisY.Build();
	}

	Show(){
		BuildAxisX();
		BuildAxisY();
	}


}

class Line{
	constructor(canvas){
		this.canvas = canvas;
	}
	Draw(x,y){
	}
}

// 5 зон у графика
// зоны осей которые могут быть сверху снизу (х)
// зоны осей которые могут быть справа или слева (у)
// зона графика
class AxisX{
	constructor(data, canvas, left, right, down, top){
		this.data = data;
		this.canvas = canvas;
		this.line = new Line(canvas);
		// Параметры расположения
		this.left = left;
		this.right = right;
		this.down = down;
		this.top = top;
	}
	constructor(length, canvas){
		this.length = length;
		this.canvas = canvas;
	}
	// Рисование оси
	DrawAxis(){
		// в зависимости от парметров расположения
		// выводятся х и у
		x = 0;
		y = 0;
		this.line.Draw(x,y);
		DrawSplit(this.line);
	}
	// Рисование делений на линии
	DrawSplit(line){
		
	}
	// Подписываем каждое деление
	SubcribeSplit(){
	
	}
	// Рисуем ось снизу
	BuildDown(){
		// Оси рисуются в зависимости от Длины канваса(отступ от правого края и от левого)
		// рисуем линию внизу канвала с отступом от низа
		// делим линию на length равных частей
		// Рисуем небольшие линии разделяющие эти части
		// Из массива данных формируем подписи 
	}
}

class AxisY{
	constructor(data, canvas){
		this.data = data;
		this.canvas = canvas;
	}
}

