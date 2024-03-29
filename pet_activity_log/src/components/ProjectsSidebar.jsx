import Button from "./Button.jsx";

function ProjectSidebar({
  onAddPageHandler,
  pages,
  onSelectPage,
  selectedPageId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Project
      </h2>
      <Button onClick={onAddPageHandler}>+ Add Page</Button>
      <ul className="mt-8">
        {pages.map((pages) => {
          let cssClasses = "w-full text-left px-2 py-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

          if (pages.dateId === selectedPageId) {
            cssClasses += " bg-stone-800 text-stone-200"
          }else {
            cssClasses += " text-stone-400"
          }

          return (
            <li key={pages.dateId}>
              <button
                className={cssClasses}
                onClick={() => onSelectPage(pages.dateId)}
              >
                {pages.dateId}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
