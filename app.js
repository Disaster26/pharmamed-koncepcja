(function(){
var hd=document.getElementById('hd'),b=document.querySelector('.burger'),m=document.getElementById('mnav');
addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>10)},{passive:true});
function close(){m.classList.remove('open');document.body.classList.remove('mo');b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(){var o=!m.classList.contains('open');m.classList.toggle('open',o);document.body.classList.toggle('mo',o);b.setAttribute('aria-expanded',o)});
m.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',close)});
var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
function sel(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(t)});t.addEventListener('keydown',function(e){var k=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(k){var n=tabs[(i+k+tabs.length)%tabs.length];sel(n);n.focus()}})});
var links=[].slice.call(document.querySelectorAll('.nav a')),secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(function(s){s&&io.observe(s)})}
var f=document.getElementById('form');f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('note').textContent='This is a preview - the form will send messages on the final website.'});
var mp=document.getElementById('map');mp.querySelector('button').addEventListener('click',function(){mp.innerHTML='<iframe title="PHARMAMED office on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Oki%C5%84skiego%206%2C%2002-115%20Warszawa&output=embed"></iframe>'});
})();
