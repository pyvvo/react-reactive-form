import { FC, ReactNode, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import KeycloakContext from './auth.context';

interface IKeycloakProviderProps {
  url: string;
  realm: string;
  clientId: string;
  children: ReactNode;
}

const KeycloakProvider: FC<IKeycloakProviderProps> = ({
  url,
  realm,
  clientId,
  children
}) => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);

  useEffect(() => {
    const kc = new Keycloak({
      url,
      realm,
      clientId
    });
    // Initialize and configure the Keycloak instance here if needed
    setKeycloak(kc);
  }, [url, realm, clientId]);

  return (
    <KeycloakContext.Provider value={keycloak}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
