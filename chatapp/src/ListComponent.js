const ListComponent = (prop) => {
    return (
        <ul className='chat'>
        {prop.chat && prop.chat.map((msg, key) => (
          <li key={key}>{msg}</li>
        ))}
      </ul>
    )
}

export default ListComponent;