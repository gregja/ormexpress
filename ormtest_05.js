// *** TEST DE CREATION ***

// chargement du package personnalisé pour la connexion à MariaDB 
//const DBMODULE = require('./library/DBConnex');
const DBMODULE = require('./draft/DBConnex_1');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie5 = new BDSERIES(conn);
serie5.loadRec(17);
setTimeout( (seriex) => {
    //console.log('id => '+ serie.getColumn('id'));
    console.log('id => '+ seriex.getLastId());   
    console.log('titre => '+ seriex.getColumn('titre'));
    console.log('auteur => '+ seriex.getColumn('auteur'));
    seriex.setColumn('titre', 'Satori');
    seriex.setColumn('auteur', 'Etienne Daho');
    seriex.saveRec();  // va déclencher l'appel de la méthode updateRec()
    
}, 1000, serie5);




