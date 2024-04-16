import React from 'react';

import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';

export default function OrderSummary() {

    const data = [
        {
            idChambre: 1,
            typeDeChambre: "Simple",
            additionalies: "TV",
            description:
                "Cette chambre simple est équipée d'une télévision, offrant divertissement pendant votre séjour. Parfait pour les voyageurs en solo cherchant confort et commodité.",
            coutParNuit: 20,
            img: img1,
            services: [
                { name: "Spa", cost: 20 },
                { name: "WiFi", cost: 5 }
            ]
        },
        {
            idChambre: 2,
            typeDeChambre: "Double",
            additionalies: "Climatiseur",
            description:
                "Notre chambre double dispose d'un système de contrôle climatique, assurant un environnement agréable tout au long de votre séjour. Idéal pour les couples ou les petites familles cherchant détente et confort.",
            coutParNuit: 40,
            img: img2,
            services: [
                { name: "Piscine", cost: 20 },
                { name: "Petit déjeuner", cost: 5 }
            ]
        },
    ];

    const calculateTotalCost = (chambre) => {
        let total = chambre.coutParNuit;
        chambre.services.forEach(service => {
            total += service.cost;
        });
        return total;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', padding: '20px' }}>
            <div style={{ maxWidth: '800px', background: '#fff', boxShadow: '0px 15px 50px 10px rgba(0, 0, 0, 0.2)', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <h2 style={{ fontWeight: '200', fontSize: '1.5rem', marginBottom: '20px' }}>Récapitulatif de la commande</h2>
                {data.map(chambre => (
                    <div key={chambre.idChambre} style={{ width: '100%', display: 'flex', marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
                        <div style={{ flex: '0 0 200px', marginRight: '20px' }}>
                            <img src={chambre.img} alt={chambre.typeDeChambre} style={{ width: '100%', height: '90%', borderRadius: '10px' }} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <div>
                                    <p><span style={{ fontWeight: 'bold' }}>Type de chambre :</span> {chambre.typeDeChambre}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Commodités :</span> {chambre.additionalies}</p>
                                </div>
                                <div>
                                    <p><span style={{ fontWeight: 'bold' }}>Coût par nuit :</span> ${chambre.coutParNuit}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Total :</span> ${calculateTotalCost(chambre)}</p>
                                </div>
                            </div>
                            <h3>Services :</h3>
                            <ul>
                                {chambre.services.map(service => (
                                    <li key={service.name}><span style={{ fontWeight: 'bold' }}>{service.name} :</span> ${service.cost}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <div className='total' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid #ddd', marginTop: '20px', paddingTop: '20px', marginBottom: '20px' }}>
                    <div style={{ flex: '1' }}>
                        TOTAL
                    </div>
                    <div style={{ textAlign: 'right', flex: '1' }}>
                        $110.99
                    </div>
                </div>
            </div>
            <div style={{ maxWidth: '800px', background: 'black', boxShadow: '0px 15px 50px 10px rgba(0, 0, 0, 0.2)', borderRadius: '30px', padding: '20px', marginTop: '20px', width: '100%' }}>
                <h2 style={{ fontWeight: '200', fontSize: '1.5rem', color: 'white', marginBottom: '20px' }}>Formulaire de paiement</h2>
                <div className="checkout-form" style={{ color: 'white' }}>
                    <div className="form-group">
                        <label htmlFor="cardType">Veuillez sélectionner votre carte :</label>
                        <select className="form-control" id="cardType">
                            <option>Visa</option>
                            <option>Master Card</option>
                            <option>American Express</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Numéro de carte :</label>
                        <input type="text" className="form-control" id="cardNumber" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardHolder">Titulaire de la carte :</label>
                        <input type="text" className="form-control" id="cardHolder" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expires">Expire le :</label>
                        <input type="text" className="form-control" id="expires" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvc">CVC :</label>
                        <input type="text" className="form-control" id="cvc" />
                    </div>
                    <button className='btn btn-primary'>Paiement</button>
                </div>
            </div>
        </div>
    );
}