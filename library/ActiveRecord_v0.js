/* 
 * Squelette de la classe ActiveRecord
 */

class ActiveRecord {

    /**
     * Constructeur recevant en entrée l'instance définissant la base
     *  de données utilisée 
     * @param {type} $base
     * @returns {ActiveRecord}
     */
    constructor($base) {}

    /**
     *  Sert à alimenter les colonnes de la table SQL sous-jacente    
     * @param {type} $field
     * @param {type} $value
     * @returns {undefined}
     */
    setColumn($field, $value) {}

    /**
     * Récupère la valeur d'une colonne de table SQL 
     * sous-jacente
     * @param {type} $field
     * @returns {undefined}
     */
    getColumn($field) {}

    /**
     * Charge en mémoire une ligne de BD si elle existe
     * @param {type} $id
     * @returns {undefined}
     */
    loadRec($id) {}

    /**
     * Sauvegarde une ligne en BD.
     * Si la ligne a été préalablement "chargée" alors est mise à jour en  
     * interne par appel de la méthode update(),
     * dans le cas contraire, elle est créée par appel de la méthode create()
     */
    saveRec() {}

    /**
     * Met à jour une ligne en BD
     * La mise à jour ne peut aboutir que si la ligne a été préalablement
     *  "chargée" par la méthode load(),
     * sous réserve que ce chargement ait abouti 
     * (on peut le contrôler via la méthode isLoaded() )
     */
    updateRec() {}

    /**
     * Crée une ligne en BD
     * La bonne exécution de la mise à jour peut être vérifiée via la méthode
     *  is_updated() 
     */
    createRec() {}

    /**
     * Supprime une ligne en BD
     * La suppression SQL peut se faire sous 2 conditions :
     * - soit la ligneà à supprimer a été préalablement chargée 
     *     via la méthode loadRec()
     *  - soit l'identifiant de la ligne à supprimer est transmis 
     *     directement à la méthode deleteRec()
     */
    deleteRec(id=null) {}

    /**
     * Renvoie sous la forme d'un objet l'intégralité des colonnes
     * d'une ligne BD, chargée au préalable en mémoire via la méthode loadRec()
     */
    getDatas() {}

    /**
     * Charge en mémoire l'intégralité des colonnes d'une ligne de BD
     * Ces données devront ensuite être sauvegardées par les méthodes 
     * saveRec(), updateRec() ou createRec()
     * @param {object} $datas
     */
    setDatas($datas={}) {}

    /**
     * Renvoie le dernier ID traité ou inséré en base de donnée
     */
    getLastId() {}
}

