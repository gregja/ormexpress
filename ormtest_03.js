// *** TEST DE CREATION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');

/**
 * Fonction "mouchard" pour test 
 * @param {type} record
 * @returns {undefined}
 */
var mycallback = (record)=>{
    console.log('mouchard');
    console.log('nouvel id généré => '+record.getLastId());
    console.log(record.getDatas());
};

var serie2 = new BDSERIES(conn);
serie2.setDatas({titre:'le petit lapin blanc', auteur:'néo', editeur:'la matrice'});
serie2.saveRec(mycallback);  // va déclencher l'appel de la méthode createRec()

var serie3 = new BDSERIES(conn);
serie3.setColumn('titre','le petit lapin bleu');
serie3.setColumn('auteur','méphisto');
serie3.setColumn('editeur','le purgatoire');
serie3.saveRec(mycallback);  // va déclencher l'appel de la méthode createRec()

