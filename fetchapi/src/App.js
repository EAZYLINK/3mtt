import Fetch from "./Fetch";
import ListComponent from './ListComponent'

function App() {
  const {data: posts, isPending, error} = Fetch('https://jsonplaceholder.typicode.com/posts');

  const {data: authors} = Fetch('https://jsonplaceholder.typicode.com/users');

  posts && posts.map(post => {
    const author = authors.find(user => user.id === post.userId
    )
    return post.author = author.name;
  })

  return (
    <div className="App">
      {isPending && <div>Loading...</div>}
      {error && <div>{ error }</div>}
     {posts && <ListComponent lists = {posts}/> }
    </div>
  );
}

export default App;
