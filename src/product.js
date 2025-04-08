// Importation des images du produit à partir du dossier 'assets'
import image1 from "./assets/product1.png";  
import image2 from "./assets/product2.png";
import image3 from "./assets/product3.png";

// Définition de l'objet 'product' qui contient les informations du produit
const product = {
  name: "capture d'écran",  // Nom du produit
  price: "500000 FCFA",     // Prix du produit
  description: "capture d'écran de checkpoint auto.",  // Description du produit
  images: [image1, image2, image3]
};

// Exportation de l'objet 'product' afin qu'il puisse être utilisé dans d'autres fichiers
export default product;
