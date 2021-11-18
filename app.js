const desc = 'I just learnt how to create a React node and render it into the DOM'
const myTitleID = 'main-title'
const name = 'Emeline'
const header = (
    <header>
        <h1 id={myTitleID}> { name }'s First React Element! </h1>
        <p className="class"> { desc } </p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);