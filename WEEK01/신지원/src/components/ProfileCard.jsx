import ProfileImage from "./ProfileImage";
import InterestList from "./InterestList";


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


            </div>

        </div>
    )
}


export default ProfileCard;