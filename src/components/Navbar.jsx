import robby from '/src/assets/robby.png'

export default function Navbar() {
    return (
        <nav>
            <h1>Wine!</h1>
            <img src={robby} className="logo" alt="robby logo" />
        </nav>
    )
}