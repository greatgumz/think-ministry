import Link from 'next/link';
import HeaderStyles from './../styles/HeaderStyles';

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <a>
        <img
          src="https://www.thinkministry.com/uploads/image/792d9394a6e940bb800a575e81803350/MPLogo_0Margin_Transparent_280wX47h_1.png"
          alt="Think Ministry Logo"
        />
      </a>
    </Link>
  </HeaderStyles>
);

export default Header;
