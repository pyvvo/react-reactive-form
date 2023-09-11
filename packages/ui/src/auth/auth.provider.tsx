import { FC, ReactNode, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import KeycloakContext from './auth.context';

export interface IKeycloakProviderProps {
  keycloak: Keycloak;
  onLoad?: 'check-sso' | 'login-required';
}

const KeycloakProvider: FC<
  IKeycloakProviderProps & { children: ReactNode }
> = ({ keycloak, onLoad, children }) => {
  useEffect(() => {
    const init = async (onLoad: IKeycloakProviderProps['onLoad']) => {
      keycloak.init({ onLoad });
    };
    if (onLoad) {
      init(onLoad);
    }
  }, [onLoad]);

  return (
    <KeycloakContext.Provider value={keycloak}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
