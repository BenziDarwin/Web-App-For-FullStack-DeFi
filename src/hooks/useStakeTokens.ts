import {useContractFunction, useEthers} from "@usedapp/core";
import networkMapping from "../chain-info/deployments/map.json";
import TokenFarm from "../chain-info/contracts/TokenFarm.json";
import ERC20 from "../chain-info/contracts/MockWETH.json";
import { constants, Contract, utils } from "ethers";
import { useEffect, useState } from "react";


function useStakeTokens(tokenAddress: string) {
    //ChainId
    //abi
    //address
    const {chainId} = useEthers()
    const {abi} = TokenFarm
    const tokenFarmAddress = chainId ? networkMapping[String(chainId)]["TokenFarm"][0] : constants.AddressZero
    const tokenFarmInterface = new utils.Interface(abi)
    const tokenFarmContract = new Contract(tokenFarmAddress , tokenFarmInterface)
    const [amountToStake, setStakeAmount] = useState("0")

    const erc20Abi = ERC20.abi
    const erc20Interface = new utils.Interface(erc20Abi)
    const erc20Contract = new Contract(tokenAddress,erc20Interface)

    const {send: approveERC20Send, state: approveERC20State} = useContractFunction(erc20Contract,"approve",{transactionName:"Approve erc20 transfer"})
    const approveAndStake = (amount: string) => {
        setStakeAmount(amount)
        return approveERC20Send(tokenFarmAddress,amount)

    }

    const {send:stakeSend, state:stakeState} = useContractFunction(tokenFarmContract,"stakeTokens",{transactionName:"Stake tokens"})
    useEffect(() => {
        if(approveERC20State.status == "Success") {
            stakeSend(amountToStake,tokenAddress)
        }
    },[approveERC20State,amountToStake,tokenAddress])
    return {approveAndStake,approveERC20State}
}

export default useStakeTokens