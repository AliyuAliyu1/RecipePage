import recipeDetails from "../RawMaterials/RecipeDetails";
function Instructions() {
  const recipe=Object.keys(recipeDetails.instructions[0])
    return (
      <div className="p-1 pb-10">    
        <div className="mb-1 ">
          <div className=" w-[20%] ml-4">
          <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal pl-6">
            {recipe.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          </div>
        </div>
    
      </div>
    );
  }
  
  export default Instructions;