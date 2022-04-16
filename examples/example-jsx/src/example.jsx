const React = require('jsx-to-elements');

function SomeComponent(props) {
    return <p>You can even use function-based components. Very DRY</p>;
}

function UnorderedList(props) {
    return <ul>
        {props.list.map(item => <li>{ item }</li>)}
    </ul>;
}

const toDoList = [
    "Here is a TODO list",
    "Buy eggs",
    "Buy vegetables",
    "Don't buy candy",
    "Buy some candy anyway",
];

const containerElement = document.getElementById("container");
containerElement.append(
    <h1>Hello from JSX!</h1>,
    <p>This text is from JSX. It is directly created into DOM elements and appended to the web page "container" element.</p>,
    <SomeComponent/>,
    <p>You can Array.map for multiple elements just like you would using React.</p>,
    <UnorderedList list={toDoList} />
);
