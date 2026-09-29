function ProfileImage({image}){

    return(
        <div className="image-box">

            <img 
              src={image}
              alt="profile"
            />

        </div>
    )
}

export default ProfileImage;