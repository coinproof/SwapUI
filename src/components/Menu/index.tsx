import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@becoswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { LanguageContext } from 'hooks/LanguageContext'
import useGetPriceData from 'hooks/useGetPriceData'

import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import { languageList } from 'constants/localization/languages'
import links from './config'
import { BECO } from '../../constants'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  const cakePriceUsd = (priceData && priceData.data) ? Number(priceData.data[BECO.address].price) : undefined
  const profile = useGetLocalProfile()

  return (
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
      cakePriceUsd={cakePriceUsd}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
