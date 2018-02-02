// *** TEST DE CREATION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');
//const DBMODULE = require('./draft/DBConnex_1');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie2 = new BDSERIES(conn);
serie2.setDatas({titre:'le petit lapin blanc', auteur:'néo', editeur:'la matrice'});
serie2.saveRec();  // va déclencher l'appel de la méthode createRec()
setTimeout((seriex)=>{
    console.log('mouchard n°3');
    console.log('nouvel id généré => '+seriex.getLastId());
    console.log(seriex.getDatas());
}, 1000, serie2);


var serie3 = new BDSERIES(conn);
serie3.setColumn('titre','le petit lapin blanc');
serie3.setColumn('auteur','néo');
serie3.setColumn('editeur','la matrice');
serie3.saveRec();  // va déclencher l'appel de la méthode createRec()
setTimeout((seriex)=>{
    console.log('mouchard n°3');
    console.log('nouvel id généré => '+seriex.getLastId());
    console.log(seriex.getDatas());
}, 1000, serie3);
