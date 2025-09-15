import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoGroup from "../components/TodoGroup";

function AboutUsPage() {
    const { state } = useContext(TodoContext);

    return (
        <div>
            <h2>About Us</h2>
        </div>
    );
}

export { AboutUsPage };