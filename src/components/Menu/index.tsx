import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@becoswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { LanguageContext } from 'hooks/LanguageContext'
import useGetPriceData from 'hooks/useGetPriceData'

import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import { languageList } from 'constants/localisation/languageCodes'
import links from './config'
import { NOVA } from '../../constants'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const novaPriceUsd = useGetPriceData()

  // const novaPriceUsd = (priceData && priceData.data) ? Number(priceData.data[NOVA.address].price) : undefined
  // const profile = useGetLocalProfile()

  return (
    // @ts-ignore: Unreachable code error
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={languageList}
      setLang={setSelectedLanguage}
      novaPriceUsd={novaPriceUsd}
      priceLink="https://poocoin.app/tokens/0x82d6e409438e9c2eaed8ceec4bd95918cbd17c87"
      // profile={profile}
      {...props}
    />
  )
}

export default Menu
