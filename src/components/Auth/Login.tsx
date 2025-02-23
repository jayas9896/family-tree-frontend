import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

type AppProps = {
    signOut: () => void;
    user: any;
}

function App({ signOut, user }: AppProps) {
    return (
        <div>
        <p>Hello, {user.username}</p>
        <button onClick={signOut}>Sign out</button>
        </div>
    );
}

export default withAuthenticator(App);