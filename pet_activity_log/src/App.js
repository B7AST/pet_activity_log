import { useState } from 'react';

import NewPage from './components/NewPage.jsx';
import NoPageSelected from './components/NoPageSelected.jsx';
import ProjectSidebar from './components/ProjectsSidebar.jsx';
import SelectedPage from './components/SelectedPage.jsx';

function App() {
  const [pagesState, setPagesState] = useState({
    selectedPageId: undefined,
    pages: [],
  });

  function addActivityHandler(text, pageId) {
    setPagesState(prevState => {
      const newActivity = {
        text: text,
        activityId: `${new Date().getHours()}:${new Date().getMinutes()}.${new Date().getSeconds()}`
      }

      const newPages = prevState.pages.map(page => {
        if(pageId !== page.dateId) {
          return page;
        }
        return {...page, activities:[...page.activities, newActivity]}
      })

      return {
        ...prevState,
        pages: [...newPages],
      };
    })
  }

  function deleteActivityHandler(activityId, pageId) {
    setPagesState(prevState => {

      const newPages = prevState.pages.map(page => {
        if(pageId !== page.dateId) {
          return page;
        }
        return {...page, activities: page.activities.filter((activity) => activity.activityId !== activityId)}
      })

      return {
        ...prevState,
        pages: [...newPages],
      };
    })
  };

  function selectPageHandler(id) {
    setPagesState(prevState => {
      return {
        ...prevState,
        selectedPageId: id,
      };
    })
  }

  function addPageHandler() {
    setPagesState(prevState => {
      return {
        ...prevState,
        selectedPageId: null,
      };
    })
  };

  function addProjectCancelButtonHandler() {
    setPagesState(prevState => {
      return {
        ...prevState,
        selectedPageId: undefined,
      };
    })
  }

  function addNewPageHandler(pageData) {
    setPagesState(prevState => {
      const newPage = {
        ...pageData,
        dateId: `${new Date().toDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}.${new Date().getSeconds()}`
      }

      return {
        ...prevState,
        selectedPageId: undefined,
        pages: [...prevState.pages, newPage]
      };
    })
  };

  function deletePageHandler() {
    setPagesState(prevState => {
      return {
        ...prevState,
        selectedPageId: undefined,
        pages: prevState.pages.filter((page) => page.dateId !== prevState.selectedPageId)
      };
    })
  };

  let selectedPage = pagesState.pages.find(page => page.dateId === pagesState.selectedPageId)
  console.log(pagesState.pages)

  let content = <SelectedPage 
                  page={selectedPage} 
                  onDelete={deletePageHandler}
                  onAddActivity={addActivityHandler}
                  onDeleteActivity={deleteActivityHandler}
                  activities={pagesState.activities}
                />;

  if (pagesState.selectedPageId === null) {
    content = <NewPage onAdd={addNewPageHandler} onCancel={addProjectCancelButtonHandler} />
  } else if (pagesState.selectedPageId === undefined) {
    content = <NoPageSelected onAddPageHandler={addPageHandler} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onAddPageHandler={addPageHandler} pages={pagesState.pages} onSelectPage={selectPageHandler} selectedPageId={pagesState.selectedPageId}/>
      {content}
    </main>
  );
}

export default App;
