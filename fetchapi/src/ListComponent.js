const ListComponent = ({lists}) => {
    return (
        <div className="blog-list">        
        {lists.map((item) => (
        <ul key={item.id}>
            <li className="title"> {item.title}</li>
            <li className="author"> Written by {item.author}</li>
            <li className="body">{item.body}</li>
        </ul>
            ))}
        </div>

    )
}

export default ListComponent;