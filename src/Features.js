export default function Features() {
    const images = [
        { 
            image: 'https://images.unsplash.com/photo-1586179253019-ac8a2522535f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80',
            caption: 'Cuddles!'
        },
        { 
            image: 'https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            caption: 'Smiles!'
        },
        { 
            image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
            caption: 'Games!'
        },
        { 
            image: 'https://images.unsplash.com/photo-1505623776320-7edecf5f0771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            caption: 'Swims!'
        }

    ]
    return <div class='md:flex justify-evenly bg-indigo-800 py-20 px-10 text-indigo-400'>
        {images.map(image => {
            return <div className='text-center mr-2' key={image.caption}>
                <img className='rounded border-2 border-indigo-400 w-full mb-4' alt='Doggo' src={image.image} />
                <p className=''>{image.caption}</p>
            </div>
        })}
    </div>
}