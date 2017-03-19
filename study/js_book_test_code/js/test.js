var array = [1,2,3,4,5];
//找出数字数组中最大的元素（使用Match.max函数）
function getMaxNumber(array){
	var num = Math.max.apply(this,array);
	return num;
}
getMaxNumber(array);

//转化一个数字数组为function数组
function num(array)
{
	for (var i = 0; i < array.length; i++) {
		alert(array[i]);
	};
}
num.apply(this,array);
