//공통 헤더. 로고 클릭 시 메인 화면으로 넘어가도록 Link를 사용하여 구현
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h2>TOUR LOG</h2>
      </Link>
    </header>
  );
}

export default Header;