import{a as w,i as p,S as h}from"./assets/vendor-55779efa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="42496728-577636fc2b585ecd9d4373a90",$="https://pixabay.com/api/";async function b(s,t){const r=`${$}?key=${S}&q=${s}&per_page=15&page=${t}`;return(await w.get(r)).data}function v(s,t){if(s.length===0){p.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}const r=s.map(({webformatURL:n,largeImageURL:e,tags:o,likes:a,views:d,comments:L,downloads:q})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${e}">
                        <img class="gallery-image" src="${n}" alt="${o}" />
                    </a>
                    <div class="parameters">
                        <div class="params">
                            <p class="options">Likes</p>
                            <p class="quantity">${a}</p>
                        </div>
                        <div class="params">
                            <p class="options">Views</p>
                            <p class="quantity">${d}</p>
                        </div>
                        <div class="params">
                            <p class="options">Comments</p>
                            <p class="quantity">${L}</p>
                        </div>
                        <div class="params">
                            <p class="options">Downloads</p>
                            <p class="quantity">${q}</p>
                        </div>
                    </div>
                </li>`).join("");t.insertAdjacentHTML("beforeend",r)}function P(s,t){s.innerHTML="",t&&t.refresh()}const y=document.querySelector(".input"),u=document.querySelector(".gallery"),D=document.querySelector(".form"),f=document.querySelector(".loader"),i=document.querySelector(".button-load"),g=document.querySelector(".loader-down");let l,c,m;function E(s){s.preventDefault(),f.style.display="block",m=y.value,c=1,P(u,l),b(m,c).then(t=>{const r=t.hits;v(r,u),f.style.display="none",y.value="",i.style.display="block",l=new h(".gallery a",{background:"rgba(46, 47, 66, 0.8)",captionDelay:250,captionsData:"alt"}),l.on("error.simplelightbox",function(n){console.log(n)})}).catch(()=>{p.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})})}function _(s){s.preventDefault(),c+=1,i.style.display="none",g.style.display="block",b(m,c).then(t=>{const r=t.hits;if(t.totalHits/15<c){i.style.display="none",g.style.display="none",p.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}v(r,u),i.style.display="block",g.style.display="none";const a=u.lastElementChild.getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),l=new h(".gallery a",{background:"rgba(46, 47, 66, 0.8)",captionDelay:250,captionsData:"alt"}),l.on("error.simplelightbox",function(d){console.log(d)})}).catch(()=>{p.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})})}D.addEventListener("submit",E);i.addEventListener("click",_);
//# sourceMappingURL=commonHelpers.js.map
