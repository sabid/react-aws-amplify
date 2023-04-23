import logo from './logo.svg';
import './App.css';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button variation="primary">Hello world</Button>
        </p>
        
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>

      </header>
    </div>
  );
}

export default App;
