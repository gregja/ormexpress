// *** TEST DE CREATION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie2 = new BDSERIES(conn);
serie2.setDatas({titre:'le petit lapin blanc', auteur:'néo', editeur:'la matrice'});
serie2.saveRec();  // va déclencher l'appel de la méthode createRec()
setTimeout(()=>{
    console.log('mouchard n°3');
    console.log('nouvel id généré => '+serie2.getLastId());
    console.log(serie2.getDatas());
}, 1000, 'foo');
