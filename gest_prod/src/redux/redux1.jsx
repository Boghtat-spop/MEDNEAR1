const ADD_PRODUCT="ADD_PRODUCT"
const DELETE_PRODUCT="DELETE_PRODUCT"
const UPDATE_PRODUCT="UPDATE_PRODUCT"
//ETAT INITIAL
const initialState={
    produits:[
        {code:1,libelle:"produit 1"},{code:1,libelle:"produit 2"},{code:1,libelle:"produit 3"}
    ]
}
//reducer
function productsReduce(state=initialState,action){}{
    switch(action.type){
        case ADD_PRODUCT:return{
            //nouvel etat
        }
        case DELETE_PRODUCT:return{
            //nouvel etat
        }
        case UPDATE_PRODUCT:return{
            //nouvel etat
        }
    }
}