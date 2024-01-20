// import { USERS } from "../../constants/users";

import { useState } from "react";
import { FilterContainer, FilterTitle } from "./style";

const Filters = ({ users }) => {

    const [letter, setLetter] = useState('');
    // const [isCheck, setIsCheck] = useState('false');
    // const [option, setOption] = useState(0);

    return (
        <>
            <FilterTitle>Listado de Usuarios</FilterTitle>

            <FilterContainer>
                <div>
                    <input type="text" onChange={() => handleFilteredByLetter(letter, setLetter)} />
                </div>
                
                <div>
                    <label>Sólo Activos</label>
                    <input type="checkbox" />
                </div>

                <div>
                    <select>
                        <option value="0">Por Defecto</option>
                        <option value="1">Por Nombre</option>
                    </select>
                </div>

            </FilterContainer>
        </>
    );

};

// Cuando escribimos en el text
const handleFilteredByLetter = (letter, setLetter) => {

};

// Cuando marcamos el checkbox
// const handleFilteredByActive = () => {

// };

// Cuando marcamos el select
// const handleFilteredByOptions = () => {

// };

export default Filters;