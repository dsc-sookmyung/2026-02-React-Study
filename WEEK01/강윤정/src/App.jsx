import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const profile = {
    name: "강윤정",
    role: "AI Engineering Student",
    description:
      "인공지능을 전공하고 있으며, 웹 개발에 대해 공부하고자 합니다.",
    image: "/profile.jpg",
    interests: ["AI / ML", "Frontend", "UI / UX"],
    github: "@yjkang22",
    githubUrl: "https://github.com/yjkang22"
  };

  return (
    <main className="page">
      <section className="profile-background">
        <ProfileCard profile={profile} />
      </section>
    </main>
  );
}

export default App;