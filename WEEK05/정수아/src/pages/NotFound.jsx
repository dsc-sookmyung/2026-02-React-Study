
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="place-page">
      <h1>404</h1>

      <h2>페이지를 찾을 수 없습니다.</h2>

      <p>
        요청하신 페이지가 존재하지 않거나
        잘못된 주소입니다.
      </p>

      <Link to="/places">
        여행지 목록으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
