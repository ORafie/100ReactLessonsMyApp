const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
        {
            id: 1, name: 'User 1', avatarUrl: 'https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg',
            friend: 'true', followed: 'true', status: 'some words about user1', location: { city: 'Paris', country: 'France' }
        },
        {
            id: 2, name: 'User 2', avatarUrl: 'https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg',
            friend: 'false', followed: 'false', status: 'some words about user2', location: { city: 'Athens', country: 'Greece' }
        },
        {
            id: 3, name: 'User 3', avatarUrl: 'https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg',
            friend: 'false', followed: 'false', status: 'some words about user3', location: { city: 'Amsterdam', country: 'Netherland' }
        },
        {
            id: 4, name: 'User 4', avatarUrl: 'https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg',
            friend: 'true', followed: 'true', status: 'some words about user4', location: { city: 'Kyiv', country: 'Ukraine' }
        },
        {
            id: 5, name: 'User 5', avatarUrl: 'https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg',
            friend: 'true', followed: 'false', status: 'some words about user5', location: { city: 'Rome', country: 'Italy' }
        },
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    };
};

export const followAC = (userId) => { return { type: FOLLOW, userId } };

export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } };

export const setUsersAC = (users) => { return { type: SET_USERS, users } };

export default usersReducer;
