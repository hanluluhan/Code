window.onload = function(){
json();
}
function json(){
var book = 
	{
		"title":"Profession JavaScript",
		"author":[
			"Nicholas","Jsno"
		],
		// toJSON: function(){
		// 	return this.title;
		// },
		edition:3,
		year:2011,
		releaseDate:new Date(2011,1,1)
	};
/**序列化顺序
1.如果存在toJSON()方法且能取到有效值，则调用改方法进行过滤
2.如果有第二个参数则应用改过滤器，输入值是第一步的返回值
3.对第二步返回的每个值进行序列化
4.如果提供个第三个参数则进行格式化
*/
//javascript 对象序列化
var jsonText = JSON.stringify(book);
console.log(jsonText);
//json数据转化为javascript对象.第二个参数可为空
var bookCopy = JSON.parse(jsonText,function(key,value){
	switch(key){
		case "releaseDate":
			return new Date(value); //字符串转化为date型数据
		default: return value;
	}
});
console.log(bookCopy);
console.log(bookCopy.releaseDate.getFullYear())//若releaseDate非date类型则报错
//stringify第二个参数过滤，第三个参数控制缩进和空白符,参数大小或长度小于10
var jsonFilter = JSON.stringify(book,["title","author","year"]);
console.log(jsonFilter);
// var jsonFilter2 = JSON.stringify(book,function(key,value){
// 	switch(key){
// 		case "author":
// 			return value.join(",");
// 		case "year":
// 			return undefined;
// 		default: return value;  //必须要default
// 	}
// },4);
var jsonFilter2 = JSON.stringify(book,function(key,value){
	switch(key){
		case "author":
			return value.join(",");
		case "year":
			return undefined;
		default: return value;  //必须要default
	}
},"--");
console.log(jsonFilter2);
}