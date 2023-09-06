import React, { useEffect, useState, useContext, ReactNode, FC } from 'react';
import KeycloakContext from './auth.context';
import useKeycloak from './auth.hooks';

interface IKeycloakGuard {
  children: ReactNode;
}
const KeycloakGuard: FC<IKeycloakGuard> = ({ children }) => {
  const keycloak = useKeycloak();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (keycloak) {
      const initKeycloak = async () => {
        try {
          const authenticated = await keycloak.init({
            onLoad: 'login-required'
          });
          setIsAuthenticated(authenticated);
        } catch (error) {
          console.error('Failed to initialize adapter:', error);
        }
      };

      initKeycloak();
    }
  }, [keycloak]);

  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return <div>Please log in to access this content.</div>;
};

export default KeycloakGuard;
