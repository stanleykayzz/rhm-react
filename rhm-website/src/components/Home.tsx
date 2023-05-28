import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container>
            <div className="post-preview col-md-10 mx-auto">
                <h2>Bienvenue sur le site web des résidences des hauts de Ménaye.</h2>
                <hr />
                <div className="row">
                    <div>
                        <p>La Résidence des Hauts de Ménaye,</p>
                        <p>Est le cadre idéal pour vous faire profiter de l'Authenticité de la Nature et du Luxe du
                            Silence.</p>
                        <p>Découvrez un nouveau Concept pour faire revivre tous les Sens,</p>
                        <p> Deconnectez vous complétement de votre vie quotidienne de travail,</p>
                        <p>Jour et Nuit, Tendez votre Oreille pour entendre le Murmure du Vent dans les Arbres, le Chant
                            des Oiseaux et vos Soupirs de Satisfactions</p>
                        <p>Une salle de sport et un Mini-golf sont disponibles,</p>
                        <p>Des Sites touristiques sont à visiter sur Demande.</p>
                    </div>
                </div>
                <hr/>
            </div>
        </Container>
    );
}