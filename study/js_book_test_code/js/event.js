window.onload=function(){
event_flow();
event_object();
event_type();
}
var handler =function(){
	alert(this.id);
}
/*兼容ie，dom2事件处理*/
var EventUtil = {
	addHandler: function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
			}
		else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
			}
		else{
			element["on"+type] = handler;
		}
	},
	getEvent :function(event){
		return event?event:window.event;
	},
	getTarget :function(event){
		return event.target || event.srcElement;
	},
	preventDefault :function(event){
		if(event.preventDefault){
			event.preventDefault();
		}
		else
			event.returnValue = false;
	},
	removeHandler: function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
			}
		else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
			}
		else{
			element["on"+type] = null;
		}
	},
	stopPropagation :function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}
		else
			event.cancelBubble = true;
	}
}
function event_flow(){
	/*第三个参数代表是在捕获阶段调用事件处理程序(true)还是在冒泡阶段调用处理程序(false)*/
var btn = document.getElementById('but1');
btn.addEventListener('click',handler,true);//不推荐
document.getElementById('div1').addEventListener('click',function(){
		alert(this.id);
},false);
//btn.removeEventListener('click',handler,true);
/*ie事件处理程序：1.onclick。2.按事件添加的相反顺序执行,3.作用域是window.event*/
try{
document.getElementById('div1').attachEvent('onclick',function(){
		alert(this.id);
});
document.getElementById('div1').attachEvent('onclick',function(){
		alert("this.id");
});
document.getElementById('div1').detachEvent('onclick',handler);
}
catch(e){}
/*兼容ie，dom2事件处理*/
EventUtil.addHandler(btn,'click',handler);
}
function event_object(){
document.body.onclick = function(event){
	console.log(event.currentTarget === document.body);
	console.log(this === document.body);
	console.log(event.target === document.getElementById('but1'));
	/*event.target -- event.srcElement*/
	/*DOM2(IE)：preventDefault(returnValue=false)阻止事件行为、stopPropagation(cancelBubble=true)阻止事件在Dom层中传播、eventPhase确定事件流处于哪个阶段*/
	/**/
}
}
function event_type(){
	//click、mouseup、mousedown、dbclick、mouseout、mouseenter、mouseover、mouseleave
	//pageX、pageY、clientX、clientY、scrollLeft、scrollTop、screenX、screenY
	//keydown 任意键 keypress 字符键 keyup
	/*事件代理*/
	var list = document.getElementById('list');
	EventUtil.addHandler(list,'click',function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		// switch(target.id){
		// //	case "1":
			console.log(target.id)
		// }
	});
	var btn = document.getElementById('but1');
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click',true,true,true,document.defaultView,0,0,0,false,false,false,false,0,null);
	btn.dispatchEvent(event);	
}
