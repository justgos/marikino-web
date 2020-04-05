import Link from 'next/link';

import './index.scss';
import Header from '../components/Header';

const IndexPage = () => (
  <>
    <Header />
    <div className="index-container">
      <div className="eye-container">
        <div className="logo" />
        
        <Link href="/raster"><a>
          <div
            className="eye-raster"
          />
        </a></Link>
        <Link href="/vector"><a>
          <div
            className="eye-vector"
          />
        </a></Link>
      </div>
    </div>
  </>
);

export default IndexPage;
