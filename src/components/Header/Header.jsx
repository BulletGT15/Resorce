import './Header.css';

function Header() {

  return (
    <>
    <header className='w-full h-[4.5rem] flex justify-evenly items-center font-poppins shadow-sm'>
        <nav className='w-[35%] h-full text-xs text-[#222222] flex justify-between items-center'>
            <img className='h-[30%] cursor-pointer' src="src/components/Header/assets/home.svg" alt="Home"/>
            <a href="#">RESOURCE CENTER</a>
            <a href="#">BLOG</a>
            <a href="#">FEATURED</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
        </nav>
        <img className='w-[9rem]' src="src/components/Header/assets/logo.svg" alt="Resource"/>
        <div className='w-[22rem] h-[2.7rem] flex items-center justify-between border-[0.1rem] border-[#E0E0E0]'>
            <img className='h-[40%] ml-[0.8rem]' src="src/components/Header/assets/search-icon.svg" alt="search" />
            <input className='w-[11rem] h-[80%] text-xs text-black outline-none placeholder:text-[#E0E0E0]' type="text" placeholder='Search website...'/>
            <button className='w-[8rem] h-full text-xs text-[#E0E0E0] bg-[#B8BDC9] cursor-pointer'>Search</button>
        </div>
    </header>
    </>
  )
}

export default Header