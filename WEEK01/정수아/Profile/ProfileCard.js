import ProfileImage from './ProflieImage';
import InterestList from './InterestList';

function ProfileCard() {
    const name = "정수아";
    const introduction = "컴퓨터과학을 배우고 있으며, AI와 웹 개발에 관심이 있습니다.";
    const interests = ["python", "C", "JavaScript", "React", "AI"];
    
    return(
        <div className="profile-card">
            <ProfileImage />

            <p className="section-title">My name is</p>
            <h1>{name}</h1>

            <p className="section-title">About me</p>
            <p>{introduction}</p>

            <p className="section-title">My interests</p>
            <InterestList interests={interests} />
        </div>
    );
}

export default ProfileCard ;