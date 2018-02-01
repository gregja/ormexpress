/*
 * Inclusion de la classe mère ActiveRecord
 */
var ActiveRecord = require('./ActiveRecord');

/* 
 * Export de la classe BDSeries
 */
module.exports = class BDSeries extends ActiveRecord {

    /*
     * Personnalisation du constructeur, tout le reste vient de la classe
     * mère
     */
    constructor(db) {
        // application du constructeur de la classe mère
        super(db);
        // personnalisation des propriétés spécifiques à BDSeries
        this.table_name = 'bdseries';
        this.fields_name = ['id', 'titre', 'auteur', 'editeur', 'site'];
    }

};
