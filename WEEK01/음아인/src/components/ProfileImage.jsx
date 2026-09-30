import profileImage from '../assets/profile.jpg';

function ProfileImage() {
  return (
    <img
      className="profile-image"
      src={profileImage}
      alt="음아인 프로필"
    />
  );
}

export default ProfileImage;