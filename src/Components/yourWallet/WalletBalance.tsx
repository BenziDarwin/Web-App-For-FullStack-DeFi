import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core";
import {Token} from "../Main";
import {formatUnits} from "@ethersproject/units";
import useStakeTokens from "../../hooks/useStakeTokens";
import { Button, Input, CircularProgress } from "@material-ui/core";
import React from "react";
import {utils} from "ethers";

export interface WalletBalanceProps {
    token: Token,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    amount: number|string|Array<string|number>,
    children?: String
}

function WalletBalance({token,handleChange,amount,children}: WalletBalanceProps) {
    const {image, address, name} = token;
    const {account} = useEthers();
    const balance = useTokenBalance(address,account);
    const balanceInEth:number = balance? parseFloat(formatUnits(balance,18)):0
    const {approveAndStake, approveAndStakeERC20State} = useStakeTokens(address) 
    const isMining = approveAndStakeERC20State.status === "Mining"
    const handleStakeSubmit = () => {
        const amountAsWei = utils.parseEther(amount.toString())
        approveAndStake(amountAsWei.toString())
    }

    return (
        <div>
            <img style={{height:"20px",width:"auto"}} src={image} alt="token symbol" />
            <h4>Token Name: {name}</h4>
            <h4>Balance:{balanceInEth.toString()}</h4>
            <div className="submit container text-center">
                        <Input style={{backgroundColor:"white",borderRadius:"8px"}} onChange={handleChange}/><br /><br />
                        <Button disabled={isMining} onClick={handleStakeSubmit} style={{backgroundColor:"lightgrey"}}  className="w-25">
                            {isMining ?<CircularProgress size={20}/> : children}</Button>
                        </div>
        </div>
    )

}

export default WalletBalance