// *** TEST DE CREATION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie5 = new BDSERIES(conn);
serie5.loadRec(17);
setTimeout(()=>{
    console.log('lecture id 17');
    console.log('titre => '+ serie5.getColumn('titre'));
    console.log('auteur => '+ serie5.getColumn('auteur'));
    serie5.setColumn('auteur', 'sayonara');
    serie5.saveRec();  // va déclencher l'appel de la méthode updateRec()
    
}, 1000, 'foo');




