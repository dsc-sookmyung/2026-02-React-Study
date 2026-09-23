import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {

  const profile = {
    name: "나연우",
    role: "Frontend Developer",
    description:
    <>
    React를 활용한 사용자 경험 중심의
    <br />
    웹 서비스를 개발하고 있습니다.
    </>,
    image: "/profile.jpg",
    interests: [
      "React",
      "Frontend",
      "UI/UX",
      "Web Development"
    ]
  };


  return (
    <div className="container">
      <ProfileCard profile={profile}/>
    </div>
  );
}

export default App;