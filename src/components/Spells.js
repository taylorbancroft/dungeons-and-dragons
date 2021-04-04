import React, {useState, useEffect} from 'react';
//useState is a hook used to maintain local states in function components
//useEffect is used to execute functions after a component gets rendered(to perform side effects).
//useEffect can be limitd to cases wher a selected set of values change (referred to as dependencies)
//useEffect does the job of componentDidMount(), componentDidUpdate(), and componentWillUpdate() combined


function Spells (){
    const [state, setState] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetchData();
    },[]);

    async function fetchData() {
        const response = await fetch("https://www.dnd5eapi.co/api/spells/");
        const data = await response.json();
        setState(data.results);
    }
    
    return(
        <div className="spells">
        <h3>Spells</h3>
        <input className="search form-control" type="text" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value);
        }} />
        <ul className="spellList" key="spellList">
            {state.filter((data) => {
                if (searchTerm.toLowerCase() === 'all'){
                    return data;
                }
                if(searchTerm === ""){
                    return '';
                }else if(data.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return data;
                }
            })     
            .map(data =>
                <li key={data.index}>{data.name}</li>
                )}
        </ul>
        </div>
    ) 
    
}
export default Spells;
