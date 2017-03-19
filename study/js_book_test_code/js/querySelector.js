window.onload=function(){
// querySelector();
// querySelectorAll();
// element_get();
// class_func();
// data_src();
// inertHtml();
// topology();
 dom_2_3();
// dom2AndDom3();
Css();
}
//类查询器
function querySelector(){
	var myDiv = document.querySelector("#myDiv");
	console.log(myDiv.nodeName);
}
function querySelectorAll(){
	var myDiv = document.querySelectorAll("div  p");
	console.log(myDiv[0].className);
}
 function element_get(){
 	var ul = document.getElementsByTagName('ul');
 	console.log(ul[0].childNodes.length)
 	console.log(ul[0].firstChild);
 	console.log(ul[0].firstElementChild.firstChild.nodeValue);
 }
 //class操作
 function class_func(){
 	var classList = document.getElementsByClassName('mydiv');
 	console.log(classList[0].title);
 	var pos = -1;
 	var classListArr = classList[0].className.split(/\s+/);
 	for (var i = 0; i < classListArr.length; i++) {
 		if(classListArr[i] == 'user'){
 			pos = i;
 			break;
 		}
 	}
 	classListArr.splice(pos,1);
 	classList[0].className = classListArr.join(" ");
 	console.log(classListArr.join(''));
 	var cls = classList[0];
 	cls.classList.add("disabled");
 	cls.classList.remove("user");
 	cls.classList.toggle("user");
 	console.log(cls.classList.contains("user"));
 }
 //自定义data属性
 function data_src(){
 	var data_div = document.getElementById('myDiv');
 	if(!data_div.dataset.myName){
 		data_div.dataset.myName="myName";
 	}
 	console.log(data_div.dataset.myName);
 }
 //插入标记innerHTML、outerHTML、insetAdjacentHTML
 function inertHtml(){
	var div2 = document.getElementById('myDiv2');
	div2.innerHTML = "<p>Hello & welcome,<b>\"reader\"!</b></p>";
 	// var text = "<a href=\"#\" onclick=\"alert('hi')\">Click me</a>";
 	// var sanitized = window.toStaticHTML(text);
 	// console.log(sanitized);ie8
 	//div2.outerHTML = "<p>Hello & welcome,<b>\"outHTML\"!</b></p>";
 	/*
	beforebegin,当前元素之前插入一个紧邻的同辈元素
	afterbegin,在当前元素之下插入一个新元素或在第一个子元素之前再插入一个子元素
	beforeend,在当前元素之下插入一个新元素或在最后一个子元素之后再插入一个子元素
	afterend,当前元素之后插入一个紧邻的同辈元素
 	*/
 	// div2.insertAdjacentHTML("beforebegin","Hello & welcome,<b>\"beforebegin\"!</b>")
 	// div2.insertAdjacentHTML("beforeend","Hello & welcome,<b>\"beforeend\"!</b>")
 	// div2.insertAdjacentHTML("afterbegin","Hello & welcome,<b>\"afterbegin\"!</b>")
 	// div2.insertAdjacentHTML("afterend","Hello & welcome,<b>\"afterend\"!</b>")
 }
 /*children不包含空白节点、contains、插入文本、滚动*/
 function topology(){
     var ul = document.getElementsByTagName('ul')[0];
     console.log(ul.children.length);
     console.log(ul.children[0].childNodes[0].nodeValue);
     console.log(ul.contains(ul.children[0])+"\t"+ul.children[0].compareDocumentPosition(ul.children[1]))
     console.log(ul.innerText);
 }
 //insertRule、deleteRule
 function dom_2_3(){
 	var div2 = document.getElementById('myDiv2');
 	console.log(div2.style.cssText)
 	for (var i = 0; i < div2.style.length; i++) {
 		console.log(div2.style[i]);
 		console.log(div2.style.getPropertyValue(div2.style[i])) 	
 	};
 	div2.style.removeProperty("color");
 	div2.style.setProperty("color","blue","");
 	var computedStyle = document.defaultView.getComputedStyle(div2,null);
 	console.log(computedStyle.color);
 	//ie:console.log(div2.currentStyle.color);
 	//div2.style.cssText = "";
 	//console.log(div2.classList[0].className);
 	// var link = document.getElementsByTagName('link')[0];
 	// var sheet = link.styleSheet;
 	// console.log(sheet)
 	// var rules = sheet.cssRules||sheet.rules;
 	// var rule = rules[0];
 	// console.log(rule.style.cssText);
 	console.log(div2.scrollTop+"\t"+div2.scrollWidth);
 	if(div2.scrollWidth != 0){
 		div2.scrollWidth = 0;
 	}
 	console.log(div2.scrollTop+"\t"+div2.scrollWidth);
 }
 function dom2AndDom3(){
 	/*document类型的变化*/
 	/*创建一个属于命名空间http://www.w3.org/2000/svg的新元素svg*/
 	var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
 	/*createAttributeNS(namespaceURL,attributeName),getElementByTagNameNS(namespaceURL,tagName)*/
 	/*Element类型的变化*/
 	/*
 	getElementsByTagNameNS(url,tagName)......除第一个参数外，所有方法与Dom1级中的方法相同，第一个参数始终是命名空间URL。
  	getAttributeNS(),getAttributeNodeNS,hasAttributeNS(),removeAttributeNS(),setAttributeNS(),setAttributeNodeNS()
  	*/
  	/*NamedNodeMap类型的变化*/
  	/*
  	getNamedItemNS(URL,localName)、removeNamedItemNS(URL,localName)、setNamedItemNS(node)
  	*/
  	var node = document.getElementById('myDiv2');
  	var newnode = document.importNode(node,true);
  	document.body.appendChild(newnode);
  	// var div = document.createElement("div");
  	// document.body.setUserData("name","xiaoshuang",function(){});
  	// console.log(document.body.getUserData());
 }
 function Css(){
 	var div2 = document.getElementById('myDiv2');
 	console.log(div2.style.backgroundColor);
  //createNodeIterator参数:遍历起点、要显示的节点类型、过滤器、是否扩展实体引用的bool值,对象方法:nextNode(),previousNode()
  //createTreeWalker参数相同,对象方法还有：firstChild()，lastChild(),parentNode(),nextSibling(),previousSbiling()
  //var iterator = document.createNodeIterator(div2,NodeFilter.SHOW_ELEMENT,null,false);
 	var iterator = document.createTreeWalker(div2,NodeFilter.SHOW_ELEMENT,null,false);
  var node = iterator.nextNode();
  while(node != null){
    console.log(node.tagName);
    node = iterator.nextNode();
  }
  //添加过滤器
  var filter = function(node){
    return node.tagName.toLowerCase()=='li'?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
  }
  var iterator2 = document.createNodeIterator(div2,NodeFilter.SHOW_ELEMENT,filter,false);
 }