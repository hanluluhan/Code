window.onload = function(){
	formKnow();
	inputknow();
	chooseknow();
	Canvas();
}
function formKnow(){
	var form = document.getElementById('myform');
	var nameForm = form.elements;
	console.log(nameForm[0]);
	nameForm[0].disabled = true;
	nameForm[0].value = 'first';
	nameForm[1].checked = true;
	nameForm[2].type = 'checkbox';
	nameForm[2].checked = 'checked';
	EventUtil.addHandler(form,'submit',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		var btn = target.elements[3];
		btn.disabled = true;
	});
	var text = document.getElementById('formtext');
	console.log(text);
	EventUtil.addHandler(text,'focus',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);				
		if(target.style.width == '1000px'){
			target.style.width = '100px';
		}
	});
	EventUtil.addHandler(text,'blur',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		if(/[^d]/.test(target.value)){
			target.style.width == '100px';
		}
		else{
			target.style.width = '1000px';
		}
	});
	EventUtil.addHandler(text,'change',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		if(/[^d]/.test(target.value)){
			target.style.width != '100px';
		}
		else{
			target.style.width = '1000px';
		}
	});
}
function inputknow(){
	var text = document.getElementById('formtext');
	console.log(text);
	EventUtil.addHandler(text,'focus',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		target.select();		
		if(target.style.width == '1000px'){
			target.style.width = '100px';
		}
	});
	EventUtil.addHandler(text,'select',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		console.log(target.value);
	});
	text.value = 'hello world';
	console.log(text.setSelectionRange(0,text.value.length));
	//console.log(text.setSelectionRange(0,3));
	var text1 = document.getElementById('formtext1');
	var text2 = document.getElementById('formtext2');
	var text3 = document.getElementById('formtext3');
	EventUtil.addHandler(text1,'keyup',tabForward);
	EventUtil.addHandler(text2,'keyup',tabForward);
	EventUtil.addHandler(text3,'keyup',tabForward);
}

function tabForward(event){
	var form = document.getElementById('foc');
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	if(target.value.length == target.maxLength){
		var form = target.form;
		for (var i = 0; i < form.elements.length; i++) {
			if(form.elements[i] == target){
				if(form.elements[i+1]){
					form.elements[i+1].focus();
				}
				return ;
			}
		}
	}
}
	
function chooseknow(){
	var selectbox = document.forms[0].elements['location'];
	EventUtil.addHandler(selectbox,'change',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		var selectedIndex = target.selectedIndex;
		var selectedOption = target.options[selectedIndex];
		console.log(selectedIndex+"\t"+selectedOption.value);
	});	
	//selectbox.options[2].selected = true;
	/*添加select选项：
	1.构造option元素以及option下的text节点,appendChild()（appendChild()、insertBefore()会把该元素从父节点移除，然后添加到指定位置,移动和重排适用）
	2.运用var option = new Option(text,value),appendChild()或者add(option,undefined)
	*/
	/*移除select选项
	selectbox.removeChild(selectbox.option[0])
	selectbox.remove(index)
	selectbox.option[0] = null;
	*/
}
function Canvas(){
	var drawing = document.getElementById('drawing');
	if(drawing.getContext){
		var context = drawing.getContext('2d');
		//渐变,生成gradient对象，context.fillStyle调用这个对象
		var gradient = context.createLinearGradient(0,0,70,70);
		gradient.addColorStop(0,'white');
		gradient.addColorStop(1,'black');
		//阴影
		context.shadowOffsetx = 5;
		context.shadowOffsety = 5;
		context.shadowBlur = 4;
		context.shadowColor = 'green';
		//填充
		context.fillStyle = gradient;
		context.fillRect(10,10,50,50);//x,y,长,宽
		//描边
		context.strokeStyle = '#ff0000';
		context.strokeRect(60,60,100,100);//x,y,长,宽

		/*画图*/
		context.beginPath();
		//圆心100,100，半径99，开始角度0，结束角度2PI,顺时针方向
		context.arc(100,100,99,0,2*Math.PI,false);		
		context.translate(100,100);
		context.rotate(1);
		context.moveTo(0,0);
		context.lineTo(0,-85);
		context.moveTo(0,0);
		context.lineTo(-65,0);
		context.stroke();
		//save()和restore()可以保存设置和调用设置

		//var image = document.canvas[0];
		//context.drawImage(context,70,70);
		//模式
		pattern = context.createPattern(drawing,"repeat-y");
		context.fillStyle = pattern;
		context.fillRect(100,100,2000,2000);
		//使用图像数据,灰阶过滤
		var imageData = context.getImageData(0,0,100,100);
		data = imageData.data;
		for (var i = 0; i < data.length; i+=4) {
			red = data[i];
			green = data[i+1];
			blue = data[i+2];
			alpha = data[i+3];
		
		average = Math.floor((red+green+blue)/3);
		data[i] = average;
		data[i+1] = average;
		data[i+2] = average;
		}
		imageData.data = data;
		context.putImageData(imageData,0,0);
		//合成，globalAlpha透明度，globalCompositionOperation先后绘制的图像如何结合
		//绘制红色矩形
		context.fillStyle = '#ff0000';
		context.fillRect(200,200,50,50);
		//修改全局透明度
		//context.globalAlpha = 0.5;
		//默认红色在蓝色之上，加上这句蓝色就在红色之下
		context.globalCompositeOperation = 'destination-over';
		//绘制蓝色矩形
		context.fillStyle = '#00ff00';
		context.fillRect(230,230,50,50);
		//重置全局透明度
		context.globalAlpha = 0;
		//
	}
}
