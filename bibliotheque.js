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
    st.textContent="\n#koweb-bibliotheque{\n  --kw-fond:#F4F4FB;--kw-surface:#FFFFFF;--kw-surface-2:#F7F7FC;--kw-encre:#1B1E2B;\n  --kw-gris:#5E6272;--kw-ligne:#DCDCEA;--kw-ligne-2:#E9E9F3;--kw-accent:#6566D6;\n  --kw-accent-txt:#FFFFFF;--kw-sombre:#11141B;\n  --kw-ombre:0 1px 2px rgba(27,30,43,.05),0 12px 28px -18px rgba(27,30,43,.35);\n  display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;color:var(--kw-encre);line-height:1.6;\n  text-align:left;padding:8px 0 24px\n}\n#koweb-bibliotheque, #koweb-bibliotheque *{box-sizing:border-box}\n#koweb-bibliotheque .section-head h2, #koweb-bibliotheque .card-head h3, #koweb-bibliotheque .card-head p, #koweb-bibliotheque .kwb-panel h2, #koweb-bibliotheque .kwb-note p{margin:0;padding:0;text-transform:none;letter-spacing:normal}\n#koweb-bibliotheque .btn, #koweb-bibliotheque .kwb-reset{font-family:inherit;text-transform:none;letter-spacing:normal;\n  box-shadow:none;min-height:0;line-height:1}\n#koweb-bibliotheque .kwb-panel{background:var(--kw-surface);border:1px solid var(--kw-ligne);\n  border-radius:14px;padding:18px 20px;box-shadow:var(--kw-ombre);\n  display:flex;flex-wrap:wrap;gap:20px;align-items:center}\n#koweb-bibliotheque .kwb-panel h2{font-size:17px;font-weight:700;color:var(--kw-encre);\n  flex:1 1 220px;line-height:1.35}\n#koweb-bibliotheque .kwb-panel h2 small{display:block;font-weight:400;font-size:14px;color:var(--kw-gris)}\n#koweb-bibliotheque .kwb-swatch{display:flex;align-items:center;gap:10px}\n#koweb-bibliotheque .kwb-swatch label{font-size:14px;color:var(--kw-gris);font-weight:600;margin:0}\n#koweb-bibliotheque .kwb-swatch input[type=color]{width:44px;height:36px;padding:0;margin:0;\n  border:1px solid var(--kw-ligne);border-radius:9px;background:var(--kw-surface);cursor:pointer}\n#koweb-bibliotheque .kwb-reset{border:1px solid var(--kw-ligne);background:var(--kw-surface-2);\n  color:var(--kw-gris);font-size:14px;font-weight:600;padding:10px 14px;\n  border-radius:9px;cursor:pointer}\n#koweb-bibliotheque .kwb-reset:hover{color:var(--kw-encre);border-color:var(--kw-gris)}\n#koweb-bibliotheque .section-head{margin:48px 0 20px;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}\n#koweb-bibliotheque .section-head h2{font-size:26px;font-weight:800;color:var(--kw-encre);line-height:1.2}\n#koweb-bibliotheque .section-head span{font-size:14px;color:var(--kw-gris)}\n#koweb-bibliotheque .rule{height:1px;background:var(--kw-ligne);flex:1 1 60px;min-width:40px}\n#koweb-bibliotheque .grid{display:grid;gap:18px}\n#koweb-bibliotheque .grid.two{grid-template-columns:repeat(auto-fit,minmax(min(330px,100%),1fr))}\n#koweb-bibliotheque .card{min-width:0;background:var(--kw-surface);border:1px solid var(--kw-ligne);\n  border-radius:14px;overflow:hidden;box-shadow:var(--kw-ombre);\n  display:flex;flex-direction:column}\n#koweb-bibliotheque .card-head{padding:16px 18px 12px;display:flex;gap:12px;align-items:flex-start}\n#koweb-bibliotheque .card-head h3{font-size:18px;font-weight:700;color:var(--kw-encre);\n  margin:0 0 4px;line-height:1.25}\n#koweb-bibliotheque .card-head p{font-size:14.5px;color:var(--kw-gris);line-height:1.5}\n#koweb-bibliotheque .tag{flex:none;font:600 11px/1 ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;\n  letter-spacing:.04em;color:var(--kw-gris);background:var(--kw-surface-2);\n  border:1px solid var(--kw-ligne-2);padding:5px 8px;border-radius:6px;margin-top:2px}\n#koweb-bibliotheque .stage{border-top:1px solid var(--kw-ligne-2);border-bottom:1px solid var(--kw-ligne-2);\n  background:var(--kw-surface-2);transform:translateZ(0);position:relative;\n  overflow:hidden;min-height:130px;display:flex;flex-direction:column;justify-content:center}\n#koweb-bibliotheque .stage > *{min-width:0;max-width:100%}\n#koweb-bibliotheque .stage.dark{background:var(--kw-sombre)}\n#koweb-bibliotheque .stage.tall{min-height:210px}\n#koweb-bibliotheque .card-foot{padding:10px 12px;display:flex;gap:6px;flex-wrap:wrap;align-items:center}\n#koweb-bibliotheque .btn{font-size:13px;font-weight:700;border-radius:8px;padding:7px 10px;white-space:nowrap;line-height:1.2;cursor:pointer;\n  border:1px solid transparent;transition:background .15s,border-color .15s,color .15s}\n#koweb-bibliotheque .btn-primary{background:var(--kw-accent);color:var(--kw-accent-txt)}\n#koweb-bibliotheque .btn-primary:hover{filter:brightness(1.08)}\n#koweb-bibliotheque .btn-ghost{background:transparent;color:var(--kw-gris);border-color:var(--kw-ligne)}\n#koweb-bibliotheque .btn-ghost:hover{color:var(--kw-encre);border-color:var(--kw-gris)}\n#koweb-bibliotheque .btn-ai{background:transparent;color:var(--kw-accent);border-color:var(--kw-accent)}\n#koweb-bibliotheque .btn-ai:hover{background:var(--kw-accent);color:var(--kw-accent-txt)}\n#koweb-bibliotheque [hidden]{display:none!important}\n#koweb-bibliotheque pre.code{margin:0;border:0;border-top:1px solid var(--kw-ligne-2);border-radius:0;\n  background:var(--kw-surface-2);padding:16px;overflow-x:auto;\n  font-family:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;\n  font-size:12.5px;line-height:1.65;color:var(--kw-encre);white-space:pre;\n  tab-size:2;max-height:420px}\n#koweb-bibliotheque pre.code .ici{display:inline-block;width:100%;color:#B3261E;font-weight:600;\n  background:rgba(179,38,30,.08)}\n#koweb-bibliotheque .kwb-note{margin-top:48px;padding-top:20px;border-top:1px solid var(--kw-ligne);\n  color:var(--kw-gris);font-size:14.5px}\n#koweb-bibliotheque .kwb-note p{margin:0 0 8px;max-width:72ch}\n#koweb-bibliotheque .kwb-note code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.92em}\n@media (max-width:520px){ #koweb-bibliotheque .kwb-panel{gap:14px} }\n";
    document.head.appendChild(st);
    RACINE.innerHTML="<div class=\"kwb-panel\"><h2>Teste tes couleurs<small>Les aperçus et le code copié se mettent à jour en direct.</small></h2><div class=\"kwb-swatch\"><label for=\"kwb-c1\">Principale</label><input type=\"color\" id=\"kwb-c1\" value=\"#7D7EE1\"></div><div class=\"kwb-swatch\"><label for=\"kwb-c2\">Lumineuse</label><input type=\"color\" id=\"kwb-c2\" value=\"#C6BCFF\"></div><button class=\"kwb-reset\" id=\"kwb-reset\" type=\"button\">Rétablir</button></div><section><div class=\"section-head\"><h2>Sections héro</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-hero\"></div></section><section><div class=\"section-head\"><h2>Boutons &amp; appels à l'action</h2><span></span><div class=\"rule\"></div></div><div class=\"grid two\" id=\"kwb-grid-cta\"></div></section><section><div class=\"section-head\"><h2>Bannières &amp; barres</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-ban\"></div></section><section><div class=\"section-head\"><h2>Blocs de contenu</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-con\"></div></section><section><div class=\"section-head\"><h2>Blocs sociaux</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-soc\"></div></section><section><div class=\"section-head\"><h2>Blocs promo</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-pro\"></div></section><section><div class=\"section-head\"><h2>Page de paiement</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-pay\"></div></section><section><div class=\"section-head\"><h2>Page de remerciement</h2><span></span><div class=\"rule\"></div></div><div class=\"grid\" id=\"kwb-grid-mer\"></div></section><div class=\"kwb-note\"><p><strong>Un seul bloc se superpose au contenu</strong> : la progression de lecture, un filet collé en haut de l’écran. Il reste dans le flux dans l’éditeur Système.io, sinon il recouvrirait le bouton Enregistrer.</p><p>Si tu insères deux fois le même bloc sur une page, garde un seul exemplaire de son <code>&lt;style&gt;</code> et de son <code>&lt;script&gt;</code>.</p></div>";
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
'  background:linear-gradient(110deg,var(--c1),var(--c2d),var(--c1));\n' +
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
'\n' +
'.sio-mag-wrap, .sio-mag-wrap *{box-sizing:border-box}\n' +
'.sio-mag-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-mag-wrap .sio-mag{\n' +
'  display:inline-block;width:auto;max-width:100%;\n' +
'  padding:var(--hauteur) var(--largeur);border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--txt);font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille);line-height:1;letter-spacing:.08em;\n' +
'  text-transform:uppercase;white-space:nowrap;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'\n' +
'.sio-shine-wrap, .sio-shine-wrap *{box-sizing:border-box}\n' +
'.sio-shine-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-shine-wrap .sio-shine{\n' +
'  position:relative;overflow:hidden;display:inline-block;\n' +
'  width:auto;max-width:100%;padding:var(--hauteur) var(--largeur);\n' +
'  border-radius:var(--arrondi);text-decoration:none;color:var(--txt);\n' +
'  font-family:var(--f);font-weight:700;font-size:var(--taille);line-height:1;\n' +
'  letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'\n' +
'.sio-state-wrap, .sio-state-wrap *{box-sizing:border-box}\n' +
'.sio-state-wrap{display:flex;justify-content:center;padding:34px 16px}\n' +
'.sio-state-wrap .sio-state{\n' +
'  position:relative;min-width:260px;max-width:100%;\n' +
'  padding:var(--hauteur) var(--largeur);border:0;border-radius:var(--arrondi);\n' +
'  cursor:pointer;color:var(--txt);font-family:var(--f);font-weight:700;\n' +
'  font-size:var(--taille);line-height:1;letter-spacing:.07em;text-transform:uppercase;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
'  font-family:var(--f);font-weight:700;font-size:var(--taille);line-height:1;\n' +
'  letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;\n' +
'  transition:background .25s ease}\n' +
'.sio-ring-wrap .sio-ring a:hover{background:linear-gradient(135deg,var(--c2d),var(--c1))}\n' +
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
'  background:linear-gradient(120deg,var(--c1),var(--c2d));\n' +
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
'\n' +
'.sio-rea, .sio-rea *{box-sizing:border-box}\n' +
'.sio-rea{display:flex;flex-direction:column;align-items:center;gap:14px;\n' +
'  padding:32px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rea .sio-rea-btn{display:block;width:100%;max-width:var(--large-max);\n' +
'  padding:var(--hauteur) var(--largeur);border-radius:var(--arrondi);\n' +
'  text-decoration:none;color:var(--txt);font-family:var(--f);\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'.sio-fp-wrap .sio-fp-av{background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
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
'  --txt:#ffffff;     /* ICI : la couleur du texte de la barre */\n' +
'  --btn-fond:#ffffff;/* ICI : la couleur du bouton */\n' +
'  --btn-txt:#1A1A22; /* ICI : la couleur du texte du bouton */\n' +
'  --taille:16.5px;   /* ICI : la taille du texte */\n' +
'  --arrondi:999px;   /* ICI : l’arrondi du bouton */\n' +
'  --hauteur:11px;    /* ICI : l’épaisseur de la barre, en haut et en bas */\n' +
'  --pos:relative;    /* ICI : relative = la barre défile avec la page. */\n' +
'                     /*       sticky   = elle reste visible en haut.   */\n' +
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
'\n' +
'.sio-cd, .sio-cd *{box-sizing:border-box}\n' +
'.sio-cd{position:var(--pos);top:0;z-index:9999;\n' +
'  display:flex;align-items:center;justify-content:center;gap:10px 22px;flex-wrap:wrap;\n' +
'  padding:var(--hauteur) 16px;color:var(--txt);text-align:center;\n' +
'  font-family:var(--f);font-weight:600;font-size:var(--taille);line-height:1.3;\n' +
'  background:linear-gradient(105deg,var(--c1),var(--c2d),var(--c1));\n' +
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
'<\/script>'
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
'  --txt:#ffffff;     /* ICI : la couleur des chiffres */\n' +
'  --gris:#6E757A;    /* ICI : la couleur de la ligne au-dessus */\n' +
'  --chiffre:32px;    /* ICI : la taille des chiffres */\n' +
'  --taille:15px;     /* ICI : la taille de la ligne au-dessus */\n' +
'  --arrondi:14px;    /* ICI : l’arrondi des cartes */\n' +
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
'\n' +
'.sio-tm, .sio-tm *{box-sizing:border-box}\n' +
'.sio-tm{padding:30px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-tm p{margin:0 0 16px;font-size:var(--taille);letter-spacing:.14em;\n' +
'  text-transform:uppercase;color:var(--gris);font-weight:700}\n' +
'.sio-tm-row{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}\n' +
'.sio-tm-row div{min-width:80px;padding:14px 10px;border-radius:var(--arrondi);\n' +
'  color:var(--txt);background:linear-gradient(150deg,var(--c1),var(--c2d));\n' +
'  box-shadow:0 14px 30px -18px var(--c1)}\n' +
'.sio-tm-row b{display:block;font-size:var(--chiffre);line-height:1;font-weight:700;\n' +
'  font-variant-numeric:tabular-nums}\n' +
'.sio-tm-row i{display:block;margin-top:6px;font-style:normal;font-weight:600;\n' +
'  font-size:calc(var(--taille) - 2px);letter-spacing:.1em;text-transform:uppercase;opacity:.8}\n' +
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
'<\/script>'
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
'  background:linear-gradient(90deg,var(--c1),var(--c2));\n' +
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
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:17px;     /* ICI : la taille du texte */\n' +
'  --hauteur:15px;    /* ICI : l’épaisseur du ruban, en haut et en bas */\n' +
'  --vitesse:26s;     /* ICI : la durée d’un tour. Plus grand = plus lent. */\n' +
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
'\n' +
'.sio-rb, .sio-rb *{box-sizing:border-box}\n' +
'.sio-rb{overflow:hidden;padding:var(--hauteur) 0;color:var(--txt);font-family:var(--f);\n' +
'  background:linear-gradient(100deg,var(--c1),var(--c2d));\n' +
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
'</style>\n' +
'<!-- ICI : remplace les textes. Recopie-les à l’identique dans les deux lignes. -->\n' +
'<div class="sio-rb">\n' +
'  <div class="sio-rb-track">\n' +
'    <div>Tunnel relançable <em>&#9679;</em> Automatisation complète <em>&#9679;</em> Suivi en direct <em>&#9679;</em> Modèles prêts à l’emploi <em>&#9679;</em></div>\n' +
'    <div aria-hidden="true">Tunnel relançable <em>&#9679;</em> Automatisation complète <em>&#9679;</em> Suivi en direct <em>&#9679;</em> Modèles prêts à l’emploi <em>&#9679;</em></div>\n' +
'  </div>\n' +
'</div>'
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
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:16.5px;   /* ICI : la taille du texte */\n' +
'  --hauteur:13px;    /* ICI : l’épaisseur du bandeau, en haut et en bas */\n' +
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
'.sio-an, .sio-an *{box-sizing:border-box}\n' +
'.sio-an{position:relative;display:flex;align-items:center;justify-content:center;\n' +
'  gap:14px;flex-wrap:wrap;padding:var(--hauteur) 46px;color:var(--txt);text-align:center;\n' +
'  font-family:var(--f);font-weight:600;font-size:var(--taille);line-height:1.4;\n' +
'  background:linear-gradient(100deg,var(--c1),var(--c2d),var(--c1));\n' +
'  background-size:220% 100%;animation:sioAnShift 10s ease-in-out infinite}\n' +
'.sio-an a{color:var(--txt);font-weight:800;text-underline-offset:4px}\n' +
'.sio-an button{position:absolute;right:12px;top:50%;transform:translateY(-50%);\n' +
'  font-family:var(--f);width:28px;height:28px;border:0;border-radius:50%;\n' +
'  cursor:pointer;color:var(--txt);background:rgba(255,255,255,.18);\n' +
'  font-size:var(--taille);line-height:1}\n' +
'.sio-an button:hover{background:rgba(255,255,255,.32)}\n' +
'@keyframes sioAnShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}\n' +
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
'<\/script>'
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
'  --epaisseur:5px;   /* ICI : l’épaisseur du filet */\n' +
'  --piste:rgba(125,126,225,.16);  /* ICI : la couleur de la piste, derrière le filet */\n' +
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
'.sio-pg, .sio-pg *{box-sizing:border-box}\n' +
'.sio-pg{position:relative;height:var(--epaisseur);z-index:9990;background:var(--piste)}\n' +
'/* Le collage en haut ne s active que sur la page publiée, jamais dans l éditeur. */\n' +
'.sio-pg.sio-live{position:fixed;top:0;left:0;right:0}\n' +
'.sio-pg i{display:block;height:100%;width:0;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--c2));\n' +
'  box-shadow:0 0 12px -2px var(--c2);transition:width .1s linear}\n' +
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
'<\/script>'
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
var CONTENU = [
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
'  --txt:#ffffff;     /* ICI : la couleur des numéros */\n' +
'  --fond:#ffffff;    /* ICI : la couleur de fond de ta section */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des titres */\n' +
'  --gris:#5E666A;    /* ICI : la couleur des textes */\n' +
'  --taille:20px;     /* ICI : la taille des titres */\n' +
'  --taille2:17px;    /* ICI : la taille des textes */\n' +
'  --pastille:44px;   /* ICI : la taille des pastilles numérotées */\n' +
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
'\n' +
'.sio-tl, .sio-tl *{box-sizing:border-box}\n' +
'.sio-tl{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f)}\n' +
'.sio-tl ol{list-style:none;margin:0;padding:0;position:relative}\n' +
'.sio-tl ol::before{content:"";position:absolute;left:calc(var(--pastille) / 2 - 1px);\n' +
'  top:12px;bottom:12px;width:2px;\n' +
'  background:linear-gradient(180deg,var(--c1),var(--c2))}\n' +
'.sio-tl li{position:relative;padding:0 0 26px calc(var(--pastille) + 18px)}\n' +
'.sio-tl li:last-child{padding-bottom:0}\n' +
'.sio-tl li::before{content:attr(data-n);position:absolute;left:0;top:0;\n' +
'  width:var(--pastille);height:var(--pastille);border-radius:50%;\n' +
'  display:flex;align-items:center;justify-content:center;\n' +
'  color:var(--txt);font-weight:700;font-size:17px;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
'  box-shadow:0 0 0 5px var(--fond)}\n' +
'.sio-tl b{display:block;font-size:var(--taille);line-height:1.3;\n' +
'  color:var(--encre);margin:9px 0 6px}\n' +
'.sio-tl p{margin:0;font-size:var(--taille2);line-height:1.6;color:var(--gris)}\n' +
'.sio-tl em{display:inline-block;margin-top:8px;font-style:normal;font-size:14px;\n' +
'  font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--c1)}\n' +
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
'</div>'
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
'\n' +
'.sio-mod, .sio-mod *{box-sizing:border-box}\n' +
'.sio-mod{max-width:var(--large-max);margin:0 auto;padding:30px 16px;font-family:var(--f);\n' +
'  display:grid;gap:18px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-mod article{position:relative;overflow:hidden;padding:26px 24px 24px;\n' +
'  border:1px solid var(--bord);border-radius:var(--arrondi);background:var(--fond);\n' +
'  transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,border-color .3s ease}\n' +
'.sio-mod article::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;\n' +
'  background:linear-gradient(90deg,var(--c1),var(--c2));\n' +
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
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
'.sio-cmp-row h3{margin:0 0 4px;font-size:var(--taille);color:var(--encre)}\n' +
'.sio-cmp-row .sio-cmp-px{font-size:var(--prix);font-weight:700;color:var(--c1);line-height:1.2}\n' +
'.sio-cmp-row ul{list-style:none;margin:18px 0 0;padding:0}\n' +
'.sio-cmp-row li{position:relative;padding:0 0 10px 26px;\n' +
'  font-size:var(--taille2);line-height:1.5;color:var(--gris)}\n' +
'.sio-cmp-row li::before{content:"";position:absolute;left:4px;top:7px;width:9px;height:5px;\n' +
'  border-left:2.4px solid var(--c1);border-bottom:2.4px solid var(--c1);transform:rotate(-45deg)}\n' +
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
'<\/script>'
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
'\n' +
'.sio-rs, .sio-rs *{box-sizing:border-box}\n' +
'.sio-rs{padding:28px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rs p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-rs-row{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}\n' +
'.sio-rs a{display:inline-flex;align-items:center;gap:9px;\n' +
'  padding:11px 18px;border-radius:var(--arrondi);text-decoration:none;\n' +
'  color:var(--txt);font-weight:700;font-size:var(--taille);\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'\n' +
'.sio-rp, .sio-rp *{box-sizing:border-box}\n' +
'.sio-rp{padding:26px 16px;text-align:center;font-family:var(--f)}\n' +
'.sio-rp p{margin:0 0 16px;font-size:var(--titre);font-weight:700;color:var(--encre)}\n' +
'.sio-rp p:empty{display:none}\n' +
'.sio-rp-row{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--ecart)}\n' +
'.sio-rp a{display:inline-flex;align-items:center;justify-content:center;\n' +
'  width:var(--rond);height:var(--rond);border-radius:50%;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'  --fond:#ffffff;    /* ICI : le fond de la carte */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des intitulés */\n' +
'  --gris:#7B7D84;    /* ICI : la couleur des valeurs */\n' +
'  --taille:17px;     /* ICI : la taille des lignes */\n' +
'  --prix:38px;       /* ICI : la taille du prix final */\n' +
'  --arrondi:18px;    /* ICI : l’arrondi de la carte */\n' +
'  --large-max:620px; /* ICI : la largeur maximale */\n' +
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
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
'.sio-bd-fin b{display:block;font-size:var(--prix);font-weight:800;line-height:1.1}\n' +
'.sio-bd-fin em{display:block;margin-top:6px;font-style:normal;font-size:15px;opacity:.9}\n' +
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
'</div>'
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
'  --fond:#ffffff;    /* ICI : le fond des paliers */\n' +
'  --bord:#E9E6F0;    /* ICI : la couleur du contour */\n' +
'  --encre:#1B1E24;   /* ICI : la couleur des prix */\n' +
'  --gris:#8A8D96;    /* ICI : la couleur des paliers passés ou à venir */\n' +
'  --taille:15px;     /* ICI : la taille des intitulés */\n' +
'  --prix:26px;       /* ICI : la taille des prix */\n' +
'  --arrondi:16px;    /* ICI : l’arrondi des paliers */\n' +
'  --colonne:200px;   /* ICI : largeur mini d’un palier */\n' +
'  --large-max:820px; /* ICI : la largeur maximale */\n' +
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
'\n' +
'.sio-pa, .sio-pa *{box-sizing:border-box}\n' +
'.sio-pa{max-width:var(--large-max);margin:0 auto;padding:28px 16px;\n' +
'  font-family:var(--f);display:grid;gap:14px;\n' +
'  grid-template-columns:repeat(auto-fit,minmax(min(var(--colonne),100%),1fr))}\n' +
'.sio-pa-p{padding:22px 20px;border-radius:var(--arrondi);text-align:center;\n' +
'  border:1px solid var(--bord);background:var(--fond);color:var(--gris)}\n' +
'.sio-pa-p.actif{border-color:transparent;color:#fff;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
'  box-shadow:0 22px 44px -30px var(--c1)}\n' +
'.sio-pa-p em{display:block;font-style:normal;font-size:13px;font-weight:700;\n' +
'  letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;opacity:.85}\n' +
'.sio-pa-p b{display:block;font-size:var(--prix);font-weight:800;\n' +
'  line-height:1.1;color:inherit}\n' +
'.sio-pa-p.actif b{color:#fff}\n' +
'.sio-pa-p span{display:block;margin-top:8px;font-size:var(--taille);font-weight:600}\n' +
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
'</div>'
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
'  --txt:#ffffff;     /* ICI : la couleur du texte */\n' +
'  --taille:30px;     /* ICI : la taille des capitales */\n' +
'  --espace:.14em;    /* ICI : l’espacement entre les lettres */\n' +
'  --hauteur:16px;    /* ICI : l’épaisseur de chaque ligne */\n' +
'  --vitesse:22s;     /* ICI : la durée d’un tour. Plus grand = plus lent. */\n' +
'  --incline:-2deg;   /* ICI : l’inclinaison du ruban. 0deg = bien droit. */\n' +
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
'     SI QUELQUE CHOSE NE VA PAS\n' +
'     Le ruban saute à chaque tour : les deux copies d’une ligne ne\n' +
'     sont pas identiques. Recopie-les mot pour mot.\n' +
'     Le bloc s’affiche mal : une accolade } ou un point-virgule ; a sauté.\n' +
'     Recopie le bloc entier depuis la bibliothèque.\n' +
'\n' +
'  ------------------------------------------------------------- */\n' +
'}\n' +
'/* ============ Fin des réglages : ne touche pas la suite ============ */\n' +
'\n' +
'.sio-op, .sio-op *{box-sizing:border-box}\n' +
'.sio-op{overflow:hidden;padding:18px 0;font-family:var(--f)}\n' +
'.sio-op-ligne{overflow:hidden;padding:var(--hauteur) 0;color:var(--txt);\n' +
'  transform:rotate(var(--incline));width:104%;margin-left:-2%;\n' +
'  background:linear-gradient(100deg,var(--c1),var(--c2d))}\n' +
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
'</div>'
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
'<\/script>'
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
'.sio-et-e.active i{background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'\n' +
'.sio-gt, .sio-gt *{box-sizing:border-box}\n' +
'.sio-gt{max-width:var(--large-max);margin:0 auto;padding:24px 22px;\n' +
'  display:flex;gap:18px;align-items:flex-start;\n' +
'  border-radius:var(--arrondi);background:var(--fond);\n' +
'  border:1px solid var(--c2);font-family:var(--f)}\n' +
'.sio-gt i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:52px;height:52px;border-radius:50%;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'  background:linear-gradient(180deg,var(--c1),var(--c2))}\n' +
'.sio-su.anim ol::before{transform:scaleY(0);\n' +
'  transition:transform .9s cubic-bezier(.22,1,.36,1)}\n' +
'.sio-su.anim.vu ol::before{transform:scaleY(1)}\n' +
'.sio-su li{position:relative;display:flex;align-items:flex-start;gap:14px;\n' +
'  padding:16px 18px;border-radius:var(--arrondi);background:var(--fond);\n' +
'  border:1px solid var(--bord)}\n' +
'.sio-su i{flex:none;display:flex;align-items:center;justify-content:center;\n' +
'  width:var(--rond);height:var(--rond);border-radius:50%;font-style:normal;\n' +
'  color:#fff;font-weight:800;font-size:15px;\n' +
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
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
'\n' +
'.sio-pu, .sio-pu *{box-sizing:border-box}\n' +
'.sio-pu{max-width:var(--large-max);margin:0 auto;padding:30px 16px;\n' +
'  font-family:var(--f)}\n' +
'.sio-pu-carte{padding:34px 28px;border-radius:var(--arrondi);text-align:center;\n' +
'  color:var(--txt);background:linear-gradient(135deg,var(--c1),var(--c2d));\n' +
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
'  background:linear-gradient(135deg,var(--c1),var(--c2d))}\n' +
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
'</style>\n' +
'<!-- ICI : remplace ton-adresse par ton adresse d’expédition réelle -->\n' +
'<div class="sio-bx">\n' +
'  <h3><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>Pour être sûre de tout recevoir</h3>\n' +
'  <ol>\n' +
'    <li><b>Ajoute mon adresse à tes contacts</b> : <code>ton-adresse@exemple.fr</code></li>\n' +
'    <li><b>Regarde dans tes indésirables</b>, et dans l’onglet Promotions si tu es sur Gmail.</li>\n' +
'    <li><b>Réponds à mon premier e-mail</b>, même d’un mot : c’est le signal le plus fort pour ta messagerie.</li>\n' +
'  </ol>\n' +
'</div>'
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
function currentCode(item){
  var c1=document.getElementById("kwb-c1").value;
  var c2=document.getElementById("kwb-c2").value;
  return item.code.split(D1).join(c1).split(D2).join(c2)
                  .split(D3).join(melange(c1,c2,0.45));
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
  var tag=document.createElement("span"); tag.className="tag"; tag.textContent=item.tag;
  head.appendChild(htxt); head.appendChild(tag);

  var stage=document.createElement("div");
  stage.className="stage"+(DARK_STAGE[item.id]?" dark":"")+(TALL_STAGE[item.id]?" tall":"");

  var foot=document.createElement("div");
  foot.className="card-foot";
  var copy=document.createElement("button");
  copy.type="button"; copy.className="btn btn-primary"; copy.textContent="Copier le code";
  var see=document.createElement("button");
  see.type="button"; see.className="btn btn-ghost"; see.textContent="Voir le code";
  foot.appendChild(copy); foot.appendChild(see);
  var ai=document.createElement("button");
  ai.type="button"; ai.className="btn btn-ai"; ai.textContent="Personnaliser";
  ai.hidden=!LIEN_ASSISTANT;
  ai.addEventListener("click",function(){ window.open(LIEN_ASSISTANT,"_blank","noopener"); });
  foot.appendChild(ai);

  var pre=document.createElement("pre");
  pre.className="code"; pre.hidden=true;

  card.appendChild(head); card.appendChild(stage); card.appendChild(foot); card.appendChild(pre);

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

  see.addEventListener("click",function(){
    pre.hidden=!pre.hidden;
    see.textContent=pre.hidden?"Voir le code":"Masquer le code";
    if(!pre.hidden) montreCode(pre,currentCode(item));
  });

  return {card:card, stage:stage, pre:pre, item:item};
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

function mount(stage,code){
  stage.innerHTML="";
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
}

var CARDS=[];
function render(){
  var gh=document.getElementById("kwb-grid-hero");
  var gc=document.getElementById("kwb-grid-cta");
  var gb=document.getElementById("kwb-grid-ban");
  var go=document.getElementById("kwb-grid-con");
  var gs=document.getElementById("kwb-grid-soc");
  var gp=document.getElementById("kwb-grid-pro");
  var gy=document.getElementById("kwb-grid-pay");
  var gm=document.getElementById("kwb-grid-mer");
  gh.innerHTML=""; gc.innerHTML=""; gb.innerHTML=""; go.innerHTML=""; gs.innerHTML=""; gp.innerHTML=""; gy.innerHTML=""; gm.innerHTML=""; CARDS=[];
  HERO.forEach(function(it){ var o=buildCard(it); gh.appendChild(o.card); CARDS.push(o); });
  CTA.forEach(function(it){ var o=buildCard(it); gc.appendChild(o.card); CARDS.push(o); });
  BAN.forEach(function(it){ var o=buildCard(it); gb.appendChild(o.card); CARDS.push(o); });
  CONTENU.forEach(function(it){ var o=buildCard(it); go.appendChild(o.card); CARDS.push(o); });
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
  refreshColors();
});

/* =========================================================
   Sélection affichée : uniquement les blocs présents sur la page
   agence-digitale-koweb.fr/bibliotheque-ia
   Pour réafficher un bloc, ajoute son identifiant ici.
   ========================================================= */
var GARDER = {
  halo:1, magnet:1, shine:1, state:1, ring:1, ghost:1, reassure:1, flip:1,
  countdown:1, timer:1, gauge:1, marquee:1, announce:1, progress:1,
  timeline:1, modules:1, compare:1, benefices:1,
  suivez:1, picto:1,
  paliers:1, bundle:1, codepromo:1, ruban:1, rubansimple:1,
  etapes:1, garantie:1, reassurance:1, apres:1, faqfin:1,
  confirm:1, etapeuk:1, agenda:1, antispam:1
};
function garde(liste){ return liste.filter(function(b){ return GARDER[b.id]; }); }
HERO=garde(HERO); CTA=garde(CTA); BAN=garde(BAN); CONTENU=garde(CONTENU);
SOCIAL=garde(SOCIAL); PROMO=garde(PROMO); PAIEMENT=garde(PAIEMENT); MERCI=garde(MERCI);

render();
/* sections vides masquées, compteurs recalculés */
(function(){
  var grilles=RACINE.querySelectorAll('section .grid');
  for(var i=0;i<grilles.length;i++){
    var n=grilles[i].children.length, sec=grilles[i].closest('section');
    if(!n){ sec.hidden=true; continue; }
    var sp=sec.querySelector('.section-head span');
    if(sp) sp.textContent = n + (n>1?' blocs':' bloc');
  }
})();

  }
  if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded",demarrer); }
  else { demarrer(); }
})();
