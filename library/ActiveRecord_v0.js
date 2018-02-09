// Squelette de la classe ActiveRecord (version 1)
class ActiveRecordSkel1 {
    
    /**
     * Constructeur recevant en entrée l'instance définissant la base
     *  de données utilisée 
     * @param {type} db
     * @returns {ActiveRecord}
     */
    constructor(db) {
        this.db = db;
        this.table_name = '';  // ** to override (mandatory) ** 
        this.key_name = 'id'; // ** to override only if necessary **
        this.key_value = null;
        this.fields_name = [];
        this.fields_value = {};
        this.fields_update = {};
        this.is_rec_loaded = false;
        this.is_rec_created = false;
        this.is_rec_deleted = false;
        this.is_rec_updated = false;
        this.is_rec_saved = false;
    }

    /**
     *  Sert à alimenter les colonnes de la table SQL sous-jacente    
     * @param {type} field
     * @param {type} value
     * @returns {undefined}
     */
    setColumn(field, value) {
    }

    /**
     * Récupère la valeur d'une colonne de table SQL 
     * sous-jacente
     * @param {type} field
     * @returns {undefined}
     */
    getColumn(field) {
    }

    /**
     * Charge en mémoire une ligne de BD si elle existe
     * @param {type} id
     * @returns {undefined}
     */
    loadRec(id, callback=false) {
    }

    /**
     * Sauvegarde une ligne en BD.
     * Si la ligne a été préalablement "chargée" alors est mise à jour en  
     * interne par appel de la méthode update(),
     * dans le cas contraire, elle est créée par appel de la méthode create()
     * @returns {undefined}
     */
    saveRec(callback=false) {
    }

    /**
     * Met à jour une ligne en BD
     * La mise à jour ne peut aboutir que si la ligne a été préalablement
     *  "chargée" par la méthode load(),
     * sous réserve que ce chargement ait abouti 
     * (on peut le contrôler via la méthode isLoaded() )
     * @returns {undefined}
     */
    updateRec(callback=false) {  
    }

    /**
     * Crée une ligne en BD
     * La bonne exécution de la mise à jour peut être vérifiée via la méthode
     *  is_updated() 
     * @returns {undefined}
     */
    createRec(callback=false) {       
    }

    /**
     * Supprime une ligne en BD
     * La suppression SQL peut se faire sous 2 conditions :
     * - soit la ligneà à supprimer a été préalablement chargée 
     *     via la méthode loadRec()
     *  - soit l'identifiant de la ligne à supprimer est transmis 
     *     directement à la méthode deleteRec()
     * @param {type} id
     * @returns {undefined}
     */
    deleteRec(id=null, callback=false) {                   
    }           

    /**
     * Renvoie sous la forme d'un objet l'intégralité des colonnes
     * d'une ligne BD, chargée au préalable en mémoire via la méthode loadRec() 
     * @returns {nm$_ActiveRecord.ActiveRecord.fields_value}
     */
    getDatas() {   
    }

    /**
     * Charge en mémoire l'intégralité des colonnes d'une ligne de BD
     * Ces données devront ensuite être sauvegardées par les méthodes 
     * saveRec(), updateRec() ou createRec()
     * @param {object} datas
     * @returns {undefined}
     */
    setDatas(datas={}) {       
    }

    /**
     * Renvoie le dernier ID traité ou inséré en base de donnée
     * @returns {type|item_value}
     */
    getLastId() {
    }

};

// Squelette de la classe ActiveRecord (version 2)
class ActiveRecordSkel2 {
    constructor(db) {
    }
    setColumn(field, value) {
    }
    getColumn(field) {
    }
    loadRec(id, callback=false) {
    }
    saveRec(callback=false) {
    }
    updateRec(callback=false) {  
    }
    createRec(callback=false) {       
    }
    deleteRec(id=null, callback=false) {                   
    }           
    getDatas() {   
    }
    setDatas(datas={}) {       
    }
    getLastId() {
    }
};
