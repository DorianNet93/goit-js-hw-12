import{a as v,S as w,i as a}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const L="27098519-4ca44ecc916e4addacc368c49",$="https://pixabay.com/api/";async function y(e,r=1,c=15){const n=`${$}?key=${L}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${c}`;try{return(await v.get(n)).data}catch{throw new Error("Failed to fetch images.")}}function m(e){return e.map(({webformatURL:r,largeImageURL:c,tags:n,likes:t,views:o,comments:l,downloads:b})=>`
      <a href="${c}" class="gallery-item">
          <img src="${r}" alt="${n}" loading="lazy" />
          <div class="info">
            <div class="likes">
              <b>Likes</b>
              <p>${t}</p>
            </div>
            <div class="views">
              <b>Views</b>
              <p>${o}</p>
            </div>
            <div class="comments">
              <b>Comments</b>
              <p>${l}</p>
            </div>
            <div class="downloads">
              <b>Downloads</b>
              <p>${b}</p>
            </div>
          </div>
      </a>
  `).join("")}function q(e){e.innerHTML=""}const S=document.querySelector("#search-form"),u=document.querySelector(".gallery"),i=document.querySelector(".load-more");let d="",s=1;const f=new w(".gallery a"),h=document.querySelector(".loader");function g(){h.style.display="block"}function p(){h.style.display="none"}S.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements.searchQuery.value.trim(),!d){a.error({message:"Search query cannot be empty!"});return}s=1,i.style.display="none",q(u),g();try{const r=await y(d,s);if(r.hits.length===0){a.warning({message:"No images found. Try another query."});return}u.innerHTML=m(r.hits),f.refresh(),i.style.display="block"}catch(r){a.error({message:r.message})}finally{p()}});i.addEventListener("click",async()=>{s+=1,g();try{const e=await y(d,s);u.insertAdjacentHTML("beforeend",m(e.hits)),f.refresh();const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),s*30>=e.totalHits&&(a.info({message:"We're sorry, but you've reached the end of search results."}),i.style.display="none")}catch(e){a.error({message:e.message})}finally{p()}});i.addEventListener("click",async()=>{s+=1;try{const e=await y(d,s);u.insertAdjacentHTML("beforeend",m(e.hits)),f.refresh();const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),s*15>=e.totalHits&&(a.info({message:"We're sorry, but you've reached the end of search results."}),i.style.display="none")}catch(e){a.error({message:e.message})}});
//# sourceMappingURL=index.js.map
