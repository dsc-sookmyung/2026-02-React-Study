import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="TRIP NOTE 홈">
          <span className="brand-mark">✳</span>
          <span>TRIP NOTE</span>
        </Link>
        <nav aria-label="메인 메뉴">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            여행지 둘러보기
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
