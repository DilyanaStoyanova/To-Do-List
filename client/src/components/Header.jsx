import logo from '../assets/todo-icon.png';

export default function Header() {
    return (
        <header className="navigation-header">
            <span className="navigation-logo">
                <img src={logo} alt="todo-logo" />
            </span>
            <span className="spacer"></span>
            <span className="navigation-description">Todo List</span>
        </header>
    );
}