function e(){}function t(e){return e()}function o(){return Object.create(null)}function n(e){e.forEach(t)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function r(e,t,o){e.insertBefore(t,o||null)}function c(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function u(e){return document.createTextNode(e)}function m(){return u(" ")}function p(){return u("")}function g(e,t,o,n){return e.addEventListener(t,o,n),()=>e.removeEventListener(t,o,n)}function f(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t,o){e.classList[o?"add":"remove"](t)}class b{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,o=null){this.e||(this.e=l(t.nodeName),this.t=t,this.h(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)r(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(c)}}let v;function y(e){v=e}const w=[],$=[],j=[],k=[],_=Promise.resolve();let B=!1;function C(e){j.push(e)}let E=!1;const M=new Set;function P(){if(!E){E=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];y(t),T(t.$$)}for(y(null),w.length=0;$.length;)$.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];M.has(t)||(M.add(t),t())}j.length=0}while(w.length);for(;k.length;)k.pop()();B=!1,E=!1,M.clear()}}function T(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const F=new Set;let L;function S(e,t){e&&e.i&&(F.delete(e),e.i(t))}function O(e,t,o,n){if(e&&e.o){if(F.has(e))return;F.add(e),L.c.push(()=>{F.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}}function I(e){e&&e.c()}function A(e,o,s){const{fragment:i,on_mount:r,on_destroy:c,after_update:l}=e.$$;i&&i.m(o,s),C(()=>{const o=r.map(t).filter(a);c?c.push(...o):n(o),e.$$.on_mount=[]}),l.forEach(C)}function z(e,t){const o=e.$$;null!==o.fragment&&(n(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(w.push(e),B||(B=!0,_.then(P)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(t,a,s,i,r,l,d=[-1]){const u=v;y(t);const m=a.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=s?s(t,m,(e,o,...n)=>{const a=n.length?n[0]:o;return p.ctx&&r(p.ctx[e],p.ctx[e]=a)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](a),g&&q(t,e)),o}):[],p.update(),g=!0,n(p.before_update),p.fragment=!!i&&i(p.ctx),a.target){if(a.hydrate){const e=(f=a.target,Array.from(f.childNodes));p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();a.intro&&S(t.$$.fragment),A(t,a.target,a.anchor),P()}var f;y(u)}class H{$destroy(){z(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let R=[{imagen:"assetsjcc/img/10ok.png",title:"Windows 10 Pro",precio:"$ 1000",descripcion:"Los requisitos básicos para instalar Windows 10 son un poco más elevados que los de Windows 7. Las computadoras de 64 bits deben tener un CPU que soporte ciertas instrucciones para que funcione. Los dispositivos con poca capacidad de almacenamiento deben tener una memoria USB o una tarjeta SD con suficiente memoria para guardar los archivos temporales durante las actualizaciones. ​Para los nuevos dispositivos, la actualización de Aniversario de Windows 10 (versión 1607) aumentó los requisitos y además requiere 2 GB de RAM en adelante (ediciones de 32 y 64 bits) para su correcto funcionamiento.",cardcolor:"card-purple",pixel:"167px"},{imagen:"assetsjcc/img/officeok.png",title:"Office 2019 Pro",precio:"$ 600",descripcion:"Las nuevas funciones de Office 2019 ya están presentes en Office 365 Pro Plus. Microsoft WORD 2019 hace que el trabajo sea más fácil. Además del nuevo tema negro, se han añadido herramientas de aprendizaje, una función de texto a voz y mejoras de accesibilidad. Por su parte, la versión de Word 2019 para Mac incluye un modo enfoque y traductor. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft EXCEL 2019 ahora ofrece potentes funciones para el análisis de datos. Se ha incluido nuevos diagramas, gráficos, funciones y conectores, entre los que se encuentra la posibilidad (existente desde la versión de 2016) de insertar mapas en 3D personalizados. De igual forma, ahora cuenta con la opción de publicar Excel en PowerBI y algunas mejoras en PowerPivot y PowerQuery. Para Mac, se han añadido nuevas funciones CONCAT, TEXTJOIN, IFS y SWITCH. Microsoft POWERPOINT 2019 te permite crear presentaciones más impactantes. Cuenta con nuevas funciones ej: transición Morph, así como la posibilidad de insertar iconos SVG y modelos 3D. Para Mac, se ha incluido el soporte para la exportación de videos 4K y para reproducir secuencia in-click. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft OUTLOOK 2019 ha sido diseñado para administrar eficientemente el correo electrónico. Esta versión incluye tarjetas de contacto actualizadas, menciones, enfoque en el buzón, tarjetas de resumen de entregas y grupos de Office 365 (requiere Exchange). La versión 2019 de Outlook para Mac incluye, además de las novedades de la versión para Windows, la función de enviar más tarde o programas la entrega de correos electrónicos, además de plantillas de correo electrónico. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas).",cardcolor:"card-orange",pixel:"167px"},{imagen:"assetsjcc/img/pandaok.png",title:"Antivirus 2020",precio:"$ 300",descripcion:"Panda Security es una empresa española especializada en la creación de soluciones de seguridad informática. Centrada inicialmente en la creación de un programa antivirus, la compañía ha ampliado sus objetivos hacia los servicios de ciberseguridad avanzada con tecnologías para la prevención del cibercrimen. Cuenta con la tecnología patentada TruPrevent, un conjunto de capacidades proactivas encaminadas a bloquear virus desconocidos. También ha desarrollado el modelo de Inteligencia Colectiva, un sistema automático de detección, análisis y clasificación en tiempo real del malware. Ambos son los precursores del nuevo modelo de seguridad de Adaptive Defense1​ de la compañía que asegura la clasificación de todos los procesos activos del sistema. Con herramientas para la protección de equipos, redes, correo electrónico e información confidencial y para la gestión y control de sistemas, los productos de Panda incluyen soluciones de seguridad para empresas y para usuarios domésticos.",cardcolor:"card-blue",pixel:"167px"},{imagen:"assetsjcc/img/windowsok.png",title:"Windows 10 full",precio:"Oferta $ 1500",descripcion:"Realizamos el Backup de su información. Formateamos su Unidad de Disco, para realizar una instalación completa y limpia. Instalamos Windows 10 actualizado y el Antivirus Panda en su última versión.Luego instalamos el paquete de Ofimática: Microsoft Office 2019. Por último, recuperamos su información resguardada anteriormente. Con todo esto logramos una Instalación Full y totalmente limpia.",cardcolor:"card-amarillo",pixel:"167px"}],N="assetsjcc/img/logo-pc.jpeg",D="assetsjcc/img/logo-movil.jpeg",U="assetsjcc/img/servicios.png",V="assetsjcc/img/MercadoPago.png",G="Aceptamos<br/>Efectivo y Tarjetas",Y="assetsjcc/img/contacto.png",K="mailto:notebook.ar@gmail.com",X="assetsjcc/img/gmail.png",J="https://www.instagram.com/notebook.mdp/",Q="assetsjcc/img/instagram.png",Z="https://www.facebook.com/NoteboOK.mdp/",ee="assetsjcc/img/facebook.png",te="tel:+542235444899",oe="223-5-444-899",ne="https://api.whatsapp.com/send?phone=542235444899&text=Hola ",ae="assetsjcc/img/chat.png",se="CHAT",ie="assetsjcc/img/up.png",re="Subir",ce="assetsjcc/img/down.png",le="Bajar",de="assetsjcc/img/top.png",ue="Top",me="assetsjcc/img/phone2.png",pe="Llamar",ge="assetsjcc/img/sms1.png",fe="SMS",he="sms:+542235444899";function xe(t){let o,n,a,s,d,u;return{c(){o=l("div"),n=l("img"),s=m(),d=l("img"),f(n,"class","hidden md:flex md:mx-auto"),n.src!==(a=N)&&f(n,"src",a),f(n,"alt","logo PC"),f(d,"class","flex mx-auto md:hidden"),d.src!==(u=D)&&f(d,"src",u),f(d,"alt","logo movil"),f(o,"id","logo"),f(o,"class","pb-5")},m(e,t){r(e,o,t),i(o,n),i(o,s),i(o,d)},p:e,i:e,o:e,d(e){e&&c(o)}}}class be extends H{constructor(e){super(),W(this,e,null,xe,s,{})}}function ve(e){let t,o,n,a=e[2].toLocaleUpperCase()+"";return{c(){t=l("strong"),o=u(a),n=u(" "),f(t,"class","text-xl")},m(e,a){r(e,t,a),i(t,o),i(t,n)},p(e,t){4&t&&a!==(a=e[2].toLocaleUpperCase()+"")&&h(o,a)},d(e){e&&c(t)}}}function ye(e){let t,o,n;return{c(){t=l("div"),o=l("h1"),n=u(e[3]),f(o,"class","text-3xl font-bold"),f(t,"class","text-center")},m(e,a){r(e,t,a),i(t,o),i(o,n)},p(e,t){8&t&&h(n,e[3])},d(e){e&&c(t)}}}function we(e){let t,o;return{c(){o=p(),t=new b(o)},m(n,a){t.m(e[4],n,a),r(n,o,a)},p(e,o){16&o&&t.p(e[4])},d(e){e&&c(o),e&&t.d()}}}function $e(e){let t,o,n,a=e[6].toLocaleUpperCase()+"";return{c(){t=l("strong"),o=u(a),n=u(" "),f(t,"class","text-xl")},m(e,a){r(e,t,a),i(t,o),i(t,n)},p(e,t){64&t&&a!==(a=e[6].toLocaleUpperCase()+"")&&h(o,a)},d(e){e&&c(t)}}}function je(e){let t,o,n;return{c(){t=l("div"),o=l("h1"),n=u(e[7]),f(o,"class","text-3xl font-bold"),f(t,"class","text-center")},m(e,a){r(e,t,a),i(t,o),i(o,n)},p(e,t){128&t&&h(n,e[7])},d(e){e&&c(t)}}}function ke(e){let t,o;return{c(){o=p(),t=new b(o)},m(n,a){t.m(e[8],n,a),r(n,o,a)},p(e,o){256&o&&t.p(e[8])},d(e){e&&c(o),e&&t.d()}}}function _e(t){let o,n,a,s,d,u,p,h,x,b,v,y,w,$,j,k=t[2]&&ve(t),_=t[3]&&ye(t),B=t[4]&&we(t),C=t[6]&&$e(t),E=t[7]&&je(t),M=t[8]&&ke(t);return{c(){o=l("div"),n=l("div"),a=l("div"),k&&k.c(),s=m(),_&&_.c(),d=m(),B&&B.c(),h=m(),x=l("div"),C&&C.c(),b=m(),E&&E.c(),v=m(),M&&M.c(),f(a,"id",u="front"+t[0]),f(a,"class",p="front "+(t[1]?t[1]:"card-red")+" svelte-c4ll87"),f(x,"id",y="back"+t[0]),f(x,"class",w="back "+(t[5]?t[5]:"card-black")+" svelte-c4ll87"),f(n,"class","Tarjetero svelte-c4ll87"),f(o,"class","Contenedor svelte-c4ll87")},m(e,c){r(e,o,c),i(o,n),i(n,a),k&&k.m(a,null),i(a,s),_&&_.m(a,null),i(a,d),B&&B.m(a,null),i(n,h),i(n,x),C&&C.m(x,null),i(x,b),E&&E.m(x,null),i(x,v),M&&M.m(x,null),$||(j=g(a,"mouseover",t[9]),$=!0)},p(e,[t]){e[2]?k?k.p(e,t):(k=ve(e),k.c(),k.m(a,s)):k&&(k.d(1),k=null),e[3]?_?_.p(e,t):(_=ye(e),_.c(),_.m(a,d)):_&&(_.d(1),_=null),e[4]?B?B.p(e,t):(B=we(e),B.c(),B.m(a,null)):B&&(B.d(1),B=null),1&t&&u!==(u="front"+e[0])&&f(a,"id",u),2&t&&p!==(p="front "+(e[1]?e[1]:"card-red")+" svelte-c4ll87")&&f(a,"class",p),e[6]?C?C.p(e,t):(C=$e(e),C.c(),C.m(x,b)):C&&(C.d(1),C=null),e[7]?E?E.p(e,t):(E=je(e),E.c(),E.m(x,v)):E&&(E.d(1),E=null),e[8]?M?M.p(e,t):(M=ke(e),M.c(),M.m(x,null)):M&&(M.d(1),M=null),1&t&&y!==(y="back"+e[0])&&f(x,"id",y),32&t&&w!==(w="back "+(e[5]?e[5]:"card-black")+" svelte-c4ll87")&&f(x,"class",w)},i:e,o:e,d(e){e&&c(o),k&&k.d(),_&&_.d(),B&&B.d(),C&&C.d(),E&&E.d(),M&&M.d(),$=!1,j()}}}function Be(e,t,o){let{_id:n=""}=t,{_classFront:a=""}=t,{topicFront:s="Front Info:"}=t,{mensajeFront:i="Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias. Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias"}=t,{htmlFront:r="<h1 class=' text-red-600 text-right'>Hola Front</h1>"}=t,{_classBack:c=""}=t,{topicBack:l="Back Info:"}=t,{mensajeBack:d="Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias. Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias"}=t,{htmlBack:u="<h1 class=' text-red-600 text-right'>Hola Back</h1>"}=t;return e.$$set=e=>{"_id"in e&&o(0,n=e._id),"_classFront"in e&&o(1,a=e._classFront),"topicFront"in e&&o(2,s=e.topicFront),"mensajeFront"in e&&o(3,i=e.mensajeFront),"htmlFront"in e&&o(4,r=e.htmlFront),"_classBack"in e&&o(5,c=e._classBack),"topicBack"in e&&o(6,l=e.topicBack),"mensajeBack"in e&&o(7,d=e.mensajeBack),"htmlBack"in e&&o(8,u=e.htmlBack)},[n,a,s,i,r,c,l,d,u,function(){let e=document.getElementById("front"+n).clientHeight,t=document.getElementById("front"+n).clientWidth;document.getElementById("back"+n).style.overflowY="auto",document.getElementById("back"+n).style.height=e+"px",document.getElementById("back"+n).style.width=t+"px"}]}class Ce extends H{constructor(e){super(),W(this,e,Be,_e,s,{_id:0,_classFront:1,topicFront:2,mensajeFront:3,htmlFront:4,_classBack:5,topicBack:6,mensajeBack:7,htmlBack:8})}}function Ee(e,t,o){const n=e.slice();return n[0]=t[o],n}function Me(t){let o,n;return o=new Ce({props:{_id:"art_"+t[0].title,_classFront:"card-black-amarillo border-2",topicFront:"",mensajeFront:"",htmlFront:"\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<h1 class='text-xl'>"+t[0].title+"</h1>\r\n\t\t\t\t\t\t<h1 class='text-xl'>"+t[0].precio+"</h1>\r\n\t\t\t\t\t\t</br>\r\n\t\t\t\t\t\t<img class='mx-auto' src="+t[0].imagen+" alt=''/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t",_classBack:t[0].cardcolor+" border-2",topicBack:"",mensajeBack:"",htmlBack:"\r\n\t\t\t\t\t<div >\r\n\t\t\t\t\t\t<h1 class='text-xl text-right'>"+t[0].title+"</h1>\r\n\t\t\t\t\t\t<h1 class='text-xl text-right'>"+t[0].precio+"</h1>\r\n\t\t\t\t\t\t<img class='mx-auto pb-2' src="+t[0].imagen+" height=96 width=96  alt='' />\r\n\t\t\t\t\t\t<p class='text-justify'>"+t[0].descripcion+"</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t"}}),{c(){I(o.$$.fragment)},m(e,t){A(o,e,t),n=!0},p:e,i(e){n||(S(o.$$.fragment,e),n=!0)},o(e){O(o.$$.fragment,e),n=!1},d(e){z(o,e)}}}function Pe(e){let t,o,a,s,d,u,p=R,g=[];for(let t=0;t<p.length;t+=1)g[t]=Me(Ee(e,p,t));const h=e=>O(g[e],1,1,()=>{g[e]=null});return{c(){t=l("section"),o=l("img"),s=m(),d=l("div");for(let e=0;e<g.length;e+=1)g[e].c();f(o,"class","imgServicios svelte-4y7akp"),o.src!==(a=U)&&f(o,"src",a),f(o,"alt","logo servicios"),f(d,"class","grid mx-16 py-8 gap-16 bg-black\r\n\t\t\tgrid-cols-1\r\n\t\t\tsm:grid-cols-2 \r\n\t\t\txxl:grid-cols-4"),f(t,"id","Articulos"),f(t,"class","sectionArticulos svelte-4y7akp")},m(e,n){r(e,t,n),i(t,o),i(t,s),i(t,d);for(let e=0;e<g.length;e+=1)g[e].m(d,null);u=!0},p(e,[t]){if(0&t){let o;for(p=R,o=0;o<p.length;o+=1){const n=Ee(e,p,o);g[o]?(g[o].p(n,t),S(g[o],1)):(g[o]=Me(n),g[o].c(),S(g[o],1),g[o].m(d,null))}for(L={r:0,c:[],p:L},o=p.length;o<g.length;o+=1)h(o);L.r||n(L.c),L=L.p}},i(e){if(!u){for(let e=0;e<p.length;e+=1)S(g[e]);u=!0}},o(e){g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)O(g[e]);u=!1},d(e){e&&c(t),function(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}(g,e)}}}class Te extends H{constructor(e){super(),W(this,e,null,Pe,s,{})}}function Fe(t){let o,n,a,s,d,p,g,h,x,b,v,y,w,$,j,k,_,B,C,E,M,P,T,F,L,S,O,I,A,z,q,W,H,R=G+"",N=oe+"";return{c(){o=l("footer"),n=l("div"),a=l("p"),s=m(),d=l("img"),g=m(),h=l("div"),x=l("img"),v=m(),y=l("div"),w=l("a"),$=l("img"),_=m(),B=l("a"),C=l("img"),P=m(),T=l("a"),F=l("img"),O=m(),I=l("div"),A=l("a"),z=u(N),W=m(),H=l("div"),H.innerHTML='<p class="text-center text-sm text-amarillo">by JCC Produccione © 2020</p> \n\t\t<p class="text-center text-sm text-amarillo">Version 20.11.03.2012</p>',f(a,"class","pPagos svelte-11jiioj"),f(d,"class","imagenPagos svelte-11jiioj"),d.src!==(p=V)&&f(d,"src",p),f(d,"alt","logo pagos"),f(n,"id","Pagos"),f(n,"class","items-center justify-center grid "),f(x,"class","Contacto svelte-11jiioj"),x.src!==(b=Y)&&f(x,"src",b),f(x,"alt","logo contactos"),f(h,"id","Contactos"),f(h,"class","flex items-center justify-center"),f($,"class","pt-3 imagenRedes svelte-11jiioj"),$.src!==(j=X)&&f($,"src",j),f($,"alt","logo gmail"),f(w,"href",k=K),f(w,"target","_blank"),f(C,"class","imagenRedes svelte-11jiioj"),C.src!==(E=ee)&&f(C,"src",E),f(C,"alt","logo facebook"),f(B,"href",M=Z),f(B,"target","_blank"),f(F,"class","imagenRedes svelte-11jiioj"),F.src!==(L=Q)&&f(F,"src",L),f(F,"alt","logo instagram"),f(T,"href",S=J),f(T,"target","_blank"),f(y,"id","Redes"),f(y,"class","flex items-center justify-center mx-16"),f(A,"class","Telefono svelte-11jiioj"),f(A,"target",""),f(A,"href",q=te),f(I,"id","Telefono"),f(I,"class","svelte-11jiioj"),f(H,"id","Version"),f(H,"class","mx-16")},m(e,t){r(e,o,t),i(o,n),i(n,a),a.innerHTML=R,i(n,s),i(n,d),i(o,g),i(o,h),i(h,x),i(o,v),i(o,y),i(y,w),i(w,$),i(y,_),i(y,B),i(B,C),i(y,P),i(y,T),i(T,F),i(o,O),i(o,I),i(I,A),i(A,z),i(o,W),i(o,H)},p:e,i:e,o:e,d(e){e&&c(o)}}}class Le extends H{constructor(e){super(),W(this,e,null,Fe,s,{})}}function Se(t){let o,n,a,s,d,m,p=se+"";return{c(){o=l("div"),n=l("a"),a=l("img"),d=u(p),f(a,"id","logo"),f(a,"height","39px"),f(a,"width","38px"),f(a,"class","py-2 mx-auto"),a.src!==(s=ae)&&f(a,"src",s),f(a,"alt","logo chat whatsapp"),f(n,"href",m=ne),f(n,"target","_blank"),f(o,"id","Chat"),f(o,"class","fixed bottom-0 right-0 pb-4 mr-2 text-sm font-bold text-center\r\n\t\ttext-amarillo svelte-136ju2x")},m(e,t){r(e,o,t),i(o,n),i(n,a),i(n,d)},p:e,i:e,o:e,d(e){e&&c(o)}}}class Oe extends H{constructor(e){super(),W(this,e,null,Se,s,{})}}function Ie(t){let o,n,a,s,d,p,h,x=ue+"";return{c(){o=l("div"),n=u(x),a=m(),s=l("img"),f(s,"id","logo_up"),f(s,"height","39px"),f(s,"width","38px"),f(s,"class","py-2 mx-auto"),s.src!==(d=de)&&f(s,"src",d),f(s,"alt","logo scrolltop"),f(o,"id","ScrollTop"),f(o,"class","fixed bottom-0 right-0 pb-24 mr-2 text-sm font-bold\r\n\t\tcursor-pointer text-center text-amarillo hidden svelte-wckxxy")},m(e,t){r(e,o,t),i(o,n),i(o,a),i(o,s),p||(h=g(s,"click",Ae),p=!0)},p:e,i:e,o:e,d(e){e&&c(o),p=!1,h()}}}function Ae(){window.scrollTo({top:0,behavior:"smooth"})}function ze(e){return window.onscroll=()=>{window.scrollY>99?document.getElementById("ScrollTop").style.display="Block":document.getElementById("ScrollTop").style.display="none"},[]}class qe extends H{constructor(e){super(),W(this,e,ze,Ie,s,{})}}function We(t){let o,a,s,d,u,p,h,x,v,y,w,$,j,k,_,B,C,E,M,P,T,F,L,S,O,I,A,z,q,W,H=pe+"",R=fe+"",N=re+"",D=le+"";return{c(){o=l("div"),a=l("div"),s=l("a"),d=l("img"),p=m(),v=m(),y=l("div"),w=l("a"),$=l("img"),k=m(),C=m(),E=l("div"),M=l("img"),T=m(),L=m(),S=l("div"),O=l("img"),A=m(),f(d,"id","logo_phone"),f(d,"width","24px"),f(d,"height","32px"),f(d,"class","py-1 mx-auto "),d.src!==(u=me)&&f(d,"src",u),f(d,"alt","Llamar"),h=new b(null),f(s,"href",x=te),f(a,"id","phone"),f(a,"class",He),f($,"id","logo_phone"),f($,"width","32px"),f($,"height","32px"),f($,"class","py-1 mx-auto"),$.src!==(j=ge)&&f($,"src",j),f($,"alt","Mensaje SMS"),_=new b(null),f(w,"href",B=he),f(y,"id","sms"),f(y,"class",He),f(M,"id","logo_up"),f(M,"width","32px"),f(M,"height","32px"),f(M,"class","py-1 mx-auto"),M.src!==(P=ie)&&f(M,"src",P),f(M,"alt","Mensaje SMS"),F=new b(null),f(E,"id","up"),f(E,"class",He),f(O,"id","logo_down"),f(O,"width","32px"),f(O,"height","32px"),f(O,"class","py-1 mx-auto"),O.src!==(I=ce)&&f(O,"src",I),f(O,"alt","Mensaje SMS"),z=new b(null),f(S,"id","down"),f(S,"class",He),f(o,"id","stickers"),f(o,"class","w-10 top-0 right-0 fixed mt-16 px-0 py-0 text-tiny font-bold\r\n\t\ttext-center text-black svelte-1r6a7ic")},m(e,t){r(e,o,t),i(o,a),i(a,s),i(s,d),i(s,p),h.m(H,s),i(o,v),i(o,y),i(y,w),i(w,$),i(w,k),_.m(R,w),i(o,C),i(o,E),i(E,M),i(E,T),F.m(N,E),i(o,L),i(o,S),i(S,O),i(S,A),z.m(D,S),q||(W=[g(M,"click",Re),g(O,"click",Ne)],q=!0)},p:e,i:e,o:e,d(e){e&&c(o),q=!1,n(W)}}}let He="w-10 mt-2 bg-amarillo rounded-l-lg cursor-pointer";function Re(){let e=window.scrollY;window.scrollTo({top:e-100,left:0,behavior:"smooth"})}function Ne(){let e=window.scrollY;window.scrollTo({top:e+100,left:0,behavior:"smooth"})}class De extends H{constructor(e){super(),W(this,e,null,We,s,{})}}function Ue(t){let o,a,s,u,p,h,x,b,v,y,w,$,j,k;return{c(){o=l("div"),a=l("div"),s=l("div"),u=d("svg"),p=d("path"),h=m(),x=l("div"),x.innerHTML='<h1 class="text-center text-3xl font-bold text-amarillo texto-borde pb-8">BIENVENIDOS</h1>',b=m(),v=l("div"),v.innerHTML='<img alt="" id="logo" src="assetsjcc/icons/android-chrome-192x192.png" class="rotar mx-auto svelte-11xn362"/> \n\t\t\t<p class="text-2xl font-bold text-center text-black p-4">notebo-OK\n\t\t\t</p><br/>',y=m(),w=l("div"),$=l("button"),$.textContent="Cerrar",f(p,"stroke-linecap","round"),f(p,"stroke-linejoin","round"),f(p,"stroke-width","2"),f(p,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),f(u,"class","w-8 h-8"),f(u,"fill","none"),f(u,"stroke","currentColor"),f(u,"viewBox","0 0 24 24"),f(u,"xmlns","http://www.w3.org/2000/svg"),f(s,"id","cerrarX"),f(s,"class","flex justify-end text-lg font-bold text-black\r\n\t\t\t\thover:text-amarillo -mr-8 pb-6 md:-mr-24"),f(s,"alt","CERRAR"),f(x,"id","titulo"),f(x,"class",""),f(v,"id","mensaje"),f(v,"class","flex-block justify-center"),f($,"class","text-sm font-bold text-center mx-auto mb-2\r\n\t\t\t\t \tbg-black text-amarillo\r\n\t\t\t\t\tborder-black border-2 rounded \r\n\t\t\t\t\thover:bg-white hover:text-black hover:border-black \r\n\t\t\t\t\tcursor-pointer px-5 py-2"),f(w,"id","cerrarBoton"),f(w,"class","items-center  justify-center  grid grid-cols-1"),f(a,"id","Modal"),f(a,"class","mx-auto my-auto px-12 py-4 bg-white rounded-lg border-black\tborder-0 bg-modal bg-no-repeat bg-contain bg-top-left\r\n\t\tmd:px-32 md:py-8 "),f(o,"id","FondoModal"),f(o,"class","z-40 fixed top-0 left-0 w-screen h-screen flex items-center\r\n\t\tjustify-center bg-amarillo bg-opacity-25 transition duration-1000\r\n\t\tease-out-in hover:bg-black transform\r\n\t\thover:scale-110 svelte-11xn362")},m(e,t){r(e,o,t),i(o,a),i(a,s),i(s,u),i(u,p),i(a,h),i(a,x),i(a,b),i(a,v),i(a,y),i(a,w),i(w,$),j||(k=[g(u,"click",Ve),g($,"click",Ve)],j=!0)},p:e,i:e,o:e,d(e){e&&c(o),j=!1,n(k)}}}function Ve(){document.getElementById("FondoModal").style.display="none",document.body.style.overflowY="visible"}class Ge extends H{constructor(e){super(),W(this,e,null,Ue,s,{})}}function Ye(e){let t,o,n,a,s,d,u,p,g,h,b,v,y,w,$;return o=new Ge({}),a=new be({}),d=new Te({}),p=new Le({}),h=new Oe({}),v=new De({}),w=new qe({}),{c(){t=l("div"),I(o.$$.fragment),n=m(),I(a.$$.fragment),s=m(),I(d.$$.fragment),u=m(),I(p.$$.fragment),g=m(),I(h.$$.fragment),b=m(),I(v.$$.fragment),y=m(),I(w.$$.fragment),f(t,"id","principal"),x(t,"principalClass",Ke)},m(e,c){r(e,t,c),A(o,t,null),i(t,n),A(a,t,null),i(t,s),A(d,t,null),i(t,u),A(p,t,null),i(t,g),A(h,t,null),i(t,b),A(v,t,null),i(t,y),A(w,t,null),$=!0},p(e,[o]){0&o&&x(t,"principalClass",Ke)},i(e){$||(S(o.$$.fragment,e),S(a.$$.fragment,e),S(d.$$.fragment,e),S(p.$$.fragment,e),S(h.$$.fragment,e),S(v.$$.fragment,e),S(w.$$.fragment,e),$=!0)},o(e){O(o.$$.fragment,e),O(a.$$.fragment,e),O(d.$$.fragment,e),O(p.$$.fragment,e),O(h.$$.fragment,e),O(v.$$.fragment,e),O(w.$$.fragment,e),$=!1},d(e){e&&c(t),z(o),z(a),z(d),z(p),z(h),z(v),z(w)}}}let Ke="flex flex-col justify-between h-screen mx-auto bg-yellow-500";new class extends H{constructor(e){super(),W(this,e,null,Ye,s,{})}}({target:document.body});

//# sourceMappingURL=index.529fd212.js.map