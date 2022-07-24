import { ChainId } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import brownieConfig from "../brownie-config.json";
import YourWallet from "./yourWallet/YourWallet";
import dapp from "../images/dapp.png";
import dai from "../images/dai.png";
import eth from "../images/eth.png";


export type Token = {
    image: string
    address: string
    name: string
}

function Main () {
    const network_name = helperConfig[ChainId.Rinkeby];
    const dappTokenAddress = networkMapping[ChainId.Rinkeby]["DappToken"];
    const wethTokenAddress = brownieConfig["networks"][network_name]["weth_token"];
    const daiTokenAddress = brownieConfig["networks"][network_name]["fau_token"];
    const supportedTokens: Array<Token> = [
        {
            image:eth,
            address:wethTokenAddress,
            name:"WETH"
        },
        {
            image:dai,
            address:daiTokenAddress,
            name:"DAI"
        },
        {
            image:dapp,
            address:dappTokenAddress[0],
            name:"DAT"
        }
    ]
    return(<YourWallet supportedTokens={supportedTokens}/>)
}

export default Main

   //Show token values from the wallet
    //Get addresses of different tokens
    //Get balances of of users in the wallet
    //Send brownie-config to 'src' folder
    //Send the build folder