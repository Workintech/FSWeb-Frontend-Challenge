function ModeSwitch() {
  return (
    <div className="ModeSwitch-container">
      <div className="darkmode-container">
        <div className="darkmode">
          <div className="toggle-button"></div>
        </div>
        <div className="darkmode-title">DarkMode</div>
      </div>
      <div className="or-symbol">|</div>
      <div className="language-container">
        <span className="language-color_one">TÜRKÇE</span>
        <span className="language-color_two">'YE GEÇ</span>
      </div>
    </div>
  );
}
export default ModeSwitch;
