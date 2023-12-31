import { useState } from "react"

const ListComponent = () => {
    const [selectAll, setSelectAll] = useState(false)
    const [checked, setChecked] = useState([]);

    const list = [
        { id: "asdfasdf", name: "name 1" },
        { id: "qwerqwer", name: "name 2" },
        { id: "zxcvzxcv", name: "name 3" },
        { id: "tyuityui", name: "name 4" },
        { id: "ghjkghjk", name: "name 5" },
        { id: "bnm,bnm,", name: "name 6" },
        { id: "wertwert", name: "name 7" },
        { id: "sdfgsdfg", name: "name 8" },
        { id: "xcvbxcvb", name: "name 9" },
        { id: "ertyerty", name: "name 10" },
        { id: "dfghdfgh", name: "name 11" },
        { id: "cvbncvbn", name: "name 12" },
    ]

    // Handle individual checks
    const handleCheck = e => {

        const value = e.target.value;
        const isChecked = e.target.checked;

        // Add items to list if checked
        if(isChecked) {
            setChecked([...checked, value]);
        } else {
            // Remove items if unchecked
            const filteredList = checked.filter((item) => item !== value);
            setChecked(filteredList);
        }
    }

    // Handle select all
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setChecked(list.map(item => item.id));
        if(!selectAll) {
            setChecked([]);
        }
    }


    console.log(checked)

    return (
        <div className="container">
            <h1>Checkboxes</h1>
            <div className="select-boxes">
                <div className="select-box">
                    <button onClick={handleSelectAll}>Select all</button>
                </div>
            </div>
            <div>
                {list.map((item) => (
                    <div className="item">
                        <input
                            key={item.id}
                            type="checkbox"
                            name={item.name}
                            value={item.id}
                            onChange={handleCheck}
                            checked={checked.includes(item.id)}
                        />
                        <h3>{item.id}</h3>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListComponent