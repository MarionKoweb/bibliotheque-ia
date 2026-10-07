/*! Bibliothèque Koweb — blocs pour Système.io
    Ce fichier s’affiche dans <div id="koweb-bibliotheque"></div>.
    Ne le modifie pas à la main : il est régénéré à chaque mise à jour. */
(function(){
  function demarrer(){
    var RACINE=document.getElementById("koweb-bibliotheque");
    if(!RACINE || RACINE.getAttribute("data-kwb-pret")) return;
    RACINE.setAttribute("data-kwb-pret","1");
    var LIEN_ASSISTANT=RACINE.getAttribute("data-assistant")||"";
    var st=document.createElement("style");
    st.textContent="\n#koweb-bibliotheque{\n  --kw-fond:#F4F4FB;--kw-surface:#FFFFFF;--kw-surface-2:#F7F7FC;--kw-encre:#1B1E2B;\n  --kw-gris:#5E6272;--kw-ligne:#DCDCEA;--kw-ligne-2:#E9E9F3;--kw-accent:#6566D6;--kw-accent-doux:#C3C4EE;\n  --kw-accent-txt:#FFFFFF;--kw-sombre:#11141B;\n  --kw-ombre:0 1px 2px rgba(27,30,43,.05),0 12px 28px -18px rgba(27,30,43,.35);\n  display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;color:var(--kw-encre);line-height:1.6;\n  text-align:left;padding:8px 0 24px\n}\n#koweb-bibliotheque, #koweb-bibliotheque *{box-sizing:border-box}\n#koweb-bibliotheque .section-head h2, #koweb-bibliotheque .card-head h3, #koweb-bibliotheque .card-head p, #koweb-bibliotheque .kwb-panel h2, #koweb-bibliotheque .kwb-note p{margin:0;padding:0;text-transform:none;letter-spacing:normal}\n#koweb-bibliotheque .btn, #koweb-bibliotheque .kwb-reset{font-family:inherit;text-transform:none;letter-spacing:normal;\n  box-shadow:none;min-height:0;line-height:1}\n#koweb-bibliotheque .kwb-panel{background:var(--kw-surface);border:1px solid var(--kw-ligne);\n  border-radius:14px;padding:18px 20px;box-shadow:var(--kw-ombre);\n  display:flex;flex-wrap:wrap;gap:20px;align-items:center}\n#koweb-bibliotheque .kwb-panel h2{font-size:17px;font-weight:700;color:var(--kw-encre);\n  flex:1 1 220px;line-height:1.35}\n#koweb-bibliotheque .kwb-panel h2 small{display:block;font-weight:400;font-size:14px;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-swatch{display:flex;align-items:center;gap:10px}\n#koweb-bibliotheque .kwb-swatch label{font-size:14px;color:var(--kw-gris);font-weight:600;margin:0}\n#koweb-bibliotheque .kwb-swatch input[type=color]{width:44px;height:36px;padding:0;margin:0;\n  border:1px solid var(--kw-ligne);border-radius:9px;background:var(--kw-surface);cursor:pointer}\n#koweb-bibliotheque .kwb-reset{border:1px solid var(--kw-ligne);background:var(--kw-surface-2);\n  color:var(--kw-gris);font-size:14px;font-weight:600;padding:10px 14px;\n  border-radius:9px;cursor:pointer}\n#koweb-bibliotheque .kwb-reset:hover{color:var(--kw-encre);border-color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-seg{display:inline-flex;border:1px solid var(--kw-ligne);border-radius:9px;overflow:hidden;background:var(--kw-surface-2)}\n#koweb-bibliotheque .kwb-seg button{border:0;margin:0;background:transparent;color:var(--kw-gris);font-family:inherit;font-size:14px;font-weight:600;line-height:1;text-transform:none;letter-spacing:normal;box-shadow:none;min-height:0;border-radius:0;padding:10px 12px;cursor:pointer;white-space:nowrap}\n#koweb-bibliotheque .kwb-seg button[aria-pressed=true]{background:var(--kw-accent);color:var(--kw-accent-txt)}\n#koweb-bibliotheque .stage.mobile{display:block;padding:20px 0;background:var(--kw-surface-2)}\n#koweb-bibliotheque .stage.mobile .telbox{overflow:hidden}\n#koweb-bibliotheque .stage.mobile .tel{position:relative;width:411px;margin:0;padding:42px 18px 24px;border-radius:44px;background:#15171E;transform-origin:top left;box-shadow:inset 0 0 0 2px #2C313D, 0 26px 50px -26px rgba(0,0,0,.6)}\n#koweb-bibliotheque .stage.mobile .tel:before{content:\"\";position:absolute;left:50%;top:16px;width:88px;height:18px;margin-left:-44px;border-radius:999px;background:#0A0C11}\n#koweb-bibliotheque .stage.mobile .tel:after{content:\"\";display:block;width:116px;height:5px;margin:14px auto 0;border-radius:999px;background:#3A4150}\n#koweb-bibliotheque .stage.mobile iframe{display:block;width:375px;height:320px;border:0;border-radius:26px;background:#fff}\n#koweb-bibliotheque .kwb-logo{margin:0 0 4px}\n#koweb-bibliotheque .kwb-logo img{display:block;width:100%;max-width:300px;height:auto;margin:0 auto}\n#koweb-bibliotheque .kwb-maj{margin:0 0 10px;text-align:center;font-size:13px;line-height:1.5;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-maj button{margin:0;padding:0;min-height:0;box-shadow:none;border:0;background:transparent;color:var(--kw-accent);font-family:inherit;font-size:13px;font-weight:600;line-height:1.5;letter-spacing:normal;text-transform:none;cursor:pointer;text-decoration:underline}\n#koweb-bibliotheque .kwb-news{margin:0 auto 14px;max-width:640px;padding:14px 18px;border:1px solid var(--kw-ligne);border-radius:12px;background:var(--kw-surface)}\n#koweb-bibliotheque .kwb-news ul{margin:0;padding-left:18px}\n#koweb-bibliotheque .kwb-news li{font-size:14px;color:var(--kw-encre);line-height:1.5;margin:0 0 6px}\n#koweb-bibliotheque .kwb-news-date{font-weight:700;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-bord{margin-top:18px;display:grid;gap:1px;background:var(--kw-ligne-2);border:1px solid var(--kw-ligne);border-radius:16px;overflow:hidden;box-shadow:var(--kw-ombre)}\n#koweb-bibliotheque .kwb-bord-g{background:var(--kw-surface);padding:15px 18px;display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center}\n#koweb-bibliotheque .kwb-bord-t{flex:0 0 118px;font-size:15px;font-weight:700;color:var(--kw-encre)}\n#koweb-bibliotheque .kwb-bord-l{flex:1 1 auto;display:flex;flex-wrap:wrap;gap:10px;align-items:center}\n#koweb-bibliotheque .kwb-bord-a{font-size:13px;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-bord select{font-family:inherit;font-size:14px;color:var(--kw-encre);background:var(--kw-surface-2);border:1px solid var(--kw-ligne);border-radius:10px;padding:11px 12px;cursor:pointer;margin:0}\n#koweb-bibliotheque .kwb-bord-l.polices{align-items:flex-start;gap:14px 18px}\n#koweb-bibliotheque .kwb-swatch.po{flex-direction:column;align-items:flex-start;gap:7px}\n#koweb-bibliotheque .kwb-swatch.po label{display:block;max-width:15ch;line-height:1.3;min-height:2.6em;white-space:normal;margin:0}\n#koweb-bibliotheque .kwb-po-champ{display:flex;align-items:center;gap:8px}\n#koweb-bibliotheque .kwb-po-champ select{max-width:170px}\n#koweb-bibliotheque .enreg{flex:none;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:999px;font-family:inherit;font-size:14px;font-weight:700;line-height:1;color:#15785A;background:#E4F6EE;border:1px solid #B6E3CF}\n#koweb-bibliotheque .enreg.flash{animation:kwb-enreg-pop .45s ease}\n@keyframes kwb-enreg-pop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.14)}100%{transform:scale(1);opacity:1}}\n@media (prefers-reduced-motion:reduce){ #koweb-bibliotheque .enreg.flash{animation:none} }\n#koweb-bibliotheque .kwb-seg-as button{font-weight:700}\n#koweb-bibliotheque .kwb-seg-as .as-claude{color:#C0613F}\n#koweb-bibliotheque .kwb-seg-as .as-chatgpt{color:#0D0D0D}\n#koweb-bibliotheque .kwb-seg-as .as-claude[aria-pressed=true]{background:#D97757;color:#fff}\n#koweb-bibliotheque .kwb-seg-as .as-chatgpt[aria-pressed=true]{background:#0D0D0D;color:#fff}\n#koweb-bibliotheque .kwb-verif{margin-top:0}\n#koweb-bibliotheque .kwb-verif-boite{margin-top:12px;display:grid;gap:8px;padding:16px;border:1px solid var(--kw-ligne);border-radius:12px;background:var(--kw-surface)}\n#koweb-bibliotheque .kwb-verif-boite label{font-size:12px;font-weight:700;color:var(--kw-gris);letter-spacing:.04em;text-transform:uppercase;margin:0}\n#koweb-bibliotheque .kwb-verif-boite textarea{width:100%;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;line-height:1.5;color:var(--kw-encre);background:var(--kw-surface-2);border:1px solid var(--kw-ligne);border-radius:10px;padding:10px 12px;resize:vertical;min-height:120px}\n#koweb-bibliotheque .kwb-barre{margin-top:38px;display:grid;gap:14px}\n#koweb-bibliotheque .kwb-champ{width:100%;max-width:560px;margin:0 auto}\n#koweb-bibliotheque .kwb-puces{justify-content:center}\n#koweb-bibliotheque .kwb-champ{position:relative;display:block}\n#koweb-bibliotheque .kwb-loupe{position:absolute;left:17px;top:50%;width:21px;height:21px;margin-top:-10.5px;color:var(--kw-accent);pointer-events:none}\n#koweb-bibliotheque .kwb-loupe svg{display:block;width:21px;height:21px}\n#koweb-bibliotheque .kwb-barre input[type=search]{display:block;width:100%;min-width:0;font-family:inherit;font-size:16.5px;font-weight:500;line-height:1.4;color:var(--kw-encre);background:var(--kw-surface);border:2px solid var(--kw-accent-doux);border-radius:14px;padding:15px 16px 15px 50px;margin:0;box-shadow:0 1px 2px rgba(27,30,43,.04),0 10px 24px -18px rgba(101,102,214,.45);-webkit-appearance:none;appearance:none}\n#koweb-bibliotheque .kwb-barre input[type=search]::placeholder{color:var(--kw-gris);opacity:1}\n#koweb-bibliotheque .kwb-barre input[type=search]:focus{outline:none;border-color:var(--kw-accent);box-shadow:0 0 0 4px rgba(101,102,214,.16)}\n#koweb-bibliotheque .kwb-essais{margin:0;text-align:center;font-size:13.5px;line-height:1.6;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-essais button{margin:0;padding:0 1px;min-height:0;box-shadow:none;border:0;background:transparent;color:var(--kw-accent);font-family:inherit;font-size:13.5px;font-weight:600;line-height:1.6;letter-spacing:normal;text-transform:none;cursor:pointer;text-decoration:underline}\n#koweb-bibliotheque .kwb-essais button:hover{color:var(--kw-encre)}\n#koweb-bibliotheque .kwb-puces{display:flex;flex-wrap:wrap;gap:8px}\n#koweb-bibliotheque .kwb-puce{border:1px solid var(--kw-ligne);background:var(--kw-surface);color:var(--kw-gris);font-family:inherit;font-size:13px;font-weight:600;line-height:1;text-transform:none;letter-spacing:normal;box-shadow:none;min-height:0;padding:10px 13px;border-radius:999px;cursor:pointer;white-space:nowrap;margin:0}\n#koweb-bibliotheque .kwb-puce[aria-pressed=true]{background:var(--kw-accent);color:var(--kw-accent-txt);border-color:transparent}\n#koweb-bibliotheque .kwb-rien{margin:36px 0;padding:22px;border:1px dashed var(--kw-ligne);border-radius:14px;text-align:center;color:var(--kw-gris);font-size:15px}\n#koweb-bibliotheque .card-tags{flex:none;display:flex;align-items:center;gap:7px}\n#koweb-bibliotheque .pastille-neuf{font-family:inherit;font-size:12px;font-weight:800;line-height:1;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#FF751F;padding:7px 10px;border-radius:7px}\n#koweb-bibliotheque .pastille-mod{font-family:inherit;font-size:11px;font-weight:700;line-height:1;letter-spacing:.06em;text-transform:uppercase;color:#15785A;background:#E4F6EE;border:1px solid #B6E3CF;padding:6px 8px;border-radius:7px}\n#koweb-bibliotheque .coeur{border:0;background:transparent;cursor:pointer;color:#E0245E;font-size:32px;line-height:1;padding:0;margin:0;min-height:0;box-shadow:none}\n#koweb-bibliotheque .kwb-puce[data-etape=favoris]{color:#E0245E;border-color:#F3C2D1}\n#koweb-bibliotheque .kwb-puce[data-etape=favoris][aria-pressed=true]{background:#E0245E;color:#fff;border-color:transparent}\n#koweb-bibliotheque .section-head{margin:48px 0 20px;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}\n#koweb-bibliotheque .section-head h2{font-size:26px;font-weight:800;color:var(--kw-encre);line-height:1.2}\n#koweb-bibliotheque .section-head span{font-size:14px;color:var(--kw-gris)}\n#koweb-bibliotheque .rule{height:1px;background:var(--kw-ligne);flex:1 1 60px;min-width:40px}\n#koweb-bibliotheque .grid{display:grid;gap:18px}\n#koweb-bibliotheque .grid.two{grid-template-columns:repeat(auto-fit,minmax(min(330px,100%),1fr))}\n#koweb-bibliotheque .card{min-width:0;background:var(--kw-surface);border:1px solid var(--kw-ligne);\n  border-radius:14px;overflow:hidden;box-shadow:var(--kw-ombre);\n  display:flex;flex-direction:column}\n#koweb-bibliotheque .card-head{padding:16px 18px 12px;display:flex;gap:12px;align-items:flex-start}\n#koweb-bibliotheque .card-head h3{font-size:18px;font-weight:700;color:var(--kw-encre);\n  margin:0 0 4px;line-height:1.25}\n#koweb-bibliotheque .card-head p{font-size:14.5px;color:var(--kw-gris);line-height:1.5}\n#koweb-bibliotheque .tag{flex:none;font:600 11px/1 ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;\n  letter-spacing:.04em;color:var(--kw-gris);background:var(--kw-surface-2);\n  border:1px solid var(--kw-ligne-2);padding:5px 8px;border-radius:6px;margin-top:2px}\n#koweb-bibliotheque .stage{border-top:1px solid var(--kw-ligne-2);border-bottom:1px solid var(--kw-ligne-2);\n  background:var(--kw-surface-2);transform:translateZ(0);position:relative;\n  overflow:hidden;min-height:130px;display:flex;flex-direction:column;justify-content:center}\n#koweb-bibliotheque .stage > *{min-width:0;max-width:100%}\n#koweb-bibliotheque .stage.dark{background:var(--kw-sombre)}\n#koweb-bibliotheque .stage.tall{min-height:210px}\n#koweb-bibliotheque .kwb-regl{padding:0 14px 16px;display:grid;gap:10px}\n#koweb-bibliotheque .kwb-regl-grille{display:grid;gap:10px 16px;grid-template-columns:repeat(auto-fit,minmax(min(210px,100%),1fr))}\n#koweb-bibliotheque .kwb-regl-champ{display:grid;gap:5px;min-width:0}\n#koweb-bibliotheque .kwb-regl-champ label{margin:0;font-size:12.5px;font-weight:700;line-height:1.3;color:var(--kw-gris);text-transform:none;letter-spacing:normal}\n#koweb-bibliotheque .kwb-regl-ligne{display:flex;align-items:center;gap:8px;min-width:0}\n#koweb-bibliotheque .kwb-regl-ligne input[type=range]{flex:1 1 auto;min-width:0;margin:0;padding:0;accent-color:var(--kw-accent)}\n#koweb-bibliotheque .kwb-regl-ligne input[type=color]{flex:none;width:42px;height:32px;padding:0;margin:0;border:1px solid var(--kw-ligne);border-radius:8px;background:var(--kw-surface);cursor:pointer}\n#koweb-bibliotheque .kwb-regl-val{flex:none;font-size:12.5px;color:var(--kw-gris);min-width:62px;text-align:right}\n#koweb-bibliotheque .kwb-regl input[type=text], #koweb-bibliotheque .kwb-regl select{width:100%;min-width:0;margin:0;font-family:inherit;font-size:13.5px;font-weight:500;line-height:1.4;color:var(--kw-encre);background:var(--kw-surface-2);border:1px solid var(--kw-ligne);border-radius:9px;padding:8px 10px}\n#koweb-bibliotheque .kwb-regl-titre{margin:4px 0 0;font-size:12.5px;font-weight:700;line-height:1.4;color:var(--kw-encre);letter-spacing:.04em;text-transform:uppercase}\n#koweb-bibliotheque .kwb-regl-textes{display:grid;gap:8px}\n#koweb-bibliotheque .kwb-regl-mini{flex:none;width:34px;height:34px;padding:0;margin:0;min-height:0;box-shadow:none;border:1px solid var(--kw-ligne);border-radius:8px;background:var(--kw-surface);color:var(--kw-gris);font-family:inherit;font-size:12.5px;font-weight:700;line-height:1;letter-spacing:normal;text-transform:none;cursor:pointer}\n#koweb-bibliotheque .kwb-regl-mini:hover{color:var(--kw-accent);border-color:var(--kw-accent)}\n#koweb-bibliotheque .kwb-regl-mini[aria-pressed=true]{background:var(--kw-accent);color:var(--kw-accent-txt);border-color:transparent}\n#koweb-bibliotheque .kwb-regl-pied{display:flex;gap:10px;align-items:center}\n#koweb-bibliotheque .card-foot{padding:10px 12px;display:flex;gap:6px;flex-wrap:wrap;align-items:center}\n#koweb-bibliotheque .btn{font-size:13px;font-weight:700;border-radius:8px;padding:7px 10px;white-space:nowrap;line-height:1.2;cursor:pointer;\n  border:1px solid transparent;transition:background .15s,border-color .15s,color .15s}\n#koweb-bibliotheque .btn-primary{background:var(--kw-accent);color:var(--kw-accent-txt)}\n#koweb-bibliotheque .btn-primary:hover{filter:brightness(1.08)}\n#koweb-bibliotheque .btn-ghost{background:transparent;color:var(--kw-gris);border-color:var(--kw-ligne)}\n#koweb-bibliotheque .btn-ghost:hover{color:var(--kw-encre);border-color:var(--kw-gris)}\n#koweb-bibliotheque .btn-ai{background:transparent;color:var(--kw-accent);border-color:var(--kw-accent)}\n#koweb-bibliotheque .btn-ai:hover{background:var(--kw-accent);color:var(--kw-accent-txt)}\n#koweb-bibliotheque .kwb-perso{padding:0 14px 14px;display:grid;gap:8px}\n#koweb-bibliotheque .kwb-perso-haut{margin-top:16px;padding:18px 20px;display:grid;gap:10px;background:var(--kw-surface);border:1px solid var(--kw-ligne);border-radius:16px;box-shadow:var(--kw-ombre)}\n#koweb-bibliotheque .kwb-perso-tete{display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap}\n#koweb-bibliotheque .kwb-perso-quoi{margin:0;font-size:13px;font-weight:700;color:var(--kw-gris);letter-spacing:.04em;text-transform:uppercase}\n#koweb-bibliotheque .kwb-perso-nom{display:block;margin-top:3px;font-size:19px;font-weight:800;letter-spacing:normal;text-transform:none;color:var(--kw-accent)}\n#koweb-bibliotheque .kwb-perso label, #koweb-bibliotheque .kwb-perso-haut label{font-size:12px;font-weight:700;color:var(--kw-gris);letter-spacing:.04em;text-transform:uppercase;margin:0}\n#koweb-bibliotheque .kwb-perso textarea, #koweb-bibliotheque .kwb-perso-haut textarea{width:100%;font-family:inherit;font-size:14.5px;line-height:1.5;color:var(--kw-encre);background:var(--kw-surface-2);border:1px solid var(--kw-ligne);border-radius:10px;padding:10px 12px;resize:vertical;min-height:80px}\n#koweb-bibliotheque .kwb-sugg-aide{margin:0;font-size:13.5px;line-height:1.5;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-sugg{display:flex;flex-wrap:wrap;gap:7px}\n#koweb-bibliotheque .kwb-sugg button{margin:0;min-height:0;box-shadow:none;letter-spacing:normal;text-transform:none;line-height:1;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--kw-encre);background:var(--kw-surface-2);border:1px dashed var(--kw-ligne);padding:9px 12px;border-radius:999px;cursor:pointer;white-space:nowrap}\n#koweb-bibliotheque .kwb-sugg button:hover{border-style:solid;border-color:var(--kw-accent);color:var(--kw-accent)}\n#koweb-bibliotheque .kwb-dem-boite{position:relative;display:block}\n#koweb-bibliotheque .kwb-dem-boite textarea{padding-bottom:50px}\n#koweb-bibliotheque .kwb-micro{position:absolute;right:10px;bottom:10px;width:38px;height:38px;padding:0;margin:0;min-height:0;box-shadow:none;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid var(--kw-ligne);background:var(--kw-surface);color:var(--kw-gris);cursor:pointer}\n#koweb-bibliotheque .kwb-micro svg{width:19px;height:19px;display:block}\n#koweb-bibliotheque .kwb-micro:hover{color:var(--kw-accent);border-color:var(--kw-accent)}\n#koweb-bibliotheque .kwb-micro.ecoute{background:#E0245E;border-color:#E0245E;color:#fff;animation:kwb-micro-pulse 1.2s infinite}\n@keyframes kwb-micro-pulse{0%,100%{box-shadow:0 0 0 0 rgba(224,36,94,.45)}50%{box-shadow:0 0 0 8px rgba(224,36,94,0)}}\n@media (prefers-reduced-motion:reduce){ #koweb-bibliotheque .kwb-micro.ecoute{animation:none} }\n#koweb-bibliotheque .kwb-info{padding:14px 16px;border-radius:10px;background:#FFF3EA;border:1px solid #FFC79E;border-left:6px solid #FF751F}\n#koweb-bibliotheque .kwb-info p{margin:0 0 7px;font-size:14.5px;line-height:1.5;color:var(--kw-encre)}\n#koweb-bibliotheque .kwb-info p:last-child{margin-bottom:0}\n#koweb-bibliotheque .kwb-info-titre{font-size:16px;font-weight:700;color:#D8580B}\n#koweb-bibliotheque .kwb-info-petit{font-size:13px;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-perso-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}\n#koweb-bibliotheque .kwb-go{text-decoration:none;display:inline-block}\n#koweb-bibliotheque .kwb-etat{font-size:13px;color:var(--kw-gris)}\n#koweb-bibliotheque [hidden]{display:none!important}\n#koweb-bibliotheque pre.code{margin:0;border:0;border-top:1px solid var(--kw-ligne-2);border-radius:0;\n  background:var(--kw-surface-2);padding:16px;overflow-x:auto;\n  font-family:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;\n  font-size:12.5px;line-height:1.65;color:var(--kw-encre);white-space:pre;\n  tab-size:2;max-height:420px}\n#koweb-bibliotheque pre.code .ici{display:inline-block;width:100%;color:#B3261E;font-weight:600;\n  background:rgba(179,38,30,.08)}\n#koweb-bibliotheque .kwb-note{margin-top:48px;padding-top:20px;border-top:1px solid var(--kw-ligne);\n  color:var(--kw-gris);font-size:14.5px}\n#koweb-bibliotheque .kwb-note p{margin:0 0 8px;max-width:72ch}\n#koweb-bibliotheque .kwb-note code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.92em}\n@media (max-width:520px){ #koweb-bibliotheque .kwb-panel{gap:14px} }\n";
    document.head.appendChild(st);
    RACINE.innerHTML="<div class=\"kwb-logo\"><img src=\"data:image/png;base64,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\" alt=\"La bibliothèque AI\" width=\"760\" height=\"381\"></div><p class=\"kwb-maj\" id=\"kwb-maj\"></p><div class=\"kwb-news\" id=\"kwb-news\" hidden></div><div class=\"kwb-bord\"><div class=\"kwb-bord-g\"><span class=\"kwb-bord-t\">Tes couleurs</span><div class=\"kwb-bord-l\"><div class=\"kwb-swatch\"><label for=\"kwb-c1\">Principale</label><input type=\"color\" id=\"kwb-c1\" value=\"#7D7EE1\"></div><div class=\"kwb-swatch\"><label for=\"kwb-c2\">Lumineuse</label><input type=\"color\" id=\"kwb-c2\" value=\"#C6BCFF\"></div><div class=\"kwb-seg\" role=\"group\" aria-label=\"Style de couleur\"><button type=\"button\" id=\"kwb-uni-off\" aria-pressed=\"true\">Dégradé</button><button type=\"button\" id=\"kwb-uni-on\" aria-pressed=\"false\">Une seule couleur</button></div><button class=\"kwb-reset\" id=\"kwb-reset\" type=\"button\">Rétablir</button></div></div><div class=\"kwb-bord-g\"><span class=\"kwb-bord-t\">Tes polices</span><div class=\"kwb-bord-l polices\"><div class=\"kwb-swatch po\"><label for=\"kwb-police-titre\">Titres</label><div class=\"kwb-po-champ\"><select id=\"kwb-police-titre\" aria-label=\"Police des titres\"><option value=\"\">Police de la page</option><option value=\"Poppins\">Poppins</option><option value=\"Montserrat\">Montserrat</option><option value=\"Inter\">Inter</option><option value=\"DM Sans\">DM Sans</option><option value=\"Lato\">Lato</option><option value=\"Raleway\">Raleway</option><option value=\"Karla\">Karla</option><option value=\"Playfair Display\">Playfair Display</option><option value=\"Fraunces\">Fraunces</option><option value=\"Lora\">Lora</option></select><span class=\"enreg\" id=\"kwb-enreg-titre\" title=\"Ta police est enregistrée\" aria-label=\"Enregistré\" hidden>&#10003;</span></div></div><div class=\"kwb-swatch po\"><label for=\"kwb-police-sous\">Sur-titres et sous-titres</label><div class=\"kwb-po-champ\"><select id=\"kwb-police-sous\" aria-label=\"Police des sur-titres et sous-titres\"><option value=\"\">Police de la page</option><option value=\"Poppins\">Poppins</option><option value=\"Montserrat\">Montserrat</option><option value=\"Inter\">Inter</option><option value=\"DM Sans\">DM Sans</option><option value=\"Lato\">Lato</option><option value=\"Raleway\">Raleway</option><option value=\"Karla\">Karla</option><option value=\"Playfair Display\">Playfair Display</option><option value=\"Fraunces\">Fraunces</option><option value=\"Lora\">Lora</option></select><span class=\"enreg\" id=\"kwb-enreg-sous\" title=\"Ta police est enregistrée\" aria-label=\"Enregistré\" hidden>&#10003;</span></div></div><div class=\"kwb-swatch po\"><label for=\"kwb-police-texte\">Textes et boutons</label><div class=\"kwb-po-champ\"><select id=\"kwb-police-texte\" aria-label=\"Police des textes et boutons\"><option value=\"\">Police de la page</option><option value=\"Poppins\">Poppins</option><option value=\"Montserrat\">Montserrat</option><option value=\"Inter\">Inter</option><option value=\"DM Sans\">DM Sans</option><option value=\"Lato\">Lato</option><option value=\"Raleway\">Raleway</option><option value=\"Karla\">Karla</option><option value=\"Playfair Display\">Playfair Display</option><option value=\"Fraunces\">Fraunces</option><option value=\"Lora\">Lora</option></select><span class=\"enreg\" id=\"kwb-enreg-texte\" title=\"Ta police est enregistrée\" aria-label=\"Enregistré\" hidden>&#10003;</span></div></div></div></div><div class=\"kwb-bord-g\"><span class=\"kwb-bord-t\">Ton assistant</span><div class=\"kwb-bord-l\"><div class=\"kwb-seg kwb-seg-as\" role=\"group\" aria-label=\"Assistant\"><button type=\"button\" id=\"kwb-as-claude\" class=\"as-claude\" aria-pressed=\"true\">Claude</button><button type=\"button\" id=\"kwb-as-chatgpt\" class=\"as-chatgpt\" aria-pressed=\"false\">ChatGPT</button></div></div></div><div class=\"kwb-bord-g\"><span class=\"kwb-bord-t\">Tes réglages</span><div class=\"kwb-bord-l\" id=\"kwb-bord-sauve\"></div></div><div class=\"kwb-bord-g\"><span class=\"kwb-bord-t\">Ton code</span><div class=\"kwb-bord-l\" id=\"kwb-bord-verif\"></div></div></div><div class=\"kwb-verif\"><button type=\"button\" class=\"kwb-reset\" id=\"kwb-verif-ouvre\">Vérifier mon code</button><div class=\"kwb-verif-boite\" id=\"kwb-verif-boite\" hidden><label for=\"kwb-verif-txt\">Colle ici le code que tu as modifié</label><textarea id=\"kwb-verif-txt\" placeholder=\"Colle le bloc entier, de la première ligne à la dernière\"></textarea><div class=\"kwb-perso-actions\"><a class=\"btn btn-primary kwb-go\" id=\"kwb-verif-go\" href=\"https://claude.ai/new\" target=\"_blank\" rel=\"noopener\">Faire vérifier</a><span class=\"kwb-etat\" id=\"kwb-verif-etat\"></span></div></div></div><div class=\"kwb-barre\"><div class=\"kwb-champ\"><span class=\"kwb-loupe\" aria-hidden=\"true\"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round'><circle cx='10.5' cy='10.5' r='6.5'></circle><line x1='15.6' y1='15.6' x2='21' y2='21'></line></svg></span><input type=\"search\" id=\"kwb-recherche\" placeholder=\"Chercher un bloc : bouton, témoignage, compte à rebours…\" aria-label=\"Chercher un bloc\"></div><p class=\"kwb-essais\" id=\"kwb-essais\"></p><div class=\"kwb-puces\" role=\"group\" aria-label=\"Filtrer par page\"><button type=\"button\" class=\"kwb-puce\" data-etape=\"tous\" aria-pressed=\"true\">Tous les blocs</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"capture\" aria-pressed=\"false\">Page de capture</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"vente\" aria-pressed=\"false\">Page de vente</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"paiement\" aria-pressed=\"false\">Paiement</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"merci\" aria-pressed=\"false\">Remerciement</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"membres\" aria-pressed=\"false\">Espace membres</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"favoris\" aria-pressed=\"false\">Mes favoris</button><button type=\"button\" class=\"kwb-puce\" data-etape=\"modifies\" aria-pressed=\"false\">Mes blocs réglés</button></div></div><section><div class=\"section-head\"><h2>Titres &amp; textes animés</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-textes\"></div></section><section><div class=\"section-head\"><h2>Boutons &amp; appels à l'action</h2><span></span><div class=\"rule\"></div></div><div class=\"grid two\" id=\"kwb-grid-cta\"></div></section><section><div class=\"section-head\"><h2>Preuve sociale</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-preuve\"></div></section><section><div class=\"section-head\"><h2>Bannières &amp; barres</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-ban\"></div></section><section><div class=\"section-head\"><h2>Vendre plus</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-vendre\"></div></section><section><div class=\"section-head\"><h2>Blocs de contenu</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-con\"></div></section><section><div class=\"section-head\"><h2>Capture, formation &amp; confiance</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-plus\"></div></section><section><div class=\"section-head\"><h2>Page de paiement</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-pay\"></div></section><section><div class=\"section-head\"><h2>Blocs promo</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-pro\"></div></section><section><div class=\"section-head\"><h2>Blocs sociaux</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-soc\"></div></section><section><div class=\"section-head\"><h2>Page de remerciement</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-mer\"></div></section><p class=\"kwb-rien\" id=\"kwb-rien-trouve\" hidden>Aucun bloc ne correspond. Essaie un autre mot, ou reviens à « Tous les blocs ».</p><div class=\"kwb-note\"><p><strong>Un seul bloc se superpose au contenu</strong> : la progression de lecture, un filet collé en haut de l’écran. Il reste dans le flux dans l’éditeur Système.io, sinon il recouvrirait le bouton Enregistrer.</p><p>Si tu insères deux fois le même bloc sur une page, garde un seul exemplaire de son <code>&lt;style&gt;</code> et de son <code>&lt;script&gt;</code>.</p></div>";
/* =========================================================
   Les blocs. Chaque entrée est le code exact que l'on copie.
   ========================================================= */
var D1 = "#7D7EE1", D2 = "#C6BCFF", D3 = "#9E9AEF";

var HERO = [
{
id:"aurora", name:"Héro aurora", tag:"CSS",
desc:"Des voiles de couleur qui dérivent lentement derrière le titre. Le fond premium par excellence, sans une seule image.",
code:
'<!-- Héro aurora -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-au{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#3B3A6B;    /* ICI : le fond, derrière les voiles de couleur */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --titre:44px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --taille:19px;     /* ICI : la taille du paragraphe */\n' +
'  --btn:18px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi du bouton */\n' +
'  --hauteur:78px;    /* ICI : la hauteur de la section, en haut et en bas */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est la couleur derrière les voiles. Garde-la foncée :\n' +
'     les voiles sont translucides et le texte est blanc par-dessus.\n' +
'     --txt est la couleur du texte et du fond du bouton.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre sur grand écran. Sur mobile il se réduit tout seul.\n' +
'     --taille : le paragraphe. --btn : le texte du bouton.\n' +
'     --arrondi : 999px = bouton tout rond, 14px = doux, 0 = carré.\n' +
'     --hauteur : la hauteur de la section, en haut et en bas.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --fond est trop clair pour du texte blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-au, .sio-au *{box-sizing:border-box}\n' +
'.sio-au{position:relative;overflow:hidden;isolation:isolate;\n' +
'  padding:var(--hauteur) 24px;text-align:center;font-family:var(--f);\n' +
'  background:var(--fond)}\n' +
'.sio-au-v{position:absolute;border-radius:50%;filter:blur(70px);opacity:.75;z-index:-1}\n' +
'.sio-au-v1{width:60%;padding-bottom:60%;left:-12%;top:-25%;background:var(--c1);\n' +
'  animation:sioAuA 17s ease-in-out infinite alternate}\n' +
'.sio-au-v2{width:55%;padding-bottom:55%;right:-10%;top:-15%;background:var(--c2);\n' +
'  animation:sioAuB 21s ease-in-out infinite alternate}\n' +
'.sio-au-v3{width:70%;padding-bottom:45%;left:15%;bottom:-40%;background:var(--c2d);\n' +
'  animation:sioAuC 19s ease-in-out infinite alternate}\n' +
'@keyframes sioAuA{to{transform:translate(18%,22%) scale(1.15)}}\n' +
'@keyframes sioAuB{to{transform:translate(-16%,26%) scale(1.1)}}\n' +
'@keyframes sioAuC{to{transform:translate(10%,-18%) scale(1.2)}}\n' +
'.sio-au em{display:inline-block;margin-bottom:18px;padding:8px 16px;border-radius:999px;\n' +
'  font-style:normal;font-size:14px;font-weight:700;letter-spacing:.12em;\n' +
'  text-transform:uppercase;color:var(--txt);background:rgba(255,255,255,.16)}\n' +
'.sio-au h1{margin:0 auto 18px;max-width:16ch;\n' +
'  font-size:clamp(32px,5.5vw,var(--titre));line-height:1.08;\n' +
'  font-weight:700;color:var(--txt)}\n' +
'.sio-au p{margin:0 auto 30px;max-width:54ch;font-size:var(--taille);line-height:1.6;\n' +
'  color:var(--txt);opacity:.88}\n' +
'.sio-au a{display:inline-block;padding:17px 36px;border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--fond);background:var(--txt);\n' +
'  font-weight:700;font-size:var(--btn);letter-spacing:.07em;text-transform:uppercase;\n' +
'  box-shadow:0 18px 40px -20px rgba(0,0,0,.6);transition:transform .22s ease}\n' +
'.sio-au a:hover{transform:translateY(-2px)}\n' +
'@media (prefers-reduced-motion:reduce){.sio-au-v{animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-au">\n' +
'  <div class="sio-au-v sio-au-v1"></div>\n' +
'  <div class="sio-au-v sio-au-v2"></div>\n' +
'  <div class="sio-au-v sio-au-v3"></div>\n' +
'  <em>Challenge de 5 jours</em>\n' +
'  <h1>Remplis ton programme sans repartir de zéro à chaque lancement</h1>\n' +
'  <p>Un tunnel que tu construis une fois, et que tu relances aussi souvent que tu veux.</p>\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a href="#">Je réserve ma place</a>\n' +
'</div>'
},
{
id:"typewriter", name:"Héro machine à écrire", tag:"JS",
desc:"La fin du titre s’écrit puis s’efface, en boucle. Le début reste lisible en permanence, même sans JavaScript.",
code:
'<!-- Héro machine à écrire -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-tw{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire, celle du curseur */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond1:#F6F4FF;   /* ICI : le haut du fond */\n' +
'  --fond2:#FFFFFF;   /* ICI : le bas du fond */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du paragraphe */\n' +
'  --titre:42px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --taille:19px;     /* ICI : la taille du paragraphe */\n' +
'  --btn:18px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi du bouton */\n' +
'  --hauteur:74px;    /* ICI : la hauteur de la section, en haut et en bas */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond1 et --fond2 forment le dégradé de fond, du haut vers le bas.\n' +
'     --encre est la couleur du titre, --gris celle du paragraphe.\n' +
'     --c2 colore aussi le petit curseur clignotant.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre sur grand écran.\n' +
'     --taille : le paragraphe. --btn : le texte du bouton.\n' +
'     --arrondi : l’arrondi du bouton. --hauteur : la hauteur de la section.\n' +
'\n' +
'     LES MOTS QUI DÉFILENT\n' +
'     Ils sont dans data-mots, plus bas, séparés par une barre verticale |\n' +
'     Mets-en deux ou trois, pas davantage : au-delà, on ne les lit plus.\n' +
'     Le premier mot reste affiché si le JavaScript ne se charge pas :\n' +
'     choisis-le pour qu’il tienne debout tout seul.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-tw, .sio-tw *{box-sizing:border-box}\n' +
'.sio-tw{padding:var(--hauteur) 24px;text-align:center;font-family:var(--f);\n' +
'  background:linear-gradient(180deg,var(--fond1),var(--fond2))}\n' +
'.sio-tw h1{margin:0 auto 20px;max-width:18ch;\n' +
'  font-size:clamp(30px,5vw,var(--titre));line-height:1.12;\n' +
'  font-weight:700;color:var(--encre)}\n' +
'.sio-tw h1 span{color:var(--c1);border-right:3px solid var(--c2);padding-right:4px}\n' +
'.sio-tw p{margin:0 auto 30px;max-width:52ch;font-size:var(--taille);\n' +
'  line-height:1.6;color:var(--gris)}\n' +
'.sio-tw a{display:inline-block;padding:17px 36px;border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
'  font-weight:700;font-size:var(--btn);letter-spacing:.07em;text-transform:uppercase;\n' +
'  box-shadow:0 18px 38px -20px var(--c1);transition:transform .22s ease}\n' +
'.sio-tw a:hover{transform:translateY(-2px)}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-tw">\n' +
'  <!-- ICI : data-mots, tes formulations qui défilent, séparées par une barre verticale -->\n' +
'  <h1>Ton challenge tourne <span data-mots="tout seul|en pilote automatique|pendant que tu dors">tout seul</span></h1>\n' +
'  <p>Les pages, les e-mails et les relances sont branchés une fois. Ensuite, tu relances en deux clics.</p>\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a href="#">Je découvre la méthode</a>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;\n' +
'  var cibles=document.querySelectorAll(".sio-tw span[data-mots]");\n' +
'  for(var i=0;i<cibles.length;i++){(function(el){\n' +
'    var mots=el.getAttribute("data-mots").split("|");\n' +
'    var m=0,c=0,efface=false;\n' +
'    function boucle(){\n' +
'      var mot=mots[m];\n' +
'      c=efface?c-1:c+1;\n' +
'      el.textContent=mot.substring(0,c);\n' +
'      var t=efface?45:85;\n' +
'      if(!efface&&c===mot.length){efface=true;t=1900;}\n' +
'      else if(efface&&c===0){efface=false;m=(m+1)%mots.length;t=350;}\n' +
'      setTimeout(boucle,t);\n' +
'    }\n' +
'    setTimeout(boucle,1400);\n' +
'  })(cibles[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"glass", name:"Héro verre dépoli", tag:"CSS",
desc:"Une carte translucide posée sur un dégradé. Très haut de gamme, et le texte reste parfaitement lisible.",
code:
'<!-- Héro verre dépoli -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-gl{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --titre:42px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --taille:18px;     /* ICI : la taille du paragraphe */\n' +
'  --btn:17px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:24px;    /* ICI : l’arrondi de la carte */\n' +
'  --hauteur:60px;    /* ICI : la hauteur de la section, en haut et en bas */\n' +
'  --large-max:640px; /* ICI : la largeur maximale de la carte */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     Le fond est un dégradé des trois couleurs : plus elles sont\n' +
'     contrastées, plus le mouvement se voit.\n' +
'     --txt est la couleur du texte de la carte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre. --taille : le paragraphe.\n' +
'     --btn : le texte du bouton. --arrondi : l’arrondi de la carte.\n' +
'     --hauteur : la hauteur de la section.\n' +
'     --large-max : la largeur maximale de la carte translucide.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     La carte paraît opaque : l’effet de flou n’est pas géré par le\n' +
'     navigateur. C’est prévu, le texte reste lisible.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-gl, .sio-gl *{box-sizing:border-box}\n' +
'.sio-gl{position:relative;overflow:hidden;padding:var(--hauteur) 20px;\n' +
'  font-family:var(--f);\n' +
'  background:linear-gradient(125deg,var(--c1),var(--c2d) 45%,var(--c2));\n' +
'  background-size:200% 200%;animation:sioGlShift 16s ease-in-out infinite}\n' +
'@keyframes sioGlShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
'.sio-gl-carte{max-width:var(--large-max);margin:0 auto;padding:46px 34px;text-align:center;\n' +
'  border-radius:var(--arrondi);border:1px solid rgba(255,255,255,.45);\n' +
'  background:rgba(255,255,255,.22);\n' +
'  -webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);\n' +
'  box-shadow:0 34px 70px -40px rgba(40,34,90,.7)}\n' +
'.sio-gl h1{margin:0 0 16px;font-size:clamp(28px,4.6vw,var(--titre));line-height:1.12;\n' +
'  font-weight:700;color:var(--txt);text-shadow:0 2px 14px rgba(40,34,90,.28)}\n' +
'.sio-gl p{margin:0 0 28px;font-size:var(--taille);line-height:1.6;color:var(--txt)}\n' +
'.sio-gl a{display:inline-block;padding:16px 34px;border-radius:999px;\n' +
'  text-decoration:none;color:var(--c1);background:var(--txt);\n' +
'  font-weight:700;font-size:var(--btn);letter-spacing:.07em;text-transform:uppercase;\n' +
'  box-shadow:0 16px 34px -18px rgba(40,34,90,.8);transition:transform .22s ease}\n' +
'.sio-gl a:hover{transform:translateY(-2px)}\n' +
'@media (prefers-reduced-motion:reduce){.sio-gl{animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-gl">\n' +
'  <div class="sio-gl-carte">\n' +
'    <h1>La méthode complète pour un lancement qui se répète</h1>\n' +
'    <p>Stratégie, tunnel, automatisations. Tout est documenté, tout se duplique.</p>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#">Je veux la méthode</a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"split", name:"Héro deux colonnes", tag:"CSS",
desc:"Texte à gauche, visuel à droite avec une pastille flottante. Passe en une colonne sur mobile.",
code:
'<!-- Héro deux colonnes -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-sp{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --pastille:#F1EFFC;/* ICI : le fond de l’étiquette du haut */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du paragraphe */\n' +
'  --titre:42px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --taille:18px;     /* ICI : la taille du paragraphe */\n' +
'  --btn:17px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi du bouton */\n' +
'  --arrondi2:22px;   /* ICI : l’arrondi du visuel */\n' +
'  --colonne:300px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:1040px;/* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --pastille est le fond de la petite étiquette en haut.\n' +
'     --encre est la couleur du titre, --gris celle du paragraphe.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre. --taille : le paragraphe.\n' +
'     --btn : le texte du bouton. --arrondi : l’arrondi du bouton.\n' +
'     --arrondi2 : l’arrondi du visuel.\n' +
'     --colonne : largeur mini d’une colonne. Au-dessous, tout passe\n' +
'     en une seule colonne — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     LE VISUEL\n' +
'     Le cadre dégradé est un espace réservé. Remplace-le par ton image :\n' +
'     <img src="ton-image.jpg" alt="description de l’image">\n' +
'     Format conseillé : 4 pour 3, soit 1200 sur 900 pixels.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-sp, .sio-sp *{box-sizing:border-box}\n' +
'.sio-sp{max-width:var(--large-max);margin:0 auto;padding:56px 20px;font-family:var(--f);\n' +
'  display:grid;gap:40px;align-items:center;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-sp em{display:inline-block;margin-bottom:14px;padding:7px 15px;border-radius:999px;\n' +
'  font-style:normal;font-size:13px;font-weight:700;letter-spacing:.12em;\n' +
'  text-transform:uppercase;color:var(--c1);background:var(--pastille)}\n' +
'.sio-sp h1{margin:0 0 16px;font-size:clamp(28px,4.4vw,var(--titre));line-height:1.12;\n' +
'  font-weight:700;color:var(--encre)}\n' +
'.sio-sp p{margin:0 0 26px;font-size:var(--taille);line-height:1.62;color:var(--gris)}\n' +
'.sio-sp a{display:inline-block;padding:16px 32px;border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
'  font-weight:700;font-size:var(--btn);letter-spacing:.07em;text-transform:uppercase;\n' +
'  box-shadow:0 18px 38px -20px var(--c1);transition:transform .22s ease}\n' +
'.sio-sp a:hover{transform:translateY(-2px)}\n' +
'.sio-sp-vis{position:relative}\n' +
'.sio-sp-vis img{display:block;width:100%;height:auto;border-radius:var(--arrondi2);\n' +
'  box-shadow:0 34px 70px -44px var(--c1)}\n' +
'.sio-sp-vis .sio-sp-cadre{aspect-ratio:4/3;border-radius:var(--arrondi2);\n' +
'  background:linear-gradient(140deg,var(--c1),var(--c2));\n' +
'  box-shadow:0 34px 70px -44px var(--c1)}\n' +
'.sio-sp-bulle{position:absolute;left:-14px;bottom:24px;padding:14px 18px;\n' +
'  border-radius:16px;background:#fff;box-shadow:0 20px 40px -26px rgba(40,34,90,.8)}\n' +
'.sio-sp-bulle b{display:block;font-size:21px;color:var(--c1);line-height:1.1}\n' +
'.sio-sp-bulle span{font-size:14px;color:#7B7D84}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes, le visuel et le lien ci-dessous -->\n' +
'<div class="sio-sp">\n' +
'  <div>\n' +
'    <em>Challenge System</em>\n' +
'    <h1>Un lancement préparé une fois, relancé toute l’année</h1>\n' +
'    <p>La structure, les pages et les automatisations, montées ensemble pas à pas.</p>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#">Je rejoins le programme</a>\n' +
'  </div>\n' +
'  <div class="sio-sp-vis">\n' +
'    <!-- ICI : remplace cette ligne par <img src="ton-image.jpg" alt="description"> -->\n' +
'    <div class="sio-sp-cadre"></div>\n' +
'    <div class="sio-sp-bulle">\n' +
'      <b>3 semaines</b>\n' +
'      <span>pour être en ligne</span>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>'
},
{
id:"herocd", name:"Héro avec compte à rebours", tag:"JS",
desc:"Le titre, le bouton et l’échéance dans un même bloc. Idéal en haut d’une page d’inscription.",
code:
'<!-- Héro avec compte à rebours -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-hc{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#3B3A6B;    /* ICI : le début du dégradé de fond */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --titre:42px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --chiffre:30px;    /* ICI : la taille des chiffres */\n' +
'  --taille:18px;     /* ICI : la taille du paragraphe */\n' +
'  --btn:18px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi du bouton */\n' +
'  --hauteur:64px;    /* ICI : la hauteur de la section, en haut et en bas */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le début du dégradé. Garde-le foncé : le texte est blanc.\n' +
'     --txt est la couleur du texte et du fond du bouton.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre. --chiffre : la taille des chiffres.\n' +
'     --taille : le paragraphe. --btn : le texte du bouton.\n' +
'     --arrondi : l’arrondi du bouton. --hauteur : la hauteur de la section.\n' +
'\n' +
'     LA DATE DE FIN\n' +
'     Elle est dans data-fin, plus bas : année-mois-jour, puis heure.\n' +
'     Exemple : 2026-10-15T23:59:00 pour le 15 octobre à 23h59.\n' +
'     La date est la même pour tout le monde, où que soit le visiteur.\n' +
'     Quand elle est dépassée, les chiffres restent à zéro.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-hc, .sio-hc *{box-sizing:border-box}\n' +
'.sio-hc{padding:var(--hauteur) 24px;text-align:center;font-family:var(--f);\n' +
'  color:var(--txt);\n' +
'  background:linear-gradient(135deg,var(--fond),var(--c1) 55%,var(--c2d))}\n' +
'.sio-hc h1{margin:0 auto 14px;max-width:17ch;\n' +
'  font-size:clamp(28px,4.8vw,var(--titre));line-height:1.12;font-weight:700}\n' +
'.sio-hc p{margin:0 auto 26px;max-width:50ch;font-size:var(--taille);\n' +
'  line-height:1.6;opacity:.88}\n' +
'.sio-hc-row{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:28px}\n' +
'.sio-hc-row div{min-width:84px;padding:14px 10px;border-radius:15px;\n' +
'  background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.22)}\n' +
'.sio-hc-row b{display:block;font-size:var(--chiffre);line-height:1;font-weight:700;\n' +
'  font-variant-numeric:tabular-nums}\n' +
'.sio-hc-row i{display:block;margin-top:6px;font-style:normal;font-size:12px;\n' +
'  font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.82}\n' +
'.sio-hc a{display:inline-block;padding:17px 36px;border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--fond);background:var(--txt);\n' +
'  font-weight:700;font-size:var(--btn);letter-spacing:.07em;text-transform:uppercase;\n' +
'  box-shadow:0 18px 40px -20px rgba(0,0,0,.6);transition:transform .22s ease}\n' +
'.sio-hc a:hover{transform:translateY(-2px)}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<!-- ICI : data-fin, ta date de fin — année-mois-jour, puis heure -->\n' +
'<div class="sio-hc" data-fin="2026-10-15T23:59:00">\n' +
'  <h1>Les portes ferment dans</h1>\n' +
'  <div class="sio-hc-row"></div>\n' +
'  <p>Prochaine session en janvier. D’ici là, le programme n’est plus accessible.</p>\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a href="#">Je m’inscris maintenant</a>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var L=["Jours","Heures","Minutes","Secondes"],M=[86400000,3600000,60000,1000];\n' +
'  var all=document.querySelectorAll(".sio-hc");\n' +
'  for(var i=0;i<all.length;i++){(function(box){\n' +
'    var row=box.querySelector(".sio-hc-row");\n' +
'    var fin=new Date(box.getAttribute("data-fin")).getTime();\n' +
'    function tick(){\n' +
'      var rest=Math.max(0,fin-Date.now()),h="";\n' +
'      for(var k=0;k<4;k++){\n' +
'        var v=Math.floor(rest/M[k]); rest-=v*M[k];\n' +
'        h+="<div><b>"+(v<10?"0"+v:v)+"<\/b><i>"+L[k]+"<\/i><\/div>";\n' +
'      }\n' +
'      row.innerHTML=h;\n' +
'      setTimeout(tick,1000);\n' +
'    }\n' +
'    tick();\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>'
}

];

var CTA = [
{
id:"halo", name:"Halo pulsé", tag:"CSS",
desc:"Tous les réglages sont réunis en tête du code : couleurs, police, taille, arrondi, épaisseur.",
code:
'<!-- Bouton halo pulsé -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-halo-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire, celle du halo */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi. 999px = tout rond, 12px = doux, 0 = carré */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:26px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante du bouton.\n' +
'     --c2 est le halo qui pulse autour.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible :\n' +
'     trop claire à cet endroit, et le texte disparaît.\n' +
'     --txt est la couleur du texte. Sur un dégradé clair, remplace le\n' +
'     blanc par une couleur foncée.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. La version mobile suit toute seule,\n' +
'     2px en dessous : tu n’as qu’une valeur à changer.\n' +
'     --arrondi : 999px = tout rond, 12px = angle doux, 0 = angle carré.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'     Augmente-les pour un bouton plus imposant.\n' +
'\n' +
'     LE LIEN\n' +
'     Il se trouve plus bas, dans la ligne qui commence par <a.\n' +
'     Remplace le # par ton adresse, en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'     Pour ouvrir un nouvel onglet, ajoute après le lien :\n' +
'     target="_blank" rel="noopener"\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bouton s’affiche mal : une accolade } ou un point-virgule ;\n' +
'     a sauté. Recopie le bloc entier depuis la bibliothèque.\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve quelques lignes\n' +
'     plus bas, dans la ligne qui commence par <a class="sio-halo".\n' +
'     Remplace le # par ton adresse, en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-halo-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-halo-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-halo-wrap, .sio-halo-wrap *{box-sizing:border-box}\n' +
'.sio-halo-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-halo-wrap .sio-halo{\n' +
'  display:inline-flex;align-items:center;justify-content:center;gap:12px;\n' +
'  width:auto;max-width:100%;padding:var(--hauteur) var(--largeur);\n' +
'  border:0;border-radius:var(--arrondi);cursor:pointer;text-decoration:none;\n' +
'  color:var(--txt);font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille);line-height:1;letter-spacing:.08em;\n' +
'  text-transform:uppercase;white-space:nowrap;\n' +
'  background:linear-gradient(110deg,var(--c1),var(--g2d),var(--c1));\n' +
'  background-size:220% 100%;\n' +
'  animation:sioHaloShift 7s ease-in-out infinite, sioHaloPulse 3.4s ease-in-out infinite;\n' +
'  transition:transform .25s ease}\n' +
'.sio-halo-wrap .sio-halo:hover{transform:translateY(-2px)}\n' +
'.sio-halo-wrap .sio-halo span{flex:none;transition:transform .25s ease}\n' +
'.sio-halo-wrap .sio-halo:hover span{transform:translateX(5px)}\n' +
'@keyframes sioHaloShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
'@keyframes sioHaloPulse{\n' +
'  0%,100%{box-shadow:0 14px 34px -14px var(--c1),0 0 0 0 var(--c2)}\n' +
'  50%{box-shadow:0 14px 34px -14px var(--c1),0 0 0 16px transparent}}\n' +
'@media (max-width:480px){\n' +
'  .sio-halo-wrap .sio-halo{font-size:calc(var(--taille) - 2px);\n' +
'    padding:calc(var(--hauteur) - 1px) calc(var(--largeur) - 12px);\n' +
'    letter-spacing:.05em;white-space:normal;line-height:1.3;text-align:center}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-halo-wrap .sio-halo{animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le texte et le lien ci-dessous -->\n' +
'<div class="sio-halo-wrap">\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a class="sio-halo" href="#">Je rejoins le challenge <span>&#8594;</span></a>\n' +
'</div>'
},
{
id:"magnet", name:"Bouton magnétique", tag:"JS",
desc:"Le bouton se décale légèrement vers le curseur. Effet discret, très haut de gamme sur ordinateur.",
code:
'<!-- Bouton magnétique -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-mag-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi. 999px = tout rond, 14px = doux, 0 = carré */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:26px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur du texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. La version mobile suit toute seule.\n' +
'     --arrondi : 999px = tout rond, 14px = doux, 0 = carré.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'\n' +
'     L’EFFET MAGNÉTIQUE\n' +
'     Le bouton suit légèrement la souris. Sur mobile il ne se passe rien :\n' +
'     il n’y a pas de curseur, c’est normal.\n' +
'     L’effet se désactive tout seul si le visiteur a demandé à son\n' +
'     appareil de limiter les animations.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-mag-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-mag-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-mag-wrap, .sio-mag-wrap *{box-sizing:border-box}\n' +
'.sio-mag-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-mag-wrap .sio-mag{\n' +
'  display:inline-block;width:auto;max-width:100%;\n' +
'  padding:var(--hauteur) var(--largeur);border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--txt);font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille);line-height:1;letter-spacing:.08em;\n' +
'  text-transform:uppercase;white-space:nowrap;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 16px 36px -18px var(--c1);\n' +
'  transition:transform .18s cubic-bezier(.22,1,.36,1),box-shadow .25s ease;\n' +
'  will-change:transform}\n' +
'.sio-mag-wrap .sio-mag:hover{box-shadow:0 22px 44px -18px var(--c1)}\n' +
'@media (max-width:480px){\n' +
'  .sio-mag-wrap .sio-mag{font-size:calc(var(--taille) - 2px);\n' +
'    padding:calc(var(--hauteur) - 1px) calc(var(--largeur) - 12px);\n' +
'    letter-spacing:.05em;white-space:normal;line-height:1.3;text-align:center}}\n' +
'</style>\n' +
'<!-- ICI : remplace le texte et le lien ci-dessous -->\n' +
'<div class="sio-mag-wrap">\n' +
'  <a class="sio-mag" href="#">Réserver ma place</a>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;\n' +
'  var list=document.querySelectorAll(".sio-mag");\n' +
'  for(var i=0;i<list.length;i++){(function(el){\n' +
'    if(el.getAttribute("data-mag"))return; el.setAttribute("data-mag","1");\n' +
'    el.addEventListener("mousemove",function(e){\n' +
'      var r=el.getBoundingClientRect();\n' +
'      var x=(e.clientX-r.left-r.width/2)/r.width*20;\n' +
'      var y=(e.clientY-r.top-r.height/2)/r.height*14;\n' +
'      el.style.transform="translate("+x.toFixed(1)+"px,"+y.toFixed(1)+"px)";\n' +
'    });\n' +
'    el.addEventListener("mouseleave",function(){el.style.transform="";});\n' +
'  })(list[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"shine", name:"Balayage lumineux", tag:"CSS",
desc:"Un reflet traverse le bouton à intervalle régulier. Attire l’œil sans bouger la mise en page.",
code:
'<!-- Bouton balayage -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-shine-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi. 999px = tout rond, 14px = doux, 0 = carré */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:26px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  --vitesse:4s;      /* ICI : le temps entre deux passages du reflet */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur du texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. --arrondi : la forme des angles.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'     --vitesse : le temps entre deux passages du reflet.\n' +
'     Plus grand = plus rare. En dessous de 3s, l’effet devient fatigant.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-shine-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-shine-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-shine-wrap, .sio-shine-wrap *{box-sizing:border-box}\n' +
'.sio-shine-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-shine-wrap .sio-shine{\n' +
'  position:relative;overflow:hidden;display:inline-block;\n' +
'  width:auto;max-width:100%;padding:var(--hauteur) var(--largeur);\n' +
'  border-radius:var(--arrondi);text-decoration:none;color:var(--txt);\n' +
'  font-family:var(--f);font-weight:700;font-size:var(--taille);line-height:1;\n' +
'  letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 14px 32px -16px var(--c1);transition:transform .2s ease}\n' +
'.sio-shine-wrap .sio-shine:hover{transform:scale(1.03)}\n' +
'.sio-shine-wrap .sio-shine::after{content:"";position:absolute;top:-60%;left:-40%;\n' +
'  width:28%;height:220%;transform:rotate(22deg);\n' +
'  background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.55),rgba(255,255,255,0));\n' +
'  animation:sioShineRun var(--vitesse) ease-in-out infinite}\n' +
'@keyframes sioShineRun{0%{left:-40%}55%,100%{left:125%}}\n' +
'@media (max-width:480px){\n' +
'  .sio-shine-wrap .sio-shine{font-size:calc(var(--taille) - 2px);\n' +
'    padding:calc(var(--hauteur) - 1px) calc(var(--largeur) - 12px);\n' +
'    letter-spacing:.05em;white-space:normal;line-height:1.3;text-align:center}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-shine-wrap .sio-shine::after{animation:none;opacity:0}}\n' +
'</style>\n' +
'<!-- ICI : remplace le texte et le lien ci-dessous -->\n' +
'<div class="sio-shine-wrap">\n' +
'  <a class="sio-shine" href="#">Je télécharge le guide</a>\n' +
'</div>'
},
{
id:"state", name:"Bouton à états", tag:"JS",
desc:"Clic, chargement, confirmation, puis redirection. Rassure au moment le plus fragile du parcours.",
code:
'<!-- Bouton à états : clic, chargement, confirmation, redirection -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-state-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --ok:#14805F;      /* ICI : la couleur de la confirmation */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --arrondi:12px;    /* ICI : l’arrondi. 999px = tout rond, 12px = doux, 0 = carré */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:22px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --ok est la couleur de la confirmation, après le clic.\n' +
'     Garde un vert ou une couleur franchement différente de --c1 :\n' +
'     c’est ce contraste qui fait comprendre que ça a marché.\n' +
'     --txt est la couleur du texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. --arrondi : la forme des angles.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'\n' +
'     CE QUI SE PASSE AU CLIC\n' +
'     Le bouton affiche un chargement une seconde, puis une confirmation,\n' +
'     puis redirige. C’est un effet de réassurance, pas un vrai traitement.\n' +
'     Si data-url est vide, le bouton revient à son état initial :\n' +
'     pratique pour tester sans quitter la page.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     l’attribut data-url du bouton. Colle ton adresse entre les\n' +
'     guillemets : data-url="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-state-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-state-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-state-wrap, .sio-state-wrap *{box-sizing:border-box}\n' +
'.sio-state-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-state-wrap .sio-state{\n' +
'  position:relative;min-width:260px;max-width:100%;\n' +
'  padding:var(--hauteur) var(--largeur);border:0;border-radius:var(--arrondi);\n' +
'  cursor:pointer;color:var(--txt);font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille);line-height:1;letter-spacing:.07em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 14px 32px -16px var(--c1);transition:background .3s ease}\n' +
'.sio-state-wrap .sio-state[data-s="load"]{cursor:wait;opacity:.9}\n' +
'.sio-state-wrap .sio-state[data-s="done"]{background:var(--ok)}\n' +
'.sio-state-wrap .sio-state i{display:inline-block;width:15px;height:15px;margin-right:9px;\n' +
'  border:2px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;\n' +
'  vertical-align:-2px;animation:sioStateSpin .7s linear infinite}\n' +
'@keyframes sioStateSpin{to{transform:rotate(360deg)}}\n' +
'@media (max-width:480px){\n' +
'  .sio-state-wrap .sio-state{min-width:0;width:100%;\n' +
'    font-size:calc(var(--taille) - 2px);letter-spacing:.05em}}\n' +
'</style>\n' +
'<!-- ICI : remplace le texte du bouton ci-dessous -->\n' +
'<div class="sio-state-wrap">\n' +
'  <!-- ICI : data-url, le lien de ton bon de commande -->\n' +
'  <button class="sio-state" type="button" data-url="">Je finalise mon inscription</button>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var list=document.querySelectorAll(".sio-state");\n' +
'  for(var i=0;i<list.length;i++){(function(b){\n' +
'    if(b.getAttribute("data-bound"))return; b.setAttribute("data-bound","1");\n' +
'    var label=b.innerHTML;\n' +
'    b.addEventListener("click",function(){\n' +
'      if(b.getAttribute("data-s"))return;\n' +
'      b.setAttribute("data-s","load");\n' +
'      b.innerHTML="<i><\/i>Un instant...";\n' +
'      setTimeout(function(){\n' +
'        b.setAttribute("data-s","done");\n' +
'        b.innerHTML="&#10003; C’est parti !";\n' +
'        var url=b.getAttribute("data-url");\n' +
'        if(url){setTimeout(function(){window.location.href=url;},600);}\n' +
'        else{setTimeout(function(){b.removeAttribute("data-s");b.innerHTML=label;},1800);}\n' +
'      },1100);\n' +
'    });\n' +
'  })(list[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"ring", name:"Contour lumineux", tag:"CSS",
desc:"Une comète de lumière tourne autour du bouton, séparée de lui par un fin liseré.",
code:
'<!-- Bouton contour lumineux -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ring-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire, celle de la comète */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --bg:#ffffff;      /* ICI : la couleur de fond de ta section */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:15px;     /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi. 999px = tout rond, 14px = doux, 0 = carré */\n' +
'  --hauteur:12px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:24px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  --liseret:3px;      /* ICI : la largeur du liseré autour du bouton */\n' +
'  --vitesse:4.5s;    /* ICI : le temps que met la comète à faire un tour */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --bg est la couleur du liseré entre la comète et la pastille.\n' +
'     Mets-y la couleur de fond de ta section pour qu’il se fonde dedans.\n' +
'     --txt est la couleur du texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. --arrondi : la forme des angles.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'     --liseret : la largeur du liseré. En dessous de 2px, on ne voit plus\n' +
'     la lumière tourner.\n' +
'     --vitesse : le temps que met la comète à faire un tour.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-ring-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ring-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ring-wrap, .sio-ring-wrap *{box-sizing:border-box}\n' +
'.sio-ring-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-ring-wrap .sio-ring{\n' +
'  position:relative;display:inline-block;max-width:100%;\n' +
'  padding:var(--liseret);border-radius:var(--arrondi);\n' +
'  overflow:hidden;isolation:isolate;\n' +
'  background:var(--bg);box-shadow:0 0 22px -6px var(--c2)}\n' +
'.sio-ring-wrap .sio-ring::before{content:"";position:absolute;inset:-160%;\n' +
'  background:var(--c1);\n' +
'  background:conic-gradient(from 0deg,rgba(255,255,255,0) 0 40%,\n' +
'    var(--c2) 62%,var(--c1) 84%,rgba(255,255,255,0) 100%);\n' +
'  animation:sioRingSpin var(--vitesse) linear infinite}\n' +
'.sio-ring-wrap .sio-ring a{position:relative;display:block;\n' +
'  padding:var(--hauteur) var(--largeur);border-radius:var(--arrondi);\n' +
'  color:var(--txt);text-decoration:none;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  font-family:var(--f);font-weight:700;font-size:var(--taille);line-height:1;\n' +
'  letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;\n' +
'  transition:background .25s ease}\n' +
'.sio-ring-wrap .sio-ring a:hover{background:linear-gradient(135deg,var(--g2d),var(--c1))}\n' +
'@keyframes sioRingSpin{to{transform:rotate(360deg)}}\n' +
'@media (max-width:480px){\n' +
'  .sio-ring-wrap .sio-ring a{font-size:calc(var(--taille) - 2px);\n' +
'    padding:calc(var(--hauteur) - 1px) calc(var(--largeur) - 12px);\n' +
'    letter-spacing:.05em;white-space:normal;line-height:1.3;text-align:center}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ring-wrap .sio-ring::before{animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le texte et le lien ci-dessous -->\n' +
'<div class="sio-ring-wrap">\n' +
'  <div class="sio-ring"><a href="#">Voir le programme complet</a></div>\n' +
'</div>'
},
{
id:"ghost", name:"Contour à remplissage", tag:"CSS",
desc:"Le bouton secondaire idéal : discret au repos, il se remplit au survol. À placer sous le bouton principal.",
code:
'<!-- Bouton secondaire -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ghost-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale, celle du contour et du texte */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte au survol */\n' +
'  --taille:15px;     /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi. 999px = tout rond, 14px = doux, 0 = carré */\n' +
'  --hauteur:11px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:22px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  --trait:1.5px;     /* ICI : l’épaisseur du contour */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 colore le contour et le texte au repos.\n' +
'     --c2d complète le dégradé qui remplit le bouton au survol.\n' +
'     --txt est la couleur du texte une fois le bouton rempli.\n' +
'     Ce bouton est fait pour vivre sous un bouton principal :\n' +
'     garde-le plus discret que lui.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. --arrondi : la forme des angles.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'     --trait : l’épaisseur du contour.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-ghost-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ghost-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ghost-wrap, .sio-ghost-wrap *{box-sizing:border-box}\n' +
'.sio-ghost-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-ghost-wrap .sio-ghost{\n' +
'  position:relative;overflow:hidden;display:inline-flex;align-items:center;\n' +
'  justify-content:center;gap:10px;width:auto;max-width:100%;\n' +
'  padding:var(--hauteur) var(--largeur);\n' +
'  border:var(--trait) solid var(--c1);border-radius:var(--arrondi);\n' +
'  color:var(--c1);text-decoration:none;\n' +
'  font-family:var(--f);font-weight:700;font-size:var(--taille);line-height:1;\n' +
'  letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;\n' +
'  transition:color .3s ease,border-color .3s ease}\n' +
'.sio-ghost-wrap .sio-ghost::before{content:"";position:absolute;inset:0;z-index:0;\n' +
'  background:linear-gradient(120deg,var(--c1),var(--g2d));\n' +
'  transform:translateY(101%);transition:transform .38s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-ghost-wrap .sio-ghost span{position:relative;z-index:1;flex:none}\n' +
'.sio-ghost-wrap .sio-ghost:hover{color:var(--txt);border-color:var(--c2d)}\n' +
'.sio-ghost-wrap .sio-ghost:hover::before{transform:translateY(0)}\n' +
'@media (max-width:480px){\n' +
'  .sio-ghost-wrap .sio-ghost{font-size:calc(var(--taille) - 2px);\n' +
'    padding:calc(var(--hauteur) - 1px) calc(var(--largeur) - 10px);\n' +
'    letter-spacing:.05em;white-space:normal;line-height:1.3;text-align:center}}\n' +
'</style>\n' +
'<!-- ICI : remplace le texte et le lien ci-dessous -->\n' +
'<div class="sio-ghost-wrap">\n' +
'  <a class="sio-ghost" href="#"><span>Discuter avant de décider</span><span>&#8594;</span></a>\n' +
'</div>'
},
{
id:"reassure", name:"Bouton avec réassurance", tag:"CSS",
desc:"Le bouton, le prix, et les trois garanties juste dessous. Le bloc de conversion complet.",
code:
'<!-- Bouton avec ligne de réassurance -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rea{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte du bouton */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des garanties, sous le bouton */\n' +
'  --taille:17px;     /* ICI : la taille du texte du bouton */\n' +
'  --taille2:16px;    /* ICI : la taille de la ligne de prix */\n' +
'  --taille3:15px;    /* ICI : la taille des garanties */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi. 999px = tout rond, 14px = doux, 0 = carré */\n' +
'  --hauteur:14px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:20px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  --large-max:380px; /* ICI : la largeur maximale du bouton */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur du texte du bouton.\n' +
'     --gris colore les trois garanties, sous le bouton.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le texte du bouton. --taille2 : la ligne de prix.\n' +
'     --taille3 : les garanties. --arrondi : la forme des angles.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'     --large-max : la largeur maximale du bouton.\n' +
'\n' +
'     LES GARANTIES\n' +
'     Trois lignes maximum, courtes. Au-delà elles passent à la ligne\n' +
'     et le bloc perd son équilibre.\n' +
'     N’annonce que ce que tu tiens vraiment : une garantie écrite\n' +
'     sur une page de vente t’engage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-rea{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-rea{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-rea, .sio-rea *{box-sizing:border-box}\n' +
'.sio-rea{display:flex;flex-direction:column;align-items:center;gap:14px;\n' +
'  padding:32px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rea .sio-rea-btn{display:block;width:100%;max-width:var(--large-max);\n' +
'  padding:var(--hauteur) var(--largeur);border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--txt);font-family:var(--f);\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 16px 34px -18px var(--c1);transition:transform .2s ease}\n' +
'.sio-rea .sio-rea-btn:hover{transform:translateY(-2px)}\n' +
'.sio-rea .sio-rea-btn b{display:block;font-weight:700;font-size:var(--taille);\n' +
'  line-height:1.2;letter-spacing:.07em;text-transform:uppercase}\n' +
'.sio-rea .sio-rea-btn em{display:block;margin-top:7px;font-style:normal;\n' +
'  font-size:var(--taille2);font-weight:600;opacity:.85}\n' +
'.sio-rea .sio-rea-list{display:flex;flex-wrap:wrap;justify-content:center;\n' +
'  gap:8px 20px;margin:0;padding:0;list-style:none}\n' +
'.sio-rea .sio-rea-list li{display:flex;align-items:center;gap:7px;\n' +
'  font-size:var(--taille3);font-weight:600;color:var(--gris)}\n' +
'.sio-rea .sio-rea-list svg{flex:none;width:16px;height:16px;\n' +
'  stroke:var(--c1);fill:none;stroke-width:2.4}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-rea">\n' +
'  <a class="sio-rea-btn" href="#">\n' +
'    <b>Je rejoins le Challenge</b>\n' +
'    <em>Paiement en 3 fois disponible</em>\n' +
'  </a>\n' +
'  <ul class="sio-rea-list">\n' +
'    <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Accès à vie</li>\n' +
'    <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Paiement sécurisé</li>\n' +
'    <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Garantie 14 jours</li>\n' +
'  </ul>\n' +
'</div>'
},
{
id:"flip", name:"Bouton qui se retourne", tag:"CSS",
desc:"Au survol, le bouton pivote sur lui-même et révèle une seconde face. Deux messages sur un seul bouton.",
code:
'<!-- Bouton qui se retourne -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-fp-wrap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale, la face avant */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --dos:#3B3A6B;     /* ICI : la couleur de la face arrière */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi. 999px = tout rond, 14px = doux, 0 = carré */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bouton, en haut et en bas */\n' +
'  --largeur:26px;    /* ICI : l’espace à gauche et à droite du texte */\n' +
'  --duree:.55s;      /* ICI : la durée du retournement */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES DEUX FACES\n' +
'     La face avant porte --c1 et --c2d, la face arrière --dos.\n' +
'     Le contraste entre les deux fait tout l’effet : si les deux\n' +
'     couleurs sont proches, le retournement passe inaperçu.\n' +
'\n' +
'     CE QUE TU ÉCRIS SUR CHAQUE FACE\n' +
'     Les deux textes sont plus bas, dans sio-fp-av et sio-fp-ar.\n' +
'     Règle importante : la face avant doit se suffire à elle-même.\n' +
'     Sur un téléphone il n’y a pas de survol, donc la face arrière\n' +
'     ne s’affiche jamais. Mets l’essentiel devant, et le complément\n' +
'     derrière — un prix, une garantie, une date.\n' +
'     Garde les deux textes de longueur proche : c’est la face avant\n' +
'     qui fixe la taille du bouton, un texte arrière plus long sera\n' +
'     coupé.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte. La version mobile suit toute seule.\n' +
'     --arrondi : la forme des angles.\n' +
'     --hauteur et --largeur : l’espace entre le texte et le bord.\n' +
'     --duree : la durée du retournement. En dessous de .35s l’effet\n' +
'     devient sec, au-delà de .8s il traîne.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte arrière apparaît à l’envers : la ligne transform de la\n' +
'     face arrière a été modifiée. Recopie le bloc.\n' +
'     Rien ne bouge sur mobile : c’est normal, il n’y a pas de survol.\n' +
'     Le visiteur qui a demandé à limiter les animations voit un\n' +
'     simple changement de couleur : c’est prévu.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-fp-wrap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-fp-wrap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-fp-wrap, .sio-fp-wrap *{box-sizing:border-box}\n' +
'.sio-fp-wrap{display:flex;justify-content:center;padding:34px 16px;\n' +
'  perspective:900px}\n' +
'.sio-fp-wrap .sio-fp{position:relative;display:inline-block;max-width:100%;\n' +
'  text-decoration:none;transform-style:preserve-3d;\n' +
'  transition:transform var(--duree) cubic-bezier(.22,1,.36,1);\n' +
'  box-shadow:0 16px 34px -20px var(--c1)}\n' +
'.sio-fp-wrap .sio-fp:hover{transform:rotateY(180deg)}\n' +
'.sio-fp-wrap .sio-fp-av,\n' +
'.sio-fp-wrap .sio-fp-ar{display:flex;align-items:center;justify-content:center;\n' +
'  padding:var(--hauteur) var(--largeur);border-radius:var(--arrondi);\n' +
'  color:var(--txt);font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille);line-height:1.2;letter-spacing:.07em;\n' +
'  text-transform:uppercase;text-align:center;\n' +
'  -webkit-backface-visibility:hidden;backface-visibility:hidden}\n' +
'.sio-fp-wrap .sio-fp-av{background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-fp-wrap .sio-fp-ar{position:absolute;inset:0;background:var(--dos);\n' +
'  transform:rotateY(180deg)}\n' +
'@media (max-width:480px){\n' +
'  .sio-fp-wrap .sio-fp-av,\n' +
'  .sio-fp-wrap .sio-fp-ar{font-size:calc(var(--taille) - 2px);\n' +
'    padding:calc(var(--hauteur) - 1px) calc(var(--largeur) - 12px);\n' +
'    letter-spacing:.05em}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-fp-wrap .sio-fp{transform-style:flat;transition:none}\n' +
'  .sio-fp-wrap .sio-fp:hover{transform:none}\n' +
'  .sio-fp-wrap .sio-fp:hover .sio-fp-av{background:var(--dos)}\n' +
'  .sio-fp-wrap .sio-fp-ar{display:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les deux textes et le lien ci-dessous -->\n' +
'<div class="sio-fp-wrap">\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a class="sio-fp" href="#">\n' +
'    <span class="sio-fp-av">Je rejoins le challenge</span>\n' +
'    <span class="sio-fp-ar">5 jours, dès 97 €</span>\n' +
'  </a>\n' +
'</div>'
}
];

var BAN = [
{
id:"countdown", name:"Barre haute avec compte à rebours", tag:"JS",
desc:"Une section pleine largeur, tout en haut de ta page, qui compte jusqu’à ta date de fermeture.",
code:
'<!-- Barre haute compte à rebours -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-cd{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte de la barre */\n' +
'  --btn-fond:#ffffff;/* ICI : la couleur du bouton */\n' +
'  --btn-txt:#1A1A22; /* ICI : la couleur du texte du bouton */\n' +
'  --taille:16.5px;   /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi du bouton */\n' +
'  --hauteur:11px;    /* ICI : l’épaisseur de la barre, en haut et en bas */\n' +
'  --pos:relative;    /* ICI : relative = la barre défile avec la page. */\n' +
'                     /*       sticky   = elle reste visible en haut.   */\n' +
'  --pleine:1;        /* ICI : 1 = pleine largeur de l\u2019écran, 0 = largeur de ta section */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     OÙ LA POSER\n' +
'     C’est une section comme une autre : mets-la tout en haut de ta\n' +
'     page, au-dessus de ton héro. Elle occupe sa place et pousse le\n' +
'     contenu vers le bas, elle ne recouvre rien.\n' +
'\n' +
'     --pos : relative, elle défile avec la page et disparaît quand on\n' +
'     descend. sticky, elle se fige en haut de l’écran dès qu’on la\n' +
'     dépasse, sans jamais masquer de contenu puisqu’elle garde sa\n' +
'     place dans la page.\n' +
'     Essaie sticky sur ta page publiée : selon la façon dont ta\n' +
'     section est construite, l’effet peut ne pas prendre. Si c’est le\n' +
'     cas, reviens à relative, la barre reste parfaitement utile.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2d forment le dégradé de la barre, --txt le texte.\n' +
'     --c2 est utilisé pour les reflets du dégradé animé.\n' +
'     --btn-fond et --btn-txt sont les couleurs du bouton. Garde un\n' +
'     bouton clair sur une barre foncée : c’est le contraste qui le\n' +
'     fait exister.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre celle de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte et des chiffres.\n' +
'     --arrondi : l’arrondi du bouton.\n' +
'     --hauteur : l’épaisseur de la barre, en haut et en bas.\n' +
'\n' +
'     LA DATE DE FIN\n' +
'     Elle est dans data-fin, plus bas : année-mois-jour, puis heure.\n' +
'     Exemple : 2026-10-15T23:59:00 pour le 15 octobre à 23h59.\n' +
'     La date est la même pour tout le monde, où que soit le visiteur.\n' +
'     Quand elle est dépassée, la barre disparaît d’elle-même.\n' +
'\n' +
'     LA PLEINE LARGEUR\n' +
'     --pleine:1; fait prendre au bandeau toute la largeur de l’écran,\n' +
'     même si ta section Système.io est plus étroite. Mets 0 pour qu’il\n' +
'     reste sagement dans la largeur de ta section.\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les chiffres restent vides : data-fin est mal écrit. Respecte le\n' +
'     format, avec le T entre la date et l’heure, sans espace.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/inscription"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-cd{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-cd{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-cd, .sio-cd *{box-sizing:border-box}\n' +
'.sio-cd{position:var(--pos);top:0;z-index:9999;\n' +
'  display:flex;align-items:center;justify-content:center;gap:10px 22px;flex-wrap:wrap;\n' +
'  padding:var(--hauteur) 16px;color:var(--txt);text-align:center;\n' +
'  font-family:var(--f);font-weight:600;font-size:var(--taille);line-height:1.3;\n' +
'  background:linear-gradient(105deg,var(--c1),var(--g2d),var(--c1));\n' +
'  background-size:220% 100%;animation:sioCdShift 9s ease-in-out infinite}\n' +
'.sio-cd b{font-weight:800}\n' +
'.sio-cd-t{display:inline-flex;gap:6px;font-variant-numeric:tabular-nums}\n' +
'.sio-cd-t span{background:rgba(255,255,255,.17);border-radius:8px;\n' +
'  padding:5px 9px;font-weight:800;font-size:var(--taille);min-width:60px;display:inline-block}\n' +
'.sio-cd-t span i{font-style:normal;font-weight:600;opacity:.8;\n' +
'  font-size:calc(var(--taille) - 3px)}\n' +
'.sio-cd a{background:var(--btn-fond);color:var(--btn-txt);text-decoration:none;\n' +
'  padding:9px 18px;border-radius:var(--arrondi);\n' +
'  font-weight:800;font-size:var(--taille);letter-spacing:.06em;\n' +
'  text-transform:uppercase;white-space:nowrap}\n' +
'@keyframes sioCdShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
'.sio-cd{width:calc(100% + (var(--ecran,100vw) - 100%) * var(--pleine));\n' +
'  margin-left:calc((100% - var(--ecran,100vw)) / 2 * var(--pleine));\n' +
'  max-width:var(--ecran,100vw)}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<!-- ICI : data-fin, ta date de fin — année-mois-jour, puis heure -->\n' +
'<div class="sio-cd" data-fin="2026-10-15T23:59:00">\n' +
'  <b>Les inscriptions ferment bientôt</b>\n' +
'  <span class="sio-cd-t"></span>\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a href="#">Je m’inscris</a>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var bars=document.querySelectorAll(".sio-cd");\n' +
'  for(var i=0;i<bars.length;i++){(function(bar){\n' +
'    var out=bar.querySelector(".sio-cd-t");\n' +
'    var fin=new Date(bar.getAttribute("data-fin")).getTime();\n' +
'    var U=[["j",86400000],["h",3600000],["min",60000],["s",1000]];\n' +
'    function pad(n){return n<10?"0"+n:""+n;}\n' +
'    function tick(){\n' +
'      var d=fin-Date.now();\n' +
'      if(d<=0){bar.style.display="none";return;}\n' +
'      var html="",rest=d;\n' +
'      for(var k=0;k<U.length;k++){\n' +
'        var v=Math.floor(rest/U[k][1]); rest-=v*U[k][1];\n' +
'        html+="<span>"+pad(v)+" <i>"+U[k][0]+"<\/i><\/span>";\n' +
'      }\n' +
'      out.innerHTML=html;\n' +
'      setTimeout(tick,1000);\n' +
'    }\n' +
'    tick();\n' +
'  })(bars[i]);}\n' +
'})();\n' +
'<\/script>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  /* largeur réellement disponible : l’écran, ou le cadre qui contient le bloc */\n' +
'  function dispo(el){\n' +
'    var p=el.parentNode;\n' +
'    while(p && p.nodeType===1 && p!==document.body && p!==document.documentElement){\n' +
'      var o=getComputedStyle(p);\n' +
'      if(o.overflowX!=="visible" && p.clientWidth) return p.clientWidth;\n' +
'      p=p.parentNode;\n' +
'    }\n' +
'    return document.documentElement.clientWidth;\n' +
'  }\n' +
'  function cale(){\n' +
'    var els=document.querySelectorAll(".sio-cd");\n' +
'    for(var i=0;i<els.length;i++) els[i].style.setProperty("--ecran",dispo(els[i])+"px");\n' +
'  }\n' +
'  cale();\n' +
'  window.addEventListener("resize",cale);\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"timer", name:"Compteur de section", tag:"JS",
desc:"Quatre cartes chiffrées à poser au milieu d’une page de vente, juste avant le bouton.",
code:
'<!-- Compteur de section -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-tm{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur des chiffres */\n' +
'  --gris:#6E757A;    /* ICI : la couleur de la ligne au-dessus */\n' +
'  --chiffre:32px;    /* ICI : la taille des chiffres */\n' +
'  --taille:15px;     /* ICI : la taille de la ligne au-dessus */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi des cartes */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur des chiffres.\n' +
'     --gris colore la petite ligne au-dessus des cartes.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --chiffre : la taille des chiffres. --taille : la ligne du dessus.\n' +
'     --arrondi : l’arrondi des cartes.\n' +
'\n' +
'     LA DATE DE FIN\n' +
'     Elle est dans data-fin, plus bas : année-mois-jour, puis heure.\n' +
'     Exemple : 2026-10-15T23:59:00 pour le 15 octobre à 23h59.\n' +
'     Quand elle est dépassée, les chiffres restent à zéro.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-tm{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-tm{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-tm, .sio-tm *{box-sizing:border-box}\n' +
'.sio-tm{padding:30px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-tm p{margin:0 0 16px;font-size:var(--taille);letter-spacing:.14em;\n' +
'  text-transform:uppercase;color:var(--gris);font-weight:700}\n' +
'.sio-tm-row{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}\n' +
'.sio-tm-row div{min-width:80px;padding:14px 10px;border-radius:var(--arrondi);\n' +
'  color:var(--txt);background:linear-gradient(150deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 14px 30px -18px var(--c1)}\n' +
'.sio-tm-row b{display:block;font-size:var(--chiffre);line-height:1;font-weight:700;\n' +
'  font-variant-numeric:tabular-nums}\n' +
'.sio-tm-row i{display:block;margin-top:6px;font-style:normal;font-weight:600;\n' +
'  font-size:calc(var(--taille) - 2px);letter-spacing:.1em;text-transform:uppercase;opacity:.8}\n' +
'.sio-tm.sio-anim > *{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-tm.sio-anim > *.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-tm.sio-anim > *{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace le texte ci-dessous -->\n' +
'<!-- ICI : data-fin, ta date de fin — année-mois-jour, puis heure -->\n' +
'<div class="sio-tm" data-fin="2026-10-15T23:59:00">\n' +
'  <p>Ouverture des portes dans</p>\n' +
'  <div class="sio-tm-row"></div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var L=["Jours","Heures","Minutes","Secondes"],M=[86400000,3600000,60000,1000];\n' +
'  var all=document.querySelectorAll(".sio-tm");\n' +
'  for(var i=0;i<all.length;i++){(function(box){\n' +
'    var row=box.querySelector(".sio-tm-row");\n' +
'    var fin=new Date(box.getAttribute("data-fin")).getTime();\n' +
'    function tick(){\n' +
'      var rest=Math.max(0,fin-Date.now()),h="";\n' +
'      for(var k=0;k<4;k++){\n' +
'        var v=Math.floor(rest/M[k]); rest-=v*M[k];\n' +
'        h+="<div><b>"+(v<10?"0"+v:v)+"<\/b><i>"+L[k]+"<\/i><\/div>";\n' +
'      }\n' +
'      row.innerHTML=h;\n' +
'      setTimeout(tick,1000);\n' +
'    }\n' +
'    tick();\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-tm");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > *");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"gauge", name:"Jauge de places", tag:"JS",
desc:"La jauge se remplit à l’arrivée sur la page. Renseigne tes vrais chiffres dans les deux attributs.",
code:
'<!-- Jauge de places -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-jg{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond de la carte */\n' +
'  --bord:#E6E3E8;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#6B6D74;    /* ICI : la couleur de la phrase du bas */\n' +
'  --taille:18px;     /* ICI : la taille du titre */\n' +
'  --taille2:15px;    /* ICI : la taille des autres textes */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:520px; /* ICI : la largeur maximale de la carte */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond de la carte, --bord son contour.\n' +
'     --encre colore le titre, --gris la phrase du bas.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le titre. --taille2 : les autres textes.\n' +
'     --arrondi : l’arrondi de la carte.\n' +
'     --large-max : la largeur maximale de la carte.\n' +
'\n' +
'     LES CHIFFRES\n' +
'     data-pris : les places déjà prises. data-total : les places ouvertes.\n' +
'     Le nombre restant et le remplissage de la jauge se calculent tout seuls.\n' +
'     Mets tes vrais chiffres, et tiens-les à jour : une jauge inventée\n' +
'     se repère vite, et coûte plus cher qu’elle ne rapporte.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-jg{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-jg{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-jg, .sio-jg *{box-sizing:border-box}\n' +
'.sio-jg{max-width:var(--large-max);margin:0 auto;padding:26px 22px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord);\n' +
'  font-family:var(--f);box-shadow:0 18px 40px -30px var(--c1)}\n' +
'.sio-jg-top{display:flex;justify-content:space-between;align-items:baseline;\n' +
'  gap:12px;margin-bottom:12px}\n' +
'.sio-jg-top b{font-size:var(--taille);font-weight:800;color:var(--encre)}\n' +
'.sio-jg-top span{font-size:var(--taille2);color:var(--c1);font-weight:800}\n' +
'.sio-jg-bar{height:11px;border-radius:999px;background:#EFEDF1;overflow:hidden}\n' +
'.sio-jg-bar i{display:block;height:100%;width:0;border-radius:999px;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--g2));\n' +
'  transition:width 1.4s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-jg-foot{margin:11px 0 0;font-size:var(--taille2);font-weight:600;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes ci-dessous -->\n' +
'<!-- ICI : data-pris, les places déjà prises. data-total, les places ouvertes. -->\n' +
'<div class="sio-jg" data-pris="38" data-total="50">\n' +
'  <div class="sio-jg-top">\n' +
'    <b>Promotion de septembre</b>\n' +
'    <span class="sio-jg-left"></span>\n' +
'  </div>\n' +
'  <div class="sio-jg-bar"><i></i></div>\n' +
'  <p class="sio-jg-foot">Accompagnement en petit groupe, pour garder un suivi individuel.</p>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var all=document.querySelectorAll(".sio-jg");\n' +
'  for(var i=0;i<all.length;i++){(function(b){\n' +
'    var pris=+b.getAttribute("data-pris"),tot=+b.getAttribute("data-total");\n' +
'    var reste=Math.max(0,tot-pris);\n' +
'    b.querySelector(".sio-jg-left").textContent=reste+" places restantes";\n' +
'    setTimeout(function(){\n' +
'      b.querySelector(".sio-jg-bar i").style.width=Math.round(pris/tot*100)+"%";\n' +
'    },250);\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"marquee", name:"Ruban défilant", tag:"CSS",
desc:"Tes bénéfices qui défilent en boucle. Parfait entre deux sections pour rythmer la page.",
code:
'<!-- Ruban défilant -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rb{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --hauteur:15px;    /* ICI : l’épaisseur du ruban, en haut et en bas */\n' +
'  --vitesse:26s;     /* ICI : la durée d’un tour. Plus grand = plus lent. */\n' +
'  --pleine:1;        /* ICI : 1 = pleine largeur de l\u2019écran, 0 = largeur de ta section */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur du texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte.\n' +
'     --hauteur : l’épaisseur du ruban, en haut et en bas.\n' +
'     --vitesse : la durée d’un tour. Plus grand = plus lent.\n' +
'     En dessous de 15s le défilement devient désagréable.\n' +
'\n' +
'     LES TEXTES QUI DÉFILENT\n' +
'     Il y a deux lignes identiques, plus bas. C’est normal : la seconde\n' +
'     prend le relais pour que la boucle soit continue.\n' +
'     Modifie les deux à l’identique, sinon on voit la couture.\n' +
'     Le défilement se met en pause quand la souris passe dessus.\n' +
'\n' +
'     LA PLEINE LARGEUR\n' +
'     --pleine:1; fait prendre au bandeau toute la largeur de l’écran,\n' +
'     même si ta section Système.io est plus étroite. Mets 0 pour qu’il\n' +
'     reste sagement dans la largeur de ta section.\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-rb{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-rb{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-rb, .sio-rb *{box-sizing:border-box}\n' +
'.sio-rb{overflow:hidden;padding:var(--hauteur) 0;color:var(--txt);font-family:var(--f);\n' +
'  background:linear-gradient(100deg,var(--c1),var(--g2d));\n' +
'  -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);\n' +
'  mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}\n' +
'.sio-rb-track{display:flex;width:max-content;\n' +
'  animation:sioRbRun var(--vitesse) linear infinite}\n' +
'.sio-rb:hover .sio-rb-track{animation-play-state:paused}\n' +
'.sio-rb-track div{display:flex;align-items:center;gap:34px;padding-right:34px;\n' +
'  font-size:var(--taille);font-weight:700;letter-spacing:.02em;white-space:nowrap}\n' +
'.sio-rb-track em{font-style:normal;opacity:.5}\n' +
'@keyframes sioRbRun{to{transform:translateX(-50%)}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-rb-track{animation:none}}\n' +
'.sio-rb{width:calc(100% + (var(--ecran,100vw) - 100%) * var(--pleine));\n' +
'  margin-left:calc((100% - var(--ecran,100vw)) / 2 * var(--pleine));\n' +
'  max-width:var(--ecran,100vw)}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les textes. Recopie-les à l’identique dans les deux lignes. -->\n' +
'<div class="sio-rb">\n' +
'  <div class="sio-rb-track">\n' +
'    <div>Tunnel relançable <em>&#9679;</em> Automatisation complète <em>&#9679;</em> Suivi en direct <em>&#9679;</em> Modèles prêts à l’emploi <em>&#9679;</em></div>\n' +
'    <div aria-hidden="true">Tunnel relançable <em>&#9679;</em> Automatisation complète <em>&#9679;</em> Suivi en direct <em>&#9679;</em> Modèles prêts à l’emploi <em>&#9679;</em></div>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  /* largeur réellement disponible : l’écran, ou le cadre qui contient le bloc */\n' +
'  function dispo(el){\n' +
'    var p=el.parentNode;\n' +
'    while(p && p.nodeType===1 && p!==document.body && p!==document.documentElement){\n' +
'      var o=getComputedStyle(p);\n' +
'      if(o.overflowX!=="visible" && p.clientWidth) return p.clientWidth;\n' +
'      p=p.parentNode;\n' +
'    }\n' +
'    return document.documentElement.clientWidth;\n' +
'  }\n' +
'  function cale(){\n' +
'    var els=document.querySelectorAll(".sio-rb");\n' +
'    for(var i=0;i<els.length;i++) els[i].style.setProperty("--ecran",dispo(els[i])+"px");\n' +
'  }\n' +
'  cale();\n' +
'  window.addEventListener("resize",cale);\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"announce", name:"Bandeau annonce fermable", tag:"JS",
desc:"Une annonce que le visiteur peut fermer, et qui ne revient plus pendant sept jours.",
code:
'<!-- Bandeau annonce fermable -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-an{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16.5px;   /* ICI : la taille du texte */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bandeau, en haut et en bas */\n' +
'  --pleine:1;        /* ICI : 1 = pleine largeur de l\u2019écran, 0 = largeur de ta section */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur du texte et du lien.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte.\n' +
'     --hauteur : l’épaisseur du bandeau, en haut et en bas.\n' +
'\n' +
'     LA FERMETURE\n' +
'     data-cle est un nom unique pour ce bandeau, par exemple annonce-sept.\n' +
'     Quand un visiteur ferme le bandeau, il ne le revoit plus pendant\n' +
'     sept jours. Change ce nom pour relancer un nouveau bandeau.\n' +
'     Si tu mets deux bandeaux sur le site, donne-leur des noms différents.\n' +
'\n' +
'     LA PLEINE LARGEUR\n' +
'     --pleine:1; fait prendre au bandeau toute la largeur de l’écran,\n' +
'     même si ta section Système.io est plus étroite. Mets 0 pour qu’il\n' +
'     reste sagement dans la largeur de ta section.\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le texte est illisible : --c2d est trop clair pour du blanc.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-an{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-an{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-an, .sio-an *{box-sizing:border-box}\n' +
'.sio-an{position:relative;display:flex;align-items:center;justify-content:center;\n' +
'  gap:14px;flex-wrap:wrap;padding:var(--hauteur) 46px;color:var(--txt);text-align:center;\n' +
'  font-family:var(--f);font-weight:600;font-size:var(--taille);line-height:1.4;\n' +
'  background:linear-gradient(100deg,var(--c1),var(--g2d),var(--c1));\n' +
'  background-size:220% 100%;animation:sioAnShift 10s ease-in-out infinite}\n' +
'.sio-an a{color:var(--txt);font-weight:800;text-underline-offset:4px}\n' +
'.sio-an button{position:absolute;right:12px;top:50%;transform:translateY(-50%);\n' +
'  font-family:var(--f);width:28px;height:28px;border:0;border-radius:50%;\n' +
'  cursor:pointer;color:var(--txt);background:rgba(255,255,255,.18);\n' +
'  font-size:var(--taille);line-height:1}\n' +
'.sio-an button:hover{background:rgba(255,255,255,.32)}\n' +
'@keyframes sioAnShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
'.sio-an{width:calc(100% + (var(--ecran,100vw) - 100%) * var(--pleine));\n' +
'  margin-left:calc((100% - var(--ecran,100vw)) / 2 * var(--pleine));\n' +
'  max-width:var(--ecran,100vw)}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace le texte et le lien ci-dessous -->\n' +
'<!-- ICI : data-cle, un nom unique pour ce bandeau (mémorise la fermeture 7 jours) -->\n' +
'<div class="sio-an" data-cle="annonce-sept">\n' +
'  <span>Nouvelle masterclass gratuite jeudi à 20h &#8212; <a href="#">je réserve ma place</a></span>\n' +
'  <button type="button" aria-label="Fermer">&#10005;</button>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var all=document.querySelectorAll(".sio-an");\n' +
'  for(var i=0;i<all.length;i++){(function(b){\n' +
'    var cle="sio_"+b.getAttribute("data-cle");\n' +
'    try{ if(localStorage.getItem(cle)>Date.now()){b.style.display="none";return;} }catch(e){}\n' +
'    b.querySelector("button").addEventListener("click",function(){\n' +
'      b.style.display="none";\n' +
'      try{ localStorage.setItem(cle,Date.now()+7*86400000); }catch(e){}\n' +
'    });\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  /* largeur réellement disponible : l’écran, ou le cadre qui contient le bloc */\n' +
'  function dispo(el){\n' +
'    var p=el.parentNode;\n' +
'    while(p && p.nodeType===1 && p!==document.body && p!==document.documentElement){\n' +
'      var o=getComputedStyle(p);\n' +
'      if(o.overflowX!=="visible" && p.clientWidth) return p.clientWidth;\n' +
'      p=p.parentNode;\n' +
'    }\n' +
'    return document.documentElement.clientWidth;\n' +
'  }\n' +
'  function cale(){\n' +
'    var els=document.querySelectorAll(".sio-an");\n' +
'    for(var i=0;i<els.length;i++) els[i].style.setProperty("--ecran",dispo(els[i])+"px");\n' +
'  }\n' +
'  cale();\n' +
'  window.addEventListener("resize",cale);\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"progress", name:"Progression de lecture", tag:"JS",
desc:"Un filet fin en haut de page qui avance avec la lecture. Dans l’aperçu ci-dessous, il se remplit au fur et à mesure que tu fais défiler cette page.",
code:
'<!-- Barre de progression de lecture -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-pg{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --epaisseur:5px;   /* ICI : l’épaisseur du filet */\n' +
'  --piste:rgba(125,126,225,.16);  /* ICI : la couleur de la piste, derrière le filet */\n' +
'  --pleine:1;        /* ICI : 1 = pleine largeur de l\u2019écran, 0 = largeur de ta section */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --piste est la couleur de la piste, derrière le filet.\n' +
'     Laisse-la très discrète : c’est un repère, pas un élément de décor.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --epaisseur : l’épaisseur du filet. Entre 3 et 5px, au-delà c’est lourd.\n' +
'\n' +
'     LE COLLAGE EN HAUT\n' +
'     Le filet se colle en haut de la page publiée, mais reste dans le\n' +
'     flux dans l’éditeur : sinon il masquerait la barre d’outils.\n' +
'     Il avance selon la position de lecture dans la page entière.\n' +
'     En haut de page il est vide, donc presque invisible : c’est normal.\n' +
'     Fais défiler pour le voir se remplir. Pour vérifier qu’il est bien\n' +
'     posé, regarde la piste colorée, elle est visible dès le départ.\n' +
'\n' +
'     LA PLEINE LARGEUR\n' +
'     --pleine:1; fait prendre au bandeau toute la largeur de l’écran,\n' +
'     même si ta section Système.io est plus étroite. Mets 0 pour qu’il\n' +
'     reste sagement dans la largeur de ta section.\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-pg{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-pg{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-pg, .sio-pg *{box-sizing:border-box}\n' +
'.sio-pg{position:relative;height:var(--epaisseur);z-index:9990;background:var(--piste)}\n' +
'/* Le collage en haut ne s active que sur la page publiée, jamais dans l éditeur. */\n' +
'.sio-pg.sio-live{position:fixed;top:0;left:0;right:0}\n' +
'.sio-pg i{display:block;height:100%;width:0;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--g2));\n' +
'  box-shadow:0 0 12px -2px var(--c2);transition:width .1s linear}\n' +
'.sio-pg{width:calc(100% + (var(--ecran,100vw) - 100%) * var(--pleine));\n' +
'  margin-left:calc((100% - var(--ecran,100vw)) / 2 * var(--pleine));\n' +
'  max-width:var(--ecran,100vw)}\n' +
'\n' +
'</style>\n' +
'<div class="sio-pg"><i></i></div>\n' +
'<script>\n' +
'(function(){\n' +
'  var boite=document.querySelector(".sio-pg");\n' +
'  if(!boite)return;\n' +
'  var bar=boite.querySelector("i");\n' +
'  var editeur=location.hostname==="systeme.io"||location.pathname.indexOf("/dashboard/")===0;\n' +
'  if(!editeur){boite.classList.add("sio-live");}\n' +
'  function maj(){\n' +
'    var h=document.documentElement.scrollHeight-window.innerHeight;\n' +
'    var p=h>0?(window.pageYOffset/h)*100:0;\n' +
'    bar.style.width=Math.min(100,Math.max(0,p))+"%";\n' +
'  }\n' +
'  window.addEventListener("scroll",maj,{passive:true});\n' +
'  window.addEventListener("resize",maj);\n' +
'  maj();\n' +
'})();\n' +
'<\/script>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  /* largeur réellement disponible : l’écran, ou le cadre qui contient le bloc */\n' +
'  function dispo(el){\n' +
'    var p=el.parentNode;\n' +
'    while(p && p.nodeType===1 && p!==document.body && p!==document.documentElement){\n' +
'      var o=getComputedStyle(p);\n' +
'      if(o.overflowX!=="visible" && p.clientWidth) return p.clientWidth;\n' +
'      p=p.parentNode;\n' +
'    }\n' +
'    return document.documentElement.clientWidth;\n' +
'  }\n' +
'  function cale(){\n' +
'    var els=document.querySelectorAll(".sio-pg");\n' +
'    for(var i=0;i<els.length;i++) els[i].style.setProperty("--ecran",dispo(els[i])+"px");\n' +
'  }\n' +
'  cale();\n' +
'  window.addEventListener("resize",cale);\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"sticky", name:"Barre mobile d’achat", tag:"JS",
desc:"Collée en bas de l’écran, elle apparaît après un quart de page lue. Le bouton toujours à portée de pouce.",
code:
'<!-- Barre basse mobile -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-sk{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond de la barre */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du nom du produit */\n' +
'  --gris:#6E7077;    /* ICI : la couleur de la ligne de prix */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte du bouton */\n' +
'  --taille:16.5px;   /* ICI : la taille du nom du produit */\n' +
'  --taille2:17px;    /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:11px;    /* ICI : l’arrondi du bouton */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond de la barre, --txt le texte du bouton.\n' +
'     --encre colore le nom du produit, --gris la ligne de prix.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le nom du produit. --taille2 : le texte du bouton.\n' +
'     --arrondi : l’arrondi du bouton.\n' +
'\n' +
'     QUAND ELLE APPARAÎT\n' +
'     La barre monte après un quart de page lue, et redescend si on\n' +
'     remonte tout en haut.\n' +
'     Elle se colle en bas de la page publiée, mais reste dans le flux\n' +
'     dans l’éditeur : sinon elle gênerait ton travail.\n' +
'     Elle est pensée pour le mobile, mais s’affiche aussi sur ordinateur.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse,\n' +
'     en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/commande"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-sk, .sio-sk *{box-sizing:border-box}\n' +
'.sio-sk{position:relative;z-index:9988;display:flex;align-items:center;gap:14px;\n' +
'  padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));\n' +
'  background:var(--fond);border-top:1px solid #E7E4EA;font-family:var(--f);\n' +
'  box-shadow:0 -10px 30px -22px rgba(0,0,0,.8);\n' +
'  transform:translateY(120%);transition:transform .4s cubic-bezier(.22,1,.36,1)}\n' +
'/* Le collage en bas ne s active que sur la page publiée, jamais dans l éditeur. */\n' +
'.sio-sk.sio-live{position:fixed;left:0;right:0;bottom:0}\n' +
'.sio-sk.on{transform:translateY(0)}\n' +
'.sio-sk-txt{flex:1;min-width:0}\n' +
'.sio-sk-txt b{display:block;font-size:var(--taille);font-weight:800;\n' +
'  color:var(--encre);line-height:1.25}\n' +
'.sio-sk-txt span{font-size:calc(var(--taille) - 2px);font-weight:600;color:var(--gris)}\n' +
'.sio-sk a{flex:none;padding:14px 22px;border-radius:var(--arrondi);\n' +
'  color:var(--txt);text-decoration:none;font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille2);line-height:1;letter-spacing:.06em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
'  box-shadow:0 12px 26px -14px var(--c1)}\n' +
'@media (max-width:380px){.sio-sk{flex-wrap:wrap;gap:10px}\n' +
'  .sio-sk a{flex:1;text-align:center;padding:13px 16px;\n' +
'    font-size:calc(var(--taille2) - 2px)}}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-sk">\n' +
'  <div class="sio-sk-txt">\n' +
'    <b>Le Challenge System</b>\n' +
'    <span>ou 3 x 97 &#8364;</span>\n' +
'  </div>\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a href="#">Je commande</a>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var bar=document.querySelector(".sio-sk");\n' +
'  if(!bar)return;\n' +
'  var editeur=location.hostname==="systeme.io"||location.pathname.indexOf("/dashboard/")===0;\n' +
'  if(editeur){bar.style.transform="none";return;}\n' +
'  bar.classList.add("sio-live");\n' +
'  function maj(){\n' +
'    var h=document.documentElement.scrollHeight-window.innerHeight;\n' +
'    var p=h>0?window.pageYOffset/h:1;\n' +
'    if(p>0.25){bar.classList.add("on");}else{bar.classList.remove("on");}\n' +
'  }\n' +
'  window.addEventListener("scroll",maj,{passive:true});\n' +
'  maj();\n' +
'})();\n' +
'<\/script>'
}

];

/* =========================================================
   Rendu de la page
   ========================================================= */
var TEXTES = [
{
id:"titrecomplet", name:"Titre complet", tag:"JS",
desc:"Les quatre niveaux d’un en-tête : sur-titre, titre, sous-titre et texte, qui apparaissent l’un après l’autre. Chaque niveau se supprime en une ligne.",
code:
'<!-- Titre complet -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-tc{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale, celle du sur-titre */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --pastille:#F1EFFC;/* ICI : le fond du sur-titre. Écris transparent pour aucun fond */\n' +
'  --encre:#16161D;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du sous-titre et du texte */\n' +
'  --surtitre:13px;   /* ICI : la taille du sur-titre */\n' +
'  --titre:42px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --soustitre:21px;  /* ICI : la taille du sous-titre */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --ecart:150;       /* ICI : le décalage entre deux éléments, en millièmes de seconde */\n' +
'  --montee:14px;     /* ICI : de combien chaque élément monte en apparaissant */\n' +
'  --haut:46px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --marge-tel:18px;  /* ICI : la marge à gauche et à droite sur téléphone */\n' +
'  --aligne:center;   /* ICI : center = centré, left = aligné à gauche */\n' +
'  --cascade:1;       /* ICI : 1 = apparition l’un après l’autre, 0 = tout de suite */\n' +
'  --large-max:760px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Les quatre niveaux d’un en-tête de section : le sur-titre,\n' +
'     le titre, le sous-titre et le texte. Ils apparaissent l’un\n' +
'     après l’autre, de haut en bas, à l’arrivée sur la section.\n' +
'\n' +
'     TES TEXTES\n' +
'     Chaque niveau est annoncé par un commentaire ICI, plus bas :\n' +
'     le sur-titre est dans <em>, le titre dans <h2>, le sous-titre\n' +
'     dans <p class="sio-tc-sous">, et le texte dans le dernier <p>.\n' +
'     Supprime la ligne entière d’un niveau dont tu ne veux pas :\n' +
'     les autres se replacent tout seuls.\n' +
'     Dans le titre, entoure un mot de <em> et </em> pour le colorer.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 colore le sur-titre et les mots mis en avant.\n' +
'     --pastille est le fond du sur-titre : écris transparent pour\n' +
'     le laisser nu. --encre est la couleur du titre, --gris celle\n' +
'     du sous-titre et du texte.\n' +
'     --uni:1; donne un sur-titre d’une seule couleur, sans dégradé.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --surtitre, --titre, --soustitre et --taille règlent chacun\n' +
'     son niveau. Sur téléphone, le titre se réduit tout seul.\n' +
'     --aligne : center pour centrer, left pour aligner à gauche.\n' +
'     --haut : l’espace au-dessus et en dessous du bloc.\n' +
'     --marge-tel : la marge à gauche et à droite sur téléphone.\n' +
'\n' +
'     LA VITESSE\n' +
'     --ecart : le décalage entre deux niveaux. 150 = posé, 80 = vif.\n' +
'     --montee : de combien chaque élément monte en apparaissant.\n' +
'     --cascade:0; affiche tout d’un coup, sans animation.\n' +
'     Sans JavaScript, tout reste lisible : l’animation ne conditionne\n' +
'     jamais l’affichage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-tc{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-tc{\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-tc, .sio-tc *{box-sizing:border-box}\n' +
'.sio-tc{padding:var(--haut) 20px;font-family:var(--f);text-align:var(--aligne)}\n' +
'.sio-tc-in{max-width:var(--large-max);margin:0 auto}\n' +
'.sio-tc em.sio-tc-sur{display:inline-block;margin:0 0 16px;padding:7px 15px;\n' +
'  border-radius:999px;font-style:normal;font-size:var(--surtitre);font-weight:700;\n' +
'  letter-spacing:.14em;text-transform:uppercase;color:var(--c1);background:var(--pastille)}\n' +
'.sio-tc h2{margin:0;font-size:clamp(26px,5vw,var(--titre));line-height:1.15;\n' +
'  font-weight:800;letter-spacing:-.01em;color:var(--encre);text-wrap:balance}\n' +
'.sio-tc h2 em{font-style:normal;\n' +
'  background:linear-gradient(100deg,var(--c1),var(--g2d));\n' +
'  -webkit-background-clip:text;background-clip:text;color:transparent}\n' +
'.sio-tc-sous{margin:16px 0 0;font-size:var(--soustitre);line-height:1.45;\n' +
'  font-weight:600;color:var(--gris)}\n' +
'.sio-tc-txt{margin:16px 0 0;max-width:54ch;font-size:var(--taille);line-height:1.65;\n' +
'  color:var(--gris)}\n' +
'.sio-tc[style*="center"] .sio-tc-txt,.sio-tc-in .sio-tc-txt{margin-left:auto;margin-right:auto}\n' +
'.sio-tc-anim .sio-tc-pas{opacity:0;transform:translateY(var(--montee));\n' +
'  transition:opacity .6s ease,transform .6s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-tc-anim .sio-tc-pas.vu{opacity:1;transform:none}\n' +
'@media (max-width:520px){\n' +
'  .sio-tc{padding:32px var(--marge-tel)}\n' +
'  .sio-tc-sous{font-size:calc(var(--soustitre) - 2px)}\n' +
'}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-tc-anim .sio-tc-pas{opacity:1;transform:none;transition:none}\n' +
'}\n' +
'</style>\n' +
'<!-- ICI : remplace les quatre niveaux ci-dessous. Supprime la ligne d’un niveau dont tu ne veux pas -->\n' +
'<div class="sio-tc">\n' +
'  <div class="sio-tc-in">\n' +
'    <!-- ICI : LE SUR-TITRE -->\n' +
'    <em class="sio-tc-sur sio-tc-pas">Challenge System</em>\n' +
'    <!-- ICI : LE TITRE. <em>…</em> colore un mot -->\n' +
'    <h2 class="sio-tc-pas">Un lancement préparé une fois, <em>relancé toute l’année</em></h2>\n' +
'    <!-- ICI : LE SOUS-TITRE -->\n' +
'    <p class="sio-tc-sous sio-tc-pas">La méthode complète, de la promesse à la page de paiement.</p>\n' +
'    <!-- ICI : LE TEXTE -->\n' +
'    <p class="sio-tc-txt sio-tc-pas">Tu montes la structure une seule fois : les cinq jours du challenge, les e-mails, les pages et les automatisations. Ensuite, chaque session se duplique en deux clics, avec tes nouvelles dates.</p>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var blocs=document.querySelectorAll(".sio-tc");\n' +
'  for(var i=0;i<blocs.length;i++){(function(z){\n' +
'    if(!window.IntersectionObserver)return;\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-tc-anim");\n' +
'    var pas=z.querySelectorAll(".sio-tc-pas");\n' +
'    var ecart=parseFloat(getComputedStyle(z).getPropertyValue("--ecart"))||150;\n' +
'    var obs=new IntersectionObserver(function(e){\n' +
'      for(var j=0;j<e.length;j++){\n' +
'        if(!e[j].isIntersecting)continue;\n' +
'        for(var k=0;k<pas.length;k++){\n' +
'          setTimeout(function(el){return function(){el.classList.add("vu");};}(pas[k]),k*ecart);\n' +
'        }\n' +
'        obs.unobserve(e[j].target);\n' +
'      }\n' +
'    },{threshold:.25});\n' +
'    obs.observe(z);\n' +
'  })(blocs[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"titremot", name:"Titre mot à mot", tag:"JS",
desc:"Les mots du titre arrivent l’un après l’autre à l’arrivée sur la section. L’effet le plus sûr pour faire lire un titre en entier.",
code:
'<!-- Titre mot à mot -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-tm2{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale, celle des mots en avant */\n' +
'  --encre:#16161D;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte sous le titre */\n' +
'  --titre:40px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --taille:18px;     /* ICI : la taille du texte sous le titre */\n' +
'  --ecart:90;        /* ICI : le décalage entre deux mots, en millièmes de seconde */\n' +
'  --montee:16px;     /* ICI : de combien chaque mot monte en apparaissant */\n' +
'  --haut:40px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --marge-tel:18px;  /* ICI : la marge à gauche et à droite sur téléphone */\n' +
'  --cascade:1;       /* ICI : 1 = les mots apparaissent l’un après l’autre, 0 = tout de suite */\n' +
'  --large-max:760px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Les mots du titre arrivent l’un après l’autre quand on atteint\n' +
'     la section. C’est l’effet le plus sûr pour faire lire un titre\n' +
'     en entier, sans jamais gêner la lecture.\n' +
'\n' +
'     LES COULEURS\n' +
'     --encre est la couleur du titre, --gris celle du texte en dessous.\n' +
'     --c1 colore les mots que tu veux mettre en avant : dans le titre,\n' +
'     entoure-les de <em> et </em>, plus bas.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre sur grand écran. Sur téléphone,\n' +
'     il se réduit tout seul. --taille : le texte en dessous.\n' +
'     --haut : l’espace au-dessus et en dessous du bloc.\n' +
'     --marge-tel : la marge à gauche et à droite sur téléphone.\n' +
'\n' +
'     LA VITESSE\n' +
'     --ecart : le décalage entre deux mots. 90 = fluide, 150 = plus\n' +
'     théâtral, 40 = presque simultané.\n' +
'     --montee : de combien chaque mot monte en apparaissant.\n' +
'     --cascade:0; affiche le titre d’un coup, sans animation.\n' +
'\n' +
'     TES TEXTES\n' +
'     Le titre est dans le <h2>, le texte dans le <p> juste après.\n' +
'     Supprime la ligne du <p> si tu n’en veux pas.\n' +
'     Si le JavaScript ne se charge pas, le titre reste parfaitement\n' +
'     lisible : l’animation ne conditionne jamais l’affichage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-tm2, .sio-tm2 *{box-sizing:border-box}\n' +
'.sio-tm2{padding:var(--haut) 20px;font-family:var(--f);text-align:center}\n' +
'.sio-tm2-in{max-width:var(--large-max);margin:0 auto}\n' +
'.sio-tm2 h2{margin:0;font-size:clamp(26px,5vw,var(--titre));line-height:1.15;\n' +
'  font-weight:800;letter-spacing:-.01em;color:var(--encre);text-wrap:balance}\n' +
'.sio-tm2 h2 em{font-style:normal;color:var(--c1)}\n' +
'.sio-tm2 p{margin:18px auto 0;max-width:52ch;font-size:var(--taille);line-height:1.6;\n' +
'  color:var(--gris)}\n' +
'.sio-tm2-mot{display:inline-block;will-change:transform,opacity}\n' +
'.sio-tm2-anim .sio-tm2-mot{opacity:0;transform:translateY(var(--montee));\n' +
'  transition:opacity .5s ease,transform .5s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-tm2-anim .sio-tm2-mot.vu{opacity:1;transform:none}\n' +
'.sio-tm2-anim p{opacity:0;transition:opacity .6s ease}\n' +
'.sio-tm2-anim p.vu{opacity:1}\n' +
'@media (max-width:520px){ .sio-tm2{padding:30px var(--marge-tel)} }\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-tm2-anim .sio-tm2-mot,.sio-tm2-anim p{opacity:1;transform:none;transition:none}\n' +
'}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre et le texte ci-dessous. <em>…</em> met un mot en couleur -->\n' +
'<div class="sio-tm2">\n' +
'  <div class="sio-tm2-in">\n' +
'    <h2>Un lancement préparé une fois, <em>relancé toute l’année</em></h2>\n' +
'    <p>La structure, les pages et les automatisations, montées ensemble, pas à pas.</p>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var blocs=document.querySelectorAll(".sio-tm2");\n' +
'  for(var i=0;i<blocs.length;i++){(function(z){\n' +
'    if(!window.IntersectionObserver)return;\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    var h=z.querySelector("h2");\n' +
'    if(!h)return;\n' +
'    /* chaque mot devient un petit bloc, les balises <em> sont conservées */\n' +
'    (function decoupe(n){\n' +
'      var enfants=[].slice.call(n.childNodes);\n' +
'      for(var k=0;k<enfants.length;k++){\n' +
'        var e=enfants[k];\n' +
'        if(e.nodeType===3){\n' +
'          var mots=e.nodeValue.split(/(\\s+)/), frag=document.createDocumentFragment();\n' +
'          for(var m=0;m<mots.length;m++){\n' +
'            if(!mots[m])continue;\n' +
'            if(/^\\s+$/.test(mots[m])){ frag.appendChild(document.createTextNode(mots[m])); continue; }\n' +
'            var s=document.createElement("span");\n' +
'            s.className="sio-tm2-mot"; s.textContent=mots[m];\n' +
'            frag.appendChild(s);\n' +
'          }\n' +
'          e.parentNode.replaceChild(frag,e);\n' +
'        } else if(e.nodeType===1){ decoupe(e); }\n' +
'      }\n' +
'    })(h);\n' +
'    z.classList.add("sio-tm2-anim");\n' +
'    var mots=z.querySelectorAll(".sio-tm2-mot");\n' +
'    var p=z.querySelector("p");\n' +
'    var ecart=parseFloat(getComputedStyle(z).getPropertyValue("--ecart"))||90;\n' +
'    var obs=new IntersectionObserver(function(e){\n' +
'      for(var j=0;j<e.length;j++){\n' +
'        if(!e[j].isIntersecting)continue;\n' +
'        for(var k=0;k<mots.length;k++){\n' +
'          setTimeout(function(el){return function(){el.classList.add("vu");};}(mots[k]),k*ecart);\n' +
'        }\n' +
'        if(p) setTimeout(function(){ p.classList.add("vu"); },mots.length*ecart+120);\n' +
'        obs.unobserve(e[j].target);\n' +
'      }\n' +
'    },{threshold:.3});\n' +
'    obs.observe(z);\n' +
'  })(blocs[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"titreligne", name:"Titre dévoilé", tag:"JS",
desc:"Chaque ligne du titre se dévoile par le bas, comme derrière un rideau. Tu choisis où les lignes s’arrêtent.",
code:
'<!-- Titre dévoilé ligne par ligne -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-tl2{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale, celle des mots en avant */\n' +
'  --encre:#16161D;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte sous le titre */\n' +
'  --titre:42px;      /* ICI : la taille du titre sur grand écran */\n' +
'  --taille:18px;     /* ICI : la taille du texte sous le titre */\n' +
'  --ecart:160;       /* ICI : le décalage entre deux lignes, en millièmes de seconde */\n' +
'  --haut:44px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --marge-tel:18px;  /* ICI : la marge à gauche et à droite sur téléphone */\n' +
'  --cascade:1;       /* ICI : 1 = les lignes se dévoilent, 0 = tout de suite */\n' +
'  --large-max:820px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Chaque ligne du titre se dévoile par le bas, comme si elle\n' +
'     sortait de derrière un rideau. Très beau en haut d’une page\n' +
'     de vente, juste avant le bouton.\n' +
'\n' +
'     TES LIGNES\n' +
'     C’est toi qui décides où chaque ligne s’arrête : plus bas,\n' +
'     chaque ligne est une balise <span>. Recopie-en une pour en\n' +
'     ajouter, supprime-la pour en retirer.\n' +
'     Deux ou trois lignes suffisent : au-delà, l’effet s’étire.\n' +
'     Sur téléphone, une ligne trop longue se replie toute seule,\n' +
'     sans casser l’effet.\n' +
'\n' +
'     LES COULEURS\n' +
'     --encre est la couleur du titre, --gris celle du texte en dessous.\n' +
'     --c1 colore les mots mis en avant : entoure-les de <em> et </em>.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA VITESSE\n' +
'     --titre : la taille du titre. --taille : le texte en dessous.\n' +
'     --ecart : le décalage entre deux lignes. 160 = posé, 90 = vif.\n' +
'     --cascade:0; affiche le titre d’un coup, sans animation.\n' +
'     Sans JavaScript, tout reste lisible : l’animation ne conditionne\n' +
'     jamais l’affichage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Une ligne est coupée en deux : elle est trop longue pour la\n' +
'     largeur. Raccourcis-la, ou baisse --titre.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-tl2, .sio-tl2 *{box-sizing:border-box}\n' +
'.sio-tl2{padding:var(--haut) 20px;font-family:var(--f)}\n' +
'.sio-tl2-in{max-width:var(--large-max);margin:0 auto}\n' +
'.sio-tl2 h2{margin:0;font-size:clamp(26px,5vw,var(--titre));line-height:1.18;\n' +
'  font-weight:800;letter-spacing:-.01em;color:var(--encre)}\n' +
'.sio-tl2 h2 em{font-style:normal;color:var(--c1)}\n' +
'.sio-tl2 h2 span{display:block}\n' +
'.sio-tl2 p{margin:20px 0 0;max-width:52ch;font-size:var(--taille);line-height:1.6;\n' +
'  color:var(--gris)}\n' +
'.sio-tl2-anim h2 span{overflow:hidden}\n' +
'.sio-tl2-anim h2 span i{display:block;font-style:normal;transform:translateY(105%);\n' +
'  transition:transform .7s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-tl2-anim h2 span i.vu{transform:none}\n' +
'.sio-tl2-anim p{opacity:0;transform:translateY(10px);\n' +
'  transition:opacity .6s ease,transform .6s ease}\n' +
'.sio-tl2-anim p.vu{opacity:1;transform:none}\n' +
'@media (max-width:520px){ .sio-tl2{padding:30px var(--marge-tel)} }\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-tl2-anim h2 span i{transform:none;transition:none}\n' +
'  .sio-tl2-anim p{opacity:1;transform:none;transition:none}\n' +
'}\n' +
'</style>\n' +
'<!-- ICI : remplace les lignes du titre et le texte. <em>…</em> met un mot en couleur -->\n' +
'<div class="sio-tl2">\n' +
'  <div class="sio-tl2-in">\n' +
'    <h2>\n' +
'      <!-- ICI : LIGNE 1 -->\n' +
'      <span>Tu as déjà tout ce qu’il faut</span>\n' +
'      <!-- ICI : LIGNE 2 -->\n' +
'      <span>pour remplir ton <em>prochain challenge</em></span>\n' +
'    </h2>\n' +
'    <p>Il manque juste la structure qui transforme ton savoir-faire en lancement reproductible.</p>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var blocs=document.querySelectorAll(".sio-tl2");\n' +
'  for(var i=0;i<blocs.length;i++){(function(z){\n' +
'    if(!window.IntersectionObserver)return;\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    var lignes=z.querySelectorAll("h2 > span");\n' +
'    if(!lignes.length)return;\n' +
'    /* chaque ligne reçoit un calque intérieur, c’est lui qui glisse */\n' +
'    for(var k=0;k<lignes.length;k++){\n' +
'      var dedans=document.createElement("i");\n' +
'      while(lignes[k].firstChild) dedans.appendChild(lignes[k].firstChild);\n' +
'      lignes[k].appendChild(dedans);\n' +
'    }\n' +
'    z.classList.add("sio-tl2-anim");\n' +
'    var calques=z.querySelectorAll("h2 > span > i");\n' +
'    var p=z.querySelector("p");\n' +
'    var ecart=parseFloat(getComputedStyle(z).getPropertyValue("--ecart"))||160;\n' +
'    var obs=new IntersectionObserver(function(e){\n' +
'      for(var j=0;j<e.length;j++){\n' +
'        if(!e[j].isIntersecting)continue;\n' +
'        for(var k=0;k<calques.length;k++){\n' +
'          setTimeout(function(el){return function(){el.classList.add("vu");};}(calques[k]),k*ecart);\n' +
'        }\n' +
'        if(p) setTimeout(function(){ p.classList.add("vu"); },calques.length*ecart+200);\n' +
'        obs.unobserve(e[j].target);\n' +
'      }\n' +
'    },{threshold:.3});\n' +
'    obs.observe(z);\n' +
'  })(blocs[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"surligne", name:"Mot surligné", tag:"JS",
desc:"Un trait de surligneur se trace derrière les mots importants, comme au feutre.",
code:
'<!-- Mot surligné -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-sl{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire, celle du surligneur */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la claire) */\n' +
'  --encre:#16161D;   /* ICI : la couleur du texte */\n' +
'  --titre:36px;      /* ICI : la taille du texte sur grand écran */\n' +
'  --epaisseur:62%;   /* ICI : la hauteur du trait de surligneur */\n' +
'  --bas:0%;          /* ICI : à quelle hauteur le trait se place */\n' +
'  --duree:.9s;       /* ICI : le temps que met le trait à se tracer */\n' +
'  --haut:40px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --marge-tel:18px;  /* ICI : la marge à gauche et à droite sur téléphone */\n' +
'  --cascade:1;       /* ICI : 1 = le trait se trace à l’arrivée, 0 = tout de suite */\n' +
'  --large-max:780px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Un trait de surligneur se trace derrière les mots importants,\n' +
'     comme au feutre, quand on arrive sur la phrase. C’est le moyen\n' +
'     le plus simple de faire retenir une promesse.\n' +
'\n' +
'     TES MOTS SURLIGNÉS\n' +
'     Dans la phrase, plus bas, entoure de <mark> et </mark> les mots\n' +
'     à surligner. Tu peux en mettre plusieurs : les traits se tracent\n' +
'     l’un après l’autre.\n' +
'     Garde-les courts, deux ou trois mots : un surlignage trop long\n' +
'     perd son effet.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c2 est la couleur du surligneur, --c1 la couleur dominante.\n' +
'     --c2d est le mélange des deux : il termine le dégradé du trait.\n' +
'     --uni:1; donne un trait d’une seule couleur, la claire.\n' +
'     --encre est la couleur du texte : garde-la foncée, elle doit\n' +
'     rester lisible par-dessus le trait.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du texte. --epaisseur : la hauteur du trait,\n' +
'     en pourcentage de la ligne. --bas : à quelle hauteur il se place.\n' +
'     --duree : le temps que met le trait à se tracer.\n' +
'     --cascade:0; affiche les traits déjà tracés.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le trait recouvre le texte : baisse --epaisseur, ou remonte --bas.\n' +
'     Le trait ne se trace pas : le mot surligné passe à la ligne.\n' +
'     Raccourcis-le, ou baisse --titre.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-sl{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-sl{\n' +
'  --g2d:color-mix(in srgb,var(--c2) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-sl, .sio-sl *{box-sizing:border-box}\n' +
'.sio-sl{padding:var(--haut) 20px;font-family:var(--f);text-align:center}\n' +
'.sio-sl-in{max-width:var(--large-max);margin:0 auto}\n' +
'.sio-sl p{margin:0;font-size:clamp(23px,4.4vw,var(--titre));line-height:1.35;\n' +
'  font-weight:700;color:var(--encre);text-wrap:balance}\n' +
'.sio-sl mark{position:relative;background:transparent;color:inherit;\n' +
'  padding:0 .06em;white-space:nowrap}\n' +
'.sio-sl mark:before{content:"";position:absolute;left:0;right:0;bottom:var(--bas);\n' +
'  height:var(--epaisseur);z-index:-1;border-radius:.18em;\n' +
'  background:linear-gradient(100deg,var(--c2),var(--g2d))}\n' +
'.sio-sl-anim mark:before{transform:scaleX(0);transform-origin:left center;\n' +
'  transition:transform var(--duree) cubic-bezier(.22,1,.36,1)}\n' +
'.sio-sl-anim mark.vu:before{transform:none}\n' +
'@media (max-width:520px){ .sio-sl{padding:28px var(--marge-tel)} }\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-sl-anim mark:before{transform:none;transition:none}\n' +
'}\n' +
'</style>\n' +
'<!-- ICI : remplace la phrase. <mark>…</mark> surligne les mots importants -->\n' +
'<div class="sio-sl">\n' +
'  <div class="sio-sl-in">\n' +
'    <p>Tu construis ton tunnel <mark>une seule fois</mark>, et tu le relances <mark>autant que tu veux</mark>.</p>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var blocs=document.querySelectorAll(".sio-sl");\n' +
'  for(var i=0;i<blocs.length;i++){(function(z){\n' +
'    if(!window.IntersectionObserver)return;\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-sl-anim");\n' +
'    var mots=z.querySelectorAll("mark");\n' +
'    var obs=new IntersectionObserver(function(e){\n' +
'      for(var j=0;j<e.length;j++){\n' +
'        if(!e[j].isIntersecting)continue;\n' +
'        for(var k=0;k<mots.length;k++){\n' +
'          setTimeout(function(el){return function(){el.classList.add("vu");};}(mots[k]),k*420);\n' +
'        }\n' +
'        obs.unobserve(e[j].target);\n' +
'      }\n' +
'    },{threshold:.4});\n' +
'    obs.observe(z);\n' +
'  })(blocs[i]);}\n' +
'})();\n' +
'<\/script>'
}

];

var CONTENU = [
{
id:"voletsvisuel", name:"Volets avec visuel", tag:"JS",
desc:"Des titres qui s’ouvrent à gauche, et le visuel qui change à droite selon le titre ouvert. Sur téléphone, le visuel passe au-dessus.",
code:
'<!-- Volets avec visuel -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-dv{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F5F5F7;    /* ICI : le fond du bloc. Écris transparent pour aucun fond */\n' +
'  --encre:#16161D;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des textes */\n' +
'  --ligne:#DFDFE6;   /* ICI : la couleur des traits de séparation */\n' +
'  --titre:30px;      /* ICI : la taille des titres */\n' +
'  --taille:17px;     /* ICI : la taille des textes */\n' +
'  --arrondi:24px;    /* ICI : l’arrondi du bloc et du visuel */\n' +
'  --colonne:300px;   /* ICI : largeur mini d’une colonne */\n' +
'  --ecart:50px;      /* ICI : l’espace entre le texte et le visuel */\n' +
'  --marge-tel:18px;  /* ICI : la marge à gauche et à droite sur téléphone */\n' +
'  --cascade:1;       /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  --large-max:1180px;/* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     À gauche, des titres qui s’ouvrent au clic. À droite, le visuel\n' +
'     qui correspond au titre ouvert. Parfait pour présenter trois ou\n' +
'     quatre facettes d’une offre sans allonger la page.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     --uni:1; donne une flèche d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond du bloc, --ligne la couleur des traits.\n' +
'     --encre est la couleur des titres, --gris celle des textes.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : les titres. --taille : les textes.\n' +
'     --arrondi : l’arrondi du bloc et du visuel.\n' +
'     --ecart : l’espace entre la colonne de texte et le visuel.\n' +
'     --colonne : largeur mini d’une colonne. Au-dessous, le visuel\n' +
'     passe au-dessus du texte — c’est ce qui se produit sur téléphone.\n' +
'     --marge-tel : la marge à gauche et à droite sur téléphone.\n' +
'\n' +
'     TES VOLETS\n' +
'     Chaque volet est annoncé par un commentaire ICI : VOLET, plus bas.\n' +
'     Tu peux changer le titre et le texte. Pour en ajouter un,\n' +
'     recopie un volet entier, puis recopie aussi son image.\n' +
'     Trois ou quatre volets suffisent.\n' +
'     Le premier est ouvert au départ : c’est celui qui porte le mot\n' +
'     ouvert dans sa première ligne. Déplace ce mot pour en ouvrir\n' +
'     un autre à l’arrivée.\n' +
'\n' +
'     TES IMAGES\n' +
'     Chaque volet a son image, dans la colonne de droite, annoncée par\n' +
'     un commentaire ICI : IMAGE. Remplace l’adresse dans src="..."\n' +
'     et la description dans alt="...".\n' +
'     Garde le même nombre d’images que de volets, et dans le même\n' +
'     ordre : la première image va avec le premier volet.\n' +
'     Format conseillé : des images de même proportion, par exemple\n' +
'     1200 sur 900 pixels, pour que le bloc ne saute pas d’une à l’autre.\n' +
'     Sans image, un cadre coloré s’affiche à la place.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le visuel ne change pas : il y a moins d’images que de volets,\n' +
'     ou l’ordre a été inversé.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-dv{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-dv{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-dv, .sio-dv *{box-sizing:border-box}\n' +
'.sio-dv{padding:44px 34px;border-radius:var(--arrondi);background:var(--fond);\n' +
'  font-family:var(--f)}\n' +
'.sio-dv-duo{display:grid;gap:var(--ecart);align-items:center;\n' +
'  max-width:var(--large-max);margin:0 auto;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-dv-volets{min-width:0}\n' +
'.sio-dv-volet{border-bottom:1px solid var(--ligne)}\n' +
'.sio-dv-volet:first-child{border-top:1px solid var(--ligne)}\n' +
'.sio-dv-volet button{display:flex;align-items:center;justify-content:space-between;gap:16px;\n' +
'  width:100%;margin:0;border:0;padding:22px 2px;cursor:pointer;background:transparent;\n' +
'  font-family:inherit;font-size:clamp(22px,2.4vw,var(--titre));font-weight:700;\n' +
'  line-height:1.2;color:var(--encre);text-align:left}\n' +
'.sio-dv-volet button:focus-visible{outline:2px solid var(--c1);outline-offset:3px;border-radius:6px}\n' +
'.sio-dv-fleche{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:28px;height:28px;border-radius:50%;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));transition:transform .3s ease}\n' +
'.sio-dv-fleche:before{content:"";width:7px;height:7px;margin-top:-3px;\n' +
'  border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg)}\n' +
'.sio-dv-volet.ouvert .sio-dv-fleche{transform:rotate(180deg)}\n' +
'.sio-dv-txt{margin:0;padding:0 2px 24px;font-size:var(--taille);line-height:1.6;\n' +
'  color:var(--gris);max-width:46ch}\n' +
'.sio-dv-js .sio-dv-txt{display:none}\n' +
'.sio-dv-js .sio-dv-volet.ouvert .sio-dv-txt{display:block;animation:sioDvOuvre .35s ease}\n' +
'@keyframes sioDvOuvre{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}\n' +
'.sio-dv-vis{min-width:0;position:relative}\n' +
'.sio-dv-vis img,.sio-dv-cadre{display:block;width:100%;height:auto;aspect-ratio:4/3;\n' +
'  object-fit:cover;border-radius:var(--arrondi);\n' +
'  box-shadow:0 36px 70px -46px rgba(40,34,90,.75)}\n' +
'.sio-dv-cadre{background:linear-gradient(140deg,var(--c1),var(--g2d))}\n' +
'.sio-dv-js .sio-dv-vis img,.sio-dv-js .sio-dv-cadre{display:none}\n' +
'.sio-dv-js .sio-dv-vis .vu{display:block;animation:sioDvFondu .4s ease}\n' +
'@keyframes sioDvFondu{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}\n' +
'.sio-dv-anim .sio-dv-duo{opacity:0;transform:translateY(18px);\n' +
'  transition:opacity .6s ease,transform .6s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-dv-anim .sio-dv-duo.vu{opacity:1;transform:none}\n' +
'@media (max-width:760px){\n' +
'  .sio-dv{padding:28px var(--marge-tel)}\n' +
'  .sio-dv-duo{gap:26px}\n' +
'  .sio-dv-vis{order:-1}\n' +
'  .sio-dv-volet button{padding:18px 2px;font-size:calc(var(--titre) - 8px)}\n' +
'  .sio-dv-txt{font-size:calc(var(--taille) - 1px);padding-bottom:20px}\n' +
'}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-dv-fleche{transition:none}\n' +
'  .sio-dv-js .sio-dv-volet.ouvert .sio-dv-txt,\n' +
'  .sio-dv-js .sio-dv-vis .vu{animation:none}\n' +
'  .sio-dv-anim .sio-dv-duo{opacity:1;transform:none}\n' +
'}\n' +
'</style>\n' +
'<!-- ICI : remplace les titres, les textes et les images ci-dessous -->\n' +
'<div class="sio-dv">\n' +
'  <div class="sio-dv-duo">\n' +
'\n' +
'    <div class="sio-dv-volets">\n' +
'\n' +
'      <!-- ICI : VOLET 1 (le mot ouvert indique celui qui est ouvert au départ) -->\n' +
'      <div class="sio-dv-volet ouvert">\n' +
'        <button type="button" aria-expanded="true">Le challenge<span class="sio-dv-fleche"></span></button>\n' +
'        <p class="sio-dv-txt">Cinq jours pour faire vivre ta méthode à ta communauté. Tu prépares une fois le déroulé, les e-mails et les pages, puis tu relances quand tu veux.</p>\n' +
'      </div>\n' +
'\n' +
'      <!-- ICI : VOLET 2 -->\n' +
'      <div class="sio-dv-volet">\n' +
'        <button type="button" aria-expanded="false">Le tunnel<span class="sio-dv-fleche"></span></button>\n' +
'        <p class="sio-dv-txt">Page d’inscription, page de vente, page de paiement et remerciement : tout est relié, testé, et prêt à être dupliqué pour la session suivante.</p>\n' +
'      </div>\n' +
'\n' +
'      <!-- ICI : VOLET 3 -->\n' +
'      <div class="sio-dv-volet">\n' +
'        <button type="button" aria-expanded="false">Les automatisations<span class="sio-dv-fleche"></span></button>\n' +
'        <p class="sio-dv-txt">Les séquences partent toutes seules, au bon moment, avec les bonnes relances. Tu retrouves tes soirées, et tes inscrites ne t’oublient pas.</p>\n' +
'      </div>\n' +
'\n' +
'    </div>\n' +
'\n' +
'    <div class="sio-dv-vis">\n' +
'      <!-- ICI : IMAGE du volet 1 — remplace cette ligne par <img src="ton-image.jpg" alt="Description"> -->\n' +
'      <div class="sio-dv-cadre"></div>\n' +
'      <!-- ICI : IMAGE du volet 2 -->\n' +
'      <div class="sio-dv-cadre"></div>\n' +
'      <!-- ICI : IMAGE du volet 3 -->\n' +
'      <div class="sio-dv-cadre"></div>\n' +
'    </div>\n' +
'\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var blocs=document.querySelectorAll(".sio-dv");\n' +
'  for(var i=0;i<blocs.length;i++){(function(z){\n' +
'    z.classList.add("sio-dv-js");\n' +
'    var volets=z.querySelectorAll(".sio-dv-volet");\n' +
'    var vis=z.querySelectorAll(".sio-dv-vis > img, .sio-dv-vis > .sio-dv-cadre");\n' +
'    function montre(n){\n' +
'      for(var k=0;k<volets.length;k++){\n' +
'        var ouvert=(k===n);\n' +
'        volets[k].className="sio-dv-volet"+(ouvert?" ouvert":"");\n' +
'        var b=volets[k].querySelector("button");\n' +
'        if(b) b.setAttribute("aria-expanded",ouvert?"true":"false");\n' +
'        if(vis[k]) vis[k].className=(vis[k].tagName==="IMG"?"":"sio-dv-cadre")+(ouvert?" vu":"");\n' +
'      }\n' +
'    }\n' +
'    for(var k=0;k<volets.length;k++){(function(n){\n' +
'      var b=volets[n].querySelector("button");\n' +
'      if(b) b.addEventListener("click",function(){ montre(n); });\n' +
'    })(k);}\n' +
'    var depart=0;\n' +
'    for(var k=0;k<volets.length;k++){ if(volets[k].className.indexOf("ouvert")>-1){ depart=k; break; } }\n' +
'    montre(depart);\n' +
'    if(!window.IntersectionObserver)return;\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-dv-anim");\n' +
'    var duo=z.querySelector(".sio-dv-duo");\n' +
'    var obs=new IntersectionObserver(function(e){\n' +
'      for(var j=0;j<e.length;j++){ if(e[j].isIntersecting){ e[j].target.classList.add("vu"); obs.unobserve(e[j].target); } }\n' +
'    },{threshold:.15});\n' +
'    obs.observe(duo);\n' +
'  })(blocs[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"thematiques", name:"Cartes thématiques", tag:"JS",
desc:"Des cartes avec un emoji, un titre et un volet qui s’ouvre au clic. Elles se rangent toutes seules et apparaissent en cascade.",
code:
'<!-- Cartes thématiques -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-th{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F8F7FD;    /* ICI : le fond derrière les cartes. Écris transparent pour aucun fond */\n' +
'  --carte:#ffffff;   /* ICI : le fond des cartes */\n' +
'  --volet:#F1F3F8;   /* ICI : le fond du volet « Voir les thématiques » */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur des titres */\n' +
'  --gris:#6B7076;    /* ICI : la couleur des listes */\n' +
'  --titre:21px;      /* ICI : la taille des titres de carte */\n' +
'  --taille:15px;     /* ICI : la taille du volet et des listes */\n' +
'  --emoji:38px;      /* ICI : la taille des emojis */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi des cartes */\n' +
'  --ecart:16px;      /* ICI : l’espace entre les cartes */\n' +
'  --colonne:200px;   /* ICI : largeur mini d’une carte */\n' +
'  --marge-tel:20px;  /* ICI : la marge à gauche et à droite sur téléphone */\n' +
'  --cascade:1;       /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  --large-max:1180px;/* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde la flèche blanche lisible.\n' +
'     --uni:1; donne des ronds d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond derrière les cartes : écris transparent pour\n' +
'     le retirer. --carte est le fond des cartes, --volet celui du\n' +
'     bandeau « Voir les thématiques ».\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : les titres. --taille : le volet et les listes.\n' +
'     --emoji : la taille des emojis. --arrondi : l’arrondi des cartes.\n' +
'     --ecart : l’espace entre les cartes.\n' +
'     --colonne : largeur mini d’une carte. Les cartes se rangent toutes\n' +
'     seules : cinq de front sur grand écran, puis trois, puis deux, puis\n' +
'     une seule sur téléphone.\n' +
'     --marge-tel : la marge à gauche et à droite sur téléphone.\n' +
'\n' +
'     TES CARTES\n' +
'     Chaque carte est annoncée par un commentaire ICI : CARTE, plus bas.\n' +
'     Tu peux changer l’emoji, le titre, et chaque ligne de la liste.\n' +
'     Pour ajouter une ligne, recopie une ligne <li> entière.\n' +
'     Pour ajouter une carte, recopie un bloc de carte entier.\n' +
'     Dans un titre, la balise <br> force le retour à la ligne :\n' +
'     déplace-la ou supprime-la selon ton texte.\n' +
'\n' +
'     LES EMOJIS\n' +
'     Ils sont écrits en code, par exemple &#x1F49C; pour le cœur violet,\n' +
'     car Système.io refuse les emojis collés directement. Pour en\n' +
'     changer, cherche ton emoji sur emojipedia.org, prends la ligne\n' +
'     Codepoints, et remplace seulement les lettres et chiffres.\n' +
'\n' +
'     LES VOLETS\n' +
'     Ils sont fermés au départ et s’ouvrent au clic. Sans JavaScript,\n' +
'     toutes les listes restent visibles : rien ne disparaît jamais.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-th{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-th{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-th, .sio-th *{box-sizing:border-box}\n' +
'.sio-th{padding:36px 20px;background:var(--fond);font-family:var(--f)}\n' +
'.sio-th-grille{display:grid;gap:var(--ecart);align-items:start;\n' +
'  max-width:var(--large-max);margin:0 auto;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-th-carte{min-width:0;display:flex;flex-direction:column;align-items:center;\n' +
'  padding:24px 18px 20px;border-radius:var(--arrondi);background:var(--carte);\n' +
'  box-shadow:0 20px 44px -34px rgba(40,34,90,.5);\n' +
'  transition:box-shadow .3s ease,transform .3s ease,opacity .55s ease}\n' +
'.sio-th-carte:hover{box-shadow:0 22px 46px -26px var(--c1);transform:translateY(-2px)}\n' +
'.sio-th-emoji{font-size:var(--emoji);line-height:1;margin-bottom:12px}\n' +
'.sio-th-titre{margin:0 0 18px;font-size:var(--titre);font-weight:700;line-height:1.25;\n' +
'  text-align:center;color:var(--encre);overflow-wrap:break-word;max-width:100%}\n' +
'.sio-th-volet{width:100%;max-width:100%;border-radius:10px;background:var(--volet);\n' +
'  overflow:hidden;text-align:left}\n' +
'.sio-th-volet button{display:flex;align-items:center;justify-content:space-between;gap:10px;\n' +
'  width:100%;margin:0;border:0;padding:13px 14px;cursor:pointer;background:transparent;\n' +
'  font-family:inherit;font-size:var(--taille);font-style:italic;font-weight:400;\n' +
'  line-height:1.35;color:var(--encre);text-align:left}\n' +
'.sio-th-volet button:focus-visible{outline:2px solid var(--c1);outline-offset:-2px}\n' +
'.sio-th-rond{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:19px;height:19px;border-radius:50%;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  transition:transform .3s ease}\n' +
'.sio-th-rond:before{content:"";width:5px;height:5px;\n' +
'  border-right:1.6px solid #fff;border-bottom:1.6px solid #fff;\n' +
'  transform:translateY(-1px) rotate(45deg)}\n' +
'.sio-th-volet.ouvert .sio-th-rond{transform:rotate(180deg)}\n' +
'.sio-th-liste{margin:0;padding:0 16px 18px 34px;list-style:disc outside;\n' +
'  font-size:calc(var(--taille) - 1px);line-height:1.5;color:var(--gris)}\n' +
'.sio-th-liste li{margin:0 0 5px;overflow-wrap:break-word}\n' +
'.sio-th-js .sio-th-liste{display:none}\n' +
'.sio-th-js .sio-th-volet.ouvert .sio-th-liste{display:block;animation:sioThOuvre .35s ease}\n' +
'@keyframes sioThOuvre{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}\n' +
'.sio-th-anim .sio-th-carte{opacity:0;transform:translateY(18px)}\n' +
'.sio-th-anim .sio-th-carte.vu{opacity:1;transform:none}\n' +
'@media (max-width:520px){\n' +
'  .sio-th{padding:26px var(--marge-tel)}\n' +
'  .sio-th-grille{grid-template-columns:minmax(0,1fr)}\n' +
'  .sio-th-titre{font-size:calc(var(--titre) - 2px);margin-bottom:16px}\n' +
'  .sio-th-liste{font-size:calc(var(--taille) - 2px)}\n' +
'}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-th-carte,.sio-th-rond{transition:none}\n' +
'  .sio-th-js .sio-th-volet.ouvert .sio-th-liste{animation:none}\n' +
'  .sio-th-anim .sio-th-carte{opacity:1;transform:none}\n' +
'}\n' +
'</style>\n' +
'<!-- ICI : remplace les emojis, les titres et les listes ci-dessous -->\n' +
'<div class="sio-th">\n' +
'  <div class="sio-th-grille">\n' +
'\n' +
'    <!-- ICI : CARTE 1 -->\n' +
'    <div class="sio-th-carte">\n' +
'      <div class="sio-th-emoji">&#x1F58B;&#xFE0F;</div>\n' +
'      <div class="sio-th-titre">Pages formulaire<br>(capture)</div>\n' +
'      <div class="sio-th-volet">\n' +
'        <button type="button" aria-expanded="false">Voir les thématiques<span class="sio-th-rond"></span></button>\n' +
'        <ul class="sio-th-liste">\n' +
'          <li>Inscription e-book ou check-list gratuite</li>\n' +
'          <li>Inscription challenge ou masterclass</li>\n' +
'          <li>Inscription quiz gratuit</li>\n' +
'          <li>Inscription tuto vidéo gratuit</li>\n' +
'          <li>Inscription formation vidéo gratuite</li>\n' +
'          <li>Inscription replays</li>\n' +
'          <li>Inscription newsletter</li>\n' +
'          <li>Inscription appel découverte</li>\n' +
'          <li>Inscription offre en avant-première</li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'\n' +
'    <!-- ICI : CARTE 2 -->\n' +
'    <div class="sio-th-carte">\n' +
'      <div class="sio-th-emoji">&#x1F4C4;</div>\n' +
'      <div class="sio-th-titre">Pages de vente</div>\n' +
'      <div class="sio-th-volet">\n' +
'        <button type="button" aria-expanded="false">Voir les thématiques<span class="sio-th-rond"></span></button>\n' +
'        <ul class="sio-th-liste">\n' +
'          <li>Vente e-book</li>\n' +
'          <li>Vente templates</li>\n' +
'          <li>Vente formation</li>\n' +
'          <li>Vente accompagnement</li>\n' +
'          <li>Vente événement</li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'\n' +
'    <!-- ICI : CARTE 3 -->\n' +
'    <div class="sio-th-carte">\n' +
'      <div class="sio-th-emoji">&#x1F911;</div>\n' +
'      <div class="sio-th-titre">Pages de<br>paiement</div>\n' +
'      <div class="sio-th-volet">\n' +
'        <button type="button" aria-expanded="false">Voir les thématiques<span class="sio-th-rond"></span></button>\n' +
'        <ul class="sio-th-liste">\n' +
'          <li>Paiement e-book</li>\n' +
'          <li>Paiement templates</li>\n' +
'          <li>Paiement formation vidéo</li>\n' +
'          <li>Paiement accompagnement</li>\n' +
'          <li>Paiement session de coaching</li>\n' +
'          <li>Paiement événement</li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'\n' +
'    <!-- ICI : CARTE 4 -->\n' +
'    <div class="sio-th-carte">\n' +
'      <div class="sio-th-emoji">&#x1F49C;</div>\n' +
'      <div class="sio-th-titre">Pages de<br>remerciement</div>\n' +
'      <div class="sio-th-volet">\n' +
'        <button type="button" aria-expanded="false">Voir les thématiques<span class="sio-th-rond"></span></button>\n' +
'        <ul class="sio-th-liste">\n' +
'          <li>Remerciement contenu gratuit, sans vidéo</li>\n' +
'          <li>Remerciement contenu gratuit, avec vidéo</li>\n' +
'          <li>Remerciement inscription challenge</li>\n' +
'          <li>Remerciement achat formation</li>\n' +
'          <li>Remerciement achat accompagnement</li>\n' +
'          <li>Remerciement événement</li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'\n' +
'    <!-- ICI : CARTE 5 -->\n' +
'    <div class="sio-th-carte">\n' +
'      <div class="sio-th-emoji">&#x1F517;</div>\n' +
'      <div class="sio-th-titre">Arbres à liens</div>\n' +
'      <div class="sio-th-volet">\n' +
'        <button type="button" aria-expanded="false">Voir les thématiques<span class="sio-th-rond"></span></button>\n' +
'        <ul class="sio-th-liste">\n' +
'          <li>Arbre à liens classique</li>\n' +
'          <li>Arbre à liens girly</li>\n' +
'          <li>Arbre à liens naturel</li>\n' +
'          <li>Arbre à liens chic</li>\n' +
'          <li>Arbre à liens artiste</li>\n' +
'          <li>Arbre à liens business</li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var blocs=document.querySelectorAll(".sio-th");\n' +
'  for(var i=0;i<blocs.length;i++){(function(z){\n' +
'    z.classList.add("sio-th-js");\n' +
'    var btns=z.querySelectorAll(".sio-th-volet button");\n' +
'    for(var k=0;k<btns.length;k++){(function(b){\n' +
'      b.addEventListener("click",function(){\n' +
'        var ouvert=b.parentNode.classList.toggle("ouvert");\n' +
'        b.setAttribute("aria-expanded",ouvert?"true":"false");\n' +
'      });\n' +
'    })(btns[k]);}\n' +
'    if(!window.IntersectionObserver)return;\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-th-anim");\n' +
'    var cartes=z.querySelectorAll(".sio-th-carte");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var j=0;j<entrees.length;j++){\n' +
'        if(!entrees[j].isIntersecting)continue;\n' +
'        var el=entrees[j].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<cartes.length;k++){ cartes[k].setAttribute("data-i",k); obs.observe(cartes[k]); }\n' +
'  })(blocs[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"faq", name:"FAQ en accordéon", tag:"CSS",
desc:"Sans une ligne de JavaScript : les questions se déplient nativement, et restent accessibles au clavier.",
code:
'<!-- FAQ en accordéon -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-faq{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond des questions */\n' +
'  --bord:#E6E3EE;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des questions */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des réponses */\n' +
'  --taille:19px;     /* ICI : la taille des questions */\n' +
'  --taille2:17px;    /* ICI : la taille des réponses */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi des blocs */\n' +
'  --large-max:760px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond des questions, --bord leur contour.\n' +
'     --encre colore les questions, --gris les réponses.\n' +
'     --c1 colore aussi la flèche et le contour de la question ouverte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : les questions. --taille2 : les réponses.\n' +
'     --arrondi : l’arrondi des blocs.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LES QUESTIONS\n' +
'     Chaque question est un bloc <details>, plus bas.\n' +
'     Le mot open sur la première la laisse ouverte à l’arrivée :\n' +
'     garde-le, une FAQ entièrement fermée n’invite pas à cliquer.\n' +
'     Pour ajouter une question, recopie un bloc <details> entier.\n' +
'     Six à huit questions suffisent : au-delà, personne ne descend.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-faq, .sio-faq *{box-sizing:border-box}\n' +
'.sio-faq{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-faq details{margin-bottom:10px;border:1px solid var(--bord);\n' +
'  border-radius:var(--arrondi);background:var(--fond);overflow:hidden;\n' +
'  transition:border-color .2s ease,box-shadow .2s ease}\n' +
'.sio-faq details[open]{border-color:var(--c1);box-shadow:0 16px 36px -28px var(--c1)}\n' +
'.sio-faq summary{position:relative;list-style:none;cursor:pointer;\n' +
'  padding:19px 54px 19px 22px;font-weight:700;font-size:var(--taille);\n' +
'  line-height:1.35;color:var(--encre)}\n' +
'.sio-faq summary::-webkit-details-marker{display:none}\n' +
'.sio-faq summary::after{content:"";position:absolute;right:22px;top:50%;\n' +
'  width:10px;height:10px;margin-top:-7px;\n' +
'  border-right:2.5px solid var(--c1);border-bottom:2.5px solid var(--c1);\n' +
'  transform:rotate(45deg);transition:transform .25s ease,margin-top .25s ease}\n' +
'.sio-faq details[open] summary::after{transform:rotate(-135deg);margin-top:-2px}\n' +
'.sio-faq p{margin:0;padding:0 22px 22px;font-size:var(--taille2);\n' +
'  line-height:1.65;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace les questions et les réponses ci-dessous -->\n' +
'<div class="sio-faq">\n' +
'  <details open>\n' +
'    <summary>Combien de temps faut-il pour tout mettre en place ?</summary>\n' +
'    <p>Compte trois semaines entre le premier module et ton challenge en ligne, à raison de deux heures par jour.</p>\n' +
'  </details>\n' +
'  <details>\n' +
'    <summary>Est-ce que ça marche si je pars de zéro ?</summary>\n' +
'    <p>Oui, à une condition : savoir à qui tu parles. Le reste est fourni et se duplique.</p>\n' +
'  </details>\n' +
'  <details>\n' +
'    <summary>Et si je n’y arrive pas toute seule ?</summary>\n' +
'    <p>Chaque étape a son point de contrôle, et tu peux poser tes questions à tout moment.</p>\n' +
'  </details>\n' +
'</div>'
},
{
id:"timeline", name:"Timeline de programme", tag:"CSS",
desc:"Le déroulé semaine par semaine, avec un fil conducteur vertical. Rend concret ce qu’on achète.",
code:
'<!-- Timeline de programme -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-tl{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur des numéros */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond de ta section */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des textes */\n' +
'  --taille:20px;     /* ICI : la taille des titres */\n' +
'  --taille2:17px;    /* ICI : la taille des textes */\n' +
'  --pastille:44px;   /* ICI : la taille des pastilles numérotées */\n' +
'  --large-max:720px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --txt est la couleur des numéros dans les pastilles.\n' +
'     --fond doit être la couleur de fond de ta section : elle entoure\n' +
'     les pastilles pour masquer le trait vertical derrière elles.\n' +
'     --encre colore les titres, --gris les textes.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : les titres. --taille2 : les textes.\n' +
'     --pastille : la taille des ronds numérotés. Le trait se recale tout seul.\n' +
'\n' +
'     LES ÉTAPES\n' +
'     Chaque étape est un <li>, plus bas, avec son numéro dans data-n.\n' +
'     Pour en ajouter une, recopie un <li> entier et change le numéro.\n' +
'     Trois à cinq étapes : au-delà, le déroulé devient décourageant.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Un halo blanc entoure les pastilles : --fond ne correspond pas au\n' +
'     fond réel de ta section. Mets-y la même couleur.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-tl{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-tl{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-tl, .sio-tl *{box-sizing:border-box}\n' +
'.sio-tl{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f)}\n' +
'.sio-tl ol{list-style:none;margin:0;padding:0;position:relative}\n' +
'.sio-tl ol::before{content:"";position:absolute;left:calc(var(--pastille) / 2 - 1px);\n' +
'  top:12px;bottom:12px;width:2px;\n' +
'  background:linear-gradient(180deg,var(--c1),var(--g2))}\n' +
'.sio-tl li{position:relative;padding:0 0 26px calc(var(--pastille) + 18px)}\n' +
'.sio-tl li:last-child{padding-bottom:0}\n' +
'.sio-tl li::before{content:attr(data-n);position:absolute;left:0;top:0;\n' +
'  width:var(--pastille);height:var(--pastille);border-radius:50%;\n' +
'  display:flex;align-items:center;justify-content:center;\n' +
'  color:var(--txt);font-weight:700;font-size:17px;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 0 0 5px var(--fond)}\n' +
'.sio-tl b{display:block;font-size:var(--taille);line-height:1.3;\n' +
'  color:var(--encre);margin:9px 0 6px}\n' +
'.sio-tl p{margin:0;font-size:var(--taille2);line-height:1.6;color:var(--gris)}\n' +
'.sio-tl em{display:inline-block;margin-top:8px;font-style:normal;font-size:14px;\n' +
'  font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--c1)}\n' +
'.sio-tl.sio-anim > ol > li{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-tl.sio-anim > ol > li.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-tl.sio-anim > ol > li{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les étapes ci-dessous -->\n' +
'<div class="sio-tl">\n' +
'  <ol>\n' +
'    <li data-n="1">\n' +
'      <b>On clarifie l’offre</b>\n' +
'      <p>Ta promesse, ta cliente idéale, le résultat qu’elle vient chercher.</p>\n' +
'      <em>Semaine 1</em>\n' +
'    </li>\n' +
'    <li data-n="2">\n' +
'      <b>On construit le challenge</b>\n' +
'      <p>Le déroulé jour par jour, les livrables, les moments de bascule vers l’offre payante.</p>\n' +
'      <em>Semaine 2</em>\n' +
'    </li>\n' +
'    <li data-n="3">\n' +
'      <b>On automatise</b>\n' +
'      <p>Pages, séquences e-mail, relances. Tout est branché une fois, puis se relance en deux clics.</p>\n' +
'      <em>Semaine 3</em>\n' +
'    </li>\n' +
'  </ol>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-tl");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > ol > li");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"modules", name:"Cartes modules", tag:"CSS",
desc:"Le contenu du programme en grille, avec un relief au survol. S’adapte de une à trois colonnes.",
code:
'<!-- Cartes modules -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-mod{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond des cartes */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --pastille:#F1EFFC;/* ICI : le fond du numéro */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des textes */\n' +
'  --taille:19px;     /* ICI : la taille des titres */\n' +
'  --taille2:16px;    /* ICI : la taille des textes */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi des cartes */\n' +
'  --colonne:260px;   /* ICI : largeur mini d’une carte. Plus grand = moins de colonnes. */\n' +
'  --large-max:1000px;/* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond des cartes, --bord leur contour.\n' +
'     --pastille est le fond du petit numéro.\n' +
'     --encre colore les titres, --gris les textes.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : les titres. --taille2 : les textes.\n' +
'     --arrondi : l’arrondi des cartes.\n' +
'     --colonne : la largeur mini d’une carte. Augmente-la pour avoir\n' +
'     moins de colonnes, diminue-la pour en avoir plus.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LES CARTES\n' +
'     Chaque carte est un <article>, plus bas.\n' +
'     Pour en ajouter une, recopie un <article> entier.\n' +
'     Le nombre de colonnes s’ajuste tout seul à la largeur de l’écran :\n' +
'     sur mobile, les cartes se placent les unes sous les autres.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-mod{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-mod{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-mod, .sio-mod *{box-sizing:border-box}\n' +
'.sio-mod{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f);\n' +
'  display:grid;gap:18px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-mod article{position:relative;overflow:hidden;padding:26px 24px 24px;\n' +
'  border:1px solid var(--bord);border-radius:var(--arrondi);background:var(--fond);\n' +
'  transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,border-color .3s ease}\n' +
'.sio-mod article::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--g2));\n' +
'  transform:scaleX(0);transform-origin:left;transition:transform .35s ease}\n' +
'.sio-mod article:hover{transform:translateY(-5px);border-color:var(--c2);\n' +
'  box-shadow:0 26px 50px -34px var(--c1)}\n' +
'.sio-mod article:hover::before{transform:scaleX(1)}\n' +
'.sio-mod span{display:inline-flex;align-items:center;justify-content:center;\n' +
'  width:42px;height:42px;margin-bottom:14px;border-radius:13px;\n' +
'  color:var(--c1);font-weight:700;font-size:17px;background:var(--pastille)}\n' +
'.sio-mod b{display:block;font-size:var(--taille);line-height:1.3;\n' +
'  color:var(--encre);margin-bottom:8px}\n' +
'.sio-mod p{margin:0;font-size:var(--taille2);line-height:1.6;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace les modules ci-dessous -->\n' +
'<div class="sio-mod">\n' +
'  <article>\n' +
'    <span>01</span>\n' +
'    <b>Les fondations</b>\n' +
'    <p>Positionnement, promesse, tarification. Le socle qui rend tout le reste prévisible.</p>\n' +
'  </article>\n' +
'  <article>\n' +
'    <span>02</span>\n' +
'    <b>Le challenge</b>\n' +
'    <p>Le déroulé complet, les supports et les moments de vente, prêts à dupliquer.</p>\n' +
'  </article>\n' +
'  <article>\n' +
'    <span>03</span>\n' +
'    <b>L’automatisation</b>\n' +
'    <p>Séquences, relances, tunnel de commande. Tu le montes une fois, tu le relances ensuite.</p>\n' +
'  </article>\n' +
'</div>'
},
{
id:"compare", name:"Comparatif avec bascule", tag:"JS",
desc:"Deux formules côte à côte et un interrupteur paiement unique ou en trois fois. Les prix se mettent à jour.",
code:
'<!-- Comparatif de formules -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-cmp{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond des cartes */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --pastille:#F1EFFC;/* ICI : le fond de l’interrupteur */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des lignes */\n' +
'  --prix:34px;       /* ICI : la taille des prix */\n' +
'  --taille:20px;     /* ICI : la taille des titres */\n' +
'  --taille2:16px;    /* ICI : la taille des lignes */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi des cartes */\n' +
'  --colonne:260px;   /* ICI : largeur mini d’une carte */\n' +
'  --large-max:860px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond des cartes, --bord leur contour.\n' +
'     --pastille est le fond de l’interrupteur.\n' +
'     --encre colore les titres, --gris les lignes.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --prix : la taille des prix. --taille : les titres.\n' +
'     --taille2 : les lignes. --arrondi : l’arrondi des cartes.\n' +
'     --colonne : la largeur mini d’une carte.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LES PRIX ET LES FORMULES\n' +
'     Chaque prix a deux valeurs, plus bas : data-p1 pour le paiement\n' +
'     unique, data-p3 pour le paiement en trois fois.\n' +
'     L’interrupteur bascule de l’une à l’autre. Écris-les comme tu veux\n' +
'     les afficher, par exemple 497 € et 3 x 179 €.\n' +
'     La mention Le plus choisi vient de la classe reco sur une carte.\n' +
'     Ne la mets que si c’est vrai.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-cmp{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-cmp{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-cmp, .sio-cmp *{box-sizing:border-box}\n' +
'.sio-cmp{max-width:var(--large-max);margin:0 auto;padding:30px 16px;\n' +
'  font-family:var(--f);text-align:center}\n' +
'.sio-cmp-sw{display:inline-flex;flex-wrap:wrap;justify-content:center;\n' +
'  gap:4px;padding:5px;margin-bottom:24px;border-radius:999px;background:var(--pastille)}\n' +
'.sio-cmp-sw button{border:0;cursor:pointer;padding:11px 20px;border-radius:999px;\n' +
'  background:transparent;color:var(--gris);font-family:var(--f);font-weight:700;font-size:15px}\n' +
'.sio-cmp-sw button.on{background:var(--fond);color:var(--c1);box-shadow:0 6px 16px -10px var(--c1)}\n' +
'.sio-cmp-row{display:grid;gap:18px;text-align:left;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-cmp-row article{position:relative;padding:28px 24px;border-radius:var(--arrondi);\n' +
'  border:1px solid var(--bord);background:var(--fond)}\n' +
'.sio-cmp-row article.reco{border-color:var(--c1);box-shadow:0 26px 54px -38px var(--c1)}\n' +
'.sio-cmp-row article.reco::after{content:"Le plus choisi";position:absolute;top:-12px;right:20px;\n' +
'  padding:6px 13px;border-radius:999px;color:#fff;font-size:13px;font-weight:700;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-cmp-row h3{margin:0 0 4px;font-size:var(--taille);color:var(--encre)}\n' +
'.sio-cmp-row .sio-cmp-px{font-size:var(--prix);font-weight:700;color:var(--c1);line-height:1.2}\n' +
'.sio-cmp-row ul{list-style:none;margin:18px 0 0;padding:0}\n' +
'.sio-cmp-row li{position:relative;padding:0 0 10px 26px;\n' +
'  font-size:var(--taille2);line-height:1.5;color:var(--gris)}\n' +
'.sio-cmp-row li::before{content:"";position:absolute;left:4px;top:7px;width:9px;height:5px;\n' +
'  border-left:2.4px solid var(--c1);border-bottom:2.4px solid var(--c1);transform:rotate(-45deg)}\n' +
'.sio-cmp.sio-anim > *{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-cmp.sio-anim > *.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-cmp.sio-anim > *{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les formules ci-dessous -->\n' +
'<div class="sio-cmp">\n' +
'  <div class="sio-cmp-sw">\n' +
'    <button type="button" class="on" data-mode="1">Paiement unique</button>\n' +
'    <button type="button" data-mode="3">En 3 fois</button>\n' +
'  </div>\n' +
'  <!-- ICI : data-p1, ton prix en une fois. data-p3, ton prix en trois fois. -->\n' +
'  <div class="sio-cmp-row">\n' +
'    <article>\n' +
'      <h3>Essentiel</h3>\n' +
'      <div class="sio-cmp-px" data-p1="497 €" data-p3="3 x 179 €">497 €</div>\n' +
'      <ul>\n' +
'        <li>Les trois modules de structure</li>\n' +
'        <li>Les modèles de pages</li>\n' +
'        <li>Accès à vie aux mises à jour</li>\n' +
'      </ul>\n' +
'    </article>\n' +
'    <article class="reco">\n' +
'      <h3>Accompagné</h3>\n' +
'      <div class="sio-cmp-px" data-p1="997 €" data-p3="3 x 349 €">997 €</div>\n' +
'      <ul>\n' +
'        <li>Tout le contenu de la formule Essentiel</li>\n' +
'        <li>Relecture de ton tunnel</li>\n' +
'        <li>Questions illimitées pendant 90 jours</li>\n' +
'      </ul>\n' +
'    </article>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var zones=document.querySelectorAll(".sio-cmp");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    var btns=z.querySelectorAll(".sio-cmp-sw button");\n' +
'    var prix=z.querySelectorAll(".sio-cmp-px");\n' +
'    for(var k=0;k<btns.length;k++){(function(b){\n' +
'      b.addEventListener("click",function(){\n' +
'        for(var j=0;j<btns.length;j++){btns[j].classList.remove("on");}\n' +
'        b.classList.add("on");\n' +
'        var m=b.getAttribute("data-mode");\n' +
'        for(var j=0;j<prix.length;j++){\n' +
'          prix[j].textContent=prix[j].getAttribute(m==="3"?"data-p3":"data-p1");\n' +
'        }\n' +
'      });\n' +
'    })(btns[k]);}\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-cmp");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > *");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"avis", name:"Carte témoignage", tag:"CSS",
desc:"Un seul témoignage, bien mis en valeur. Remplace le texte, le nom et les initiales par ceux de ta cliente.",
code:
'<!-- Carte témoignage : à remplacer par un vrai retour de cliente -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-avis{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire, celle des guillemets */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond de la carte */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du témoignage */\n' +
'  --gris:#7B7D84;    /* ICI : la couleur du métier, sous le nom */\n' +
'  --taille:19px;     /* ICI : la taille du témoignage */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:660px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond de la carte, --bord son contour.\n' +
'     --c2 colore le grand guillemet en haut à gauche.\n' +
'     --encre colore le témoignage, --gris le métier sous le nom.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du témoignage.\n' +
'     --arrondi : l’arrondi de la carte.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LE TÉMOIGNAGE\n' +
'     Remplace le texte, les initiales, le nom et le métier, plus bas.\n' +
'     Garde les mots de ta cliente tels quels : ce sont eux qui\n' +
'     convainquent, pas une reformulation soignée.\n' +
'     N’invente jamais un témoignage, et demande son accord avant de\n' +
'     publier un nom.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-avis, .sio-avis *{box-sizing:border-box}\n' +
'.sio-avis{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f)}\n' +
'.sio-avis blockquote{position:relative;margin:0;padding:34px 30px 28px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord);\n' +
'  box-shadow:0 30px 60px -46px var(--c1)}\n' +
'.sio-avis blockquote::before{content:"\\201C";position:absolute;top:2px;left:22px;\n' +
'  font-size:76px;line-height:1;color:var(--c2)}\n' +
'.sio-avis p{margin:0;font-size:var(--taille);line-height:1.62;color:var(--encre)}\n' +
'.sio-avis-pied{display:flex;align-items:center;gap:14px;margin-top:22px;\n' +
'  padding-top:18px;border-top:1px solid #EFEDF4}\n' +
'.sio-avis i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:48px;height:48px;border-radius:50%;font-style:normal;\n' +
'  color:#fff;font-weight:700;font-size:17px;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
'.sio-avis b{display:block;font-size:17px;color:#1B1E24}\n' +
'.sio-avis span{font-size:15px;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace le témoignage, les initiales, le nom et le métier -->\n' +
'<div class="sio-avis">\n' +
'  <blockquote>\n' +
'    <p>Texte du témoignage à remplacer. Garde les mots de ta cliente tels quels : ce sont eux qui convainquent, pas une reformulation soignée.</p>\n' +
'    <div class="sio-avis-pied">\n' +
'      <i>XX</i>\n' +
'      <div>\n' +
'        <b>Prénom Nom</b>\n' +
'        <span>Métier, ville</span>\n' +
'      </div>\n' +
'    </div>\n' +
'  </blockquote>\n' +
'</div>'
},
{
id:"benefices", name:"Bénéfices en cascade", tag:"JS",
desc:"Les bénéfices apparaissent l’un après l’autre. Tout reste visible si le JavaScript ne se charge pas.",
code:
'<!-- Bénéfices en cascade -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ben{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond des lignes */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --pastille:#F1EFFC;/* ICI : le fond des coches */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du texte */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --arrondi:15px;    /* ICI : l’arrondi des lignes */\n' +
'  --large-max:720px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond est le fond des lignes, --bord leur contour.\n' +
'     --pastille est le fond des petites coches.\n' +
'     --encre est la couleur du texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du texte.\n' +
'     --arrondi : l’arrondi des lignes.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LES BÉNÉFICES\n' +
'     Chaque bénéfice est un <li>, plus bas. Recopie-en un pour en ajouter.\n' +
'     Quatre à six lignes : au-delà, l’effet de liste se perd.\n' +
'     Ils apparaissent l’un après l’autre à l’arrivée sur la section.\n' +
'     Si le JavaScript ne se charge pas, tout reste visible :\n' +
'     l’animation ne conditionne jamais l’affichage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ben, .sio-ben *{box-sizing:border-box}\n' +
'.sio-ben{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f)}\n' +
'.sio-ben ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}\n' +
'.sio-ben li{display:flex;align-items:flex-start;gap:14px;padding:18px 20px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord);\n' +
'  font-size:var(--taille);line-height:1.55;color:var(--encre)}\n' +
'.sio-ben i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:28px;height:28px;border-radius:50%;margin-top:1px;background:var(--pastille)}\n' +
'.sio-ben svg{width:15px;height:15px;stroke:var(--c1);fill:none;stroke-width:2.6}\n' +
'.sio-ben.sio-anim li{opacity:0;transform:translateY(14px);\n' +
'  transition:opacity .5s ease,transform .5s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-ben.sio-anim li.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ben.sio-anim li{opacity:1;transform:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les bénéfices ci-dessous -->\n' +
'<div class="sio-ben">\n' +
'  <ul>\n' +
'    <li><i><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></i>Un tunnel que tu relances sans le reconstruire</li>\n' +
'    <li><i><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></i>Des séquences écrites une fois, envoyées à chaque session</li>\n' +
'    <li><i><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></i>Une charge mentale qui redescend enfin</li>\n' +
'    <li><i><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></i>Des chiffres que tu peux prévoir avant de lancer</li>\n' +
'  </ul>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-ben");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll("li");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var li=entrees[k].target;\n' +
'        var n=+li.getAttribute("data-i");\n' +
'        setTimeout(function(el){return function(){el.classList.add("vu");};}(li),n*110);\n' +
'        obs.unobserve(li);\n' +
'      }\n' +
'    },{threshold:.2});\n' +
'    for(var k=0;k<items.length;k++){\n' +
'      items[k].setAttribute("data-i",k);\n' +
'      obs.observe(items[k]);\n' +
'    }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"avantapres", name:"Avant et après", tag:"CSS",
desc:"Deux colonnes qui opposent la situation actuelle et celle d’après. Le bloc qui fait basculer une page de vente.",
code:
'<!-- Avant et après -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond1:#FAFAFC;   /* ICI : le fond de la colonne Aujourd’hui */\n' +
'  --fond2:#ffffff;   /* ICI : le fond de la colonne Après */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur des lignes de droite */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des lignes de gauche */\n' +
'  --taille:17px;     /* ICI : la taille des lignes */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi des colonnes */\n' +
'  --colonne:280px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:900px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --fond1 est le fond de la colonne Aujourd’hui,\n' +
'     --fond2 celui de la colonne d’après, mise en avant.\n' +
'     --bord est la couleur du contour.\n' +
'     --encre colore les lignes de droite, --gris celles de gauche.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille des lignes.\n' +
'     --arrondi : l’arrondi des colonnes.\n' +
'     --colonne : la largeur mini d’une colonne. Au-dessous, les deux\n' +
'     colonnes se placent l’une sous l’autre — c’est le cas sur mobile.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LES DEUX COLONNES\n' +
'     Garde le même nombre de lignes des deux côtés, et fais-les se\n' +
'     répondre une à une : c’est la symétrie qui produit l’effet.\n' +
'     Trois lignes par colonne suffisent.\n' +
'     Décris la situation actuelle sans accabler : tu parles à quelqu’un\n' +
'     qui la vit.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ap, .sio-ap *{box-sizing:border-box}\n' +
'.sio-ap{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f);\n' +
'  display:grid;gap:18px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-ap-col{padding:28px 26px;border-radius:var(--arrondi);\n' +
'  border:1px solid var(--bord);background:var(--fond1)}\n' +
'.sio-ap-col.apres{border-color:var(--c2);background:var(--fond2);\n' +
'  box-shadow:0 28px 56px -40px var(--c1)}\n' +
'.sio-ap h3{margin:0 0 16px;font-size:15px;font-weight:700;letter-spacing:.12em;\n' +
'  text-transform:uppercase;color:#8A8D96}\n' +
'.sio-ap-col.apres h3{color:var(--c1)}\n' +
'.sio-ap ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}\n' +
'.sio-ap li{position:relative;padding-left:28px;font-size:var(--taille);\n' +
'  line-height:1.55;color:var(--gris)}\n' +
'.sio-ap li::before{content:"";position:absolute;left:4px;top:9px;width:11px;height:2px;\n' +
'  background:#C3C6CE}\n' +
'.sio-ap-col.apres li{color:var(--encre)}\n' +
'.sio-ap-col.apres li::before{top:7px;width:9px;height:5px;background:none;\n' +
'  border-left:2.4px solid var(--c1);border-bottom:2.4px solid var(--c1);transform:rotate(-45deg)}\n' +
'</style>\n' +
'<!-- ICI : remplace les titres et les lignes ci-dessous -->\n' +
'<div class="sio-ap">\n' +
'  <div class="sio-ap-col">\n' +
'    <h3>Aujourd’hui</h3>\n' +
'    <ul>\n' +
'      <li>Chaque lancement se prépare de zéro</li>\n' +
'      <li>Les ventes dépendent de ta présence en ligne</li>\n' +
'      <li>Tu ne sais pas ce que le mois prochain va donner</li>\n' +
'    </ul>\n' +
'  </div>\n' +
'  <div class="sio-ap-col apres">\n' +
'    <h3>Dans trois mois</h3>\n' +
'    <ul>\n' +
'      <li>Le challenge se relance en deux clics</li>\n' +
'      <li>Les séquences vendent pendant que tu accompagnes</li>\n' +
'      <li>Tu pilotes tes chiffres au lieu de les subir</li>\n' +
'    </ul>\n' +
'  </div>\n' +
'</div>'
}

];

var PLUS = [
{
id:"pdfoffert", name:"Aperçu du cadeau", tag:"CSS",
desc:"La couverture de ton PDF, légèrement inclinée, le texte et le bouton à côté. Le bloc d’une page de capture.",
code:
'<!-- Aperçu du cadeau -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-pdf{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F6F4FF;    /* ICI : le fond du bloc */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte du bouton */\n' +
'  --titre:30px;      /* ICI : la taille du titre */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --btn:16px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi du bouton */\n' +
'  --incline:-6deg;   /* ICI : l’inclinaison du document. 0deg = bien droit */\n' +
'  --colonne:280px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:940px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne un bouton d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond du bloc, --encre le titre, --gris le texte.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : le titre. --taille : le texte. --btn : le bouton.\n' +
'     --arrondi : l’arrondi du bouton.\n' +
'     --incline : l’inclinaison du document. Mets 0deg pour le poser droit.\n' +
'     --colonne : largeur mini d’une colonne. Au-dessous, l’image passe\n' +
'     au-dessus du texte — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     TON DOCUMENT\n' +
'     Remplace la ligne <div class="sio-pdf-faux"></div> par ton image :\n' +
'     <img src="adresse-de-ta-couverture.jpg" alt="Aperçu du guide">\n' +
'     Format conseillé : une couverture verticale, 800 sur 1130 pixels.\n' +
'     Sans image, un document violet est affiché à la place.\n' +
'\n' +
'     LE LIEN DU BOUTON\n' +
'     Il se trouve plus bas, dans la ligne qui commence par <a.\n' +
'     Remplace le # par ton adresse, en gardant les guillemets :\n' +
'     href="https://tonsite.systeme.io/le-guide"\n' +
'     Sur une page de capture, fais-le pointer vers ton formulaire.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse :\n' +
'     href="https://tonsite.systeme.io/le-guide"\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-pdf{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-pdf{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-pdf, .sio-pdf *{box-sizing:border-box}\n' +
'.sio-pdf{max-width:var(--large-max);margin:0 auto;padding:40px 22px;\n' +
'  border-radius:24px;background:var(--fond);font-family:var(--f);\n' +
'  display:grid;gap:34px;align-items:center;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-pdf-vis{display:flex;justify-content:center}\n' +
'.sio-pdf-vis img,.sio-pdf-faux{width:100%;max-width:260px;aspect-ratio:8/11;\n' +
'  border-radius:8px;transform:rotate(var(--incline));\n' +
'  box-shadow:0 36px 70px -34px rgba(40,34,90,.55)}\n' +
'.sio-pdf-faux{background:linear-gradient(150deg,var(--c1),var(--g2d))}\n' +
'.sio-pdf h3{margin:0 0 14px;font-size:clamp(24px,4vw,var(--titre));line-height:1.15;\n' +
'  font-weight:700;color:var(--encre)}\n' +
'.sio-pdf p{margin:0 0 24px;font-size:var(--taille);line-height:1.6;color:var(--gris)}\n' +
'.sio-pdf a{display:inline-block;padding:16px 30px;border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--txt);font-weight:700;font-size:var(--btn);\n' +
'  letter-spacing:.06em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 18px 38px -20px var(--c1);transition:transform .22s ease}\n' +
'.sio-pdf a:hover{transform:translateY(-2px)}\n' +
'@media (prefers-reduced-motion:reduce){.sio-pdf a{transition:none}}\n' +
'@media (max-width:480px){.sio-pdf{padding:30px 18px;gap:26px}}\n' +
'</style>\n' +
'<!-- ICI : remplace l’image, les textes et le lien ci-dessous -->\n' +
'<div class="sio-pdf">\n' +
'  <div class="sio-pdf-vis">\n' +
'    <!-- ICI : remplace cette ligne par <img src="ta-couverture.jpg" alt="Aperçu du guide"> -->\n' +
'    <div class="sio-pdf-faux"></div>\n' +
'  </div>\n' +
'  <div>\n' +
'    <h3>Le plan de lancement en 7 pages</h3>\n' +
'    <p>La trame complète d’un challenge qui remplit : les 5 jours, les e-mails, et le moment exact où tu présentes ton offre.</p>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#">Je reçois le guide</a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"sansspam", name:"Barre sans spam", tag:"CSS",
desc:"La petite ligne qui rassure sous un formulaire : pas de spam, données protégées, désinscription en un clic.",
code:
'<!-- Barre sans spam -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-sp2{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --gris:#6B7076;    /* ICI : la couleur du texte */\n' +
'  --taille:14px;     /* ICI : la taille du texte */\n' +
'  --picto:17px;      /* ICI : la taille des pictos */\n' +
'  --ecart:22px;      /* ICI : l’espace entre les mentions */\n' +
'  --haut:14px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Une ligne discrète à poser juste sous un formulaire d’inscription.\n' +
'     Elle lève les trois peurs du moment : le spam, la revente des\n' +
'     adresses, et la difficulté à se désinscrire.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 colore les pictos. --gris est la couleur du texte :\n' +
'     garde-la douce, cette ligne rassure, elle ne doit pas crier.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le texte. --picto : la taille des pictos.\n' +
'     --ecart : l’espace entre les mentions.\n' +
'     --haut : l’espace au-dessus et en dessous de la ligne.\n' +
'\n' +
'     TES MENTIONS\n' +
'     Chaque mention est un <span>, plus bas. Recopie-en un pour en\n' +
'     ajouter, supprime-le pour en retirer. Trois, c’est l’idéal.\n' +
'     N’écris que des promesses que tu tiens vraiment.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-sp2, .sio-sp2 *{box-sizing:border-box}\n' +
'.sio-sp2{padding:var(--haut) 16px;font-family:var(--f);\n' +
'  display:flex;flex-wrap:wrap;justify-content:center;align-items:center;\n' +
'  gap:10px var(--ecart);text-align:center}\n' +
'.sio-sp2 span{display:inline-flex;align-items:center;gap:7px;\n' +
'  font-size:var(--taille);line-height:1.4;color:var(--gris)}\n' +
'.sio-sp2 svg{flex:none;width:var(--picto);height:var(--picto);\n' +
'  fill:none;stroke:var(--c1);stroke-width:2.2}\n' +
'.sio-sp2.sio-anim > span{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-sp2.sio-anim > span.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-sp2.sio-anim > span{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les mentions ci-dessous -->\n' +
'<div class="sio-sp2">\n' +
'  <span><svg viewBox="0 0 24 24"><path d="M5 11h14v9H5zM8 11V7a4 4 0 0 1 8 0v4"/></svg>Tes données restent chez moi</span>\n' +
'  <span><svg viewBox="0 0 24 24"><path d="M3 5h18v14H3zM3 6l9 7 9-7"/></svg>Pas de spam, jamais</span>\n' +
'  <span><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Désinscription en un clic</span>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-sp2");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > span");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"module", name:"Carte de module", tag:"CSS",
desc:"Les modules de ta formation avec leur avancement, à poser dans ton espace membres.",
code:
'<!-- Carte de module -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-md{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des cartes */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --piste:#F1EFFC;   /* ICI : le fond de la barre d’avancement */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur des titres */\n' +
'  --gris:#6B7076;    /* ICI : la couleur des textes */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte du bouton */\n' +
'  --titre:17px;      /* ICI : la taille des titres */\n' +
'  --taille:14px;     /* ICI : la taille des textes */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi des cartes */\n' +
'  --barre:8px;       /* ICI : l’épaisseur de la barre d’avancement */\n' +
'  --colonne:250px;   /* ICI : largeur mini d’une carte */\n' +
'  --large-max:940px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Les modules de ta formation, avec leur avancement, à poser dans\n' +
'     ton espace membres. L’avancement est décoratif : il ne se calcule\n' +
'     pas tout seul, c’est toi qui écris le pourcentage.\n' +
'\n' +
'     L’AVANCEMENT\n' +
'     Dans chaque carte, plus bas, la ligne qui contient style="width:60%"\n' +
'     est la barre. Remplace 60% par ce que tu veux, de 0% à 100%.\n' +
'     Le pourcentage écrit juste au-dessus se change aussi à la main :\n' +
'     pense à mettre les deux d’accord.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     --uni:1; donne des barres d’une seule couleur, sans dégradé.\n' +
'     --piste est le fond de la barre, --bord le contour des cartes.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : les titres. --taille : les textes.\n' +
'     --barre : l’épaisseur de la barre. --arrondi : l’arrondi des cartes.\n' +
'     --colonne : largeur mini d’une carte. Au-dessous, les cartes\n' +
'     passent les unes sous les autres — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     LES LIENS\n' +
'     Chaque bouton a son lien, dans la ligne qui commence par <a.\n' +
'     Remplace le # par l’adresse de la leçon, en gardant les guillemets.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     La barre ne bouge pas : le style="width:60%" a été supprimé,\n' +
'     ou le pourcentage est écrit sans le signe %.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-md{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-md{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-md, .sio-md *{box-sizing:border-box}\n' +
'.sio-md{max-width:var(--large-max);margin:0 auto;padding:26px 16px;font-family:var(--f);\n' +
'  display:grid;gap:16px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-md-carte{min-width:0;display:flex;flex-direction:column;gap:12px;\n' +
'  padding:22px 20px;border-radius:var(--arrondi);background:var(--fond);\n' +
'  border:1px solid var(--bord)}\n' +
'.sio-md em{font-style:normal;font-size:12px;font-weight:700;letter-spacing:.12em;\n' +
'  text-transform:uppercase;color:var(--c1)}\n' +
'.sio-md b{font-size:var(--titre);line-height:1.3;color:var(--encre)}\n' +
'.sio-md p{margin:0;font-size:var(--taille);line-height:1.5;color:var(--gris)}\n' +
'.sio-md-etat{display:flex;justify-content:space-between;font-size:13px;color:var(--gris)}\n' +
'.sio-md-piste{height:var(--barre);border-radius:999px;background:var(--piste);overflow:hidden}\n' +
'.sio-md-piste i{display:block;height:100%;border-radius:999px;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--g2d))}\n' +
'.sio-md a{margin-top:auto;display:inline-block;text-align:center;padding:12px 18px;\n' +
'  border-radius:12px;text-decoration:none;color:var(--txt);font-size:14px;font-weight:700;\n' +
'  letter-spacing:.05em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-md a.fini{color:var(--c1);background:var(--piste)}\n' +
'.sio-md.sio-anim > .sio-md-carte{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-md.sio-anim > .sio-md-carte.vu{opacity:1;transform:none}\n' +
'.sio-md.sio-anim .sio-md-piste i{transform:scaleX(0);transform-origin:left;\n' +
'  transition:transform .9s cubic-bezier(.22,1,.36,1) .15s}\n' +
'.sio-md.sio-anim .sio-md-carte.vu .sio-md-piste i{transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-md.sio-anim > .sio-md-carte{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les modules, les pourcentages et les liens ci-dessous -->\n' +
'<div class="sio-md">\n' +
'  <div class="sio-md-carte">\n' +
'    <em>Module 1</em>\n' +
'    <b>Poser les bases de ton challenge</b>\n' +
'    <p>4 leçons · 38 minutes</p>\n' +
'    <div class="sio-md-etat"><span>Terminé</span><span>100 %</span></div>\n' +
'    <!-- ICI : l’avancement de ce module -->\n' +
'    <div class="sio-md-piste"><i style="width:100%"></i></div>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a class="fini" href="#">Revoir le module</a>\n' +
'  </div>\n' +
'  <div class="sio-md-carte">\n' +
'    <em>Module 2</em>\n' +
'    <b>Construire ton tunnel pas à pas</b>\n' +
'    <p>6 leçons · 52 minutes</p>\n' +
'    <div class="sio-md-etat"><span>En cours</span><span>60 %</span></div>\n' +
'    <!-- ICI : l’avancement de ce module -->\n' +
'    <div class="sio-md-piste"><i style="width:60%"></i></div>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#">Reprendre</a>\n' +
'  </div>\n' +
'  <div class="sio-md-carte">\n' +
'    <em>Module 3</em>\n' +
'    <b>Lancer, mesurer, recommencer</b>\n' +
'    <p>5 leçons · 44 minutes</p>\n' +
'    <div class="sio-md-etat"><span>À venir</span><span>0 %</span></div>\n' +
'    <!-- ICI : l’avancement de ce module -->\n' +
'    <div class="sio-md-piste"><i style="width:0%"></i></div>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#">Commencer</a>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-md");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > .sio-md-carte");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"apropos", name:"Bloc à propos", tag:"CSS",
desc:"Ta photo en rond avec un contour dégradé, ton histoire en deux paragraphes, et ta signature.",
code:
'<!-- Bloc à propos -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-pr{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond du bloc */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --titre:24px;      /* ICI : la taille du titre */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --photo:170px;     /* ICI : la taille de la photo */\n' +
'  --signature:26px;  /* ICI : la taille de la signature */\n' +
'  --arrondi:22px;    /* ICI : l’arrondi du bloc */\n' +
'  --colonne:240px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:860px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'  /* ICI : la police de la signature. Une police manuscrite rend très bien. */\n' +
'  --fsign:"Brush Script MT","Segoe Script",cursive;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     --uni:1; donne un contour de photo d’une seule couleur.\n' +
'     --fond est le fond du bloc, --encre le titre, --gris le texte.\n' +
'\n' +
'     LES POLICES\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     --fsign est la police de la signature. Les polices manuscrites\n' +
'     ne sont pas installées partout : garde cursive à la fin, c’est\n' +
'     le repli du navigateur.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : le titre. --taille : le texte.\n' +
'     --photo : la taille de la photo ronde.\n' +
'     --signature : la taille de la signature.\n' +
'     --colonne : largeur mini d’une colonne. Au-dessous, la photo\n' +
'     passe au-dessus du texte — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     TA PHOTO\n' +
'     Remplace la ligne <div class="sio-pr-faux"></div> par ta photo :\n' +
'     <img src="adresse-de-ta-photo.jpg" alt="Photo de Marion">\n' +
'     Une photo carrée rend le mieux : le bloc la découpe en rond.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     La photo est déformée : elle n’est pas carrée. Recadre-la.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-pr{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-pr{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-pr, .sio-pr *{box-sizing:border-box}\n' +
'.sio-pr{max-width:var(--large-max);margin:0 auto;padding:34px 28px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord);\n' +
'  font-family:var(--f);display:grid;gap:30px;align-items:center;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-pr-vis{display:flex;justify-content:center}\n' +
'.sio-pr-vis img,.sio-pr-faux{width:var(--photo);height:var(--photo);border-radius:50%;\n' +
'  object-fit:cover;border:5px solid transparent;\n' +
'  background:linear-gradient(var(--fond),var(--fond)) padding-box,\n' +
'    linear-gradient(140deg,var(--c1),var(--g2d)) border-box}\n' +
'.sio-pr-faux{background:linear-gradient(140deg,var(--c1),var(--g2d))}\n' +
'.sio-pr h3{margin:0 0 12px;font-size:var(--titre);line-height:1.25;font-weight:700;\n' +
'  color:var(--encre)}\n' +
'.sio-pr p{margin:0 0 14px;font-size:var(--taille);line-height:1.65;color:var(--gris)}\n' +
'.sio-pr-sign{margin:0;font-family:var(--fsign);font-size:var(--signature);\n' +
'  line-height:1.2;color:var(--c1)}\n' +
'@media (max-width:480px){.sio-pr{padding:26px 20px;gap:22px;text-align:center}\n' +
'  .sio-pr-sign{text-align:center}}\n' +
'.sio-pr.sio-anim > *{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-pr.sio-anim > *.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-pr.sio-anim > *{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace la photo, les textes et la signature ci-dessous -->\n' +
'<div class="sio-pr">\n' +
'  <div class="sio-pr-vis">\n' +
'    <!-- ICI : remplace cette ligne par <img src="ta-photo.jpg" alt="Photo de Marion"> -->\n' +
'    <div class="sio-pr-faux"></div>\n' +
'  </div>\n' +
'  <div>\n' +
'    <h3>Moi, c’est Marion</h3>\n' +
'    <p>J’accompagne les coachs et les formatrices à construire des tunnels qu’elles relancent toute l’année, sans tout refaire à chaque fois.</p>\n' +
'    <p>Six ans que je monte ces systèmes, et une conviction : la technique ne devrait jamais être ce qui t’empêche de lancer.</p>\n' +
'    <p class="sio-pr-sign">Marion</p>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-pr");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > *");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"logos", name:"Bandeau de confiance", tag:"CSS",
desc:"La ligne « elles m’ont fait confiance », logos en gris qui reprennent leur couleur au survol.",
code:
'<!-- Bandeau de confiance -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-lg{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --fond:#F8F7FD;    /* ICI : le fond du bandeau */\n' +
'  --gris:#7C828A;    /* ICI : la couleur du titre */\n' +
'  --titre:13px;      /* ICI : la taille du petit titre */\n' +
'  --hauteur:38px;    /* ICI : la hauteur des logos */\n' +
'  --ecart:38px;      /* ICI : l’espace entre les logos */\n' +
'  --haut:26px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi du bandeau */\n' +
'  --gris-logos:1;    /* ICI : 1 = logos en gris, 0 = logos en couleur */\n' +
'  --large-max:940px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     La ligne « elles m’ont fait confiance », ou « vu dans ».\n' +
'     À poser haut sur la page, juste sous le titre.\n' +
'\n' +
'     TES LOGOS\n' +
'     Chaque logo est une ligne <img>, plus bas. Remplace l’adresse\n' +
'     dans src="..." et le texte dans alt="...".\n' +
'     Des images au fond transparent (PNG ou SVG) rendent le mieux.\n' +
'     Quatre à six logos suffisent.\n' +
'     Tu n’as pas encore de logos ? Ce bloc peut attendre : mieux vaut\n' +
'     rien qu’un bandeau vide ou des logos que tu n’as pas le droit\n' +
'     d’afficher. Demande l’accord avant d’ajouter une marque.\n' +
'\n' +
'     LES COULEURS\n' +
'     --gris-logos:1; affiche les logos en gris, et ils reprennent\n' +
'     leur couleur au survol : c’est plus élégant quand ils sont\n' +
'     très différents. Mets 0 pour les laisser en couleur.\n' +
'     --fond est le fond du bandeau, --gris la couleur du petit titre.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --hauteur : la hauteur des logos. --ecart : l’espace entre eux.\n' +
'     --haut : l’espace au-dessus et en dessous. --arrondi : les angles.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Un logo ne s’affiche pas : l’adresse de l’image est fausse,\n' +
'     ou l’image n’est pas accessible publiquement.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-lg, .sio-lg *{box-sizing:border-box}\n' +
'.sio-lg{max-width:var(--large-max);margin:0 auto;padding:var(--haut) 22px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);font-family:var(--f);\n' +
'  text-align:center}\n' +
'.sio-lg em{display:block;margin-bottom:18px;font-style:normal;font-size:var(--titre);\n' +
'  font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gris)}\n' +
'.sio-lg-liste{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;\n' +
'  gap:18px var(--ecart)}\n' +
'.sio-lg img{height:var(--hauteur);width:auto;max-width:160px;object-fit:contain;\n' +
'  opacity:calc(1 - var(--gris-logos) * .35);\n' +
'  filter:grayscale(calc(var(--gris-logos) * 100%));\n' +
'  transition:opacity .25s ease,filter .25s ease}\n' +
'.sio-lg img:hover{opacity:1;filter:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-lg img{transition:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les logos ci-dessous -->\n' +
'<div class="sio-lg">\n' +
'  <em>Elles m’ont fait confiance</em>\n' +
'  <div class="sio-lg-liste">\n' +
'    <!-- ICI : l’adresse de chaque logo, et sa description dans alt -->\n' +
'    <img src="data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'40\'><rect width=\'160\' height=\'40\' rx=\'6\' fill=\'%23DDDCE8\'/><text x=\'80\' y=\'25\' font-family=\'sans-serif\' font-size=\'13\' fill=\'%236B7076\' text-anchor=\'middle\'>Logo 1</text></svg>" alt="Nom de la marque 1">\n' +
'    <img src="data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'40\'><rect width=\'160\' height=\'40\' rx=\'6\' fill=\'%23DDDCE8\'/><text x=\'80\' y=\'25\' font-family=\'sans-serif\' font-size=\'13\' fill=\'%236B7076\' text-anchor=\'middle\'>Logo 2</text></svg>" alt="Nom de la marque 2">\n' +
'    <img src="data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'40\'><rect width=\'160\' height=\'40\' rx=\'6\' fill=\'%23DDDCE8\'/><text x=\'80\' y=\'25\' font-family=\'sans-serif\' font-size=\'13\' fill=\'%236B7076\' text-anchor=\'middle\'>Logo 3</text></svg>" alt="Nom de la marque 3">\n' +
'    <img src="data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'40\'><rect width=\'160\' height=\'40\' rx=\'6\' fill=\'%23DDDCE8\'/><text x=\'80\' y=\'25\' font-family=\'sans-serif\' font-size=\'13\' fill=\'%236B7076\' text-anchor=\'middle\'>Logo 4</text></svg>" alt="Nom de la marque 4">\n' +
'  </div>\n' +
'</div>'
},
{
id:"citationfort", name:"Citation mise en avant", tag:"CSS",
desc:"Une phrase forte au milieu d’une longue page, avec un trait coloré sur le côté.",
code:
'<!-- Citation mise en avant -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ct{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F8F7FD;    /* ICI : le fond de la citation */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur de la citation */\n' +
'  --gris:#6B7076;    /* ICI : la couleur de la signature */\n' +
'  --taille:24px;     /* ICI : la taille de la citation */\n' +
'  --signature:15px;  /* ICI : la taille de la signature */\n' +
'  --trait:6px;       /* ICI : l’épaisseur du trait de gauche */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi du bloc */\n' +
'  --large-max:720px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     Une phrase forte, posée au milieu d’une longue page, pour laisser\n' +
'     respirer la lecture. Ta promesse, ta conviction, ou la phrase\n' +
'     d’une cliente qui résume tout.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux.\n' +
'     --uni:1; donne un trait d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond du bloc, --encre la couleur de la citation.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la citation. --signature : la ligne du dessous.\n' +
'     --trait : l’épaisseur du trait de gauche. --arrondi : les angles.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     TA CITATION\n' +
'     Elle est dans le <blockquote>, plus bas. La signature est dans\n' +
'     le <cite> juste après : change-la, ou supprime la ligne entière.\n' +
'     Garde la citation courte : une à deux lignes, pas davantage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ct{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ct{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ct, .sio-ct *{box-sizing:border-box}\n' +
'.sio-ct{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-ct-carte{position:relative;padding:30px 30px 26px 34px;border-radius:var(--arrondi);\n' +
'  background:var(--fond);overflow:hidden}\n' +
'.sio-ct-carte:before{content:"";position:absolute;left:0;top:0;bottom:0;\n' +
'  width:var(--trait);background:linear-gradient(180deg,var(--c1),var(--g2d))}\n' +
'.sio-ct blockquote{margin:0;font-size:var(--taille);line-height:1.45;font-weight:700;\n' +
'  color:var(--encre);text-wrap:balance}\n' +
'.sio-ct cite{display:block;margin-top:14px;font-style:normal;font-size:var(--signature);\n' +
'  color:var(--gris)}\n' +
'@media (max-width:480px){\n' +
'  .sio-ct-carte{padding:24px 20px 22px 26px}\n' +
'  .sio-ct blockquote{font-size:calc(var(--taille) - 4px)}}\n' +
'.sio-ct.sio-anim > .sio-ct-carte{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-ct.sio-anim > .sio-ct-carte.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ct.sio-anim > .sio-ct-carte{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace la citation et la signature ci-dessous -->\n' +
'<div class="sio-ct">\n' +
'  <div class="sio-ct-carte">\n' +
'    <blockquote>Un lancement ne devrait pas te coûter trois semaines de ta vie à chaque fois.</blockquote>\n' +
'    <cite>Marion, agence Koweb</cite>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-ct");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > .sio-ct-carte");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
}

];

var VENDRE = [
{
id:"avantapres2", name:"Avant / après", tag:"CSS",
desc:"Deux colonnes face à face : la situation d’aujourd’hui, et celle d’après. Le bloc qui fait cliquer juste avant le bouton.",
code:
'<!-- Avant / après -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ap{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --avant:#F5F5F7;   /* ICI : le fond de la colonne « avant » */\n' +
'  --bord:#E7E7EC;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du texte */\n' +
'  --gris:#7C828A;    /* ICI : la couleur du texte « avant » */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte « après » */\n' +
'  --titre:17px;      /* ICI : la taille des titres de colonne */\n' +
'  --taille:16px;     /* ICI : la taille des lignes */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi des colonnes */\n' +
'  --colonne:270px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:860px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne une colonne « après » d’une seule couleur.\n' +
'     --avant est le fond de la colonne de gauche : garde-la terne,\n' +
'     c’est le contraste entre les deux qui fait tout le travail.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : les titres de colonne. --taille : les lignes.\n' +
'     --arrondi : l’arrondi des colonnes.\n' +
'     --colonne : largeur mini d’une colonne. Au-dessous, les deux\n' +
'     colonnes passent l’une sous l’autre — c’est ce qui se produit\n' +
'     sur mobile, avec « avant » en premier.\n' +
'\n' +
'     TES LIGNES\n' +
'     Chaque ligne est un <li>, plus bas. Recopie-en un pour en ajouter.\n' +
'     Garde le même nombre de lignes des deux côtés, et fais-les se\n' +
'     répondre une à une : « je repars de zéro » face à « je duplique ».\n' +
'     Quatre à six lignes suffisent.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ap{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ap{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ap, .sio-ap *{box-sizing:border-box}\n' +
'.sio-ap{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f);\n' +
'  display:grid;gap:16px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-ap-col{min-width:0;padding:24px 22px;border-radius:var(--arrondi)}\n' +
'.sio-ap-av{background:var(--avant);border:1px solid var(--bord)}\n' +
'.sio-ap-ap{color:var(--txt);\n' +
'  background:linear-gradient(140deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 28px 58px -40px var(--c1)}\n' +
'.sio-ap h4{margin:0 0 16px;font-size:var(--titre);font-weight:700;letter-spacing:.06em;\n' +
'  text-transform:uppercase}\n' +
'.sio-ap-av h4{color:var(--gris)}\n' +
'.sio-ap ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}\n' +
'.sio-ap li{display:flex;align-items:flex-start;gap:11px;font-size:var(--taille);\n' +
'  line-height:1.5}\n' +
'.sio-ap-av li{color:var(--gris)}\n' +
'.sio-ap svg{flex:none;width:17px;height:17px;margin-top:3px;fill:none;stroke-width:2.6}\n' +
'.sio-ap-av svg{stroke:var(--gris)}\n' +
'.sio-ap-ap svg{stroke:var(--txt)}\n' +
'@media (max-width:480px){.sio-ap-col{padding:20px 18px}}\n' +
'.sio-ap.sio-anim > .sio-ap-col{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-ap.sio-anim > .sio-ap-col.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ap.sio-anim > .sio-ap-col{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les titres et les lignes ci-dessous -->\n' +
'<div class="sio-ap">\n' +
'  <div class="sio-ap-col sio-ap-av">\n' +
'    <h4>Aujourd’hui</h4>\n' +
'    <ul>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>Tu repars de zéro à chaque lancement</li>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>Tu écris tes e-mails la veille, dans l’urgence</li>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>Tu ne sais pas combien d’inscrites tu auras</li>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>Chaque lancement te vide pour trois semaines</li>\n' +
'    </ul>\n' +
'  </div>\n' +
'  <div class="sio-ap-col sio-ap-ap">\n' +
'    <h4>Après</h4>\n' +
'    <ul>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Tu dupliques un tunnel déjà prêt</li>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Tes séquences partent toutes seules</li>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Tu prévois tes chiffres avant de lancer</li>\n' +
'      <li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Tu relances quand tu veux, sans y laisser ton énergie</li>\n' +
'    </ul>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-ap");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > .sio-ap-col");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"bonus", name:"Boîte à bonus", tag:"CSS",
desc:"Chaque bonus avec son numéro, sa description et sa valeur barrée, puis le total en bandeau coloré.",
code:
'<!-- Boîte à bonus -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-bn{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des bonus */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur des titres */\n' +
'  --gris:#6B7076;    /* ICI : la couleur des descriptions */\n' +
'  --barre:#A2A7AE;   /* ICI : la couleur des prix barrés */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte du total */\n' +
'  --titre:17px;      /* ICI : la taille des titres de bonus */\n' +
'  --taille:15px;     /* ICI : la taille des descriptions */\n' +
'  --total:20px;      /* ICI : la taille du total */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi des cartes */\n' +
'  --large-max:720px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne un bandeau de total d’une seule couleur.\n' +
'     --fond est le fond des bonus, --bord leur contour.\n' +
'     --barre est la couleur des prix barrés.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : les titres de bonus. --taille : les descriptions.\n' +
'     --total : le montant du total. --arrondi : l’arrondi des cartes.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     TES BONUS\n' +
'     Chaque bonus est un <li>, plus bas. Recopie-en un pour en ajouter,\n' +
'     supprime-le pour en retirer. Trois à cinq bonus suffisent.\n' +
'     Le numéro est dans le <i>, le titre dans le <b>, la description\n' +
'     juste en dessous, et la valeur dans le <s>.\n' +
'     Le total, lui, est la dernière ligne du bloc : pense à le mettre\n' +
'     à jour quand tu changes les valeurs. Il ne se calcule pas tout seul.\n' +
'     N’annonce que des valeurs que tu pourrais vraiment facturer.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-bn{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-bn{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-bn, .sio-bn *{box-sizing:border-box}\n' +
'.sio-bn{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-bn ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}\n' +
'.sio-bn li{display:flex;align-items:flex-start;gap:14px;padding:18px 20px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord)}\n' +
'.sio-bn i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:34px;height:34px;border-radius:12px;font-style:normal;font-size:14px;\n' +
'  font-weight:700;color:#fff;background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-bn-txt{flex:1 1 auto;min-width:0}\n' +
'.sio-bn b{display:block;font-size:var(--titre);line-height:1.3;color:var(--encre)}\n' +
'.sio-bn-txt span{display:block;margin-top:4px;font-size:var(--taille);line-height:1.5;\n' +
'  color:var(--gris)}\n' +
'.sio-bn s{flex:none;align-self:center;font-size:var(--taille);color:var(--barre);\n' +
'  text-decoration-thickness:2px}\n' +
'.sio-bn-total{margin-top:14px;padding:18px 22px;border-radius:var(--arrondi);\n' +
'  color:var(--txt);background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 26px 54px -40px var(--c1);\n' +
'  display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;\n' +
'  font-size:var(--total);font-weight:700}\n' +
'@media (max-width:520px){\n' +
'  .sio-bn li{flex-wrap:wrap}\n' +
'  .sio-bn s{align-self:flex-start;margin-left:48px}}\n' +
'.sio-bn.sio-anim > ul > li, .sio-bn.sio-anim > .sio-bn-total{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-bn.sio-anim > ul > li.vu, .sio-bn.sio-anim > .sio-bn-total.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-bn.sio-anim > ul > li, .sio-bn.sio-anim > .sio-bn-total{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les bonus, les valeurs et le total ci-dessous -->\n' +
'<div class="sio-bn">\n' +
'  <ul>\n' +
'    <li>\n' +
'      <i>1</i>\n' +
'      <div class="sio-bn-txt">\n' +
'        <b>Le pack de 12 e-mails prêts à envoyer</b>\n' +
'        <span>Tu remplaces ton offre et tes dates, tu programmes, c’est parti.</span>\n' +
'      </div>\n' +
'      <s>197 €</s>\n' +
'    </li>\n' +
'    <li>\n' +
'      <i>2</i>\n' +
'      <div class="sio-bn-txt">\n' +
'        <b>Le tableau de bord de lancement</b>\n' +
'        <span>Tes chiffres clés, remplis en cinq minutes après chaque session.</span>\n' +
'      </div>\n' +
'      <s>97 €</s>\n' +
'    </li>\n' +
'    <li>\n' +
'      <i>3</i>\n' +
'      <div class="sio-bn-txt">\n' +
'        <b>Une séance questions-réponses en direct</b>\n' +
'        <span>Une heure avec moi, juste avant ton premier lancement.</span>\n' +
'      </div>\n' +
'      <s>250 €</s>\n' +
'    </li>\n' +
'  </ul>\n' +
'  <!-- ICI : pense à mettre le total à jour si tu changes les valeurs -->\n' +
'  <div class="sio-bn-total"><span>Valeur totale des bonus</span><span>544 €</span></div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-bn");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > ul > li, :scope > .sio-bn-total");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"recois", name:"Ce que tu reçois", tag:"JS",
desc:"Les cartes de ce qui est inclus, avec leurs pictos, qui apparaissent l’une après l’autre.",
code:
'<!-- Ce que tu reçois -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rc{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des cartes */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur des titres */\n' +
'  --gris:#6B7076;    /* ICI : la couleur des textes */\n' +
'  --titre:17px;      /* ICI : la taille des titres */\n' +
'  --taille:15px;     /* ICI : la taille des textes */\n' +
'  --rond:52px;       /* ICI : la taille des pastilles */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi des cartes */\n' +
'  --colonne:240px;   /* ICI : largeur mini d’une carte */\n' +
'  --large-max:940px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;       /* ICI : 1 = les cartes apparaissent l’une après l’autre, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde les pictos blancs lisibles.\n' +
'     --uni:1; donne des pastilles d’une seule couleur.\n' +
'     --fond est le fond des cartes, --bord leur contour.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : les titres. --taille : les textes.\n' +
'     --rond : la taille des pastilles. --arrondi : l’arrondi des cartes.\n' +
'     --colonne : largeur mini d’une carte. Au-dessous, les cartes\n' +
'     passent les unes sous les autres — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     TES ÉLÉMENTS\n' +
'     Chaque élément est un <li>, plus bas. Recopie-en un pour en ajouter.\n' +
'     Trois ou six cartes donnent les plus jolies rangées.\n' +
'     Le picto est le <svg> : garde celui qui te va, ou remplace-le\n' +
'     par un émoji entre les balises <i> et </i>, c’est tout aussi bien.\n' +
'     Écris ce que ta cliente reçoit concrètement, pas ce qu’elle ressentira.\n' +
'\n' +
'     L’APPARITION\n' +
'     --cascade:1; fait apparaître les cartes l’une après l’autre\n' +
'     à l’arrivée sur la section. --cascade:0; les affiche tout de suite.\n' +
'     Sans JavaScript, tout reste visible : l’animation ne conditionne\n' +
'     jamais l’affichage.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-rc{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-rc{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-rc, .sio-rc *{box-sizing:border-box}\n' +
'.sio-rc{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-rc ul{list-style:none;margin:0;padding:0;display:grid;gap:16px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-rc li{min-width:0;padding:24px 22px;border-radius:var(--arrondi);\n' +
'  background:var(--fond);border:1px solid var(--bord)}\n' +
'.sio-rc i{display:flex;align-items:center;justify-content:center;\n' +
'  width:var(--rond);height:var(--rond);border-radius:16px;margin-bottom:14px;\n' +
'  font-style:normal;font-size:calc(var(--rond) / 2.2);\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 16px 30px -18px var(--c1)}\n' +
'.sio-rc i svg{width:46%;height:46%;fill:none;stroke:#fff;stroke-width:2.2}\n' +
'.sio-rc b{display:block;margin-bottom:7px;font-size:var(--titre);line-height:1.3;\n' +
'  color:var(--encre)}\n' +
'.sio-rc span{display:block;font-size:var(--taille);line-height:1.55;color:var(--gris)}\n' +
'.sio-rc.sio-anim li{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-rc.sio-anim li.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-rc.sio-anim li{opacity:1;transform:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les titres et les textes ci-dessous -->\n' +
'<div class="sio-rc">\n' +
'  <ul>\n' +
'    <li>\n' +
'      <i><svg viewBox="0 0 24 24"><path d="M4 5h16v14H4zM4 9h16"/></svg></i>\n' +
'      <b>8 modules vidéo</b>\n' +
'      <span>Une étape par semaine, à suivre à ton rythme, accessibles à vie.</span>\n' +
'    </li>\n' +
'    <li>\n' +
'      <i><svg viewBox="0 0 24 24"><path d="M7 4h10l3 4v12H4V8zM4 8h16"/></svg></i>\n' +
'      <b>Les modèles prêts à dupliquer</b>\n' +
'      <span>Pages, e-mails et automatisations : tu remplaces tes textes, c’est en ligne.</span>\n' +
'    </li>\n' +
'    <li>\n' +
'      <i><svg viewBox="0 0 24 24"><path d="M17 20a5 5 0 0 0-10 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg></i>\n' +
'      <b>Le groupe privé</b>\n' +
'      <span>Tes questions, mes retours, et les lancements des autres pour t’inspirer.</span>\n' +
'    </li>\n' +
'  </ul>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-rc");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll("li");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var li=entrees[k].target;\n' +
'        var n=+li.getAttribute("data-i");\n' +
'        setTimeout(function(el){return function(){el.classList.add("vu");};}(li),n*120);\n' +
'        obs.unobserve(li);\n' +
'      }\n' +
'    },{threshold:.2});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>'
}

];

var VIDEO = [
{
id:"videocadre", name:"Vidéo encadrée", tag:"CSS",
desc:"Un cadre dégradé autour de ta vidéo, un titre au-dessus, une légende en dessous. Les proportions restent justes sur tous les écrans.",
code:
'<!-- Vidéo encadrée -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-vc{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond derrière la vidéo */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du titre */\n' +
'  --gris:#6B7076;    /* ICI : la couleur de la légende */\n' +
'  --titre:22px;      /* ICI : la taille du titre */\n' +
'  --taille:15px;     /* ICI : la taille de la légende */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi du cadre */\n' +
'  --liseret:10px;    /* ICI : l’épaisseur du contour coloré */\n' +
'  --large-max:780px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux.\n' +
'     --uni:1; donne un contour d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond derrière la vidéo, --encre le titre,\n' +
'     --gris la légende sous la vidéo.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : le titre au-dessus. --taille : la légende en dessous.\n' +
'     --arrondi : l’arrondi du cadre. --liseret : l’épaisseur du contour.\n' +
'     --large-max : la largeur maximale du bloc.\n' +
'\n' +
'     TA VIDÉO\n' +
'     Remplace l’adresse dans src="..." plus bas, dans la ligne <iframe>.\n' +
'     Sur YouTube : clique sur Partager, puis Intégrer, et copie\n' +
'     l’adresse qui commence par https://www.youtube.com/embed/\n' +
'     Sur Vimeo : https://player.vimeo.com/video/ suivi du numéro.\n' +
'     La vidéo garde toujours ses bonnes proportions, sur tous les écrans.\n' +
'\n' +
'     LE TITRE ET LA LÉGENDE\n' +
'     Ils se changent directement dans le <h3> et le <p>, plus bas.\n' +
'     Supprime la ligne entière si tu n’en veux pas.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     La vidéo ne s’affiche pas : l’adresse n’est pas une adresse\n' +
'     d’intégration. Elle doit contenir /embed/ pour YouTube.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-vc{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-vc{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-vc, .sio-vc *{box-sizing:border-box}\n' +
'.sio-vc{max-width:var(--large-max);margin:0 auto;padding:28px 16px;\n' +
'  font-family:var(--f);text-align:center}\n' +
'.sio-vc h3{margin:0 0 14px;font-size:var(--titre);line-height:1.3;\n' +
'  font-weight:700;color:var(--encre)}\n' +
'.sio-vc-cadre{padding:var(--liseret);border-radius:var(--arrondi);\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d),var(--c1));\n' +
'  box-shadow:0 30px 60px -40px var(--c1)}\n' +
'.sio-vc-ecran{position:relative;overflow:hidden;background:var(--fond);\n' +
'  border-radius:calc(var(--arrondi) - 6px);aspect-ratio:16/9}\n' +
'.sio-vc-ecran iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}\n' +
'.sio-vc p{margin:14px 0 0;font-size:var(--taille);line-height:1.5;color:var(--gris)}\n' +
'@media (max-width:480px){\n' +
'  .sio-vc{padding:22px 12px}\n' +
'  .sio-vc h3{font-size:calc(var(--titre) - 3px)}}\n' +
'.sio-vc.sio-anim > *{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-vc.sio-anim > *.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-vc.sio-anim > *{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace le titre, l’adresse de la vidéo et la légende -->\n' +
'<div class="sio-vc">\n' +
'  <h3>Regarde la présentation du challenge</h3>\n' +
'  <div class="sio-vc-cadre">\n' +
'    <div class="sio-vc-ecran">\n' +
'      <!-- ICI : ton adresse de vidéo, à la place de celle-ci -->\n' +
'      <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Présentation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
'    </div>\n' +
'  </div>\n' +
'  <p>4 minutes pour comprendre la méthode complète.</p>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-vc");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > *");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"videoclic", name:"Vidéo à la demande", tag:"JS",
desc:"La vidéo ne se charge qu’au clic : ta page s’ouvre beaucoup plus vite. Vignette automatique et gros bouton de lecture.",
code:
'<!-- Vidéo à la demande -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-vd{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du triangle de lecture */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur de la légende */\n' +
'  --taille:15px;     /* ICI : la taille de la légende */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi de la vignette */\n' +
'  --bouton:82px;     /* ICI : la taille du bouton de lecture */\n' +
'  --large-max:760px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     La vidéo ne se charge qu’au clic. Ta page s’ouvre beaucoup plus\n' +
'     vite, et la vidéo démarre toute seule quand on clique dessus.\n' +
'\n' +
'     TA VIDÉO\n' +
'     Tout se règle dans la ligne <div class="sio-vd-clic" ...>, plus bas.\n' +
'     data-video : l’identifiant de ta vidéo YouTube. C’est ce qui suit\n' +
'     v= dans l’adresse. Dans https://www.youtube.com/watch?v=aqz-KE-bpKQ\n' +
'     l’identifiant est aqz-KE-bpKQ\n' +
'     data-image : l’image de la vignette. Laisse vide pour reprendre\n' +
'     l’image de ta vidéo YouTube, ou mets l’adresse de ton image à toi.\n' +
'     data-titre : le texte lu par les lecteurs d’écran.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     --uni:1; donne un bouton d’une seule couleur, sans dégradé.\n' +
'     --txt est la couleur du triangle de lecture.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --arrondi : l’arrondi de la vignette.\n' +
'     --bouton : la taille du bouton de lecture.\n' +
'     --taille : la légende. --large-max : la largeur maximale.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     La vignette reste grise : l’identifiant est faux, ou tu as collé\n' +
'     l’adresse entière au lieu de l’identifiant seul.\n' +
'     Rien ne se passe au clic : le <script> a été coupé.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La vidéo est privée ou non partageable : YouTube refuse alors de\n' +
'     l’afficher ailleurs que sur son site.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-vd{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-vd{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-vd, .sio-vd *{box-sizing:border-box}\n' +
'.sio-vd{max-width:var(--large-max);margin:0 auto;padding:26px 16px;\n' +
'  font-family:var(--f);text-align:center}\n' +
'.sio-vd-clic{position:relative;overflow:hidden;cursor:pointer;\n' +
'  border-radius:var(--arrondi);aspect-ratio:16/9;background:#1B1E24 center/cover no-repeat;\n' +
'  box-shadow:0 30px 60px -40px var(--c1)}\n' +
'.sio-vd-clic:after{content:"";position:absolute;inset:0;\n' +
'  background:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.35))}\n' +
'.sio-vd-play{position:absolute;left:50%;top:50%;z-index:2;\n' +
'  width:var(--bouton);height:var(--bouton);margin:calc(var(--bouton) / -2) 0 0 calc(var(--bouton) / -2);\n' +
'  border:0;padding:0;border-radius:50%;cursor:pointer;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 18px 40px -16px rgba(0,0,0,.6);\n' +
'  display:flex;align-items:center;justify-content:center;\n' +
'  transition:transform .25s ease}\n' +
'.sio-vd-clic:hover .sio-vd-play{transform:scale(1.07)}\n' +
'.sio-vd-play svg{width:38%;height:38%;fill:var(--txt);margin-left:8%}\n' +
'.sio-vd-clic iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;z-index:3}\n' +
'.sio-vd p{margin:14px 0 0;font-size:var(--taille);line-height:1.5;color:var(--encre)}\n' +
'@media (prefers-reduced-motion:reduce){.sio-vd-play{transition:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace l’identifiant de la vidéo et la légende ci-dessous -->\n' +
'<div class="sio-vd">\n' +
'  <div class="sio-vd-clic" data-video="aqz-KE-bpKQ" data-image="" data-titre="Présentation du challenge">\n' +
'    <button class="sio-vd-play" type="button" aria-label="Lire la vidéo">\n' +
'      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>\n' +
'    </button>\n' +
'  </div>\n' +
'  <p>4 minutes pour comprendre la méthode complète.</p>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var zones=document.querySelectorAll(".sio-vd-clic");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    var id=z.getAttribute("data-video")||"";\n' +
'    var img=z.getAttribute("data-image")||"";\n' +
'    if(!img && id) img="https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg";\n' +
'    if(img) z.style.backgroundImage="url(\'"+img+"\')";\n' +
'    function lire(){\n' +
'      if(!id || z.querySelector("iframe"))return;\n' +
'      var f=document.createElement("iframe");\n' +
'      f.src="https://www.youtube.com/embed/"+id+"?autoplay=1&rel=0";\n' +
'      f.title=z.getAttribute("data-titre")||"Vidéo";\n' +
'      f.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");\n' +
'      f.setAttribute("allowfullscreen","");\n' +
'      z.appendChild(f);\n' +
'    }\n' +
'    z.addEventListener("click",lire);\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"chapitres", name:"Vidéo avec chapitres", tag:"JS",
desc:"La liste des moments clés sous la vidéo. Un clic relance le replay à l’endroit choisi.",
code:
'<!-- Vidéo avec chapitres -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ch{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des chapitres */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du texte */\n' +
'  --gris:#6B7076;    /* ICI : la couleur des minutages */\n' +
'  --taille:15px;     /* ICI : la taille des chapitres */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi de la vidéo et des lignes */\n' +
'  --large-max:760px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     À QUOI SERT CE BLOC\n' +
'     La vidéo, et juste en dessous la liste des moments importants.\n' +
'     Un clic sur un chapitre relance la vidéo à cet endroit précis.\n' +
'     Parfait pour un replay un peu long : chacune va droit au but.\n' +
'\n' +
'     TA VIDÉO\n' +
'     Dans la ligne <div class="sio-ch" data-video="...">, plus bas,\n' +
'     remplace l’identifiant par celui de ta vidéo YouTube. C’est ce qui\n' +
'     suit v= dans l’adresse. Dans youtube.com/watch?v=aqz-KE-bpKQ\n' +
'     l’identifiant est aqz-KE-bpKQ\n' +
'\n' +
'     TES CHAPITRES\n' +
'     Chaque chapitre est un <button>, plus bas.\n' +
'     data-sec : le moment en secondes. 3 minutes 20 = 200 secondes.\n' +
'     Le minutage affiché est dans le <b>, le titre juste après.\n' +
'     Recopie une ligne pour ajouter un chapitre. Quatre à huit,\n' +
'     c’est l’idéal.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux.\n' +
'     --uni:1; donne un bloc d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond des chapitres, --bord leur contour.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille des chapitres. --arrondi : les angles.\n' +
'     --large-max : la largeur maximale du bloc.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le clic ne change rien : data-sec contient autre chose qu’un\n' +
'     nombre. Écris 200, pas 3:20.\n' +
'     La vidéo ne s’affiche pas : l’identifiant est faux, ou tu as collé\n' +
'     l’adresse entière au lieu de l’identifiant seul.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ch{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ch{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ch, .sio-ch *{box-sizing:border-box}\n' +
'.sio-ch{max-width:var(--large-max);margin:0 auto;padding:26px 16px;font-family:var(--f)}\n' +
'.sio-ch-ecran{position:relative;overflow:hidden;border-radius:var(--arrondi);\n' +
'  aspect-ratio:16/9;background:#1B1E24;box-shadow:0 30px 60px -42px var(--c1)}\n' +
'.sio-ch-ecran iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}\n' +
'.sio-ch-liste{margin:16px 0 0;display:grid;gap:8px}\n' +
'.sio-ch-liste button{display:flex;align-items:baseline;gap:12px;width:100%;\n' +
'  text-align:left;cursor:pointer;font-family:inherit;font-size:var(--taille);\n' +
'  line-height:1.45;color:var(--encre);background:var(--fond);\n' +
'  border:1px solid var(--bord);border-radius:var(--arrondi);padding:12px 15px;\n' +
'  transition:border-color .2s ease,transform .2s ease}\n' +
'.sio-ch-liste button:hover{border-color:var(--c1);transform:translateX(3px)}\n' +
'.sio-ch-liste button b{flex:none;font-variant-numeric:tabular-nums;color:var(--gris);\n' +
'  font-weight:700}\n' +
'.sio-ch-liste button.vu{border-color:var(--c1);\n' +
'  box-shadow:inset 3px 0 0 var(--c1)}\n' +
'.sio-ch-liste button.vu b{color:var(--c1)}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ch-liste button{transition:none}\n' +
'  .sio-ch-liste button:hover{transform:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace l’identifiant de la vidéo et les chapitres ci-dessous -->\n' +
'<div class="sio-ch" data-video="aqz-KE-bpKQ">\n' +
'  <div class="sio-ch-ecran">\n' +
'    <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?rel=0" title="Replay" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
'  </div>\n' +
'  <div class="sio-ch-liste">\n' +
'    <button type="button" data-sec="0"><b>00:00</b>Pourquoi ton lancement s’essouffle</button>\n' +
'    <button type="button" data-sec="200"><b>03:20</b>La structure du challenge en 5 jours</button>\n' +
'    <button type="button" data-sec="560"><b>09:20</b>Les 3 e-mails qui font venir les inscrites</button>\n' +
'    <button type="button" data-sec="900"><b>15:00</b>Comment tout relancer sans rien refaire</button>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var zones=document.querySelectorAll(".sio-ch");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    var id=z.getAttribute("data-video")||"";\n' +
'    var ecran=z.querySelector(".sio-ch-ecran");\n' +
'    var boutons=z.querySelectorAll(".sio-ch-liste button");\n' +
'    for(var k=0;k<boutons.length;k++){(function(b){\n' +
'      b.addEventListener("click",function(){\n' +
'        var s=parseInt(b.getAttribute("data-sec"),10);\n' +
'        if(!id || isNaN(s))return;\n' +
'        var f=ecran.querySelector("iframe");\n' +
'        if(!f){ f=document.createElement("iframe"); ecran.appendChild(f); }\n' +
'        f.title="Replay";\n' +
'        f.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");\n' +
'        f.setAttribute("allowfullscreen","");\n' +
'        f.src="https://www.youtube.com/embed/"+id+"?rel=0&autoplay=1&start="+s;\n' +
'        for(var j=0;j<boutons.length;j++)boutons[j].className="";\n' +
'        b.className="vu";\n' +
'      });\n' +
'    })(boutons[k]);}\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>'
}

];

var PREUVE = [
{
id:"etoiles", name:"Cinq étoiles", tag:"CSS",
desc:"Juste les cinq étoiles, avec une petite phrase en dessous. À glisser sous un titre, un prix ou un bouton.",
code:
'<!-- Cinq étoiles -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-st5{\n' +
'  --etoile:#F5A623;  /* ICI : la couleur des étoiles */\n' +
'  --gris:#6B7076;    /* ICI : la couleur de la petite phrase */\n' +
'  --taille:26px;     /* ICI : la taille des étoiles */\n' +
'  --ecart:5px;       /* ICI : l’espace entre les étoiles */\n' +
'  --texte:15px;      /* ICI : la taille de la petite phrase */\n' +
'  --haut:18px;       /* ICI : l’espace au-dessus et en dessous */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --etoile est la couleur des étoiles. L’orange doré se lit le mieux\n' +
'     sur fond clair, mais tu peux mettre ta couleur principale pour\n' +
'     rester dans ton univers.\n' +
'     --gris est la couleur de la petite phrase sous les étoiles.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille des étoiles. --ecart : l’espace entre elles.\n' +
'     --texte : la taille de la petite phrase.\n' +
'     --haut : l’espace au-dessus et en dessous du bloc.\n' +
'\n' +
'     LA PETITE PHRASE\n' +
'     Elle est dans le <small>, plus bas. Change-la, ou supprime la ligne\n' +
'     entière pour ne garder que les étoiles.\n' +
'\n' +
'     LE NOMBRE D’ÉTOILES\n' +
'     Il y a cinq <svg>, plus bas : un par étoile. Supprimes-en un\n' +
'     pour en afficher quatre.\n' +
'\n' +
'     ALIGNEMENT\n' +
'     Le bloc est centré. Pour l’aligner à gauche, remplace\n' +
'     text-align:center par text-align:left dans la ligne .sio-st5{...}\n' +
'     juste sous « Fin des réglages ».\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-st5, .sio-st5 *{box-sizing:border-box}\n' +
'.sio-st5{padding:var(--haut) 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-st5 span{display:inline-flex;gap:var(--ecart);line-height:0}\n' +
'.sio-st5 svg{width:var(--taille);height:var(--taille);fill:var(--etoile)}\n' +
'.sio-st5 small{display:block;margin-top:10px;font-size:var(--texte);\n' +
'  line-height:1.5;color:var(--gris)}\n' +
'@media (max-width:480px){\n' +
'  .sio-st5 svg{width:calc(var(--taille) - 4px);height:calc(var(--taille) - 4px)}}\n' +
'.sio-st5.sio-anim > span > svg, .sio-st5.sio-anim > small{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-st5.sio-anim > span > svg.vu, .sio-st5.sio-anim > small.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-st5.sio-anim > span > svg, .sio-st5.sio-anim > small{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : change ou supprime la petite phrase sous les étoiles -->\n' +
'<div class="sio-st5">\n' +
'  <span>\n' +
'    <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'    <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'    <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'    <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'    <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'  </span>\n' +
'  <small>128 femmes accompagnées, 4,9 de moyenne</small>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-st5");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > span > svg, :scope > small");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"avisdefile", name:"Témoignages qui défilent", tag:"JS",
desc:"Les avis passent l’un après l’autre, avec des points pour naviguer. Le premier reste visible même sans JavaScript.",
code:
'<!-- Témoignages qui défilent -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-av{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond de la carte */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du témoignage */\n' +
'  --gris:#6B7076;    /* ICI : la couleur du prénom */\n' +
'  --taille:18px;     /* ICI : la taille du témoignage */\n' +
'  --taille2:15px;    /* ICI : la taille du prénom */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --duree:6000;      /* ICI : le temps d’affichage d’un avis, en millièmes de seconde */\n' +
'  --large-max:680px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne un bloc d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond de la carte, --bord son contour.\n' +
'     --encre est la couleur du témoignage, --gris celle du prénom.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le témoignage. --taille2 : le prénom.\n' +
'     --arrondi : l’arrondi de la carte.\n' +
'     --large-max : la largeur maximale de la carte.\n' +
'     --duree : le temps d’affichage d’un avis. 6000 = six secondes.\n' +
'\n' +
'     TES TÉMOIGNAGES\n' +
'     Chaque témoignage est un <figure>, plus bas. Recopie-en un\n' +
'     pour en ajouter, supprime-le pour en retirer.\n' +
'     Trois à six avis suffisent : au-delà, on ne les lit plus.\n' +
'     Garde-les courts, deux ou trois lignes, avec un résultat concret.\n' +
'     Le premier reste affiché si le JavaScript ne se charge pas.\n' +
'     Les points sous la carte permettent de passer d’un avis à l’autre.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les avis ne défilent pas : le bloc a été collé deux fois, ou le\n' +
'     <script> a été coupé. Recopie le bloc entier depuis la bibliothèque.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-av{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-av{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-av, .sio-av *{box-sizing:border-box}\n' +
'.sio-av{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f)}\n' +
'.sio-av-carte{position:relative;padding:30px 28px 26px;border-radius:var(--arrondi);\n' +
'  background:var(--fond);border:1px solid var(--bord);\n' +
'  box-shadow:0 26px 54px -38px var(--c1)}\n' +
'.sio-av-carte:before{content:"“";position:absolute;top:2px;left:18px;\n' +
'  font-size:66px;line-height:1;color:var(--c2);opacity:.65}\n' +
'.sio-av figure{margin:0;display:none}\n' +
'.sio-av figure.vu{display:block}\n' +
'.sio-av blockquote{margin:0 0 16px;font-size:var(--taille);line-height:1.6;color:var(--encre)}\n' +
'.sio-av figcaption{display:flex;align-items:center;gap:12px;\n' +
'  font-size:var(--taille2);color:var(--gris)}\n' +
'.sio-av figcaption b{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:40px;height:40px;border-radius:50%;color:#fff;font-size:15px;font-weight:700;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-av-points{display:flex;justify-content:center;gap:8px;margin-top:18px}\n' +
'.sio-av-points button{width:9px;height:9px;padding:0;border:0;border-radius:50%;\n' +
'  background:var(--bord);cursor:pointer;transition:background .25s ease,transform .25s ease}\n' +
'.sio-av-points button[aria-current="true"]{background:var(--c1);transform:scale(1.25)}\n' +
'@media (max-width:480px){\n' +
'  .sio-av-carte{padding:26px 20px 22px}\n' +
'  .sio-av blockquote{font-size:calc(var(--taille) - 1px)}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-av-points button{transition:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les témoignages ci-dessous -->\n' +
'<div class="sio-av">\n' +
'  <div class="sio-av-carte">\n' +
'    <figure class="vu">\n' +
'      <blockquote>J’ai lancé mon challenge trois fois cette année, sans jamais refaire les pages. Mon chiffre a doublé au deuxième lancement.</blockquote>\n' +
'      <figcaption><b>CL</b>Clara, coach en organisation</figcaption>\n' +
'    </figure>\n' +
'    <figure>\n' +
'      <blockquote>Je repoussais depuis des mois, par peur de la technique. Tout était prêt en trois semaines, et mes premières inscrites sont arrivées dans la foulée.</blockquote>\n' +
'      <figcaption><b>AM</b>Amélie, formatrice en photographie</figcaption>\n' +
'    </figure>\n' +
'    <figure>\n' +
'      <blockquote>Mes pages ressemblent enfin à ce que je vends. Une cliente m’a demandé quelle agence s’en était occupée.</blockquote>\n' +
'      <figcaption><b>SO</b>Sonia, naturopathe</figcaption>\n' +
'    </figure>\n' +
'  </div>\n' +
'  <div class="sio-av-points"></div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var zones=document.querySelectorAll(".sio-av");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    var avis=z.querySelectorAll("figure");\n' +
'    var points=z.querySelector(".sio-av-points");\n' +
'    if(avis.length<2)return;\n' +
'    var n=0,timer=null;\n' +
'    var duree=parseInt(getComputedStyle(z).getPropertyValue("--duree"),10)||6000;\n' +
'    function montre(k){\n' +
'      for(var j=0;j<avis.length;j++){\n' +
'        avis[j].className=(j===k)?"vu":"";\n' +
'        points.children[j].setAttribute("aria-current",(j===k)?"true":"false");\n' +
'      }\n' +
'      n=k;\n' +
'    }\n' +
'    function suivant(){ montre((n+1)%avis.length); }\n' +
'    for(var j=0;j<avis.length;j++){(function(k){\n' +
'      var b=document.createElement("button");\n' +
'      b.type="button"; b.setAttribute("aria-label","Témoignage "+(k+1));\n' +
'      b.addEventListener("click",function(){ clearInterval(timer); montre(k); timer=setInterval(suivant,duree); });\n' +
'      points.appendChild(b);\n' +
'    })(j);}\n' +
'    montre(0);\n' +
'    if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){\n' +
'      timer=setInterval(suivant,duree);\n' +
'    }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"message", name:"Message d’une cliente", tag:"CSS",
desc:"Une conversation encadrée, comme une capture d’écran, mais nette et à tes couleurs.",
code:
'<!-- Message d’une cliente -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ms{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F4F3FB;    /* ICI : le fond de la conversation */\n' +
'  --bulle:#ffffff;   /* ICI : le fond de la bulle de ta cliente */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du texte */\n' +
'  --gris:#7C828A;    /* ICI : la couleur de l’heure et du prénom */\n' +
'  --taille:16px;     /* ICI : la taille des messages */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi des bulles */\n' +
'  --large-max:520px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne un bloc d’une seule couleur, sans dégradé.\n' +
'     --fond est le fond de la conversation, --bulle le fond des messages\n' +
'     de ta cliente. Tes réponses prennent le dégradé de tes couleurs.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille des messages.\n' +
'     --arrondi : l’arrondi des bulles.\n' +
'     --large-max : la largeur maximale de la conversation.\n' +
'\n' +
'     TES MESSAGES\n' +
'     Chaque message est un <p>, plus bas.\n' +
'     class="elle" pour un message de ta cliente, à gauche.\n' +
'     class="moi" pour ta réponse, à droite, dans tes couleurs.\n' +
'     Recopie une ligne pour ajouter un message.\n' +
'     Deux à quatre messages suffisent : c’est un extrait, pas un roman.\n' +
'     Recopie les mots de ta cliente tels quels, fautes comprises :\n' +
'     c’est ce qui rend la capture crédible. Et demande-lui son accord.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ms{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ms{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ms, .sio-ms *{box-sizing:border-box}\n' +
'.sio-ms{max-width:var(--large-max);margin:0 auto;padding:26px 16px;font-family:var(--f)}\n' +
'.sio-ms-tel{padding:18px 16px 20px;border-radius:26px;background:var(--fond);\n' +
'  box-shadow:0 26px 54px -40px var(--c1)}\n' +
'.sio-ms-tete{display:flex;align-items:center;gap:10px;margin-bottom:16px;\n' +
'  font-size:14px;color:var(--gris)}\n' +
'.sio-ms-tete b{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:34px;height:34px;border-radius:50%;color:#fff;font-size:13px;font-weight:700;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-ms p{max-width:88%;margin:0 0 10px;padding:13px 17px;font-size:var(--taille);\n' +
'  line-height:1.5;color:var(--encre);background:var(--bulle);\n' +
'  border-radius:var(--arrondi) var(--arrondi) var(--arrondi) 6px}\n' +
'.sio-ms p.moi{margin-left:auto;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  border-radius:var(--arrondi) var(--arrondi) 6px var(--arrondi)}\n' +
'.sio-ms p:last-child{margin-bottom:0}\n' +
'.sio-ms small{display:block;margin-top:14px;text-align:center;\n' +
'  font-size:13px;color:var(--gris)}\n' +
'@media (max-width:480px){.sio-ms p{max-width:94%;font-size:calc(var(--taille) - 1px)}}\n' +
'.sio-ms.sio-anim > .sio-ms-tel > p, .sio-ms.sio-anim > small{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-ms.sio-anim > .sio-ms-tel > p.vu, .sio-ms.sio-anim > small.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ms.sio-anim > .sio-ms-tel > p, .sio-ms.sio-anim > small{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace le prénom et les messages ci-dessous -->\n' +
'<div class="sio-ms">\n' +
'  <div class="sio-ms-tel">\n' +
'    <div class="sio-ms-tete"><b>CL</b>Clara · aujourd’hui</div>\n' +
'    <p class="elle">Je voulais te dire : 47 inscrites sur le challenge 🎉 J’en reviens pas, je pensais en avoir 10 grand max</p>\n' +
'    <p class="moi">Mais bravo à toi !! Tu as tout mis en place toute seule 👏</p>\n' +
'    <p class="elle">Grâce à ta méthode surtout. Et là je relance en janvier sans rien refaire, c’est ça qui me rend dingue</p>\n' +
'  </div>\n' +
'  <small>Message partagé avec son accord.</small>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-ms");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > .sio-ms-tel > p, :scope > small");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"compteur", name:"Compteur de preuve", tag:"JS",
desc:"Trois chiffres qui défilent à l’arrivée sur la section. Femmes accompagnées, taux de réussite, années d’expérience.",
code:
'<!-- Compteur de preuve -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-cpt{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --chiffre:40px;    /* ICI : la taille des chiffres */\n' +
'  --taille:15px;     /* ICI : la taille des libellés */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi du bandeau */\n' +
'  --hauteur:34px;    /* ICI : la hauteur du bandeau, en haut et en bas */\n' +
'  --colonne:150px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:900px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne un bandeau d’une seule couleur, sans dégradé.\n' +
'     --txt est la couleur du texte : garde-la claire sur un fond foncé.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --chiffre : la taille des chiffres. --taille : les libellés.\n' +
'     --arrondi : l’arrondi du bandeau. --hauteur : sa hauteur.\n' +
'     --colonne : largeur mini d’une colonne. Au-dessous, les chiffres\n' +
'     passent les uns sous les autres — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     TES CHIFFRES\n' +
'     Chaque chiffre est un <div>, plus bas.\n' +
'     data-fin : le nombre à atteindre. Écris-le sans espace : 1200\n' +
'     data-avant et data-apres : ce qui s’affiche autour, par exemple\n' +
'     data-avant="+" ou data-apres=" %"\n' +
'     Le texte sous le chiffre se change directement dans le <span>.\n' +
'     Trois chiffres, c’est l’idéal. Deux fonctionnent aussi.\n' +
'     Les chiffres défilent à l’arrivée sur la section, puis s’arrêtent\n' +
'     sur la valeur finale. Sans JavaScript, la valeur finale s’affiche\n' +
'     directement : rien ne disparaît jamais.\n' +
'     N’annonce que des chiffres vrais : c’est ce qui se vérifie le plus vite.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les chiffres ne bougent pas : data-fin contient un espace ou\n' +
'     une virgule. Écris 1200, pas 1 200 ni 1,200.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-cpt{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-cpt{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-cpt, .sio-cpt *{box-sizing:border-box}\n' +
'.sio-cpt{max-width:var(--large-max);margin:0 auto;padding:22px 16px;font-family:var(--f)}\n' +
'.sio-cpt-bande{padding:var(--hauteur) 24px;border-radius:var(--arrondi);color:var(--txt);\n' +
'  background:linear-gradient(120deg,var(--c1),var(--g2d),var(--c1));\n' +
'  box-shadow:0 28px 58px -40px var(--c1);\n' +
'  display:grid;gap:22px;text-align:center;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-cpt-bande > div{min-width:0}\n' +
'.sio-cpt b{display:block;font-size:var(--chiffre);line-height:1.05;font-weight:700;\n' +
'  font-variant-numeric:tabular-nums;letter-spacing:-.01em}\n' +
'.sio-cpt span{display:block;margin-top:8px;font-size:var(--taille);line-height:1.4;\n' +
'  opacity:.9}\n' +
'@media (max-width:480px){.sio-cpt b{font-size:calc(var(--chiffre) - 6px)}}\n' +
'</style>\n' +
'<!-- ICI : remplace les chiffres et les textes ci-dessous -->\n' +
'<div class="sio-cpt">\n' +
'  <div class="sio-cpt-bande">\n' +
'    <div>\n' +
'      <b data-fin="1200" data-avant="+">+1200</b>\n' +
'      <span>femmes accompagnées</span>\n' +
'    </div>\n' +
'    <div>\n' +
'      <b data-fin="94" data-apres=" %">94 %</b>\n' +
'      <span>terminent le challenge</span>\n' +
'    </div>\n' +
'    <div>\n' +
'      <b data-fin="6" data-apres=" ans">6 ans</b>\n' +
'      <span>à construire des tunnels</span>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;\n' +
'  var chiffres=document.querySelectorAll(".sio-cpt b[data-fin]");\n' +
'  var obs=new IntersectionObserver(function(entrees){\n' +
'    for(var i=0;i<entrees.length;i++){\n' +
'      if(!entrees[i].isIntersecting)continue;\n' +
'      (function(el){\n' +
'        var fin=parseInt(el.getAttribute("data-fin"),10);\n' +
'        var avant=el.getAttribute("data-avant")||"";\n' +
'        var apres=el.getAttribute("data-apres")||"";\n' +
'        if(isNaN(fin))return;\n' +
'        var debut=Date.now(),duree=1400;\n' +
'        function pas(){\n' +
'          var t=Math.min(1,(Date.now()-debut)/duree);\n' +
'          var v=Math.round(fin*(1-Math.pow(1-t,3)));\n' +
'          el.textContent=avant+v+apres;\n' +
'          if(t<1)requestAnimationFrame(pas);\n' +
'        }\n' +
'        pas();\n' +
'      })(entrees[i].target);\n' +
'      obs.unobserve(entrees[i].target);\n' +
'    }\n' +
'  },{threshold:.4});\n' +
'  for(var i=0;i<chiffres.length;i++)obs.observe(chiffres[i]);\n' +
'})();\n' +
'<\/script>'
},
{
id:"note", name:"Note et étoiles", tag:"CSS",
desc:"La note moyenne, les étoiles et trois avis courts. Le bloc de réassurance juste avant le bouton.",
code:
'<!-- Note et étoiles -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-nt{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;           /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --etoile:#F5A623;  /* ICI : la couleur des étoiles */\n' +
'  --fond:#ffffff;    /* ICI : le fond des cartes */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du texte */\n' +
'  --gris:#6B7076;    /* ICI : la couleur des prénoms */\n' +
'  --note:38px;       /* ICI : la taille de la note */\n' +
'  --taille:15px;     /* ICI : la taille des avis */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi des cartes */\n' +
'  --colonne:230px;   /* ICI : largeur mini d’une carte */\n' +
'  --large-max:920px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur dominante, --c2 la couleur claire.\n' +
'     --c2d est le mélange des deux : il occupe le milieu du dégradé.\n' +
'     Si tu changes --c1 et --c2, choisis pour --c2d une teinte située\n' +
'     entre les deux. C’est elle qui garde le texte blanc lisible.\n' +
'     --uni:1; donne un bloc d’une seule couleur, sans dégradé.\n' +
'     --etoile est la couleur des étoiles. L’orange doré se lit le mieux,\n' +
'     mais tu peux mettre ta couleur principale pour rester dans ton univers.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'     La police doit déjà être chargée par ta page pour s’afficher.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --note : la taille de la grande note. --taille : les avis.\n' +
'     --arrondi : l’arrondi des cartes.\n' +
'     --colonne : largeur mini d’une carte. Au-dessous, les cartes\n' +
'     passent les unes sous les autres — c’est ce qui se produit sur mobile.\n' +
'\n' +
'     TA NOTE ET TES AVIS\n' +
'     La note et le nombre d’avis se changent dans les deux premières\n' +
'     lignes du bloc, juste après <div class="sio-nt-note">.\n' +
'     Chaque avis est un <figure>. Recopie-en un pour en ajouter.\n' +
'     Trois avis courts valent mieux qu’un long paragraphe.\n' +
'     N’affiche une note que si tu l’as vraiment collectée.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'     La police ne change pas : elle n’est pas chargée par ta page.\n' +
'     Écris inherit dans --f pour reprendre celle de la page.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-nt{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-nt{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-nt, .sio-nt *{box-sizing:border-box}\n' +
'.sio-nt{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-nt-note{display:flex;align-items:center;justify-content:center;gap:14px;\n' +
'  flex-wrap:wrap;margin-bottom:22px;text-align:center}\n' +
'.sio-nt-note b{font-size:var(--note);line-height:1;font-weight:700;color:var(--encre);\n' +
'  font-variant-numeric:tabular-nums}\n' +
'.sio-nt-note span{font-size:15px;color:var(--gris)}\n' +
'.sio-nt-et{display:inline-flex;gap:3px}\n' +
'.sio-nt-et svg{width:19px;height:19px;fill:var(--etoile)}\n' +
'.sio-nt-liste{display:grid;gap:14px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-nt figure{min-width:0;margin:0;padding:18px 18px 16px;border-radius:var(--arrondi);\n' +
'  background:var(--fond);border:1px solid var(--bord)}\n' +
'.sio-nt figure .sio-nt-et{margin-bottom:10px}\n' +
'.sio-nt blockquote{margin:0 0 12px;font-size:var(--taille);line-height:1.55;color:var(--encre)}\n' +
'.sio-nt figcaption{display:flex;align-items:center;gap:9px;font-size:14px;color:var(--gris)}\n' +
'.sio-nt figcaption i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:30px;height:30px;border-radius:50%;font-style:normal;font-size:12px;\n' +
'  font-weight:700;color:#fff;background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'@media (max-width:480px){.sio-nt-note b{font-size:calc(var(--note) - 6px)}}\n' +
'.sio-nt.sio-anim > .sio-nt-note, .sio-nt.sio-anim > .sio-nt-liste > figure{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-nt.sio-anim > .sio-nt-note.vu, .sio-nt.sio-anim > .sio-nt-liste > figure.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-nt.sio-anim > .sio-nt-note, .sio-nt.sio-anim > .sio-nt-liste > figure{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace la note, le nombre d’avis et les témoignages ci-dessous -->\n' +
'<div class="sio-nt">\n' +
'  <div class="sio-nt-note">\n' +
'    <b>4,9</b>\n' +
'    <span class="sio-nt-et">\n' +
'      <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'    </span>\n' +
'    <span>sur 128 avis vérifiés</span>\n' +
'  </div>\n' +
'  <div class="sio-nt-liste">\n' +
'    <figure>\n' +
'      <span class="sio-nt-et">\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      </span>\n' +
'      <blockquote>Tout est clair, même pour moi qui fuis la technique. J’ai suivi les étapes sans jamais bloquer.</blockquote>\n' +
'      <figcaption><i>CL</i>Clara, coach</figcaption>\n' +
'    </figure>\n' +
'    <figure>\n' +
'      <span class="sio-nt-et">\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      </span>\n' +
'      <blockquote>Mes pages sont enfin à la hauteur de mon offre. Le regard de mes clientes a changé.</blockquote>\n' +
'      <figcaption><i>AM</i>Amélie, formatrice</figcaption>\n' +
'    </figure>\n' +
'    <figure>\n' +
'      <span class="sio-nt-et">\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'        <svg viewBox="0 0 24 24"><path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4L12 18.3 5.5 22l1.6-7.4-5.6-5 7.5-.7z"/></svg>\n' +
'      </span>\n' +
'      <blockquote>Un accompagnement carré, et un résultat que je relance quand je veux.</blockquote>\n' +
'      <figcaption><i>SO</i>Sonia, naturopathe</figcaption>\n' +
'    </figure>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-nt");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > .sio-nt-note, :scope > .sio-nt-liste > figure");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
}

];

var SOCIAL = [
{
id:"suivez", name:"Barre suivez-moi", tag:"CSS",
desc:"Tes réseaux en une ligne, avec des pictogrammes dessinés en code. Aucune image à charger.",
code:
'<!-- Barre suivez-moi -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rs{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte des pastilles */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --taille:15px;     /* ICI : la taille du nom des réseaux */\n' +
'  --titre:17px;      /* ICI : la taille du titre */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi des pastilles */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2d forment le dégradé des pastilles, --txt le texte et les traits.\n' +
'     --encre colore le titre au-dessus.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le nom des réseaux. --titre : le titre au-dessus.\n' +
'     --arrondi : 999px = pastilles arrondies, 12px = doux, 0 = carré.\n' +
'\n' +
'     LES PICTOGRAMMES\n' +
'     Ils sont dessinés en code, dans les balises <svg> plus bas :\n' +
'     rien à charger, et ils prennent la couleur de --txt.\n' +
'     Ce sont des pictogrammes neutres, pas les logos officiels des\n' +
'     réseaux, qui sont des marques déposées. Si tu veux les vrais logos,\n' +
'     télécharge-les sur les pages de marque de chaque réseau et remplace\n' +
'     le contenu du <svg>.\n' +
'     Pour retirer un réseau, supprime sa ligne <a> entière.\n' +
'     Pour en ajouter un, recopie une ligne <a> et change le nom.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TES LIENS ==============\n' +
'     Chaque réseau a son propre lien, plus bas, dans les lignes <a>.\n' +
'     Remplace chaque # par l’adresse de ton profil.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-rs{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-rs{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-rs, .sio-rs *{box-sizing:border-box}\n' +
'.sio-rs{padding:28px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rs p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-rs-row{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}\n' +
'.sio-rs a{display:inline-flex;align-items:center;gap:9px;\n' +
'  padding:11px 18px;border-radius:var(--arrondi);text-decoration:none;\n' +
'  color:var(--txt);font-weight:700;font-size:var(--taille);\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 12px 26px -16px var(--c1);transition:transform .2s ease}\n' +
'.sio-rs a:hover{transform:translateY(-2px)}\n' +
'.sio-rs svg{flex:none;width:18px;height:18px;stroke:var(--txt);fill:none;stroke-width:1.9}\n' +
'</style>\n' +
'<!-- ICI : remplace les noms et les liens ci-dessous -->\n' +
'<div class="sio-rs">\n' +
'  <p>On se retrouve ailleurs ?</p>\n' +
'  <div class="sio-rs-row">\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>Instagram</a>\n' +
'    <a href="#"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z"/></svg>YouTube</a>\n' +
'    <a href="#"><svg viewBox="0 0 24 24"><path d="M4 4h16v13H7l-3 3z"/></svg>Newsletter</a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"picto", name:"Pictogrammes seuls", tag:"CSS",
desc:"La même barre, réduite à des ronds. Plus discrète, idéale en pied de page ou sous un héro.",
code:
'<!-- Barre suivez-moi, pictogrammes seuls -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rp{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur des pictogrammes */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --titre:17px;      /* ICI : la taille du titre. Mets 0 pour le masquer. */\n' +
'  --rond:52px;       /* ICI : la taille des ronds */\n' +
'  --picto:22px;      /* ICI : la taille du dessin dans le rond */\n' +
'  --ecart:12px;      /* ICI : l’espace entre les ronds */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2d forment le dégradé des ronds, --txt le dessin dedans.\n' +
'     --encre colore le titre au-dessus.\n' +
'     Pour des ronds clairs avec un dessin foncé, inverse les deux :\n' +
'     mets une teinte claire dans --c1 et --c2d, et ta couleur\n' +
'     principale dans --txt.\n' +
'\n' +
'     LA POLICE\n' +
'     Elle ne sert qu’au titre. Écris inherit pour reprendre celle de\n' +
'     ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --rond : le diamètre des ronds. 44px est le minimum confortable\n' +
'     pour un doigt sur mobile.\n' +
'     --picto : la taille du dessin à l’intérieur. Garde-le autour de\n' +
'     la moitié de --rond.\n' +
'     --ecart : l’espace entre les ronds.\n' +
'     --titre : la taille du titre. Mets 0 pour le faire disparaître.\n' +
'\n' +
'     LES PICTOGRAMMES\n' +
'     Ils sont dessinés en code, dans les balises <svg> plus bas.\n' +
'     Ce sont des formes neutres, pas les logos officiels des réseaux,\n' +
'     qui sont des marques déposées. Pour les vrais logos, télécharge-les\n' +
'     sur les pages de marque de chaque réseau et remplace le <svg>.\n' +
'     Cinq ronds sont fournis : photo, vidéo, épingle, message, e-mail.\n' +
'     Supprime les lignes <a> inutiles, recopie-en une pour ajouter.\n' +
'\n' +
'     LE NOM DU RÉSEAU\n' +
'     Sans texte visible, chaque rond garde son nom dans aria-label.\n' +
'     Ne le supprime pas : c’est ce que lit une personne aveugle, et\n' +
'     ce qui s’affiche au survol. Écris-y le nom du réseau.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les ronds sont ovales : --rond doit avoir la même valeur en\n' +
'     hauteur et en largeur, ne touche pas au border-radius.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TES LIENS ==============\n' +
'     Chaque rond a son propre lien, plus bas, dans les lignes <a>.\n' +
'     Remplace chaque # par l’adresse de ton profil.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-rp{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-rp{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-rp, .sio-rp *{box-sizing:border-box}\n' +
'.sio-rp{padding:26px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rp p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-rp p:empty{display:none}\n' +
'.sio-rp-row{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--ecart)}\n' +
'.sio-rp a{display:inline-flex;align-items:center;justify-content:center;\n' +
'  width:var(--rond);height:var(--rond);border-radius:50%;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 12px 26px -16px var(--c1);\n' +
'  transition:transform .22s cubic-bezier(.22,1,.36,1),box-shadow .22s ease}\n' +
'.sio-rp a:hover{transform:translateY(-3px);box-shadow:0 18px 32px -16px var(--c1)}\n' +
'.sio-rp a:focus-visible{outline:3px solid var(--c2);outline-offset:3px}\n' +
'.sio-rp svg{width:var(--picto);height:var(--picto);\n' +
'  stroke:var(--txt);fill:none;stroke-width:1.8}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre, les liens et les noms de réseaux -->\n' +
'<div class="sio-rp">\n' +
'  <p>On se retrouve ailleurs ?</p>\n' +
'  <div class="sio-rp-row">\n' +
'    <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg></a>\n' +
'    <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z"/></svg></a>\n' +
'    <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24"><path d="M12 3a7 7 0 0 1 3 13.3"/><path d="M12 3a7 7 0 0 0-3 13.3"/><path d="M11 16l-1.5 5"/></svg></a>\n' +
'    <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24"><circle cx="9" cy="17" r="3.5"/><path d="M12.5 17V4c1 2.2 2.6 3.4 5 3.6"/></svg></a>\n' +
'    <a href="#" aria-label="Newsletter"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg></a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"pictonu", name:"Pictogrammes nus", tag:"CSS",
desc:"Les mêmes dessins, sans rond ni fond, en trait noir. Le plus sobre des trois.",
code:
'<!-- Barre suivez-moi, pictogrammes nus -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rn{\n' +
'  --trait:#1B1E24;   /* ICI : la couleur des pictogrammes */\n' +
'  --survol:#7D7EE1;  /* ICI : leur couleur au survol */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --titre:17px;      /* ICI : la taille du titre. Mets 0 pour le masquer. */\n' +
'  --picto:26px;      /* ICI : la taille des pictogrammes */\n' +
'  --epaisseur:1.7;   /* ICI : l’épaisseur du trait. 1.4 = fin, 2.2 = franc. */\n' +
'  --ecart:22px;      /* ICI : l’espace entre les pictogrammes */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --trait est la couleur des dessins. Le noir pur #000000 est dur :\n' +
'     #1B1E24 donne un noir plus doux, plus proche du texte imprimé.\n' +
'     --survol est la couleur au passage de la souris. Mets-y ta couleur\n' +
'     de marque : c’est le seul rappel de charte de ce bloc.\n' +
'     Sur un fond sombre, mets du blanc dans --trait.\n' +
'\n' +
'     LA POLICE\n' +
'     Elle ne sert qu’au titre. Écris inherit pour reprendre celle de\n' +
'     ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --picto : la taille des dessins. Sans rond autour, ils paraissent\n' +
'     plus petits : 24 à 28px est un bon équilibre.\n' +
'     --epaisseur : l’épaisseur du trait, sans unité. 1.4 pour un rendu\n' +
'     fin et élégant, 2.2 pour quelque chose de plus affirmé.\n' +
'     --ecart : l’espace entre eux. Sans fond, il faut de l’air :\n' +
'     20px au minimum, sinon les dessins se télescopent.\n' +
'     --titre : la taille du titre. Mets 0 pour le faire disparaître.\n' +
'\n' +
'     LES PICTOGRAMMES\n' +
'     Ils sont dessinés en code, dans les balises <svg> plus bas.\n' +
'     Ce sont des formes neutres, pas les logos officiels des réseaux,\n' +
'     qui sont des marques déposées. Pour les vrais logos, télécharge-les\n' +
'     sur les pages de marque de chaque réseau et remplace le <svg>.\n' +
'     Supprime les lignes <a> inutiles, recopie-en une pour ajouter.\n' +
'\n' +
'     LE NOM DU RÉSEAU\n' +
'     Sans texte visible, chaque dessin garde son nom dans aria-label.\n' +
'     Ne le supprime pas : c’est ce que lit une personne aveugle, et\n' +
'     ce qui s’affiche au survol. Écris-y le nom du réseau.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les pictogrammes sont noirs pleins au lieu d’être en trait :\n' +
'     un fill a été ajouté quelque part. Le bloc dessine en trait seul.\n' +
'     Ils se touchent : augmente --ecart.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TES LIENS ==============\n' +
'     Chaque pictogramme a son propre lien, plus bas, dans les lignes <a>.\n' +
'     Remplace chaque # par l’adresse de ton profil.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-rn, .sio-rn *{box-sizing:border-box}\n' +
'.sio-rn{padding:26px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rn p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-rn p:empty{display:none}\n' +
'.sio-rn-row{display:flex;flex-wrap:wrap;justify-content:center;\n' +
'  align-items:center;gap:var(--ecart)}\n' +
'.sio-rn a{display:inline-flex;align-items:center;justify-content:center;\n' +
'  padding:6px;border-radius:10px;color:var(--trait);\n' +
'  transition:color .22s ease,transform .22s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-rn a:hover{color:var(--survol);transform:translateY(-3px)}\n' +
'.sio-rn a:focus-visible{outline:2px solid var(--survol);outline-offset:2px}\n' +
'.sio-rn svg{width:var(--picto);height:var(--picto);display:block;\n' +
'  stroke:currentColor;fill:none;stroke-width:var(--epaisseur);\n' +
'  stroke-linecap:round;stroke-linejoin:round}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre, les liens et les noms de réseaux -->\n' +
'<div class="sio-rn">\n' +
'  <p>On se retrouve ailleurs ?</p>\n' +
'  <div class="sio-rn-row">\n' +
'    <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a>\n' +
'    <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z"/></svg></a>\n' +
'    <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24"><path d="M12 3a7 7 0 0 1 3 13.3"/><path d="M12 3a7 7 0 0 0-3 13.3"/><path d="M11 16l-1.5 5"/></svg></a>\n' +
'    <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24"><circle cx="9" cy="17" r="3.5"/><path d="M12.5 17V4c1 2.2 2.6 3.4 5 3.6"/></svg></a>\n' +
'    <a href="#" aria-label="Newsletter"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg></a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"partage", name:"Boutons de partage", tag:"JS",
desc:"À poser sur la page de remerciement : le moment où une cliente est le plus disposée à parler de toi.",
code:
'<!-- Boutons de partage -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-pt{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#ffffff;    /* ICI : le fond des boutons */\n' +
'  --bord:#E6E3EE;    /* ICI : le contour des boutons */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --taille:15px;     /* ICI : la taille du texte des boutons */\n' +
'  --titre:17px;      /* ICI : la taille du titre */\n' +
'  --arrondi:12px;    /* ICI : l’arrondi des boutons */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 colore le texte et les pictogrammes des boutons.\n' +
'     --fond et --bord sont le fond et le contour.\n' +
'     --encre colore le titre au-dessus.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : le texte des boutons. --titre : le titre au-dessus.\n' +
'     --arrondi : l’arrondi des boutons.\n' +
'\n' +
'     CE QUI EST PARTAGÉ\n' +
'     Les boutons partagent la page où le bloc est installé : l’adresse\n' +
'     est récupérée toute seule, tu n’as rien à écrire.\n' +
'     data-texte, plus bas, est la phrase proposée au visiteur dans\n' +
'     WhatsApp et dans l’e-mail. Écris-la à la première personne :\n' +
'     c’est lui qui parle, pas toi.\n' +
'     Le bouton Copier le lien copie l’adresse dans le presse-papiers.\n' +
'     Pose ce bloc sur ta page de remerciement, jamais sur la page de\n' +
'     vente : avant l’achat, il détourne l’attention du bouton principal.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les boutons ne s’ouvrent pas : c’est normal dans l’éditeur, la page\n' +
'     n’a pas encore d’adresse publique. Teste sur la page publiée.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-pt, .sio-pt *{box-sizing:border-box}\n' +
'.sio-pt{padding:28px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-pt p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-pt-row{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}\n' +
'.sio-pt a, .sio-pt button{display:inline-flex;align-items:center;gap:8px;\n' +
'  padding:12px 18px;border-radius:var(--arrondi);cursor:pointer;\n' +
'  border:1px solid var(--bord);background:var(--fond);color:var(--c1);\n' +
'  text-decoration:none;font-family:var(--f);font-weight:700;font-size:var(--taille);\n' +
'  transition:border-color .2s ease,transform .2s ease}\n' +
'.sio-pt a:hover, .sio-pt button:hover{border-color:var(--c1);transform:translateY(-2px)}\n' +
'.sio-pt svg{flex:none;width:17px;height:17px;stroke:var(--c1);fill:none;stroke-width:1.9}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre ci-dessous -->\n' +
'<div class="sio-pt" data-texte="Je viens de rejoindre ce programme, je te le partage :">\n' +
'  <p>Ça peut servir à quelqu’un que tu connais ?</p>\n' +
'  <div class="sio-pt-row">\n' +
'    <a data-res="wa" href="#" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M4 20l1.4-4A8 8 0 1 1 8 19.6z"/></svg>WhatsApp</a>\n' +
'    <a data-res="fb" href="#" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1z"/></svg>Facebook</a>\n' +
'    <a data-res="li" href="#" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4"/></svg>LinkedIn</a>\n' +
'    <a data-res="mail" href="#"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>E-mail</a>\n' +
'    <button type="button" data-res="copie"><svg viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="3"/><path d="M15 5H6a2 2 0 0 0-2 2v9"/></svg>Copier le lien</button>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var zones=document.querySelectorAll(".sio-pt");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    var url=encodeURIComponent(location.href);\n' +
'    var txt=encodeURIComponent(z.getAttribute("data-texte")||"");\n' +
'    var liens={\n' +
'      wa:"https://wa.me/?text="+txt+"%20"+url,\n' +
'      fb:"https://www.facebook.com/sharer/sharer.php?u="+url,\n' +
'      li:"https://www.linkedin.com/sharing/share-offsite/?url="+url,\n' +
'      mail:"mailto:?subject="+txt+"&body="+url\n' +
'    };\n' +
'    var as=z.querySelectorAll("a[data-res]");\n' +
'    for(var k=0;k<as.length;k++){\n' +
'      var r=as[k].getAttribute("data-res");\n' +
'      if(liens[r]){as[k].setAttribute("href",liens[r]);}\n' +
'    }\n' +
'    var b=z.querySelector("button[data-res=copie]");\n' +
'    if(b){b.addEventListener("click",function(){\n' +
'      var fini=function(){var t=b.innerHTML;b.innerHTML="Lien copié !";\n' +
'        setTimeout(function(){b.innerHTML=t;},1800);};\n' +
'      if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(fini,fini);}\n' +
'      else{fini();}\n' +
'    });}\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"chiffres", name:"Bandeau de preuve sociale", tag:"CSS",
desc:"Trois chiffres qui situent ton activité. À renseigner à la main, et à tenir à jour.",
code:
'<!-- Bandeau de preuve sociale -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ch{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --chiffre:34px;    /* ICI : la taille des chiffres */\n' +
'  --taille:15px;     /* ICI : la taille des légendes */\n' +
'  --hauteur:32px;    /* ICI : la hauteur du bandeau, en haut et en bas */\n' +
'  --colonne:180px;   /* ICI : largeur mini d’une colonne */\n' +
'  --large-max:900px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2d forment le dégradé de fond, --txt la couleur du texte.\n' +
'     Garde le dégradé assez foncé pour que le blanc reste lisible.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --chiffre : la taille des chiffres. --taille : les légendes.\n' +
'     --hauteur : la hauteur du bandeau.\n' +
'     --colonne : largeur mini d’une colonne. Sous cette largeur, les\n' +
'     chiffres se placent les uns sous les autres.\n' +
'\n' +
'     LES CHIFFRES\n' +
'     Ils sont écrits en dur, plus bas : remplace le texte À renseigner.\n' +
'     Pour en mettre deux ou quatre, supprime ou recopie une ligne <div>.\n' +
'     N’annonce que des chiffres exacts et vérifiables, et pense à les\n' +
'     mettre à jour : un chiffre gonflé se repère, et il coûte plus cher\n' +
'     en confiance qu’il ne rapporte en crédibilité.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ch, .sio-ch *{box-sizing:border-box}\n' +
'.sio-ch{padding:var(--hauteur) 16px;font-family:var(--f);color:var(--txt);\n' +
'  background:linear-gradient(120deg,var(--c1),var(--c2d))}\n' +
'.sio-ch-row{max-width:var(--large-max);margin:0 auto;display:grid;gap:22px;\n' +
'  text-align:center;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-ch b{display:block;font-size:var(--chiffre);line-height:1.1;font-weight:700;\n' +
'  font-variant-numeric:tabular-nums}\n' +
'.sio-ch span{display:block;margin-top:6px;font-size:var(--taille);\n' +
'  font-weight:600;opacity:.88}\n' +
'</style>\n' +
'<!-- ICI : remplace les chiffres et les légendes ci-dessous -->\n' +
'<div class="sio-ch">\n' +
'  <div class="sio-ch-row">\n' +
'    <div><b>À renseigner</b><span>abonnées sur Instagram</span></div>\n' +
'    <div><b>À renseigner</b><span>femmes accompagnées</span></div>\n' +
'    <div><b>À renseigner</b><span>années à construire des tunnels</span></div>\n' +
'  </div>\n' +
'</div>'
},
{
id:"grille", name:"Grille de publications", tag:"CSS",
desc:"Six vignettes qui renvoient vers tes publications. Les images se mettent à jour à la main.",
code:
'<!-- Grille de publications -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-gr{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --titre:17px;      /* ICI : la taille du titre */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi des vignettes */\n' +
'  --colonne:150px;   /* ICI : largeur mini d’une vignette */\n' +
'  --large-max:900px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2 colorent les vignettes tant qu’aucune image n’est posée.\n' +
'     --encre colore le titre au-dessus.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --titre : la taille du titre. --arrondi : l’arrondi des vignettes.\n' +
'     --colonne : largeur mini d’une vignette. Diminue-la pour en avoir\n' +
'     plus par ligne, augmente-la pour en avoir moins.\n' +
'     --large-max : la largeur maximale de la grille.\n' +
'\n' +
'     LES IMAGES\n' +
'     Instagram ne permet plus de récupérer ton flux automatiquement :\n' +
'     les images se posent à la main. C’est une contrainte de la\n' +
'     plateforme, pas du bloc.\n' +
'     Dans chaque vignette, entre <a ...> et </a>, mets ton image :\n' +
'     <img src="ton-image.jpg" alt="description de la publication">\n' +
'     Format carré, 600 sur 600 pixels suffisent.\n' +
'     Une vignette sans image affiche un aplat dégradé : rien ne casse.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TES LIENS ==============\n' +
'     Chaque vignette a son lien, plus bas, dans les lignes <a>.\n' +
'     Remplace chaque # par l’adresse de la publication.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-gr, .sio-gr *{box-sizing:border-box}\n' +
'.sio-gr{max-width:var(--large-max);margin:0 auto;padding:28px 16px;\n' +
'  font-family:var(--f);text-align:center}\n' +
'.sio-gr p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-gr-row{display:grid;gap:10px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-gr a{position:relative;display:block;overflow:hidden;\n' +
'  border-radius:var(--arrondi);aspect-ratio:1/1;\n' +
'  background:linear-gradient(140deg,var(--c1),var(--c2));\n' +
'  transition:transform .3s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-gr a:hover{transform:scale(1.03)}\n' +
'.sio-gr img{display:block;width:100%;height:100%;object-fit:cover}\n' +
'</style>\n' +
'<!-- ICI : remplace les images et les liens ci-dessous -->\n' +
'<div class="sio-gr">\n' +
'  <p>Mes dernières publications</p>\n' +
'  <div class="sio-gr-row">\n' +
'    <!-- ICI : dans chaque vignette, mets <img src="ton-image.jpg" alt="description"> -->\n' +
'    <a href="#" target="_blank" rel="noopener"></a>\n' +
'    <a href="#" target="_blank" rel="noopener"></a>\n' +
'    <a href="#" target="_blank" rel="noopener"></a>\n' +
'    <a href="#" target="_blank" rel="noopener"></a>\n' +
'    <a href="#" target="_blank" rel="noopener"></a>\n' +
'    <a href="#" target="_blank" rel="noopener"></a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"video", name:"Vidéo en façade", tag:"JS",
desc:"La vidéo ne se charge qu’au clic. La page reste rapide, et aucun traceur ne part avant l’accord du visiteur.",
code:
'<!-- Vidéo en façade -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-vd{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du bouton de lecture */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi du cadre */\n' +
'  --large-max:760px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2 colorent le cadre tant que la miniature n’est pas chargée.\n' +
'     --txt est la couleur du rond de lecture.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --arrondi : l’arrondi du cadre.\n' +
'     --large-max : la largeur maximale de la vidéo.\n' +
'\n' +
'     LA VIDÉO\n' +
'     data-id, plus bas, reçoit l’identifiant de ta vidéo YouTube :\n' +
'     dans youtube.com/watch?v=AbCdEf12345, c’est AbCdEf12345.\n' +
'     La vidéo ne se charge qu’au clic. Ta page reste légère, et aucun\n' +
'     traceur YouTube ne part avant que le visiteur ait choisi de lire.\n' +
'     L’adresse utilisée est youtube-nocookie.com, la version sans\n' +
'     cookies publicitaires.\n' +
'     La miniature vient de YouTube. Si ta vidéo est récente et qu’elle\n' +
'     n’apparaît pas, le dégradé prend le relais.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Rien ne se passe au clic : data-id est vide ou mal recopié.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-vd, .sio-vd *{box-sizing:border-box}\n' +
'.sio-vd{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-vd-cadre{position:relative;aspect-ratio:16/9;border-radius:var(--arrondi);\n' +
'  overflow:hidden;cursor:pointer;background-size:cover;background-position:center;\n' +
'  background-image:linear-gradient(140deg,var(--c1),var(--c2));\n' +
'  box-shadow:0 28px 56px -38px var(--c1)}\n' +
'.sio-vd-cadre::after{content:"";position:absolute;inset:0;background:rgba(20,16,40,.28);\n' +
'  transition:background .25s ease}\n' +
'.sio-vd-cadre:hover::after{background:rgba(20,16,40,.14)}\n' +
'.sio-vd-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;\n' +
'  width:76px;height:76px;border-radius:50%;display:flex;align-items:center;\n' +
'  justify-content:center;background:var(--txt);\n' +
'  box-shadow:0 18px 40px -16px rgba(0,0,0,.6);transition:transform .25s ease}\n' +
'.sio-vd-cadre:hover .sio-vd-play{transform:translate(-50%,-50%) scale(1.08)}\n' +
'.sio-vd-play svg{width:26px;height:26px;fill:var(--c1);margin-left:4px}\n' +
'.sio-vd iframe{width:100%;height:100%;border:0;display:block}\n' +
'</style>\n' +
'<!-- ICI : data-id, l’identifiant de ta vidéo YouTube -->\n' +
'<div class="sio-vd">\n' +
'  <div class="sio-vd-cadre" data-id="">\n' +
'    <div class="sio-vd-play"><svg viewBox="0 0 24 24"><path d="M8 5l12 7-12 7z"/></svg></div>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var all=document.querySelectorAll(".sio-vd-cadre");\n' +
'  for(var i=0;i<all.length;i++){(function(c){\n' +
'    var id=c.getAttribute("data-id");\n' +
'    if(id){c.style.backgroundImage="url(https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg)";}\n' +
'    c.addEventListener("click",function(){\n' +
'      if(!id)return;\n' +
'      c.innerHTML="<iframe src=\\"https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1\\" '
 + 'allow=\\"autoplay; encrypted-media; picture-in-picture\\" allowfullscreen title=\\"Vidéo\\"><\/iframe>";\n' +
'      c.style.cursor="default";\n' +
'    });\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"citation", name:"Citation d’un message reçu", tag:"CSS",
desc:"Un retour de cliente mis en forme, avec la mention du canal. Une citation assumée, pas une fausse capture d’écran.",
code:
'<!-- Citation d’un message reçu -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ci{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond:#F6F4FF;    /* ICI : le fond de la bulle */\n' +
'  --encre:#2B2F36;   /* ICI : la couleur du message */\n' +
'  --gris:#7B7D84;    /* ICI : la couleur de la signature */\n' +
'  --taille:18px;     /* ICI : la taille du message */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi de la bulle */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond est le fond de la bulle, --c2 son contour.\n' +
'     --c1 et --c2d colorent la pastille des initiales.\n' +
'     --encre colore le message, --gris la signature.\n' +
'\n' +
'     LA POLICE\n' +
'     --f accepte le nom de ta police entre guillemets, suivi d’un repli :\n' +
'     "Poppins", Arial, sans-serif\n' +
'     Écris simplement inherit pour reprendre la police de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille du message. --arrondi : l’arrondi de la bulle.\n' +
'     --large-max : la largeur maximale.\n' +
'\n' +
'     LE MESSAGE\n' +
'     Remplace le texte, les initiales, le prénom et le canal, plus bas.\n' +
'     Ce bloc est une citation assumée, pas une imitation de capture\n' +
'     d’écran : il cite un message reçu en le disant. C’est un choix.\n' +
'     Une fausse capture qui imite l’interface d’un réseau est un faux,\n' +
'     et se retourne contre toi si quelqu’un le remarque.\n' +
'     Demande toujours son accord à la personne avant de publier son\n' +
'     prénom, et reprends ses mots sans les retoucher.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ci, .sio-ci *{box-sizing:border-box}\n' +
'.sio-ci{max-width:var(--large-max);margin:0 auto;padding:28px 16px;font-family:var(--f)}\n' +
'.sio-ci-bulle{position:relative;padding:26px 26px 24px;border-radius:var(--arrondi);\n' +
'  background:var(--fond);border:1px solid var(--c2)}\n' +
'.sio-ci-bulle::after{content:"";position:absolute;left:34px;bottom:-11px;\n' +
'  width:20px;height:20px;transform:rotate(45deg);\n' +
'  background:var(--fond);border-right:1px solid var(--c2);border-bottom:1px solid var(--c2)}\n' +
'.sio-ci p{margin:0;font-size:var(--taille);line-height:1.6;color:var(--encre)}\n' +
'.sio-ci-sig{display:flex;align-items:center;gap:12px;margin:22px 0 0 10px}\n' +
'.sio-ci i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:42px;height:42px;border-radius:50%;font-style:normal;color:#fff;\n' +
'  font-weight:700;font-size:16px;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
'.sio-ci b{display:block;font-size:16px;color:var(--encre)}\n' +
'.sio-ci span{font-size:14px;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace le message, les initiales, le prénom et le canal -->\n' +
'<div class="sio-ci">\n' +
'  <div class="sio-ci-bulle">\n' +
'    <p>Message reçu à remplacer. Reprends les mots exacts de ta cliente, sans les retoucher.</p>\n' +
'  </div>\n' +
'  <div class="sio-ci-sig">\n' +
'    <i>XX</i>\n' +
'    <div>\n' +
'      <b>Prénom</b>\n' +
'      <span>message reçu sur Instagram</span>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>'
}
];

var PROMO = [
{
id:"prix", name:"Étiquette de prix", tag:"CSS",
desc:"L’ancien prix barré, le nouveau, et la réduction. Avec la date de fin affichée, pas sous-entendue.",
code:
'<!-- Étiquette de prix -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-px{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --badge:#D6455C;   /* ICI : la couleur de la pastille de réduction */\n' +
'  --ancien:#9AA0A6;  /* ICI : la couleur de l’ancien prix */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du nouveau prix */\n' +
'  --gris:#6B6D74;    /* ICI : la couleur de la ligne du bas */\n' +
'  --prix:46px;       /* ICI : la taille du nouveau prix */\n' +
'  --taille:20px;     /* ICI : la taille de l’ancien prix */\n' +
'  --taille2:15px;    /* ICI : la taille de la ligne du bas */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --badge est la seule couleur vive du bloc : la pastille de\n' +
'     réduction. Un rouge ou un corail fonctionne, mais si ta charte\n' +
'     est douce, mets-y ta couleur principale, l’effet reste.\n' +
'     --ancien doit rester gris : c’est un prix qui n’existe plus.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     LA TAILLE\n' +
'     --prix : le nouveau prix. C’est lui qu’on doit lire en premier.\n' +
'     --taille : l’ancien prix, nettement plus petit.\n' +
'     --taille2 : la ligne du bas, celle qui porte la date.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Les trois montants et le pourcentage sont dans le texte, plus bas.\n' +
'     Calcule la réduction toi-même et écris-la juste : un pourcentage\n' +
'     approximatif se vérifie en deux secondes.\n' +
'     L’ancien prix doit être un prix réellement pratiqué avant. Dans\n' +
'     plusieurs pays, dont la France, annoncer une réduction oblige à\n' +
'     référencer le prix le plus bas pratiqué les trente derniers jours.\n' +
'     La ligne du bas porte la date de fin : écris-la en clair.\n' +
'     Une promotion sans date visible n’est plus une promotion.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-px, .sio-px *{box-sizing:border-box}\n' +
'.sio-px{padding:28px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-px-row{display:inline-flex;align-items:baseline;gap:14px;flex-wrap:wrap;\n' +
'  justify-content:center}\n' +
'.sio-px-anc{font-size:var(--taille);color:var(--ancien);text-decoration:line-through;\n' +
'  text-decoration-thickness:2px}\n' +
'.sio-px-new{font-size:var(--prix);font-weight:800;color:var(--encre);line-height:1}\n' +
'.sio-px-bad{display:inline-block;padding:7px 13px;border-radius:999px;\n' +
'  background:var(--badge);color:#fff;font-size:15px;font-weight:800;\n' +
'  letter-spacing:.04em}\n' +
'.sio-px-fin{margin:14px 0 0;font-size:var(--taille2);font-weight:600;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace les montants, le pourcentage et la date -->\n' +
'<div class="sio-px">\n' +
'  <div class="sio-px-row">\n' +
'    <span class="sio-px-anc">997 €</span>\n' +
'    <span class="sio-px-new">697 €</span>\n' +
'    <span class="sio-px-bad">-30 %</span>\n' +
'  </div>\n' +
'  <p class="sio-px-fin">Tarif valable jusqu’au 15 octobre à 23h59</p>\n' +
'</div>'
},
{
id:"codepromo", name:"Code promo à copier", tag:"JS",
desc:"Le code en gros, un bouton qui le copie. Une friction en moins entre l’envie et la commande.",
code:
'<!-- Code promo à copier -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-cp{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F6F4FF;    /* ICI : le fond de la carte */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du code */\n' +
'  --gris:#6B6D74;    /* ICI : la couleur des explications */\n' +
'  --code:26px;       /* ICI : la taille du code */\n' +
'  --taille:16px;     /* ICI : la taille des explications */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:520px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond est le fond de la carte, --encre la couleur du code.\n' +
'     Le bouton reprend --c1 et --c2d.\n' +
'\n' +
'     LA POLICE\n' +
'     Le code s’affiche dans une police à chasse fixe, celle des\n' +
'     éditeurs de texte : les caractères qui se ressemblent, le zéro\n' +
'     et le O, le 1 et le I, s’y distinguent nettement. Ne la change pas.\n' +
'     --f ne s’applique qu’au reste du bloc.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --code : la taille du code. --taille : les explications.\n' +
'     --arrondi : l’arrondi de la carte.\n' +
'\n' +
'     LE CODE\n' +
'     Il est écrit deux fois, plus bas : dans data-code et dans le\n' +
'     texte visible. Change les deux à l’identique.\n' +
'     Choisis un code court, sans caractère ambigu, en majuscules.\n' +
'     Et vérifie qu’il est bien créé dans Système.io avant de publier :\n' +
'     un code annoncé qui ne fonctionne pas coûte la vente.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bouton ne copie rien : certains navigateurs refusent la copie\n' +
'     hors page sécurisée. Le code reste sélectionnable à la main,\n' +
'     c’est le repli prévu.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-cp{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-cp{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-cp, .sio-cp *{box-sizing:border-box}\n' +
'.sio-cp{max-width:var(--large-max);margin:0 auto;padding:26px 22px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);\n' +
'  border:1px dashed var(--c2);text-align:center;font-family:var(--f)}\n' +
'.sio-cp p{margin:0 0 14px;font-size:var(--taille);font-weight:600;color:var(--gris)}\n' +
'.sio-cp-row{display:flex;flex-wrap:wrap;justify-content:center;\n' +
'  align-items:center;gap:12px}\n' +
'.sio-cp-code{font-family:ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace;\n' +
'  font-size:var(--code);font-weight:700;letter-spacing:.14em;color:var(--encre);\n' +
'  padding:10px 16px;border-radius:10px;background:#fff;border:1px solid var(--c2);\n' +
'  user-select:all}\n' +
'.sio-cp button{border:0;cursor:pointer;padding:14px 22px;border-radius:12px;\n' +
'  color:#fff;font-family:var(--f);font-weight:700;font-size:15px;\n' +
'  letter-spacing:.06em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 12px 26px -16px var(--c1);transition:transform .2s ease}\n' +
'.sio-cp button:hover{transform:translateY(-2px)}\n' +
'.sio-cp small{display:block;margin-top:14px;font-size:14px;color:var(--gris)}\n' +
'</style>\n' +
'<!-- ICI : remplace le code, les textes et la date -->\n' +
'<!-- ICI : data-code doit contenir exactement le même code que le texte affiché -->\n' +
'<div class="sio-cp" data-code="RENTREE30">\n' +
'  <p>Avec ce code, 30 % de remise au moment de la commande</p>\n' +
'  <div class="sio-cp-row">\n' +
'    <span class="sio-cp-code">RENTREE30</span>\n' +
'    <button type="button">Copier le code</button>\n' +
'  </div>\n' +
'  <small>Valable jusqu’au 15 octobre à 23h59</small>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var all=document.querySelectorAll(".sio-cp");\n' +
'  for(var i=0;i<all.length;i++){(function(z){\n' +
'    var b=z.querySelector("button");\n' +
'    if(!b)return;\n' +
'    b.addEventListener("click",function(){\n' +
'      var code=z.getAttribute("data-code")||"";\n' +
'      var fini=function(){var t=b.textContent;b.textContent="Code copié !";\n' +
'        setTimeout(function(){b.textContent=t;},1900);};\n' +
'      if(navigator.clipboard){navigator.clipboard.writeText(code).then(fini,fini);}\n' +
'      else{fini();}\n' +
'    });\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"bundle", name:"Offre groupée", tag:"CSS",
desc:"Ce qui est inclus, ligne par ligne, avec la valeur de chaque élément et le total.",
code:
'<!-- Offre groupée -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-bd{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond de la carte */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des intitulés */\n' +
'  --gris:#7B7D84;    /* ICI : la couleur des valeurs */\n' +
'  --taille:17px;     /* ICI : la taille des lignes */\n' +
'  --prix:38px;       /* ICI : la taille du prix final */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond et --bord habillent la carte. Le bandeau du prix reprend\n' +
'     --c1 et --c2d.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     LA TAILLE\n' +
'     --taille : les lignes de contenu. --prix : le prix final.\n' +
'\n' +
'     LES VALEURS\n' +
'     Chaque ligne porte un intitulé et une valeur. Le total et le prix\n' +
'     final sont écrits à la main, plus bas : vérifie que ton addition\n' +
'     tombe juste, c’est la première chose qu’on recalcule.\n' +
'     N’attribue une valeur qu’à ce qui se vend réellement à ce prix.\n' +
'     Un total gonflé pour faire paraître la remise plus grosse se voit,\n' +
'     et abîme la confiance que le reste de ta page a construite.\n' +
'     Si un élément n’a pas de prix public, écris Inclus plutôt qu’un\n' +
'     montant inventé.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-bd{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-bd{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-bd, .sio-bd *{box-sizing:border-box}\n' +
'.sio-bd{max-width:var(--large-max);margin:0 auto;font-family:var(--f);\n' +
'  border:1px solid var(--bord);border-radius:var(--arrondi);\n' +
'  background:var(--fond);overflow:hidden;\n' +
'  box-shadow:0 26px 54px -40px var(--c1)}\n' +
'.sio-bd ul{list-style:none;margin:0;padding:24px 26px}\n' +
'.sio-bd li{display:flex;justify-content:space-between;align-items:baseline;\n' +
'  gap:16px;padding:11px 0;border-bottom:1px solid var(--bord);\n' +
'  font-size:var(--taille);color:var(--encre)}\n' +
'.sio-bd li:last-child{border-bottom:0}\n' +
'.sio-bd li span{flex:none;color:var(--gris);font-weight:600}\n' +
'.sio-bd-tot{display:flex;justify-content:space-between;align-items:baseline;\n' +
'  gap:16px;padding:16px 26px;border-top:2px solid var(--bord);\n' +
'  font-size:var(--taille);font-weight:700;color:var(--encre)}\n' +
'.sio-bd-tot span{color:var(--gris);text-decoration:line-through;\n' +
'  text-decoration-thickness:2px}\n' +
'.sio-bd-fin{padding:22px 26px;text-align:center;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-bd-fin b{display:block;font-size:var(--prix);font-weight:800;line-height:1.1}\n' +
'.sio-bd-fin em{display:block;margin-top:6px;font-style:normal;font-size:15px;opacity:.9}\n' +
'.sio-bd.sio-anim > *{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-bd.sio-anim > *.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-bd.sio-anim > *{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les lignes, les valeurs et le prix -->\n' +
'<div class="sio-bd">\n' +
'  <ul>\n' +
'    <li>Le programme complet, 12 modules <span>697 €</span></li>\n' +
'    <li>Les modèles de pages et de séquences <span>197 €</span></li>\n' +
'    <li>Trois sessions de questions en direct <span>297 €</span></li>\n' +
'    <li>L’accès au groupe privé <span>Inclus</span></li>\n' +
'  </ul>\n' +
'  <div class="sio-bd-tot">Valeur totale <span>1 191 €</span></div>\n' +
'  <div class="sio-bd-fin">\n' +
'    <b>697 €</b>\n' +
'    <em>ou 3 x 249 € — tarif valable jusqu’au 15 octobre</em>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-bd");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > *");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"paliers", name:"Paliers de prix", tag:"CSS",
desc:"Le prix monte à chaque palier, et tu annonces la suite. Une urgence réelle, parce qu’elle est écrite d’avance.",
code:
'<!-- Paliers de prix -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-pa{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des paliers */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des prix */\n' +
'  --gris:#8A8D96;    /* ICI : la couleur des paliers passés ou à venir */\n' +
'  --taille:15px;     /* ICI : la taille des intitulés */\n' +
'  --prix:26px;       /* ICI : la taille des prix */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi des paliers */\n' +
'  --colonne:200px;   /* ICI : largeur mini d’un palier */\n' +
'  --large-max:820px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     Le palier en cours porte la classe actif : il prend --c1 et --c2d.\n' +
'     Les autres restent en --gris sur --fond.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --prix : la taille des prix. --taille : les intitulés.\n' +
'     --arrondi : l’arrondi des paliers.\n' +
'     --colonne : largeur mini d’un palier. Sous cette largeur, ils se\n' +
'     placent les uns sous les autres.\n' +
'\n' +
'     FAIRE AVANCER LES PALIERS\n' +
'     Déplace le mot actif d’un <div> au suivant quand tu changes de\n' +
'     palier. C’est le seul geste à faire.\n' +
'     Ce bloc n’a de sens que si tu tiens parole : le prix annoncé pour\n' +
'     le palier suivant doit réellement s’appliquer à la date dite.\n' +
'     Une augmentation annoncée puis repoussée s’apprend vite, et elle\n' +
'     décrédibilise toutes tes échéances suivantes.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Deux paliers sont en couleur : le mot actif est présent deux fois.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-pa{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-pa{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-pa, .sio-pa *{box-sizing:border-box}\n' +
'.sio-pa{max-width:var(--large-max);margin:0 auto;padding:28px 16px;\n' +
'  font-family:var(--f);display:grid;gap:14px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-pa-p{padding:22px 20px;border-radius:var(--arrondi);text-align:center;\n' +
'  border:1px solid var(--bord);background:var(--fond);color:var(--gris)}\n' +
'.sio-pa-p.actif{border-color:transparent;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 22px 44px -30px var(--c1)}\n' +
'.sio-pa-p em{display:block;font-style:normal;font-size:13px;font-weight:700;\n' +
'  letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;opacity:.85}\n' +
'.sio-pa-p b{display:block;font-size:var(--prix);font-weight:800;\n' +
'  line-height:1.1;color:inherit}\n' +
'.sio-pa-p.actif b{color:#fff}\n' +
'.sio-pa-p span{display:block;margin-top:8px;font-size:var(--taille);font-weight:600}\n' +
'.sio-pa.sio-anim > .sio-pa-p{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-pa.sio-anim > .sio-pa-p.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-pa.sio-anim > .sio-pa-p{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les paliers, les prix et les dates -->\n' +
'<!-- ICI : déplace le mot actif sur le palier en cours -->\n' +
'<div class="sio-pa">\n' +
'  <div class="sio-pa-p actif">\n' +
'    <em>Jusqu’au 30 septembre</em>\n' +
'    <b>497 €</b>\n' +
'    <span>Tarif d’ouverture</span>\n' +
'  </div>\n' +
'  <div class="sio-pa-p">\n' +
'    <em>Du 1er au 10 octobre</em>\n' +
'    <b>597 €</b>\n' +
'    <span>Deuxième palier</span>\n' +
'  </div>\n' +
'  <div class="sio-pa-p">\n' +
'    <em>Du 11 au 15 octobre</em>\n' +
'    <b>697 €</b>\n' +
'    <span>Dernier palier</span>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-pa");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > .sio-pa-p");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"finpromo", name:"Bandeau de fin de promo", tag:"JS",
desc:"Le message change à l’approche de la date, et à la clôture il annonce la fermeture au lieu de disparaître.",
code:
'<!-- Bandeau de fin de promo -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-fn{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --clos:#4A4A55;    /* ICI : la couleur du bandeau une fois la promo terminée */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --hauteur:14px;    /* ICI : l’épaisseur du bandeau */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi du bouton */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     CE QUE FAIT CE BLOC\n' +
'     Il affiche un message différent selon le temps restant :\n' +
'     loin de la date, le message normal ; dans les derniers jours,\n' +
'     le message d’urgence ; le dernier jour, le message du jour J ;\n' +
'     après la date, le message de clôture.\n' +
'     Il ne disparaît jamais tout seul : une fois la promotion finie,\n' +
'     il propose ta liste d’attente. C’est souvent la meilleure vente\n' +
'     de la période suivante.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 et --c2d pendant la promotion, --clos après.\n' +
'     Le passage au gris est volontaire : il dit que c’est terminé\n' +
'     sans avoir à insister.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     LA TAILLE\n' +
'     --taille : le texte. --hauteur : l’épaisseur du bandeau.\n' +
'\n' +
'     CE QUE TU DOIS RENSEIGNER\n' +
'     data-fin : ta date de fin, année-mois-jour puis heure.\n' +
'     data-seuil : à partir de combien de jours restants le message\n' +
'     d’urgence s’affiche. 3 est un bon réglage.\n' +
'     Les quatre messages et les deux liens sont dans les attributs\n' +
'     data-, plus bas. Écris-les tous les quatre : un message vide\n' +
'     laisse le bandeau muet.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bandeau reste sur le message normal : data-fin est mal écrit.\n' +
'     Respecte le format avec le T, sans espace.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-fn, .sio-fn *{box-sizing:border-box}\n' +
'.sio-fn{display:flex;align-items:center;justify-content:center;gap:10px 20px;\n' +
'  flex-wrap:wrap;padding:var(--hauteur) 18px;text-align:center;color:var(--txt);\n' +
'  font-family:var(--f);font-weight:600;font-size:var(--taille);line-height:1.35;\n' +
'  background:linear-gradient(105deg,var(--c1),var(--c2d),var(--c1));\n' +
'  background-size:220% 100%;animation:sioFnShift 9s ease-in-out infinite}\n' +
'.sio-fn.clos{background:var(--clos);animation:none}\n' +
'.sio-fn a{background:#fff;color:#1A1A22;text-decoration:none;\n' +
'  padding:9px 18px;border-radius:var(--arrondi);\n' +
'  font-weight:800;font-size:calc(var(--taille) - 1px);\n' +
'  letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}\n' +
'@keyframes sioFnShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
'</style>\n' +
'<!-- ICI : remplace les quatre messages, les deux liens et la date -->\n' +
'<div class="sio-fn"\n' +
'  data-fin="2026-10-15T23:59:00"\n' +
'  data-seuil="3"\n' +
'  data-normal="Tarif de lancement jusqu’au 15 octobre"\n' +
'  data-urgent="Plus que quelques jours pour profiter du tarif de lancement"\n' +
'  data-jourj="Dernier jour au tarif de lancement"\n' +
'  data-clos="Les inscriptions sont closes. Prochaine session en janvier."\n' +
'  data-lien="#"\n' +
'  data-lien-texte="Je m’inscris"\n' +
'  data-lien-clos="#"\n' +
'  data-lien-clos-texte="Rejoindre la liste d’attente">\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  var all=document.querySelectorAll(".sio-fn");\n' +
'  for(var i=0;i<all.length;i++){(function(b){\n' +
'    var fin=new Date(b.getAttribute("data-fin")).getTime();\n' +
'    var seuil=+(b.getAttribute("data-seuil")||3);\n' +
'    function att(n){return b.getAttribute(n)||"";}\n' +
'    function rendu(){\n' +
'      var reste=fin-Date.now();\n' +
'      var jours=Math.ceil(reste/86400000);\n' +
'      var msg,lien,texte,clos=false;\n' +
'      if(isNaN(reste)){msg=att("data-normal");lien=att("data-lien");texte=att("data-lien-texte");}\n' +
'      else if(reste<=0){clos=true;msg=att("data-clos");\n' +
'        lien=att("data-lien-clos");texte=att("data-lien-clos-texte");}\n' +
'      else if(jours<=1){msg=att("data-jourj");lien=att("data-lien");texte=att("data-lien-texte");}\n' +
'      else if(jours<=seuil){msg=att("data-urgent");lien=att("data-lien");texte=att("data-lien-texte");}\n' +
'      else {msg=att("data-normal");lien=att("data-lien");texte=att("data-lien-texte");}\n' +
'      if(clos){b.className="sio-fn clos";}else{b.className="sio-fn";}\n' +
'      var h="<span>"+msg+"<\/span>";\n' +
'      if(lien&&texte){h+=" <a href=\\""+lien+"\\">"+texte+"<\/a>";}\n' +
'      b.innerHTML=h;\n' +
'    }\n' +
'    rendu();\n' +
'    setInterval(rendu,60000);\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"ruban", name:"Ruban offre spéciale", tag:"CSS",
desc:"Deux lignes qui défilent en sens inverse, en grandes capitales. Le bloc le plus voyant de la bibliothèque.",
code:
'<!-- Ruban offre spéciale -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-op{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:30px;     /* ICI : la taille des capitales */\n' +
'  --espace:.14em;    /* ICI : l’espacement entre les lettres */\n' +
'  --hauteur:16px;    /* ICI : l’épaisseur de chaque ligne */\n' +
'  --vitesse:22s;     /* ICI : la durée d’un tour. Plus grand = plus lent. */\n' +
'  --incline:-2deg;   /* ICI : l’inclinaison du ruban. 0deg = bien droit. */\n' +
'  --pleine:1;        /* ICI : 1 = pleine largeur de l\u2019écran, 0 = largeur de ta section */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES COULEURS\n' +
'     La première ligne prend le dégradé --c1 vers --c2d, la seconde\n' +
'     est en --c1 plein. --txt est la couleur des lettres.\n' +
'     Pour un rendu plus sage, mets la même couleur partout.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'     Les capitales serrées se lisent mal : garde --espace autour de\n' +
'     .12em, c’est ce qui rend le ruban lisible en mouvement.\n' +
'\n' +
'     LA TAILLE ET LA FORME\n' +
'     --taille : la taille des capitales. Sur mobile elle se réduit\n' +
'     toute seule, tu n’as qu’une valeur à changer.\n' +
'     --hauteur : l’épaisseur de chaque ligne.\n' +
'     --incline : l’inclinaison. -2deg donne l’effet ruban collé de\n' +
'     travers. Mets 0deg pour un bandeau bien horizontal.\n' +
'     --vitesse : la durée d’un tour. En dessous de 12s, le défilement\n' +
'     devient difficile à lire et fatigant.\n' +
'\n' +
'     LES TEXTES\n' +
'     Chaque ligne est écrite deux fois, plus bas. C’est normal : la\n' +
'     seconde copie prend le relais pour que la boucle soit continue.\n' +
'     Modifie les deux à l’identique, sinon on voit la couture.\n' +
'     Pour n’avoir qu’une seule ligne, supprime le second bloc\n' +
'     sio-op-ligne en entier.\n' +
'     Ce ruban ne dit pas ce qu’est l’offre : pose-le juste au-dessus\n' +
'     ou en dessous du bloc qui l’explique, jamais tout seul.\n' +
'\n' +
'     LA PLEINE LARGEUR\n' +
'     --pleine:1; fait prendre au bandeau toute la largeur de l’écran,\n' +
'     même si ta section Système.io est plus étroite. Mets 0 pour qu’il\n' +
'     reste sagement dans la largeur de ta section.\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le ruban saute à chaque tour : les deux copies d’une ligne ne\n' +
'     sont pas identiques. Recopie-les mot pour mot.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-op{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-op{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-op, .sio-op *{box-sizing:border-box}\n' +
'.sio-op{overflow:hidden;padding:18px 0;font-family:var(--f)}\n' +
'.sio-op-ligne{overflow:hidden;padding:var(--hauteur) 0;color:var(--txt);\n' +
'  transform:rotate(var(--incline));width:104%;margin-left:-2%;\n' +
'  background:linear-gradient(100deg,var(--c1),var(--g2d))}\n' +
'.sio-op-ligne + .sio-op-ligne{margin-top:10px;\n' +
'  transform:rotate(calc(var(--incline) * -1));background:var(--c1)}\n' +
'.sio-op-track{display:flex;width:max-content;\n' +
'  animation:sioOpRun var(--vitesse) linear infinite}\n' +
'.sio-op-ligne + .sio-op-ligne .sio-op-track{animation-direction:reverse}\n' +
'.sio-op:hover .sio-op-track{animation-play-state:paused}\n' +
'.sio-op-track div{display:flex;align-items:center;gap:30px;padding-right:30px;\n' +
'  font-size:var(--taille);font-weight:800;letter-spacing:var(--espace);\n' +
'  text-transform:uppercase;white-space:nowrap;line-height:1.1}\n' +
'.sio-op-track em{font-style:normal;opacity:.55;font-size:.7em}\n' +
'@keyframes sioOpRun{to{transform:translateX(-50%)}}\n' +
'@media (max-width:600px){\n' +
'  .sio-op-track div{font-size:calc(var(--taille) * .62);gap:20px;padding-right:20px}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-op-track{animation:none}}\n' +
'.sio-op{width:calc(100% + (var(--ecran,100vw) - 100%) * var(--pleine));\n' +
'  margin-left:calc((100% - var(--ecran,100vw)) / 2 * var(--pleine));\n' +
'  max-width:var(--ecran,100vw)}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace les textes ci-dessous, à l’identique dans les deux copies de chaque ligne -->\n' +
'<div class="sio-op">\n' +
'  <div class="sio-op-ligne">\n' +
'    <div class="sio-op-track">\n' +
'      <div>Offre spéciale <em>&#9679;</em> -30 % <em>&#9679;</em> Jusqu’au 15 octobre <em>&#9679;</em> Offre spéciale <em>&#9679;</em> -30 % <em>&#9679;</em> Jusqu’au 15 octobre <em>&#9679;</em></div>\n' +
'      <div aria-hidden="true">Offre spéciale <em>&#9679;</em> -30 % <em>&#9679;</em> Jusqu’au 15 octobre <em>&#9679;</em> Offre spéciale <em>&#9679;</em> -30 % <em>&#9679;</em> Jusqu’au 15 octobre <em>&#9679;</em></div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="sio-op-ligne">\n' +
'    <div class="sio-op-track">\n' +
'      <div>Tarif de lancement <em>&#9679;</em> Places limitées à 20 <em>&#9679;</em> Paiement en 3 fois <em>&#9679;</em> Tarif de lancement <em>&#9679;</em> Places limitées à 20 <em>&#9679;</em> Paiement en 3 fois <em>&#9679;</em></div>\n' +
'      <div aria-hidden="true">Tarif de lancement <em>&#9679;</em> Places limitées à 20 <em>&#9679;</em> Paiement en 3 fois <em>&#9679;</em> Tarif de lancement <em>&#9679;</em> Places limitées à 20 <em>&#9679;</em> Paiement en 3 fois <em>&#9679;</em></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  /* largeur réellement disponible : l’écran, ou le cadre qui contient le bloc */\n' +
'  function dispo(el){\n' +
'    var p=el.parentNode;\n' +
'    while(p && p.nodeType===1 && p!==document.body && p!==document.documentElement){\n' +
'      var o=getComputedStyle(p);\n' +
'      if(o.overflowX!=="visible" && p.clientWidth) return p.clientWidth;\n' +
'      p=p.parentNode;\n' +
'    }\n' +
'    return document.documentElement.clientWidth;\n' +
'  }\n' +
'  function cale(){\n' +
'    var els=document.querySelectorAll(".sio-op");\n' +
'    for(var i=0;i<els.length;i++) els[i].style.setProperty("--ecran",dispo(els[i])+"px");\n' +
'  }\n' +
'  cale();\n' +
'  window.addEventListener("resize",cale);\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"rubansimple", name:"Ruban simple", tag:"CSS",
desc:"Une seule ligne, bien droite, qui défile. Le même effet en beaucoup plus sobre.",
code:
'<!-- Ruban simple -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-os{\n' +
'  --c1:#7D7EE1;      /* ICI : la couleur du ruban */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:20px;     /* ICI : la taille du texte */\n' +
'  --espace:.12em;    /* ICI : l’espacement entre les lettres */\n' +
'  --hauteur:14px;    /* ICI : l’épaisseur du ruban */\n' +
'  --vitesse:26s;     /* ICI : la durée d’un tour. Plus grand = plus lent. */\n' +
'  --pleine:1;        /* ICI : 1 = pleine largeur de l\u2019écran, 0 = largeur de ta section */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     Ce bloc est la version sobre du ruban offre spéciale : une seule\n' +
'     ligne, aucune inclinaison, une seule couleur.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 est la couleur du ruban, --txt celle du texte.\n' +
'     Un aplat uni suffit ici : c’est ce qui le rend discret.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'     Garde --espace autour de .12em : des capitales serrées en\n' +
'     mouvement se lisent mal.\n' +
'\n' +
'     LA TAILLE ET LA VITESSE\n' +
'     --taille : la taille du texte. Sur mobile elle se réduit toute\n' +
'     seule, tu n’as qu’une valeur à changer.\n' +
'     --hauteur : l’épaisseur du ruban.\n' +
'     --vitesse : la durée d’un tour. En dessous de 15s, la lecture\n' +
'     devient inconfortable.\n' +
'\n' +
'     LE TEXTE\n' +
'     Il est écrit deux fois, plus bas. C’est normal : la seconde copie\n' +
'     prend le relais pour que la boucle soit continue. Modifie les\n' +
'     deux à l’identique, sinon on voit la couture.\n' +
'     Trois mentions séparées par un point suffisent. Au-delà, le tour\n' +
'     devient trop long et personne n’attend la fin.\n' +
'\n' +
'     LA PLEINE LARGEUR\n' +
'     --pleine:1; fait prendre au bandeau toute la largeur de l’écran,\n' +
'     même si ta section Système.io est plus étroite. Mets 0 pour qu’il\n' +
'     reste sagement dans la largeur de ta section.\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le ruban saute à chaque tour : les deux copies ne sont pas\n' +
'     identiques. Recopie-les mot pour mot.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-os, .sio-os *{box-sizing:border-box}\n' +
'.sio-os{overflow:hidden;padding:var(--hauteur) 0;color:var(--txt);\n' +
'  background:var(--c1);font-family:var(--f)}\n' +
'.sio-os-track{display:flex;width:max-content;\n' +
'  animation:sioOsRun var(--vitesse) linear infinite}\n' +
'.sio-os:hover .sio-os-track{animation-play-state:paused}\n' +
'.sio-os-track div{display:flex;align-items:center;gap:26px;padding-right:26px;\n' +
'  font-size:var(--taille);font-weight:700;letter-spacing:var(--espace);\n' +
'  text-transform:uppercase;white-space:nowrap;line-height:1.1}\n' +
'.sio-os-track em{font-style:normal;opacity:.5;font-size:.72em}\n' +
'@keyframes sioOsRun{to{transform:translateX(-50%)}}\n' +
'@media (max-width:600px){\n' +
'  .sio-os-track div{font-size:calc(var(--taille) * .75);gap:18px;padding-right:18px}}\n' +
'@media (prefers-reduced-motion:reduce){.sio-os-track{animation:none}}\n' +
'.sio-os{width:calc(100% + (var(--ecran,100vw) - 100%) * var(--pleine));\n' +
'  margin-left:calc((100% - var(--ecran,100vw)) / 2 * var(--pleine));\n' +
'  max-width:var(--ecran,100vw)}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace le texte, à l’identique dans les deux lignes -->\n' +
'<div class="sio-os">\n' +
'  <div class="sio-os-track">\n' +
'    <div>Nouvelle session <em>&#9679;</em> Départ le 6 octobre <em>&#9679;</em> Inscriptions ouvertes <em>&#9679;</em> Nouvelle session <em>&#9679;</em> Départ le 6 octobre <em>&#9679;</em> Inscriptions ouvertes <em>&#9679;</em></div>\n' +
'    <div aria-hidden="true">Nouvelle session <em>&#9679;</em> Départ le 6 octobre <em>&#9679;</em> Inscriptions ouvertes <em>&#9679;</em> Nouvelle session <em>&#9679;</em> Départ le 6 octobre <em>&#9679;</em> Inscriptions ouvertes <em>&#9679;</em></div>\n' +
'  </div>\n' +
'</div>'
}
];

var PAIEMENT = [
{
id:"recap", name:"Récapitulatif de commande", tag:"JS",
desc:"Ce qu’elle reçoit, le prix, les modalités. Le liseré du haut respire et les lignes se posent une à une.",
code:
'<!-- Récapitulatif de commande -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-rc{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond:#ffffff;    /* ICI : le fond de la carte */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des intitulés */\n' +
'  --gris:#6B6D74;    /* ICI : la couleur des précisions */\n' +
'  --taille:17px;     /* ICI : la taille des lignes */\n' +
'  --prix:32px;       /* ICI : la taille du prix */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --cascade:90ms;    /* ICI : le décalage entre deux lignes qui apparaissent */\n' +
'  --large-max:520px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     OÙ LE POSER\n' +
'     Juste au-dessus du formulaire de commande, ou dans la colonne\n' +
'     d’à côté. Elle vient de cliquer depuis une page de vente longue :\n' +
'     elle a besoin de revoir ce qu’elle achète sans repartir en arrière.\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Le liseré du haut respire en continu, et les lignes se posent\n' +
'     une à une à l’arrivée sur la carte.\n' +
'     --cascade règle le décalage entre deux lignes. 90ms est un bon\n' +
'     rythme : au-delà de 150ms, on attend.\n' +
'     Si le JavaScript ne se charge pas, tout reste visible : le\n' +
'     mouvement ne conditionne jamais l’affichage.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond et --bord habillent la carte, l’en-tête et le liseré\n' +
'     reprennent --c1 et --c2d.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Le nom de l’offre, les lignes de contenu, le prix et les\n' +
'     modalités, plus bas.\n' +
'     Le prix affiché ici doit être exactement celui du formulaire.\n' +
'     Un écart, même d’un euro, et la commande s’arrête là.\n' +
'     Précise si le montant est toutes taxes comprises, et ce que\n' +
'     donne le paiement en plusieurs fois.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-rc, .sio-rc *{box-sizing:border-box}\n' +
'.sio-rc{position:relative;max-width:var(--large-max);margin:0 auto;\n' +
'  font-family:var(--f);border:1px solid var(--bord);\n' +
'  border-radius:var(--arrondi);background:var(--fond);overflow:hidden;\n' +
'  box-shadow:0 24px 50px -40px var(--c1)}\n' +
'.sio-rc::before{content:"";position:absolute;left:0;right:0;top:0;height:4px;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--c2),var(--c1));\n' +
'  background-size:200% 100%;animation:sioRcShift 5s ease-in-out infinite}\n' +
'.sio-rc-tete{padding:16px 22px;color:#fff;font-weight:700;font-size:15px;\n' +
'  letter-spacing:.1em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
'.sio-rc-corps{padding:22px}\n' +
'.sio-rc-corps h3{margin:0 0 14px;font-size:20px;color:var(--encre)}\n' +
'.sio-rc-corps ul{list-style:none;margin:0;padding:0}\n' +
'.sio-rc-corps li{position:relative;padding:0 0 10px 26px;\n' +
'  font-size:var(--taille);line-height:1.5;color:var(--gris)}\n' +
'.sio-rc-corps li::before{content:"";position:absolute;left:4px;top:7px;\n' +
'  width:9px;height:5px;border-left:2.4px solid var(--c1);\n' +
'  border-bottom:2.4px solid var(--c1);transform:rotate(-45deg)}\n' +
'.sio-rc-prix{display:flex;justify-content:space-between;align-items:baseline;\n' +
'  gap:14px;margin-top:8px;padding:18px 22px;border-top:1px solid var(--bord);\n' +
'  font-size:var(--taille);font-weight:700;color:var(--encre)}\n' +
'.sio-rc-prix b{font-size:var(--prix);font-weight:800;color:var(--c1);line-height:1}\n' +
'.sio-rc-mod{margin:0;padding:0 22px 20px;font-size:15px;color:var(--gris)}\n' +
'.sio-rc.anim .pose{opacity:0;transform:translateY(10px);\n' +
'  transition:opacity .45s ease,transform .45s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-rc.anim .pose.vu{opacity:1;transform:none}\n' +
'@keyframes sioRcShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-rc::before{animation:none}\n' +
'  .sio-rc.anim .pose{opacity:1;transform:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le nom de l’offre, les lignes, le prix et les modalités -->\n' +
'<div class="sio-rc">\n' +
'  <div class="sio-rc-tete">Ta commande</div>\n' +
'  <div class="sio-rc-corps">\n' +
'    <h3 class="pose">Le Challenge System</h3>\n' +
'    <ul>\n' +
'      <li class="pose">Le programme complet, 12 modules</li>\n' +
'      <li class="pose">Les modèles de pages et de séquences</li>\n' +
'      <li class="pose">L’accès au groupe privé</li>\n' +
'      <li class="pose">Accès à vie, mises à jour comprises</li>\n' +
'    </ul>\n' +
'  </div>\n' +
'  <div class="sio-rc-prix pose">Total <b>697 €</b></div>\n' +
'  <p class="sio-rc-mod pose">Montant TTC. Paiement en 3 fois disponible : 3 x 249 €, sans frais.</p>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var z=document.querySelectorAll(".sio-rc");\n' +
'  for(var i=0;i<z.length;i++){(function(c){\n' +
'    c.classList.add("anim");\n' +
'    var it=c.querySelectorAll(".pose");\n' +
'    var pas=parseInt(getComputedStyle(c).getPropertyValue("--cascade"),10)||90;\n' +
'    var o=new IntersectionObserver(function(e){\n' +
'      for(var k=0;k<e.length;k++){\n' +
'        if(!e[k].isIntersecting)continue;\n' +
'        var el=e[k].target,n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(x){return function(){x.classList.add("vu");};}(el),n*pas);\n' +
'        o.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<it.length;k++){it[k].setAttribute("data-i",k);o.observe(it[k]);}\n' +
'  })(z[i]);}\n' +
'})();\n' +
'<\/script>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  /* largeur réellement disponible : l’écran, ou le cadre qui contient le bloc */\n' +
'  function dispo(el){\n' +
'    var p=el.parentNode;\n' +
'    while(p && p.nodeType===1 && p!==document.body && p!==document.documentElement){\n' +
'      var o=getComputedStyle(p);\n' +
'      if(o.overflowX!=="visible" && p.clientWidth) return p.clientWidth;\n' +
'      p=p.parentNode;\n' +
'    }\n' +
'    return document.documentElement.clientWidth;\n' +
'  }\n' +
'  function cale(){\n' +
'    var els=document.querySelectorAll(".sio-os");\n' +
'    for(var i=0;i<els.length;i++) els[i].style.setProperty("--ecran",dispo(els[i])+"px");\n' +
'  }\n' +
'  cale();\n' +
'  window.addEventListener("resize",cale);\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"etapes", name:"Fil des étapes", tag:"CSS",
desc:"Trois pastilles, la deuxième active et pulsée doucement. Le trait déjà parcouru se remplit à l’arrivée.",
code:
'<!-- Fil des étapes -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-et{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fait:#57C39B;    /* ICI : la couleur des étapes déjà franchies */\n' +
'  --avenir:#D8D5E2;  /* ICI : la couleur des étapes à venir */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur de l’étape en cours */\n' +
'  --gris:#8A8D96;    /* ICI : la couleur des autres intitulés */\n' +
'  --taille:15px;     /* ICI : la taille des intitulés */\n' +
'  --rond:36px;       /* ICI : la taille des pastilles */\n' +
'  --pulse:2.6s;      /* ICI : la respiration de l’étape en cours */\n' +
'  --large-max:640px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LES TROIS ÉTATS\n' +
'     Une étape porte la classe fait, active, ou rien du tout.\n' +
'     fait : déjà franchie, pastille verte avec une coche.\n' +
'     active : là où elle se trouve, pastille colorée qui respire.\n' +
'     sans classe : à venir, pastille grise.\n' +
'     Sur une page de paiement, la première est fait, la deuxième\n' +
'     active, la troisième à venir.\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Le trait des étapes franchies se remplit de gauche à droite au\n' +
'     chargement, et la pastille en cours respire.\n' +
'     --pulse règle cette respiration. Garde-la lente, autour de 2.5s :\n' +
'     une pulsation rapide sur une page de paiement met la pression\n' +
'     au lieu de rassurer.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fait pour les étapes franchies, --c1 et --c2d pour l’étape en\n' +
'     cours, --avenir pour la suite.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Trois étapes suffisent, et elles doivent correspondre à ce qui\n' +
'     se passe vraiment. Annoncer trois étapes puis en imposer cinq\n' +
'     est la meilleure façon de faire abandonner en cours de route.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Deux étapes sont colorées : le mot active est présent deux fois.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-et{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-et{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-et, .sio-et *{box-sizing:border-box}\n' +
'.sio-et{max-width:var(--large-max);margin:0 auto;padding:26px 16px;\n' +
'  font-family:var(--f);display:flex;align-items:flex-start;justify-content:center}\n' +
'.sio-et-e{flex:1;min-width:0;position:relative;text-align:center;\n' +
'  font-size:var(--taille);font-weight:600;color:var(--gris)}\n' +
'.sio-et-e::after{content:"";position:absolute;top:calc(var(--rond) / 2 - 1px);\n' +
'  left:calc(50% + var(--rond) / 2 + 6px);right:calc(-50% + var(--rond) / 2 + 6px);\n' +
'  height:2px;background:var(--avenir)}\n' +
'.sio-et-e:last-child::after{display:none}\n' +
'.sio-et-e.fait::after{background:var(--fait);transform-origin:left;\n' +
'  animation:sioEtFill .9s cubic-bezier(.22,1,.36,1) both}\n' +
'.sio-et-e i{display:flex;align-items:center;justify-content:center;\n' +
'  width:var(--rond);height:var(--rond);margin:0 auto 10px;border-radius:50%;\n' +
'  font-style:normal;font-weight:800;font-size:calc(var(--taille) - 1px);\n' +
'  color:#fff;background:var(--avenir);\n' +
'  animation:sioEtPop .5s cubic-bezier(.22,1.4,.36,1) both}\n' +
'.sio-et-e.fait i{background:var(--fait)}\n' +
'.sio-et-e.active i{background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  animation:sioEtPop .5s cubic-bezier(.22,1.4,.36,1) both,\n' +
'            sioEtPulse var(--pulse) ease-in-out .6s infinite}\n' +
'.sio-et-e:nth-child(2) i{animation-delay:.12s}\n' +
'.sio-et-e:nth-child(3) i{animation-delay:.24s}\n' +
'.sio-et-e.active{color:var(--encre);font-weight:700}\n' +
'@keyframes sioEtFill{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n' +
'@keyframes sioEtPop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}\n' +
'@keyframes sioEtPulse{\n' +
'  0%,100%{box-shadow:0 0 0 0 rgba(125,126,225,.32)}\n' +
'  60%{box-shadow:0 0 0 10px rgba(125,126,225,0)}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-et-e i,.sio-et-e.fait::after{animation:none}\n' +
'  .sio-et-e.active i{box-shadow:0 0 0 5px rgba(125,126,225,.16)}}\n' +
'</style>\n' +
'<!-- ICI : remplace les intitulés. Déplace le mot active sur l’étape en cours. -->\n' +
'<div class="sio-et">\n' +
'  <div class="sio-et-e fait"><i>&#10003;</i>Tes informations</div>\n' +
'  <div class="sio-et-e active"><i>2</i>Paiement</div>\n' +
'  <div class="sio-et-e"><i>3</i>Accès immédiat</div>\n' +
'</div>'
},
{
id:"garantie", name:"Encart garantie", tag:"CSS",
desc:"Le bouclier se dessine à l’arrivée, puis l’encart respire doucement. La durée, la procédure, le délai.",
code:
'<!-- Encart garantie -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-gt{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#F6F4FF;    /* ICI : le fond de l’encart */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --titre:19px;      /* ICI : la taille du titre */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de l’encart */\n' +
'  --trace:1.4s;      /* ICI : la durée du tracé du bouclier */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Le contour du bouclier se dessine, puis la coche apparaît.\n' +
'     Le halo autour de la pastille respire ensuite en continu.\n' +
'     --trace règle la durée du tracé. Plus long que 2s, on décroche.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond est le fond de l’encart, la pastille reprend --c1.\n' +
'     Garde un fond doux : cet encart rassure, il ne doit pas crier.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Trois choses, et dans cet ordre : combien de jours, comment la\n' +
'     demander, sous quel délai tu rembourses.\n' +
'     Écris-la telle que tu l’appliques. Une garantie vague inquiète\n' +
'     plus qu’elle ne rassure, et une garantie que tu n’honores pas\n' +
'     te coûtera bien plus que les remboursements évités.\n' +
'     Si ta garantie a des limites, elles se disent ici, pas dans tes\n' +
'     conditions générales.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bouclier reste invisible : le tracé ne fonctionne pas sur\n' +
'     les très anciens navigateurs. Le texte, lui, reste lisible.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-gt{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-gt{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-gt, .sio-gt *{box-sizing:border-box}\n' +
'.sio-gt{max-width:var(--large-max);margin:0 auto;padding:24px 22px;\n' +
'  display:flex;gap:18px;align-items:flex-start;\n' +
'  border-radius:var(--arrondi);background:var(--fond);\n' +
'  border:1px solid var(--c2);font-family:var(--f)}\n' +
'.sio-gt i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:52px;height:52px;border-radius:50%;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  animation:sioGtHalo 3.4s ease-in-out 1.6s infinite}\n' +
'.sio-gt svg{width:24px;height:24px;stroke:#fff;fill:none;stroke-width:1.9;\n' +
'  stroke-linecap:round;stroke-linejoin:round}\n' +
'.sio-gt svg path{stroke-dasharray:120;stroke-dashoffset:120;\n' +
'  animation:sioGtDraw var(--trace) ease forwards}\n' +
'.sio-gt svg path:last-child{animation-delay:calc(var(--trace) * .55)}\n' +
'.sio-gt h3{margin:0 0 7px;font-size:var(--titre);color:var(--encre)}\n' +
'.sio-gt p{margin:0;font-size:var(--taille);line-height:1.6;color:var(--gris)}\n' +
'@keyframes sioGtDraw{to{stroke-dashoffset:0}}\n' +
'@keyframes sioGtHalo{\n' +
'  0%,100%{box-shadow:0 0 0 0 rgba(125,126,225,.28)}\n' +
'  60%{box-shadow:0 0 0 12px rgba(125,126,225,0)}}\n' +
'@media (max-width:480px){.sio-gt{flex-direction:column;gap:14px}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-gt i{animation:none}\n' +
'  .sio-gt svg path{stroke-dashoffset:0;animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre et le texte de ta garantie -->\n' +
'<div class="sio-gt">\n' +
'  <i><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg></i>\n' +
'  <div>\n' +
'    <h3>Garantie 14 jours</h3>\n' +
'    <p>Si le programme ne te convient pas, écris-moi dans les 14 jours à l’adresse indiquée dans ton e-mail de bienvenue. Je te rembourse sous 72 heures, sans justification à fournir.</p>\n' +
'  </div>\n' +
'</div>'
},
{
id:"reassurance", name:"Bande de réassurance", tag:"JS",
desc:"Quatre mentions qui se posent l’une après l’autre, sur une ligne discrète, sous le bouton de paiement.",
code:
'<!-- Bande de réassurance -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-bz{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale, celle des pictogrammes */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --taille:15px;     /* ICI : la taille du texte */\n' +
'  --picto:18px;      /* ICI : la taille des pictogrammes */\n' +
'  --cascade:110ms;   /* ICI : le décalage entre deux mentions */\n' +
'  --large-max:820px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Les mentions se posent de gauche à droite à l’arrivée sur la\n' +
'     bande, puis plus rien ne bouge : c’est une confirmation, pas\n' +
'     une animation permanente.\n' +
'     --cascade règle le décalage entre deux mentions.\n' +
'     Si le JavaScript ne se charge pas, tout reste visible.\n' +
'\n' +
'     LES COULEURS\n' +
'     --c1 colore les pictogrammes, --gris le texte.\n' +
'     Cette bande doit rester discrète : elle confirme, elle ne vend pas.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Quatre mentions maximum, courtes, et toutes vraies.\n' +
'     Nomme ton prestataire de paiement plutôt que d’écrire un vague\n' +
'     paiement sécurisé : un nom que la visiteuse reconnaît rassure\n' +
'     infiniment plus qu’un cadenas dessiné.\n' +
'     N’invente aucun label ni certification. Un badge de sécurité\n' +
'     fabriqué n’atteste de rien, et se repère.\n' +
'     Pour retirer une mention, supprime sa ligne <li>.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Les mentions se chevauchent : réduis --taille, ou passe à trois.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-bz, .sio-bz *{box-sizing:border-box}\n' +
'.sio-bz{max-width:var(--large-max);margin:0 auto;padding:18px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-bz ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;\n' +
'  justify-content:center;gap:12px 26px}\n' +
'.sio-bz li{display:flex;align-items:center;gap:8px;\n' +
'  font-size:var(--taille);font-weight:600;color:var(--gris)}\n' +
'.sio-bz svg{flex:none;width:var(--picto);height:var(--picto);\n' +
'  stroke:var(--c1);fill:none;stroke-width:1.9;stroke-linecap:round;\n' +
'  stroke-linejoin:round}\n' +
'.sio-bz.anim li{opacity:0;transform:translateY(8px);\n' +
'  transition:opacity .4s ease,transform .4s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-bz.anim li.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-bz.anim li{opacity:1;transform:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les quatre mentions ci-dessous -->\n' +
'<div class="sio-bz">\n' +
'  <ul>\n' +
'    <li><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>Paiement par Stripe</li>\n' +
'    <li><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/></svg>Garantie 14 jours</li>\n' +
'    <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Accès immédiat</li>\n' +
'    <li><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>Une question ? Écris-moi</li>\n' +
'  </ul>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var z=document.querySelectorAll(".sio-bz");\n' +
'  for(var i=0;i<z.length;i++){(function(c){\n' +
'    c.classList.add("anim");\n' +
'    var it=c.querySelectorAll("li");\n' +
'    var pas=parseInt(getComputedStyle(c).getPropertyValue("--cascade"),10)||110;\n' +
'    var o=new IntersectionObserver(function(e){\n' +
'      for(var k=0;k<e.length;k++){\n' +
'        if(!e[k].isIntersecting)continue;\n' +
'        var el=e[k].target,n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(x){return function(){x.classList.add("vu");};}(el),n*pas);\n' +
'        o.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.2});\n' +
'    for(var k=0;k<it.length;k++){it[k].setAttribute("data-i",k);o.observe(it[k]);}\n' +
'  })(z[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"apres", name:"Ce qui se passe après", tag:"JS",
desc:"Les trois étapes se posent l’une après l’autre, reliées par un trait qui se remplit.",
code:
'<!-- Ce qui se passe après -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-su{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des lignes */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des textes */\n' +
'  --titre:17px;      /* ICI : la taille du titre général */\n' +
'  --taille:16px;     /* ICI : la taille des lignes */\n' +
'  --rond:34px;       /* ICI : la taille des numéros */\n' +
'  --arrondi:15px;    /* ICI : l’arrondi des lignes */\n' +
'  --cascade:140ms;   /* ICI : le décalage entre deux étapes */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Les trois étapes se posent l’une après l’autre en glissant\n' +
'     depuis la gauche, et le trait qui les relie se remplit.\n' +
'     --cascade règle le décalage. 140ms donne le rythme d’une\n' +
'     énumération à voix haute.\n' +
'     Si le JavaScript ne se charge pas, tout reste visible.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond et --bord habillent les lignes, les numéros reprennent\n' +
'     --c1 et --c2d.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Trois étapes, dans l’ordre réel : l’e-mail qui arrive, l’accès,\n' +
'     le premier pas à faire.\n' +
'     Donne des délais que tu tiens. Si l’e-mail met dix minutes,\n' +
'     écris dix minutes : une promesse d’immédiateté non tenue\n' +
'     déclenche une demande de remboursement dans l’heure.\n' +
'     Pense à mentionner le dossier indésirables : c’est la première\n' +
'     cause de message au support après un achat.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-su{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-su{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-su, .sio-su *{box-sizing:border-box}\n' +
'.sio-su{max-width:var(--large-max);margin:0 auto;padding:26px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-su > p{margin:0 0 14px;font-size:var(--titre);font-weight:700;\n' +
'  color:var(--encre)}\n' +
'.sio-su ol{list-style:none;margin:0;padding:0;display:grid;gap:10px;\n' +
'  position:relative}\n' +
'.sio-su ol::before{content:"";position:absolute;left:calc(18px + var(--rond) / 2 - 1px);\n' +
'  top:26px;bottom:26px;width:2px;transform-origin:top;\n' +
'  background:linear-gradient(180deg,var(--c1),var(--g2))}\n' +
'.sio-su.anim ol::before{transform:scaleY(0);\n' +
'  transition:transform .9s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-su.anim.vu ol::before{transform:scaleY(1)}\n' +
'.sio-su li{position:relative;display:flex;align-items:flex-start;gap:14px;\n' +
'  padding:16px 18px;border-radius:var(--arrondi);background:var(--fond);\n' +
'  border:1px solid var(--bord)}\n' +
'.sio-su i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:var(--rond);height:var(--rond);border-radius:50%;font-style:normal;\n' +
'  color:#fff;font-weight:800;font-size:15px;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-su b{display:block;font-size:var(--taille);color:var(--encre);margin-bottom:3px}\n' +
'.sio-su span{display:block;font-size:calc(var(--taille) - 1px);\n' +
'  line-height:1.55;color:var(--gris)}\n' +
'.sio-su.anim li{opacity:0;transform:translateX(-14px);\n' +
'  transition:opacity .5s ease,transform .5s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-su.anim li.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-su.anim li{opacity:1;transform:none}\n' +
'  .sio-su.anim ol::before{transform:scaleY(1);transition:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre et les trois étapes ci-dessous -->\n' +
'<div class="sio-su">\n' +
'  <p>Ce qui se passe juste après</p>\n' +
'  <ol>\n' +
'    <li><i>1</i><div><b>Tu reçois un e-mail</b><span>Dans les cinq minutes, avec tes identifiants. Pense à regarder dans tes indésirables.</span></div></li>\n' +
'    <li><i>2</i><div><b>Tu accèdes au programme</b><span>Tout est ouvert dès la connexion, il n’y a rien à attendre.</span></div></li>\n' +
'    <li><i>3</i><div><b>Tu commences par le module 1</b><span>Une heure suffit pour poser les fondations, et tu sais déjà où tu vas.</span></div></li>\n' +
'  </ol>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var z=document.querySelectorAll(".sio-su");\n' +
'  for(var i=0;i<z.length;i++){(function(c){\n' +
'    c.classList.add("anim");\n' +
'    var it=c.querySelectorAll("li");\n' +
'    var pas=parseInt(getComputedStyle(c).getPropertyValue("--cascade"),10)||140;\n' +
'    var o=new IntersectionObserver(function(e){\n' +
'      for(var k=0;k<e.length;k++){\n' +
'        if(!e[k].isIntersecting)continue;\n' +
'        c.classList.add("vu");\n' +
'        var el=e[k].target,n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(x){return function(){x.classList.add("vu");};}(el),n*pas);\n' +
'        o.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.2});\n' +
'    for(var k=0;k<it.length;k++){it[k].setAttribute("data-i",k);o.observe(it[k]);}\n' +
'  })(z[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"faqfin", name:"FAQ de dernière minute", tag:"CSS",
desc:"Trois questions repliées qui se déplient en douceur, à poser sous le formulaire.",
code:
'<!-- FAQ de dernière minute -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-fq{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#ffffff;    /* ICI : le fond des questions */\n' +
'  --bord:#E6E3EE;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des questions */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des réponses */\n' +
'  --taille:17px;     /* ICI : la taille des questions */\n' +
'  --taille2:16px;    /* ICI : la taille des réponses */\n' +
'  --arrondi:13px;    /* ICI : l’arrondi des blocs */\n' +
'  --duree:.32s;      /* ICI : la durée du dépliement */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LA DIFFÉRENCE AVEC LA FAQ CLASSIQUE\n' +
'     Celle-ci va sous le formulaire de paiement, et se limite à trois\n' +
'     questions : celles qui retiennent la main au dernier moment.\n' +
'     Paiement en plusieurs fois, délai d’accès, remboursement.\n' +
'     Toutes sont repliées au départ, contrairement à la FAQ de page\n' +
'     de vente : ici, on ne veut pas détourner l’attention du\n' +
'     formulaire, seulement lever un doute si la visiteuse en a un.\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     La réponse se déplie en douceur au lieu d’apparaître d’un coup,\n' +
'     et la flèche pivote. --duree règle le dépliement.\n' +
'     Sur les navigateurs qui ne gèrent pas cette animation, la\n' +
'     réponse s’affiche instantanément : rien n’est perdu.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond et --bord habillent les questions, --c1 colore la flèche.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Réponds franchement, y compris quand la réponse est non.\n' +
'     Une réponse évasive à ce stade se lit comme un aveu.\n' +
'     Trois questions maximum : au-delà, tu crées les doutes que tu\n' +
'     cherchais à lever.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-fq, .sio-fq *{box-sizing:border-box}\n' +
'.sio-fq{max-width:var(--large-max);margin:0 auto;padding:22px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-fq details{margin-bottom:8px;border:1px solid var(--bord);\n' +
'  border-radius:var(--arrondi);background:var(--fond);overflow:hidden;\n' +
'  transition:border-color .2s ease,box-shadow .2s ease}\n' +
'.sio-fq details[open]{border-color:var(--c1);\n' +
'  box-shadow:0 14px 30px -26px var(--c1)}\n' +
'.sio-fq summary{position:relative;list-style:none;cursor:pointer;\n' +
'  padding:15px 46px 15px 18px;font-weight:700;font-size:var(--taille);\n' +
'  line-height:1.35;color:var(--encre);transition:color .2s ease}\n' +
'.sio-fq summary:hover{color:var(--c1)}\n' +
'.sio-fq summary::-webkit-details-marker{display:none}\n' +
'.sio-fq summary::after{content:"";position:absolute;right:18px;top:50%;\n' +
'  width:9px;height:9px;margin-top:-6px;\n' +
'  border-right:2.4px solid var(--c1);border-bottom:2.4px solid var(--c1);\n' +
'  transform:rotate(45deg);transition:transform .25s ease,margin-top .25s ease}\n' +
'.sio-fq details[open] summary::after{transform:rotate(-135deg);margin-top:-2px}\n' +
'.sio-fq-rep{display:grid;grid-template-rows:0fr;\n' +
'  transition:grid-template-rows var(--duree) cubic-bezier(.22,1,.36,1)}\n' +
'.sio-fq details[open] .sio-fq-rep{grid-template-rows:1fr}\n' +
'.sio-fq-rep > div{overflow:hidden}\n' +
'.sio-fq p{margin:0;padding:0 18px 18px;font-size:var(--taille2);\n' +
'  line-height:1.6;color:var(--gris)}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-fq-rep{transition:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les trois questions et leurs réponses -->\n' +
'<div class="sio-fq">\n' +
'  <details>\n' +
'    <summary>Puis-je payer en plusieurs fois ?</summary>\n' +
'    <div class="sio-fq-rep"><div><p>Oui, en 3 fois sans frais. Choisis cette option dans le formulaire ci-dessus : les prélèvements sont espacés de 30 jours.</p></div></div>\n' +
'  </details>\n' +
'  <details>\n' +
'    <summary>Quand est-ce que j’ai accès ?</summary>\n' +
'    <div class="sio-fq-rep"><div><p>Immédiatement. Tu reçois tes identifiants par e-mail dans les cinq minutes qui suivent le paiement.</p></div></div>\n' +
'  </details>\n' +
'  <details>\n' +
'    <summary>Et si ça ne me convient pas ?</summary>\n' +
'    <div class="sio-fq-rep"><div><p>Tu as 14 jours pour me le dire, sans avoir à te justifier. Je te rembourse sous 72 heures.</p></div></div>\n' +
'  </details>\n' +
'</div>'
}
];


var MERCI = [
{
id:"confirm", name:"Confirmation de commande", tag:"CSS",
desc:"La coche se dessine, le récapitulatif s’affiche, et l’adresse e-mail utilisée apparaît en clair.",
code:
'<!-- Confirmation de commande -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-cf{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --ok:#57C39B;      /* ICI : la couleur de la coche */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --titre:30px;      /* ICI : la taille du titre */\n' +
'  --taille:18px;     /* ICI : la taille du texte */\n' +
'  --rond:84px;       /* ICI : la taille du rond de la coche */\n' +
'  --trace:1s;        /* ICI : la durée du tracé de la coche */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Le rond apparaît, puis la coche se trace à l’intérieur.\n' +
'     --trace règle la durée. Une seconde suffit : c’est un accusé de\n' +
'     réception, pas un feu d’artifice.\n' +
'\n' +
'     LES COULEURS\n' +
'     --ok est la couleur du rond de confirmation. Un vert est le plus\n' +
'     lisible universellement, mais ta couleur de marque fonctionne\n' +
'     aussi si ta charte le demande.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     L’ADRESSE E-MAIL\n' +
'     C’est le point le plus utile de ce bloc : affiche l’adresse à\n' +
'     laquelle tu as envoyé les accès. C’est là qu’une cliente repère\n' +
'     sa faute de frappe, avant d’écrire au support trois jours plus\n' +
'     tard.\n' +
'     Système.io peut insérer l’adresse automatiquement : remplace\n' +
'     ton-email-ici par la variable de personnalisation de ton compte,\n' +
'     dans les réglages de ta page. Si tu n’y arrives pas, écris\n' +
'     simplement une phrase invitant à vérifier sa boîte.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     La coche reste invisible : le tracé ne fonctionne pas sur les\n' +
'     très anciens navigateurs. Le texte, lui, reste lisible.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-cf, .sio-cf *{box-sizing:border-box}\n' +
'.sio-cf{max-width:var(--large-max);margin:0 auto;padding:34px 16px;\n' +
'  text-align:center;font-family:var(--f)}\n' +
'.sio-cf-rond{width:var(--rond);height:var(--rond);margin:0 auto 20px;\n' +
'  border-radius:50%;display:flex;align-items:center;justify-content:center;\n' +
'  background:var(--ok);animation:sioCfPop .55s cubic-bezier(.22,1.4,.36,1) both}\n' +
'.sio-cf-rond svg{width:calc(var(--rond) * .42);height:calc(var(--rond) * .42);\n' +
'  stroke:#fff;fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}\n' +
'.sio-cf-rond svg path{stroke-dasharray:40;stroke-dashoffset:40;\n' +
'  animation:sioCfDraw var(--trace) ease .35s forwards}\n' +
'.sio-cf h2{margin:0 0 12px;font-size:var(--titre);line-height:1.2;\n' +
'  color:var(--encre);font-weight:800}\n' +
'.sio-cf p{margin:0 0 18px;font-size:var(--taille);line-height:1.6;color:var(--gris)}\n' +
'.sio-cf-mail{display:inline-block;padding:12px 20px;border-radius:12px;\n' +
'  background:#F6F4FF;border:1px solid var(--c2);\n' +
'  font-size:var(--taille);font-weight:700;color:var(--c1);word-break:break-all}\n' +
'.sio-cf-mail span{display:block;font-size:14px;font-weight:600;\n' +
'  color:var(--gris);margin-bottom:4px}\n' +
'@keyframes sioCfPop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}\n' +
'@keyframes sioCfDraw{to{stroke-dashoffset:0}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-cf-rond{animation:none}\n' +
'  .sio-cf-rond svg path{stroke-dashoffset:0;animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre, le texte et l’adresse e-mail -->\n' +
'<div class="sio-cf">\n' +
'  <div class="sio-cf-rond"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>\n' +
'  <h2>C’est confirmé, bienvenue</h2>\n' +
'  <p>Ta place est réservée. Tes accès viennent de partir par e-mail.</p>\n' +
'  <div class="sio-cf-mail"><span>Envoyés à</span>ton-email-ici</div>\n' +
'</div>'
},
{
id:"etapeuk", name:"La prochaine étape", tag:"CSS",
desc:"Une seule action, mise en avant. Le réflexe est d’en demander quatre : résultat, aucune n’est faite.",
code:
'<!-- La prochaine étape -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-pu{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --titre:24px;      /* ICI : la taille du titre */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --btn:17px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:20px;    /* ICI : l’arrondi de la carte */\n' +
'  --arrondi2:999px;  /* ICI : l’arrondi du bouton */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LA RÈGLE DE CE BLOC\n' +
'     Une seule action. C’est tout l’intérêt.\n' +
'     Sur une page de remerciement, le réflexe est de demander quatre\n' +
'     choses : rejoindre le groupe, télécharger le guide, suivre le\n' +
'     compte, répondre au questionnaire. Aucune n’est faite.\n' +
'     Choisis celle qui compte le plus pour la suite, et laisse les\n' +
'     autres pour tes e-mails.\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     La carte apparaît en montant, le halo du bouton respire.\n' +
'\n' +
'     LES COULEURS\n' +
'     La carte reprend --c1 et --c2d, le bouton est en blanc sur ce\n' +
'     fond coloré. C’est ce contraste qui en fait le point le plus\n' +
'     visible de la page.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Le lien ne peut pas vivre dans cette rubrique : le CSS gère\n' +
'     l’apparence, pas les adresses. Il se trouve plus bas, dans\n' +
'     la ligne qui commence par <a. Remplace le # par ton adresse.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-pu{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-pu{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-pu, .sio-pu *{box-sizing:border-box}\n' +
'.sio-pu{max-width:var(--large-max);margin:0 auto;padding:30px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-pu-carte{padding:34px 28px;border-radius:var(--arrondi);text-align:center;\n' +
'  color:var(--txt);background:linear-gradient(135deg,var(--c1),var(--g2d));\n' +
'  box-shadow:0 30px 60px -40px var(--c1);\n' +
'  animation:sioPuMonte .6s cubic-bezier(.22,1,.36,1) both}\n' +
'.sio-pu em{display:inline-block;margin-bottom:12px;padding:6px 14px;\n' +
'  border-radius:999px;font-style:normal;font-size:13px;font-weight:700;\n' +
'  letter-spacing:.12em;text-transform:uppercase;background:rgba(255,255,255,.18)}\n' +
'.sio-pu h3{margin:0 0 10px;font-size:var(--titre);line-height:1.25;font-weight:800}\n' +
'.sio-pu p{margin:0 0 24px;font-size:var(--taille);line-height:1.6;opacity:.9}\n' +
'.sio-pu a{display:inline-block;padding:16px 34px;border-radius:var(--arrondi2);\n' +
'  text-decoration:none;color:var(--c1);background:#fff;\n' +
'  font-weight:800;font-size:var(--btn);letter-spacing:.06em;text-transform:uppercase;\n' +
'  animation:sioPuHalo 3.2s ease-in-out 1s infinite;\n' +
'  transition:transform .22s ease}\n' +
'.sio-pu a:hover{transform:translateY(-2px)}\n' +
'@keyframes sioPuMonte{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n' +
'@keyframes sioPuHalo{\n' +
'  0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.45)}\n' +
'  60%{box-shadow:0 0 0 14px rgba(255,255,255,0)}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-pu-carte,.sio-pu a{animation:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-pu">\n' +
'  <div class="sio-pu-carte">\n' +
'    <em>Une seule chose à faire</em>\n' +
'    <h3>Rejoins le groupe des participantes</h3>\n' +
'    <p>C’est là que se passent les directs et les échanges pendant les cinq jours du challenge.</p>\n' +
'    <!-- ICI : ton lien, à la place du # -->\n' +
'    <a href="#">Je rejoins le groupe</a>\n' +
'  </div>\n' +
'</div>'
},
{
id:"agenda", name:"Bouton agenda", tag:"JS",
desc:"Un clic et ta date part dans l’agenda de ta cliente. C’est ce qui fait la différence entre 30 et 60 % de présence.",
code:
'<!-- Bouton agenda -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ag{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --uni:0;          /* ICI : 0 = dégradé, 1 = une seule couleur (la principale) */\n' +
'  --fond:#ffffff;    /* ICI : le fond de la carte */\n' +
'  --bord:#E6E3EE;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur de la date */\n' +
'  --titre:19px;      /* ICI : la taille du titre */\n' +
'  --taille:16px;     /* ICI : la taille de la date */\n' +
'  --btn:15px;        /* ICI : la taille du texte des boutons */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:560px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     CE QUE FAIT CE BLOC\n' +
'     Deux boutons : Google Agenda ouvre un onglet avec l’événement\n' +
'     prérempli, Apple et Outlook téléchargent un fichier que le\n' +
'     visiteur ouvre d’un double clic.\n' +
'     Aucune donnée ne sort de la page : tout est construit sur place.\n' +
'\n' +
'     CE QUE TU DOIS RENSEIGNER\n' +
'     Tout est dans les attributs data-, plus bas :\n' +
'     data-titre : le nom de l’événement tel qu’il apparaîtra.\n' +
'     data-debut et data-fin : année-mois-jour, puis T, puis heure.\n' +
'     Écris-les à l’heure de ton fuseau : la conversion est faite\n' +
'     automatiquement pour chaque visiteur.\n' +
'     data-lieu : une adresse, ou le lien de ta visioconférence.\n' +
'     data-details : ce que la personne lira dans son agenda. Mets-y\n' +
'     le lien de connexion, c’est là qu’elle le cherchera le jour J.\n' +
'\n' +
'     LES COULEURS ET LA FORME\n' +
'     --fond et --bord habillent la carte, les boutons reprennent --c1.\n' +
'     --arrondi : l’arrondi de la carte. --titre et --taille : les textes.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bouton Google ne s’ouvre pas : vérifie le format des dates,\n' +
'     avec le T entre la date et l’heure, sans espace.\n' +
'     Le fichier ne se télécharge pas : certains navigateurs bloquent\n' +
'     les téléchargements dans un aperçu. Teste sur la page publiée.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'.sio-ag{--g2:var(--c2);--g2d:var(--c2d)}\n' +
'@supports (color:color-mix(in srgb,red 50%,blue)){.sio-ag{\n' +
'  --g2:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2));\n' +
'  --g2d:color-mix(in srgb,var(--c1) calc(var(--uni) * 100%),var(--c2d))}}\n' +
'\n' +
'.sio-ag, .sio-ag *{box-sizing:border-box}\n' +
'.sio-ag{max-width:var(--large-max);margin:0 auto;padding:24px 22px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord);\n' +
'  font-family:var(--f);text-align:center;\n' +
'  box-shadow:0 24px 50px -42px var(--c1)}\n' +
'.sio-ag-date{display:flex;align-items:center;justify-content:center;gap:14px;\n' +
'  margin-bottom:16px}\n' +
'.sio-ag-jour{flex:none;width:62px;border-radius:14px;overflow:hidden;\n' +
'  border:1px solid var(--bord)}\n' +
'.sio-ag-jour b{display:block;padding:4px 0;font-size:12px;font-weight:800;\n' +
'  letter-spacing:.1em;text-transform:uppercase;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--g2d))}\n' +
'.sio-ag-jour span{display:block;padding:6px 0 8px;font-size:26px;\n' +
'  font-weight:800;color:var(--encre);line-height:1}\n' +
'.sio-ag-txt{text-align:left}\n' +
'.sio-ag-txt h3{margin:0 0 4px;font-size:var(--titre);color:var(--encre)}\n' +
'.sio-ag-txt p{margin:0;font-size:var(--taille);color:var(--gris)}\n' +
'.sio-ag-row{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}\n' +
'.sio-ag a, .sio-ag button{display:inline-flex;align-items:center;gap:8px;\n' +
'  padding:13px 20px;border-radius:12px;cursor:pointer;border:1px solid var(--bord);\n' +
'  background:#fff;color:var(--c1);text-decoration:none;font-family:var(--f);\n' +
'  font-weight:700;font-size:var(--btn);\n' +
'  transition:border-color .2s ease,transform .2s ease}\n' +
'.sio-ag a:hover, .sio-ag button:hover{border-color:var(--c1);transform:translateY(-2px)}\n' +
'.sio-ag svg{flex:none;width:17px;height:17px;stroke:var(--c1);fill:none;\n' +
'  stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre, la date et les informations de l’événement -->\n' +
'<div class="sio-ag"\n' +
'  data-titre="Challenge 5 jours — Direct d’ouverture"\n' +
'  data-debut="2026-10-06T19:00:00"\n' +
'  data-fin="2026-10-06T20:30:00"\n' +
'  data-lieu="En ligne"\n' +
'  data-details="Le lien de connexion est dans ton e-mail de bienvenue.">\n' +
'  <div class="sio-ag-date">\n' +
'    <div class="sio-ag-jour"><b>Oct</b><span>06</span></div>\n' +
'    <div class="sio-ag-txt">\n' +
'      <h3>Direct d’ouverture</h3>\n' +
'      <p>Mardi 6 octobre, 19h00</p>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="sio-ag-row">\n' +
'    <a data-ag="google" href="#" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>Google Agenda</a>\n' +
'    <button type="button" data-ag="ics"><svg viewBox="0 0 24 24"><path d="M12 4v11M8 11l4 4 4-4"/><path d="M5 19h14"/></svg>Apple, Outlook</button>\n' +
'  </div>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  function z(d){return d.toISOString().replace(/[-:]/g,"").replace(/\\.\\d{3}/,"");}\n' +
'  var all=document.querySelectorAll(".sio-ag");\n' +
'  for(var i=0;i<all.length;i++){(function(c){\n' +
'    function a(n){return c.getAttribute(n)||"";}\n' +
'    var d1=new Date(a("data-debut")),d2=new Date(a("data-fin"));\n' +
'    if(isNaN(d1)||isNaN(d2))return;\n' +
'    var g=c.querySelector("[data-ag=google]");\n' +
'    if(g){g.setAttribute("href","https://calendar.google.com/calendar/render?action=TEMPLATE"+\n' +
'      "&text="+encodeURIComponent(a("data-titre"))+\n' +
'      "&dates="+z(d1)+"/"+z(d2)+\n' +
'      "&details="+encodeURIComponent(a("data-details"))+\n' +
'      "&location="+encodeURIComponent(a("data-lieu")));}\n' +
'    var b=c.querySelector("[data-ag=ics]");\n' +
'    if(b){b.addEventListener("click",function(){\n' +
'      var l=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//agenda//FR","BEGIN:VEVENT",\n' +
'        "UID:"+Date.now()+"@agenda","DTSTAMP:"+z(new Date()),\n' +
'        "DTSTART:"+z(d1),"DTEND:"+z(d2),\n' +
'        "SUMMARY:"+a("data-titre"),"DESCRIPTION:"+a("data-details"),\n' +
'        "LOCATION:"+a("data-lieu"),"END:VEVENT","END:VCALENDAR"];\n' +
'      var blob=new Blob([l.join("\\r\\n")],{type:"text/calendar;charset=utf-8"});\n' +
'      var u=URL.createObjectURL(blob);\n' +
'      var lien=document.createElement("a");\n' +
'      lien.href=u;lien.download="evenement.ics";\n' +
'      document.body.appendChild(lien);lien.click();\n' +
'      document.body.removeChild(lien);\n' +
'      setTimeout(function(){URL.revokeObjectURL(u);},2000);\n' +
'    });}\n' +
'  })(all[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"antispam", name:"Bloc anti-spam", tag:"CSS",
desc:"Trois gestes pour que tes e-mails arrivent. Supprime la moitié des messages au support.",
code:
'<!-- Bloc anti-spam -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-bx{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux */\n' +
'  --fond:#FFF9EC;    /* ICI : le fond de l’encart */\n' +
'  --bord:#F0DFB8;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --titre:18px;      /* ICI : la taille du titre */\n' +
'  --taille:16px;     /* ICI : la taille des lignes */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi de l’encart */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  --cascade:1;      /* ICI : 1 = apparition en douceur, 0 = tout de suite */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     POURQUOI CE BLOC\n' +
'     Un e-mail qui atterrit dans les indésirables, et toute ta\n' +
'     séquence tombe à plat. Ces trois gestes demandés au bon moment,\n' +
'     juste après l’achat, suppriment la moitié des messages au\n' +
'     support et rattrapent ta délivrabilité pour les semaines qui\n' +
'     suivent.\n' +
'\n' +
'     LES COULEURS\n' +
'     Le fond crème le distingue du reste de la page : c’est une\n' +
'     consigne pratique, pas un argument de vente.\n' +
'     Si ce jaune ne va pas avec ta charte, mets un gris très clair\n' +
'     plutôt que ta couleur principale : il doit se lire comme un\n' +
'     encadré utile, pas comme un bloc de plus.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Remplace ton-adresse par l’adresse d’expédition réelle de tes\n' +
'     e-mails — celle qui apparaît dans Système.io, pas ton adresse\n' +
'     de contact si elles diffèrent.\n' +
'     Garde trois gestes maximum, et formule-les à l’impératif.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-bx, .sio-bx *{box-sizing:border-box}\n' +
'.sio-bx{max-width:var(--large-max);margin:0 auto;padding:22px 24px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord);\n' +
'  font-family:var(--f)}\n' +
'.sio-bx h3{margin:0 0 12px;font-size:var(--titre);color:var(--encre);\n' +
'  display:flex;align-items:center;gap:9px}\n' +
'.sio-bx h3 svg{flex:none;width:20px;height:20px;stroke:var(--c1);fill:none;\n' +
'  stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\n' +
'.sio-bx ol{margin:0;padding:0 0 0 20px;display:grid;gap:9px}\n' +
'.sio-bx li{font-size:var(--taille);line-height:1.55;color:var(--gris)}\n' +
'.sio-bx b{color:var(--encre)}\n' +
'.sio-bx code{font-family:ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace;\n' +
'  font-size:calc(var(--taille) - 1px);background:#fff;padding:2px 7px;\n' +
'  border-radius:6px;border:1px solid var(--bord);word-break:break-all}\n' +
'.sio-bx.sio-anim > h3, .sio-bx.sio-anim > ol > li{opacity:0;transform:translateY(16px);\n' +
'  transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-bx.sio-anim > h3.vu, .sio-bx.sio-anim > ol > li.vu{opacity:1;transform:none}\n' +
'@media (prefers-reduced-motion:reduce){.sio-bx.sio-anim > h3, .sio-bx.sio-anim > ol > li{opacity:1;transform:none}}\n' +
'\n' +
'</style>\n' +
'<!-- ICI : remplace ton-adresse par ton adresse d’expédition réelle -->\n' +
'<div class="sio-bx">\n' +
'  <h3><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>Pour être sûre de tout recevoir</h3>\n' +
'  <ol>\n' +
'    <li><b>Ajoute mon adresse à tes contacts</b> : <code>ton-adresse@exemple.fr</code></li>\n' +
'    <li><b>Regarde dans tes indésirables</b>, et dans l’onglet Promotions si tu es sur Gmail.</li>\n' +
'    <li><b>Réponds à mon premier e-mail</b>, même d’un mot : c’est le signal le plus fort pour ta messagerie.</li>\n' +
'  </ol>\n' +
'</div>\n' +
'\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var zones=document.querySelectorAll(".sio-bx");\n' +
'  for(var i=0;i<zones.length;i++){(function(z){\n' +
'    if(getComputedStyle(z).getPropertyValue("--cascade").trim()==="0")return;\n' +
'    z.classList.add("sio-anim");\n' +
'    var items=z.querySelectorAll(":scope > h3, :scope > ol > li");\n' +
'    var obs=new IntersectionObserver(function(entrees){\n' +
'      for(var k=0;k<entrees.length;k++){\n' +
'        if(!entrees[k].isIntersecting)continue;\n' +
'        var el=entrees[k].target, n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(e){return function(){e.classList.add("vu");};}(el),n*110);\n' +
'        obs.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.15});\n' +
'    for(var k=0;k<items.length;k++){ items[k].setAttribute("data-i",k); obs.observe(items[k]); }\n' +
'  })(zones[i]);}\n' +
'})();\n' +
'<\/script>\n'
},
{
id:"calendrier", name:"Calendrier des prochains jours", tag:"JS",
desc:"Demain, dans trois jours, la semaine prochaine. On reste engagé quand on sait ce qui vient.",
code:
'<!-- Calendrier des prochains jours -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-cj{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond:#ffffff;    /* ICI : le fond des lignes */\n' +
'  --bord:#EDEAF4;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des textes */\n' +
'  --titre:17px;      /* ICI : la taille du titre général */\n' +
'  --taille:16px;     /* ICI : la taille des lignes */\n' +
'  --quand:13px;      /* ICI : la taille des mentions de date */\n' +
'  --arrondi:15px;    /* ICI : l’arrondi des lignes */\n' +
'  --cascade:120ms;   /* ICI : le décalage entre deux lignes */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     LA DIFFÉRENCE AVEC LE BLOC CE QUI SE PASSE APRÈS\n' +
'     Celui de la page de paiement raconte les minutes qui suivent.\n' +
'     Celui-ci raconte les jours qui suivent : demain, dans trois\n' +
'     jours, la semaine prochaine.\n' +
'     Tu peux poser les deux, mais pas sur la même page.\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     Les lignes se posent l’une après l’autre à l’arrivée.\n' +
'     --cascade règle le décalage.\n' +
'     Si le JavaScript ne se charge pas, tout reste visible.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond et --bord habillent les lignes, la mention de date\n' +
'     reprend --c1.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     CE QUE TU DOIS ÉCRIRE\n' +
'     Trois à cinq repères, avec des échéances relatives — demain,\n' +
'     dans trois jours — plutôt que des dates fixes : tu ne referas\n' +
'     pas la page à chaque session.\n' +
'     Et n’annonce que ce que tu enverras vraiment.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-cj, .sio-cj *{box-sizing:border-box}\n' +
'.sio-cj{max-width:var(--large-max);margin:0 auto;padding:26px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-cj > p{margin:0 0 14px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-cj ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}\n' +
'.sio-cj li{display:flex;align-items:flex-start;gap:16px;padding:15px 18px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);border:1px solid var(--bord)}\n' +
'.sio-cj em{flex:none;width:96px;font-style:normal;font-size:var(--quand);\n' +
'  font-weight:800;letter-spacing:.06em;text-transform:uppercase;\n' +
'  color:var(--c1);padding-top:2px}\n' +
'.sio-cj b{display:block;font-size:var(--taille);color:var(--encre);margin-bottom:2px}\n' +
'.sio-cj span{display:block;font-size:calc(var(--taille) - 1px);line-height:1.5;\n' +
'  color:var(--gris)}\n' +
'.sio-cj.anim li{opacity:0;transform:translateY(10px);\n' +
'  transition:opacity .45s ease,transform .45s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-cj.anim li.vu{opacity:1;transform:none}\n' +
'@media (max-width:480px){\n' +
'  .sio-cj li{flex-direction:column;gap:6px}\n' +
'  .sio-cj em{width:auto}}\n' +
'@media (prefers-reduced-motion:reduce){\n' +
'  .sio-cj.anim li{opacity:1;transform:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace le titre et les repères ci-dessous -->\n' +
'<div class="sio-cj">\n' +
'  <p>Les prochains jours</p>\n' +
'  <ul>\n' +
'    <li><em>Demain</em><div><b>Le guide de préparation</b><span>Trente minutes de travail pour arriver au premier direct avec ton offre au clair.</span></div></li>\n' +
'    <li><em>Dans 3 jours</em><div><b>La liste du matériel</b><span>Rien de compliqué : de quoi écrire et une heure devant toi.</span></div></li>\n' +
'    <li><em>Le 6 octobre</em><div><b>Direct d’ouverture</b><span>19h00, le lien arrive le matin même.</span></div></li>\n' +
'  </ul>\n' +
'</div>\n' +
'<script>\n' +
'(function(){\n' +
'  if(!window.IntersectionObserver)return;\n' +
'  var z=document.querySelectorAll(".sio-cj");\n' +
'  for(var i=0;i<z.length;i++){(function(c){\n' +
'    c.classList.add("anim");\n' +
'    var it=c.querySelectorAll("li");\n' +
'    var pas=parseInt(getComputedStyle(c).getPropertyValue("--cascade"),10)||120;\n' +
'    var o=new IntersectionObserver(function(e){\n' +
'      for(var k=0;k<e.length;k++){\n' +
'        if(!e[k].isIntersecting)continue;\n' +
'        var el=e[k].target,n=+el.getAttribute("data-i");\n' +
'        setTimeout(function(x){return function(){x.classList.add("vu");};}(el),n*pas);\n' +
'        o.unobserve(el);\n' +
'      }\n' +
'    },{threshold:.2});\n' +
'    for(var k=0;k<it.length;k++){it[k].setAttribute("data-i",k);o.observe(it[k]);}\n' +
'  })(z[i]);}\n' +
'})();\n' +
'<\/script>'
},
{
id:"enattendant", name:"En attendant", tag:"CSS",
desc:"Un contenu à consommer tout de suite, pendant que l’e-mail arrive. L’attente devient un élan.",
code:
'<!-- En attendant -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-ea{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond:#F6F4FF;    /* ICI : le fond de la carte */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --titre:20px;      /* ICI : la taille du titre */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --btn:15px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     CE QUE TU Y METS\n' +
'     Un contenu qui se consomme en dix minutes et qui prépare la\n' +
'     suite : un épisode, un article, le premier module.\n' +
'     Le but n’est pas de remplir la page, c’est d’occuper l’attente\n' +
'     entre le paiement et l’arrivée de l’e-mail — le moment exact où\n' +
'     l’enthousiasme retombe.\n' +
'     Choisis un contenu déjà prêt. Si tu dois le créer pour ce bloc,\n' +
'     c’est que le bloc n’est pas nécessaire.\n' +
'\n' +
'     LE MOUVEMENT\n' +
'     La flèche du bouton avance au survol. Rien d’autre : ce bloc\n' +
'     est secondaire, il ne doit pas concurrencer la prochaine étape.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond en teinte douce, le bouton reprend --c1 et --c2d.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Il se trouve plus bas, dans la ligne qui commence par <a.\n' +
'     Remplace le # par ton adresse.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-ea, .sio-ea *{box-sizing:border-box}\n' +
'.sio-ea{max-width:var(--large-max);margin:0 auto;padding:26px 24px;\n' +
'  border-radius:var(--arrondi);background:var(--fond);font-family:var(--f)}\n' +
'.sio-ea em{display:inline-block;margin-bottom:10px;padding:6px 13px;\n' +
'  border-radius:999px;font-style:normal;font-size:12px;font-weight:800;\n' +
'  letter-spacing:.12em;text-transform:uppercase;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
'.sio-ea h3{margin:0 0 8px;font-size:var(--titre);color:var(--encre);line-height:1.3}\n' +
'.sio-ea p{margin:0 0 18px;font-size:var(--taille);line-height:1.6;color:var(--gris)}\n' +
'.sio-ea a{display:inline-flex;align-items:center;gap:9px;\n' +
'  font-size:var(--btn);font-weight:800;letter-spacing:.05em;\n' +
'  text-transform:uppercase;color:var(--c1);text-decoration:none}\n' +
'.sio-ea a span{transition:transform .25s ease}\n' +
'.sio-ea a:hover span{transform:translateX(5px)}\n' +
'@media (prefers-reduced-motion:reduce){.sio-ea a span{transition:none}}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes et le lien ci-dessous -->\n' +
'<div class="sio-ea">\n' +
'  <em>En attendant</em>\n' +
'  <h3>Les trois erreurs qui font échouer un challenge</h3>\n' +
'  <p>Dix minutes d’écoute, et tu arriveras au premier direct en sachant déjà ce qu’il faut éviter.</p>\n' +
'  <!-- ICI : ton lien, à la place du # -->\n' +
'  <a href="#">J’écoute l’épisode <span>&#8594;</span></a>\n' +
'</div>'
},
{
id:"complement", name:"Offre complémentaire", tag:"CSS",
desc:"Sobre, et nettement séparée de la confirmation. À poser tout en bas de la page, jamais avant.",
code:
'<!-- Offre complémentaire -->\n' +
'<style>\n' +
'/* ================== ICI : TES RÉGLAGES ================== */\n' +
'.sio-oc{\n' +
'  --c1:#7D7EE1;      /* ICI : ta couleur principale */\n' +
'  --c2:#C6BCFF;      /* ICI : ta couleur claire */\n' +
'  --c2d:#9E9AEF;     /* ICI : le mélange des deux (garde le texte blanc lisible) */\n' +
'  --fond:#ffffff;    /* ICI : le fond de la carte */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur du titre */\n' +
'  --gris:#5E666A;    /* ICI : la couleur du texte */\n' +
'  --titre:20px;      /* ICI : la taille du titre */\n' +
'  --taille:16px;     /* ICI : la taille du texte */\n' +
'  --prix:24px;       /* ICI : la taille du prix */\n' +
'  --btn:15px;        /* ICI : la taille du texte du bouton */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
'  /* ICI : ta police. Écris inherit pour reprendre celle de la page. */\n' +
'  --f:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n' +
'\n' +
'  /* -------------------- COMMENT S’EN SERVIR --------------------\n' +
'\n' +
'     OÙ LE POSER\n' +
'     Tout en bas de la page de remerciement, après la confirmation,\n' +
'     la prochaine étape et le calendrier. Jamais avant.\n' +
'     Une offre présentée avant la confirmation annule le soulagement\n' +
'     de l’achat, et fait grimper les demandes de remboursement.\n' +
'     Le trait de séparation au-dessus n’est pas décoratif : il dit\n' +
'     que ce qui suit est autre chose.\n' +
'\n' +
'     CE QUE TU Y METS\n' +
'     Un complément réel de ce qu’elle vient d’acheter, pas une\n' +
'     version supérieure du même produit — sinon elle se demandera\n' +
'     si elle a mal choisi il y a deux minutes.\n' +
'     Écris le prix en clair, et dis si l’offre est limitée dans le\n' +
'     temps. Si elle ne l’est pas, ne fais pas semblant.\n' +
'     Le bouton reste discret : contour, pas aplat. Elle vient de\n' +
'     payer, on ne lui crie pas dessus.\n' +
'\n' +
'     LES COULEURS\n' +
'     --fond et --bord habillent la carte. Le prix reprend --c1.\n' +
'\n' +
'     LA POLICE\n' +
'     Écris inherit dans --f pour reprendre celle de ta page.\n' +
'\n' +
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'\n' +
'  /* ============== ICI : INSÈRE TON LIEN ==============\n' +
'     Il se trouve plus bas, dans la ligne qui commence par <a.\n' +
'     Remplace le # par ton adresse.\n' +
'  =================================================== */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-oc, .sio-oc *{box-sizing:border-box}\n' +
'.sio-oc{max-width:var(--large-max);margin:0 auto;padding:30px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-oc-sep{display:flex;align-items:center;gap:14px;margin-bottom:22px;\n' +
'  font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;\n' +
'  color:#9AA0A6}\n' +
'.sio-oc-sep::before,.sio-oc-sep::after{content:"";flex:1;height:1px;\n' +
'  background:var(--bord)}\n' +
'.sio-oc-carte{padding:26px 24px;border-radius:var(--arrondi);\n' +
'  background:var(--fond);border:1px solid var(--bord)}\n' +
'.sio-oc h3{margin:0 0 8px;font-size:var(--titre);color:var(--encre);line-height:1.3}\n' +
'.sio-oc p{margin:0 0 16px;font-size:var(--taille);line-height:1.6;color:var(--gris)}\n' +
'.sio-oc-bas{display:flex;align-items:center;justify-content:space-between;\n' +
'  gap:16px;flex-wrap:wrap}\n' +
'.sio-oc-bas b{font-size:var(--prix);font-weight:800;color:var(--c1);line-height:1}\n' +
'.sio-oc-bas b small{display:block;font-size:13px;font-weight:600;color:var(--gris);\n' +
'  margin-top:4px}\n' +
'.sio-oc a{display:inline-block;padding:13px 24px;border-radius:999px;\n' +
'  border:1.5px solid var(--c1);color:var(--c1);text-decoration:none;\n' +
'  font-weight:800;font-size:var(--btn);letter-spacing:.05em;\n' +
'  text-transform:uppercase;\n' +
'  transition:background .25s ease,color .25s ease}\n' +
'.sio-oc a:hover{background:var(--c1);color:#fff}\n' +
'</style>\n' +
'<!-- ICI : remplace les textes, le prix et le lien ci-dessous -->\n' +
'<div class="sio-oc">\n' +
'  <div class="sio-oc-sep">Pour aller plus loin</div>\n' +
'  <div class="sio-oc-carte">\n' +
'    <h3>Les modèles d’e-mails du challenge</h3>\n' +
'    <p>Les douze e-mails de la séquence, rédigés et prêts à personnaliser. À installer en une heure dans ton Système.io.</p>\n' +
'    <div class="sio-oc-bas">\n' +
'      <b>97 €<small>Paiement unique</small></b>\n' +
'      <!-- ICI : ton lien, à la place du # -->\n' +
'      <a href="#">Je découvre</a>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>'
}
];

var DARK_STAGE = {marquee:true, announce:true};
var TALL_STAGE = {reassure:true, gauge:true, timer:true, sticky:true, countdown:true,
  faq:true, timeline:true, modules:true, compare:true, avis:true, benefices:true, avantapres:true,
  grille:true, video:true, citation:true, chiffres:true,
  aurora:true, typewriter:true, glass:true, split:true, herocd:true,
  suivez:true, partage:true, chiffres:true, grille:true, video:true, citation:true,
  bundle:true, paliers:true, codepromo:true,
  recap:true, apres:true, faqfin:true, garantie:true,
  confirm:true, etapeuk:true, agenda:true, antispam:true, calendrier:true,
  enattendant:true, complement:true};

function hex(v){var n=parseInt(v.slice(1),16);return [n>>16&255,n>>8&255,n&255];}
function melange(a,b,t){
  var A=hex(a),B=hex(b),o="#";
  for(var i=0;i<3;i++){
    var v=Math.round(A[i]*(1-t)+B[i]*t).toString(16);
    o+=(v.length<2?"0":"")+v;
  }
  return o;
}
/* Bouton « Personnaliser » : un petit formulaire s’ouvre dans la carte,
   puis Claude s’ouvre dans un nouvel onglet avec la demande et le code. */
function messageClaude(item,demande){
  return "Bonjour Claude ! Je veux personnaliser le bloc \u00ab " + item.name + " \u00bb de la biblioth\u00e8que Koweb, pour ma page Syst\u00e8me.io.\n\n" +
    "Voici ce que je veux changer :\n" + demande + "\n\nRends-moi directement le code complet, pr\u00eat \u00e0 coller dans un \u00e9l\u00e9ment \u00ab Code personnalis\u00e9 \u00bb de Syst\u00e8me.io.\n\n" +
    "R\u00e8gles \u00e0 respecter :\n" +
    "- Ne modifie que ce que je demande : les valeurs de l\u2019encadr\u00e9 R\u00c9GLAGES, les textes visibles, les liens (href, data-url) et les attributs data- (dates, prix, mots, codes).\n" +
    "- Garde tout le reste \u00e0 l\u2019identique : balises, classes, CSS, JavaScript et commentaires.\n" +
    "- Couleurs en #RRGGBB. Si --c1 ou --c2 change, recalcule --c2d : un m\u00e9lange des deux, un peu plus proche de --c1, assez fonc\u00e9 pour qu\u2019un texte blanc reste lisible.\n" +
    "- Pour un bloc d\u2019une seule couleur sans d\u00e9grad\u00e9, mets --uni:1;.\n" +
    "- Dates au format AAAA-MM-JJTHH:MM:SS.\n" +
    "- Si un texte appara\u00eet en double (rubans qui d\u00e9filent), modifie les deux copies.\n" +
    "\nFa\u00e7on de r\u00e9pondre (je suis d\u00e9butante, fais tr\u00e8s simple) :\n" +
    "1. Une ou deux phrases chaleureuses qui disent ce que tu as chang\u00e9, sans aucun d\u00e9tail technique.\n" +
    "2. Le bloc entier, dans un seul bloc de code.\n" +
    "3. Termine par : \u00ab Clique sur Copier en haut du code, puis colle-le dans ton \u00e9l\u00e9ment Code personnalis\u00e9 sur Syst\u00e8me.io. \u00bb\n" +
    "Rien d\u2019autre : pas d\u2019explication du code, pas de liste de modifications.\n\n" +
    "Voici le code du bloc :\n\n```html\n" + currentCode(item) + "\n```";
}
function copieSecours(msg){
  try{
    var ta=document.createElement("textarea");
    ta.value=msg; ta.style.position="fixed"; ta.style.opacity="0"; ta.style.left="-9999px";
    document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
  }catch(e){}
  try{ if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(msg).catch(function(){}); } }catch(e){}
}
var ASSISTANT=(litMemoire("assistant")==="chatgpt")?"chatgpt":"claude";
function nomAssistant(){ return ASSISTANT==="chatgpt"?"ChatGPT":"Claude"; }
function baseAssistant(){
  return (ASSISTANT==="chatgpt")?"https://chatgpt.com/?q=":"https://claude.ai/new?q=";
}
function messageVerif(code){
  return "Bonjour ! Voici un bloc de la biblioth\u00e8que Koweb que j\u2019ai modifi\u00e9 pour ma page Syst\u00e8me.io.\n\n" +
    "V\u00e9rifie qu\u2019il est correct avant que je le colle :\n" +
    "- une accolade } ou un point-virgule ; qui manque\n" +
    "- une balise <style> ou <script> qui n\u2019est pas referm\u00e9e\n" +
    "- une couleur \u00e9crite au mauvais format\n" +
    "- un lien rest\u00e9 sur # au lieu de mon adresse\n\n" +
    "R\u00e9ponds simplement : dis-moi si tout va bien, et sinon ce qu\u2019il faut corriger, " +
    "puis redonne-moi le code entier corrig\u00e9 dans un seul bloc de code. Pas d\u2019explication technique.\n\n" +
    "```html\n" + code + "\n```";
}
var BOUTONS_GO=[];
function lienClaude(item,demande){
  var msg=messageClaude(item,demande);
  var q = msg.length<13500 ? msg : "J\u2019ai copi\u00e9 un bloc de la biblioth\u00e8que Koweb : je le colle juste en dessous.";
  return baseAssistant()+encodeURIComponent(q);
}
var PILE_DEFAUT='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
var POLICES={
  titre:litMemoire("police-titre")||"",
  sous:litMemoire("police-sous")||"",
  texte:litMemoire("police-texte")||""
};
function pile(nom){ return '"'+nom+'",'+PILE_DEFAUT; }
function imports(noms){
  var vus={}, out="";
  for(var i=0;i<noms.length;i++){
    var n=noms[i];
    if(!n || vus[n]) continue;
    vus[n]=1;
    out+="@import url('https://fonts.googleapis.com/css2?family="+n.split(" ").join("+")+":wght@400;500;600;700;800&display=swap');\n";
  }
  return out;
}
/* Les polices choisies sont ajoutées à la fin du <style> du bloc,
   par famille d’élément : titres, sur-titres et sous-titres, textes. */
function appliquePolice(code){
  var t=POLICES.titre, s=POLICES.sous, x=POLICES.texte;
  if(!t && !s && !x) return code;
  if(x) code=code.split("--f:"+PILE_DEFAUT+";").join("--f:"+pile(x)+";");
  var m=/\n(\.[a-zA-Z0-9_-]+)\{\n/.exec(code);
  var r=m?m[1]:null;
  var regles="";
  if(r){
    if(x) regles+=r+" p,"+r+" li,"+r+" span,"+r+" a,"+r+" button,"+r+" blockquote,"+r+" input,"+r+" label{font-family:"+pile(x)+"}\n";
    if(s) regles+=r+" em,"+r+" cite,"+r+" small,"+r+" h5,"+r+" h6,"+r+" [class*=sous],"+r+" [class*=sur]{font-family:"+pile(s)+"}\n";
    if(t) regles+=r+" h1,"+r+" h2,"+r+" h3,"+r+" h4,"+r+" b,"+r+" strong,"+r+" [class*=titre]{font-family:"+pile(t)+"}\n";
  }
  var imp=imports([t,s,x]);
  if(code.indexOf("<style>")>-1 && code.indexOf("fonts.googleapis")===-1 && imp){
    code=code.replace("<style>","<style>\n"+imp.replace(/\n$/,""));
  }
  if(regles && code.indexOf("</style>")>-1){
    code=code.replace("</style>","/* ICI : tes polices */\n"+regles+"</style>");
  }
  return code;
}
function currentCode(item){
  var c1=document.getElementById("kwb-c1").value;
  var c2=document.getElementById("kwb-c2").value;
  return item.code.split(D1).join(c1).split(D2).join(c2)
                  .split(D3).join(melange(c1,c2,0.45))
                  .split("--uni:0;").join(UNI?"--uni:1;":"--uni:0;");
}
var currentCodeBrut=currentCode;
currentCode=function(item){ return appliquePolice(currentCodeBrut(item)); };

/* ---- les éléments que contient vraiment chaque bloc ---- */
/* ---- les éléments d’un bloc : ce qu’il contient vraiment ---- */
var ELT_ART=/^(?:(?:les|le|la|tes|ton|ta|mes|mon|ma|des|du|de|chaque|un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques|leurs|leur|ses|son|sa)\s+|(?:l|d|n)['’])+/i;
var ELT_BRUIT=["ci-dessous","ci-dessus","à la place du #","dans alt","si tu le veux","ou laisse","pense à","si tu changes","dont tu ne veux pas","à la place","en dessous"];
var ELT_PHRASES={lien:"Mets mon lien : https://…",prix:"Change le prix avec … €",
  date:"Change la date de fin : le … à …h",note:"Change la note : …/5",
  logo:"Mets mon image : https://…",image:"Mets mon image : https://…",
  visuel:"Mets mon image : https://…",code:"Change le code promo : …",picto:"Change le picto : …"};
var ELT_SKIP={c2:1,c2d:1,uni:1,cascade:1,"marge-tel":1,pleine:1,pos:1,"gris-logos":1,f:1};
var ELT_TAB={fond:"Couleur de fond",bg:"Couleur de fond",bulle:"Couleur de fond",dos:"Couleur de fond",
 avant:"Couleur de fond","btn-fond":"Couleur du bouton","btn-txt":"Couleur du bouton",
 bord:"Contour",ligne:"Contour",etoile:"Couleur des étoiles",ok:"Couleur de la coche",
 arrondi:"Angles",arrondi2:"Angles",taille:"Taille du texte",texte:"Taille du texte",
 taille2:"Taille du texte",taille3:"Taille du texte",titre:"Taille du titre",
 surtitre:"Taille du sur-titre",soustitre:"Taille du sous-titre",btn:"Taille du bouton",
 prix:"Taille du prix",total:"Taille du total",note:"Taille de la note",
 chiffre:"Taille des chiffres",code:"Taille du code",signature:"Taille de la signature",
 picto:"Taille des pictos",hauteur:"Épaisseur",epaisseur:"Épaisseur",trait:"Épaisseur",
 liseret:"Épaisseur",haut:"Espace autour",largeur:"Marges intérieures",
 "large-max":"Largeur maximale",colonne:"Largeur des colonnes",ecart:"Espacement",
 espace:"Espacement",vitesse:"Vitesse",duree:"Vitesse",trace:"Vitesse",pulse:"Vitesse",
 montee:"Vitesse",aligne:"Alignement",incline:"Inclinaison",img:"Image",rond:"Taille des pastilles",
cascade:"Apparition en douceur",pleine:"Pleine largeur",pos:"Position","gris-logos":"Logos en gris",
 "marge-tel":"Marge sur téléphone",piste:"Couleur de la piste",bas:"Hauteur du trait",};
var ELT_PRIO=["Couleur de fond","Couleur du titre","Couleur du texte","Contour","Angles",
 "Taille du titre","Taille du texte","Épaisseur","Largeur maximale","Espacement","Vitesse","Alignement"];
var ELT_STOP={niveau:1,volet:1,bloc:1,element:1,"élément":1,carte:1,colonne:1,partie:1};

function eltPropre(t){
  t=String(t).trim().toLowerCase();
  for(var i=0;i<ELT_BRUIT.length;i++) t=t.split(ELT_BRUIT[i]).join("");
  t=t.split(/[.;]/)[0].replace(/<[^>]*>/g,"");
  t=t.replace(/^(remplace|mets|insère|insere|écris|ecris|change|colore|supprime)\s+/,"");
  return t.replace(/^[\s,:·\-–—]+|[\s,:·\-–—]+$/g,"");
}
function eltMorceaux(t){
  t=eltPropre(t); var out=[]; if(!t) return out;
  var parts=t.split(/\s+et\s+|,|\bou\b|\|/);
  for(var i=0;i<parts.length;i++){
    var p=parts[i].replace(/^[\s,:·\-–—]+|[\s,:·\-–—]+$/g,"");
    if(!p || p.length>30 || p.indexOf("http")>=0 || p.indexOf("@")>=0) continue;
    var lab=p.replace(ELT_ART,"").replace(/^(leurs?|ses?)\s+/,"").trim();
    if(!lab || lab.length>24) continue;
    if(lab.split(/\s+/).length>3) continue;
    if(/\d|^data-|^puis\b|^par\b|^dans\b|^avec\b|^pour\b/.test(lab)) continue;
    out.push([lab,p]);
  }
  return out;
}
function eltPhrase(lab,brut){
  var k=lab.toLowerCase().split(/\s+/)[0].replace(/['’]$/,"").replace(/s$/,"");
  if(ELT_PHRASES[k]) return ELT_PHRASES[k];
  if(!ELT_ART.test(brut)) brut=(/s$/.test(lab.toLowerCase())?"les ":"le ")+brut;
  return "Change "+brut+" : …";
}
var ELT_FIN=/\s+(déjà|à|au|aux|de|du|des|en|sur|pour|et|dans|avec|sous|sa|son|ses|le|la|les|ta|ton|tes|ma|mon|mes|un|une|ce|cet|cette|leur|leurs)$/i;
function eltCourt(d){
  d=d.split(/[.,(]/)[0].trim().replace(ELT_ART,"").trim();
  var m=d.split(/\s+/), out="";
  for(var i=0;i<m.length;i++){
    var n=out?out+" "+m[i]:m[i];
    if(n.length>24) break;
    out=n;
  }
  out=out.replace(/[\s«»:,;\-–—]+$/,"");
  while(ELT_FIN.test(out)) out=out.replace(ELT_FIN,"").replace(/[\s«»:,;\-–—]+$/,"");
  if(!out) out=m[0];
  return out.charAt(0).toUpperCase()+out.slice(1);
}
function eltPhraseStyle(lab,d){
  var l=lab.toLowerCase();
  if(l.indexOf("couleur")===0) return "Change la "+l+" : #\u2026\u2026";
  if(l.indexOf("taille")===0) return "Change la "+l+" : \u2026";
  if(l==="angles") return "Change les angles : 0 = carr\u00e9, 14 = doux, 999 = tout rond";
  if(l==="contour") return "Change le contour : \u2026";
  if(l==="\u00e9paisseur") return "Change l\u2019\u00e9paisseur : \u2026";
  if(l==="espacement") return "Change l\u2019espacement : \u2026";
  if(l==="espace autour") return "Change l\u2019espace autour : \u2026";
  if(l==="marges int\u00e9rieures") return "Change les marges int\u00e9rieures : \u2026";
  if(l==="largeur maximale") return "Change la largeur maximale : \u2026";
  if(l==="largeur des colonnes") return "Change la largeur des colonnes : \u2026";
  if(l==="vitesse") return "Change la vitesse : plus lent ou plus rapide";
  if(l==="alignement") return "Mets le texte au centre ou \u00e0 gauche";
  if(l==="inclinaison") return "Change l\u2019inclinaison : \u2026";
  if(l==="image") return "Mets mon image : https://\u2026";
  return "Change "+d.split(/[.(]/)[0].trim()+" : \u2026";
}
function etiquetteReglage(n,d){
  n=String(n).toLowerCase(); d=String(d);
  if(n==="c1"){
    var mm=/celle (?:des|du|de|d['\u2019])\s*(.+)$/.exec(d);
    if(!mm) return "Couleur de fond";
    var r=mm[1].trim();
    return ((r.indexOf("contour")>=0)?"Couleur du contour"
      :("Couleur "+(/s$/.test(r.split(/\s+/)[0])?"des ":"du ")+r.replace(ELT_ART,""))).slice(0,26);
  }
  if(ELT_TAB[n]) return ELT_TAB[n];
  if(n==="encre"||n==="txt"||n==="gris") return (d.indexOf("titre")>=0)?"Couleur du titre":"Couleur du texte";
  if(n==="pastille") return (d.indexOf("fond")>=0||d.indexOf("couleur")>=0)?"Couleur de fond":"Taille des pastilles";
  return eltCourt(d);
}
function elementsDuBloc(code){
  var i=code.lastIndexOf("</style>"), mk=(i>=0)?code.slice(i+8):code;
  var C=[], vus={}, vs={};
  function cle(l){ return l.toLowerCase().replace(/[sx]$/,""); }
  function a(lab,ph){
    var k=cle(lab); if(vus[k]) return;
    vus[k]=1; C.push([lab.charAt(0).toUpperCase()+lab.slice(1),ph]);
  }
  var repere=[], intro=[], m, rx=/<!--\s*ICI\s*:\s*([\s\S]*?)-->/g;
  while((m=rx.exec(code))){
    var lot=eltMorceaux(m[1]);
    if(/^\s*(remplace|pense)/i.test(m[1])) intro=intro.concat(lot); else repere=repere.concat(lot);
  }
  if(repere.length){
    var f=[]; for(var j=0;j<intro.length;j++){ if(!ELT_STOP[cle(intro[j][0])]) f.push(intro[j]); }
    intro=f;
  }
  var tous=intro.concat(repere);
  for(var k2=0;k2<tous.length;k2++) a(tous[k2][0],eltPhrase(tous[k2][0],tous[k2][1]));
  if(/data-(fin|debut)/.test(code)) a("Date","Change la date de fin : le … à …h");
  if(/data-prix/.test(code)) a("Prix","Change le prix avec … €");
  var net=mk.replace(/&(amp|lt|gt|quot|nbsp|#160);/g,"");
  if(/&#\d+;|&[a-z]{2,8};/.test(net)) a("Picto","Change le picto : …");
  if(mk.indexOf("href=")>=0) a("Lien","Mets mon lien : https://…");
  if(!C.length) a("Texte","Change le texte : « … »");
  var S=[], rv=/--([a-z0-9-]+)\s*:[^;]*;\s*\/\*\s*ICI\s*:\s*([^*]*?)\s*\*\//gi, mv;
  while((mv=rv.exec(code))){
    var n=mv[1].toLowerCase(), d=mv[2], lab;
    if(ELT_SKIP[n]) continue;
    lab=etiquetteReglage(n,d);
    var kk=cle(lab);
    if(vs[kk]||vus[kk]) continue;
    vs[kk]=1; S.push([lab,eltPhraseStyle(lab,d)]);
  }
  function rang(l){
    var i=ELT_PRIO.indexOf(l);
    if(i>=0) return i;
    return (l.indexOf("Couleur")===0)?4.5:99;
  }
  S.sort(function(x,y){ return rang(x[0])-rang(y[0]); });
  return C.slice(0,6).concat(S.slice(0,4));
}

function suggestions(item){
  var c="";
  try{ c=currentCode(item)||""; }catch(e){ c=""; }
  return elementsDuBloc(c);
}

var PFX_CL="kwb-", PFX_RESET="kwb-reset";
/* ============ Les réglages du bloc, en direct ============
   Chaque bloc porte son encadré RÉGLAGES : on le lit et on en fait
   de vrais petits champs. L’aperçu suit, le code copié aussi. */
var REGL=(function(){ try{ return JSON.parse(litMemoire("reglages")||"{}")||{}; }catch(e){ return {}; } })();
function gardeReglages(){ try{ garderMemoire("reglages",JSON.stringify(REGL)); }catch(e){} }
function appliqueReglages(code,id){
  var o=REGL[id]; if(!o) return code;
  for(var n in o){
    if(!o.hasOwnProperty(n)) continue;
    var rx=new RegExp("(--"+n.replace(/[^a-z0-9-]/gi,"")+"\\s*:)([^;]*)(;)");
    code=code.replace(rx,"$1"+o[n]+"$3");
  }
  return code;
}
var REGL_SAUTE={c1:1,c2:1,c2d:1,uni:1,f:1};
function reglagesDuBloc(code){
  var out=[], rx=/--([a-z0-9-]+)\s*:\s*([^;]*);[ \t]*\/\*\s*ICI\s*:\s*([^*]*?)\s*\*\//gi, m;
  while((m=rx.exec(code))){
    var n=m[1].toLowerCase();
    if(REGL_SAUTE[n]) continue;
    out.push({nom:n,val:m[2].trim(),desc:m[3]});
  }
  return out;
}
function optionsDesc(d){
  var out=[], rx=/([A-Za-z0-9#%.\-]+)\s*=\s*([^,;.(]+)/g, m;
  while((m=rx.exec(d))){
    var lib=m[2].replace(/\s+$/,"");
    if(lib) out.push([m[1],lib]);
  }
  return (out.length>=2)?out:null;
}
function hex6(v){
  var m=/^#([0-9a-f]{3})$/i.exec(v);
  if(m) return "#"+m[1].charAt(0)+m[1].charAt(0)+m[1].charAt(1)+m[1].charAt(1)+m[1].charAt(2)+m[1].charAt(2);
  return /^#[0-9a-f]{6}$/i.test(v)?v:null;
}
function bornes(nom,val){
  var m=/^(-?(?:\d+(?:\.\d+)?|\.\d+))(px|rem|em|%|deg|ms|s)$/i.exec(val);
  if(!m) return null;
  var v=parseFloat(m[1]), u=m[2].toLowerCase();
  if(nom==="arrondi"||nom==="arrondi2") return {min:0,max:50,step:1,unite:"px",rond:true,v:(v>=100?50:Math.min(v,50))};
  if(u==="%")   return {min:0,max:100,step:1,unite:u,v:v};
  if(u==="deg") return {min:-30,max:30,step:1,unite:u,v:v};
  if(u==="ms")  return {min:0,max:Math.max(Math.round(v*3),1000),step:50,unite:u,v:v};
  if(u==="s")   return {min:0,max:Math.max(Math.round(v*3),4),step:.1,unite:u,v:v};
  if(u==="rem"||u==="em"){
    if(Math.abs(v)<=1) return {min:-.2,max:1,step:.01,unite:u,v:v};
    return {min:0,max:Math.max(v*3,4),step:.1,unite:u,v:v};
  }
  return {min:0,max:Math.max(Math.round(v*3),24),step:1,unite:"px",v:v};
}
function bornesNombre(val){
  if(!/^-?(?:\d+(?:\.\d+)?|\.\d+)$/.test(val)) return null;
  var n=parseFloat(val);
  if(n===0||n===1) return null;
  var pas=(Math.abs(n)>=100)?50:((Math.abs(n)>=10)?1:.1);
  return {min:0,max:Math.max(Math.round(n*3),10),step:pas,unite:"",v:n};
}
/* ---- les textes du bloc : on les change ici, sans assistant ---- */
var TXTS=(function(){ try{ return JSON.parse(litMemoire("textes")||"{}")||{}; }catch(e){ return {}; } })();
function gardeTextes(){ try{ garderMemoire("textes",JSON.stringify(TXTS)); }catch(e){} }
function coupeStyle(code){
  var i=code.lastIndexOf("</style>");
  return (i<0)?["",code]:[code.slice(0,i+8),code.slice(i+8)];
}
function masqueScripts(t,bac,avecAttributs){
  /* on met de côté les scripts et les commentaires : ce ne sont pas des textes à changer */
  var rx=(avecAttributs===false)
    ? /<script[\s\S]*?<\/script>|<!--[\s\S]*?-->/gi
    : /<script[\s\S]*?<\/script>|<!--[\s\S]*?-->|="[^"]*<[^"]*"/gi;
  return t.replace(rx,function(m){ bac.push(m); return "\u0001"+(bac.length-1)+"\u0001"; });
}
function rendScripts(t,bac){
  return t.replace(/\u0001(\d+)\u0001/g,function(_,i){ return bac[+i]; });
}
function propreTexte(s){ return s.replace(/\s+/g," ").replace(/^\s+|\s+$/g,""); }
function texteUtile(s){
  if(!s || s.length<2) return false;
  if(s.indexOf("\u0001")>=0) return false;
  if(/^[\s|·—–\-:,.!?]+$/.test(s)) return false;
  if(/^(?:&#\d+;|&[a-z]+;|\s)+$/i.test(s)) return false;
  return true;
}
function textesDuBloc(code){
  var p=coupeStyle(code), bac=[], t=masqueScripts(p[1],bac), out=[], vus={}, m;
  var rx=/>([^<]+)</g;
  while((m=rx.exec(t))){
    var s=propreTexte(m[1]);
    if(!texteUtile(s) || vus[s]) continue;
    vus[s]=1; out.push(s);
  }
  return out;
}
function texteFinal(e){
  var v=e.v;
  if(e.maj===1) v=v.toUpperCase();
  else if(e.maj===2) v=v.toLowerCase();
  if(e.gras) v="<strong>"+v+"</strong>";
  return v;
}
function appliqueTextes(code,id){
  var o=TXTS[id]; if(!o) return code;
  var p=coupeStyle(code), bac=[], t=masqueScripts(p[1],bac);
  t=t.replace(/>([^<]+)</g,function(all,inner){
    var s=propreTexte(inner);
    if(!s || !Object.prototype.hasOwnProperty.call(o,s)) return all;
    var av=/^\s*/.exec(inner)[0], ap=/\s*$/.exec(inner)[0];
    return ">"+av+texteFinal(o[s])+ap+"<";
  });
  return p[0]+rendScripts(t,bac);
}
/* ---- les liens, les dates et les images : ce sont des attributs ---- */
var ATTRS=(function(){ try{ return JSON.parse(litMemoire("attributs")||"{}")||{}; }catch(e){ return {}; } })();
function gardeAttrs(){ try{ garderMemoire("attributs",JSON.stringify(ATTRS)); }catch(e){} }
var ATTR_SAUTE={"data-n":1,"data-i":1,"data-cle":1,"data-ag":1,"data-mode":1,"data-k":1,"data-index":1};
var ATTR_LAB={
  "href":"Le lien","data-url":"Le lien","src":"L’image",
  "data-fin":"La date de fin","data-debut":"La date de début",
  "data-mots":"Les mots qui défilent","data-code":"Le code promo",
  "data-pris":"Places déjà prises","data-total":"Places en tout",
  "data-avant":"Devant le chiffre","data-apres":"Derrière le chiffre",
  "data-titre":"Le titre de l’événement","data-lieu":"Le lieu","data-details":"Les détails",
  "data-prix":"Le prix","data-p1":"Le prix","data-p2":"Le prix","data-p3":"Le prix","data-p4":"Le prix",
  "data-note":"La note","data-nb":"Le nombre d’avis"};
function labelAttr(nom){
  if(ATTR_LAB[nom]) return ATTR_LAB[nom];
  var n=nom.replace(/^data-/,"").replace(/-/g," ");
  return n.charAt(0).toUpperCase()+n.slice(1);
}
function attrUtile(nom,val){
  if(ATTR_SAUTE[nom]) return false;
  if(nom==="href"||nom==="src") return true;
  if(nom.indexOf("data-")!==0) return false;
  if(ATTR_LAB[nom]) return true;
  if(!val) return false;
  return !/^-?\d+$/.test(val);
}
function attrsDuBloc(code){
  var p=coupeStyle(code), bac=[], t=masqueScripts(p[1],bac,false), out=[], n={}, m;
  var rx=/\b(href|src|data-[a-z0-9-]+)\s*=\s*"([^"]*)"/gi;
  while((m=rx.exec(t))){
    var nom=m[1].toLowerCase(), val=m[2];
    var k=nom+"#"+(n[nom]=(n[nom]||0), n[nom]++);
    if(!attrUtile(nom,val)) continue;
    out.push({cle:k,nom:nom,val:val});
  }
  var base={}, i;
  for(i=0;i<out.length;i++){
    out[i].base=labelAttr(out[i].nom);
    base[out[i].base]=(base[out[i].base]||0)+1;
  }
  var vus={};
  for(i=0;i<out.length;i++){
    if(base[out[i].base]>1){
      vus[out[i].base]=(vus[out[i].base]||0)+1;
      out[i].lab=out[i].base+" "+vus[out[i].base];
    } else out[i].lab=out[i].base;
  }
  return out;
}
function appliqueAttrs(code,id){
  var o=ATTRS[id]; if(!o) return code;
  var p=coupeStyle(code), bac=[], t=masqueScripts(p[1],bac,false), n={};
  t=t.replace(/\b(href|src|data-[a-z0-9-]+)\s*=\s*"([^"]*)"/gi,function(all,nom,val){
    var k=nom.toLowerCase();
    var cle=k+"#"+(n[k]=(n[k]||0), n[k]++);
    if(!Object.prototype.hasOwnProperty.call(o,cle)) return all;
    return nom+'="'+String(o[cle]).split('"').join("&quot;")+'"';
  });
  return p[0]+rendScripts(t,bac);
}
function poseAttr(grille,a,item,stage){
  var mem=(ATTRS[item.id]||{})[a.cle];
  var champ=document.createElement("div"); champ.className=PFX_CL+"regl-champ";
  var lab=document.createElement("label"); lab.textContent=a.lab;
  var ligne=document.createElement("div"); ligne.className=PFX_CL+"regl-ligne";
  champ.appendChild(lab); champ.appendChild(ligne);
  function change(v){
    if(!ATTRS[item.id]) ATTRS[item.id]={};
    if(v===a.val) delete ATTRS[item.id][a.cle];
    else ATTRS[item.id][a.cle]=v;
    gardeAttrs(); majModifies();
    mount(stage,currentCode(item));
  }
  var val=(mem===undefined)?a.val:mem;
  if(a.nom==="data-fin"||a.nom==="data-debut"){
    var d=document.createElement("input"); d.type="datetime-local";
    d.value=String(val).slice(0,16);
    d.addEventListener("change",function(){
      if(!d.value) return;
      change(d.value.length===16 ? d.value+":00" : d.value);
    });
    ligne.appendChild(d);
  } else {
    var t=document.createElement("input"); t.type="text";
    var estData=/^data:/i.test(val);
    t.value=estData?"":val;
    t.placeholder=(a.nom==="src")?"Colle l’adresse de ton image : https://…"
      :((a.nom==="href"||a.nom==="data-url")?"https://tonsite.systeme.io/…":String(a.val).slice(0,60));
    t.addEventListener("change",function(){ change(t.value.trim()); });
    ligne.appendChild(t);
  }
  grille.appendChild(champ);
}
function poseTexte(grille,orig,item,stage){
  var e=(TXTS[item.id]||{})[orig] || {v:orig,maj:0,gras:0};
  var ligne=document.createElement("div"); ligne.className=PFX_CL+"regl-ligne";
  var ch=document.createElement("input"); ch.type="text"; ch.value=e.v; ch.title=orig;
  var aa=document.createElement("button"); aa.type="button"; aa.className=PFX_CL+"regl-mini";
  var gr=document.createElement("button"); gr.type="button"; gr.className=PFX_CL+"regl-mini";
  gr.textContent="G"; gr.title="Mettre en gras";
  function nomAa(){
    aa.textContent = (e.maj===1)?"AA":((e.maj===2)?"aa":"Aa");
    aa.title = (e.maj===1)?"Tout en majuscules":((e.maj===2)?"Tout en minuscules":"Comme c’est écrit");
  }
  function garde(){
    if(!TXTS[item.id]) TXTS[item.id]={};
    if(e.v===orig && !e.maj && !e.gras) delete TXTS[item.id][orig];
    else TXTS[item.id][orig]={v:e.v,maj:e.maj,gras:e.gras};
    gardeTextes(); majModifies();
    mount(stage,currentCode(item));
  }
  ch.addEventListener("change",function(){ e.v=ch.value; garde(); });
  aa.addEventListener("click",function(){ e.maj=(e.maj+1)%3; nomAa(); garde(); });
  gr.addEventListener("click",function(){
    e.gras=e.gras?0:1;
    gr.setAttribute("aria-pressed",e.gras?"true":"false");
    garde();
  });
  nomAa(); gr.setAttribute("aria-pressed",e.gras?"true":"false");
  ligne.appendChild(ch); ligne.appendChild(aa); ligne.appendChild(gr);
  grille.appendChild(ligne);
}
function construitReglages(boite,item,stage){
  boite.innerHTML="";
  var liste=reglagesDuBloc(item.code);
  var lTxtCount=textesDuBloc(item.code).length;
  var aide=document.createElement("p"); aide.className=PFX_CL+"sugg-aide";
  aide.textContent=(lTxtCount||liste.length||attrsDuBloc(item.code).length)
    ? "Change les textes, bouge les réglages : l’aperçu suit, et le code copié aussi. Pour le reste, passe par Personnaliser."
    : "Ce bloc n’a rien à régler ici : passe par Personnaliser.";
  boite.appendChild(aide);
  /* ---- les liens, les dates et les images ---- */
  var lAttr=attrsDuBloc(item.code);
  if(lAttr.length){
    var ta=document.createElement("p"); ta.className=PFX_CL+"regl-titre";
    ta.textContent="Les liens, les dates et les images";
    boite.appendChild(ta);
    var ga=document.createElement("div"); ga.className=PFX_CL+"regl-grille";
    for(var a2=0;a2<lAttr.length;a2++) poseAttr(ga,lAttr[a2],item,stage);
    boite.appendChild(ga);
  }
  /* ---- les textes, en haut du panneau ---- */
  var lTxt=textesDuBloc(item.code);
  if(lTxt.length){
    var tt=document.createElement("p"); tt.className=PFX_CL+"regl-titre"; tt.textContent="Les textes";
    boite.appendChild(tt);
    var gt=document.createElement("div"); gt.className=PFX_CL+"regl-textes";
    for(var t2=0;t2<lTxt.length;t2++) poseTexte(gt,lTxt[t2],item,stage);
    boite.appendChild(gt);
    var ts=document.createElement("p"); ts.className=PFX_CL+"regl-titre"; ts.textContent="Le style";
    boite.appendChild(ts);
  }
  if(!liste.length) return;
  var grille=document.createElement("div"); grille.className=PFX_CL+"regl-grille";

  /* deux réglages ne doivent pas porter la même étiquette */
  var vus={}, i2;
  for(i2=0;i2<liste.length;i2++){
    liste[i2].lab=etiquetteReglage(liste[i2].nom,liste[i2].desc);
    vus[liste[i2].lab]=(vus[liste[i2].lab]||0)+1;
  }
  var pris={};
  for(i2=0;i2<liste.length;i2++){
    var L=liste[i2].lab;
    if(vus[L]>1) L=eltCourt(liste[i2].desc);
    if(pris[L]) L=L+" ("+liste[i2].nom+")";
    pris[L]=1; liste[i2].lab=L;
  }

  function pose(r){
    var mem=(REGL[item.id]||{})[r.nom];
    var champ=document.createElement("div"); champ.className=PFX_CL+"regl-champ";
    var lab=document.createElement("label");
    lab.textContent=r.lab||etiquetteReglage(r.nom,r.desc);
    lab.title=r.desc;
    var ligne=document.createElement("div"); ligne.className=PFX_CL+"regl-ligne";
    champ.appendChild(lab); champ.appendChild(ligne);

    function change(v){
      if(!REGL[item.id]) REGL[item.id]={};
      REGL[item.id][r.nom]=v;
      gardeReglages(); majModifies();
      mount(stage,currentCode(item));
    }

    var opts=(r.nom==="arrondi"||r.nom==="arrondi2")?null:optionsDesc(r.desc);
    var b=bornes(r.nom,mem||r.val)||bornesNombre(mem||r.val);
    var coul=hex6(mem||r.val);

    if(opts){
      var sel=document.createElement("select");
      for(var i=0;i<opts.length;i++){
        var o=document.createElement("option");
        o.value=opts[i][0]; o.textContent=opts[i][1];
        sel.appendChild(o);
      }
      sel.value=(mem||r.val);
      sel.addEventListener("change",function(){ change(sel.value); });
      ligne.appendChild(sel);
    }
    else if(coul){
      var ic=document.createElement("input"); ic.type="color"; ic.value=coul;
      var tc=document.createElement("span"); tc.className=PFX_CL+"regl-val"; tc.textContent=coul;
      ic.addEventListener("input",function(){ tc.textContent=ic.value; change(ic.value); });
      ligne.appendChild(ic); ligne.appendChild(tc);
    }
    else if(b){
      var ir=document.createElement("input"); ir.type="range";
      ir.min=b.min; ir.max=b.max; ir.step=b.step; ir.value=b.v;
      var tr=document.createElement("span"); tr.className=PFX_CL+"regl-val";
      function dit(){
        var v=parseFloat(ir.value);
        if(b.rond && v>=b.max){ tr.textContent="tout rond"; return "999px"; }
        var t=(b.step<1)?v.toFixed(2).replace(/0$/,"").replace(/\.$/,""):String(Math.round(v));
        tr.textContent=b.unite?(t+" "+b.unite):t;
        return t+b.unite;
      }
      dit();
      ir.addEventListener("input",function(){ change(dit()); });
      ligne.appendChild(ir); ligne.appendChild(tr);
    }
    else {
      var it2=document.createElement("input"); it2.type="text"; it2.value=(mem||r.val);
      it2.addEventListener("change",function(){ change(it2.value.trim()); });
      ligne.appendChild(it2);
    }
    grille.appendChild(champ);
  }

  for(var k=0;k<liste.length;k++) pose(liste[k]);
  boite.appendChild(grille);

  var ret=document.createElement("button");
  ret.type="button"; ret.className=PFX_RESET; ret.textContent="Rétablir ce bloc";
  ret.addEventListener("click",function(){
    delete REGL[item.id]; gardeReglages();
    delete TXTS[item.id]; gardeTextes();
    delete ATTRS[item.id]; gardeAttrs(); majModifies();
    construitReglages(boite,item,stage);
    mount(stage,currentCode(item));
  });
  var pied=document.createElement("div"); pied.className=PFX_CL+"regl-pied";
  pied.appendChild(ret);
  boite.appendChild(pied);
}

var currentCodeAvantReglages=currentCode;
currentCode=function(item){ return appliqueTextes(appliqueAttrs(appliqueReglages(currentCodeAvantReglages(item),item.id),item.id),item.id); };

function ajouteDemande(champ,phrase){
  var v=champ.value.replace(/\s+$/,"");
  if(v.indexOf(phrase)>=0){ champ.focus(); return; }
  champ.value = v ? v+"\n"+phrase : phrase;
  champ.focus();
  try{ champ.setSelectionRange(champ.value.length,champ.value.length); }catch(e){}
  champ.dispatchEvent(new Event("input",{bubbles:true}));
}
function brancheSuggestions(boite,champ,item){
  boite.innerHTML="";
  var L=suggestions(item);
  for(var i=0;i<L.length;i++){(function(t,p){
    var b=document.createElement("button");
    b.type="button"; b.textContent=t; b.title=p;
    b.addEventListener("click",function(){ ajouteDemande(champ,p); });
    boite.appendChild(b);
  })(L[i][0],L[i][1]);}
}

/* ---- le micro : elle dicte sa demande au lieu de l’écrire ---- */
function brancheMicro(bouton,champ,dire){
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR || !bouton){ if(bouton) bouton.hidden=true; return; }
  bouton.hidden=false;
  var rec=null, actif=false;
  bouton.addEventListener("click",function(){
    if(actif && rec){ rec.stop(); return; }
    try{ rec=new SR(); }catch(e){ bouton.hidden=true; return; }
    rec.lang="fr-FR"; rec.interimResults=true; rec.continuous=true;
    var depart=champ.value.replace(/\s+$/,""), dit="";
    rec.onstart=function(){
      actif=true; bouton.className="kwb-micro ecoute"; bouton.setAttribute("aria-pressed","true");
      if(dire) dire("Je t’écoute… parle, puis reclique sur le micro.");
    };
    rec.onresult=function(e){
      var fini="", cours="";
      for(var i=e.resultIndex;i<e.results.length;i++){
        if(e.results[i].isFinal) fini+=e.results[i][0].transcript;
        else cours+=e.results[i][0].transcript;
      }
      if(fini) dit+=fini;
      var t=(dit+" "+cours).replace(/\s+/g," ").trim();
      champ.value = depart ? depart+(t?"\n"+t:"") : t;
      champ.dispatchEvent(new Event("input",{bubbles:true}));
    };
    rec.onerror=function(e){
      actif=false; bouton.className="kwb-micro"; bouton.setAttribute("aria-pressed","false");
      if(dire) dire((e.error==="not-allowed"||e.error==="service-not-allowed")
        ? "Le micro est bloqué : autorise le microphone pour ce site, puis réessaie."
        : "Je n’ai rien entendu. Reclique sur le micro et parle un peu plus fort.");
    };
    rec.onend=function(){
      actif=false; bouton.className="kwb-micro"; bouton.setAttribute("aria-pressed","false");
      if(dire) dire(champ.value.trim()?"C’est écrit : relis et corrige si besoin.":"");
      champ.focus();
    };
    try{ rec.start(); }catch(e){}
  });
}
var UNI=false;

/* ---- le panneau de personnalisation, en haut avec les autres réglages ---- */
var PERSO=(function(){
  var ouvert=null, boite=null, nom=null, sugg=null, dem=null, etat=null, go=null;
  function construit(){
    var barre=document.querySelector("#koweb-bibliotheque .kwb-barre");
    if(!barre) return null;
    boite=document.createElement("div");
    boite.className="kwb-perso-haut"; boite.id="kwb-perso-haut"; boite.hidden=true;

    var tete=document.createElement("div"); tete.className="kwb-perso-tete";
    var quoi=document.createElement("p"); quoi.className="kwb-perso-quoi";
    quoi.textContent="Tu demandes à l’assistant pour";
    nom=document.createElement("strong"); nom.className="kwb-perso-nom";
    quoi.appendChild(nom);
    var ferme=document.createElement("button");
    ferme.type="button"; ferme.className="kwb-reset"; ferme.textContent="Fermer";
    ferme.addEventListener("click",function(){ boite.hidden=true; ouvert=null; });
    tete.appendChild(quoi); tete.appendChild(ferme);

    var lab=document.createElement("label"); lab.textContent="Ta demande";
    lab.setAttribute("for","kwb-perso-dem");
    var aide=document.createElement("p"); aide.className="kwb-sugg-aide";
    aide.textContent="Dis ce que tu veux voir, pas comment le coder. Une phrase suffit \u2014 clique ci-dessous, c\u2019est \u00e9crit pour toi.";
    sugg=document.createElement("div"); sugg.className="kwb-sugg";
    var champ=document.createElement("div"); champ.className="kwb-dem-boite";
    dem=document.createElement("textarea"); dem.id="kwb-perso-dem";
    dem.placeholder="Par exemple : change le prix avec 497 \u20ac, mets le titre \u00ab Rentr\u00e9e des coachs \u00bb et mon lien https://monsite.systeme.io/commande";
    var micro=document.createElement("button");
    micro.type="button"; micro.className="kwb-micro"; micro.hidden=true;
    micro.title="Dicter ta demande"; micro.setAttribute("aria-label","Dicter ta demande");
    micro.setAttribute("aria-pressed","false");
    micro.innerHTML="<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><rect x='9' y='3' width='6' height='11' rx='3'></rect><path d='M5 11a7 7 0 0 0 14 0'></path><line x1='12' y1='18' x2='12' y2='21'></line><line x1='8.5' y1='21' x2='15.5' y2='21'></line></svg>";
    champ.appendChild(dem); champ.appendChild(micro);

    var info=document.createElement("div"); info.className="kwb-info";
    info.innerHTML="<p class=\"kwb-info-titre\">Bon \u00e0 savoir avant de cliquer</p>"+
      "<p>Claude s\u2019ouvre dans un nouvel onglet, avec ta demande d\u00e9j\u00e0 \u00e9crite : tu n\u2019as plus qu\u2019\u00e0 cliquer sur <strong>Envoyer</strong>.</p>"+
      "<p><strong>Un message rouge s\u2019affiche au-dessus : c\u2019est normal.</strong> Claude le montre pour tous les messages pr\u00e9par\u00e9s \u00e0 l\u2019avance. Tu peux envoyer sans crainte.</p>"+
      "<p class=\"kwb-info-petit\">Le message est vide ? Colle-le avec Ctrl + V, il est d\u00e9j\u00e0 copi\u00e9.</p>";

    go=document.createElement("a");
    go.className="btn btn-primary kwb-go"; go.textContent="Ouvrir "+nomAssistant()+" avec ma demande";
    go.href="https://claude.ai/new"; go.target="_blank"; go.rel="noopener";
    BOUTONS_GO.push(go);
    var copc=document.createElement("button");
    copc.type="button"; copc.className="btn btn-ghost"; copc.textContent="Copier la consigne";
    etat=document.createElement("span"); etat.className="kwb-etat";
    var ligne=document.createElement("div"); ligne.className="kwb-perso-actions";
    ligne.appendChild(go); ligne.appendChild(copc); ligne.appendChild(etat);

    copc.addEventListener("click",function(){
      var d=dem.value.trim();
      if(!ouvert) return;
      if(!d){ etat.textContent="\u00c9cris d\u2019abord ce que tu veux changer."; dem.focus(); return; }
      copieSecours(messageClaude(ouvert,d));
      copc.textContent="Consigne copi\u00e9e !";
      setTimeout(function(){ copc.textContent="Copier la consigne"; },1800);
      etat.textContent="Colle-la dans l\u2019outil de ton choix.";
    });
    go.addEventListener("click",function(e){
      var d=dem.value.trim();
      if(!ouvert){ e.preventDefault(); return; }
      if(!d){ e.preventDefault(); etat.textContent="\u00c9cris d\u2019abord ce que tu veux changer."; dem.focus(); return; }
      go.href=lienClaude(ouvert,d);
      copieSecours(messageClaude(ouvert,d));
      etat.textContent=nomAssistant()+" s\u2019ouvre dans un nouvel onglet : clique sur Envoyer.";
    });

    boite.appendChild(tete); boite.appendChild(lab); boite.appendChild(aide);
    boite.appendChild(sugg); boite.appendChild(champ); boite.appendChild(info); boite.appendChild(ligne);
    barre.parentNode.insertBefore(boite,barre);
    brancheMicro(micro,dem,function(m){ etat.textContent=m; });
    return boite;
  }
  return {
    ouvre:function(item){
      if(!boite && !construit()) return;
      if(ouvert!==item){ dem.value=""; etat.textContent=""; }
      ouvert=item;
      nom.textContent=item.name;
      brancheSuggestions(sugg,dem,item);
      boite.hidden=false;
      try{ boite.scrollIntoView({behavior:"smooth",block:"start"}); }
      catch(e){ boite.scrollIntoView(); }
      setTimeout(function(){ dem.focus(); },350);
    }
  };
})();

/* ---- les blocs qu’elle a déjà modifiés ---- */
var MODS=[];
function estModifie(id){
  function plein(o){ for(var k in o){ if(Object.prototype.hasOwnProperty.call(o,k)) return true; } return false; }
  return !!((REGL[id]&&plein(REGL[id]))||(TXTS[id]&&plein(TXTS[id]))||(ATTRS[id]&&plein(ATTRS[id])));
}
function majModifies(){
  for(var i=0;i<MODS.length;i++) MODS[i].el.hidden=!estModifie(MODS[i].id);
  if(FILTRE==="modifies") filtre();
}
function buildCard(item){
  var card=document.createElement("article");
  card.className="card";

  var head=document.createElement("div");
  head.className="card-head";
  var htxt=document.createElement("div");
  var h3=document.createElement("h3"); h3.textContent=item.name;
  var p=document.createElement("p"); p.textContent=item.desc;
  htxt.appendChild(h3); htxt.appendChild(p);
  var tags=document.createElement("div"); tags.className="card-tags";
  if(NOUVEAUX[item.id]){
    var nf=document.createElement("span"); nf.className="pastille-neuf"; nf.textContent="Nouveau";
    tags.appendChild(nf);
  }
  var modif=document.createElement("span");
  modif.className="pastille-mod"; modif.textContent="Modifié";
  modif.title="Tu as déjà réglé ce bloc : il garde tes changements";
  modif.hidden=!estModifie(item.id);
  MODS.push({id:item.id,el:modif});
  tags.appendChild(modif);
  var tag=document.createElement("span"); tag.className="tag"; tag.textContent=item.tag;
  tags.appendChild(tag);
  var coeur=document.createElement("button");
  coeur.type="button"; coeur.className="coeur"; coeur.title="Mettre dans mes favoris";
  coeur.setAttribute("aria-label","Mettre dans mes favoris");
  function majCoeur(){
    coeur.textContent=FAVORIS[item.id]?"\u2665":"\u2661";
    coeur.setAttribute("aria-pressed",FAVORIS[item.id]?"true":"false");
  }
  coeur.addEventListener("click",function(){
    FAVORIS[item.id]=FAVORIS[item.id]?0:1;
    majCoeur(); enregistreFavoris();
    if(FILTRE==="favoris") filtre();
  });
  majCoeur();
  tags.appendChild(coeur);
  head.appendChild(htxt); head.appendChild(tags);

  var stage=document.createElement("div");
  stage.addEventListener("click",function(){ stage.__touche=Date.now(); });
  stage.className="stage"+(DARK_STAGE[item.id]?" dark":"")+(TALL_STAGE[item.id]?" tall":"");

  var foot=document.createElement("div");
  foot.className="card-foot";
  var copy=document.createElement("button");
  copy.type="button"; copy.className="btn btn-primary"; copy.textContent="Copier le code";
  /* chaque carte peut passer son propre aperçu en mobile */
  var vue=document.createElement("button");
  vue.type="button"; vue.className="btn btn-ghost";
  function nomVue(){ vue.textContent=((stage.__vue||VUE)==="mobile")?"Ordinateur":"Mobile"; }
  vue.addEventListener("click",function(){
    stage.__vue=((stage.__vue||VUE)==="mobile")?"ordi":"mobile";
    nomVue();
    mount(stage,currentCode(item));
  });
  /* les réglages du bloc, en direct */
  var regl=document.createElement("div");
  regl.className=PFX_CL+"regl"; regl.hidden=true;
  var btnR=document.createElement("button");
  btnR.type="button"; btnR.className="btn btn-ghost"; btnR.textContent="Personnaliser";
  btnR.title="Changer les textes, les couleurs, les angles et les tailles toi-même";
  btnR.setAttribute("aria-expanded","false");
  var faitR=false;
  btnR.addEventListener("click",function(){
    if(!faitR){ construitReglages(regl,item,stage); faitR=true; }
    regl.hidden=!regl.hidden;
    btnR.setAttribute("aria-expanded",regl.hidden?"false":"true");
  });
  /* l’effet se rejoue quand elle le demande, pas tout seul */
  var bcl=document.createElement("button");
  bcl.type="button"; bcl.className="btn btn-ghost";
  bcl.textContent="Voir l’effet";
  bcl.title="Rejoue l’animation de ce bloc";
  bcl.hidden=!animable(item);
  bcl.addEventListener("click",function(){ mount(stage,currentCode(item)); });
  var ai=document.createElement("button");
  ai.type="button"; ai.className="btn btn-ai"; ai.textContent="Je demande à l’assistant";
  ai.title="Pour ce qu’un réglage ne sait pas faire : ajouter une ligne, changer la mise en page";
  ai.hidden=false;
  /* l’ordre : je le fais moi-même, puis l’assistant, puis les aperçus, puis le code */
  foot.appendChild(btnR); foot.appendChild(ai); foot.appendChild(bcl);
  foot.appendChild(vue); foot.appendChild(copy);

  ai.addEventListener("click",function(){ PERSO.ouvre(item); });

  var pre=document.createElement("pre");
  pre.className="code"; pre.hidden=true;

  card.appendChild(head); card.appendChild(stage); card.appendChild(foot); card.appendChild(regl); card.appendChild(pre);

  copy.addEventListener("click",function(){
    var txt=currentCode(item);
    var done=function(){
      copy.textContent="Copié !";
      setTimeout(function(){copy.textContent="Copier le code";},1600);
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(done,function(){fallback(txt,copy,pre);});
    } else { fallback(txt,copy,pre); }
  });

  nomVue();
  return {card:card, stage:stage, pre:pre, item:item, nomVue:nomVue};
}

function montreCode(pre,code){
  var lignes=code.split("\n"), html="";
  for(var i=0;i<lignes.length;i++){
    var L=lignes[i]
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    html += /ICI\s*:/.test(lignes[i]) ? '<span class="ici">'+L+'</span>' : L;
    if(i<lignes.length-1) html+="\n";
  }
  pre.innerHTML=html;
}

function fallback(txt,btn,pre){
  var ta=document.createElement("textarea");
  ta.value=txt; ta.style.position="fixed"; ta.style.opacity="0";
  document.body.appendChild(ta); ta.select();
  var ok=false;
  try{ ok=document.execCommand("copy"); }catch(e){}
  document.body.removeChild(ta);
  if(ok){
    btn.textContent="Copié !";
    setTimeout(function(){btn.textContent="Copier le code";},1600);
  } else {
    pre.hidden=false; montreCode(pre,txt);
    btn.textContent="Sélectionne le code";
    setTimeout(function(){btn.textContent="Copier le code";},2600);
  }
}

var VUE="ordi";
/* Aperçu mobile : le bloc est rendu dans un écran de 375 px,
   pour que ses propres règles mobiles s’appliquent vraiment. */
function monteMobile(stage,code){
  stage.classList.add("mobile");
  var box=document.createElement("div"); box.className="telbox";
  var tel=document.createElement("div"); tel.className="tel";
  var f=document.createElement("iframe");
  f.setAttribute("title","Aper\u00e7u mobile");
  f.setAttribute("scrolling","no");
  f.srcdoc='<!doctype html><html><head><meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width,initial-scale=1">'+
    '<style>html,body{margin:0;padding:0;background:#fff;overflow-x:hidden}</style>'+
    '</head><body>'+code+'</body></html>';
  tel.appendChild(f); box.appendChild(tel); stage.appendChild(box);
  function cale(){
    var dispo=Math.max(120,stage.clientWidth-24);
    var z=Math.min(1,dispo/411);
    tel.style.transform=(z<1)?"scale("+z+")":"none";
    tel.style.marginLeft=Math.max(0,Math.round((stage.clientWidth-411*z)/2))+"px";
    var h=320;
    try{ h=f.contentDocument.body.scrollHeight; }catch(e){}
    /* un bloc plus haut que l\u2019écran du t\u00e9l\u00e9phone devient d\u00e9filable, comme en vrai */
    f.setAttribute("scrolling",(h>720)?"auto":"no");
    h=Math.min(720,Math.max(160,h));
    f.style.height=h+"px";
    box.style.height=Math.round((h+94)*z)+"px";
  }
  f.addEventListener("load",function(){ cale(); setTimeout(cale,300); setTimeout(cale,900); });
  window.addEventListener("resize",cale);
}
function mount(stage,code){
  stage.innerHTML="";
  if((stage.__vue||VUE)==="mobile"){ monteMobile(stage,code); return; }
  stage.classList.remove("mobile");
  var tpl=document.createElement("template");
  tpl.innerHTML=code;
  var frag=tpl.content;
  var scripts=frag.querySelectorAll("script");
  for(var i=0;i<scripts.length;i++){
    var s=document.createElement("script");
    s.textContent=scripts[i].textContent;
    scripts[i].parentNode.replaceChild(s,scripts[i]);
  }
  stage.appendChild(frag);
  isoler(stage);
}
/* Les aperçus gardent leurs propres réglages, même si le même bloc
   est aussi collé ailleurs sur la page (et inversement). */
function prefixer(sel){
  return sel.split(",").map(function(p){
    p=p.trim();
    if(!p) return p;
    if(/^(:root|html|body)$/i.test(p)) return "#koweb-bibliotheque .stage";
    return "#koweb-bibliotheque .stage "+p.replace(/^(:root|html|body)\s+/i,"");
  }).join(", ");
}
function isolerRegles(regles){
  for(var i=0;i<regles.length;i++){
    var r=regles[i];
    if(r.selectorText!==undefined && r.style){
      try{ r.selectorText=prefixer(r.selectorText); }catch(e){}
    } else if(r.cssRules && !(r.type===7)){
      isolerRegles(r.cssRules);
    }
  }
}
function isoler(stage){
  var styles=stage.querySelectorAll("style");
  for(var i=0;i<styles.length;i++){
    try{ if(styles[i].sheet) isolerRegles(styles[i].sheet.cssRules); }catch(e){}
  }
}

var CARDS=[];
var SEL_SECTIONS="#koweb-bibliotheque section";
var ID_VIDE="kwb-rien-trouve";

/* ============ Étapes de tunnel, favoris et nouveautés ============ */
var ETAPES={
  titrecomplet:"vente capture", titremot:"vente capture", titreligne:"vente capture", surligne:"vente capture",
  halo:"vente capture paiement", magnet:"vente capture", shine:"vente capture", state:"paiement vente",
  ring:"vente", ghost:"vente", reassure:"vente paiement", flip:"vente capture",
  countdown:"vente capture", timer:"vente capture", gauge:"vente", marquee:"vente",
  announce:"vente capture", progress:"vente",
  voletsvisuel:"vente", timeline:"vente", modules:"vente membres", compare:"vente paiement", benefices:"vente capture",
  avantapres2:"vente", bonus:"vente paiement", recois:"vente",
  avisdefile:"vente capture", message:"vente", compteur:"vente capture", note:"vente", etoiles:"vente capture paiement",
  sansspam:"capture", logos:"vente capture", citationfort:"vente",
  suivez:"merci membres", picto:"merci vente",
  paliers:"vente paiement", bundle:"vente", codepromo:"paiement vente", ruban:"vente capture", rubansimple:"vente capture",
  etapes:"paiement", garantie:"paiement vente", reassurance:"paiement", apres:"paiement merci", faqfin:"paiement vente",
  confirm:"merci", etapeuk:"merci", agenda:"merci", antispam:"merci capture"
};
var NOUVEAUX={
  titrecomplet:1, titremot:1, titreligne:1, surligne:1, voletsvisuel:1,
  avantapres2:1, bonus:1, recois:1,
  avisdefile:1, message:1, compteur:1, note:1, etoiles:1,
  sansspam:1, logos:1, citationfort:1
};
function garderMemoire(cle,valeur){
  try{ localStorage.setItem("kwb-"+cle,valeur); }catch(e){}
}
function litMemoire(cle){
  try{ return localStorage.getItem("kwb-"+cle); }catch(e){ return null; }
}
var FAVORIS={};
(function(){
  var m=litMemoire("favoris");
  if(!m)return;
  var l=m.split(",");
  for(var i=0;i<l.length;i++){ if(l[i]) FAVORIS[l[i]]=1; }
})();
function enregistreFavoris(){
  var l=[]; for(var k in FAVORIS){ if(FAVORIS[k]) l.push(k); }
  garderMemoire("favoris",l.join(","));
}
var FILTRE="tous", RECHERCHE="";
/* ============ Chercher par intention ============
   « rassurer », « urgence », « témoignages »… : chaque bloc porte
   les mots de ce qu’il sert à faire, en plus de son nom. */
var INTENTIONS=[
  {l:"rassurer", m:"rassurer rassurance confiance peur doute risque garantie garantir securite sécurité serieux sérieux",
   b:"reassure garantie reassurance sansspam antispam logos faqfin note etoiles avisdefile message citationfort"},
  {l:"créer l’urgence", m:"urgence urgent rarete rareté dernier derniers jours fermeture ferme rebours pression limite places compte",
   b:"countdown timer gauge announce ruban rubansimple marquee paliers codepromo"},
  {l:"des témoignages", m:"temoignage témoignage temoignages témoignages avis clientes retours parole",
   b:"avisdefile message note etoiles citationfort"},
  {l:"montrer les résultats", m:"resultat résultats resultats preuve preuves chiffres avant apres après transformation",
   b:"avantapres2 compteur note benefices avisdefile message"},
  {l:"montrer le programme", m:"programme contenu modules deroule déroulé parcours sommaire semaines cours formation lecons leçons",
   b:"modules timeline recois voletsvisuel benefices"},
  {l:"présenter le prix", m:"prix tarif tarifs formule formules palier paliers comparer comparatif paiement payer",
   b:"paliers bundle compare flip garantie"},
  {l:"mettre en avant une promo", m:"promo promotion reduction réduction remise code offre speciale spéciale soldes",
   b:"codepromo ruban rubansimple paliers bundle announce marquee"},
  {l:"montrer les bonus", m:"bonus cadeau cadeaux offert valeur valeurs supplement supplément inclus",
   b:"bonus recois bundle paliers"},
  {l:"faire cliquer", m:"bouton boutons cliquer clic action cta appel inscrire acheter commander",
   b:"halo magnet shine state ring ghost reassure flip etapeuk"},
  {l:"répondre aux objections", m:"objection objections question questions faq hesitation hésitation frein doute",
   b:"faqfin garantie reassurance compare reassure antispam"},
  {l:"capter des e-mails", m:"inscription inscrire capture capter email e-mail mail liste spam gratuit lead telechargement téléchargement",
   b:"sansspam antispam etoiles logos titrecomplet halo recois"},
  {l:"accrocher l’œil", m:"accroche titre titres attention oeil œil wow mouvement animation animer entree entrée promesse",
   b:"titrecomplet titremot titreligne surligne marquee progress"},
  {l:"donner rendez-vous", m:"rendez-vous rendez vous date agenda calendrier direct live webinaire heure",
   b:"agenda countdown timer etapeuk apres"},
  {l:"remercier", m:"merci remerciement remercier apres après achat commande confirmation bienvenue suite",
   b:"confirm apres agenda etapeuk suivez picto"},
  {l:"mes réseaux", m:"reseaux réseaux social sociaux instagram facebook youtube abonner suivre communaute communauté",
   b:"suivez picto logos"}
];
var MOTS=(function(){
  var m={};
  for(var i=0;i<INTENTIONS.length;i++){
    var ids=INTENTIONS[i].b.split(" ");
    for(var j=0;j<ids.length;j++){
      if(!ids[j])continue;
      m[ids[j]]=(m[ids[j]]||"")+" "+INTENTIONS[i].m+" "+INTENTIONS[i].l;
    }
  }
  return m;
})();

function filtre(){
  var vus=0;
  for(var i=0;i<CARDS.length;i++){
    var o=CARDS[i], it=o.item;
    var tags=(ETAPES[it.id]||"")+" "+it.id;
    var okEtape = (FILTRE==="tous") ||
      (FILTRE==="favoris" ? !!FAVORIS[it.id] :
      (FILTRE==="modifies" ? estModifie(it.id) : tags.indexOf(FILTRE)>-1));
    var texte=(it.name+" "+it.desc+" "+tags+" "+(MOTS[it.id]||"")).toLowerCase();
    var okMot = !RECHERCHE || texte.indexOf(RECHERCHE)>-1;
    var montre = okEtape && okMot;
    o.card.hidden=!montre;
    if(montre) vus++;
  }
  /* sections vides masquées, compteurs recalculés */
  var secs=document.querySelectorAll(SEL_SECTIONS);
  for(var s=0;s<secs.length;s++){
    var grille=secs[s].querySelector(".grid");
    if(!grille) continue;
    var n=0, enfants=grille.children;
    for(var k=0;k<enfants.length;k++){ if(!enfants[k].hidden) n++; }
    secs[s].hidden=!n;
    var sp=secs[s].querySelector(".section-head span");
    if(sp) sp.textContent = n + (n>1?" blocs":" bloc");
  }
  var vide=document.getElementById(ID_VIDE);
  if(vide) vide.hidden = vus>0;
}

/* ============ Dernière mise à jour et nouveautés ============
   Pour ajouter une ligne : copie une ligne ci-dessous, change la date
   et le texte, et mets-la en premier. */
var ID_MAJ="kwb-maj", ID_NEWS="kwb-news";
var MAJ="7 octobre 2026";
var NOUVEAUTES=[
  {d:"7 octobre 2026", t:"Le lien, les dates, les images et les prix se changent aussi dans « Personnaliser » : sélecteur de date compris."},
  {d:"7 octobre 2026", t:"Les blocs réglés gardent tes changements et portent la pastille « Modifié ». Le filtre « Mes blocs réglés » les retrouve."},
  {d:"7 octobre 2026", t:"Sauvegarde de tes réglages : un code à copier, à remettre sur un autre ordinateur."},
  {d:"7 octobre 2026", t:"Les textes se changent dans « Réglages » : majuscules, minuscules, gras, prix — sans passer par l’assistant."},
  {d:"7 octobre 2026", t:"Réglages en direct dans chaque bloc : couleurs, angles, tailles et vitesses se changent sans passer par l’assistant."},
  {d:"7 octobre 2026", t:"Recherche par intention : rassurer, créer l’urgence, montrer le programme, répondre aux objections…"},
  {d:"7 octobre 2026", t:"« Voir l’effet » dans chaque carte : plus rien ne s’anime tout seul, les aperçus sont au calme."},
  {d:"7 octobre 2026", t:"Panneau « Tu personnalises » en haut, avec les éléments du bloc choisi et le micro pour dicter sa demande."},
  {d:"7 octobre 2026", t:"Trois polices au choix : titres, sur-titres et sous-titres, textes et boutons."}
];
(function(){
  var p=document.getElementById(ID_MAJ), boite=document.getElementById(ID_NEWS);
  if(!p||!boite)return;
  p.appendChild(document.createTextNode("Dernière mise à jour : "+MAJ+" · "));
  var b=document.createElement("button");
  b.type="button"; b.textContent="Nouveautés"; b.setAttribute("aria-expanded","false");
  p.appendChild(b);
  var ul=document.createElement("ul");
  for(var i=0;i<NOUVEAUTES.length;i++){
    var li=document.createElement("li");
    var s=document.createElement("span"); s.className="kwb-news-date"; s.textContent=NOUVEAUTES[i].d;
    li.appendChild(s); li.appendChild(document.createTextNode(" — "+NOUVEAUTES[i].t));
    ul.appendChild(li);
  }
  boite.appendChild(ul);
  b.addEventListener("click",function(){
    boite.hidden=!boite.hidden;
    b.setAttribute("aria-expanded",boite.hidden?"false":"true");
  });
})();

/* ============ Voir l’effet à la demande ============
   Plus rien ne se rejoue tout seul : chaque carte a son bouton. */
function animable(it){ return /IntersectionObserver/.test(it.code); }

function render(){
  var gc=document.getElementById("kwb-grid-cta");
  var gb=document.getElementById("kwb-grid-ban");
  var go=document.getElementById("kwb-grid-con");
  var gtx=document.getElementById("kwb-grid-textes");
  var gs=document.getElementById("kwb-grid-soc");
  var gv=document.getElementById("kwb-grid-preuve");
  var gvn=document.getElementById("kwb-grid-vendre");
  var gpl=document.getElementById("kwb-grid-plus");
  var gp=document.getElementById("kwb-grid-pro");
  var gy=document.getElementById("kwb-grid-pay");
  var gm=document.getElementById("kwb-grid-mer");
  gc.innerHTML=""; gb.innerHTML=""; go.innerHTML=""; gtx.innerHTML=""; gs.innerHTML=""; gv.innerHTML=""; gvn.innerHTML=""; gpl.innerHTML=""; gp.innerHTML=""; gy.innerHTML=""; gm.innerHTML=""; CARDS=[];
  CTA.forEach(function(it){ var o=buildCard(it); gc.appendChild(o.card); CARDS.push(o); });
  BAN.forEach(function(it){ var o=buildCard(it); gb.appendChild(o.card); CARDS.push(o); });
  TEXTES.forEach(function(it){ var o=buildCard(it); gtx.appendChild(o.card); CARDS.push(o); });
  CONTENU.forEach(function(it){ var o=buildCard(it); go.appendChild(o.card); CARDS.push(o); });
  VENDRE.forEach(function(it){ var o=buildCard(it); gvn.appendChild(o.card); CARDS.push(o); });
  PLUS.forEach(function(it){ var o=buildCard(it); gpl.appendChild(o.card); CARDS.push(o); });
  PREUVE.forEach(function(it){ var o=buildCard(it); gv.appendChild(o.card); CARDS.push(o); });
  SOCIAL.forEach(function(it){ var o=buildCard(it); gs.appendChild(o.card); CARDS.push(o); });
  PROMO.forEach(function(it){ var o=buildCard(it); gp.appendChild(o.card); CARDS.push(o); });
  PAIEMENT.forEach(function(it){ var o=buildCard(it); gy.appendChild(o.card); CARDS.push(o); });
  MERCI.forEach(function(it){ var o=buildCard(it); gm.appendChild(o.card); CARDS.push(o); });
  CARDS.forEach(function(o){ mount(o.stage,currentCode(o.item)); });
}

function refreshColors(){
  CARDS.forEach(function(o){
    var code=currentCode(o.item);
    mount(o.stage,code);
    if(!o.pre.hidden) montreCode(o.pre,code);
  });
}

document.getElementById("kwb-c1").addEventListener("input",refreshColors);
document.getElementById("kwb-c2").addEventListener("input",refreshColors);
document.getElementById("kwb-reset").addEventListener("click",function(){
  document.getElementById("kwb-c1").value=D1;
  document.getElementById("kwb-c2").value=D2;
  setUni(false);
});
function setUni(v){
  UNI=v;
  garderMemoire("uni",v?"1":"0");
  document.getElementById("kwb-uni-on").setAttribute("aria-pressed",v?"true":"false");
  document.getElementById("kwb-uni-off").setAttribute("aria-pressed",v?"false":"true");
  refreshColors();
}
document.getElementById("kwb-uni-on").addEventListener("click",function(){ setUni(true); });
document.getElementById("kwb-uni-off").addEventListener("click",function(){ setUni(false); });

/* =========================================================
   Sélection affichée : uniquement les blocs présents sur la page
   agence-digitale-koweb.fr/bibliotheque-ia
   Pour réafficher un bloc, ajoute son identifiant ici.
   ========================================================= */
var GARDER = {
  halo:1, magnet:1, shine:1, state:1, ring:1, ghost:1, reassure:1, flip:1,
  countdown:1, timer:1, gauge:1, marquee:1, announce:1, progress:1,
  titrecomplet:1, titremot:1, titreligne:1, surligne:1,
  voletsvisuel:1, timeline:1, modules:1, compare:1, benefices:1,
  suivez:1, picto:1,
  paliers:1, bundle:1, codepromo:1, ruban:1, rubansimple:1,
  etapes:1, garantie:1, reassurance:1, apres:1, faqfin:1,
  confirm:1, etapeuk:1, agenda:1, antispam:1,
  avisdefile:1, message:1, compteur:1, note:1, etoiles:1,
  avantapres2:1, bonus:1, recois:1,
  sansspam:1, logos:1, citationfort:1
};
function garde(liste){ return liste.filter(function(b){ return GARDER[b.id]; }); }
HERO=garde(HERO); CTA=garde(CTA); BAN=garde(BAN); TEXTES=garde(TEXTES); CONTENU=garde(CONTENU);
VIDEO=garde(VIDEO); VENDRE=garde(VENDRE); PLUS=garde(PLUS); PREUVE=garde(PREUVE); SOCIAL=garde(SOCIAL); PROMO=garde(PROMO); PAIEMENT=garde(PAIEMENT); MERCI=garde(MERCI);

render();
filtre();

/* ---- choix de l’assistant, retenu d’une visite à l’autre ---- */
(function(){
  var bc=document.getElementById("kwb-as-claude"), bg=document.getElementById("kwb-as-chatgpt");
  function maj(){
    bc.setAttribute("aria-pressed",ASSISTANT==="claude"?"true":"false");
    bg.setAttribute("aria-pressed",ASSISTANT==="chatgpt"?"true":"false");
    for(var i=0;i<BOUTONS_GO.length;i++) BOUTONS_GO[i].textContent="Ouvrir "+nomAssistant()+" avec ma demande";
    var v=document.getElementById("kwb-verif-go");
    if(v) v.textContent="Faire vérifier par "+nomAssistant();
  }
  bc.addEventListener("click",function(){ ASSISTANT="claude"; garderMemoire("assistant","claude"); maj(); });
  bg.addEventListener("click",function(){ ASSISTANT="chatgpt"; garderMemoire("assistant","chatgpt"); maj(); });
  maj();
})();

/* ---- vérificateur de code ---- */
(function(){
  var ouvre=document.getElementById("kwb-verif-ouvre"), boite=document.getElementById("kwb-verif-boite");
  var txt=document.getElementById("kwb-verif-txt"), go=document.getElementById("kwb-verif-go");
  var etat=document.getElementById("kwb-verif-etat");
  if(!ouvre)return;
  ouvre.addEventListener("click",function(){
    boite.hidden=!boite.hidden;
    ouvre.textContent=boite.hidden?"Vérifier mon code":"Fermer";
    if(!boite.hidden) txt.focus();
  });
  go.addEventListener("click",function(e){
    var c=txt.value.trim();
    if(!c){ e.preventDefault(); etat.textContent="Colle d’abord ton code."; txt.focus(); return; }
    var msg=messageVerif(c);
    var q = msg.length<13500 ? msg : "J’ai copié un bloc de la bibliothèque Koweb à vérifier : je le colle juste en dessous.";
    go.href=baseAssistant()+encodeURIComponent(q);
    copieSecours(msg);
    etat.textContent=nomAssistant()+" s’ouvre dans un nouvel onglet : clique sur Envoyer.";
  });
})();

/* ---- les polices, retenues d’une visite à l’autre ---- */
(function(){
  var champs=[["titre","kwb-police-titre"],["sous","kwb-police-sous"],["texte","kwb-police-texte"]];
  function charge(nom){
    if(!nom)return;
    var id="kwb-police-chargee-"+nom.split(" ").join("-");
    if(document.getElementById(id))return;
    var l=document.createElement("link");
    l.id=id; l.rel="stylesheet";
    l.href="https://fonts.googleapis.com/css2?family="+nom.split(" ").join("+")+":wght@400;500;600;700;800&display=swap";
    document.head.appendChild(l);
  }
  function marque(cle,anime){
    var m=document.getElementById("kwb-enreg-"+cle);
    if(!m)return;
    if(!anime){ m.hidden=!POLICES[cle]; return; }
    m.hidden=false;
    m.className="enreg"; void m.offsetWidth; m.className="enreg flash";
    setTimeout(function(){ m.className="enreg"; if(!POLICES[cle]) m.hidden=true; },1500);
  }
  for(var i=0;i<champs.length;i++){(function(cle,id){
    var sel=document.getElementById(id);
    if(!sel)return;
    sel.value=POLICES[cle];
    charge(POLICES[cle]);
    marque(cle,false);
    sel.addEventListener("change",function(){
      POLICES[cle]=sel.value;
      garderMemoire("police-"+cle,sel.value);
      charge(sel.value);
      marque(cle,true);
      refreshColors();
    });
  })(champs[i][0],champs[i][1]);}
})();

var ID_SAUVE="kwb-bord-sauve";
/* ============ Sauvegarder et retrouver ses réglages ============
   Tout est gardé dans le navigateur. Ce code permet de tout
   remettre sur un autre ordinateur, ou après un nettoyage. */
var CLES_SAUVE=["c1","c2","uni","assistant","police-titre","police-sous","police-texte",
                "favoris","reglages","textes","attributs"];
function faitSauvegarde(){
  var o={};
  for(var i=0;i<CLES_SAUVE.length;i++){
    var v=litMemoire(CLES_SAUVE[i]);
    if(v!==null && v!==undefined && v!=="") o[CLES_SAUVE[i]]=v;
  }
  try{ return btoa(unescape(encodeURIComponent(JSON.stringify(o)))); }
  catch(e){ return JSON.stringify(o); }
}
function litSauvegarde(code){
  var t=String(code).replace(/\s+/g,"");
  var o=null;
  try{ o=JSON.parse(decodeURIComponent(escape(atob(t)))); }
  catch(e){ try{ o=JSON.parse(code); }catch(e2){ o=null; } }
  if(!o || typeof o!=="object") return false;
  for(var k in o){
    if(!Object.prototype.hasOwnProperty.call(o,k)) continue;
    for(var i=0;i<CLES_SAUVE.length;i++){ if(CLES_SAUVE[i]===k) garderMemoire(k,String(o[k])); }
  }
  return true;
}
(function(){
  var place=document.getElementById(ID_SAUVE);
  if(!place) return;
  var bs=document.createElement("button");
  bs.type="button"; bs.className=PFX_RESET; bs.textContent="Copier ma sauvegarde";
  var br=document.createElement("button");
  br.type="button"; br.className=PFX_RESET; br.textContent="Remettre une sauvegarde";
  var etat=document.createElement("span"); etat.className=PFX_CL+"bord-a";
  var boite=document.createElement("div"); boite.className=PFX_CL+"verif-boite"; boite.hidden=true;
  var lab=document.createElement("label"); lab.textContent="Colle ici ta sauvegarde";
  var zone=document.createElement("textarea");
  zone.placeholder="Colle le code que tu avais copié";
  var ok=document.createElement("button");
  ok.type="button"; ok.className="btn btn-primary"; ok.textContent="Tout remettre";
  var ligne=document.createElement("div"); ligne.className=PFX_CL+"perso-actions";
  ligne.appendChild(ok);
  boite.appendChild(lab); boite.appendChild(zone); boite.appendChild(ligne);

  bs.addEventListener("click",function(){
    copieSecours(faitSauvegarde());
    bs.textContent="Sauvegarde copiée !";
    etat.textContent="Colle-la dans un carnet ou un e-mail : elle remet tout en place plus tard.";
    setTimeout(function(){ bs.textContent="Copier ma sauvegarde"; },2200);
  });
  br.addEventListener("click",function(){
    boite.hidden=!boite.hidden;
    if(!boite.hidden) zone.focus();
  });
  ok.addEventListener("click",function(){
    if(!zone.value.trim()){ etat.textContent="Colle d’abord ta sauvegarde."; return; }
    if(litSauvegarde(zone.value)){
      etat.textContent="C’est remis. La page se recharge…";
      setTimeout(function(){ location.reload(); },700);
    } else etat.textContent="Ce code n’est pas lisible. Recopie-le en entier.";
  });
  place.appendChild(bs); place.appendChild(br); place.appendChild(etat);
  place.parentNode.parentNode.appendChild(boite);
})();

/* ---- le vérificateur prend sa place dans le tableau de bord ---- */
(function(){
  var place=document.getElementById("kwb-bord-verif"), b=document.getElementById("kwb-verif-ouvre");
  if(place && b) place.appendChild(b);
})();

/* ---- recherche et filtres ---- */
(function(){
  var ch=document.getElementById("kwb-recherche");
  if(ch) ch.addEventListener("input",function(){ RECHERCHE=ch.value.trim().toLowerCase(); filtre(); });
  var pEss=document.getElementById("kwb-essais");
  if(pEss){
    pEss.appendChild(document.createTextNode("Ou cherche ce que tu veux faire : "));
    for(var n=0;n<INTENTIONS.length;n++){
      if(n) pEss.appendChild(document.createTextNode(" \u00b7 "));
      var bt=document.createElement("button");
      bt.type="button"; bt.textContent=INTENTIONS[n].l;
      bt.setAttribute("data-mot",INTENTIONS[n].l);
      pEss.appendChild(bt);
    }
  }
  var ess=document.querySelectorAll("#koweb-bibliotheque .kwb-essais button");
  for(var e=0;e<ess.length;e++){(function(b){
    b.addEventListener("click",function(){
      var mot=b.getAttribute("data-mot");
      if(ch){ ch.value=mot; ch.focus(); }
      RECHERCHE=mot.toLowerCase(); filtre();
    });
  })(ess[e]);}
  var puces=RACINE.querySelectorAll(".kwb-puce");
  for(var i=0;i<puces.length;i++){(function(b){
    b.addEventListener("click",function(){
      FILTRE=b.getAttribute("data-etape");
      for(var k=0;k<puces.length;k++) puces[k].setAttribute("aria-pressed",puces[k]===b?"true":"false");
      filtre();
    });
  })(puces[i]);}
})();

/* ---- les couleurs sont retenues d’une visite à l’autre ---- */
(function(){
  var c1=litMemoire("c1"), c2=litMemoire("c2"), u=litMemoire("uni");
  if(c1) document.getElementById("kwb-c1").value=c1;
  if(c2) document.getElementById("kwb-c2").value=c2;
  document.getElementById("kwb-c1").addEventListener("input",function(){ garderMemoire("c1",this.value); });
  document.getElementById("kwb-c2").addEventListener("input",function(){ garderMemoire("c2",this.value); });
  if(u==="1") setUni(true); else if(c1||c2) refreshColors();
})();

  }
  if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded",demarrer); }
  else { demarrer(); }
})();
