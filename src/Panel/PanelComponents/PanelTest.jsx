import { Link } from "react-router-dom";

export default function TestCard({ TotalSvg, UserSvg, CardSvg }) {
  return (
    <header className="relative  gap-x-[50px]  grid grid-cols-2  w-[700px] h-[500px]  translate-x-[45%] top-[40px]">
      <Link>
        <div className="p-2 w-[320px] bg-white transition duraction-100   hover:bg-zinc-900 hover:text-white shadow-2xl  h-[140px] border border-1 rounded-lg">
          <span>Toplam Soru</span>
          <div className="flex justify-between text-2xl relative top-[15px]">
            <p className="text-[50px] text-blue-500">248</p>
            <p>
              <TotalSvg />
            </p>
          </div>
          <span className="relative top-[40px] text-gray-500">Toplam Soru</span>
        </div>
      </Link>
      <Link>
        <div className="p-2 w-[320px] bg-white  transition duraction-100   hover:bg-zinc-900 hover:text-white shadow-2xl  h-[140px] border border-2  rounded-lg">
          <span>Toplam Üyeler</span>
          <div className="flex justify-between text-2xl relative top-[15px]">
            <p className="text-[50px] text-blue-500">23</p>
            <p>
              <UserSvg />
            </p>
          </div>
          <span className="relative top-[40px] text-gray-500">
            Üyeleri Yönet
          </span>
        </div>
      </Link>
      <Link to='/QuestionList/ATPL'>
        <div className="p-2 w-[320px] bg-white  transition duraction-100   hover:bg-zinc-900 hover:text-white  shadow-2xl h-[140px] border border-2  rounded-lg">
          <span>ATPL</span>
          <div className="flex justify-between text-2xl relative top-[15px]">
            <p className="text-[50px] text-blue-500">200</p>
            <p>
              <CardSvg />
            </p>
          </div>
          <span className="relative top-[40px] text-gray-500">
            Soruları Çöz!
          </span>
        </div>
      </Link>
      <Link to='/QuestionList/TİP-A320'>
        <div className="p-2 w-[320px] bg-white  transition duraction-100   hover:bg-zinc-900 hover:text-white  shadow-2xl h-[140px] border border-2  rounded-lg">
          <span>TİP-A320</span>
          <div className="flex justify-between text-2xl relative top-[15px]">
            <p className="text-[50px] text-blue-500">25</p>
            <p>
              <CardSvg />
            </p>
          </div>
          <span className="relative top-[40px] text-gray-500">
            Soruları Çöz!
          </span>
        </div>
      </Link>
      <Link to='/QuestionList/TİP-B737'>
        <div className="p-2 w-[320px] bg-white  transition duraction-100   hover:bg-zinc-900 hover:text-white shadow-2xl  h-[140px] border border-2  rounded-lg">
          <span>TİP-B737</span>
          <div className="flex justify-between text-2xl relative top-[15px]">
            <p className="text-[50px] text-blue-500">11</p>
            <p>
              <CardSvg />
            </p>
          </div>
          <span className="relative top-[40px] text-gray-500">
            Soruları Çöz!
          </span>
        </div>
      </Link>
      <Link  to='/QuestionList/TİP-MNG'>
        <div className="p-2 w-[320px]  transition duraction-100   hover:bg-zinc-900 hover:text-white shadow-2xl bg-white h-[140px] border border-2  rounded-lg">
          <span>TİP-MNG</span>
          <div className="flex justify-between text-2xl relative top-[15px]">
            <p className="text-[50px] text-blue-500">12</p>
            <p>
              <CardSvg />
            </p>
          </div>
          <span className="relative top-[40px] text-gray-500">
            Soruları Çöz!
          </span>
        </div>
      </Link>
    </header>
  );
}
