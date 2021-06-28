import Link from './Link';

export default function Main() {
    return <main className='py-20 px-10 md:flex justify-between bg-blue-400 text-indigo-100'>
        <div className='md:w-1/2 mb-10 md:mb-0'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl text-white mb-6'>Welcome to Doggy City!</h2>
            <p className='mb-6'>There is never a sad day here!</p>
            <Link href='Learn More' className='rounded py-3 px-6 text-lg bg-gray-400 hover:bg-gray-100 text-gray-800 transition ease-in' />
            <Link href='Get Started' className='rounded py-3 px-6 text-lg bg-yellow-400 hover:bg-yellow-300 text-yellow-800 transition ease-in'/>
        </div>
        
        <img className='md:w-1/2 rounded shadow-2xl' src='https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' alt='friendly-doggy' />
    </main>
}