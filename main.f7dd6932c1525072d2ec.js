(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO"),e("mcqT");var r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],i={intervalId:null,isActive:!1,randomIntegerFromInterval:function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},start:function(){var t=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){refs.body.style.backgroundColor=r[t.randomIntegerFromInterval(0,r.length-1)]}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1}};refs.startBtn.addEventListener("click",i.start.bind(i)),refs.stopBtn.addEventListener("click",i.stop.bind(i))},mcqT:function(t,n){refs={body:document.querySelector("body"),startBtn:document.querySelector('[data-action = "start"]'),stopBtn:document.querySelector('[data-action = "stop"]')}}},[["QfWi",1]]]);
//# sourceMappingURL=main.f7dd6932c1525072d2ec.js.map