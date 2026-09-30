import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {

  const profile = {
    name: "신지원",
    role: "GDGoC 26-27 Member | 컴퓨터과학과 4학년",
    description:
    <>
    새로운 기술을 배우고 서비스로 만들어가는
    <br />
    Frontend Developer를 꿈꾸고 있습니다.
    </>,
    image: "/image.png",
    interests: [
      "React",
      "Frontend",
      "개발자",
      "웹 개발"
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jiwonnee"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/03_jiwons/"
      }
    ]
  };


  return (
    <div className="container">
      <ProfileCard profile={profile}/>
    </div>
  );
}

export default App;