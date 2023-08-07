import './App.css';
import LoginedList from './LoginedList';
import DogFetcher from './DogFetcher';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <>
        <h1>사용자 목록</h1>
        <LoginedList />
        <hr />
        <DogFetcher />
        <hr />
        <ProfileViewerWithSearch />
    </>
  );
}

export default App;