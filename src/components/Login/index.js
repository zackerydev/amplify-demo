import React from 'react';
import { AmplifyAuthContainer, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

const Login = (props) => {

  /* Location 3 */
  React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            props.setAuthState(nextAuthState);
            props.setUser(authData);
        });
    }, []);
  /* Location 2  - Replace the return function below!*/
  return (
        <AmplifyAuthContainer>
            <AmplifyAuthenticator />
        </AmplifyAuthContainer>
    );
}

export default Login;
