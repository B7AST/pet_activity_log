import { useState, useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

function NewPage({ onAdd, onCancel }) {
  let modal = useRef();

  let [pageTitle, setPageTitle] = useState("");
  let [pageDescription, setPageDescription] = useState("");
  let [pageDate, setPageDate] = useState("");

  const getPageTitle = function (event) {
    setPageTitle(event.target.value);
  };

  const getPageDescription = function (event) {
    setPageDescription(event.target.value);
  };

  const SaveButtonHandler = function () {
    let enteredTitle = pageTitle;
    let enteredDescription = pageDescription;
    setPageDate(
      `${new Date().toDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}.${new Date().getSeconds()}`
    );

    if (enteredTitle.trim() === "" || 
        enteredDescription.trim() === ""
    ) {
        modal.current.open()
        return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>You forgot to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={SaveButtonHandler}
            >
              Save
            </button>
          </li>
        </menu>
        <Input
          type="text"
          value={pageTitle}
          onChange={getPageTitle}
          label="Title"
        />
        <Input
          value={pageDescription}
          onChange={getPageDescription}
          label="Description"
          textarea
        />
        <p>{pageDate}</p>
      </div>
    </>
  );
}

export default NewPage;
