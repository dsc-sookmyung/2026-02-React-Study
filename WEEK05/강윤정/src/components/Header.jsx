import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        대한민국 여행지 모음
      </Link>

      <p className="site-subtitle">
        다음에는 어디로 떠나볼까요?
      </p>
    </header>
  );
}

export default Header;