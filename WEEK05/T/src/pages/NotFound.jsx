import { Link } from 'react-router-dom';

export default function NotFound({ title = '페이지를 찾을 수 없어요', description = '주소가 올바른지 다시 확인해 주세요.' }) {
  return (
    <div className="page-container not-found">
      <span className="not-found-number">404</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link className="primary-button" to="/">여행지 목록으로 돌아가기 →</Link>
    </div>
  );
}
