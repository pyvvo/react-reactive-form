Certainly! Here's a Markdown README that guides users on how to use the Keycloak context library in a Storybook with the Decorator approach:

---

# Keycloak Context Library for Storybook

Integrate Keycloak authentication seamlessly into your Storybook stories using the Decorator approach. This guide will walk you through the process.

## Installation

Before you begin, ensure you have the Keycloak context library installed in your project.

```bash
npm install --save keycloak-context-library
```

## Setting up the Keycloak Decorator

First, create a Keycloak wrapper component that initializes the Keycloak instance and provides it to the rest of your components:

```javascript
import { useState } from 'react';
import { KeycloakProvider } from 'keycloak-context-library';

const KeycloakWrapper: FC<{ children: React.ReactNode }> = (props) => {
  const keycloakConfig = {
    url: 'http://keycloak-server',
    realm: 'myrealm',
    clientId: 'myapp'
  };

  return (
    <KeycloakProvider {...keycloakConfig}>
      {props.children}
    </KeycloakProvider>
  );
};
```

Next, set up the decorator for Storybook:

```javascript
const KeycloakDecorator = (Story: Function) => (
  <KeycloakWrapper>
    <Story />
  </KeycloakWrapper>
);

export const decorators = [KeycloakDecorator];
```

## Using in Storybook

With the decorator set up, any story you write will have access to the Keycloak context:

```javascript
import { useKeycloak } from 'keycloak-context-library';

export const MyAuthenticatedComponentStory = () => {
  const keycloak = useKeycloak();

  return (
    <div>
      {keycloak.isAuthenticated ? "You're authenticated!" : "Please log in."}
    </div>
  );
};
```

## Conclusion

By using the Decorator approach in Storybook with the Keycloak context library, you can easily mock and test components that rely on Keycloak authentication. Happy coding!

---

This README provides a basic guide to integrating the Keycloak context library into Storybook using the Decorator approach. Adjustments might be needed based on the actual implementation and requirements of the project.