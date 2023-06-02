import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo Star Wars" />
      </Link>

      <nav>
        <Link to="/">
          Personagens
        </Link>

        <Link to="/films">
          Filmes
        </Link>
      </nav>
    </Container>
  );
}
