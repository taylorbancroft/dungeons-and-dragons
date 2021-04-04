import React, {Fragment, useState, useEffect} from 'react';
//useState is a hook used to maintain local states in function components
//useEffect is used to execute functions after a component gets rendered(to perform side effects).
//useEffect can be limitd to cases wher a selected set of values change (referred to as dependencies)
//useEffect does the job of componentDidMount(), componentDidUpdate(), and componentWillUpdate() combined
//<button type="button" className="btn btn-outline-success" onClick={() => addToCharacter("class",data.name)}>add</button>
function Classes (){
    const [state, setState] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [map, setMap] = useState(new Map())
    useEffect(() => {
        fetchData();
    },[]);

    async function fetchData() {
        const response = await fetch("https://www.dnd5eapi.co/api/classes/");
        const data = await response.json();
        setState(data.results);
    }

    return(
        <Fragment>
        <h3>Classes</h3>
        <input className="search form-control" type="text" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value);
        }} />
        <ul className="class" key="class">
            {state.filter((data) => {
                if (searchTerm.toLowerCase() === 'all'){
                    return data;
                }
                if (searchTerm === ""){
                    return '';
                }else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return data;
                } 
            })
            .map(data =>
                <li key={data.index}>{data.name}
                <button onClick={() => setMap(map.set("class", data.name))}>add</button></li>
                )}
            {console.log(map)}
        </ul>
        </Fragment>
    ) 
    
}
export default Classes;
