import Fetch from "./Fetch";
import ListComponent from './ListComponent'
import RefinePost from "./RefinePost";

function App() {
  const {data: posts, isPending: postIsPending, error: postError} = Fetch('https://jsonplaceholder.typicode.com/posts');

  const {data: authors, isPending: authorIsPending, error: authorEror} = Fetch('https://jsonplaceholder.typicode.com/users');

  RefinePost(posts, authors);

  return (
    <div className="App">
      {(postIsPending || authorIsPending) && <div>Loading...</div>}
      {postError && <div>{ postError }</div>}
      {authorEror && <div>{ authorEror }</div>}
     {posts && <ListComponent lists = {posts}/> }
    </div>
  );
}

export default App;
