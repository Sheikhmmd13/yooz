/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'yoz\'">' + entity + '</span>' + html;
	}
	var icons = {
		'yoz-dcube': '&#xe900;',
		'yoz-d-cube-scan': '&#xe901;',
		'yoz-d-rotate': '&#xe902;',
		'yoz-d-square': '&#xe903;',
		'yoz-square': '&#xe904;',
		'yoz-support': '&#xe905;',
		'yoz-activity': '&#xe906;',
		'yoz-add': '&#xe907;',
		'yoz-add-circle': '&#xe908;',
		'yoz-additem': '&#xe909;',
		'yoz-add-square': '&#xe90a;',
		'yoz-airdrop': '&#xe90b;',
		'yoz-airplane': '&#xe90c;',
		'yoz-airplane-square': '&#xe90d;',
		'yoz-airpod': '&#xe90e;',
		'yoz-airpods': '&#xe90f;',
		'yoz-alarm': '&#xe910;',
		'yoz-align-bottom': '&#xe911;',
		'yoz-align-horizontally': '&#xe912;',
		'yoz-align-left': '&#xe913;',
		'yoz-align-right': '&#xe914;',
		'yoz-align-vertically': '&#xe915;',
		'yoz-aquarius': '&#xe916;',
		'yoz-archive': '&#xe917;',
		'yoz-archive-1': '&#xe918;',
		'yoz-archive-2': '&#xe919;',
		'yoz-archive-add': '&#xe91a;',
		'yoz-archive-book': '&#xe91b;',
		'yoz-archive-minus': '&#xe91c;',
		'yoz-archive-slash': '&#xe91d;',
		'yoz-archive-tick': '&#xe91e;',
		'yoz-arrange-circle': '&#xe91f;',
		'yoz-arrange-circle-2': '&#xe920;',
		'yoz-arrange-square': '&#xe921;',
		'yoz-arrange-square-2': '&#xe922;',
		'yoz-arrow': '&#xe923;',
		'yoz-arrow-2': '&#xe924;',
		'yoz-arrow-3': '&#xe925;',
		'yoz-arrow-bottom': '&#xe926;',
		'yoz-arrow-circle-down': '&#xe927;',
		'yoz-arrow-circle-left': '&#xe928;',
		'yoz-arrow-circle-right': '&#xe929;',
		'yoz-arrow-circle-up': '&#xe92a;',
		'yoz-arrow-down': '&#xe92b;',
		'yoz-arrow-down-1': '&#xe92c;',
		'yoz-arrow-down-2': '&#xe92d;',
		'yoz-arrow-left': '&#xe92e;',
		'yoz-arrow-left-1': '&#xe92f;',
		'yoz-arrow-left-2': '&#xe930;',
		'yoz-arrow-left-3': '&#xe931;',
		'yoz-arrow-right': '&#xe932;',
		'yoz-arrow-right-1': '&#xe933;',
		'yoz-arrow-right-2': '&#xe934;',
		'yoz-arrow-right-3': '&#xe935;',
		'yoz-arrow-right-4': '&#xe936;',
		'yoz-arrow-square': '&#xe937;',
		'yoz-arrow-square-down': '&#xe938;',
		'yoz-arrow-square-left': '&#xe939;',
		'yoz-arrow-square-up': '&#xe93a;',
		'yoz-arrow-swap': '&#xe93b;',
		'yoz-arrow-swap-horizontal': '&#xe93c;',
		'yoz-arrow-up': '&#xe93d;',
		'yoz-arrow-up-1': '&#xe93e;',
		'yoz-arrow-up-2': '&#xe93f;',
		'yoz-arrow-up-3': '&#xe940;',
		'yoz-attach-circle': '&#xe941;',
		'yoz-attach-square': '&#xe942;',
		'yoz-audio-square': '&#xe943;',
		'yoz-autobrightness': '&#xe944;',
		'yoz-award': '&#xe945;',
		'yoz-back-square': '&#xe946;',
		'yoz-backward': '&#xe947;',
		'yoz-backward-5-seconds': '&#xe948;',
		'yoz-backward-10-seconds': '&#xe949;',
		'yoz-backward-15-seconds': '&#xe94a;',
		'yoz-backward-item': '&#xe94b;',
		'yoz-bag': '&#xe94c;',
		'yoz-bag-2': '&#xe94d;',
		'yoz-bag-cross': '&#xe94e;',
		'yoz-bag-cross-1': '&#xe94f;',
		'yoz-bag-happy': '&#xe950;',
		'yoz-bag-tick': '&#xe951;',
		'yoz-bag-tick-2': '&#xe952;',
		'yoz-bag-timer': '&#xe953;',
		'yoz-bank': '&#xe954;',
		'yoz-barcode': '&#xe955;',
		'yoz-battery-3full': '&#xe956;',
		'yoz-battery-charging': '&#xe957;',
		'yoz-battery-disable': '&#xe958;',
		'yoz-battery-empty': '&#xe959;',
		'yoz-battery-empty-1': '&#xe95a;',
		'yoz-battery-full': '&#xe95b;',
		'yoz-bezier': '&#xe95c;',
		'yoz-bill': '&#xe95d;',
		'yoz-bitcoin-card': '&#xe95e;',
		'yoz-bitcoin-convert': '&#xe95f;',
		'yoz-bitcoin-refresh': '&#xe960;',
		'yoz-blend': '&#xe961;',
		'yoz-blend-2': '&#xe962;',
		'yoz-bluetooth': '&#xe963;',
		'yoz-bluetooth-2': '&#xe964;',
		'yoz-bluetooth-circle': '&#xe965;',
		'yoz-bluetooth-rectangle': '&#xe966;',
		'yoz-blur': '&#xe967;',
		'yoz-book': '&#xe968;',
		'yoz-book-1': '&#xe969;',
		'yoz-bookmark': '&#xe96a;',
		'yoz-bookmark-2': '&#xe96b;',
		'yoz-book-saved': '&#xe96c;',
		'yoz-book-square': '&#xe96d;',
		'yoz-box': '&#xe96e;',
		'yoz-box-1': '&#xe96f;',
		'yoz-box-2': '&#xe970;',
		'yoz-box-add': '&#xe971;',
		'yoz-box-remove': '&#xe972;',
		'yoz-box-search': '&#xe973;',
		'yoz-box-tick': '&#xe974;',
		'yoz-box-time': '&#xe975;',
		'yoz-briefcase': '&#xe976;',
		'yoz-brifecase-cross': '&#xe977;',
		'yoz-brifecase-tick': '&#xe978;',
		'yoz-brifecase-timer': '&#xe979;',
		'yoz-broom': '&#xe97a;',
		'yoz-brush': '&#xe97b;',
		'yoz-brush-1': '&#xe97c;',
		'yoz-brush-2': '&#xe97d;',
		'yoz-brush-3': '&#xe97e;',
		'yoz-brush-4': '&#xe97f;',
		'yoz-bubble': '&#xe980;',
		'yoz-bucket': '&#xe981;',
		'yoz-bucket-circle': '&#xe982;',
		'yoz-bucket-square': '&#xe983;',
		'yoz-building': '&#xe984;',
		'yoz-building-3': '&#xe985;',
		'yoz-building-4': '&#xe986;',
		'yoz-buildings': '&#xe987;',
		'yoz-buildings-2': '&#xe988;',
		'yoz-buliding': '&#xe989;',
		'yoz-bus': '&#xe98a;',
		'yoz-buy-crypto': '&#xe98b;',
		'yoz-cake': '&#xe98c;',
		'yoz-calculator': '&#xe98d;',
		'yoz-calendar': '&#xe98e;',
		'yoz-calendar-1': '&#xe98f;',
		'yoz-calendar-2': '&#xe990;',
		'yoz-calendar-add': '&#xe991;',
		'yoz-calendar-circle': '&#xe992;',
		'yoz-calendar-edit': '&#xe993;',
		'yoz-calendar-remove': '&#xe994;',
		'yoz-calendar-search': '&#xe995;',
		'yoz-calendar-tick': '&#xe996;',
		'yoz-call': '&#xe997;',
		'yoz-call-add': '&#xe998;',
		'yoz-call-calling': '&#xe999;',
		'yoz-call-incoming': '&#xe99a;',
		'yoz-call-minus': '&#xe99b;',
		'yoz-call-outgoing': '&#xe99c;',
		'yoz-call-received': '&#xe99d;',
		'yoz-call-remove': '&#xe99e;',
		'yoz-call-slash': '&#xe99f;',
		'yoz-camera': '&#xe9a0;',
		'yoz-camera-slash': '&#xe9a1;',
		'yoz-candle': '&#xe9a2;',
		'yoz-candle-2': '&#xe9a3;',
		'yoz-car': '&#xe9a4;',
		'yoz-card': '&#xe9a5;',
		'yoz-card-add': '&#xe9a6;',
		'yoz-card-coin': '&#xe9a7;',
		'yoz-card-edit': '&#xe9a8;',
		'yoz-card-pos': '&#xe9a9;',
		'yoz-card-receive': '&#xe9aa;',
		'yoz-card-remove': '&#xe9ab;',
		'yoz-card-remove-1': '&#xe9ac;',
		'yoz-cards': '&#xe9ad;',
		'yoz-card-send': '&#xe9ae;',
		'yoz-card-slash': '&#xe9af;',
		'yoz-card-tick': '&#xe9b0;',
		'yoz-card-tick-1': '&#xe9b1;',
		'yoz-category': '&#xe9b2;',
		'yoz-category-2': '&#xe9b3;',
		'yoz-cd': '&#xe9b4;',
		'yoz-chart': '&#xe9b5;',
		'yoz-chart-1': '&#xe9b6;',
		'yoz-chart-2': '&#xe9b7;',
		'yoz-chart-3': '&#xe9b8;',
		'yoz-chart-21': '&#xe9b9;',
		'yoz-chart-fail': '&#xe9ba;',
		'yoz-chart-square': '&#xe9bb;',
		'yoz-chart-success': '&#xe9bc;',
		'yoz-check': '&#xe9bd;',
		'yoz-chrome': '&#xe9be;',
		'yoz-clipboard': '&#xe9bf;',
		'yoz-clipboard-close': '&#xe9c0;',
		'yoz-clipboard-export': '&#xe9c1;',
		'yoz-clipboard-import': '&#xe9c2;',
		'yoz-clipboard-text': '&#xe9c3;',
		'yoz-clipboard-tick': '&#xe9c4;',
		'yoz-clock': '&#xe9c5;',
		'yoz-clock-1': '&#xe9c6;',
		'yoz-close-circle': '&#xe9c7;',
		'yoz-close-square': '&#xe9c8;',
		'yoz-cloud': '&#xe9c9;',
		'yoz-cloud-add': '&#xe9ca;',
		'yoz-cloud-change': '&#xe9cb;',
		'yoz-cloud-connection': '&#xe9cc;',
		'yoz-cloud-cross': '&#xe9cd;',
		'yoz-cloud-drizzle': '&#xe9ce;',
		'yoz-cloud-fog': '&#xe9cf;',
		'yoz-cloud-lightning': '&#xe9d0;',
		'yoz-cloud-minus': '&#xe9d1;',
		'yoz-cloud-notif': '&#xe9d2;',
		'yoz-cloud-plus': '&#xe9d3;',
		'yoz-cloud-remove': '&#xe9d4;',
		'yoz-cloud-snow': '&#xe9d5;',
		'yoz-cloud-sunny': '&#xe9d6;',
		'yoz-code': '&#xe9d7;',
		'yoz-code-1': '&#xe9d8;',
		'yoz-code-circle': '&#xe9d9;',
		'yoz-coffee': '&#xe9da;',
		'yoz-coin': '&#xe9db;',
		'yoz-coin-1': '&#xe9dc;',
		'yoz-colorfilter': '&#xe9dd;',
		'yoz-colors-square': '&#xe9de;',
		'yoz-color-swatch': '&#xe9df;',
		'yoz-command': '&#xe9e0;',
		'yoz-command-square': '&#xe9e1;',
		'yoz-component': '&#xe9e2;',
		'yoz-computing': '&#xe9e3;',
		'yoz-convert': '&#xe9e4;',
		'yoz-convert-3d-cube': '&#xe9e5;',
		'yoz-convert-card': '&#xe9e6;',
		'yoz-convertshape': '&#xe9e7;',
		'yoz-convertshape-2': '&#xe9e8;',
		'yoz-copy': '&#xe9e9;',
		'yoz-copyright': '&#xe9ea;',
		'yoz-copy-success': '&#xe9eb;',
		'yoz-courthouse': '&#xe9ec;',
		'yoz-cpu': '&#xe9ed;',
		'yoz-cpu-charge': '&#xe9ee;',
		'yoz-cpu-setting': '&#xe9ef;',
		'yoz-creative-commons': '&#xe9f0;',
		'yoz-crop': '&#xe9f1;',
		'yoz-crown': '&#xe9f2;',
		'yoz-crown-1': '&#xe9f3;',
		'yoz-cup': '&#xe9f4;',
		'yoz-danger': '&#xe9f5;',
		'yoz-data': '&#xe9f6;',
		'yoz-data-2': '&#xe9f7;',
		'yoz-designtools': '&#xe9ff;',
		'yoz-device-message': '&#xea00;',
		'yoz-devices': '&#xea01;',
		'yoz-devices-1': '&#xea02;',
		'yoz-diagram': '&#xea03;',
		'yoz-diamonds': '&#xea04;',
		'yoz-direct': '&#xea05;',
		'yoz-directbox-default': '&#xea06;',
		'yoz-directbox-notif': '&#xea07;',
		'yoz-directbox-receive': '&#xea08;',
		'yoz-directbox-send': '&#xea09;',
		'yoz-direct-down': '&#xea0a;',
		'yoz-direct-inbox': '&#xea0b;',
		'yoz-direct-left': '&#xea0c;',
		'yoz-direct-normal': '&#xea0d;',
		'yoz-direct-notification': '&#xea0e;',
		'yoz-direct-right': '&#xea0f;',
		'yoz-direct-send': '&#xea10;',
		'yoz-direct-up': '&#xea11;',
		'yoz-discount-circle': '&#xea12;',
		'yoz-discount-shape': '&#xea13;',
		'yoz-discover': '&#xea14;',
		'yoz-discover-1': '&#xea15;',
		'yoz-dislike': '&#xea16;',
		'yoz-document': '&#xea17;',
		'yoz-document-1': '&#xea18;',
		'yoz-document-cloud': '&#xea19;',
		'yoz-document-code': '&#xea1a;',
		'yoz-document-code-2': '&#xea1b;',
		'yoz-document-copy': '&#xea1c;',
		'yoz-document-download': '&#xea1d;',
		'yoz-document-favorite': '&#xea1e;',
		'yoz-document-filter': '&#xea1f;',
		'yoz-document-forward': '&#xea20;',
		'yoz-document-like': '&#xea21;',
		'yoz-document-normal': '&#xea22;',
		'yoz-document-previous': '&#xea23;',
		'yoz-document-sketch': '&#xea24;',
		'yoz-document-text': '&#xea25;',
		'yoz-document-text-1': '&#xea26;',
		'yoz-document-upload': '&#xea27;',
		'yoz-dollar-circle': '&#xea28;',
		'yoz-dollar-square': '&#xea29;',
		'yoz-driver': '&#xea2a;',
		'yoz-driver-2': '&#xea2b;',
		'yoz-driver-refresh': '&#xea2c;',
		'yoz-driving': '&#xea2d;',
		'yoz-edit': '&#xea2e;',
		'yoz-edit-2': '&#xea2f;',
		'yoz-electricity': '&#xea30;',
		'yoz-element-2': '&#xea31;',
		'yoz-element-3': '&#xea32;',
		'yoz-element-4': '&#xea33;',
		'yoz-element-equal': '&#xea34;',
		'yoz-element-plus': '&#xea35;',
		'yoz-emoji-happy': '&#xea36;',
		'yoz-emoji-normal': '&#xea37;',
		'yoz-emoji-sad': '&#xea38;',
		'yoz-empty-wallet': '&#xea39;',
		'yoz-empty-wallet-add': '&#xea3a;',
		'yoz-empty-wallet-change': '&#xea3b;',
		'yoz-empty-wallet-remove': '&#xea3c;',
		'yoz-empty-wallet-tick': '&#xea3d;',
		'yoz-empty-wallet-time': '&#xea3e;',
		'yoz-eraser': '&#xea3f;',
		'yoz-eraser-1': '&#xea40;',
		'yoz-export': '&#xea41;',
		'yoz-export-1': '&#xea42;',
		'yoz-export-2': '&#xea43;',
		'yoz-export-3': '&#xea44;',
		'yoz-external-drive': '&#xea45;',
		'yoz-eye': '&#xea46;',
		'yoz-eye-slash': '&#xea47;',
		'yoz-fatrows': '&#xea48;',
		'yoz-favorite-chart': '&#xea49;',
		'yoz-filter': '&#xea4a;',
		'yoz-filter-add': '&#xea4b;',
		'yoz-filter-edit': '&#xea4c;',
		'yoz-filter-remove': '&#xea4d;',
		'yoz-filter-search': '&#xea4e;',
		'yoz-filter-square': '&#xea4f;',
		'yoz-filter-tick': '&#xea50;',
		'yoz-finger-cricle': '&#xea51;',
		'yoz-finger-scan': '&#xea52;',
		'yoz-firstline': '&#xea53;',
		'yoz-flag': '&#xea54;',
		'yoz-flag-2': '&#xea55;',
		'yoz-flash': '&#xea56;',
		'yoz-flash-1': '&#xea57;',
		'yoz-flash-circle': '&#xea58;',
		'yoz-flash-circle-1': '&#xea59;',
		'yoz-flash-slash': '&#xea5a;',
		'yoz-folder': '&#xea5b;',
		'yoz-folder-2': '&#xea5c;',
		'yoz-folder-add': '&#xea5d;',
		'yoz-folder-cloud': '&#xea5e;',
		'yoz-folder-connection': '&#xea5f;',
		'yoz-folder-cross': '&#xea60;',
		'yoz-folder-favorite': '&#xea61;',
		'yoz-folder-minus': '&#xea62;',
		'yoz-folder-open': '&#xea63;',
		'yoz-forbidden': '&#xea64;',
		'yoz-forbidden-2': '&#xea65;',
		'yoz-format-circle': '&#xea66;',
		'yoz-format-square': '&#xea67;',
		'yoz-forward': '&#xea68;',
		'yoz-forward-5-seconds': '&#xea69;',
		'yoz-forward-10-seconds': '&#xea6a;',
		'yoz-forward-15-seconds': '&#xea6b;',
		'yoz-forward-item': '&#xea6c;',
		'yoz-forward-square': '&#xea6d;',
		'yoz-frame': '&#xea6e;',
		'yoz-frame-1': '&#xea6f;',
		'yoz-frame-2': '&#xea70;',
		'yoz-frame-3': '&#xea71;',
		'yoz-frame-4': '&#xea72;',
		'yoz-gallery': '&#xea73;',
		'yoz-gallery-add': '&#xea74;',
		'yoz-gallery-edit': '&#xea75;',
		'yoz-gallery-export': '&#xea76;',
		'yoz-gallery-favorite': '&#xea77;',
		'yoz-gallery-import': '&#xea78;',
		'yoz-gallery-remove': '&#xea79;',
		'yoz-gallery-slash': '&#xea7a;',
		'yoz-gallery-tick': '&#xea7b;',
		'yoz-game': '&#xea7c;',
		'yoz-gameboy': '&#xea7d;',
		'yoz-gas-station': '&#xea7e;',
		'yoz-gemini': '&#xea7f;',
		'yoz-gemini-2': '&#xea80;',
		'yoz-ghost': '&#xea81;',
		'yoz-gift': '&#xea82;',
		'yoz-glass': '&#xea83;',
		'yoz-glass-1': '&#xea84;',
		'yoz-global': '&#xea85;',
		'yoz-global-edit': '&#xea86;',
		'yoz-global-refresh': '&#xea87;',
		'yoz-global-search': '&#xea88;',
		'yoz-gps': '&#xea89;',
		'yoz-gps-slash': '&#xea8a;',
		'yoz-grammerly': '&#xea8b;',
		'yoz-graph': '&#xea8c;',
		'yoz-grid-1': '&#xea8d;',
		'yoz-grid-2': '&#xea8e;',
		'yoz-grid-3': '&#xea8f;',
		'yoz-grid-4': '&#xea90;',
		'yoz-grid-5': '&#xea91;',
		'yoz-grid-6': '&#xea92;',
		'yoz-grid-7': '&#xea93;',
		'yoz-grid-8': '&#xea94;',
		'yoz-grid-9': '&#xea95;',
		'yoz-grid-edit': '&#xea96;',
		'yoz-grid-eraser': '&#xea97;',
		'yoz-grid-lock': '&#xea98;',
		'yoz-happyemoji': '&#xea99;',
		'yoz-hashtag': '&#xea9a;',
		'yoz-hashtag-1': '&#xea9b;',
		'yoz-hashtag-down': '&#xea9c;',
		'yoz-hashtag-up': '&#xea9d;',
		'yoz-headphone': '&#xea9e;',
		'yoz-headphones': '&#xea9f;',
		'yoz-health': '&#xeaa0;',
		'yoz-heart': '&#xeaa1;',
		'yoz-heart-add': '&#xeaa2;',
		'yoz-heart-circle': '&#xeaa3;',
		'yoz-heart-edit': '&#xeaa4;',
		'yoz-heart-remove': '&#xeaa5;',
		'yoz-heart-search': '&#xeaa6;',
		'yoz-heart-slash': '&#xeaa7;',
		'yoz-heart-tick': '&#xeaa8;',
		'yoz-hierarchy': '&#xeaa9;',
		'yoz-hierarchy-2': '&#xeaaa;',
		'yoz-hierarchy-3': '&#xeaab;',
		'yoz-hierarchy-square': '&#xeaac;',
		'yoz-hierarchy-square-2': '&#xeaad;',
		'yoz-hierarchy-square-3': '&#xeaae;',
		'yoz-home': '&#xeaaf;',
		'yoz-home-1': '&#xeab0;',
		'yoz-home-2': '&#xeab1;',
		'yoz-home-hashtag': '&#xeab2;',
		'yoz-home-trend-down': '&#xeab3;',
		'yoz-home-trend-up': '&#xeab4;',
		'yoz-home-wifi': '&#xeab5;',
		'yoz-hospital': '&#xeab6;',
		'yoz-house': '&#xeab7;',
		'yoz-house-2': '&#xeab8;',
		'yoz-icon': '&#xeab9;',
		'yoz-image': '&#xeaba;',
		'yoz-import': '&#xeabb;',
		'yoz-import-1': '&#xeabc;',
		'yoz-import-2': '&#xeabd;',
		'yoz-info-circle': '&#xeabe;',
		'yoz-information': '&#xeabf;',
		'yoz-instagram': '&#xeac0;',
		'yoz-judge': '&#xeac1;',
		'yoz-kanban': '&#xeac2;',
		'yoz-key': '&#xeac3;',
		'yoz-keyboard': '&#xeac4;',
		'yoz-keyboard-open': '&#xeac5;',
		'yoz-key-square': '&#xeac6;',
		'yoz-lamp': '&#xeac7;',
		'yoz-lamp-1': '&#xeac8;',
		'yoz-lamp-charge': '&#xeac9;',
		'yoz-lamp-on': '&#xeaca;',
		'yoz-lamp-slash': '&#xeacb;',
		'yoz-language-circle': '&#xeacc;',
		'yoz-language-square': '&#xeacd;',
		'yoz-layer': '&#xeace;',
		'yoz-level': '&#xeacf;',
		'yoz-lifebuoy': '&#xead0;',
		'yoz-like': '&#xead1;',
		'yoz-like-1': '&#xead2;',
		'yoz-like-dislike': '&#xead3;',
		'yoz-like-shapes': '&#xead4;',
		'yoz-like-tag': '&#xead5;',
		'yoz-link': '&#xead6;',
		'yoz-link-1': '&#xead7;',
		'yoz-link-2': '&#xead8;',
		'yoz-link-21': '&#xead9;',
		'yoz-link-circle': '&#xeada;',
		'yoz-link-square': '&#xeadb;',
		'yoz-location': '&#xeadc;',
		'yoz-location-add': '&#xeadd;',
		'yoz-location-cross': '&#xeade;',
		'yoz-location-minus': '&#xeadf;',
		'yoz-location-slash': '&#xeae0;',
		'yoz-location-tick': '&#xeae1;',
		'yoz-lock': '&#xeae2;',
		'yoz-lock-1': '&#xeae3;',
		'yoz-lock-circle': '&#xeae4;',
		'yoz-lock-slash': '&#xeae5;',
		'yoz-login': '&#xeae6;',
		'yoz-login-1': '&#xeae7;',
		'yoz-logout': '&#xeae8;',
		'yoz-logout-1': '&#xeae9;',
		'yoz-lovely': '&#xeaea;',
		'yoz-magicpen': '&#xeaeb;',
		'yoz-magic-star': '&#xeaec;',
		'yoz-main-component': '&#xeaed;',
		'yoz-man': '&#xeaee;',
		'yoz-map': '&#xeaef;',
		'yoz-map-1': '&#xeaf0;',
		'yoz-mask': '&#xeaf1;',
		'yoz-mask-1': '&#xeaf2;',
		'yoz-mask-2': '&#xeaf3;',
		'yoz-math': '&#xeaf4;',
		'yoz-maximize': '&#xeaf5;',
		'yoz-maximize-1': '&#xeaf6;',
		'yoz-maximize-2': '&#xeaf7;',
		'yoz-maximize-3': '&#xeaf8;',
		'yoz-maximize-4': '&#xeaf9;',
		'yoz-maximize-21': '&#xeafa;',
		'yoz-maximize-circle': '&#xeafb;',
		'yoz-medal': '&#xeafc;',
		'yoz-medal-star': '&#xeafd;',
		'yoz-menu': '&#xeafe;',
		'yoz-menu-1': '&#xeaff;',
		'yoz-menu-board': '&#xeb00;',
		'yoz-message': '&#xeb01;',
		'yoz-message-2': '&#xeb02;',
		'yoz-message-add': '&#xeb03;',
		'yoz-message-add-1': '&#xeb04;',
		'yoz-message-circle': '&#xeb05;',
		'yoz-message-edit': '&#xeb06;',
		'yoz-message-favorite': '&#xeb07;',
		'yoz-message-minus': '&#xeb08;',
		'yoz-message-notif': '&#xeb09;',
		'yoz-message-programming': '&#xeb0a;',
		'yoz-message-question': '&#xeb0b;',
		'yoz-message-remove': '&#xeb0c;',
		'yoz-messages': '&#xeb0d;',
		'yoz-messages-1': '&#xeb0e;',
		'yoz-messages-2': '&#xeb0f;',
		'yoz-messages-3': '&#xeb10;',
		'yoz-message-search': '&#xeb11;',
		'yoz-message-square': '&#xeb12;',
		'yoz-message-text': '&#xeb13;',
		'yoz-message-text-1': '&#xeb14;',
		'yoz-message-tick': '&#xeb15;',
		'yoz-message-time': '&#xeb16;',
		'yoz-microphone': '&#xeb17;',
		'yoz-microphone-2': '&#xeb18;',
		'yoz-microphone-slash': '&#xeb19;',
		'yoz-microphone-slash-1': '&#xeb1a;',
		'yoz-microscope': '&#xeb1b;',
		'yoz-milk': '&#xeb1c;',
		'yoz-mini-music-sqaure': '&#xeb1d;',
		'yoz-minus': '&#xeb1e;',
		'yoz-minus-cirlce': '&#xeb1f;',
		'yoz-minus-square': '&#xeb20;',
		'yoz-mirror': '&#xeb21;',
		'yoz-mirroring-screen': '&#xeb22;',
		'yoz-mobile': '&#xeb23;',
		'yoz-mobile-programming': '&#xeb24;',
		'yoz-money': '&#xeb25;',
		'yoz-money-2': '&#xeb26;',
		'yoz-money-3': '&#xeb27;',
		'yoz-money-4': '&#xeb28;',
		'yoz-money-add': '&#xeb29;',
		'yoz-money-change': '&#xeb2a;',
		'yoz-money-forbidden': '&#xeb2b;',
		'yoz-money-recive': '&#xeb2c;',
		'yoz-money-remove': '&#xeb2d;',
		'yoz-moneys': '&#xeb2e;',
		'yoz-money-send': '&#xeb2f;',
		'yoz-money-tick': '&#xeb30;',
		'yoz-money-time': '&#xeb31;',
		'yoz-monitor': '&#xeb32;',
		'yoz-monitor-mobbile': '&#xeb33;',
		'yoz-monitor-recorder': '&#xeb34;',
		'yoz-moon': '&#xeb35;',
		'yoz-more': '&#xeb36;',
		'yoz-more-2': '&#xeb37;',
		'yoz-more-circle': '&#xeb38;',
		'yoz-more-square': '&#xeb39;',
		'yoz-mouse': '&#xeb3a;',
		'yoz-mouse-1': '&#xeb3b;',
		'yoz-mouse-circle': '&#xeb3c;',
		'yoz-mouse-square': '&#xeb3d;',
		'yoz-music': '&#xeb3e;',
		'yoz-music-circle': '&#xeb3f;',
		'yoz-music-dashboard': '&#xeb40;',
		'yoz-music-filter': '&#xeb41;',
		'yoz-music-library-2': '&#xeb42;',
		'yoz-musicnote': '&#xeb43;',
		'yoz-music-play': '&#xeb44;',
		'yoz-music-playlist': '&#xeb45;',
		'yoz-music-square': '&#xeb46;',
		'yoz-music-square-add': '&#xeb47;',
		'yoz-music-square-remove': '&#xeb48;',
		'yoz-music-square-search': '&#xeb49;',
		'yoz-next': '&#xeb4a;',
		'yoz-note': '&#xeb4b;',
		'yoz-note-1': '&#xeb4c;',
		'yoz-note-2': '&#xeb4d;',
		'yoz-note-21': '&#xeb4e;',
		'yoz-note-add': '&#xeb4f;',
		'yoz-note-favorite': '&#xeb50;',
		'yoz-note-remove': '&#xeb51;',
		'yoz-note-square': '&#xeb52;',
		'yoz-note-text': '&#xeb53;',
		'yoz-notification': '&#xeb54;',
		'yoz-notification-1': '&#xeb55;',
		'yoz-notification-bing': '&#xeb56;',
		'yoz-notification-circle': '&#xeb57;',
		'yoz-notification-favorite': '&#xeb58;',
		'yoz-notification-status': '&#xeb59;',
		'yoz-omega-circle': '&#xeb5a;',
		'yoz-omega-square': '&#xeb5b;',
		'yoz-paintbucket': '&#xeb5c;',
		'yoz-paperclip': '&#xeb5d;',
		'yoz-paperclip-2': '&#xeb5e;',
		'yoz-password-check': '&#xeb5f;',
		'yoz-path': '&#xeb60;',
		'yoz-path-2': '&#xeb61;',
		'yoz-path-square': '&#xeb62;',
		'yoz-pause': '&#xeb63;',
		'yoz-pause-circle': '&#xeb64;',
		'yoz-pen-add': '&#xeb65;',
		'yoz-pen-close': '&#xeb66;',
		'yoz-pen-remove': '&#xeb67;',
		'yoz-pen-tool': '&#xeb68;',
		'yoz-pen-tool-2': '&#xeb69;',
		'yoz-people': '&#xeb6a;',
		'yoz-percentage-circle': '&#xeb6b;',
		'yoz-percentage-square': '&#xeb6c;',
		'yoz-personalcard': '&#xeb6d;',
		'yoz-pet': '&#xeb6e;',
		'yoz-pharagraphspacing': '&#xeb6f;',
		'yoz-picture-frame': '&#xeb70;',
		'yoz-play': '&#xeb71;',
		'yoz-play-add': '&#xeb72;',
		'yoz-play-circle': '&#xeb73;',
		'yoz-play-cricle': '&#xeb74;',
		'yoz-play-remove': '&#xeb75;',
		'yoz-presention-chart': '&#xeb76;',
		'yoz-previous': '&#xeb77;',
		'yoz-printer': '&#xeb78;',
		'yoz-printer-slash': '&#xeb79;',
		'yoz-profile-2user': '&#xeb7a;',
		'yoz-profile-add': '&#xeb7b;',
		'yoz-profile-circle': '&#xeb7c;',
		'yoz-profile-delete': '&#xeb7d;',
		'yoz-profile-remove': '&#xeb7e;',
		'yoz-profile-tick': '&#xeb7f;',
		'yoz-programming-arrow': '&#xeb80;',
		'yoz-programming-arrows': '&#xeb81;',
		'yoz-quote-down': '&#xeb82;',
		'yoz-quote-down-circle': '&#xeb83;',
		'yoz-quote-down-square': '&#xeb84;',
		'yoz-quote-up': '&#xeb85;',
		'yoz-quote-up-circle': '&#xeb86;',
		'yoz-quote-up-square': '&#xeb87;',
		'yoz-radar': '&#xeb88;',
		'yoz-radar-1': '&#xeb89;',
		'yoz-radar-2': '&#xeb8a;',
		'yoz-radio': '&#xeb8b;',
		'yoz-ram': '&#xeb8c;',
		'yoz-ram-2': '&#xeb8d;',
		'yoz-ranking': '&#xeb8e;',
		'yoz-ranking-1': '&#xeb8f;',
		'yoz-receipt': '&#xeb90;',
		'yoz-receipt-1': '&#xeb91;',
		'yoz-receipt-2': '&#xeb92;',
		'yoz-receipt-2-1': '&#xeb93;',
		'yoz-receipt-add': '&#xeb94;',
		'yoz-receipt-discount': '&#xeb95;',
		'yoz-receipt-disscount': '&#xeb96;',
		'yoz-receipt-edit': '&#xeb97;',
		'yoz-receipt-item': '&#xeb98;',
		'yoz-receipt-minus': '&#xeb99;',
		'yoz-receipt-search': '&#xeb9a;',
		'yoz-receipt-square': '&#xeb9b;',
		'yoz-receipt-text': '&#xeb9c;',
		'yoz-received': '&#xeb9d;',
		'yoz-receive-square': '&#xeb9e;',
		'yoz-receive-square-2': '&#xeb9f;',
		'yoz-record': '&#xeba0;',
		'yoz-record-circle': '&#xeba1;',
		'yoz-recovery-convert': '&#xeba2;',
		'yoz-redo': '&#xeba3;',
		'yoz-refresh': '&#xeba4;',
		'yoz-refresh-2': '&#xeba5;',
		'yoz-refresh-circle': '&#xeba6;',
		'yoz-refresh-left-square': '&#xeba7;',
		'yoz-refresh-right-square': '&#xeba8;',
		'yoz-refresh-square-2': '&#xeba9;',
		'yoz-repeat': '&#xebaa;',
		'yoz-repeat-circle': '&#xebab;',
		'yoz-repeate-music': '&#xebac;',
		'yoz-repeate-one': '&#xebad;',
		'yoz-reserve': '&#xebae;',
		'yoz-rotate-left': '&#xebaf;',
		'yoz-rotate-left-1': '&#xebb0;',
		'yoz-rotate-right': '&#xebb1;',
		'yoz-rotate-right-1': '&#xebb2;',
		'yoz-route-square': '&#xebb3;',
		'yoz-routing': '&#xebb4;',
		'yoz-routing-2': '&#xebb5;',
		'yoz-row-horizontal': '&#xebb6;',
		'yoz-row-vertical': '&#xebb7;',
		'yoz-rulerpen': '&#xebb8;',
		'yoz-ruler': '&#xebb9;',
		'yoz-safe-home': '&#xebba;',
		'yoz-sagittarius': '&#xebbb;',
		'yoz-save-2': '&#xebbc;',
		'yoz-save-add': '&#xebbd;',
		'yoz-save-minus': '&#xebbe;',
		'yoz-save-remove': '&#xebbf;',
		'yoz-scan': '&#xebc0;',
		'yoz-scan-barcode': '&#xebc1;',
		'yoz-scanner': '&#xebc2;',
		'yoz-scanning': '&#xebc3;',
		'yoz-scissor': '&#xebc4;',
		'yoz-scissor-1': '&#xebc5;',
		'yoz-screenmirroring': '&#xebc6;',
		'yoz-scroll': '&#xebc7;',
		'yoz-search-favorite': '&#xebc8;',
		'yoz-search-favorite-1': '&#xebc9;',
		'yoz-search-normal': '&#xebca;',
		'yoz-search-normal-1': '&#xebcb;',
		'yoz-search-status': '&#xebcc;',
		'yoz-search-status-1': '&#xebcd;',
		'yoz-search-zoom-in': '&#xebce;',
		'yoz-search-zoom-in-1': '&#xebcf;',
		'yoz-search-zoom-out': '&#xebd0;',
		'yoz-search-zoom-out-1': '&#xebd1;',
		'yoz-security': '&#xebd2;',
		'yoz-security-card': '&#xebd3;',
		'yoz-security-safe': '&#xebd4;',
		'yoz-security-time': '&#xebd5;',
		'yoz-security-user': '&#xebd6;',
		'yoz-send': '&#xebd7;',
		'yoz-send-1': '&#xebd8;',
		'yoz-send-2': '&#xebd9;',
		'yoz-send-sqaure-2': '&#xebda;',
		'yoz-send-square': '&#xebdb;',
		'yoz-setting': '&#xebdc;',
		'yoz-setting-2': '&#xebdd;',
		'yoz-setting-3': '&#xebde;',
		'yoz-setting-4': '&#xebdf;',
		'yoz-setting-5': '&#xebe0;',
		'yoz-settings': '&#xebe1;',
		'yoz-shapes': '&#xebe2;',
		'yoz-shapes-1': '&#xebe3;',
		'yoz-share': '&#xebe4;',
		'yoz-shield': '&#xebe5;',
		'yoz-shield-cross': '&#xebe6;',
		'yoz-shield-search': '&#xebe7;',
		'yoz-shield-slash': '&#xebe8;',
		'yoz-shield-tick': '&#xebe9;',
		'yoz-ship': '&#xebea;',
		'yoz-shop': '&#xebeb;',
		'yoz-shop-add': '&#xebec;',
		'yoz-shopping-bag': '&#xebed;',
		'yoz-shopping-cart': '&#xebee;',
		'yoz-shop-remove': '&#xebef;',
		'yoz-shuffle': '&#xebf0;',
		'yoz-sidebar-bottom': '&#xebf1;',
		'yoz-sidebar-left': '&#xebf2;',
		'yoz-sidebar-right': '&#xebf3;',
		'yoz-sidebar-top': '&#xebf4;',
		'yoz-signpost': '&#xebf5;',
		'yoz-simcard': '&#xebf6;',
		'yoz-simcard-1': '&#xebf7;',
		'yoz-simcard-2': '&#xebf8;',
		'yoz-size': '&#xebf9;',
		'yoz-slash': '&#xebfa;',
		'yoz-slider': '&#xebfb;',
		'yoz-slider-horizontal': '&#xebfc;',
		'yoz-slider-horizontal-1': '&#xebfd;',
		'yoz-slider-vertical': '&#xebfe;',
		'yoz-slider-vertical-1': '&#xebff;',
		'yoz-smallcaps': '&#xec00;',
		'yoz-smart-car': '&#xec01;',
		'yoz-smart-home': '&#xec02;',
		'yoz-smileys': '&#xec03;',
		'yoz-sms': '&#xec04;',
		'yoz-sms-edit': '&#xec05;',
		'yoz-sms-notification': '&#xec06;',
		'yoz-sms-search': '&#xec07;',
		'yoz-sms-star': '&#xec08;',
		'yoz-sms-tracking': '&#xec09;',
		'yoz-sort': '&#xec0a;',
		'yoz-sound': '&#xec0b;',
		'yoz-speaker': '&#xec0c;',
		'yoz-speedometer': '&#xec0d;',
		'yoz-star': '&#xec0e;',
		'yoz-star-1': '&#xec0f;',
		'yoz-star-slash': '&#xec10;',
		'yoz-status': '&#xec11;',
		'yoz-status-up': '&#xec12;',
		'yoz-sticker': '&#xec13;',
		'yoz-stickynote': '&#xec14;',
		'yoz-stop': '&#xec15;',
		'yoz-stop-circle': '&#xec16;',
		'yoz-story': '&#xec17;',
		'yoz-strongbox': '&#xec18;',
		'yoz-strongbox-2': '&#xec19;',
		'yoz-subtitle': '&#xec1a;',
		'yoz-sun': '&#xec1b;',
		'yoz-sun-1': '&#xec1c;',
		'yoz-sun-fog': '&#xec1d;',
		'yoz-tag': '&#xec1e;',
		'yoz-tag-2': '&#xec1f;',
		'yoz-tag-cross': '&#xec20;',
		'yoz-tag-right': '&#xec21;',
		'yoz-tag-user': '&#xec22;',
		'yoz-task': '&#xec23;',
		'yoz-task-square': '&#xec24;',
		'yoz-teacher': '&#xec25;',
		'yoz-text': '&#xec26;',
		'yoz-textalign-center': '&#xec27;',
		'yoz-textalign-justifycenter': '&#xec28;',
		'yoz-textalign-justifyleft': '&#xec29;',
		'yoz-textalign-justifyright': '&#xec2a;',
		'yoz-textalign-left': '&#xec2b;',
		'yoz-textalign-right': '&#xec2c;',
		'yoz-text-block': '&#xec2d;',
		'yoz-text-bold': '&#xec2e;',
		'yoz-text-italic': '&#xec2f;',
		'yoz-text-underline': '&#xec30;',
		'yoz-tick-circle': '&#xec31;',
		'yoz-ticket': '&#xec32;',
		'yoz-ticket-2': '&#xec33;',
		'yoz-ticket-discount': '&#xec34;',
		'yoz-ticket-expired': '&#xec35;',
		'yoz-ticket-star': '&#xec36;',
		'yoz-tick-square': '&#xec37;',
		'yoz-timer': '&#xec38;',
		'yoz-timer-1': '&#xec39;',
		'yoz-timer-pause': '&#xec3a;',
		'yoz-timer-start': '&#xec3b;',
		'yoz-toggle-off': '&#xec3c;',
		'yoz-toggle-off-circle': '&#xec3d;',
		'yoz-toggle-on': '&#xec3e;',
		'yoz-toggle-on-circle': '&#xec3f;',
		'yoz-trade': '&#xec40;',
		'yoz-transaction-minus': '&#xec41;',
		'yoz-translate': '&#xec42;',
		'yoz-trash': '&#xec43;',
		'yoz-tree': '&#xec44;',
		'yoz-trend-down': '&#xec45;',
		'yoz-trend-up': '&#xec46;',
		'yoz-triangle': '&#xec47;',
		'yoz-truck': '&#xec48;',
		'yoz-truck-fast': '&#xec49;',
		'yoz-truck-remove': '&#xec4a;',
		'yoz-truck-tick': '&#xec4b;',
		'yoz-truck-time': '&#xec4c;',
		'yoz-trush-square': '&#xec4d;',
		'yoz-undo': '&#xec4e;',
		'yoz-unlimited': '&#xec4f;',
		'yoz-unlock': '&#xec50;',
		'yoz-user': '&#xec51;',
		'yoz-user-add': '&#xec52;',
		'yoz-user-cirlce-add': '&#xec53;',
		'yoz-user-edit': '&#xec54;',
		'yoz-user-minus': '&#xec55;',
		'yoz-user-octagon': '&#xec56;',
		'yoz-user-remove': '&#xec57;',
		'yoz-user-search': '&#xec58;',
		'yoz-user-square': '&#xec59;',
		'yoz-user-tag': '&#xec5a;',
		'yoz-user-tick': '&#xec5b;',
		'yoz-verify': '&#xec5c;',
		'yoz-video': '&#xec5d;',
		'yoz-video-add': '&#xec5e;',
		'yoz-video-circle': '&#xec5f;',
		'yoz-video-horizontal': '&#xec60;',
		'yoz-video-octagon': '&#xec61;',
		'yoz-video-play': '&#xec62;',
		'yoz-video-remove': '&#xec63;',
		'yoz-video-slash': '&#xec64;',
		'yoz-video-square': '&#xec65;',
		'yoz-video-tick': '&#xec66;',
		'yoz-video-time': '&#xec67;',
		'yoz-video-vertical': '&#xec68;',
		'yoz-voice-cricle': '&#xec69;',
		'yoz-voice-square': '&#xec6a;',
		'yoz-volume-cross': '&#xec6b;',
		'yoz-volume-high': '&#xec6c;',
		'yoz-volume-low': '&#xec6d;',
		'yoz-volume-low-1': '&#xec6e;',
		'yoz-volume-mute': '&#xec6f;',
		'yoz-volume-slash': '&#xec70;',
		'yoz-volume-up': '&#xec71;',
		'yoz-wallet': '&#xec72;',
		'yoz-wallet-1': '&#xec73;',
		'yoz-wallet-2': '&#xec74;',
		'yoz-wallet-3': '&#xec75;',
		'yoz-wallet-add': '&#xec76;',
		'yoz-wallet-add-1': '&#xec77;',
		'yoz-wallet-check': '&#xec78;',
		'yoz-wallet-minus': '&#xec79;',
		'yoz-wallet-money': '&#xec7a;',
		'yoz-wallet-remove': '&#xec7b;',
		'yoz-wallet-search': '&#xec7c;',
		'yoz-warning-2': '&#xec7d;',
		'yoz-watch': '&#xec7e;',
		'yoz-watch-status': '&#xec7f;',
		'yoz-weight': '&#xec80;',
		'yoz-weight-1': '&#xec81;',
		'yoz-wifi': '&#xec82;',
		'yoz-wifi-square': '&#xec83;',
		'yoz-wind': '&#xec84;',
		'yoz-wind-2': '&#xec85;',
		'yoz-woman': '&#xec86;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/yoz-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
