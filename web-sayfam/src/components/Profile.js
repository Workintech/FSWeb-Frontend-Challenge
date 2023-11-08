import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
function Profile(props) {
  const { store } = useContext(SiteContext);
  return (
    <div className="profile-container">
      <p className="vector-two"></p>
      <h1 className="profile-title">{store.baslik.profile}</h1>
      <div className="profile-explanation-area-flex">
        <div className="profile-explanation-area">
          <h3 className="profile-second-title">{store.baslik.profile}</h3>
          <div className="profile-explanation-flex">
            <div className="profile-explanation-title">
              <h4>{store.baslik.birthday}</h4>
              <h4>{store.baslik.city}</h4>
              <h4>{store.baslik.education} </h4>
              <h4>{store.baslik.role}</h4>
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
          <h3 className="profile-third-title">{store.baslik.aboutme}</h3>
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
