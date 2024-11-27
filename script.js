class Utilisateur {
  constructor(nom) {
    this.nom = nom;
    this.publications = [];
    this.groupes = [];
  }

  publier(contenu) {
    const motsInterdits = ["tottenham", "Tottenham", "spurs", "Spurs"];
    if (motsInterdits.some((mot) => contenu.toLowerCase().includes(mot))) {
      throw new Error("Erreur : contenu inapproprié détecté.");
    }
    this.publications.push(contenu);
    console.log(`Publication ajoutée : "${contenu}"`);
  }
}

try {
  const user = new Utilisateur("Quentin");
  user.publier("Arsenal");
  user.publier("Tottenham");
} catch (error) {
  console.error(error.message);
}

/////////////////////////////////////////////////////////////////////////

class Publication {
  constructor(auteur, contenu) {
    this.auteur = auteur;
    this.contenu = contenu;
    this.commentaires = [];
  }

  ajouterCommentaire(commentaire) {
    const motsInterdits = ["Kane", "Son"];
    if (motsInterdits.some((mot) => commentaire.includes(mot))) {
      throw new Error("Le commentaire contient des insultes interdites.");
    }

    this.commentaires.push(commentaire);
  }
}

try {
  const pub = new Publication("Quentin", "Publication valide ici");
  pub.ajouterCommentaire("Publication valide ici");
  console.log(pub.commentaires);

  pub.ajouterCommentaire("Kane");
} catch (e) {
  console.error(e.message);
}

/////////////////////////////////////////////////////////////////////////

class Commentaire {
  constructor(auteur, contenu) {
    this.auteur = auteur;
    this.contenu = contenu;
  }
}

ajouterCommentaire(commentaire);
{
  if (!(commentaire instanceof Commentaire)) {
    throw new Error(
      "Le commentaire doit être une instance de la classe Commentaire."
    );
  }

  const motsInterdits = ["Kane", "Son"];
  if (motsInterdits.some((mot) => commentaire.contenu.includes(mot))) {
    throw new Error("Le commentaire contient des insultes interdites.");
  }

  this.commentaires.push(commentaire);
}

try {
  const pub = new Publication("Quentin", "Ceci est une publication.");

  const comm1 = new Commentaire("LeQ", "Nouveau commentaire");
  pub.ajouterCommentaire(comm1);

  console.log(pub.commentaires);

  const comm2 = new Commentaire("Roma", "Kane est mauvais");
  pub.ajouterCommentaire(comm2);
} catch (e) {
  console.error(e.message);
}

/////////////////////////////////////////////////////////////////////////

class Groupe {
  constructor(nom, estPrivé = false) {
    this.nom = nom;
    this.membres = [];
    this.estPrivé = estPrivé;
  }

  ajouterMembre(utilisateur) {
    if (this.membres.includes(utilisateur)) {
      console.log(`${utilisateur} est déjà membre du groupe.`);
      return;
    }
    this.membres.push(utilisateur);
    console.log(`${utilisateur} a été ajouté au groupe.`);
  }

  afficherContenu(utilisateur) {
    if (this.estPrivé && !this.membres.includes(utilisateur)) {
      throw new Error(
        `Erreur : ${utilisateur} vous n'avez pas accès à ce groupe.`
      );
    }
    return `Contenu du groupe : ${this.nom}`;
  }
}
try {
  const groupe1 = new Groupe("Développeurs JS", true);

  groupe1.ajouterMembre("Alice");
  groupe1.ajouterMembre("Bob");

  console.log(groupe1.afficherContenu("Alice")); // Affiche le contenu
  console.log(groupe1.afficherContenu("Charlie"));
} catch (e) {
  console.error(e.message);
}

/////////////////////////////////////////////////////////////////////////
