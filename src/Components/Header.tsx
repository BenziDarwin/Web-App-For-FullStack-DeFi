import { ChainId, useEthers} from '@usedapp/core';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import "../Styles/Header.css";
import helperConfig from "../helper-config.json";


function Header() {
  var { activateBrowserWallet, deactivate, account,chainId} = useEthers()
 
    var network_name = account ? helperConfig[ChainId.Rinkeby].toUpperCase():null
    console.log(network_name)
  return (
    <div className="header">
        {account ? (

        <Button className="btn btn-danger d-none d-md-block" onClick={deactivate}>
        Deactivate
        </Button>
    ): <Button className="btn btn-success d-none d-md-block" onClick={activateBrowserWallet}>
            Activate
        </Button>}
        <h1 className="mt-2 title">Dapp Staking&nbsp;<span>{network_name}</span></h1>
        </div>
  )
}

export default Header