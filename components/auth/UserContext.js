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
	return (
		<UserContext.Provider value={{ utilisateurSt, setUtilisateurSt }}>
			{children}
		</UserContext.Provider>
	);
};
