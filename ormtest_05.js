// *** TEST DE CREATION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie5 = new BDSERIES(conn);
serie5.loadRec(39, (record) => {
    if (record.is_rec_loaded) {
        console.log('id => '+ record.getLastId());   
        console.log(record.getDatas());
        console.log('titrex => '+ record.getColumn('titre'));
        console.log('auteur => '+ record.getColumn('auteur'));
        record.setColumn('titre', 'Satori');
        record.setColumn('auteur', 'Daho');
        record.saveRec();  // va déclencher l'appel de la méthode updateRec()
    } else {
        console.log('ligne non trouvée');
    }
    
});




