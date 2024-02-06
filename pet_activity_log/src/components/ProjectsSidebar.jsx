import Button from "./Button.jsx"

function ProjectSidebar({onAddPageHandler}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">My Project</h2>
            <Button onClick={onAddPageHandler}>+ Add Page</Button>
            <ul>

            </ul>
        </aside>
    )
}

export default ProjectSidebar