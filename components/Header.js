import Link from 'next/link';
import HeaderStyles from './../styles/HeaderStyles';

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <a>
        <img src="https://www.verkada.com/wp-content/themes/verkada/assets/images/logo.svg" alt="Verkada Logo" />
      </a>
    </Link>
  </HeaderStyles>
);

export default Header;
