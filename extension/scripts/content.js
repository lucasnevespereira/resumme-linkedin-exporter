const c="JSESSIONID",i=()=>r(c),r=o=>{const n=document.cookie.split("; ");for(const s of n){const[e,t]=s.split("=");if(e===o)return decodeURIComponent(t)}return null};console.log("Hello from DOM Content");chrome.runtime.onMessage.addListener(async(o,n,s)=>{if(o.action==="EXPORT"){const e=i();console.log("Current session ID",e)}});
//# sourceMappingURL=content.js.map
