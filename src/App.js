import React from "react";
import { Container, Card } from "react-bootstrap";
import product from "./product";  // Import l'objet 'product' qui contient les données produit
import Description from "./Components/Description";
import Price from "./Components/Price";
import Name from "./Components/Name";
import Image from "./Components/Image";
import Navigation from "./Components/Navbar";

const firstName = "YOUNOUSS";  // Déclaration du prénom à afficher dans le message de bienvenue

const App = () => {
  return (
    <>
      {/* Ajout de la Navbar avec l'image et le message d'accueil */}
      <Navigation firstName={firstName} />

      {/* Conteneur principal pour le produit */}
      <Container className="d-flex flex-column align-items-center mt-5">
        
        {/* Carte pour afficher les détails du produit */}
        <Card style={{ width: "18rem" }} className="shadow-lg p-3 mb-4 bg-white rounded">
          
          {/* Corps de la carte contenant les informations du produit */}
          <Card.Body className="text-center">
            
            {/* Affichage de l'image du produit */}
            <Image images={product.images} />

            {/* Affichage du nom du produit */}
            <Name name={product.name} />

            {/* Affichage du prix du produit */}
            <Price price={product.price} />

            {/* Affichage de la description du produit */}
            <Description description={product.description} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default App;