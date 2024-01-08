import { Link } from "react-router-dom";

export default function Header({
  HomeSvg,
  ScoreListSvg,
  UserSvg,
  TestSvg,
  SettingSvg,
}) {
  return (
    <aside className="absolute bottom-0  top-[100px] bg-white w-[270px]">
      <img
        src="https://i.hizliresim.com/rkitllv.jpg"
        className="relative top-2 left-12 "
      />
      <div className="flex text-[#5DA3F6]  flex-col relative top-10  text-xl gap-y-5">
        <Link
          to="/"
          className="flex  hover:cursor-pointer  flex-row gap-x-2  hover:bg-[#F8F8F8] p-2"
        >
          <p className="flex gap-x-2 relative left-[80px]">
            <p>
              <HomeSvg />
            </p>
            Anasayfa
          </p>
        </Link>

        <Link
          to="/Score"
          className="flex   hover:cursor-pointer flex-row gap-x-2  hover:bg-[#F8F8F8] p-2"
        >
          <p className="flex gap-x-2 relative left-[80px]">
            <p>
              <ScoreListSvg />
            </p>
            Skor Listesi
          </p>
        </Link>

        <Link
          to="/Uyeler"
          className="flex   hover:cursor-pointer flex-row gap-x-2  hover:bg-[#F8F8F8] p-2"
        >
          <p className="flex gap-x-2 relative left-[80px]">
            <p>
              <UserSvg />
            </p>
            Üyeler
          </p>
        </Link>

        <Link
          to="/Soruekle"
          className="flex  hover:cursor-pointer flex-row gap-x-2  hover:bg-[#F8F8F8] p-2"
        >
          <p className="flex gap-x-2 relative left-[80px] ">
            <p>
              <TestSvg />
            </p>
            Soru Ekle
          </p>
        </Link>

        <Link
          to="/Profile"
          className="flex  hover:cursor-pointer  flex-row gap-x-2  hover:bg-[#F8F8F8] p-2"
        >
          <p className="flex gap-x-2 relative left-[80px]">
            <p>
              <SettingSvg />
            </p>
            Profil
          </p>
        </Link>
      </div>
    </aside>
  );
}
