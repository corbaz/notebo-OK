function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function u(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n){t.classList[n?"add":"remove"](e)}class h{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=c(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)a(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(i)}}let x;function b(t){x=t}const w=[],v=[],y=[],_=[],k=Promise.resolve();let j=!1;function T(t){y.push(t)}let M=!1;const S=new Set;function C(){if(!M){M=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),E(e.$$)}for(b(null),w.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];S.has(e)||(S.add(e),e())}y.length=0}while(w.length);for(;_.length;)_.pop()();j=!1,M=!1,S.clear()}}function E(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const A=new Set;function L(t,e){t&&t.i&&(A.delete(t),t.i(e))}function P(t,e,n,s){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push(()=>{A.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function B(t){t&&t.c()}function N(t,n,o){const{fragment:l,on_mount:a,on_destroy:i,after_update:c}=t.$$;l&&l.m(n,o),T(()=>{const n=a.map(e).filter(r);i?i.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(T)}function O(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(w.push(t),j||(j=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,o,l,a,c,d=[-1]){const g=x;b(e);const m=r.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,m,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&z(e,t)),n}):[],f.update(),p=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),r.target){if(r.hydrate){const t=(u=r.target,Array.from(u.childNodes));f.fragment&&f.fragment.l(t),t.forEach(i)}else f.fragment&&f.fragment.c();r.intro&&L(e.$$.fragment),N(e,r.target,r.anchor),C()}var u;b(g)}class R{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let H=[{imagen:"assets/img/10ok.png",title:"Windows 10 Pro",precio:"$ 1000",pixel:"167px"},{imagen:"assets/img/officeok.png",title:"Office 2019 Pro",precio:"$ 600",pixel:"167px"},{imagen:"assets/img/pandaok.png",title:"Antivirus 2020 Pro",precio:"$ 300",pixel:"167px"},{imagen:"assets/img/windowsok.png",title:"Windows 10 full",precio:"Oferta $ 1500",pixel:"167px"}],Y="assets/img/logo-pc.jpeg",F="assets/img/logo-movil.jpeg",K="assets/img/servicios.png",U="assets/img/MercadoPago.png",W="Aceptamos<br/>Efectivo y Tarjetas",q="assets/img/contacto.png",D="mailto:notebook.ar@gmail.com",V="assets/img/gmail.png",X="https://www.instagram.com/notebook.mdp/",G="assets/img/instagram.png",J="https://www.facebook.com/NoteboOK.mdp/",Q="assets/img/facebook.png",Z="tel:+542235444899",tt="223-5-444-899",et="https://api.whatsapp.com/send?phone=542235444899&text=Hola ",nt="assets/img/chat.png",st="CHAT",rt="assets/img/up.png",ot="Subir",lt="assets/img/down.png",at="Bajar",it="assets/img/top.png",ct="Top",dt="assets/img/phone2.png",gt="Llamar",mt="assets/img/sms1.png",ft="SMS",pt="sms:+542235444899";function ut(e){let n,s,r,o,d,g;return{c(){n=c("div"),s=c("img"),o=m(),d=c("img"),p(s,"class","hidden md:flex md:mx-auto"),s.src!==(r=Y)&&p(s,"src",r),p(s,"alt","logo PC"),p(d,"class","flex mx-auto md:hidden"),d.src!==(g=F)&&p(d,"src",g),p(d,"alt","logo movil"),p(n,"id","logo"),p(n,"class","pb-5")},m(t,e){a(t,n,e),l(n,s),l(n,o),l(n,d)},p:t,i:t,o:t,d(t){t&&i(n)}}}class $t extends R{constructor(t){super(),I(this,t,null,ut,o,{})}}function ht(t,e,n){const s=t.slice();return s[0]=e[n],s}function xt(e){let n,s,r,o,d,f,u,$,h,x,b,w,v,y,_=e[0].title+"",k=e[0].precio+"";return{c(){n=c("div"),s=c("img"),u=m(),$=c("div"),h=c("p"),x=g(_),b=m(),w=c("p"),v=g(k),y=m(),p(s,"class","mx-auto"),p(s,"height",r=e[0].pixel),p(s,"width",o=e[0].pixel),s.src!==(d=e[0].imagen)&&p(s,"src",d),p(s,"alt",f=e[0].title),p(h,"class","pt-2"),p(w,"class",""),p($,"class","text-xl text-center font-bold leading-relaxed"),p(n,"class","py-6 border-0 border-amarillo rounded-lg")},m(t,e){a(t,n,e),l(n,s),l(n,u),l(n,$),l($,h),l(h,x),l($,b),l($,w),l(w,v),l(n,y)},p:t,d(t){t&&i(n)}}}function bt(e){let n,s,r,o,d,g=H,f=[];for(let t=0;t<g.length;t+=1)f[t]=xt(ht(e,g,t));return{c(){n=c("section"),s=c("img"),o=m(),d=c("div");for(let t=0;t<f.length;t+=1)f[t].c();p(s,"class","imgServicios svelte-lfsswz"),s.src!==(r=K)&&p(s,"src",r),p(s,"alt","logo servicios"),p(d,"id","Articulo"),p(d,"class","divArticulo svelte-lfsswz"),p(n,"id","Articulos"),p(n,"class","sectionArticulos svelte-lfsswz")},m(t,e){a(t,n,e),l(n,s),l(n,o),l(n,d);for(let t=0;t<f.length;t+=1)f[t].m(d,null)},p(t,[e]){if(0&e){let n;for(g=H,n=0;n<g.length;n+=1){const s=ht(t,g,n);f[n]?f[n].p(s,e):(f[n]=xt(s),f[n].c(),f[n].m(d,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=g.length}},i:t,o:t,d(t){t&&i(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(f,t)}}}class wt extends R{constructor(t){super(),I(this,t,null,bt,o,{})}}function vt(e){let n,s,r,o,d,f,u,$,h,x,b,w,v,y,_,k,j,T,M,S,C,E,A,L,P,B,N,O,z,I,R,H=W+"",Y=tt+"";return{c(){n=c("footer"),s=c("div"),r=c("p"),o=m(),d=c("img"),u=m(),$=c("div"),h=c("img"),b=m(),w=c("div"),v=c("a"),y=c("img"),j=m(),T=c("a"),M=c("img"),E=m(),A=c("a"),L=c("img"),N=m(),O=c("div"),z=c("a"),I=g(Y),p(r,"class","pPagos svelte-dtf8sr"),p(d,"class","imagenPagos svelte-dtf8sr"),d.src!==(f=U)&&p(d,"src",f),p(d,"alt","logo pagos"),p(s,"id","Pagos"),p(s,"class","items-center justify-center grid"),p(h,"class","Contacto svelte-dtf8sr"),h.src!==(x=q)&&p(h,"src",x),p(h,"alt","logo contactos"),p($,"id","Contactos"),p($,"class","flex items-center justify-center"),p(y,"class","pt-3 imagenRedes svelte-dtf8sr"),y.src!==(_=V)&&p(y,"src",_),p(y,"alt","logo gmail"),p(v,"href",k=D),p(v,"target","_blank"),p(M,"class","imagenRedes svelte-dtf8sr"),M.src!==(S=Q)&&p(M,"src",S),p(M,"alt","logo facebook"),p(T,"href",C=J),p(T,"target","_blank"),p(L,"class","imagenRedes svelte-dtf8sr"),L.src!==(P=G)&&p(L,"src",P),p(L,"alt","logo instagram"),p(A,"href",B=X),p(A,"target","_blank"),p(w,"id","Redes"),p(w,"class","flex items-center justify-center"),p(z,"class","Telefono svelte-dtf8sr"),p(z,"href",R=Z),p(z,"target",""),p(O,"id","Telefono"),p(O,"class","flex items-center justify-center"),p(n,"class","")},m(t,e){a(t,n,e),l(n,s),l(s,r),r.innerHTML=H,l(s,o),l(s,d),l(n,u),l(n,$),l($,h),l(n,b),l(n,w),l(w,v),l(v,y),l(w,j),l(w,T),l(T,M),l(w,E),l(w,A),l(A,L),l(n,N),l(n,O),l(O,z),l(z,I)},p:t,i:t,o:t,d(t){t&&i(n)}}}class yt extends R{constructor(t){super(),I(this,t,null,vt,o,{})}}function _t(e){let n,s,r,o,d,m,f=st+"";return{c(){n=c("div"),s=c("a"),r=c("img"),d=g(f),p(r,"id","logo"),p(r,"height","39px"),p(r,"width","38px"),p(r,"class","py-2 mx-auto"),r.src!==(o=nt)&&p(r,"src",o),p(r,"alt","logo chat whatsapp"),p(s,"href",m=et),p(s,"target","_blank"),p(n,"id","Chat"),p(n,"class","z-40 fixed bottom-0 right-0 pb-4 mr-2 text-sm font-bold text-center\r\n\t\ttext-amarillo")},m(t,e){a(t,n,e),l(n,s),l(s,r),l(s,d)},p:t,i:t,o:t,d(t){t&&i(n)}}}class kt extends R{constructor(t){super(),I(this,t,null,_t,o,{})}}function jt(e){let n,s,r,o,d,u,$,h=ct+"";return{c(){n=c("div"),s=g(h),r=m(),o=c("img"),p(o,"id","logo_up"),p(o,"height","39px"),p(o,"width","38px"),p(o,"class","py-2 mx-auto"),o.src!==(d=it)&&p(o,"src",d),p(o,"alt","logo scrolltop"),p(n,"id","ScrollTop"),p(n,"class","fixed bottom-0 right-0 pb-24 mr-2 text-sm font-bold\r\n\t\tcursor-pointer text-center text-amarillo hidden")},m(t,e){a(t,n,e),l(n,s),l(n,r),l(n,o),u||($=f(o,"click",Tt),u=!0)},p:t,i:t,o:t,d(t){t&&i(n),u=!1,$()}}}function Tt(){window.scrollTo({top:0,behavior:"smooth"})}function Mt(t){return window.onscroll=()=>{window.scrollY>99?document.getElementById("ScrollTop").style.display="Block":document.getElementById("ScrollTop").style.display="none"},[]}class St extends R{constructor(t){super(),I(this,t,Mt,jt,o,{})}}function Ct(e){let n,r,o,d,g,u,$,x,b,w,v,y,_,k,j,T,M,S,C,E,A,L,P,B,N,O,z,I,R,H,Y=gt+"",F=ft+"",K=ot+"",U=at+"";return{c(){n=c("div"),r=c("div"),o=c("a"),d=c("img"),u=m(),b=m(),w=c("div"),v=c("a"),y=c("img"),k=m(),M=m(),S=c("div"),C=c("img"),A=m(),P=m(),B=c("div"),N=c("img"),z=m(),p(d,"id","logo_phone"),p(d,"width","24px"),p(d,"height","32px"),p(d,"class","py-1 mx-auto "),d.src!==(g=dt)&&p(d,"src",g),p(d,"alt","Llamar"),$=new h(null),p(o,"href",x=Z),p(r,"id","phone"),p(r,"class",Et),p(y,"id","logo_phone"),p(y,"width","32px"),p(y,"height","32px"),p(y,"class","py-1 mx-auto"),y.src!==(_=mt)&&p(y,"src",_),p(y,"alt","Mensaje SMS"),j=new h(null),p(v,"href",T=pt),p(w,"id","sms"),p(w,"class",Et),p(C,"id","logo_up"),p(C,"width","32px"),p(C,"height","32px"),p(C,"class","py-1 mx-auto"),C.src!==(E=rt)&&p(C,"src",E),p(C,"alt","Mensaje SMS"),L=new h(null),p(S,"id","up"),p(S,"class",Et),p(N,"id","logo_down"),p(N,"width","32px"),p(N,"height","32px"),p(N,"class","py-1 mx-auto"),N.src!==(O=lt)&&p(N,"src",O),p(N,"alt","Mensaje SMS"),I=new h(null),p(B,"id","down"),p(B,"class",Et),p(n,"id","stickers"),p(n,"class","w-10 top-0 right-0 fixed mt-48 px-0 py-0 text-tiny font-bold\r\n\t\ttext-center text-black")},m(t,e){a(t,n,e),l(n,r),l(r,o),l(o,d),l(o,u),$.m(Y,o),l(n,b),l(n,w),l(w,v),l(v,y),l(v,k),j.m(F,v),l(n,M),l(n,S),l(S,C),l(S,A),L.m(K,S),l(n,P),l(n,B),l(B,N),l(B,z),I.m(U,B),R||(H=[f(C,"click",At),f(N,"click",Lt)],R=!0)},p:t,i:t,o:t,d(t){t&&i(n),R=!1,s(H)}}}let Et="w-10 mt-2 bg-amarillo rounded-l-lg cursor-pointer";function At(){let t=window.scrollY;window.scrollTo({top:t-100,left:0,behavior:"smooth"})}function Lt(){let t=window.scrollY;window.scrollTo({top:t+100,left:0,behavior:"smooth"})}class Pt extends R{constructor(t){super(),I(this,t,null,Ct,o,{})}}function Bt(e){let n,r,o,g,u,$,h,x,b,w,v,y,_,k;return{c(){n=c("div"),r=c("div"),o=c("div"),g=d("svg"),u=d("path"),$=m(),h=c("div"),h.innerHTML='<h1 class="text-center text-3xl font-bold text-amarillo texto-borde pb-8">BIENVENIDOS</h1>',x=m(),b=c("div"),b.innerHTML='<img alt="" id="logo" src="/assets/icons/android-chrome-192x192.png" class="rotar mx-auto svelte-1gmtzor"/> \n\t\t\t<p class="text-2xl font-bold text-center text-black p-4">notebo-OK\n\t\t\t</p><br/>',w=m(),v=c("div"),y=c("button"),y.textContent="Cerrar",p(u,"stroke-linecap","round"),p(u,"stroke-linejoin","round"),p(u,"stroke-width","2"),p(u,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),p(g,"class","w-8 h-8"),p(g,"fill","none"),p(g,"stroke","currentColor"),p(g,"viewBox","0 0 24 24"),p(g,"xmlns","http://www.w3.org/2000/svg"),p(o,"id","cerrarX"),p(o,"class","flex justify-end text-lg font-bold text-black\r\n\t\t\t\thover:text-amarillo -mr-8 pb-6 md:-mr-24"),p(o,"alt","CERRAR"),p(h,"id","titulo"),p(h,"class",""),p(b,"id","mensaje"),p(b,"class","flex-block justify-center"),p(y,"class","text-sm font-bold text-center mx-auto mb-2\r\n\t\t\t\t \tbg-black text-amarillo\r\n\t\t\t\t\tborder-black border-2 rounded \r\n\t\t\t\t\thover:bg-white hover:text-black hover:border-black \r\n\t\t\t\t\tcursor-pointer px-5 py-2"),p(v,"id","cerrarBoton"),p(v,"class","items-center  justify-center  grid grid-cols-1"),p(r,"id","Modal"),p(r,"class","mx-auto my-auto px-12 py-4 bg-white rounded-lg border-black\r\n\t\t\tborder-0 md:px-32 md:py-8 bg-modal bg-no-repeat bg-contain bg-top-left"),p(n,"id","FondoModal"),p(n,"class","z-40 fixed top-0 left-0 w-screen h-screen flex items-center\r\n\t\tjustify-center bg-amarillo bg-opacity-25 transition duration-1000\r\n\t\tease-out-in hover:bg-black transform\r\n\t\thover:scale-110")},m(t,e){a(t,n,e),l(n,r),l(r,o),l(o,g),l(g,u),l(r,$),l(r,h),l(r,x),l(r,b),l(r,w),l(r,v),l(v,y),_||(k=[f(g,"click",Nt),f(y,"click",Nt)],_=!0)},p:t,i:t,o:t,d(t){t&&i(n),_=!1,s(k)}}}function Nt(){document.getElementById("FondoModal").style.display="none",document.body.style.overflowY="visible"}class Ot extends R{constructor(t){super(),I(this,t,null,Bt,o,{})}}function zt(e){let n,s,r,o,d,m,f=e[1].toLocaleUpperCase()+"";return{c(){n=c("div"),s=c("strong"),r=g(f),o=g(" "),d=g(e[2]),p(n,"class",m=(e[0]?e[0]:"card-red")+"  svelte-1c62pjm")},m(t,e){a(t,n,e),l(n,s),l(s,r),l(s,o),l(n,d)},p(t,[e]){2&e&&f!==(f=t[1].toLocaleUpperCase()+"")&&u(r,f),4&e&&u(d,t[2]),1&e&&m!==(m=(t[0]?t[0]:"card-red")+"  svelte-1c62pjm")&&p(n,"class",m)},i:t,o:t,d(t){t&&i(n)}}}function It(t,e,n){let{_class:s=""}=e,{topic:r="Info:"}=e,{mensaje:o="{screen}: prefix to any existing background color utility. For example, use md:bg-green-500 to apply the bg-green-500 utility at only medium screen sizes and above."}=e;return t.$$set=t=>{"_class"in t&&n(0,s=t._class),"topic"in t&&n(1,r=t.topic),"mensaje"in t&&n(2,o=t.mensaje)},[s,r,o]}class Rt extends R{constructor(t){super(),I(this,t,It,zt,o,{_class:0,topic:1,mensaje:2})}}function Ht(t){let e,n,s,r,o,d,f,u,h,x,b,w,v,y,_,k,j,T,M,S,C,E,A,z,I,R,H,Y,F,K,U,W,q,D,V,X,G,J,Q,Z,tt,et,nt,st,rt,ot,lt,at;return n=new $t({}),r=new wt({}),d=new yt({}),u=new kt({}),x=new St({}),w=new Pt({}),y=new Ot({}),j=new Rt({}),M=new Rt({props:{_class:"card-border\n\t\t\t bg-blue-900 border-yellow-700 text-amarillo \n\t\t\t text-justify text-tiny w-64 m-auto p-5",topic:"Tema"}}),C=new Rt({props:{_class:"card \n\t\t\tbg-purple-600 border-gray-500 text-white",topic:"TOPIC"}}),A=new Rt({props:{_class:"card-black"}}),I=new Rt({props:{_class:"card-blue"}}),H=new Rt({props:{_class:"card-gray"}}),F=new Rt({props:{_class:"card-green"}}),U=new Rt({props:{_class:"card-indigo"}}),q=new Rt({props:{_class:"card-orange"}}),V=new Rt({props:{_class:"card-pink"}}),G=new Rt({props:{_class:"card-purple"}}),Q=new Rt({props:{_class:"card-red"}}),tt=new Rt({props:{_class:"card-teal"}}),nt=new Rt({props:{_class:"card-transparent"}}),rt=new Rt({props:{_class:"card-white"}}),lt=new Rt({props:{_class:"card-yellow"}}),{c(){e=c("div"),B(n.$$.fragment),s=g(";\n\t"),B(r.$$.fragment),o=m(),B(d.$$.fragment),f=m(),B(u.$$.fragment),h=m(),B(x.$$.fragment),b=m(),B(w.$$.fragment),v=m(),B(y.$$.fragment),_=m(),k=c("div"),B(j.$$.fragment),T=m(),B(M.$$.fragment),S=m(),B(C.$$.fragment),E=m(),B(A.$$.fragment),z=m(),B(I.$$.fragment),R=m(),B(H.$$.fragment),Y=m(),B(F.$$.fragment),K=m(),B(U.$$.fragment),W=m(),B(q.$$.fragment),D=m(),B(V.$$.fragment),X=m(),B(G.$$.fragment),J=m(),B(Q.$$.fragment),Z=m(),B(tt.$$.fragment),et=m(),B(nt.$$.fragment),st=m(),B(rt.$$.fragment),ot=m(),B(lt.$$.fragment),p(k,"class","grid grid-cols-1 gap-16\n\t\tsm:grid-cols-2 \n\t\tlg:grid-cols-3 \n\t\txxl:grid-cols-4 \n\t\tbg-white py-20"),p(e,"id","principal"),$(e,"principalClass",Yt)},m(t,i){a(t,e,i),N(n,e,null),l(e,s),N(r,e,null),l(e,o),N(d,e,null),l(e,f),N(u,e,null),l(e,h),N(x,e,null),l(e,b),N(w,e,null),l(e,v),N(y,e,null),l(e,_),l(e,k),N(j,k,null),l(k,T),N(M,k,null),l(k,S),N(C,k,null),l(k,E),N(A,k,null),l(k,z),N(I,k,null),l(k,R),N(H,k,null),l(k,Y),N(F,k,null),l(k,K),N(U,k,null),l(k,W),N(q,k,null),l(k,D),N(V,k,null),l(k,X),N(G,k,null),l(k,J),N(Q,k,null),l(k,Z),N(tt,k,null),l(k,et),N(nt,k,null),l(k,st),N(rt,k,null),l(k,ot),N(lt,k,null),at=!0},p(t,[n]){0&n&&$(e,"principalClass",Yt)},i(t){at||(L(n.$$.fragment,t),L(r.$$.fragment,t),L(d.$$.fragment,t),L(u.$$.fragment,t),L(x.$$.fragment,t),L(w.$$.fragment,t),L(y.$$.fragment,t),L(j.$$.fragment,t),L(M.$$.fragment,t),L(C.$$.fragment,t),L(A.$$.fragment,t),L(I.$$.fragment,t),L(H.$$.fragment,t),L(F.$$.fragment,t),L(U.$$.fragment,t),L(q.$$.fragment,t),L(V.$$.fragment,t),L(G.$$.fragment,t),L(Q.$$.fragment,t),L(tt.$$.fragment,t),L(nt.$$.fragment,t),L(rt.$$.fragment,t),L(lt.$$.fragment,t),at=!0)},o(t){P(n.$$.fragment,t),P(r.$$.fragment,t),P(d.$$.fragment,t),P(u.$$.fragment,t),P(x.$$.fragment,t),P(w.$$.fragment,t),P(y.$$.fragment,t),P(j.$$.fragment,t),P(M.$$.fragment,t),P(C.$$.fragment,t),P(A.$$.fragment,t),P(I.$$.fragment,t),P(H.$$.fragment,t),P(F.$$.fragment,t),P(U.$$.fragment,t),P(q.$$.fragment,t),P(V.$$.fragment,t),P(G.$$.fragment,t),P(Q.$$.fragment,t),P(tt.$$.fragment,t),P(nt.$$.fragment,t),P(rt.$$.fragment,t),P(lt.$$.fragment,t),at=!1},d(t){t&&i(e),O(n),O(r),O(d),O(u),O(x),O(w),O(y),O(j),O(M),O(C),O(A),O(I),O(H),O(F),O(U),O(q),O(V),O(G),O(Q),O(tt),O(nt),O(rt),O(lt)}}}let Yt="flex flex-col justify-between h-screen mx-auto bg-yellow-500";new class extends R{constructor(t){super(),I(this,t,null,Ht,o,{})}}({target:document.body});
