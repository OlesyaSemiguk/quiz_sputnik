import FooterComponents from 'components/Footer/FooterComponents'
import HeaderComponents from 'components/Header/HeaderComponents'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <>
      <HeaderComponents />
      <Outlet />
      <FooterComponents />
    </>
  )
}

export default LayoutPage
