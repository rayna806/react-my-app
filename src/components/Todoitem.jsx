import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router";
import { updateTodo, deleteTodo } from "../api/mockApi";
import { useTodoService } from "../useTodoService";
import { Modal, Input, Button, Space } from "antd";

function Todoitem({ todo, toggleTodo }) {
  const { updateTodo, deleteTodo, editbyId } = useTodoService();
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editText, setEditText] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  if (!todo) return null;
  const { id, text, done } = todo;

  function handleToggle() {
    updateTodo(id, { ...todo, done: !done }).then((updatedTodo) => {
      dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
    });
  }
  function handleDelete() {
    deleteTodo(String(id))
      .then(() => {
        dispatch({ type: "DELETE", id });
      })
      .catch((error) => {
        console.error('Delete failed:', error);
        // 可以在这里加用户提示
      });
  }
  function handleEdit() {
    setEditText(text);
    setIsModalOpen(true);
  }
  function handleCancel() {
    setIsModalOpen(false);
    setEditText("");
  }
  function handleOk() {
    if (!editText.trim()) return;
    setEditLoading(true);
    (editbyId
      ? editbyId(id, { ...todo, text: editText })
      : updateTodo(id, { ...todo, text: editText })
    )
      .then((updatedTodo) => {
        dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
        setIsModalOpen(false);
        setEditText("");
      })
      .finally(() => setEditLoading(false));
  }
  return (
    <div key={id} className="todo-row">
      <div className={done ? "todo-item done" : "todo-item"}>
        <span onClick={handleToggle} style={{ cursor: "pointer" }}>
          {text}
        </span>
      </div>
      <Space>
        <Button onClick={handleEdit}>Edit</Button>
        <Button danger onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={() => navigate(`/todos/${id}`)}>Detail</Button>
      </Space>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        okText="OK"
        cancelText="Cancel"
        confirmLoading={editLoading}
        destroyOnClose
      >
        <Input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
          placeholder="Edit todo text"
        />
      </Modal>
    </div>
  );
}

export default Todoitem;
