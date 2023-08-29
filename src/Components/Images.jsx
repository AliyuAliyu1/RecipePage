import recipeDetails from "../RawMaterials/RecipeDetails";
function Images() {
    
    const egusi=recipeDetails.meal_portion[0]["Egusi soup"].Image_of_egusi_soup;
    return (
      <div className="float-right ml-10 " >
        <h1 className="text-2xl font-bold mb-4">{recipeDetails.name}</h1>
        <img className="w-60 h-auto mx-auto" src={egusi} alt={recipeDetails.name} />
      </div>
    );
  }
  
  export default Images;