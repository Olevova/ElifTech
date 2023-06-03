import { HeaderLink } from "./Heder.styled"
import { HeaderSection } from "./Heder.styled"
import {useLocation } from 'react-router-dom';



export const Header = () => {
    const location = useLocation();
    console.log(location);
    const isActive = (path) =>{
        return location.pathname===path
    }


    return (<HeaderSection>
        <nav>
          <ul className="header_nav">
            <li className="header_li">
              <HeaderLink to="/" className={isActive('/') ? 'active' : ''}>
                Shop
              </HeaderLink>
            </li>
            <li className="header_li">
              <HeaderLink to="shoping" className={isActive('/shoping') ? 'active' : ''}>
                Shoping Card
              </HeaderLink>
            </li>
          </ul>
        </nav>
      </HeaderSection>
    )
}