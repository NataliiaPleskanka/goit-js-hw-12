import{a as f,i as p,S as b}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYUExURfn5+/v7+0dwTPn5+vr6/Pr6+vn5+/r6+5DMgkgAAAAHdFJOU4B/AKCfMK8FDdH8AAAAm0lEQVQYGQXBIZLCQBQFwFcx42PGJg1cAIPHrMdwhNg/BWSuv91Bn3POgbCfSXKshH6HyyD2D/BYRb8DlyH7B+Cxpt/d4OUycvJe2X8cKbZBX2gptHUvtBS20Re0FLSCloI+oKWwV1vRUujLNtBS7EVbaTl5L2w/jrSnG7xcK9sX4G+J9gSuJbYv8LcI7QnXImxnkhwLQZtzzsI/lNsx8TAhCU0AAAAASUVORK5CYII=";async function w(t,o,i,r){const e=new URLSearchParams({key:`${t}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${r}`,page:`${i}`});return(await f.get(`https://pixabay.com/api/?${e}`)).data}function S(t){return t.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:s,comments:l,downloads:y})=>`<li class="item">
          <a href="${i}"><img class="image" src="${o}" alt="${r}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${e}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${s}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${l}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${y}</p>
            </li>
          </ul>
        </li>`).join("")}const v="45158363-d126d9ec5bd50365e414d8df4",A=document.querySelector(".form"),u=document.querySelector(".list"),a=document.querySelector(".loadMoreBtn"),n=document.querySelector(".loader"),m=15;let c=1,d="";A.addEventListener("submit",B);a.addEventListener("click",C);function B(t){a.style.display="none",u.innerHTML="",d=t.target.elements.input.value.trim(),t.preventDefault(),d!=0&&(n.style.display="block",c=1,g())}function C(){n.style.display="block",c+=1,g()}function g(){w(v,d,c,m).then(t=>{const o=t.hits;o.length!==0?(u.insertAdjacentHTML("beforeend",S(o)),t.totalHits>m*c?a.style.display="block":(a.style.display="none",p.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."})),new b(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):(n.style.display="none",p.show({class:"toast",position:"topRight",icon:"icon",iconUrl:h,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"}))}).catch(t=>{p.show({class:"toast",position:"topRight",icon:"icon",iconUrl:h,iconColor:"white",messageColor:"white",title:"Error",titleColor:"white",message:"Please try again!"}),t.response?console.error("Server error:",t.response.status):t.request?console.error("No response from server"):console.error("Unknown error:",t.message)}).finally(()=>{const t=u.lastChild.getBoundingClientRect();scrollBy({top:t.top+t.height*2,behavior:"smooth"}),n.style.display="none"}),A.reset()}
//# sourceMappingURL=commonHelpers.js.map
