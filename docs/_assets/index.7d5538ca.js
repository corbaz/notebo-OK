function e(){}function t(e){return e()}function o(){return Object.create(null)}function n(e){e.forEach(t)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function r(e,t,o){e.insertBefore(t,o||null)}function c(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function u(e){return document.createTextNode(e)}function m(){return u(" ")}function p(e,t,o,n){return e.addEventListener(t,o,n),()=>e.removeEventListener(t,o,n)}function g(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function h(e,t,o){e.classList[o?"add":"remove"](t)}class b{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,o=null){this.e||(this.e=l(t.nodeName),this.t=t,this.h(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)r(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(c)}}let x;function v(e){x=e}const y=[],$=[],w=[],k=[],j=Promise.resolve();let B=!1;function _(e){w.push(e)}let C=!1;const E=new Set;function M(){if(!C){C=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];v(t),P(t.$$)}for(v(null),y.length=0;$.length;)$.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];E.has(t)||(E.add(t),t())}w.length=0}while(y.length);for(;k.length;)k.pop()();B=!1,C=!1,E.clear()}}function P(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const T=new Set;let F;function q(e,t){e&&e.i&&(T.delete(e),e.i(t))}function z(e,t,o,n){if(e&&e.o){if(T.has(e))return;T.add(e),F.c.push(()=>{T.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}}function L(e){e&&e.c()}function S(e,o,s){const{fragment:i,on_mount:r,on_destroy:c,after_update:l}=e.$$;i&&i.m(o,s),_(()=>{const o=r.map(t).filter(a);c?c.push(...o):n(o),e.$$.on_mount=[]}),l.forEach(_)}function O(e,t){const o=e.$$;null!==o.fragment&&(n(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function I(e,t){-1===e.$$.dirty[0]&&(y.push(e),B||(B=!0,j.then(M)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function A(t,a,s,i,r,l,d=[-1]){const u=x;v(t);const m=a.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=s?s(t,m,(e,o,...n)=>{const a=n.length?n[0]:o;return p.ctx&&r(p.ctx[e],p.ctx[e]=a)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](a),g&&I(t,e)),o}):[],p.update(),g=!0,n(p.before_update),p.fragment=!!i&&i(p.ctx),a.target){if(a.hydrate){const e=(f=a.target,Array.from(f.childNodes));p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();a.intro&&q(t.$$.fragment),S(t,a.target,a.anchor),M()}var f;v(u)}class W{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let R=[{imagen:"assets/img/10ok.png",title:"Windows 10 Pro",precio:"$ 1000",descripcion:"Los requisitos básicos para instalar Windows 10 son un poco más elevados que los de Windows 7. Las computadoras de 64 bits deben tener un CPU que soporte ciertas instrucciones para que funcione. Los dispositivos con poca capacidad de almacenamiento deben tener una memoria USB o una tarjeta SD con suficiente memoria para guardar los archivos temporales durante las actualizaciones. ​Para los nuevos dispositivos, la actualización de Aniversario de Windows 10 (versión 1607) aumentó los requisitos y además requiere 2 GB de RAM en adelante (ediciones de 32 y 64 bits) para su correcto funcionamiento.",html:"",cardcolor:"card-purple",pixel:"167px"},{imagen:"assets/img/officeok.png",title:"Office 2019 Pro",precio:"$ 600",descripcion:"Las nuevas funciones de Office 2019 ya están presentes en Office 365 Pro Plus. Microsoft WORD 2019 hace que el trabajo sea más fácil. Además del nuevo tema negro, se han añadido herramientas de aprendizaje, una función de texto a voz y mejoras de accesibilidad. Por su parte, la versión de Word 2019 para Mac incluye un modo enfoque y traductor. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft EXCEL 2019 ahora ofrece potentes funciones para el análisis de datos. Se ha incluido nuevos diagramas, gráficos, funciones y conectores, entre los que se encuentra la posibilidad (existente desde la versión de 2016) de insertar mapas en 3D personalizados. De igual forma, ahora cuenta con la opción de publicar Excel en PowerBI y algunas mejoras en PowerPivot y PowerQuery. Para Mac, se han añadido nuevas funciones CONCAT, TEXTJOIN, IFS y SWITCH. Microsoft POWERPOINT 2019 te permite crear presentaciones más impactantes. Cuenta con nuevas funciones ej: transición Morph, así como la posibilidad de insertar iconos SVG y modelos 3D. Para Mac, se ha incluido el soporte para la exportación de videos 4K y para reproducir secuencia in-click. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft OUTLOOK 2019 ha sido diseñado para administrar eficientemente el correo electrónico. Esta versión incluye tarjetas de contacto actualizadas, menciones, enfoque en el buzón, tarjetas de resumen de entregas y grupos de Office 365 (requiere Exchange). La versión 2019 de Outlook para Mac incluye, además de las novedades de la versión para Windows, la función de enviar más tarde o programas la entrega de correos electrónicos, además de plantillas de correo electrónico. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas).",html:"",cardcolor:"card-orange",pixel:"167px"},{imagen:"assets/img/pandaok.png",title:"Antivirus 2020",precio:"$ 300",descripcion:"Panda Security es una empresa española especializada en la creación de soluciones de seguridad informática. Centrada inicialmente en la creación de un programa antivirus, la compañía ha ampliado sus objetivos hacia los servicios de ciberseguridad avanzada con tecnologías para la prevención del cibercrimen. Cuenta con la tecnología patentada TruPrevent, un conjunto de capacidades proactivas encaminadas a bloquear virus desconocidos. También ha desarrollado el modelo de Inteligencia Colectiva, un sistema automático de detección, análisis y clasificación en tiempo real del malware. Ambos son los precursores del nuevo modelo de seguridad de Adaptive Defense1​ de la compañía que asegura la clasificación de todos los procesos activos del sistema. Con herramientas para la protección de equipos, redes, correo electrónico e información confidencial y para la gestión y control de sistemas, los productos de Panda incluyen soluciones de seguridad para empresas y para usuarios domésticos.",html:"",cardcolor:"card-blue",pixel:"167px"},{imagen:"assets/img/windowsok.png",title:"Windows 10 full",precio:"Oferta $ 1500",descripcion:"Realizamos el Backup de su información. Formateamos su Unidad de Disco, para realizar una instalación completa y limpia. Instalamos Windows 10 actualizado y el Antivirus Panda en su última versión.Luego instalamos el paquete de Ofimática: Microsoft Office 2019. Por último, recuperamos su información resguardada anteriormente. Con todo esto logramos una Instalación Full y totalmente limpia.",html:'\t\n\t\t\t\t<div class="text-center">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<strong class="text-xl">Windows 10 Full</strong>\n\t\t\t\t\t<h1 class="text-3xl font-bold">$ 1500</h1>\n\t\t\t\t</div>',cardcolor:"card-amarillo",pixel:"167px"}],N="assets/img/logo-pc.jpeg",H="assets/img/logo-movil.jpeg",D="assets/img/servicios.png",U="assets/img/MercadoPago.png",V="Aceptamos<br/>Efectivo y Tarjetas",Y="assets/img/contacto.png",G="mailto:notebook.ar@gmail.com",K="assets/img/gmail.png",X="https://www.instagram.com/notebook.mdp/",J="assets/img/instagram.png",Q="https://www.facebook.com/NoteboOK.mdp/",Z="assets/img/facebook.png",ee="tel:+542235444899",te="223-5-444-899",oe="https://api.whatsapp.com/send?phone=542235444899&text=Hola ",ne="assets/img/chat.png",ae="CHAT",se="assets/img/up.png",ie="Subir",re="assets/img/down.png",ce="Bajar",le="assets/img/top.png",de="Top",ue="assets/img/phone2.png",me="Llamar",pe="assets/img/sms1.png",ge="SMS",fe="sms:+542235444899";function he(t){let o,n,a,s,d,u;return{c(){o=l("div"),n=l("img"),s=m(),d=l("img"),g(n,"class","hidden md:flex md:mx-auto"),n.src!==(a=N)&&g(n,"src",a),g(n,"alt","logo PC"),g(d,"class","flex mx-auto md:hidden"),d.src!==(u=H)&&g(d,"src",u),g(d,"alt","logo movil"),g(o,"id","logo"),g(o,"class","pb-5")},m(e,t){r(e,o,t),i(o,n),i(o,s),i(o,d)},p:e,i:e,o:e,d(e){e&&c(o)}}}class be extends W{constructor(e){super(),A(this,e,null,he,s,{})}}function xe(e){let t,o;return{c(){t=l("img"),t.src!==(o=e[3])&&g(t,"src",o),g(t,"class","mx-auto py-2"),g(t,"alt","")},m(e,o){r(e,t,o)},p(e,n){8&n&&t.src!==(o=e[3])&&g(t,"src",o)},d(e){e&&c(t)}}}function ve(e){let t,o;return{c(){t=l("img"),t.src!==(o=e[7])&&g(t,"src",o),g(t,"alt","")},m(e,o){r(e,t,o)},p(e,n){128&n&&t.src!==(o=e[7])&&g(t,"src",o)},d(e){e&&c(t)}}}function ye(e){let t,o;return{c(){o=u(""),t=new b(o)},m(n,a){t.m(e[9],n,a),r(n,o,a)},p(e,o){512&o&&t.p(e[9])},d(e){e&&c(o),e&&t.d()}}}function $e(t){let o,n,a,s,d,h,b,x,v,y,$,w,k,j,B,_,C,E,M,P,T,F,q,z,L,S=t[2].toLocaleUpperCase()+"",O=t[6].toLocaleUpperCase()+"",I=t[3]&&xe(t),A=t[7]&&ve(t),W=t[9]&&ye(t);return{c(){o=l("div"),n=l("div"),a=l("div"),I&&I.c(),s=m(),d=l("div"),h=l("strong"),b=u(S),x=u(" "),v=m(),y=l("h1"),$=u(t[4]),j=m(),B=l("div"),A&&A.c(),_=m(),C=l("strong"),E=u(O),M=u(" "),P=u(t[8]),T=m(),W&&W.c(),g(h,"class","text-xl"),g(y,"class","text-3xl font-bold"),g(d,"class","text-center"),g(a,"id",w="front"+t[0]),g(a,"class",k="front "+(t[1]?t[1]:"card-red")+" svelte-dnftbz"),g(B,"id",F="back"+t[0]),g(B,"class",q="back "+(t[5]?t[5]:"card-black")+" svelte-dnftbz"),g(n,"class","Tarjetero svelte-dnftbz"),g(o,"class","Contenedor svelte-dnftbz")},m(e,c){r(e,o,c),i(o,n),i(n,a),I&&I.m(a,null),i(a,s),i(a,d),i(d,h),i(h,b),i(h,x),i(d,v),i(d,y),i(y,$),i(n,j),i(n,B),A&&A.m(B,null),i(B,_),i(B,C),i(C,E),i(C,M),i(B,P),i(B,T),W&&W.m(B,null),z||(L=p(a,"mouseover",t[10]),z=!0)},p(e,[t]){e[3]?I?I.p(e,t):(I=xe(e),I.c(),I.m(a,s)):I&&(I.d(1),I=null),4&t&&S!==(S=e[2].toLocaleUpperCase()+"")&&f(b,S),16&t&&f($,e[4]),1&t&&w!==(w="front"+e[0])&&g(a,"id",w),2&t&&k!==(k="front "+(e[1]?e[1]:"card-red")+" svelte-dnftbz")&&g(a,"class",k),e[7]?A?A.p(e,t):(A=ve(e),A.c(),A.m(B,_)):A&&(A.d(1),A=null),64&t&&O!==(O=e[6].toLocaleUpperCase()+"")&&f(E,O),256&t&&f(P,e[8]),e[9]?W?W.p(e,t):(W=ye(e),W.c(),W.m(B,null)):W&&(W.d(1),W=null),1&t&&F!==(F="back"+e[0])&&g(B,"id",F),32&t&&q!==(q="back "+(e[5]?e[5]:"card-black")+" svelte-dnftbz")&&g(B,"class",q)},i:e,o:e,d(e){e&&c(o),I&&I.d(),A&&A.d(),W&&W.d(),z=!1,L()}}}function we(e,t,o){let{_id:n=""}=t,{_classFront:a=""}=t,{topicFront:s="Info:"}=t,{imgFront:i=""}=t,{mensajeFront:r="{screen}: prefix to any existing background color utility. For example, use md:bg-green-500 to apply the bg-green-500 utility at only medium screen sizes and above."}=t,{_classBack:c=""}=t,{topicBack:l="Info:"}=t,{imgBack:d=""}=t,{mensajeBack:u="Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias. Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias"}=t,{htmlBack:m=""}=t;return e.$$set=e=>{"_id"in e&&o(0,n=e._id),"_classFront"in e&&o(1,a=e._classFront),"topicFront"in e&&o(2,s=e.topicFront),"imgFront"in e&&o(3,i=e.imgFront),"mensajeFront"in e&&o(4,r=e.mensajeFront),"_classBack"in e&&o(5,c=e._classBack),"topicBack"in e&&o(6,l=e.topicBack),"imgBack"in e&&o(7,d=e.imgBack),"mensajeBack"in e&&o(8,u=e.mensajeBack),"htmlBack"in e&&o(9,m=e.htmlBack)},[n,a,s,i,r,c,l,d,u,m,function(){let e=document.getElementById("front"+n).clientHeight,t=document.getElementById("front"+n).clientWidth;document.getElementById("back"+n).style.overflowY="auto",document.getElementById("back"+n).style.height=e+"px",document.getElementById("back"+n).style.width=t+"px"}]}class ke extends W{constructor(e){super(),A(this,e,we,$e,s,{_id:0,_classFront:1,topicFront:2,imgFront:3,mensajeFront:4,_classBack:5,topicBack:6,imgBack:7,mensajeBack:8,htmlBack:9})}}function je(e,t,o){const n=e.slice();return n[0]=t[o],n}function Be(e){let t,o;return t=new ke({props:{_id:"art_"+e[0].title,_classFront:"card-black-amarillo border-2",topicFront:e[0].title,imgFront:e[0].imagen,mensajeFront:e[0].precio,_classBack:e[0].cardcolor+" border-2",topicBack:"Descripcion:",mensajeBack:e[0].descripcion,htmlBack:e[0].html}}),{c(){L(t.$$.fragment)},m(e,n){S(t,e,n),o=!0},p(e,o){const n={};8&o&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){o||(q(t.$$.fragment,e),o=!0)},o(e){z(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}function _e(e){let t,o,a,s,d,u,p=R,f=[];for(let t=0;t<p.length;t+=1)f[t]=Be(je(e,p,t));const h=e=>z(f[e],1,1,()=>{f[e]=null});return{c(){t=l("section"),o=l("img"),s=m(),d=l("div");for(let e=0;e<f.length;e+=1)f[e].c();g(o,"class","imgServicios svelte-15xvs2h"),o.src!==(a=D)&&g(o,"src",a),g(o,"alt","logo servicios"),g(d,"class","grid mx-16 py-8 gap-16 bg-black \r\n\t\t\tgrid-cols-1\r\n\t\t\tsm:grid-cols-2 \r\n\t\t\txxl:grid-cols-4"),g(t,"id","Articulos"),g(t,"class","sectionArticulos svelte-15xvs2h")},m(e,n){r(e,t,n),i(t,o),i(t,s),i(t,d);for(let e=0;e<f.length;e+=1)f[e].m(d,null);u=!0},p(e,[t]){if(0&t){let o;for(p=R,o=0;o<p.length;o+=1){const n=je(e,p,o);f[o]?(f[o].p(n,t),q(f[o],1)):(f[o]=Be(n),f[o].c(),q(f[o],1),f[o].m(d,null))}for(F={r:0,c:[],p:F},o=p.length;o<f.length;o+=1)h(o);F.r||n(F.c),F=F.p}},i(e){if(!u){for(let e=0;e<p.length;e+=1)q(f[e]);u=!0}},o(e){f=f.filter(Boolean);for(let e=0;e<f.length;e+=1)z(f[e]);u=!1},d(e){e&&c(t),function(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}(f,e)}}}class Ce extends W{constructor(e){super(),A(this,e,null,_e,s,{})}}function Ee(t){let o,n,a,s,d,p,f,h,b,x,v,y,$,w,k,j,B,_,C,E,M,P,T,F,q,z,L,S,O,I,A,W,R,N=V+"",H=te+"";return{c(){o=l("footer"),n=l("div"),a=l("p"),s=m(),d=l("img"),f=m(),h=l("div"),b=l("img"),v=m(),y=l("div"),$=l("a"),w=l("img"),B=m(),_=l("a"),C=l("img"),P=m(),T=l("a"),F=l("img"),L=m(),S=l("div"),O=l("a"),I=u(H),W=m(),R=l("p"),R.textContent="© 2020 by JCC Producciones - Version 2.0.0",g(a,"class","pPagos svelte-1uqol3c"),g(d,"class","imagenPagos svelte-1uqol3c"),d.src!==(p=U)&&g(d,"src",p),g(d,"alt","logo pagos"),g(n,"id","Pagos"),g(n,"class","items-center justify-center grid "),g(b,"class","Contacto svelte-1uqol3c"),b.src!==(x=Y)&&g(b,"src",x),g(b,"alt","logo contactos"),g(h,"id","Contactos"),g(h,"class","flex items-center justify-center"),g(w,"class","pt-3 imagenRedes svelte-1uqol3c"),w.src!==(k=K)&&g(w,"src",k),g(w,"alt","logo gmail"),g($,"href",j=G),g($,"target","_blank"),g(C,"class","imagenRedes svelte-1uqol3c"),C.src!==(E=Z)&&g(C,"src",E),g(C,"alt","logo facebook"),g(_,"href",M=Q),g(_,"target","_blank"),g(F,"class","imagenRedes svelte-1uqol3c"),F.src!==(q=J)&&g(F,"src",q),g(F,"alt","logo instagram"),g(T,"href",z=X),g(T,"target","_blank"),g(y,"id","Redes"),g(y,"class","flex items-center justify-center"),g(O,"class","Telefono svelte-1uqol3c"),g(O,"target",""),g(O,"href",A=ee),g(S,"id","Telefono"),g(S,"class","flex items-center justify-center svelte-1uqol3c"),g(R,"class","mb-3 text-center text-amarillo"),g(o,"class","")},m(e,t){r(e,o,t),i(o,n),i(n,a),a.innerHTML=N,i(n,s),i(n,d),i(o,f),i(o,h),i(h,b),i(o,v),i(o,y),i(y,$),i($,w),i(y,B),i(y,_),i(_,C),i(y,P),i(y,T),i(T,F),i(o,L),i(o,S),i(S,O),i(O,I),i(o,W),i(o,R)},p:e,i:e,o:e,d(e){e&&c(o)}}}class Me extends W{constructor(e){super(),A(this,e,null,Ee,s,{})}}function Pe(t){let o,n,a,s,d,m,p=ae+"";return{c(){o=l("div"),n=l("a"),a=l("img"),d=u(p),g(a,"id","logo"),g(a,"height","39px"),g(a,"width","38px"),g(a,"class","py-2 mx-auto"),a.src!==(s=ne)&&g(a,"src",s),g(a,"alt","logo chat whatsapp"),g(n,"href",m=oe),g(n,"target","_blank"),g(o,"id","Chat"),g(o,"class","fixed bottom-0 right-0 pb-4 mr-2 text-sm font-bold text-center\r\n\t\ttext-amarillo svelte-136ju2x")},m(e,t){r(e,o,t),i(o,n),i(n,a),i(n,d)},p:e,i:e,o:e,d(e){e&&c(o)}}}class Te extends W{constructor(e){super(),A(this,e,null,Pe,s,{})}}function Fe(t){let o,n,a,s,d,f,h,b=de+"";return{c(){o=l("div"),n=u(b),a=m(),s=l("img"),g(s,"id","logo_up"),g(s,"height","39px"),g(s,"width","38px"),g(s,"class","py-2 mx-auto"),s.src!==(d=le)&&g(s,"src",d),g(s,"alt","logo scrolltop"),g(o,"id","ScrollTop"),g(o,"class","fixed bottom-0 right-0 pb-24 mr-2 text-sm font-bold\r\n\t\tcursor-pointer text-center text-amarillo hidden svelte-wckxxy")},m(e,t){r(e,o,t),i(o,n),i(o,a),i(o,s),f||(h=p(s,"click",qe),f=!0)},p:e,i:e,o:e,d(e){e&&c(o),f=!1,h()}}}function qe(){window.scrollTo({top:0,behavior:"smooth"})}function ze(e){return window.onscroll=()=>{window.scrollY>99?document.getElementById("ScrollTop").style.display="Block":document.getElementById("ScrollTop").style.display="none"},[]}class Le extends W{constructor(e){super(),A(this,e,ze,Fe,s,{})}}function Se(t){let o,a,s,d,u,f,h,x,v,y,$,w,k,j,B,_,C,E,M,P,T,F,q,z,L,S,O,I,A,W,R=me+"",N=ge+"",H=ie+"",D=ce+"";return{c(){o=l("div"),a=l("div"),s=l("a"),d=l("img"),f=m(),v=m(),y=l("div"),$=l("a"),w=l("img"),j=m(),C=m(),E=l("div"),M=l("img"),T=m(),q=m(),z=l("div"),L=l("img"),O=m(),g(d,"id","logo_phone"),g(d,"width","24px"),g(d,"height","32px"),g(d,"class","py-1 mx-auto "),d.src!==(u=ue)&&g(d,"src",u),g(d,"alt","Llamar"),h=new b(null),g(s,"href",x=ee),g(a,"id","phone"),g(a,"class",Oe),g(w,"id","logo_phone"),g(w,"width","32px"),g(w,"height","32px"),g(w,"class","py-1 mx-auto"),w.src!==(k=pe)&&g(w,"src",k),g(w,"alt","Mensaje SMS"),B=new b(null),g($,"href",_=fe),g(y,"id","sms"),g(y,"class",Oe),g(M,"id","logo_up"),g(M,"width","32px"),g(M,"height","32px"),g(M,"class","py-1 mx-auto"),M.src!==(P=se)&&g(M,"src",P),g(M,"alt","Mensaje SMS"),F=new b(null),g(E,"id","up"),g(E,"class",Oe),g(L,"id","logo_down"),g(L,"width","32px"),g(L,"height","32px"),g(L,"class","py-1 mx-auto"),L.src!==(S=re)&&g(L,"src",S),g(L,"alt","Mensaje SMS"),I=new b(null),g(z,"id","down"),g(z,"class",Oe),g(o,"id","stickers"),g(o,"class","w-10 top-0 right-0 fixed mt-48 px-0 py-0 text-tiny font-bold\r\n\t\ttext-center text-black svelte-1r6a7ic")},m(e,t){r(e,o,t),i(o,a),i(a,s),i(s,d),i(s,f),h.m(R,s),i(o,v),i(o,y),i(y,$),i($,w),i($,j),B.m(N,$),i(o,C),i(o,E),i(E,M),i(E,T),F.m(H,E),i(o,q),i(o,z),i(z,L),i(z,O),I.m(D,z),A||(W=[p(M,"click",Ie),p(L,"click",Ae)],A=!0)},p:e,i:e,o:e,d(e){e&&c(o),A=!1,n(W)}}}let Oe="w-10 mt-2 bg-amarillo rounded-l-lg cursor-pointer";function Ie(){let e=window.scrollY;window.scrollTo({top:e-100,left:0,behavior:"smooth"})}function Ae(){let e=window.scrollY;window.scrollTo({top:e+100,left:0,behavior:"smooth"})}class We extends W{constructor(e){super(),A(this,e,null,Se,s,{})}}function Re(t){let o,a,s,u,f,h,b,x,v,y,$,w,k,j;return{c(){o=l("div"),a=l("div"),s=l("div"),u=d("svg"),f=d("path"),h=m(),b=l("div"),b.innerHTML='<h1 class="text-center text-3xl font-bold text-amarillo texto-borde pb-8">BIENVENIDOS</h1>',x=m(),v=l("div"),v.innerHTML='<img alt="" id="logo" src="/assets/icons/android-chrome-192x192.png" class="rotar mx-auto svelte-11xn362"/> \n\t\t\t<p class="text-2xl font-bold text-center text-black p-4">notebo-OK\n\t\t\t</p><br/>',y=m(),$=l("div"),w=l("button"),w.textContent="Cerrar",g(f,"stroke-linecap","round"),g(f,"stroke-linejoin","round"),g(f,"stroke-width","2"),g(f,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),g(u,"class","w-8 h-8"),g(u,"fill","none"),g(u,"stroke","currentColor"),g(u,"viewBox","0 0 24 24"),g(u,"xmlns","http://www.w3.org/2000/svg"),g(s,"id","cerrarX"),g(s,"class","flex justify-end text-lg font-bold text-black\r\n\t\t\t\thover:text-amarillo -mr-8 pb-6 md:-mr-24"),g(s,"alt","CERRAR"),g(b,"id","titulo"),g(b,"class",""),g(v,"id","mensaje"),g(v,"class","flex-block justify-center"),g(w,"class","text-sm font-bold text-center mx-auto mb-2\r\n\t\t\t\t \tbg-black text-amarillo\r\n\t\t\t\t\tborder-black border-2 rounded \r\n\t\t\t\t\thover:bg-white hover:text-black hover:border-black \r\n\t\t\t\t\tcursor-pointer px-5 py-2"),g($,"id","cerrarBoton"),g($,"class","items-center  justify-center  grid grid-cols-1"),g(a,"id","Modal"),g(a,"class","mx-auto my-auto px-12 py-4 bg-white rounded-lg border-black\tborder-0 bg-modal bg-no-repeat bg-contain bg-top-left\r\n\t\tmd:px-32 md:py-8 "),g(o,"id","FondoModal"),g(o,"class","z-40 fixed top-0 left-0 w-screen h-screen flex items-center\r\n\t\tjustify-center bg-amarillo bg-opacity-25 transition duration-1000\r\n\t\tease-out-in hover:bg-black transform\r\n\t\thover:scale-110 svelte-11xn362")},m(e,t){r(e,o,t),i(o,a),i(a,s),i(s,u),i(u,f),i(a,h),i(a,b),i(a,x),i(a,v),i(a,y),i(a,$),i($,w),k||(j=[p(u,"click",Ne),p(w,"click",Ne)],k=!0)},p:e,i:e,o:e,d(e){e&&c(o),k=!1,n(j)}}}function Ne(){document.getElementById("FondoModal").style.display="none",document.body.style.overflowY="visible"}class He extends W{constructor(e){super(),A(this,e,null,Re,s,{})}}function De(e){let t,o,n,a,s,d,u,p,f,b,x,v,y,$,w;return o=new He({}),a=new be({}),d=new Ce({}),p=new Me({}),b=new Te({}),v=new Le({}),$=new We({}),{c(){t=l("div"),L(o.$$.fragment),n=m(),L(a.$$.fragment),s=m(),L(d.$$.fragment),u=m(),L(p.$$.fragment),f=m(),L(b.$$.fragment),x=m(),L(v.$$.fragment),y=m(),L($.$$.fragment),g(t,"id","principal"),h(t,"principalClass",Ue)},m(e,c){r(e,t,c),S(o,t,null),i(t,n),S(a,t,null),i(t,s),S(d,t,null),i(t,u),S(p,t,null),i(t,f),S(b,t,null),i(t,x),S(v,t,null),i(t,y),S($,t,null),w=!0},p(e,[o]){0&o&&h(t,"principalClass",Ue)},i(e){w||(q(o.$$.fragment,e),q(a.$$.fragment,e),q(d.$$.fragment,e),q(p.$$.fragment,e),q(b.$$.fragment,e),q(v.$$.fragment,e),q($.$$.fragment,e),w=!0)},o(e){z(o.$$.fragment,e),z(a.$$.fragment,e),z(d.$$.fragment,e),z(p.$$.fragment,e),z(b.$$.fragment,e),z(v.$$.fragment,e),z($.$$.fragment,e),w=!1},d(e){e&&c(t),O(o),O(a),O(d),O(p),O(b),O(v),O($)}}}let Ue="flex flex-col justify-between h-screen mx-auto bg-yellow-500";new class extends W{constructor(e){super(),A(this,e,null,De,s,{})}}({target:document.body});
