import s from './Header.module.scss';
import { Container } from '../Container/Container.tsx';
import { Logo } from '../../components/Logo/Logo.tsx';
import { SearchForm } from '../../components/SearchForm/SearchForm.tsx';
import { Navigation } from '../../components/Navigation/Navigation.tsx';
export const Header = () => (
  <header className={s.header}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.search}>
        <SearchForm />
      </div>
      <div className={s.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);
