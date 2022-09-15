import React from 'react';
import ReactDOM from 'react-dom/client';
import Fruits from './Fruits';
import './index.css';
import foto1 from './rasmlar/foto1.jpg';
import foto2 from './rasmlar/foto2.jpg';
import foto3 from './rasmlar/foto3.jpg';
import foto4 from './rasmlar/foto4.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
  { id: 1, img: foto1, name: 'Apple' },
  { id: 2, img: foto2, name: 'Apricot' },
  { id: 3, img: foto3, name: 'Banana' },
  { id: 4, img: foto4, name: 'Cherry' },
];

root.render(
  <React.StrictMode>
  <div className='table'>{
    data.map((value) => {
      return <Fruits title={value} />
    }
    )
  }
    </div>
  </React.StrictMode>
)
