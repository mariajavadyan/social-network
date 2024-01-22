import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className="profileInfoImg">
        <img
          src="https://images.unsplash.com/photo-1615118265620-d8decf628275?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile pic"
        />
      </div>
      <div className="descriptionBlock">ava + description</div>
    </div>
  );
};

export default ProfileInfo;
