import react, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function LandingForm(){
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();

    }, []);

    const getRecipes = () => {
        try{
            fetch("http://localhost:5000/recipes")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setRecipes(response);
            });
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className="container">
            <p> Click <Link to="/create/form">Here</Link> to go to forms</p>
            <u1 className="recipeList">
            {recipes.map(res => 
                    <li key={res._id}>
                        <Link to={`/${res.title.replaceAll(" ", "-")}`}>{res.title}</Link>
                    </li>)     
               }
            </u1>                

        </div>

    );
}

export default LandingForm;