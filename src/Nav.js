import Link from './Link';

const Nav = () => {
    return <nav className='p-4 bg-indigo-700 flex justify-between items-center'>
        <div className='flex items-center'>
            <img className='mr-2' src='https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png' width='50' alt='Logo'/>
            <Link href='Home' />
            <Link href='About'  />
        </div>
        <div>
            <Link href='Login'  />
            <Link href='Sign Up' className='bg-yellow-400 text-yellow-800 rounded hover:bg-yellow-300 hover:text-yellow-500 transition ease-in' />
        </div>
    </nav>
}

export default Nav;