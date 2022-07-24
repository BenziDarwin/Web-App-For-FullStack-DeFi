import { ChainId, useEthers} from '@usedapp/core';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import "../Styles/Header.css";
import helperConfig from "../helper-config.json";


function Header() {
  var { activateBrowserWallet, deactivate, account,chainId} = useEthers()
  return (
    <div className="header">
        {account ? (

        <Button className="btn btn-danger" onClick={deactivate}>
        Deactivate
        </Button>
    ): <Button className="btn btn-success" onClick={activateBrowserWallet}>
            Activate
        </Button>}
        <h1 className="mt-2 title">Dapp Staking</h1>
        </div>
  )
}

export default Header