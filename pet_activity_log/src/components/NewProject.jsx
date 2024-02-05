import Input from "./Input.jsx"

function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <Input label="Title" />
            <Input label="Description" textarea />
            <Input label="Due Date" />
        </div>
    )
}

export default NewProject