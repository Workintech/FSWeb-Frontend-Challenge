function Profile(props) {
  return (
    <div className="profile-container">
      <p className="vector-two"></p>
      <h1 className="profile-title">Profile</h1>
      <div className="profile-explanation-area-flex">
        <div className="profile-explanation-area">
          <h3 className="profile-second-title">Profile</h3>
          <div className="profile-explanation-flex">
            <div className="profile-explanation-title">
              <h4>Birthday</h4>
              <h4>City of Residence</h4>
              <h4>Education </h4>
              <h4>Preference role</h4>
            </div>
            <div className="profile-explanation">
              <p>{props.profildata.birthday}</p>
              <p>{props.profildata.cityofresidence}</p>
              <p>{props.profildata.education}</p>
              <p>{props.profildata.preference}</p>
            </div>
          </div>
        </div>
        <div className="profile-about-area">
          <h3 className="profile-third-title">About Me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
