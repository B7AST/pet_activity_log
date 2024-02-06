import { useState } from 'react';

import NewPage from "./components/NewPage.jsx";
import NoPageSelected from "./components/NoPageSelected.jsx";
import ProjectSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [pagesState, setPagesState] = useState({
    selectedPageId: undefined,
    pages: [],
  })

  function addPageHandler() {
    setPagesState(prevState => {
      return {
        ...prevState,
        selectedPageId: null,
      }
    })
  }

  let content;

  if (pagesState.selectedPageId === null) {
    content = <NewPage />
  } else if (pagesState.selectedPageId === undefined) {
    content = <NoPageSelected onAddPageHandler={addPageHandler} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onAddPageHandler={addPageHandler} />
      {content}
    </main>
  );
}

export default App;
