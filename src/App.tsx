import { Container } from '@material-ui/core';
import { DAppProvider, Kovan, Mainnet, Rinkeby, Config } from '@usedapp/core';
import Header from './Components/Header';
import Main from './Components/Main';
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const config: Config = {
    networks:[Rinkeby ,Mainnet ,Kovan],
    notifications:{
      checkInterval:500,
      expirationPeriod:50000,
    }
  }
  return (
  <DAppProvider config={config}>
    <div>
    <Header/>
      <Container maxWidth="md" className="mt-3">
        <Main/>
      </Container>
    </div>
  </DAppProvider>
  );
}

export default App;
