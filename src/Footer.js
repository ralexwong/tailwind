export default function Footer() {
    return <footer className='md:flex bg-indigo-900 justify-between text-indigo-400 p-10'>
        <div className='md:w-1/2'>
            <h3 className='text-3xl mb-2' >Join the Newsletter</h3>
            <form className='flex' onSubmit>
                <input className='focus:bg-blue-500 w-full rounded-l py-3 px-4 outline-none' type='email' id='newsletter' name='newsletter'/>
                <button className='bg-red-300 hover:bg-red-500 text-red-800 rounded-r px-4'>Join</button>
            </form>
            
        </div>
        <div className='flex items-center'>
            <p>Copyright &copy; Doggos 2020 - Infinity</p>
        </div>
    </footer>
}