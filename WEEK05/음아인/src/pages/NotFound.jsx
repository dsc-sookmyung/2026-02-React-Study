import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/">여행지 목록으로 돌아가기</Link>
    </div>
  );
}

export default NotFound;
