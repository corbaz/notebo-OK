function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function u(e){return document.createTextNode(e)}function m(){return u(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function h(e,t,n){e.classList[n?"add":"remove"](t)}class x{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=l(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)r(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(c)}}let b;function v(e){b=e}const y=[],$=[],w=[],k=[],j=Promise.resolve();let B=!1;function _(e){w.push(e)}let C=!1;const z=new Set;function E(){if(!C){C=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];v(t),M(t.$$)}for(v(null),y.length=0;$.length;)$.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];z.has(t)||(z.add(t),t())}w.length=0}while(y.length);for(;k.length;)k.pop()();B=!1,C=!1,z.clear()}}function M(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const P=new Set;let T;function F(e,t){e&&e.i&&(P.delete(e),e.i(t))}function L(e,t,n,o){if(e&&e.o){if(P.has(e))return;P.add(e),T.c.push(()=>{P.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function S(e){e&&e.c()}function O(e,n,a){const{fragment:i,on_mount:r,on_destroy:c,after_update:l}=e.$$;i&&i.m(n,a),_(()=>{const n=r.map(t).filter(s);c?c.push(...n):o(n),e.$$.on_mount=[]}),l.forEach(_)}function I(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function A(e,t){-1===e.$$.dirty[0]&&(y.push(e),B||(B=!0,j.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(t,s,a,i,r,l,d=[-1]){const u=b;v(t);const m=s.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=a?a(t,m,(e,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&r(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),g&&A(t,e)),n}):[],p.update(),g=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const e=(f=s.target,Array.from(f.childNodes));p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();s.intro&&F(t.$$.fragment),O(t,s.target,s.anchor),E()}var f;v(u)}class W{$destroy(){I(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let R=[{imagen:"assets/img/10ok.png",title:"Windows 10 Pro",precio:"$ 1000",descripcion:"Los requisitos básicos para instalar Windows 10 son un poco más elevados que los de Windows 7. Las computadoras de 64 bits deben tener un CPU que soporte ciertas instrucciones para que funcione. Los dispositivos con poca capacidad de almacenamiento deben tener una memoria USB o una tarjeta SD con suficiente memoria para guardar los archivos temporales durante las actualizaciones. ​Para los nuevos dispositivos, la actualización de Aniversario de Windows 10 (versión 1607) aumentó los requisitos y además requiere 2 GB de RAM en adelante (ediciones de 32 y 64 bits) para su correcto funcionamiento.",html:"",cardcolor:"card-purple",pixel:"167px"},{imagen:"assets/img/officeok.png",title:"Office 2019 Pro",precio:"$ 600",descripcion:"Las nuevas funciones de Office 2019 ya están presentes en Office 365 Pro Plus. Microsoft WORD 2019 hace que el trabajo sea más fácil. Además del nuevo tema negro, se han añadido herramientas de aprendizaje, una función de texto a voz y mejoras de accesibilidad. Por su parte, la versión de Word 2019 para Mac incluye un modo enfoque y traductor. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft EXCEL 2019 ahora ofrece potentes funciones para el análisis de datos. Se ha incluido nuevos diagramas, gráficos, funciones y conectores, entre los que se encuentra la posibilidad (existente desde la versión de 2016) de insertar mapas en 3D personalizados. De igual forma, ahora cuenta con la opción de publicar Excel en PowerBI y algunas mejoras en PowerPivot y PowerQuery. Para Mac, se han añadido nuevas funciones CONCAT, TEXTJOIN, IFS y SWITCH. Microsoft POWERPOINT 2019 te permite crear presentaciones más impactantes. Cuenta con nuevas funciones ej: transición Morph, así como la posibilidad de insertar iconos SVG y modelos 3D. Para Mac, se ha incluido el soporte para la exportación de videos 4K y para reproducir secuencia in-click. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft OUTLOOK 2019 ha sido diseñado para administrar eficientemente el correo electrónico. Esta versión incluye tarjetas de contacto actualizadas, menciones, enfoque en el buzón, tarjetas de resumen de entregas y grupos de Office 365 (requiere Exchange). La versión 2019 de Outlook para Mac incluye, además de las novedades de la versión para Windows, la función de enviar más tarde o programas la entrega de correos electrónicos, además de plantillas de correo electrónico. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas).",html:"",cardcolor:"card-orange",pixel:"167px"},{imagen:"assets/img/pandaok.png",title:"Antivirus 2020",precio:"$ 300",descripcion:"Panda Security es una empresa española especializada en la creación de soluciones de seguridad informática. Centrada inicialmente en la creación de un programa antivirus, la compañía ha ampliado sus objetivos hacia los servicios de ciberseguridad avanzada con tecnologías para la prevención del cibercrimen. Cuenta con la tecnología patentada TruPrevent, un conjunto de capacidades proactivas encaminadas a bloquear virus desconocidos. También ha desarrollado el modelo de Inteligencia Colectiva, un sistema automático de detección, análisis y clasificación en tiempo real del malware. Ambos son los precursores del nuevo modelo de seguridad de Adaptive Defense1​ de la compañía que asegura la clasificación de todos los procesos activos del sistema. Con herramientas para la protección de equipos, redes, correo electrónico e información confidencial y para la gestión y control de sistemas, los productos de Panda incluyen soluciones de seguridad para empresas y para usuarios domésticos.",html:"",cardcolor:"card-blue",pixel:"167px"},{imagen:"assets/img/windowsok.png",title:"Windows 10 full",precio:"Oferta $ 1500",descripcion:"Realizamos el Backup de su información. Formateamos su Unidad de Disco, para realizar una instalación completa y limpia. Instalamos Windows 10 actualizado y el Antivirus Panda en su última versión.Luego instalamos el paquete de Ofimática: Microsoft Office 2019. Por último, recuperamos su información resguardada anteriormente. Con todo esto logramos una Instalación Full y totalmente limpia.",html:'\t\n\t\t\t\t<div class="text-center">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<strong class="text-xl">Windows 10 Full</strong>\n\t\t\t\t\t<h1 class="text-3xl font-bold">$ 1500</h1>\n\t\t\t\t</div>',cardcolor:"card-amarillo",pixel:"167px"}],N="assets/img/logo-pc.jpeg",H="assets/img/logo-movil.jpeg",D="assets/img/servicios.png",U="assets/img/MercadoPago.png",Y="Aceptamos<br/>Efectivo y Tarjetas",G="assets/img/contacto.png",K="mailto:notebook.ar@gmail.com",V="assets/img/gmail.png",X="https://www.instagram.com/notebook.mdp/",J="assets/img/instagram.png",Q="https://www.facebook.com/NoteboOK.mdp/",Z="assets/img/facebook.png",ee="tel:+542235444899",te="223-5-444-899",ne="https://api.whatsapp.com/send?phone=542235444899&text=Hola ",oe="assets/img/chat.png",se="CHAT",ae="assets/img/up.png",ie="Subir",re="assets/img/down.png",ce="Bajar",le="assets/img/top.png",de="Top",ue="assets/img/phone2.png",me="Llamar",pe="assets/img/sms1.png",ge="SMS",fe="sms:+542235444899";function he(t){let n,o,s,a,d,u;return{c(){n=l("div"),o=l("img"),a=m(),d=l("img"),g(o,"class","hidden md:flex md:mx-auto"),o.src!==(s=N)&&g(o,"src",s),g(o,"alt","logo PC"),g(d,"class","flex mx-auto md:hidden"),d.src!==(u=H)&&g(d,"src",u),g(d,"alt","logo movil"),g(n,"id","logo"),g(n,"class","pb-5")},m(e,t){r(e,n,t),i(n,o),i(n,a),i(n,d)},p:e,i:e,o:e,d(e){e&&c(n)}}}class xe extends W{constructor(e){super(),q(this,e,null,he,a,{})}}function be(e){let t,n;return{c(){t=l("img"),t.src!==(n=e[3])&&g(t,"src",n),g(t,"class","mx-auto py-2"),g(t,"alt","")},m(e,n){r(e,t,n)},p(e,o){8&o&&t.src!==(n=e[3])&&g(t,"src",n)},d(e){e&&c(t)}}}function ve(e){let t,n;return{c(){t=l("img"),t.src!==(n=e[7])&&g(t,"src",n),g(t,"alt","")},m(e,n){r(e,t,n)},p(e,o){128&o&&t.src!==(n=e[7])&&g(t,"src",n)},d(e){e&&c(t)}}}function ye(e){let t,n;return{c(){n=u(""),t=new x(n)},m(o,s){t.m(e[9],o,s),r(o,n,s)},p(e,n){512&n&&t.p(e[9])},d(e){e&&c(n),e&&t.d()}}}function $e(t){let n,o,s,a,d,h,x,b,v,y,$,w,k,j,B,_,C,z,E,M,P,T,F,L,S,O=t[2].toLocaleUpperCase()+"",I=t[6].toLocaleUpperCase()+"",A=t[3]&&be(t),q=t[7]&&ve(t),W=t[9]&&ye(t);return{c(){n=l("div"),o=l("div"),s=l("div"),A&&A.c(),a=m(),d=l("div"),h=l("strong"),x=u(O),b=u(" "),v=m(),y=l("h1"),$=u(t[4]),j=m(),B=l("div"),q&&q.c(),_=m(),C=l("strong"),z=u(I),E=u(" "),M=u(t[8]),P=m(),W&&W.c(),g(h,"class","text-xl"),g(y,"class","text-3xl font-bold"),g(d,"class","text-center"),g(s,"id",w="front"+t[0]),g(s,"class",k="front "+(t[1]?t[1]:"card-red")+" svelte-dnftbz"),g(B,"id",T="back"+t[0]),g(B,"class",F="back "+(t[5]?t[5]:"card-black")+" svelte-dnftbz"),g(o,"class","Tarjetero svelte-dnftbz"),g(n,"class","Contenedor svelte-dnftbz")},m(e,c){r(e,n,c),i(n,o),i(o,s),A&&A.m(s,null),i(s,a),i(s,d),i(d,h),i(h,x),i(h,b),i(d,v),i(d,y),i(y,$),i(o,j),i(o,B),q&&q.m(B,null),i(B,_),i(B,C),i(C,z),i(C,E),i(B,M),i(B,P),W&&W.m(B,null),L||(S=p(s,"mouseover",t[10]),L=!0)},p(e,[t]){e[3]?A?A.p(e,t):(A=be(e),A.c(),A.m(s,a)):A&&(A.d(1),A=null),4&t&&O!==(O=e[2].toLocaleUpperCase()+"")&&f(x,O),16&t&&f($,e[4]),1&t&&w!==(w="front"+e[0])&&g(s,"id",w),2&t&&k!==(k="front "+(e[1]?e[1]:"card-red")+" svelte-dnftbz")&&g(s,"class",k),e[7]?q?q.p(e,t):(q=ve(e),q.c(),q.m(B,_)):q&&(q.d(1),q=null),64&t&&I!==(I=e[6].toLocaleUpperCase()+"")&&f(z,I),256&t&&f(M,e[8]),e[9]?W?W.p(e,t):(W=ye(e),W.c(),W.m(B,null)):W&&(W.d(1),W=null),1&t&&T!==(T="back"+e[0])&&g(B,"id",T),32&t&&F!==(F="back "+(e[5]?e[5]:"card-black")+" svelte-dnftbz")&&g(B,"class",F)},i:e,o:e,d(e){e&&c(n),A&&A.d(),q&&q.d(),W&&W.d(),L=!1,S()}}}function we(e,t,n){let{_id:o=""}=t,{_classFront:s=""}=t,{topicFront:a="Info:"}=t,{imgFront:i=""}=t,{mensajeFront:r="{screen}: prefix to any existing background color utility. For example, use md:bg-green-500 to apply the bg-green-500 utility at only medium screen sizes and above."}=t,{_classBack:c=""}=t,{topicBack:l="Info:"}=t,{imgBack:d=""}=t,{mensajeBack:u="Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias. Estimado En relación con la oferta de trabajo publicada, tengo el gusto de remitirles mi CV con el objetivo de participar en el proceso de selección Muchas Gracias"}=t,{htmlBack:m=""}=t;return e.$$set=e=>{"_id"in e&&n(0,o=e._id),"_classFront"in e&&n(1,s=e._classFront),"topicFront"in e&&n(2,a=e.topicFront),"imgFront"in e&&n(3,i=e.imgFront),"mensajeFront"in e&&n(4,r=e.mensajeFront),"_classBack"in e&&n(5,c=e._classBack),"topicBack"in e&&n(6,l=e.topicBack),"imgBack"in e&&n(7,d=e.imgBack),"mensajeBack"in e&&n(8,u=e.mensajeBack),"htmlBack"in e&&n(9,m=e.htmlBack)},[o,s,a,i,r,c,l,d,u,m,function(){let e=document.getElementById("front"+o).clientHeight,t=document.getElementById("front"+o).clientWidth;document.getElementById("back"+o).style.overflowY="auto",document.getElementById("back"+o).style.height=e+"px",document.getElementById("back"+o).style.width=t+"px"}]}class ke extends W{constructor(e){super(),q(this,e,we,$e,a,{_id:0,_classFront:1,topicFront:2,imgFront:3,mensajeFront:4,_classBack:5,topicBack:6,imgBack:7,mensajeBack:8,htmlBack:9})}}function je(e,t,n){const o=e.slice();return o[0]=t[n],o}function Be(e){let t,n;return t=new ke({props:{_id:"art_"+e[0].title,_classFront:"card-black-amarillo border-2",topicFront:e[0].title,imgFront:e[0].imagen,mensajeFront:e[0].precio,_classBack:e[0].cardcolor+" border-2",topicBack:"Descripcion:",mensajeBack:e[0].descripcion,htmlBack:e[0].html}}),{c(){S(t.$$.fragment)},m(e,o){O(t,e,o),n=!0},p(e,n){const o={};8&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){L(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function _e(e){let t,n,s,a,d,u,p=R,f=[];for(let t=0;t<p.length;t+=1)f[t]=Be(je(e,p,t));const h=e=>L(f[e],1,1,()=>{f[e]=null});return{c(){t=l("section"),n=l("img"),a=m(),d=l("div");for(let e=0;e<f.length;e+=1)f[e].c();g(n,"class","imgServicios svelte-15xvs2h"),n.src!==(s=D)&&g(n,"src",s),g(n,"alt","logo servicios"),g(d,"class","grid mx-16 py-8 gap-16 bg-black \r\n\t\t\tgrid-cols-1\r\n\t\t\tsm:grid-cols-2 \r\n\t\t\txxl:grid-cols-4"),g(t,"id","Articulos"),g(t,"class","sectionArticulos svelte-15xvs2h")},m(e,o){r(e,t,o),i(t,n),i(t,a),i(t,d);for(let e=0;e<f.length;e+=1)f[e].m(d,null);u=!0},p(e,[t]){if(0&t){let n;for(p=R,n=0;n<p.length;n+=1){const o=je(e,p,n);f[n]?(f[n].p(o,t),F(f[n],1)):(f[n]=Be(o),f[n].c(),F(f[n],1),f[n].m(d,null))}for(T={r:0,c:[],p:T},n=p.length;n<f.length;n+=1)h(n);T.r||o(T.c),T=T.p}},i(e){if(!u){for(let e=0;e<p.length;e+=1)F(f[e]);u=!0}},o(e){f=f.filter(Boolean);for(let e=0;e<f.length;e+=1)L(f[e]);u=!1},d(e){e&&c(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(f,e)}}}class Ce extends W{constructor(e){super(),q(this,e,null,_e,a,{})}}function ze(t){let n,o,s,a,d,p,f,h,x,b,v,y,$,w,k,j,B,_,C,z,E,M,P,T,F,L,S,O,I,A,q,W,R,N=Y+"",H=te+"";return{c(){n=l("footer"),o=l("div"),s=l("p"),a=m(),d=l("img"),f=m(),h=l("div"),x=l("img"),v=m(),y=l("div"),$=l("a"),w=l("img"),B=m(),_=l("a"),C=l("img"),M=m(),P=l("a"),T=l("img"),S=m(),O=l("div"),I=l("a"),A=u(H),W=m(),R=l("p"),R.textContent="JCC Producciones - 2020",g(s,"class","pPagos svelte-1szs5xs"),g(d,"class","imagenPagos svelte-1szs5xs"),d.src!==(p=U)&&g(d,"src",p),g(d,"alt","logo pagos"),g(o,"id","Pagos"),g(o,"class","items-center justify-center grid "),g(x,"class","Contacto svelte-1szs5xs"),x.src!==(b=G)&&g(x,"src",b),g(x,"alt","logo contactos"),g(h,"id","Contactos"),g(h,"class","flex items-center justify-center"),g(w,"class","pt-3 imagenRedes svelte-1szs5xs"),w.src!==(k=V)&&g(w,"src",k),g(w,"alt","logo gmail"),g($,"href",j=K),g($,"target","_blank"),g(C,"class","imagenRedes svelte-1szs5xs"),C.src!==(z=Z)&&g(C,"src",z),g(C,"alt","logo facebook"),g(_,"href",E=Q),g(_,"target","_blank"),g(T,"class","imagenRedes svelte-1szs5xs"),T.src!==(F=J)&&g(T,"src",F),g(T,"alt","logo instagram"),g(P,"href",L=X),g(P,"target","_blank"),g(y,"id","Redes"),g(y,"class","flex items-center justify-center"),g(I,"class","Telefono svelte-1szs5xs"),g(I,"target",""),g(I,"href",q=ee),g(O,"id","Telefono"),g(O,"class","flex items-center justify-center svelte-1szs5xs"),g(R,"class","mb-3 text-red-600"),g(n,"class","")},m(e,t){r(e,n,t),i(n,o),i(o,s),s.innerHTML=N,i(o,a),i(o,d),i(n,f),i(n,h),i(h,x),i(n,v),i(n,y),i(y,$),i($,w),i(y,B),i(y,_),i(_,C),i(y,M),i(y,P),i(P,T),i(n,S),i(n,O),i(O,I),i(I,A),i(n,W),i(n,R)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ee extends W{constructor(e){super(),q(this,e,null,ze,a,{})}}function Me(t){let n,o,s,a,d,m,p=se+"";return{c(){n=l("div"),o=l("a"),s=l("img"),d=u(p),g(s,"id","logo"),g(s,"height","39px"),g(s,"width","38px"),g(s,"class","py-2 mx-auto"),s.src!==(a=oe)&&g(s,"src",a),g(s,"alt","logo chat whatsapp"),g(o,"href",m=ne),g(o,"target","_blank"),g(n,"id","Chat"),g(n,"class","fixed bottom-0 right-0 pb-4 mr-2 text-sm font-bold text-center\r\n\t\ttext-amarillo svelte-136ju2x")},m(e,t){r(e,n,t),i(n,o),i(o,s),i(o,d)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Pe extends W{constructor(e){super(),q(this,e,null,Me,a,{})}}function Te(t){let n,o,s,a,d,f,h,x=de+"";return{c(){n=l("div"),o=u(x),s=m(),a=l("img"),g(a,"id","logo_up"),g(a,"height","39px"),g(a,"width","38px"),g(a,"class","py-2 mx-auto"),a.src!==(d=le)&&g(a,"src",d),g(a,"alt","logo scrolltop"),g(n,"id","ScrollTop"),g(n,"class","fixed bottom-0 right-0 pb-24 mr-2 text-sm font-bold\r\n\t\tcursor-pointer text-center text-amarillo hidden svelte-wckxxy")},m(e,t){r(e,n,t),i(n,o),i(n,s),i(n,a),f||(h=p(a,"click",Fe),f=!0)},p:e,i:e,o:e,d(e){e&&c(n),f=!1,h()}}}function Fe(){window.scrollTo({top:0,behavior:"smooth"})}function Le(e){return window.onscroll=()=>{window.scrollY>99?document.getElementById("ScrollTop").style.display="Block":document.getElementById("ScrollTop").style.display="none"},[]}class Se extends W{constructor(e){super(),q(this,e,Le,Te,a,{})}}function Oe(t){let n,s,a,d,u,f,h,b,v,y,$,w,k,j,B,_,C,z,E,M,P,T,F,L,S,O,I,A,q,W,R=me+"",N=ge+"",H=ie+"",D=ce+"";return{c(){n=l("div"),s=l("div"),a=l("a"),d=l("img"),f=m(),v=m(),y=l("div"),$=l("a"),w=l("img"),j=m(),C=m(),z=l("div"),E=l("img"),P=m(),F=m(),L=l("div"),S=l("img"),I=m(),g(d,"id","logo_phone"),g(d,"width","24px"),g(d,"height","32px"),g(d,"class","py-1 mx-auto "),d.src!==(u=ue)&&g(d,"src",u),g(d,"alt","Llamar"),h=new x(null),g(a,"href",b=ee),g(s,"id","phone"),g(s,"class",Ie),g(w,"id","logo_phone"),g(w,"width","32px"),g(w,"height","32px"),g(w,"class","py-1 mx-auto"),w.src!==(k=pe)&&g(w,"src",k),g(w,"alt","Mensaje SMS"),B=new x(null),g($,"href",_=fe),g(y,"id","sms"),g(y,"class",Ie),g(E,"id","logo_up"),g(E,"width","32px"),g(E,"height","32px"),g(E,"class","py-1 mx-auto"),E.src!==(M=ae)&&g(E,"src",M),g(E,"alt","Mensaje SMS"),T=new x(null),g(z,"id","up"),g(z,"class",Ie),g(S,"id","logo_down"),g(S,"width","32px"),g(S,"height","32px"),g(S,"class","py-1 mx-auto"),S.src!==(O=re)&&g(S,"src",O),g(S,"alt","Mensaje SMS"),A=new x(null),g(L,"id","down"),g(L,"class",Ie),g(n,"id","stickers"),g(n,"class","w-10 top-0 right-0 fixed mt-48 px-0 py-0 text-tiny font-bold\r\n\t\ttext-center text-black svelte-1r6a7ic")},m(e,t){r(e,n,t),i(n,s),i(s,a),i(a,d),i(a,f),h.m(R,a),i(n,v),i(n,y),i(y,$),i($,w),i($,j),B.m(N,$),i(n,C),i(n,z),i(z,E),i(z,P),T.m(H,z),i(n,F),i(n,L),i(L,S),i(L,I),A.m(D,L),q||(W=[p(E,"click",Ae),p(S,"click",qe)],q=!0)},p:e,i:e,o:e,d(e){e&&c(n),q=!1,o(W)}}}let Ie="w-10 mt-2 bg-amarillo rounded-l-lg cursor-pointer";function Ae(){let e=window.scrollY;window.scrollTo({top:e-100,left:0,behavior:"smooth"})}function qe(){let e=window.scrollY;window.scrollTo({top:e+100,left:0,behavior:"smooth"})}class We extends W{constructor(e){super(),q(this,e,null,Oe,a,{})}}function Re(t){let n,s,a,u,f,h,x,b,v,y,$,w,k,j;return{c(){n=l("div"),s=l("div"),a=l("div"),u=d("svg"),f=d("path"),h=m(),x=l("div"),x.innerHTML='<h1 class="text-center text-3xl font-bold text-amarillo texto-borde pb-8">BIENVENIDOS</h1>',b=m(),v=l("div"),v.innerHTML='<img alt="" id="logo" src="/assets/icons/android-chrome-192x192.png" class="rotar mx-auto svelte-11xn362"/> \n\t\t\t<p class="text-2xl font-bold text-center text-black p-4">notebo-OK\n\t\t\t</p><br/>',y=m(),$=l("div"),w=l("button"),w.textContent="Cerrar",g(f,"stroke-linecap","round"),g(f,"stroke-linejoin","round"),g(f,"stroke-width","2"),g(f,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),g(u,"class","w-8 h-8"),g(u,"fill","none"),g(u,"stroke","currentColor"),g(u,"viewBox","0 0 24 24"),g(u,"xmlns","http://www.w3.org/2000/svg"),g(a,"id","cerrarX"),g(a,"class","flex justify-end text-lg font-bold text-black\r\n\t\t\t\thover:text-amarillo -mr-8 pb-6 md:-mr-24"),g(a,"alt","CERRAR"),g(x,"id","titulo"),g(x,"class",""),g(v,"id","mensaje"),g(v,"class","flex-block justify-center"),g(w,"class","text-sm font-bold text-center mx-auto mb-2\r\n\t\t\t\t \tbg-black text-amarillo\r\n\t\t\t\t\tborder-black border-2 rounded \r\n\t\t\t\t\thover:bg-white hover:text-black hover:border-black \r\n\t\t\t\t\tcursor-pointer px-5 py-2"),g($,"id","cerrarBoton"),g($,"class","items-center  justify-center  grid grid-cols-1"),g(s,"id","Modal"),g(s,"class","mx-auto my-auto px-12 py-4 bg-white rounded-lg border-black\tborder-0 bg-modal bg-no-repeat bg-contain bg-top-left\r\n\t\tmd:px-32 md:py-8 "),g(n,"id","FondoModal"),g(n,"class","z-40 fixed top-0 left-0 w-screen h-screen flex items-center\r\n\t\tjustify-center bg-amarillo bg-opacity-25 transition duration-1000\r\n\t\tease-out-in hover:bg-black transform\r\n\t\thover:scale-110 svelte-11xn362")},m(e,t){r(e,n,t),i(n,s),i(s,a),i(a,u),i(u,f),i(s,h),i(s,x),i(s,b),i(s,v),i(s,y),i(s,$),i($,w),k||(j=[p(u,"click",Ne),p(w,"click",Ne)],k=!0)},p:e,i:e,o:e,d(e){e&&c(n),k=!1,o(j)}}}function Ne(){document.getElementById("FondoModal").style.display="none",document.body.style.overflowY="visible"}class He extends W{constructor(e){super(),q(this,e,null,Re,a,{})}}function De(e){let t,n,o,s,a,d,u,p,f,x,b,v,y,$,w;return n=new He({}),s=new xe({}),d=new Ce({}),p=new Ee({}),x=new Pe({}),v=new Se({}),$=new We({}),{c(){t=l("div"),S(n.$$.fragment),o=m(),S(s.$$.fragment),a=m(),S(d.$$.fragment),u=m(),S(p.$$.fragment),f=m(),S(x.$$.fragment),b=m(),S(v.$$.fragment),y=m(),S($.$$.fragment),g(t,"id","principal"),h(t,"principalClass",Ue)},m(e,c){r(e,t,c),O(n,t,null),i(t,o),O(s,t,null),i(t,a),O(d,t,null),i(t,u),O(p,t,null),i(t,f),O(x,t,null),i(t,b),O(v,t,null),i(t,y),O($,t,null),w=!0},p(e,[n]){0&n&&h(t,"principalClass",Ue)},i(e){w||(F(n.$$.fragment,e),F(s.$$.fragment,e),F(d.$$.fragment,e),F(p.$$.fragment,e),F(x.$$.fragment,e),F(v.$$.fragment,e),F($.$$.fragment,e),w=!0)},o(e){L(n.$$.fragment,e),L(s.$$.fragment,e),L(d.$$.fragment,e),L(p.$$.fragment,e),L(x.$$.fragment,e),L(v.$$.fragment,e),L($.$$.fragment,e),w=!1},d(e){e&&c(t),I(n),I(s),I(d),I(p),I(x),I(v),I($)}}}let Ue="flex flex-col justify-between h-screen mx-auto bg-yellow-500";new class extends W{constructor(e){super(),q(this,e,null,De,a,{})}}({target:document.body});
