import TodoItem from './TodoItem';

function TodoBoard(props) {
    return (
        <div className="board">
            <h1>TodoBoard 게시판</h1>
            <hr />
            {props.todoList.map(
                (item)=>
                    <TodoItem item={item}/>
                
            )}
        </div>
    )
}

export default TodoBoard;