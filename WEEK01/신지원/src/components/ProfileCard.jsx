import ProfileImage from "./ProfileImage";
import InterestList from "./InterestList";
import SocialLinks from "./SocialLinks";


function ProfileCard({profile}) {

    return (
        <div className="card">

            <ProfileImage image={profile.image}/>


            <div className="content">

                <h1>
                    {profile.name}
                </h1>


                <p className="role">
                    {profile.role}
                </p>


                <p className="desc">
                    {profile.description}
                </p>


                <h3>
                    관심 분야
                </h3>


                <InterestList 
                    interests={profile.interests}
                />

                <h3>
                    사이트
                </h3>

                <div className="links">
                    {
                        profile.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={link.icon}
                                    alt={link.name}
                                />
                            </a>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}


export default ProfileCard;