import { FC, ReactNode, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import KeycloakContext from './auth.context';

export interface IKeycloakProviderProps {
  keycloak: Keycloak;
  // eslint-disable-next-line react/require-default-props
  onLoad?: 'check-sso' | 'login-required';
}

const KeycloakProvider: FC<
  IKeycloakProviderProps & { children: ReactNode }
> = ({ keycloak, onLoad, children }) => {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     console.log('here window');
  //     // eslint-disable-next-line @typescript-eslint/no-shadow
  //     const init = async (onLoad: IKeycloakProviderProps['onLoad']) => {
  //       keycloak.init({ onLoad });
  //     };
  //     if (onLoad) {
  //       init(onLoad);
  //     }
  //   }
  // }, [onLoad]);
  // console.log('here out');
  return (
    <KeycloakContext.Provider value={keycloak}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
