export default function PlayLists() {
    return (
        <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
            <ul>
                {new Array(30).fill(
                    <li>
                        <a href="#" className="flex items-center h-8 text-link text-s hover:text-white">
                            Christmas Hints
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}