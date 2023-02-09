export const reducer = (state,action) =>{
switch(action.type){
    case 'nameProfile':
        return{
            ...state,
            nameProfile:action.payload
        }
        case 'nameGmail':
            return{
                ...state,
                nameGmail:action.payload
            }
}
}
export const Initial_Values_Profile = {
    nameProfile:'',
    nameGmail:''
}