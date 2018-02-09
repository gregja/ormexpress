// chargement du wrapper pour l'exécution des requêtes
const DBWRAPPER = require('./DBWrapper');

/* 
 * Export de la classe ActiveRecord
 */
module.exports = class ActiveRecord {
    
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
        this.fields_name = [];  // ** to override (mandatory) ** 
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
        if (this.fields_name.indexOf(field)) {
            this.fields_update [field] = value;
            return true;
        } else {
            console.log(`Propriété {field} inexistante.`);
            return false;    
        }        
    }

    /**
     * Récupère la valeur d'une colonne de table SQL 
     * sous-jacente
     * @param {type} field
     * @returns {undefined}
     */
    getColumn(field) {
        if (this.fields_name.indexOf(field)) {
            return this.fields_update [field] ;
        } else {
            console.log(`Propriété {field} inexistante.`);                
            return false;
        }              
    }

    /**
     * Charge en mémoire une ligne de BD si elle existe
     * @param {type} id
     * @returns {undefined}
     */
    loadRec(id, callback=false) {
        this.key_value = id;
        var sql = `SELECT ${this.fields_name.join(', ')} ` + 
                  `FROM ${this.table_name} WHERE ${this.key_name} = ? `;

        this.is_rec_loaded = false;
        this.is_rec_created = false;
        this.is_rec_deleted = false;
        this.is_rec_updated = false;
        this.is_rec_saved = false;    

        DBWRAPPER.selectOne(this.db, sql, [id]).then((content) => {
            var data = content.data;
            if (Object.getOwnPropertyNames(data).length === 0) {
                // si objet vide alors la requête n'a pas trouvé de ligne
                console.log('No data => '+sql);
            } else {            
                this.is_rec_loaded = true;
                this.fields_name.forEach( (element, index) => {
                    if (data.hasOwnProperty(element) ) {
                        this.fields_value [element] = data [element];
                        this.fields_update [element] = data [element];
                    }
                });  
            }
            if (callback) {
                if (typeof callback === "function") {
                    callback(this);
                } else {
                    console.log('Warning : callback pas de type function');
                }
            }
        }, (err) => {
            console.error('Erreur :', err.errcode, ' ', err.errmsg);
        });
    }

    /**
     * Sauvegarde une ligne en BD.
     * Si la ligne a été préalablement "chargée" alors est mise à jour en  
     * interne par appel de la méthode update(),
     * dans le cas contraire, elle est créée par appel de la méthode create()
     * @returns {undefined}
     */
    saveRec(callback=false) {
        if (this.is_rec_loaded) {
            this.updateRec(callback);
        } else {
            this.createRec(callback);
        }        
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
        var markers = [];
        var terms = [];

        for (let prop in this.fields_update) {
            var item_key = `${prop}`;
            var item_value = `${this.fields_update[prop]}`;

            if (item_key != this.key_name) {
                markers.push(item_key + '=?');
                terms.push(item_value);
            }
        }

        this.is_rec_updated = false;
        this.is_rec_saved = false;

        if (terms.length > 0) {
            var sql = `UPDATE ${this.table_name} SET `;
            sql += markers.join(', ');
            sql += ` WHERE ${this.key_name} = ?` ;
            terms.push(this.key_value);
           
            DBWRAPPER.execute(this.db, sql, terms).then((content) => {
                if (content.affectedRows > 0) {
                    this.is_rec_updated = true;
                    this.is_rec_saved = true;
                }
                if (callback) {
                    if (typeof callback === "function") {
                        callback(this);
                    } else {
                        console.log('Warning : callback pas de type function');
                    }
                }
            }, (err) => {
                console.error('Erreur :', err.errcode, ' ', err.errmsg);
            });                        
        }        
    }

    /**
     * Crée une ligne en BD
     * La bonne exécution de la mise à jour peut être vérifiée via la méthode
     *  is_updated() 
     * @returns {undefined}
     */
    createRec(callback=false) {
        var fields = [];
        var terms = [];
        var markers = [];
        
        for (let prop in this.fields_update) {
            var item_key = `${prop}`;
            var item_value = `${this.fields_update[prop]}`;
            if (item_key != this.key_name) {
                fields.push(item_key);
                terms.push(item_value) ;
                markers.push('?');
            }
        }
        
        this.is_rec_created = false;
        this.is_rec_saved = false;
        
        if (terms.length > 0) {       
            var sql = `INSERT INTO ${this.table_name} ( `;
            sql += fields.join(',') + ') VALUES (';
            sql += markers.join(',') + ')';
            DBWRAPPER.execute(this.db, sql, terms).then((content) => {
                if (content.affectedRows > 0) {
                    this.is_rec_created = true;
                    this.is_rec_saved = true;
                    this.key_value = content.insertId;
                }
                if (callback) {
                    if (typeof callback === "function") {
                        callback(this);
                    } else {
                        console.log('Warning : callback pas de type function');
                    }
                }              
            }, (err) => {
                console.error('Erreur :', err.errcode, ' ', err.errmsg);
            });                        
        }            
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
        if (id === null) {
            if (this.is_rec_loaded) {
                id = this.key_value ;
            }
        }
        if (id === null) {
            console.error('Erreur : suppression de ligne impossible');
            return;
        } else {
            this.key_value = id;
        }
        var sql = `DELETE FROM ${this.table_name} `;
        sql += ` WHERE ${this.key_name} = ?` ;
        var terms = [];
        terms.push(id);

        this.is_rec_deleted = false;

        DBWRAPPER.execute(this.db, sql, terms).then((content) => {
            if (content.affectedRows > 0) {
                this.is_rec_deleted = true;
            }
            if (callback) {
                if (typeof callback === "function") {
                    callback(this);
                } else {
                    console.log('Warning : callback pas de type function');
                }
            }           
        }, (err) => {
            console.error('Erreur :', err.errcode, ' ', err.errmsg);
        });                        
    }           

    /**
     * Renvoie sous la forme d'un objet l'intégralité des colonnes
     * d'une ligne BD, chargée au préalable en mémoire via la méthode loadRec() 
     * @returns {nm$_ActiveRecord.ActiveRecord.fields_value}
     */
    getDatas() {
        return this.fields_update;       
    }

    /**
     * Charge en mémoire l'intégralité des colonnes d'une ligne de BD
     * Ces données devront ensuite être sauvegardées par les méthodes 
     * saveRec(), updateRec() ou createRec()
     * @param {object} datas
     * @returns {undefined}
     */
    setDatas(datas={}) {       
        for (let prop in datas) {
            var item_key = `${prop}`;  // récupère le nom de la propriété
            var item_value = `${datas[prop]}`; // contenu de la propriété
            if (item_key == this.key_name) {
                this.key_value = item_value;
            } else {
                if (this.fields_name.indexOf(item_key)) {
                    this.fields_update[item_key] = item_value;
                } else {
                    console.log(`ERREUR : clé ${item_key} erronée`);
                }
            }
        }         
    }

    /**
     * Renvoie le dernier ID traité ou inséré en base de donnée
     * @returns {type|item_value}
     */
    getLastId() {
        return this.key_value;
    }

};


