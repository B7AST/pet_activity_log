import noPageImage from '../assets/no-projects.png';
import Button from './Button.jsx';

function NoPageSelected({onAddPageHandler}) {
    return (
        <div className='mx-auto text-center mt-16'>
            <img src={noPageImage} alt="Empty task list" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Page Selected</h2>
            <p className='text-stone-400 mb-4'>Select a page or get started with a new one</p>
            <p className='mt-8'><Button onClick={onAddPageHandler}>Create new page</Button></p>
        </div>
    )
}

export default NoPageSelected;