function Header() {
  const universityName = "ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ";
  const englishName = "MONGOLIAN UNIVERSITY OF LIFE SCIENCES";

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-section">
          <img src="/logo_muls.png" alt="ХААИС лого" className="muls-logo" />
          <div className="university-title">
            <h1>{universityName}</h1>
            <h2>{englishName}</h2>
          </div>
        </div>
        <div className="top-links">
          <a href="#">ЭЛСЭЛТИЙН СИСТЕМ</a>
          <a href="#">БҮТЭЦ БҮРЭЛДЭХҮҮН</a>
          <a href="#">ТӨГСӨГЧИД</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
