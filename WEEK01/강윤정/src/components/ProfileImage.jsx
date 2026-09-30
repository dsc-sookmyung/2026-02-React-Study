function ProfileImage({ image }) {
  return (
    <div className="image-box">
      <img
        src={image}
        alt="강윤정 프로필"
      />
    </div>
  );
}

export default ProfileImage;