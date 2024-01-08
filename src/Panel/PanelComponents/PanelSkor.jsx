
export default function SkorList() {
  return (
    <div className='block relative transition duraction-100   hover:text-white bg-white shadow-2xl w-[370px] h-[500px]  translate-x-[290%] translate-y-[-92%] rounded-lg   '>
      <p className='text-center text-xl  font-semibold  text-gray-400'>SKOR LİSTESİ</p>
      <div className='flex justify-between px-10 top-4 relative '>
          <p className='text-center text-xl   text-gray-400'>İsim</p>
          <p className='text-center text-xl    text-gray-400'>Skor</p>
      </div>
      <div className='bg-[#D0F2EA] flex items-center rounded-xl w-[340px] h-[70px] relative top-10 left-4'>
          <div className='flex justify-between  w-full px-4 m-auto'>
              <p className='text-center text-xl   text-gray-400 w-[100px] '>Seher</p>
              <p className='text-center text-xl   text-gray-400 w-[50px]'>100</p>
          </div>
       </div>
    </div>

  );
}
