export const reducer = (state, action) => {
    switch (action.type) {
        case 'username':
            return {
                ...state,
                username: action.payload
            }
            case 'phoneNumber':
                return{
                    ...state,
                    phoneNumber:action.payload
                }
        case 'email':
            return {
                ...state,
                email: action.payload
            }
        case 'companyName':
            return {
                ...state,
                companyName: action.payload
            }
            case 'catchPhrase':
                return {
                    ...state,
                    catchPhrase: action.payload
                }
        default:
            state
    }
}
export const Initial_Values = {
    username: '',
    phoneNumber:'',
    email: '',
    companyName: '',
    catchPhrase:''
}