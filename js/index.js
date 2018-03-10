//banner部分
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	const l=imgs.length;
	console.dir(banner);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000)
		function move(){
			n++;
			// n=n%5;
			if(n===imgs.length){
				n=0;
			}
			if(n<0){
				n=imgs.length-1;
			}
			for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");

		}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;	
			move();
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
//小米明星单品
{
	function shangou(a){
		const prev=a.querySelector(".buy_prev");
		const next=a.querySelector(".buy_next");
		const inner=a.querySelector(".star_inner");
		let k=0;
		next.onclick=function(){
			k++;
			prev.classList.remove("disable");
			if(k===2){
				this.classList.add("disable");
			}
			if(k===3){
				k=2;
				return;
			}		
			inner.style.marginLeft=-1240*k+"px";
		}
		prev.onclick=function(){
			k--;
			next.classList.remove("disable");
			if(k===0){
				this.classList.add("disable");
			}
			if(k===-1){
				k=0;
				return;
			}
			inner.style.marginLeft=-1240*k+"px";
		}
	}
	const shangoulist=document.querySelectorAll(".star");
	shangoulist.forEach(function(ele){
		shangou(ele);
	})
}
//配件
{
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".daipei_right");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const contentList=document.querySelectorAll(".taipei,.peijian,.zhoubian");
	contentList.forEach(function(ele){
		content(ele);
	})
}
//内容部分
{
	function wheel(parent){
		let prev=parent.querySelector(".neirong_lbtn");
		let next=parent.querySelector(".neirong_rbtn");
		let inner=parent.querySelector(".neirong_inner");
		let contents=parent.querySelectorAll(".neirong_content");
		let pagers=parent.querySelectorAll(".pager");
		console.dir(pagers)
		let n=0;
		next.onclick=function(){
			n++;
	
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
			
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
	
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				inner.style.left=n*-296+"px";
			}
			
		})}
		let items=document.querySelectorAll(".neirong_item");
		items.forEach(function(ele){
			wheel(ele);
		})
}
//banner侧导航
{
		let labels=document.querySelectorAll(".label");
		let menus=document.querySelectorAll(".menu");
		let obj=menus[0];
		labels.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				menus[index].style.display="block";
				obj=menus[index];
			}
			ele.onmouseleave=function(){
				menus[index].style.display="none";
			}
		})
	}
//头部导航
{
	// let box=document.querySelector(".nav");
	let top=document.querySelector(".nav_wenzi");
	let bottom=document.querySelector(".nav_bottom");
	let wenzis=document.querySelectorAll(".navwenzi");
	let navitems=document.querySelectorAll(".nav_bottom_item");
	console.dir(navitems)
	top.onmouseenter=function(){
		bottom.style.height="230px";
		wenzis.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<wenzis.length;i++){
					wenzis[i].classList.remove("active");
					navitems[i].classList.remove("active");
				}
					// this.classList.add("active");
					navitems[index].classList.add("active");
				}
	
		})

	}
	
	top.onmouseleave=function(){
		
		bottom.style.height="0";
	}
}