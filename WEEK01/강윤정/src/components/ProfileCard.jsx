import ProfileImage from "./ProfileImage";
import InterestList from "./InterestList";

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">

      <div className="profile-main">

        <div className="profile-photo-area">
          <p className="profile-label">PROFILE</p>

          <ProfileImage image={profile.image} />
        </div>

        <div className="profile-info">

          <div className="name-area">
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
          </div>

          <p className="description">
            {profile.description}
          </p>

          <div className="interest-area">
            <p className="section-label">
              What I'm Interested In
            </p>

            <InterestList
              interests={profile.interests}
            />
          </div>

        </div>

      </div>

          <div className="github-area">
            <span>Sookmyung Women's University</span>

            <div className="github-right">
              <span>GitHub</span>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {profile.github} ↗
              </a>
            </div>
      </div>

    </div>
  );
}

export default ProfileCard;