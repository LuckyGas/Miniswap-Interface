import React from 'react'
import styled from 'styled-components'
import { Link as HistoryLink } from 'react-router-dom'
import Logo from '../assets/svg/logo.svg'
import { isMobile } from 'react-device-detect'
const RightPrivey = styled.div`
    // width: 252px;
    border: 2px solid #888d9b;
    border-radius: 20px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    margin-right: 50px;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:20px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    // width:116px;
    font-size:14px;
    margin-right: 20px;
`};
`
const UniIcon = styled(HistoryLink)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`
const Privacy = styled.div`
    color: #2b2b2b;
    font-size: 14px;
`
const LogoDiv = styled.div`
    
     display:flex;
     justify-content: center;
`
const FooterWraper = styled.div`
    width:100%;
    margin:0 auto;
    position:fixed;
    bottom:80px;
`;
const FooterBox = styled.div`
    flex:1
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:0 auto;
    padding:0 20px;
    max-width:1200px;
`;
export default function Footer() {
    return(
        <FooterWraper>
            {isMobile && <LogoDiv>
                    <UniIcon id="link" to="/" style={{marginBottom:'50px'}}>
                       <img src={Logo} alt="logo" />
                    </UniIcon>
                </LogoDiv>
                }                           
            <FooterBox>
                <div style={{display:'flex',alignItems:'center'}}>
                    <RightPrivey>
                      © Miniswap 2018-2020
                    </RightPrivey>
                    <Privacy>
                       Privacy Policy
                    </Privacy>
                </div>
                {!isMobile && <LogoDiv>
                                    <UniIcon id="link" to="/">
                                     <img src={Logo} alt="logo" />
                                    </UniIcon>
                                </LogoDiv>
                }
            </FooterBox>
            
            
        </FooterWraper>
    )
}