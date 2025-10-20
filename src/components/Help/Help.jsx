import './Help.css';

function Help() {

  return (
    <>
    <section className='w-full h-[35vh] flex justify-between'>
        <div className='w-[50%] h-full flex items-center justify-between'>
            <p>How can we help you?</p>
            <p>Visit our Blog <br/> Photographers Resources Library <br/> Featured Stories <br/> Get Full Access Today!</p>
        </div>
        <div className='w-[41%] h-[45vh] mt-[-10vh] bg-[url(src/components/Help/assets/bg.svg)] bg-[100%] flex justify-center items-center'>
            <div className='w-[80%] h-[90%] bg-amber-200 flex flex-wrap content-between'>
                <p className='w-full text-2xl'>Meet our Writers</p>
                <p className='w-[17rem] text-sm'>We've got a professional team of professional photographers providing you with resources.</p>
                <img className='w-[18rem] h-[8rem]' src="src/components/Help/assets/team.svg" alt="meet our teem" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Help