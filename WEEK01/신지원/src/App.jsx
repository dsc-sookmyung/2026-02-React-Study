import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {

  const profile = {
    name: "신지원",
    role: "컴퓨터과학과 4학년",
    description:
    <>
    React를 활용하여 사용자에게 편리함을 제공하는
    <br />
    Frontend Developer 가 되고 싶습니다.
    </>,
    image: "/image.png",
    interests: [
      "React",
      "Frontend",
      "개발자",
      "웹 개발"
    ]
  };


  return (
    <div className="container">
      <ProfileCard profile={profile}/>
    </div>
  );
}

export default App;