//函数绑定
var handler = {
	message : "Event",
	handleClick : function(event){
		alert(this.message)
	}
}

var btn = document.getElementById('btn');
EventUntil.addHandler(btn,'click',handler.handleClick);//没有保存执行环境，显示undefined
EventUntil.addHandler(btn,'click',function(event){   //使用闭包来
	handler.handleClick(event);
});
EventUntil.addHandler(btn,'click',handler.handleClick.bind(handler));//bind()函数传入执行环境
//函数柯里化
function curry(fn){
	var args = Array.prototype.slice.call(argument,1);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = innerArgs.concat(args);
		return fn.apply(null,arguments);
	};
}

