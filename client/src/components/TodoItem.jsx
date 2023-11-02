export default function TodoItem({ _id, text, isCompleted, changeStatusHandler }) {
    return (
        <tr className={`todo ${isCompleted ? 'is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => changeStatusHandler(_id)}>Change status</button>
            </td>
        </tr>
    );
}