import ReactDom from 'react-dom/client';
import App from './src/Component/App';
import './index.css';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);