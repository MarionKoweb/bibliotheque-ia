/*! Bouton « Installer la Bibliothèque IA » — Koweb
    S'affiche dans <div id="koweb-installer"></div>.
    Réglages, sur cette div : data-icone="blanc" | "lilas" | "violet" ; data-nom="Bibliothèque IA".
    Les tutos animés sont dans tutos-installation.html, à côté de ce fichier.
    © Agence Digitale Koweb — tous droits réservés. */
(function(){
  /* où poser le bouton : dans <div id="koweb-installer">, sinon juste à la place de ce script */
  var moi=document.currentScript, HOTE=document.getElementById("koweb-installer");
  if(!HOTE){ HOTE=document.createElement("div"); HOTE.id="koweb-installer"; if(moi&&moi.parentNode) moi.parentNode.insertBefore(HOTE,moi); else document.body.appendChild(HOTE); }
  if(HOTE.__kwb) return; HOTE.__kwb=1;

  /* le dossier où se trouvent ce fichier et les tutos */
  var BASE=(moi&&moi.src)?moi.src.split("#")[0].split("?")[0].replace(/[^\/]*$/,""):"https://marionkoweb.github.io/bibliotheque-ia/";

  var st=document.createElement("style"); st.textContent=[
  ".kwb-inst{",
  "  /* ================== ICI : TES RÉGLAGES ================== */",
  "  --couleur:#6926F1;   /* ICI : la couleur du bouton */",
  "  --texte:#ffffff;     /* ICI : la couleur du texte du bouton */",
  "  /* ======================================================== */",
  "  display:flex;flex-direction:column;align-items:center;gap:14px;padding:18px 0;",
  "  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;text-align:center}",
  ".kwb-inst *{box-sizing:border-box}",
  ".kwb-inst-btn{display:inline-flex;align-items:center;gap:10px;border:0;cursor:pointer;",
  "  background:var(--couleur);color:var(--texte);border-radius:999px;padding:14px 26px;",
  "  font-weight:700;font-size:16px;line-height:1.2;font-family:inherit;box-shadow:0 10px 24px -10px var(--couleur);",
  "  transition:transform .2s ease,box-shadow .2s ease}",
  ".kwb-inst-btn:hover{transform:translateY(-2px)}",
  ".kwb-inst-btn svg{width:22px;height:22px;flex:none}",
  ".kwb-inst-aide{max-width:520px;width:100%;padding:16px 20px;border:1px solid #E2D3FB;background:#F3ECFE;",
  "  border-radius:14px;color:#3F2A78;font-size:15px;line-height:1.6;text-align:left}",
  ".kwb-inst-aide b{font-weight:700}",
  ".kwb-inst-ok{color:#2F7D4F;font-weight:600;font-size:15px}",
  /* les 3 tutos, en volets */
  ".kwb-inst-tutos{width:100%;display:flex;flex-direction:column;gap:12px;margin-top:8px;text-align:left}",
  ".kwb-inst-acc{width:100%;background:#fff;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,.08);overflow:hidden}",
  ".kwb-inst-acc>button{all:unset;box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;",
  "  padding:16px 18px;cursor:pointer;font:600 17px/1.3 Poppins,-apple-system,\"Segoe UI\",Roboto,Arial,sans-serif;color:#16181F}",
  ".kwb-inst-acc>button:focus-visible{outline:2px solid var(--couleur);outline-offset:-2px;border-radius:6px}",
  ".kwb-inst-nom{display:flex;align-items:center;gap:12px}",
  ".kwb-inst-nom img{width:24px;height:24px;flex:none;display:block}",
  ".kwb-inst-ch{width:18px;height:18px;flex:none;border-radius:50%;background:#8A55F0;display:flex;align-items:center;justify-content:center;transition:transform .25s}",
  ".kwb-inst-ch svg{width:10px;height:10px;display:block}",
  ".kwb-inst-acc.ouvert .kwb-inst-ch{transform:rotate(180deg)}",
  ".kwb-inst-acc iframe{display:block;width:100%;height:560px;border:0;border-top:1px solid #EFEAF7;background:#fff}",
  ".kwb-inst[hidden],.kwb-inst-btn[hidden],.kwb-inst-aide[hidden],.kwb-inst-ok[hidden],.kwb-inst-tutos[hidden]{display:none!important}"
  ].join("\n"); (document.head||document.documentElement).appendChild(st);

  var CHEV='<span class="kwb-inst-ch"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 6.5l3-3 3 3" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  /* les logos des navigateurs */
  var LOGO={"chrome": "data:image/png;base64,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", "edge": "data:image/png;base64,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", "safari": "data:image/png;base64,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"};
  function volet(k,titre){ return '<div class="kwb-inst-acc" data-k="'+k+'"><button type="button" aria-expanded="false"><span class="kwb-inst-nom"><img src="'+LOGO[k]+'" alt="" width="24" height="24">'+titre+'</span>'+CHEV+'</button></div>'; }
  HOTE.innerHTML='<div class="kwb-inst" id="kwb-inst" hidden>'+
    '<button type="button" class="kwb-inst-btn" id="kwb-inst-btn" hidden>'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4M12 7.5v6M9.5 11l2.5 2.5 2.5-2.5"/></svg>'+
      /* ICI : le texte du bouton */
      '<span>Installer la Bibliothèque IA sur mon ordinateur</span>'+
    '</button>'+
    '<div class="kwb-inst-aide" id="kwb-inst-aide" hidden></div>'+
    '<div class="kwb-inst-ok" id="kwb-inst-ok" hidden>✓ C’est installé : retrouve la Bibliothèque IA sur ton ordinateur.</div>'+
    '<div class="kwb-inst-tutos" id="kwb-inst-tutos">'+
      volet("chrome","Installer avec Google Chrome")+
      volet("edge","Installer avec Microsoft Edge")+
      volet("safari","Installer avec Safari (Mac)")+
    '</div>'+
  '</div>';

  /* ================== ICI : TES RÉGLAGES ================== */
  var NOM=(HOTE.getAttribute("data-nom")||"Bibliothèque IA");
  var ICONE=(HOTE.getAttribute("data-icone")||"violet").toLowerCase();
  /* ======================================================== */

  var boite=document.getElementById("kwb-inst"), btn=document.getElementById("kwb-inst-btn"),
      aide=document.getElementById("kwb-inst-aide"), ok=document.getElementById("kwb-inst-ok"),
      tutos=document.getElementById("kwb-inst-tutos");
  if(!boite) return;

  /* la page qui deviendra l'application : la leçon de la bibliothèque */
  var T=window;
  try{ if(window.top && window.top.document) T=window.top; }catch(e){ T=window; }

  /* déjà dans l'application : on ne montre rien */
  function dansApp(w){ try{ return w.matchMedia("(display-mode: standalone)").matches || w.matchMedia("(display-mode: window-controls-overlay)").matches || w.navigator.standalone===true; }catch(e){ return false; } }
  if(dansApp(T)||dansApp(window)) return;

  var ua=navigator.userAgent||"";
  var edge=/Edg\//.test(ua);
  var chromium=!!(window.chrome || edge) && !/OPR\//.test(ua);
  var safari=/Safari\//.test(ua) && !/Chrome\/|Chromium\/|Edg\//.test(ua);
  var mac=/Mac OS X|Macintosh/.test(ua);

  var AIDE_AUTRE='<b>Ton navigateur ne sait pas installer d’application.</b><br>Ouvre cette page dans <b>Chrome</b> ou <b>Microsoft Edge</b>, puis clique sur ce bouton.';

  /* les volets : le tuto ne se charge qu'à l'ouverture */
  var volets=tutos.querySelectorAll(".kwb-inst-acc");
  function ouvre(v,etat){
    var b=v.querySelector("button"), f=v.querySelector("iframe");
    if(etat===undefined) etat=!f;
    if(!etat){ if(f) f.parentNode.removeChild(f); v.classList.remove("ouvert"); b.setAttribute("aria-expanded","false"); return; }
    if(!f){ f=document.createElement("iframe"); f.title=b.textContent; f.loading="lazy"; f.src=BASE+"tutos-installation.html#"+v.getAttribute("data-k"); v.appendChild(f); }
    v.classList.add("ouvert"); b.setAttribute("aria-expanded","true");
  }
  for(var i=0;i<volets.length;i++) (function(v){ v.querySelector("button").addEventListener("click",function(){ ouvre(v); }); })(volets[i]);
  /* chaque tuto donne sa hauteur, le volet s'ajuste */
  window.addEventListener("message",function(e){
    var d=e.data; if(!d || typeof d.kwbTuto!=="string" || !d.h) return;
    var fs=tutos.querySelectorAll("iframe");
    for(var j=0;j<fs.length;j++) if(fs[j].contentWindow===e.source) fs[j].style.height=Math.min(Math.max(d.h,200),1200)+"px";
  });
  function montreTuto(k){
    var v=tutos.querySelector('.kwb-inst-acc[data-k="'+k+'"]'); if(!v) return;
    ouvre(v,true); try{ v.scrollIntoView({behavior:"smooth",block:"start"}); }catch(e){}
  }

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
  function prete(){ evt=T.__kwbEvt; btn.hidden=false; }
  function fini(){ btn.hidden=true; aide.hidden=true; tutos.hidden=true; ok.hidden=false; }

  /* les volets sont toujours là ; le bouton :
     - Chrome / Edge : seulement quand le navigateur propose l'installation
     - Safari, Firefox… : toujours, il ouvre le bon tuto ou explique quoi faire */
  boite.hidden=false;
  if(!chromium) btn.hidden=false;

  btn.addEventListener("click",function(){
    evt=evt||T.__kwbEvt;
    if(evt){
      evt.prompt();
      var r=evt.userChoice; T.__kwbEvt=null; evt=null;
      if(r && r.then) r.then(function(c){ if(c && c.outcome==="accepted") fini(); });
      return;
    }
    if(safari && mac) montreTuto("safari");
    else if(chromium) montreTuto(edge?"edge":"chrome");
    else { aide.innerHTML=AIDE_AUTRE; aide.hidden=false; }
  });
})();
