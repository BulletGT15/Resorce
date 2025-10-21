import './Blog.css';

function Blog() {

  return (
    <>
    <section className='w-full h-[218vh] flex flex-wrap justify-center relative'>
        <div className='w-[67%] h-[135vh] flex flex-wrap justify-between content-between'>
            <p className='w-140 text-5xl text-[#444444]'>Recently in our Photography <span className='text-[#F55F39] underline'>Blog</span>.</p>
            <div className='w-130 h-185 bg-[url(src/components/Blog/assets/apocalypse.svg)] bg-top bg-[100%] bg-no-repeat flex items-end'>
                <div className='w-105 h-85 flex flex-wrap content-evenly bg-white'>
                    <p className='w-[85%] text-3xl text-[#252061]'>Photographers Who Changed the World forever</p>
                    <p className='w-[84%] text-md text-[#969696]'>Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla.</p>
                    <div className="w-53 h-10 flex items-center gap-2">
                        <img className="w-10 h-full" src="src/components/Blog/assets/robert.svg" alt="Robert Brown" />
                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-[#252061]">Robert Brown</p>
                            <p className="text-xs text-[#252061]">on September 13, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-90 h-185 flex flex-wrap content-between'>
                <img className='w-90 h-57' src="src/components/Blog/assets/street.svg" alt="street"/>
                <div className='w-90 h-57 bg-[url(src/components/Blog/assets/nature.svg)] bg-[100%] bg-no-repeat flex items-end'>
                    <div className='w-70 h-26 bg-white flex flex-wrap items-end'>
                        <p className='w-28 text-sm text-center text-[#929292]'>Sep 13, 2019</p>
                        <p className='w-50 text-lg leading-5.5 text-[#252061]'>7 Things About Photography Your Boss Wants To Know</p>
                    </div>
                </div>
                <div className='w-90 h-57 bg-[url(src/components/Blog/assets/bg.svg)] bg-[100%] bg-no-repeat flex flex-wrap content-evenly justify-center'>
                    <p className='w-[68%] text-white text-3xl'>Visit Full Blog</p>
                    <p className='w-[68%] text-white text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='w-[68%] text-[#F55F39] text-md'>Visit Blog</p>
                </div>
            </div>
        </div>
        <div className='w-[77%] h-[95vh] bg-[url(src/components/Blog/assets/photo-guy.svg)] bg-[100%] absolute bottom-[-33vh] content-end'>
            <div className='w-127 h-116 bg-[#352F77] text-white flex flex-wrap justify-center content-around'>
                <p className='w-100 text-5xl'>Inspired to get your photography to the next level?</p>
                <p className='w-100 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <button className="w-95 h-19 flex items-center justify-evenly bg-[#2BCA8B] gap-2 cursor-pointer">
                    <img className="w-9 h-full" src="src/components/Blog/assets/link.svg" alt="Link" />
                    <div className="h-[80%] w-60 content-evenly flex flex-wrap">
                        <p className="w-full text-left text-2xl text-white">Resource Center</p>
                        <p className="w-full text-left text-sm text-white">Packed with useful tips & tutorials</p>
                    </div>
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog