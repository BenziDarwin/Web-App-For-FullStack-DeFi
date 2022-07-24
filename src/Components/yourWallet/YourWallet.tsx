import { Token } from "../Main";
import {Box} from "@material-ui/core";
import "../../Styles/YourWallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row} from "react-bootstrap";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import {Tab} from "@material-ui/core"
import React, { useState } from "react";
import WalletBalance from "./WalletBalance";
import {Button, Input} from "@material-ui/core";
interface YourWalletProps{
    supportedTokens: Array<Token>
}
function YourWallet({supportedTokens}: YourWalletProps) {
    const [useTokenIndex,setTokenIndex] = useState<number>(0);
    const [useTokenIndex2,setTokenIndex2] = useState<number>(0);
    const [useAmount,setAmount] = useState<number|string|Array<string|number>>(0);
    const [useAmount2,setAmount2] = useState<number|string|Array<string|number>>(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTokenIndex(parseInt(newValue));
    }
    const handleChange2 = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTokenIndex2(parseInt(newValue));
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = event.target.value;
        setAmount(newAmount);
        console.log(newAmount);
    }
    const handleAmountChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = event.target.value;
        setAmount2(newAmount);
        console.log(newAmount)
    }

    return(
        <>
        <Box className="wallet d-none d-md-block">
            <Box style={{opacity:1}} className="wallet content container text-center">
                <Row className="row">
                    <h2 className="p-3"><u>Tokens in Wallet</u></h2>
                    <TabContext value={useTokenIndex.toString()}>
                        <TabList onChange={handleChange} aria-label="stake form tabs">
                            {supportedTokens.map((token,index) => {
                                return(
                                    <Tab label={token.name} value={index.toString()}/>
                                )
                            }
                        )
                        }
                        </TabList>
                        {supportedTokens.map((token,index) => {
                            return (
                                <TabPanel value={index.toString()} key={index}>
                                    <div>
                                        <WalletBalance amount={useAmount} token={supportedTokens[useTokenIndex]} handleChange={handleAmountChange}>Stake Tokens</WalletBalance>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </TabContext>
                </Row>
                <hr style={{backgroundColor:"white",width:"auto"}}/>
                <Row className="row">
                    <h2 className="p-3"><u>Staked Tokens</u></h2>
                <TabContext value={useTokenIndex2.toString()}>
                        <TabList onChange={handleChange2} aria-label="stake form tabs">
                            {supportedTokens.map((token,index) => {
                                return(
                                    <Tab label={token.name} value={index.toString()}/>
                                )
                            }
                        )
                        }
                        </TabList>
                        {supportedTokens.map((token,index) => {
                            return (
                                <TabPanel value={index.toString()} key={index}>
                                    <div>
                                        <WalletBalance amount={useAmount2} token={supportedTokens[useTokenIndex2]} handleChange={handleAmountChange2}>Unstake Tokens</WalletBalance>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </TabContext>
                </Row>
            </Box>
        </Box>
        <Box className="d-md-none">
            <Box style={{opacity:1, height:"100px"}} className="content container text-center">
                <Row className="row">
                    <h2 className="p-3"><u>Tokens in Wallet</u></h2>
                    <TabContext value={useTokenIndex.toString()}>
                        <TabList onChange={handleChange} aria-label="stake form tabs">
                            {supportedTokens.map((token,index) => {
                                return(
                                    <Tab label={token.name} value={index.toString()}/>
                                )
                            }
                        )
                        }
                        </TabList>
                        {supportedTokens.map((token,index) => {
                            return (
                                <TabPanel value={index.toString()} key={index}>
                                    <div>
                                        <WalletBalance amount={useAmount} token={supportedTokens[useTokenIndex]} handleChange={handleAmountChange}>Stake Tokens</WalletBalance>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </TabContext>
                </Row>
                <hr style={{backgroundColor:"white",width:"auto"}}/>
                <Row className="row">
                    <h2 className="p-3"><u>Staked Tokens</u></h2>
                <TabContext value={useTokenIndex2.toString()}>
                        <TabList onChange={handleChange2} aria-label="stake form tabs">
                            {supportedTokens.map((token,index) => {
                                return(
                                    <Tab label={token.name} value={index.toString()}/>
                                )
                            }
                        )
                        }
                        </TabList>
                        {supportedTokens.map((token,index) => {
                            return (
                                <TabPanel value={index.toString()} key={index}>
                                    <div>
                                        <WalletBalance amount={useAmount2} token={supportedTokens[useTokenIndex2]} handleChange={handleAmountChange2}>Unstake Tokens</WalletBalance>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </TabContext>
                </Row>
            </Box>
        </Box>
        </>
        )
}

export default YourWallet