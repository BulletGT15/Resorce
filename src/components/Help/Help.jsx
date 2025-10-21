import './Help.css';

function Help() {

  return (
    <>
    <section className='w-full h-[35vh] flex justify-between relative'>
        <div className='w-[50%] h-full flex items-center justify-evenly'>
            <p className='w-25 text-2xl text-[#2BCA8B]'>How can we help you?</p>
            <p className='text-sm text-[#252061] leading-7'>Visit our Blog <br/> Photographers Resources Library <br/> Featured Stories <br/> Get Full Access Today!</p>
        </div>
        <div className='w-[41%] h-[44vh] bg-[url(src/components/Help/assets/bg.svg)] bg-[100%] flex justify-center items-center absolute right-0 bottom-0 shadow-2xl shadow-black'>
            <div className='w-[80%] h-[90%] flex flex-wrap content-between'>
                <p className='w-full text-2xl text-white'>Meet our Writers</p>
                <p className='w-[17rem] text-sm text-white '>We've got a professional team of professional photographers providing you with resources.</p>
                <img className='w-80 h-25' src="src/components/Help/assets/team.png" alt="meet our teem" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Help