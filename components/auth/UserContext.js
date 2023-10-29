//page stockant les données

import React, { createContext, useContext, useState } from 'react';

// Créez un contexte
const UserContext = createContext();

export const useUser = () => {
	return useContext(UserContext);
};

// Créez un composant de contexte qui stocke l'objet utilisateur
export const UserProvider = ({ children }) => {
	const [utilisateurSt, setUtilisateurSt] = useState({
		username: '',
		password: ''
	}); 

    const [contenuPanier, setContenuPanier] = useState([]);
	const [gouters, setGouters] = useState(
    [
        {
          "id": 1,
          "name": "Cacapigeon aux poivres verts",
          "image": require("../../assets/images/cacapigeon.webp"),
          "prix": 1000
        },
        {
          "id": 2,
          "name": "Mofo ravina",
          "image": require("../../assets/images/mofo_ravina.jpg"),
          "prix": 1500
        },
        {
          "id": 3,
          "name": "Nem",
          "image": require("../../assets/images/nem.jpg"),
          "prix": 800
        }
    ]);

	return (
		<UserContext.Provider value={{ utilisateurSt, setUtilisateurSt, contenuPanier, setContenuPanier, gouters, setGouters }}>
			{children}
		</UserContext.Provider>
	);
};
