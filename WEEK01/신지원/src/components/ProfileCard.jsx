import ProfileImage from "./ProfileImage";
import InterestList from "./InterestList";

function ProfileCard({ profile }) {

    return (
        <div className="card">
            <p className="profile-label">
                PROFILE / 01
            </p>

            <div className="profile-header">
                <ProfileImage image={profile.image} />
                <div className="profile-info">
                    <h1>
                        {profile.name}
                    </h1>
                    <p className="role">
                        {profile.role}
                    </p>
                </div>
            </div>

            <section className="about">
                <h2>
                    ABOUT
                </h2>
                <p className="desc">
                    {profile.description}
                </p>
            </section>

            <section className="interests">
                <h2>
                    INTERESTS
                </h2>
                <InterestList
                    interests={profile.interests}
                />
            </section>

            <section className="links-section">
                <h2>
                    CONTACT
                </h2>
                <div className="links">
                    {
                        profile.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>
                                    {link.name}
                                </span>

                                <span>
                                    ↗
                                </span>
                            </a>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}

export default ProfileCard;