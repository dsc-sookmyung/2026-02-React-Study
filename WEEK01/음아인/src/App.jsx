import './App.css';
import ProfileInfo from './components/ProfileInfo';
import ProfileImage from './components/ProfileImage';
import InterestList from './components/InterestList';
import ActivityList from './components/ActivityList';
import FooterInfo from './components/FooterInfo';

function App() {
  return (
    <main>
      <div className="profile-top">
        <ProfileInfo />
        <ProfileImage />
      </div>

      <InterestList />
      <ActivityList />
      <FooterInfo />
    </main>
  );
}

export default App;