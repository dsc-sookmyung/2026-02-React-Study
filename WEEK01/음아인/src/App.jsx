import './App.css';
import ProfileInfo from './components/ProfileInfo';
import InterestList from './components/InterestList';
import ActivityList from './components/ActivityList';
import FooterInfo from './components/FooterInfo';

function App() {
  return (
    <main>
      <ProfileInfo />
      <InterestList />
      <ActivityList />
      <FooterInfo />
    </main>
  );
}

export default App;