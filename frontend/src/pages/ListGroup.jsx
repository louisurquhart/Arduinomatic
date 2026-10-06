function ListGroup() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">List</h1>
            <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <li className="p-3 text-gray-700">An item</li>
                <li className="p-3 text-gray-700">A second item</li>
                <li className="p-3 text-gray-700">A third item</li>
                <li className="p-3 text-gray-700">A fourth item</li>
                <li className="p-3 text-gray-700">And a fifth one</li>
            </ul>
        </>
    );
}

export default ListGroup;