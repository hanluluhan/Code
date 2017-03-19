window.onload=function(){
	node_func();
	document_func();
	element_func();
}
function node_func(){
	var ulList = document.getElementsByTagName('ul');
	var ulListNode = ulList[0];
	//类数组nodeList转化为数组
	var arrayNode = Array.prototype.slice.call(ulList[0].childNodes,0);

	var list = document.querySelectorAll('li');
	for (var i = 0; i < ulList[0].childNodes.length; i++) {
		if(ulList[0].childNodes[i].nodeType == 1)
		console.log(ulList[0].childNodes[i])
	};


	//appendChild、insertBefore、replaceChild、removeChild
	var li = document.createElement('li');
	var strong = document.createElement('strong');
	var text = document.createTextNode(list[0].nodeValue);
	strong.appendChild(text);
	li.appendChild(strong);
	//ulList[0].appendChild(li);
	ulList[0].insertBefore(li,ulList[0].firstChild);
	var divNode = document.createElement('div');
	var divTextNode = document.createTextNode('go');
	divNode.appendChild(divTextNode);
	console.log(ulList[0].firstChild);
	ulList[0].replaceChild(divNode,ulList[0].lastChild);
	ulListNode.removeChild(ulListNode.lastChild);

	//cloneNode
	var deepList = ulListNode.cloneNode(true);
	var shallowList = ulListNode.cloneNode(false);
	console.log(deepList.childNodes.length+"\t"+shallowList.childNodes.length);
	//Dom节点不能同时出现在多个位置
	var list = document.querySelectorAll('li');
	var node = list[0].parentNode.appendChild(ulList[0].firstChild);
	 console.log(node == ulList[0].firstChild);
	 console.log(node == ulList[0].lastChild);
	// var strong = document.createElement('strong');
	// strong.nodeValue=list[0];
	// console.log(strong.nodeValue);
	// //ulList.replaceChild(ulList[0],strong);
	// console.log(list[0].value)	
	//list[0].nodeValue=3;//.appendChild(strong);
}
function document_func(){
	/*
	nodeType = 9
	nodeName = #document
	nodeValue = null
	parentNode = null
	ownerDocument = null
	*/
	var html = document.documentElement;
	document.title="DOM Operator";
	var url = document.URL; //取得本页面URL
	var domain = document.domain;//域名，可以设置，修改域名实现不同子域之间通信。
	var referrer = document.referrer;//取得来源页面URL
	console.log(html.lang+'\t'+url+'\t'+domain+'t'+referrer);
    var li = document.getElementsByTagName('li');
    console.log(li.namedItem('one_li')+"\t"+li['one_li'].innerHTML);
    //document.write("<strong>"+(new Date()).toString()+"</strong>")
}
function element_func(){
	/*
	nodeType = 1
	nodeName = 元素标签名
	nodeValue = null
	parentNode = Document or Element
	ownerDocument = Element、Text、Comment。。。。
	*/
	/*
	HTML元素共有属性：
	id、title、lang、dir、className
	*/
	var div = document.getElementById('myDiv');
	var hl = document.getElementById('hl');
	console.log(div.title);
	console.log(div.tagName == div.nodeName);
	console.log(hl.getAttribute('data-han'))
	hl.removeAttribute('class');
	h1.setAttribute("class","goto");
	console.log(hl.getAttribute('lang'));
}