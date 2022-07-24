import { ChainId, useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json";
import YourWallet from "./yourWallet/YourWallet";
import dapp from "../images/dapp.png";
import dai from "../images/dai.png";
import eth from "../images/eth.jpg";


export type Token = {
    image: String
    address: String
    name: String
}

function Main () {
    const {chainId} = useEthers()
    const network_name = chainId ? helperConfig[ChainId.Rinkeby]: "dev";
    const dappTokenAddress = chainId ? networkMapping[String(chainId)]["DappToken"]:constants.AddressZero;
    const wethTokenAddress = chainId ? brownieConfig["networks"][network_name]["weth_token"]:constants.AddressZero;
    const daiTokenAddress = chainId ? brownieConfig["networks"][network_name]["fau_token"]:constants.AddressZero;
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
            address:dappTokenAddress,
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