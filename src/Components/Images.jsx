import recipeDetails from "../RawMaterials/RecipeDetails";
function Ingredients() {
  const recipe=Object.keys(recipeDetails.meal_portion[0]["Egusi soup"].egusi_ingredients)
    return (
      <div className="p-1">
        <h1 className="text-2xl font-bold mb-4">{recipeDetails.name}</h1>
        <img className="w-full h-auto mb-4" src={recipeDetails.image} alt={recipeDetails.name} />
        
        <div className="mb-1">
           <div className="w-[20%] mx-auto">

           <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-6">
            {recipe.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
           </div>
        </div>
        
        <div className="mb-1 ">
          <div className="w-[20%] mx-auto">
          <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal list-inside ">
            {recipe.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Notes:</h2>
          <p>{recipeDetails.notes}</p>
        </div>
      </div>
    );
  }
  
  export default Ingredients;