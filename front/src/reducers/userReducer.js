import { 
    GETALLDOCTOR_FAIL,
    GETALLDOCTOR_REQUEST,
    GETALLDOCTOR_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    SAVE_APPOINTMENT_REQUEST_1,
    REMOVE_APPOINTMENT_REQUEST,
    ADD_MEDICAL_CARD,
    ADD_DENTIST_INFO,
    GET_APPOINTMENT_REQUEST,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAIL
} from "../constants/userConstants";



export const userSignInReducer = (state = {}, action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true};
          case USER_SIGNIN_SUCCESS:
              return {loading:false, userInfo: action.payload};
          case USER_SIGNIN_FAIL:
              return {loading: false, error: action.payload};
          case USER_SIGNOUT:
              return {};
          default:  
              return state;
    }
};

export const userRegisterReducer=(state={}, action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userReg: action.payload }
        case USER_REGISTER_FAIL:
            return {loading:false, error: action.payload}
        default: 
            return state
    }
}

export const loadDoctorsReducer=(state={}, action)=>{
    switch(action.type){
        case GETALLDOCTOR_REQUEST:
            return {loading:true}
        case GETALLDOCTOR_SUCCESS:
            return {loading:false, doctor: action.payload}
        case GETALLDOCTOR_FAIL:
            return{loading:false, error:action.payload}
        default:
            return state;
    }
}

export const appointmentRequestSlipReducer=(state={}, action)=>{
    switch(action.type){
        case SAVE_APPOINTMENT_REQUEST_1: 
            return {...state, saveBasicAppointment: action.payload}
        case REMOVE_APPOINTMENT_REQUEST:
            return {...state};
        case ADD_MEDICAL_CARD: 
            return {...state, PatientMedicalCard: action.payload};
        case ADD_DENTIST_INFO:
            return {...state, Dentist_slip: action.payload}
        default: 
            return state;

    }
}

export const getUserAppointmentReducer = (state={}, action)=>{
    switch(action.type){
        case GET_APPOINTMENT_REQUEST:
            return {loading: true}
        case GET_APPOINTMENT_SUCCESS:
            return {loading:false, appointments: action.payload}
        case GET_APPOINTMENT_FAIL:
            return {loading: false, message: action.payload}
        default:
            return state
    }
}