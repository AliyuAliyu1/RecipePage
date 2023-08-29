import recipeDetails from "../RawMaterials/RecipeDetails";
function Ingredients() {
  const recipe=Object.keys(recipeDetails.meal_portion[0]["Egusi soup"].egusi_ingredients)
    return (
      <div className="p-1 pb-10">
        <h1 className="text-2xl font-bold mb-4">{recipeDetails.name}</h1>
        
        <img className="w-64 h-auto mx-auto pb-10" src={recipeDetails.image} alt={recipeDetails.name} />
       
        
        <div className="mb-1">
           <div className=" ml-4">

           <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-6">
            {recipe.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
           </div>
        </div>
        
        

      </div>
    );
  }
  
  export default Ingredients;