import{a as w,S as L,i}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const $="27098519-4ca44ecc916e4addacc368c49",q="https://pixabay.com/api/";async function f(r,t=1,a=15){const s=`${q}?key=${$}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;try{return(await w.get(s)).data}catch{throw new Error("Failed to fetch images.")}}function m(r){return r.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:o,comments:n,downloads:v})=>`
      <a href="${a}" class="gallery-item">
          <img src="${t}" alt="${s}" loading="lazy" />
          <div class="info">
            <div class="likes">
              <b>Likes</b>
              <p>${e}</p>
            </div>
            <div class="views">
              <b>Views</b>
              <p>${o}</p>
            </div>
            <div class="comments">
              <b>Comments</b>
              <p>${n}</p>
            </div>
            <div class="downloads">
              <b>Downloads</b>
              <p>${v}</p>
            </div>
          </div>
      </a>
  `).join("")}function S(r){r.innerHTML=""}const E=document.querySelector("#search-form"),y=document.querySelector(".gallery"),d=document.querySelector(".load-more"),p=document.querySelector(".loader");let l="",c=1;const u=15,g=new L(".gallery a");function h(){p.style.display="block"}function b(){p.style.display="none"}E.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.target.elements.searchQuery.value.trim(),!l){i.error({message:"Search query cannot be empty!"});return}c=1,d.style.display="none",S(y),h();try{const t=await f(l,c,u);if(t.hits.length===0){i.warning({message:"No images found. Try another query."});return}y.innerHTML=m(t.hits),g.refresh(),t.totalHits>u&&(d.style.display="block")}catch(t){i.error({message:t.message})}finally{b()}});d.addEventListener("click",async()=>{c+=1,h();try{const r=await f(l,c,u);y.insertAdjacentHTML("beforeend",m(r.hits)),g.refresh();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),c*u>=r.totalHits&&(i.info({message:"We're sorry, but you've reached the end of search results."}),d.style.display="none")}catch(r){i.error({message:r.message})}finally{b()}});
//# sourceMappingURL=index.js.map
