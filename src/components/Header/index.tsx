import { ChainId, WETH } from '@uniswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Link as HistoryLink } from 'react-router-dom'
import { Text } from 'rebass'

import styled from 'styled-components'

import Logo from '../../assets/svg/logo.svg'
import LogoDark from '../../assets/svg/logo_white.svg'
import Wordmark from '../../assets/svg/wordmark.svg'
import WordmarkDark from '../../assets/svg/wordmark_white.svg'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useTokenBalanceTreatingWETHasETH } from '../../state/wallet/hooks'

import { ExternalLink, StyledInternalLink } from '../../theme'
import { YellowCard } from '../Card'
import { AutoColumn } from '../Column'
import Settings from '../Settings'
import Menu from '../Menu'

import Row, { RowBetween } from '../Row'
import Web3Status from '../Web3Status'
import VersionSwitch from './VersionSwitch'
import QianBao from '../../assets/QianBao.png'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  height:100px;
  line-height:100px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
margin-top: 0.5rem;
`};
`

const Title = styled.div`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const TitleText = styled(Row)`
  width: fit-content;
  white-space: nowrap;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  display:none

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
  // display:flex;
  // border:1px solid yellow;
  // alignItems:center
`

const NetworkCardCM = styled(YellowCard)`
border: 2px solid #fcb0aa;
height:36px;
padding:0;
width:36px;
background: #fff;
font-size: 14px;
display:flex;
align-items:center;
color:#000000;
margin-left:40px;
border-radius:50%;
`
const NetworkCard = styled(YellowCard)`
border: 2px solid #fcb0aa;
background: #fff;
font-size: 14px;
height: 32px
display:flex;
align-items:center;
// line-height: 28px;
color:#000000;
padding-left:30px;
padding-right: 30px;

`
const UniIcon = styled(HistoryLink)<{ to: string }>`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const MigrateBanner = styled(AutoColumn)`
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.primaryText1};
  font-weight: 400;
  text-align: center;
  pointer-events: auto;
  a {
    color: ${({ theme }) => theme.primaryText1};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0;
    display: none;
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    `};
`
const headHeight = isMobile ? "60px" :'100px';

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useTokenBalanceTreatingWETHasETH(account, WETH[chainId])
  const [isDark] = useDarkModeManager()

  return (
    <HeaderFrame>
      {/* <MigrateBanner> */}
        {/* Miniswap is live! Read the&nbsp;*/}
        {/*<ExternalLink href="https://uniswap.org/blog/launch-uniswap-v2/">*/}
        {/*  <b>blog post ↗</b>*/}
        {/*</ExternalLink>*/}
        {/*&nbsp;or&nbsp;*/}
        {/*<StyledInternalLink to="/migrate/v1">*/}
        {/*  <b>migrate your liquidity ↗</b>*/}
        {/*</StyledInternalLink>*/}
        {/*.*/}
      {/* </MigrateBanner> */}
      <RowBetween style={{ maxWidth:'1200px',margin:'0 auto',height: headHeight,paddingLeft:'10px',paddingRight:'10px'}}>
        <HeaderElement>
          <Title >
            <UniIcon id="link" to="/" style={{display:'flex',alignItems:'center'}}>
               <img src={isDark ? LogoDark : Logo} alt="logo" />
            </UniIcon>
            {/*{!isMobile && (*/}
            {/*  <TitleText>*/}
            {/*    <HistoryLink id="link" to="/">*/}
            {/*      <img*/}
            {/*        style={{ marginLeft: '4px', marginTop: '4px' }}*/}
            {/*        src={isDark ? WordmarkDark : Wordmark}*/}
            {/*        alt="logo"*/}
            {/*      />*/}
            {/*    </HistoryLink>*/}
            {/*  </TitleText>*/}
            {/*)}*/}
          </Title>
        </HeaderElement>
        
        <HeaderControls style={{'display':'flex','alignItems':'center'}} >
          <HeaderElement>
            { !isMobile ? <div style={{marginRight:'70px'}}>Developers</div>:null }
            { !isMobile ? <div style={{marginRight:'80px'}} >Whitepaper</div>:null}
            <TestnetWrapper>
              {!isMobile && NETWORK_LABELS[chainId] && <NetworkCard style={{paddingTop:"0",paddingBottom:0}}>
                  
                    <img src={QianBao} style={{width:"26px",height:'18px',marginRight:'10px'}}/>
                    <span>{NETWORK_LABELS[chainId]}</span>
                </NetworkCard>}

            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <Text style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} ETH
                </Text>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          { isMobile ? <HeaderElementWrap>
                            <Settings/>
                            <NetworkCardCM>
                                    <img src={QianBao} style={{width:"24px",margin:'0 auto'}}/>
                            </NetworkCardCM>
                         </HeaderElementWrap>:
                          <HeaderElementWrap style={{marginLeft:'60px'}}>
                              {/*<VersionSwitch />*/}
                                <Settings/>
                               {/*<Menu />*/}
                        </HeaderElementWrap>
                         }
         
        </HeaderControls>
      </RowBetween>
    </HeaderFrame>
  )
}
