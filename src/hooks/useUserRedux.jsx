import { useSelector, useDispatch } from 'react-redux';
import { userActions } from "../redux//reducers/userSlice";

const useUserRedux = () => {
    const userRedux = useSelector(state => state.user);
    const dispatch = useDispatch();

    if(userRedux) {
        return {
            ...userRedux, 
            setUserName: data => dispatch(userActions.setUserName(data)),
            setBirthday: data => dispatch(userActions.setBirthday(data))
        }
    } else {
        throw Error('Error accessing user reducer.');
    }
}

export default useUserRedux