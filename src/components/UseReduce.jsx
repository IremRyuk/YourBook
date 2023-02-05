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
                case 'insta':
                    return{
                        ...state,
                        staticInsta:false
                    }
                    case 'instaR':
                        return{
                            ...state,
                            staticInsta:true
                        }
                    case 'facebook':
                        return{
                            ...state,
                            staticFb:false
                        }
                        case 'facebookR':
                            return{
                                ...state,
                                staticFb:true
                            }
                        case 'wp':
                            return{
                                ...state,
                                staticWP:false
                            }
                            case 'wpR':
                                return{
                                    ...state,
                                    staticWP:true
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
    catchPhrase:'',
    staticInsta:true,
    staticFb:true,
    staticWP:true
}