import { Token } from "../Main";
import {Box} from "@material-ui/core";
import "../../Styles/YourWallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row} from "react-bootstrap";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import {Tab} from "@material-ui/core"
import { ReactEventHandler, useState } from "react";
interface YourWalletProps{
    supportedTokens: Array<Token>
}
function YourWallet({supportedTokens}: YourWalletProps) {
    const [useTokenIndex,setTokenIndex] = useState<number>(0)
    const [useTokenIndex2,setTokenIndex2] = useState<number>(0)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTokenIndex(parseInt(newValue))
    }
    const handleChange2 = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTokenIndex2(parseInt(newValue))
    }
    return(
        <Box className="wallet d-none d-md-block">
            <Box style={{opacity:1}} className="wallet content container text-center">
                <Row className="row">
                    <h2 className="p-3">Tokens in Wallet</h2>
                    <TabContext value={useTokenIndex.toString()}>
                        <TabList onChange={handleChange} aria-label="stake form tabs">
                            {supportedTokens.map((token,index) => {
                                return(
                                    <Tab label={token.name} value={index.toString()}>

                                    </Tab>
                                )
                            }
                        )
                        }
                        </TabList>
                    </TabContext>
                </Row>
                <hr style={{backgroundColor:"white",width:"auto"}}/>
                <Row className="row">
                    <h2 className="p-3">Staked Tokens</h2>
                <TabContext value={useTokenIndex2.toString()}>
                        <TabList onChange={handleChange2} aria-label="stake form tabs">
                            {supportedTokens.map((token,index) => {
                                return(
                                    <Tab label={token.name} value={index.toString()}>

                                    </Tab>
                                )
                            }
                        )
                        }
                        </TabList>
                    </TabContext>
                </Row>
            </Box>
        </Box>
        )
}

export default YourWallet