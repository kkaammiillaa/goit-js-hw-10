import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");o.disabled=!0;let a,s=null;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),e[0].getTime()<Date.now()?(m.show({message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:"../img/error.svg",iconColor:"#fff",position:"topRight"}),o.disabled=!0):o.disabled=!1,a=e[0]}};l("#datetime-picker",T);o.addEventListener("click",p);function p(){o.disabled=!0,r.disabled=!0,s=setInterval(()=>{let e;e=a.getTime()-Date.now();const t=b(e);f.innerHTML=n(t.days),h.innerHTML=n(t.hours),y.innerHTML=n(t.minutes),g.innerHTML=n(t.seconds),e<1e3&&(clearInterval(s),r.disabled=!1)},1e3)}function b(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:u}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map