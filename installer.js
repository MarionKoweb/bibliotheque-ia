/*! Bouton « Installer la Bibliothèque IA » — Koweb
    S'affiche dans <div id="koweb-installer"></div>.
    Réglages, sur cette div : data-icone="blanc" | "lilas" | "violet" ; data-nom="Bibliothèque IA".
    © Agence Digitale Koweb — tous droits réservés. */
(function(){
  /* où poser le bouton : dans <div id="koweb-installer">, sinon juste à la place de ce script */
  var moi=document.currentScript, HOTE=document.getElementById("koweb-installer");
  if(!HOTE){ HOTE=document.createElement("div"); HOTE.id="koweb-installer"; if(moi&&moi.parentNode) moi.parentNode.insertBefore(HOTE,moi); else document.body.appendChild(HOTE); }
  if(HOTE.__kwb) return; HOTE.__kwb=1;
  var st=document.createElement("style"); st.textContent="\n.kwb-inst{\n  /* ================== ICI : TES RÉGLAGES ================== */\n  --couleur:#6926F1;   /* ICI : la couleur du bouton */\n  --texte:#ffffff;     /* ICI : la couleur du texte du bouton */\n  /* ======================================================== */\n  display:flex;flex-direction:column;align-items:center;gap:14px;padding:18px 16px;\n  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;text-align:center}\n.kwb-inst *{box-sizing:border-box}\n.kwb-inst-btn{display:inline-flex;align-items:center;gap:10px;border:0;cursor:pointer;\n  background:var(--couleur);color:var(--texte);border-radius:999px;padding:14px 26px;\n  font-weight:700;font-size:16px;line-height:1.2;font-family:inherit;box-shadow:0 10px 24px -10px var(--couleur);\n  transition:transform .2s ease,box-shadow .2s ease}\n.kwb-inst-btn:hover{transform:translateY(-2px)}\n.kwb-inst-btn svg{width:22px;height:22px;flex:none}\n.kwb-inst-aide{max-width:520px;width:100%;padding:16px 20px;border:1px solid #E2D3FB;background:#F3ECFE;\n  border-radius:14px;color:#3F2A78;font-size:15px;line-height:1.6;text-align:left}\n.kwb-inst-aide b{font-weight:700}\n.kwb-inst-ok{color:#2F7D4F;font-weight:600;font-size:15px}\n.kwb-inst[hidden],.kwb-inst-aide[hidden],.kwb-inst-ok[hidden]{display:none!important}\n"; (document.head||document.documentElement).appendChild(st);
  HOTE.innerHTML="<div class=\"kwb-inst\" id=\"kwb-inst\" hidden>\n  <button type=\"button\" class=\"kwb-inst-btn\" id=\"kwb-inst-btn\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"2.5\" y=\"4\" width=\"19\" height=\"13\" rx=\"2\"/><path d=\"M8 21h8M12 17v4M12 7.5v6M9.5 11l2.5 2.5 2.5-2.5\"/></svg>\n    <!-- ICI : le texte du bouton -->\n    <span>Installer la Bibliothèque IA sur mon ordinateur</span>\n  </button>\n  <div class=\"kwb-inst-aide\" id=\"kwb-inst-aide\" hidden></div>\n  <div class=\"kwb-inst-ok\" id=\"kwb-inst-ok\" hidden>✓ C’est installé : retrouve la Bibliothèque IA sur ton ordinateur.</div>\n</div>";

  /* ================== ICI : TES RÉGLAGES ================== */
  var NOM=(HOTE.getAttribute("data-nom")||"Bibliothèque IA");
  var ICONE=(HOTE.getAttribute("data-icone")||"violet").toLowerCase();
  /* ======================================================== */

  var boite=document.getElementById("kwb-inst"), btn=document.getElementById("kwb-inst-btn"),
      aide=document.getElementById("kwb-inst-aide"), ok=document.getElementById("kwb-inst-ok");
  if(!boite) return;

  /* la page qui deviendra l'application : la leçon de la bibliothèque */
  var T=window;
  try{ if(window.top && window.top.document) T=window.top; }catch(e){ T=window; }

  /* déjà dans l'application : on ne montre rien */
  function dansApp(w){ try{ return w.matchMedia("(display-mode: standalone)").matches || w.matchMedia("(display-mode: window-controls-overlay)").matches || w.navigator.standalone===true; }catch(e){ return false; } }
  if(dansApp(T)||dansApp(window)) return;

  var ua=navigator.userAgent||"";
  var chromium=!!(window.chrome || /Edg\//.test(ua)) && !/OPR\//.test(ua);
  var safari=/Safari\//.test(ua) && !/Chrome\/|Chromium\/|Edg\//.test(ua);
  var mac=/Mac OS X|Macintosh/.test(ua);

  function montreAide(html){ aide.innerHTML=html; aide.hidden=false; }
  var AIDE_SAFARI='<b>Sur Safari</b><br>1. Ouvre le menu <b>Fichier</b>, en haut de l’écran.<br>2. Clique sur <b>Ajouter au Dock</b>.<br>3. Valide : l’icône de la Bibliothèque IA arrive dans ton Dock.';
  var AIDE_AUTRE='<b>Ton navigateur ne sait pas installer d’application.</b><br>Ouvre cette page dans <b>Chrome</b> ou <b>Microsoft Edge</b>, puis clique sur ce bouton.';
  var AIDE_MENU='<b>Dans Chrome</b> : les 3 petits points en haut à droite, puis <b>Enregistrer et partager</b>, puis <b>Installer la page en tant qu’appli</b>.<br><b>Dans Edge</b> : les 3 petits points, puis <b>Outils supplémentaires</b>, <b>Applications</b>, <b>Installer ce site en tant qu’application</b>.';

  /* l'icône : la tête de Kowi, dessinée ici même */
  var C={blanc:["#ffffff","#6926f1","#ffffff","#e7cffa"],lilas:["#E7CFFA","#6926f1","#ffffff","#ffffff"],violet:["#6926F1","#ffffff","#6926f1","#e7cffa"]}[ICONE]||["#6926F1","#ffffff","#6926f1","#e7cffa"];
  function icone(taille){
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+taille+'" height="'+taille+'" viewBox="0 0 32 32">'+
      '<rect width="32" height="32" fill="'+C[0]+'"/><g transform="translate(4.6 4.6) scale(.71)">'+
      '<rect x="6" y="11" width="20" height="15" rx="6" fill="'+C[1]+'"/><path d="M16 5v5" stroke="'+C[3]+'" stroke-width="2.4" stroke-linecap="round"/>'+
      '<circle cx="16" cy="4.4" r="2.3" fill="'+C[3]+'"/><circle cx="12.3" cy="18" r="2.3" fill="'+C[2]+'"/><circle cx="19.7" cy="18" r="2.3" fill="'+C[2]+'"/>'+
      '<path d="M13.4 22.4c1.6 1.1 3.6 1.1 5.2 0" stroke="'+C[2]+'" stroke-width="1.8" stroke-linecap="round"/>'+
      '<rect x="2.6" y="15.4" width="3.2" height="6" rx="1.6" fill="'+C[3]+'"/><rect x="26.2" y="15.4" width="3.2" height="6" rx="1.6" fill="'+C[3]+'"/></g></svg>';
    return new Promise(function(ok){
      var im=new Image();
      im.onload=function(){ try{ var c=document.createElement("canvas"); c.width=c.height=taille; c.getContext("2d").drawImage(im,0,0,taille,taille); ok(c.toDataURL("image/png")); }catch(e){ ok(""); } };
      im.onerror=function(){ ok(""); };
      im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
    });
  }

  /* la carte d'identité de l'application, posée sur la page (une seule fois) */
  var evt=null;
  if(chromium){
    if(!T.__kwbInstalle){
      T.__kwbInstalle=true;
      T.addEventListener("beforeinstallprompt",function(e){ e.preventDefault(); T.__kwbEvt=e; prete(); });
      T.addEventListener("appinstalled",function(){ T.__kwbEvt=null; fini(); });
      Promise.all([icone(192),icone(512)]).then(function(ics){
        var adr=String(T.location.href).split("#")[0];
        var m={name:NOM,short_name:NOM,start_url:adr,scope:T.location.origin+"/",display:"standalone",
               background_color:"#ffffff",theme_color:"#6926F1",icons:[]};
        if(ics[0]) m.icons.push({src:ics[0],sizes:"192x192",type:"image/png",purpose:"any"});
        if(ics[1]) m.icons.push({src:ics[1],sizes:"512x512",type:"image/png",purpose:"any"});
        var vieux=T.document.querySelectorAll('link[rel="manifest"]');
        for(var i=0;i<vieux.length;i++) vieux[i].parentNode.removeChild(vieux[i]);
        var l=T.document.createElement("link"); l.rel="manifest";
        l.href=URL.createObjectURL(new Blob([JSON.stringify(m)],{type:"application/manifest+json"}));
        T.document.head.appendChild(l);
      });
    } else if(T.__kwbEvt){ prete(); }
  }
  function prete(){ evt=T.__kwbEvt; boite.hidden=false; }
  function fini(){ btn.hidden=true; aide.hidden=true; ok.hidden=false; boite.hidden=false; }

  if(chromium){
    /* pas de proposition du navigateur au bout de quelques secondes :
       l'application est déjà installée sur cet ordinateur, on ne montre rien */
  } else {
    boite.hidden=false;   /* Safari, Firefox : le bouton montre les étapes */
  }

  btn.addEventListener("click",function(){
    evt=evt||T.__kwbEvt;
    if(evt){
      evt.prompt();
      var r=evt.userChoice; T.__kwbEvt=null; evt=null;
      if(r && r.then) r.then(function(c){ if(c && c.outcome==="accepted") fini(); });
      return;
    }
    if(safari && mac) montreAide(AIDE_SAFARI);
    else if(chromium) montreAide(AIDE_MENU);
    else montreAide(AIDE_AUTRE);
  });
})();
