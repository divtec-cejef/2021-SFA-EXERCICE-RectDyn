/**
 * @author      Steve Fallet <steve.fallet@divtec.ch>
 * @version     0.1
 * @since       2021-03-19
 *
 * http://usejsdoc.org/
 */

(function main() {
    "use strict"; // Demande un interprétation stricte du code

    /* Création d'une nouvelle application Vue sur l'élément HTML #rect-dyn-app */
    const RectDynApp = new Vue({
        name: 'RectDynApp',
        el: '#rect-dyn-app', // élément HTML lié à l'application Vue
        // objet représentant les données de l'application Vue
        data: {
            /* Pour lier un donnée à une élément deformulaire il faut
             ajouter l'attribut (v-model) à l'input :
             <input v-model="hauteur" ... />
             */
            hauteur: '110',
            largeur: '120',
            couleurFond: 'yellow',
            couleurTexte: 'black',
            gras: false,
            souligne: false,
            texte: 'Votre texte'
        },
        methods: {
            modifierRectangle: function () {
                // Largeur
                this.$refs.rectangle.style.width = this.largeur + 'px';
                // Hauteur
                this.$refs.rectangle.style.height = this.hauteur + 'px';
                // Couleur de fond
                this.$refs.rectangle.style.background = this.couleurFond;
                // Couleur du texte
                this.$refs.rectangle.style.color = this.couleurTexte;
                // Si gras est coché
                this.$refs.rectangle.style.fontWeight = this.gras
                  ? "bold"
                  : "normal";
                // Si souligné est coché
                this.$refs.rectangle.style.textDecoration = this.souligne
                  ? "underline"
                  : "none";
                // Texte
                this.$refs.rectangle.innerHTML = this.texte;
            }
        }
    })


    function miseAJour(event) {
        //Stoppe l'envoi du formulaire
        event.preventDefault();

        /*** Hauteur et largeur ***/
            //Récupère la hauteur et la largeur sans oublier de les convertir en entier
        let hauteur = parseInt(txtHauteur.value, 10); //Retourne un entier ou NaN
        let largeur = parseInt(txtLargeur.value, 10);

        //Si hauteur ou largeur ne sont PAS des nombres
        if (isNaN(hauteur) || isNaN(largeur)) {
            alert("Entrez un nombre !");
            return false; //Stoppe le script, code de la fonction
        }

        //Si la hauteur ou la largeur sont inférieures à 500 et positifs
        if (hauteur > 500 || hauteur <= 0 || largeur > 500 || largeur <= 0) {
            alert("Largeur et hauteur max 500 !");
            return false;
        }

        //Modification de la hauteur et de la largeur
        divRectangle.style.height = hauteur + "px";
        divRectangle.style.width = largeur + "px";

        /*** Couleur de fond ***/
        divRectangle.style.background = optCouleur.value;

        /*** Couleur du texte ***/
        //divRectangle.style.color = getRadio(document.getElementsByName("color"));
        //ou plus efficace avec querySelector()
        //querySelector('sélecteur CSS') récupère le 1er élément HTML correspondant au sélecteur CSS en paramètre
        //querySelectorAll('sélecteur CSS') récupère tous les éléments HTML correspondant au sélecteur CSS en paramètre
        divRectangle.style.color = formRect.querySelector('[name="color"]:checked').value;

        /*** Style du texte ***/
        //Si le style gras est coché
        if (chkGras.checked) {
            divRectangle.style.fontWeight = "bold";
        } else {
            divRectangle.style.fontWeight = "normal";
        }

        //Si souligné est coché -- affectation avec condition ternaire
        divRectangle.style.textDecoration = chkSouligne.checked
            ? "underline" //Si condition vrai
            : "none"; //Si condition fausse

        /*** Texte du rectangle ***/
        divRectangle.innerHTML = txtTxt.value;

        //formRect.submit(); //Envoie le formulaire

        /*** Stoppe l'envoi du formulaure ***/
        //return false;
    }

    //Affecte la fonction miseAJour à l'envoi du formRect
    //formRect.onsubmit = miseAJour; //Pas de parenthèses
    //formRect.addEventListener('submit', miseAJour);

    //Réinitialisation du carre sur le reset du formulaire
    /*formRect.addEventListener('reset', function resetForm() {
        // Supprime les styles appliqués par le script
        divRectangle.style.cssText = "";
        divRectangle.innerText = DIV_RECTANGLE_TXT;
    });*/

}()); // Main IIFE
