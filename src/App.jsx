import { useState } from 'react';
import BackgroundTasksDemo from './BackgroundTasksDemo';
import CanvasDemo from './CanvasDemo';
import GeolocationDemo from './GeolocationDemo';
import IntersectionObserverDemo from './IntersectionObserverDemo';
import NetworkInfoDemo from './NetworkInfoDemo';
import './App.css';

const tabs = [
  { label: 'Background Tasks', component: <BackgroundTasksDemo /> },
  { label: 'Canvas', component: <CanvasDemo /> },
  { label: 'Geolocation', component: <GeolocationDemo /> },
  { label: 'Intersection Observer', component: <IntersectionObserverDemo /> },
  { label: 'Network Info', component: <NetworkInfoDemo /> },
];

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="App">
      <h1>Web API Demos</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            style={{
              fontWeight: tab === i ? 'bold' : 'normal',
              borderBottom: tab === i ? '2px solid #333' : 'none',
              background: tab === i ? '#e0e0e0' : '#fff',
              cursor: 'pointer',
              padding: '8px 16px',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>{tabs[tab].component}</div>
    </div>
  );
}

export default App;
