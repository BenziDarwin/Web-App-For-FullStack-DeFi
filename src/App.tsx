import { Container } from '@material-ui/core';
import { DAppProvider, Kovan, Mainnet, Rinkeby, Config } from '@usedapp/core';
import Header from './Components/Header';
import Main from './Components/Main';
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDefaultProvider } from 'ethers';

function App() {
  const config: Config = {
    networks:[Rinkeby ,Mainnet ,Kovan],
    readOnlyChainId:Mainnet.chainId,
    readOnlyUrls: {
      [Kovan.chainId]:getDefaultProvider("kovan"),
      [Rinkeby.chainId]:getDefaultProvider("rinkeby"),
    },
    notifications:{
      checkInterval:1000,
      expirationPeriod:1000,
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
