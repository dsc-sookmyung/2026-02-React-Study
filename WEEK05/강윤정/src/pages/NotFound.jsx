
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다.</h2>

      <p>
        요청하신 페이지가 존재하지 않거나
        주소가 잘못 입력되었습니다.
      </p>

      <Link to="/">
        여행지 목록으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
