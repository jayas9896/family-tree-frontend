import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import './config/aws-config';

interface AppProps extends WithAuthenticatorProps {
}

function App({ signOut, user }: AppProps) {
    return (
        <div>
        <p>Hello, {user?.username}</p>
        <button onClick={signOut}>Sign out</button>
        </div>
    );
}

export default withAuthenticator(App);