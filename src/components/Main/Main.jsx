import './Main.css';

function Main() {

  return (
    <>
    <main className='w-full h-[100vh] flex justify-center items-center bg-[url(src/components/Main/assets/bg.svg)] bg-cover'>
      <div className='w-[40%] h-[50%] mr-[19rem] flex flex-wrap content-between text-[#444444]'>
        <p className='text-5xl'>The <span className='text-[#2BCA8B] underline'>most complete</span> <br/> Photography resource.</p>
        <p className='text-lg mb-[3rem]'>Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
        <button className='w-[11rem] h-[3.5rem] bg-[#F55F39] text-white text-2xl flex flex-wrap justify-around items-center content-center cursor-pointer mr-[1rem]'>Visit our Blog <br/> <span className='text-sm'>Stories, News & info</span></button>
        <button className='w-[12.5rem] h-[3.5rem] bg-white text-[#4D4D4D] text-2xl flex flex-wrap justify-around items-center content-center cursor-pointer'>Resource Center <br/><span className='text-sm'>Tips, Tricks & Tutorials</span></button>
      </div>
    </main>
    </>
  )
}

export default Main