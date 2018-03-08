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