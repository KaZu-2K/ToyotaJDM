function carouselFor(el){return bootstrap.Carousel.getInstance(el)||new bootstrap.Carousel(el);}
document.querySelectorAll('.carousel').forEach(el=>{
  el.addEventListener('focusin',()=>carouselFor(el).pause());
  el.addEventListener('focusout',e=>{if(!el.contains(e.relatedTarget))carouselFor(el).cycle();});
});
const back=document.querySelector('.back-to-top');
if(back){back.setAttribute('aria-label','Back to top');back.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});window.addEventListener('scroll',()=>{back.style.display=window.scrollY>300?'inline-flex':'none';},{passive:true});back.style.display='none';}
const request=document.querySelector('#requestForm');
if(request){request.addEventListener('submit',e=>{e.preventDefault();if(!request.reportValidity())return;const data=new FormData(request);const subject='ToyotaJDM message from '+data.get('name');const body=['Name: '+data.get('name'),'Email: '+data.get('email'),'Interest: '+data.get('interest'),'Date: '+data.get('date'),'Message: '+data.get('message')].join('\n');location.href='mailto:titandj0823@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);document.querySelector('#request-status').textContent='Your email application should open with a draft. Please send it from there.';});}
