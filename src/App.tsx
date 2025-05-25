import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="bg-gray-50 h-screen w-screen overflow-hidden">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;