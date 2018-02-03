// *** TEST DE SUPPRESSION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var mycallback1 = (record)=>{
    console.log('id à supprimer => '+record.getLastId());
    if (record.is_rec_loaded) {
        record.deleteRec();
    } else {
        console.log('ligne non trouvée, suppression en échec');        
    }
};


var serie3 = new BDSERIES(conn);
serie3.loadRec(40, mycallback1);

var mycallback2 = (record)=>{
    console.log('id supprimé => '+record.getLastId());
    if (record.is_rec_deleted) {
        console.log('suppression effective');        
    } else {
        console.log('suppression impossible, ligne absente');        
    }
};

var serie4 = new BDSERIES(conn);
console.log('suppression des id 23 à 25');
serie4.deleteRec(41, mycallback2);
serie4.deleteRec(42, mycallback2);
serie4.deleteRec(43, mycallback2);
serie4.deleteRec(44);


