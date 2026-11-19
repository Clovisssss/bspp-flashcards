// Contenu BSPP : thèmes, flashcards, documentation.
// Sources : defense.gouv.fr (page BSPP), rapport d'activité BSPP 2024, carrieres-publiques, CIDJ.
// À vérifier/mettre à jour avec les documents officiels de la brigade (chiffres annuels, organisation).
const THEMES = [
  {id:"statut", nom:"Statut", ico:"🎖️"},
  {id:"chiffres", nom:"Chiffres clés", ico:"📊"},
  {id:"zones", nom:"Zones d'action", ico:"🗺️"},
  {id:"orga", nom:"Organisation territoriale", ico:"🏛️"},
  {id:"caserne", nom:"Vie en caserne", ico:"🏠"},
  {id:"devises", nom:"Devises & traditions", ico:"🔱"},
  {id:"engins", nom:"Engins et fonctions", ico:"🚒"},
  {id:"metier", nom:"Modalités & contraintes", ico:"⚙️"},
  {id:"formation", nom:"Formation initiale", ico:"🎓"}
];

const CARDS = [
// STATUT
{t:"statut",q:"La BSPP est une unité de quelle armée et de quelle arme ?",a:"Une unité du génie de l'Armée de terre."},
{t:"statut",q:"Sous l'autorité de qui la BSPP est-elle placée pour emploi ?",a:"Du préfet de police de Paris."},
{t:"statut",q:"Les pompiers de Paris sont-ils des fonctionnaires territoriaux ?",a:"Non : ce sont des militaires (comme les marins-pompiers de Marseille)."},
{t:"statut",q:"Quelle date marque la création du bataillon de sapeurs-pompiers de Paris ?",a:"Le 18 septembre 1811, par décret impérial de Napoléon Ier."},
{t:"statut",q:"Quel événement a conduit Napoléon Ier à créer le bataillon ?",a:"L'incendie de l'ambassade d'Autriche à Paris, lors des fêtes données pour son mariage (1810)."},
{t:"statut",q:"Quand le régiment est-il devenu la « Brigade » de sapeurs-pompiers de Paris ?",a:"Le 1er mars 1967 (décret du 28 février 1967)."},
{t:"statut",q:"Quelles sont les deux seules unités militaires de sapeurs-pompiers en France ?",a:"La BSPP (Paris) et le Bataillon de marins-pompiers de Marseille (BMPM)."},
{t:"statut",q:"Qui commande la BSPP ?",a:"Un général : le général commandant la brigade de sapeurs-pompiers de Paris."},
{t:"statut",q:"Où est implanté l'état-major de la BSPP ?",a:"Porte de Champerret (Paris 17e)."},
// CHIFFRES
{t:"chiffres",q:"Combien de pompiers compte la BSPP (ordre de grandeur) ?",a:"Environ 8 500 à 8 600 sapeurs-pompiers."},
{t:"chiffres",q:"Combien d'interventions la BSPP a-t-elle réalisées en 2024 ?",a:"Environ 474 000 (474 053)."},
{t:"chiffres",q:"Pour combien d'interventions par jour le modèle BSPP est-il dimensionné ?",a:"1 250 interventions par jour (soit environ 455 000 par an)."},
{t:"chiffres",q:"Combien d'interventions par jour en moyenne ?",a:"Plus de 1 000 (environ 1 300)."},
{t:"chiffres",q:"Combien de centres de secours compte la BSPP ?",a:"71 centres de secours (dont 3 CS à exploration longue durée), plus 8 centres d'appuis et de secours."},
{t:"chiffres",q:"Quelle part des interventions est du secours à personnes ?",a:"Environ 80 à 85 % (84 % selon la page défense.gouv)."},
{t:"chiffres",q:"Quelle part des interventions concerne des incendies ?",a:"Très faible : environ 2 à 3 %."},
{t:"chiffres",q:"Quel numéro compose-t-on pour joindre les pompiers de Paris ?",a:"Le 18 ou le 112."},
{t:"chiffres",q:"Quel est le temps moyen d'intervention annoncé par la brigade ?",a:"Environ 6 minutes (un départ par minute environ)."},
{t:"chiffres",q:"Quelle est la place de la BSPP parmi les services de pompiers du monde en effectifs ?",a:"3e, après Tokyo (TFD) et New York (FDNY)."},
{t:"chiffres",q:"Quelle est la part des femmes à la BSPP ?",a:"Environ 6 % des effectifs (environ 500 femmes)."},
// ZONES
{t:"zones",q:"Quel territoire protège la BSPP ?",a:"Paris et les trois départements de la petite couronne : Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94)."},
{t:"zones",q:"Qu'appelle-t-on la « petite couronne » ?",a:"Les départements 92, 93 et 94 entourant Paris."},
{t:"zones",q:"Quelles installations hors de la zone la BSPP protège-t-elle en plus ?",a:"Des sites sensibles : ex. les centres d'essais spatiaux de Kourou (CSG) et de Biscarrosse (DGA), musées et bâtiments officiels."},
{t:"zones",q:"Quels détachements protègent des sites culturels ?",a:"Notamment le Louvre, Orsay et la Bibliothèque nationale de France."},
{t:"zones",q:"La BSPP intervient-elle à l'international ?",a:"Oui, sur demande de l'échelon zonal, dans le cadre du mécanisme européen de protection civile."},
{t:"zones",q:"Où se situe la zone du 1er GIS ?",a:"Seine-Saint-Denis (93) et nord de Paris.",img:"images/zone-schema.svg"},
{t:"zones",q:"Où se situe la zone du 2e GIS ?",a:"Val-de-Marne (94) et est/sud-est de Paris.",img:"images/zone-schema.svg"},
{t:"zones",q:"Où se situe la zone du 3e GIS ?",a:"Hauts-de-Seine (92) et sud-ouest/ouest de Paris.",img:"images/zone-schema.svg"},
// ORGA
{t:"orga",q:"En combien de groupements la BSPP est-elle organisée ?",a:"6 groupements : 1er GIS, 2e GIS, 3e GIS, GAS, GSS, GFIS.",img:"images/organigramme.svg"},
{t:"orga",q:"Que signifie GIS ?",a:"Groupement d'incendie et de secours."},
{t:"orga",q:"Que signifie GAS ?",a:"Groupement d'appuis et de secours (capacités spécialisées)."},
{t:"orga",q:"Que signifie GSS ?",a:"Groupement des soutiens et de secours (logistique, maintenance, soutien)."},
{t:"orga",q:"Que signifie GFIS ?",a:"Groupement de formation, d'instruction et de secours."},
{t:"orga",q:"Où est le PC du 1er GIS ?",a:"Montmartre (Paris 18e)."},
{t:"orga",q:"Où est le PC du 2e GIS ?",a:"Masséna (Paris 13e)."},
{t:"orga",q:"Où est le PC du 3e GIS ?",a:"Courbevoie (92)."},
{t:"orga",q:"Où est implanté le GAS ?",a:"Saint-Denis (93)."},
{t:"orga",q:"Où est implanté le GFIS ?",a:"Valenton (94)."},
{t:"orga",q:"Comment est composé un GIS ?",a:"Huit compagnies d'incendie, une compagnie de commandement et de logistique et un service médical."},
{t:"orga",q:"Qui commande une compagnie ? un groupement ?",a:"Un capitaine commande une compagnie ; un colonel ou lieutenant-colonel commande un groupement."},
{t:"orga",q:"Combien de centres de secours par compagnie en moyenne ?",a:"Entre 2 et 4 centres de secours."},
{t:"orga",q:"Quels centres spécialisés dépendent du GAS ?",a:"Les CS NRBC, les CS nautiques et le centre RSMU/cynophile."},
// CASERNE
{t:"caserne",q:"Comment s'appelle une caserne de pompiers à la BSPP ?",a:"Un centre de secours (CS)."},
{t:"caserne",q:"Qu'est-ce qu'un centre de secours à exploration longue durée (ELD) ?",a:"Un centre de secours équipé pour des interventions de longue durée (3 CS ELD à la BSPP)."},
{t:"caserne",q:"Comment s'organise la vie militaire en caserne ?",a:"Discipline, hiérarchie, tenue réglementaire, rassemblements (« rapport ») et activités sportives quotidiennes."},
{t:"caserne",q:"Que fait-on entre deux départs en intervention ?",a:"Entretien du matériel et des engins, sport, instruction/manœuvres et vie de caserne."},
{t:"caserne",q:"Que signifie « tour de garde » ?",a:"Période pendant laquelle le personnel est d'astreinte opérationnelle au centre, prêt à partir à tout moment."},
{t:"caserne",q:"Le personnel est-il logé en caserne ?",a:"Une partie du personnel est logée en caserne, notamment les jeunes engagés."},
{t:"caserne",q:"Qu'est-ce que le « bal des pompiers » ?",a:"Une tradition : les casernes ouvrent leurs portes au public la nuit du 13 au 14 juillet."},
// DEVISES
{t:"devises",q:"Quelle est la devise de la BSPP ?",a:"« Sauver ou périr »."},
{t:"devises",q:"Que traduit la devise « Sauver ou périr » ?",a:"L'engagement total du pompier de Paris au service d'autrui."},
{t:"devises",q:"Quel jour fête-t-on les pompiers de Paris traditionnellement (ouverture au public) ?",a:"Le 14 juillet, avec le bal des pompiers."},
{t:"devises",q:"Quelle est la date anniversaire de la brigade ?",a:"Le 18 septembre (création en 1811)."},
{t:"devises",q:"Quelle est la sainte patronne des pompiers ?",a:"Sainte Barbe (fête le 4 décembre)."},
// ENGINS
{t:"engins",q:"Que signifie FPT et à quoi sert-il ?",a:"Fourgon pompe-tonne : engin de lutte contre l'incendie (eau, pompe, matériel).",img:"images/engin-fpt.svg"},
{t:"engins",q:"Que signifie EPA et à quoi sert-il ?",a:"Échelle pivotante automatique : sauvetages et accès en hauteur.",img:"images/engin-epa.svg"},
{t:"engins",q:"Que signifie BEA et à quoi sert-il ?",a:"Bras élévateur articulé : accès en hauteur, travail et sauvetage aérien.",img:"images/engin-bea.svg"},
{t:"engins",q:"Que signifie VSAV et à quoi sert-il ?",a:"Véhicule de secours et d'assistance aux victimes : secours à personne, il réalise l'essentiel des interventions.",img:"images/engin-vsav.svg"},
{t:"engins",q:"Que signifie VSR et à quoi sert-il ?",a:"Véhicule de secours routier : accidents de la route, désincarcération.",img:"images/engin-vsr.svg"},
{t:"engins",q:"Que signifie AR et à quoi sert-il ?",a:"Ambulance de réanimation : médicalisée (équipe médicale RSMU), pour les détresses vitales.",img:"images/engin-ar.svg"},
{t:"engins",q:"Que signifie PC et à quoi sert-il ?",a:"Poste de commandement : coordination des opérations sur un sinistre important.",img:"images/engin-pc.svg"},
{t:"engins",q:"Que signifie VTU et à quoi sert-il ?",a:"Véhicule tout usage : polyvalent (transport de personnel, matériel, missions diverses).",img:"images/engin-vtu.svg"},
{t:"engins",q:"Que signifie NRBC ?",a:"Nucléaire, radiologique, biologique, chimique : risques traités par les CS NRBC.",img:"images/engin-nrbc.svg"},
{t:"engins",q:"Quelle unité de la BSPP intervient sur la Seine ?",a:"Les centres de secours nautiques.",img:"images/engin-nautique.svg"},
{t:"engins",q:"Que signifie RSMU ?",a:"Renforcement sanitaire en milieu urbain : médecins/infirmiers de la BSPP sur les détresses vitales."},
// METIER
{t:"metier",q:"Quelle est la mission première et permanente de la BSPP ?",a:"La défense des populations et des biens sur son secteur de responsabilité : Paris et petite couronne."},
{t:"metier",q:"Quels types de missions réalise la BSPP ?",a:"Secours à personnes, lutte contre l'incendie, accidents de la route, risques technologiques, sauvetages en milieu urbain, protection de bâtiments officiels."},
{t:"metier",q:"Quelle contrainte du statut militaire s'applique aux pompiers de Paris ?",a:"Disponibilité, discipline, mobilité, possibilité d'être projeté et obligations militaires."},
{t:"metier",q:"Quelle est la fonction d'un équipier VSAV ?",a:"Prendre en charge les victimes : bilan, gestes de secours, transport vers l'hôpital."},
{t:"metier",q:"Pourquoi la condition physique est-elle essentielle ?",a:"Interventions éprouvantes (port de charges, chaleur, hauteur) : entraînement sportif quotidien."},
{t:"metier",q:"Quelle est la moyenne d'âge à la BSPP ?",a:"Environ 28 ans."},
// FORMATION
{t:"formation",q:"Où se déroule l'incorporation du sapeur-pompier de Paris ?",a:"Au fort de Villeneuve-Saint-Georges (94), « l'école du sapeur-pompier de Paris »."},
{t:"formation",q:"Combien de temps dure la formation initiale ?",a:"Environ 600 heures de cours réparties sur environ 8 mois, en 3 phases."},
{t:"formation",q:"Quels sont les types de contrat à l'engagement ?",a:"EVAT (engagé volontaire de l'Armée de terre) et VDAT (volontaire dans l'Armée de terre)."},
{t:"formation",q:"Quels sont les critères d'âge et de nationalité pour s'engager ?",a:"Être de nationalité française (ou européenne selon sources), âgé d'au moins 18 ans et de moins de 26 ans environ ; à confirmer auprès du CIRFA."},
{t:"formation",q:"Quel organisme dispense la formation de la BSPP ?",a:"Le GFIS (Groupement de formation, d'instruction et de secours)."},
{t:"formation",q:"Quel est le premier grade ?",a:"Sapeur de 2e classe (militaire du rang)."},
{t:"formation",q:"Quelles sont les trois filières de recrutement ?",a:"Sapeur-pompier, spécialiste (métiers de soutien) et officier."},
{t:"formation",q:"Que forment les JSPP ?",a:"Jeunes sapeurs-pompiers de Paris : 14 à 16 ans, formation citoyenne et militaire sur 3 ans."}
];

const DOCS = [
{id:"statut",t:"statut",titre:"Statut de la BSPP",img:"images/organigramme.svg",html:`
<p>La Brigade de sapeurs-pompiers de Paris est une <strong>unité militaire du génie de l'Armée de terre</strong>, placée pour emploi sous l'autorité du <strong>préfet de police de Paris</strong>.</p>
<h3>Histoire</h3><ul><li>1810 : incendie de l'ambassade d'Autriche lors des fêtes du mariage de Napoléon Ier.</li><li>18 septembre 1811 : décret impérial créant le bataillon de sapeurs-pompiers de Paris (4 compagnies, 13 officiers, 563 hommes).</li><li>1er mars 1967 : le régiment devient la brigade (décret du 28 février 1967).</li></ul>
<p>Seules la BSPP et le BMPM (Marseille) sont des unités militaires de sapeurs-pompiers.</p>`},
{id:"chiffres",t:"chiffres",titre:"Chiffres clés",html:`
<ul><li>≈ 8 500 – 8 600 militaires.</li><li>≈ 474 000 interventions en 2024 ; plus de 1 000 par jour.</li><li>71 centres de secours, dont 3 CS ELD ; 8 centres d'appuis et de secours.</li><li>≈ 80-85 % de secours à personnes ; ≈ 2-3 % d'incendies.</li><li>Appels au 18 / 112 : ≈ 1,3 million en 2024.</li><li>Moyenne d'âge ≈ 28 ans ; ≈ 6 % de femmes.</li></ul>
<p class="note">Les chiffres évoluent chaque année : consulter le dernier rapport d'activité de la brigade.</p>`},
{id:"zones",t:"zones",titre:"Zones d'action",img:"images/zone-schema.svg",html:`
<p>La BSPP protège <strong>Paris</strong> et la <strong>petite couronne</strong> : Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94). Elle assure en outre la protection de sites sensibles (détachements du Louvre, d'Orsay, de la BnF, centres spatiaux…).</p>
<p>Elle peut aussi intervenir à l'international dans le cadre du mécanisme européen de protection civile.</p>`},
{id:"orga",t:"orga",titre:"Organisation territoriale",img:"images/organigramme.svg",html:`
<p>Six groupements :</p><ul><li><strong>1er GIS</strong> – Montmartre : 93 + nord de Paris.</li><li><strong>2e GIS</strong> – Masséna : 94 + est/sud-est de Paris.</li><li><strong>3e GIS</strong> – Courbevoie : 92 + sud-ouest/ouest de Paris.</li><li><strong>GAS</strong> – Saint-Denis : appuis spécialisés (NRBC, nautique, RSMU, cynophile).</li><li><strong>GSS</strong> – Champerret : soutiens.</li><li><strong>GFIS</strong> – Valenton : formation.</li></ul>
<p>Un GIS comprend huit compagnies d'incendie, une compagnie de commandement et de logistique et un service médical ; chaque compagnie regroupe 2 à 4 centres de secours.</p>`},
{id:"caserne",t:"caserne",titre:"Vie en caserne",html:`
<p>Le centre de secours est à la fois lieu de travail et de vie. La vie quotidienne est rythmée par la discipline militaire, le sport, l'entretien du matériel, l'instruction et les départs en intervention. Une partie du personnel est logée sur place.</p>
<p>Tradition : le <strong>bal des pompiers</strong>, chaque 13-14 juillet.</p>
<p class="note">Compléter avec les consignes propres à ton centre de secours.</p>`},
{id:"devises",t:"devises",titre:"Devises et traditions",html:`<p>Devise : <strong>« Sauver ou périr »</strong>. Elle exprime l'engagement total des pompiers de Paris.</p><p>Fête patronale : sainte Barbe (4 décembre). Date anniversaire : 18 septembre.</p>`},
{id:"engins",t:"engins",titre:"Engins et fonctions",html:`
<ul><li><strong>FPT</strong> : lutte contre l'incendie.</li><li><strong>EPA / BEA</strong> : accès en hauteur.</li><li><strong>VSAV</strong> : secours et assistance aux victimes.</li><li><strong>VSR</strong> : secours routier, désincarcération.</li><li><strong>AR</strong> : ambulance de réanimation.</li><li><strong>PC</strong> : poste de commandement.</li><li><strong>VTU</strong> : véhicule tout usage.</li><li><strong>CS NRBC</strong> et <strong>CS nautiques</strong> : risques spécifiques et Seine.</li></ul>
<p class="note">Illustrations schématiques ; remplace-les par des photos officielles dans <code>images/photos/</code> si besoin.</p>`,gal:["images/engin-fpt.svg","images/engin-epa.svg","images/engin-bea.svg","images/engin-vsav.svg","images/engin-vsr.svg","images/engin-ar.svg","images/engin-pc.svg","images/engin-vtu.svg","images/engin-nrbc.svg","images/engin-nautique.svg"]},
{id:"metier",t:"metier",titre:"Modalités et contraintes du métier",html:`<p>Mission première : défense des populations et des biens. Contraintes : statut militaire, disponibilité, condition physique, gardes, exposition aux risques, stress des interventions de secours à personnes (activité très majoritaire).</p>`},
{id:"formation",t:"formation",titre:"Formation initiale",html:`
<p>Incorporation au <strong>fort de Villeneuve-Saint-Georges</strong>. Formation d'environ <strong>600 heures sur 8 mois</strong>, modulaire, en 3 phases, assurée par le GFIS.</p>
<p>Contrats : EVAT ou VDAT ; formation et emploi identiques. Trois filières : sapeur-pompier, spécialiste, officier. Conditions d'âge/nationalité à confirmer auprès du CIRFA.</p>`}
];
