import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

// const text = `Кажется, мы подключили React и пробросили текст`;
// const Element = (props) => <h1 className={"element"}>{props.text}</h1>;



// ReactDOM.render(
//    <Element text={text} />,
//    document.getElementById('root'),
// )


let messages = ['Привет', 'Как дела?'];
let answerMsg = ['Нормально'];

const handleClick = () => {
   messages.push("Нормально");
   ReactDOM.render(
      <MessageField messages={messages} />,
      document.getElementById('root'),
   );
};

const MessageComponent = (props) =>
   <div>{props.text}</div>;


const MessageField = (props) => {
   const messageElements = props.messages.map(message => <MessageComponent text={message} />);
   return (
      <div>
         <h1>React Chat</h1>
         {messageElements}
         <button onClick={handleClick}>Ответ</button>
      </div>
   )
};

ReactDOM.render(
   <MessageField messages={messages} />,
   document.getElementById('root'),
);