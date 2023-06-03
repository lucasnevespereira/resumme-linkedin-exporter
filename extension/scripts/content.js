console.log("Hello from DOM Content");const t="JSESSIONID";function i(o){const n=document.cookie.split("; ");for(const c of n){const[e,s]=c.split("=");if(e===o)return decodeURIComponent(s)}return null}chrome.runtime.onMessage.addListener(async(o,n,c)=>{if(o.action==="EXPORT"){const e=i(t);console.log("Session ID",e)}});
//# sourceMappingURL=content.js.map
