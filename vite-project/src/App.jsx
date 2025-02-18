import React, { useState } from "react";
import "./App.css"
import Avatar from "./components/Avatar";
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";
import Box from "./components/Box";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";
import StatusMessage from "./components/StatusMessage";
import Modal from "./components/Modal";
import WithLogger from "./components/WithLogger";
import MyComponent from "./components/MyComponent";
import IconButton from "./components/IconButton";


const EnhancedComponent = WithLogger(MyComponent);

const App = () => {

  const handleClick = () => {
    alert("Button Clicked!");
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = () => {
    alert("Item deleted!");
    closeModal();
  };
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  const handleReset = () => {
    setInputValue("");
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?b=1&s=170667a&w=0&k=20&c=r85FzbeYUqacbqaBIciLRbi11FtXPzVfqxCmBW1gZCg=" alt="Nature" />
        <Greeting />
        <div>
          <Greeting2 name="Madina" />
          <Greeting2 />
        </div>
        <Box width="300px" height="200px" color="red" />
        <Box width="" height="" color="" />
        <Button onClick={handleClick} />
        <Card>
          <h3 className="text-lg font-bold">Lorem ipsum dolor sit.</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolore expedita a beatae delectus, minus cumque tempora similique nobis consequatur?</p>
        </Card>
        <List items={["Olma", "Banan", "Mandarin", "Tarvuz"]} />
        <div>
          <StatusMessage isSuccess={true} />
          <StatusMessage isSuccess={false} />
        </div>
        <div>
          <div>
            <button onClick={openModal}>Open Modal</button>

            {isOpen && (
              <Modal title="Delete Confirmation" onClose={closeModal}>
                <p className="text-red-600 mt-4 mb-2">Are you sure you want to delete?</p>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={closeModal}>No</button>
              </Modal>
            )}
          </div>
        </div>
        <div>
          <EnhancedComponent />
          <button onClick={() => setCount(count + 1)}>Re-render Component</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            className="border-none p-2 rounded mb-4 mt-8 bg-cyan-300"
          />
          <IconButton icon="✅" type="submit" />
          <IconButton icon="🔄" type="reset" onClick={handleReset} />
        </form>

      </div>
    </div>
  );
};

export default App;


