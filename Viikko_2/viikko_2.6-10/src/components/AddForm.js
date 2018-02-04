import React from 'react'

const AddForm = ({ submitFunc, state, changeNameFunc, changeNumberFunc }) => {
    return (
        <div>
            <form onSubmit={submitFunc}>
                <div>
                    nimi: <input
                        value={state.newName}
                        onChange={changeNameFunc}
                    />
                </div>

                <div>
                    numero: <input
                        value={state.newNumber}
                        onChange={changeNumberFunc}
                    />
                </div>

                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm