import React from "react";
import { Navbar, Container } from "react-bootstrap"; // ✅ Importation de Bootstrap pour la barre de navigation
import profileImage from "../assets/image4.png"; // ✅ Chemin vers l'image de profil

const Navigation = ({ firstName }) => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">Anidassor</Navbar.Brand>

        {/* Affichage conditionnel de l'image + message */}
        {firstName && (
          <div className="d-flex flex-column align-items-center">
            <img
              src={profileImage}
              alt="User"
              className="rounded-circle"
              style={{ width: "50px", height: "50px", objectFit: "cover" }} // ✅ Ajustement de la taille
            />
            <h3 className="mt-2">Bonjour, {firstName}!</h3> {/* ✅ Message sous l'image */}
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;