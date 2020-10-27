let pixelArticulo = "167px";
let windows = "Los requisitos básicos para instalar Windows 10 son un poco más elevados que los de Windows 7. Las computadoras de 64 bits deben tener un CPU que soporte ciertas instrucciones para que funcione. Los dispositivos con poca capacidad de almacenamiento deben tener una memoria USB o una tarjeta SD con suficiente memoria para guardar los archivos temporales durante las actualizaciones. ​Para los nuevos dispositivos, la actualización de Aniversario de Windows 10 (versión 1607) aumentó los requisitos y además requiere 2 GB de RAM en adelante (ediciones de 32 y 64 bits) para su correcto funcionamiento.";

let office = "Las nuevas funciones de Office 2019 ya están presentes en Office 365 Pro Plus. Microsoft WORD 2019 hace que el trabajo sea más fácil. Además del nuevo tema negro, se han añadido herramientas de aprendizaje, una función de texto a voz y mejoras de accesibilidad. Por su parte, la versión de Word 2019 para Mac incluye un modo enfoque y traductor. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft EXCEL 2019 ahora ofrece potentes funciones para el análisis de datos. Se ha incluido nuevos diagramas, gráficos, funciones y conectores, entre los que se encuentra la posibilidad (existente desde la versión de 2016) de insertar mapas en 3D personalizados. De igual forma, ahora cuenta con la opción de publicar Excel en PowerBI y algunas mejoras en PowerPivot y PowerQuery. Para Mac, se han añadido nuevas funciones CONCAT, TEXTJOIN, IFS y SWITCH. Microsoft POWERPOINT 2019 te permite crear presentaciones más impactantes. Cuenta con nuevas funciones ej: transición Morph, así como la posibilidad de insertar iconos SVG y modelos 3D. Para Mac, se ha incluido el soporte para la exportación de videos 4K y para reproducir secuencia in-click. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas). Microsoft OUTLOOK 2019 ha sido diseñado para administrar eficientemente el correo electrónico. Esta versión incluye tarjetas de contacto actualizadas, menciones, enfoque en el buzón, tarjetas de resumen de entregas y grupos de Office 365 (requiere Exchange). La versión 2019 de Outlook para Mac incluye, además de las novedades de la versión para Windows, la función de enviar más tarde o programas la entrega de correos electrónicos, además de plantillas de correo electrónico. Para los usuarios de Windows 10, puede iniciar rápidamente el dictado con reconocimiento de voz presionando CTRL+H (no disponible para todos los idiomas)."

let panda = "Panda Security es una empresa española especializada en la creación de soluciones de seguridad informática. Centrada inicialmente en la creación de un programa antivirus, la compañía ha ampliado sus objetivos hacia los servicios de ciberseguridad avanzada con tecnologías para la prevención del cibercrimen. Cuenta con la tecnología patentada TruPrevent, un conjunto de capacidades proactivas encaminadas a bloquear virus desconocidos. También ha desarrollado el modelo de Inteligencia Colectiva, un sistema automático de detección, análisis y clasificación en tiempo real del malware. Ambos son los precursores del nuevo modelo de seguridad de Adaptive Defense1​ de la compañía que asegura la clasificación de todos los procesos activos del sistema. Con herramientas para la protección de equipos, redes, correo electrónico e información confidencial y para la gestión y control de sistemas, los productos de Panda incluyen soluciones de seguridad para empresas y para usuarios domésticos.";

let full = "Realizamos el Backup de su información. Formateamos su Unidad de Disco, para realizar una instalación completa y limpia. Instalamos Windows 10 actualizado y el Antivirus Panda en su última versión.Luego instalamos el paquete de Ofimática: Microsoft Office 2019. Por último, recuperamos su información resguardada anteriormente. Con todo esto logramos una Instalación Full y totalmente limpia.";

let oferta="Windows 10 Full";
let precio = "$ 1500";

export let articulos = [
	{
		imagen: "assets/img/10ok.png",
		title: "Windows 10 Pro",
		precio: "$ 1000",
		descripcion: windows,
		html: "",
		cardcolor: "card-purple",
		pixel: pixelArticulo
	},
	{
		imagen: "assets/img/officeok.png",
		title: "Office 2019 Pro",
		precio: "$ 600",
		descripcion: office,
		html: "",
		cardcolor: "card-orange",
		pixel: pixelArticulo
	},
	{
		imagen: "assets/img/pandaok.png",
		title: "Antivirus 2020",
		precio: "$ 300",
		descripcion: panda,
		html: "",
		cardcolor: "card-blue",
		pixel: pixelArticulo
	},
	{
		imagen: "assets/img/windowsok.png",
		title: "Windows 10 full",
		precio: "Oferta $ 1500",
		descripcion: full,
		html: `	
				<div class="text-center">
					<br/>
					<strong class="text-xl">${oferta}</strong>
					<h1 class="text-3xl font-bold">${precio}</h1>
				</div>`,
		cardcolor: "card-amarillo",
		pixel: pixelArticulo
	}
];

export let datos = {
	logo_PC: "assets/img/logo-pc.jpeg",
	logo_Movil: "assets/img/logo-movil.jpeg",
	servicios: "assets/img/servicios.png",
	pagos: "assets/img/MercadoPago.png",
	formas_de_pago: "Aceptamos<br/>Efectivo y Tarjetas",
	contacto: "assets/img/contacto.png",
	email: "mailto:notebook.ar@gmail.com",
	gmail: "assets/img/gmail.png",
	instagram: "https://www.instagram.com/notebook.mdp/",
	instagram_png: "assets/img/instagram.png",
	facebook: "https://www.facebook.com/NoteboOK.mdp/",
	facebook_png: "assets/img/facebook.png",
	telefono_url: "tel:+542235444899",
	telefono: "223-5-444-899",
	whatsapp: "https://api.whatsapp.com/send?phone=542235444899&text=Hola ",
	whatsapp_png: "assets/img/whatsapp.png",
	chat_png: "assets/img/chat.png",
	chat: "CHAT",
	up_png: "assets/img/up.png",
	up: "Subir",
	down_png: "assets/img/down.png",
	down: "Bajar",
	top_png: "assets/img/top.png",
	top: "Top",
	call_png: "assets/img/phone2.png",
	call: "Llamar",
	sms_png: "assets/img/sms1.png",
	sms: "SMS",
	sms_url: "sms:+542235444899",
};

/*
	📞 Teléfono: tel:+542235444899
	📭 Email: mailto:julio.corbaz@gmail.com
	✉️ SMS: sms:+542235444899
	💬 WhatsApp: https://wa.me/542235444899?text=Saludos
		 "https://api.whatsapp.com/send?phone=542235444899&text=Hola ",
*/
