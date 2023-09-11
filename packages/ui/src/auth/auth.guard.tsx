import React, { useEffect, useState, useContext, ReactNode, FC } from 'react';
import KeycloakContext from './auth.context';
import useKeycloak from './auth.hooks';

interface IKeycloakGuard {
  children: ReactNode;
  fallback?: ReactNode;
}
const KeycloakGuard: FC<IKeycloakGuard> = ({ children, fallback }) => {
  const keycloak = useKeycloak();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkIfIsAuthenticated = () => {
    const { authenticated } = keycloak;
    setIsAuthenticated(authenticated ?? false);
    return authenticated ?? false;
  };

  useEffect(() => {
    if (keycloak) {
      checkIfIsAuthenticated();
    }
  }, [keycloak]);

  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return fallback ? (
    <>{fallback}</>
  ) : (
    <div>Please log in to access this content.</div>
  );
};

export default KeycloakGuard;
