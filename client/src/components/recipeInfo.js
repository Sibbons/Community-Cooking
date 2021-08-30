import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router';


function Recipe(){
    const {title} = useParams();
    const [recipe, setRecipe] = useState({});


    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = () => {
        try{
            fetch(`http://localhost:5000/recipe/${title}`)
            .then((response) => response.json())
            .then((response) => {
                setRecipe(response);
                console.log(response)
            });
        }catch(error){
            
            console.log("ERRORS", error);
        }
    }

    const renderFields = (val, title) => {
        if(recipe[val]){
            return(
                <div className="list">
                    <h2 className="subHeadings">{title}</h2>
                        <ol>
                            {recipe[val].map((step, i) => 
                                <li key={i}>{step}</li>)}
                        </ol>
                </div>
            )
        }
    }

    const renderPage = () => {
        if (recipe){
            return (
            <div>
                <h1 className="recipeTitle">{recipe.title}</h1>
                <p1>{recipe.description}</p1>
                {renderFields("ingredients","Ingredients")}
                {renderFields("directions","Directions")}
                <p1>Recipe posted on {recipe.createdAt}</p1>
            </div>)
        }else{
            return(
                <div>
                    <h1>Loading ...</h1>
                </div>
            )
        }
    }

        return(

                <div className="recipeInfo">
                    {renderPage()}
                </div>
            );
}


export default Recipe;