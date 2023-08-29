import recipeDetails from "../RawMaterials/RecipeDetails";
function Notes() {
  
    return (

        <div>
          <h2 className="text-lg font-semibold mb-2">Notes:</h2>
          <p>{recipeDetails.notes}</p>
        </div>
     
    );
  }
  
  export default Notes;