import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Page404 = memo(() => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to='/'>ホームへ戻る</Link>
    </div>
  );
});
