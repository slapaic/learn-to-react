const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const defaultState = {
    newMessageText: "",
    dialogsData: [
        {
            id: "001",
            name: "Hella",
        },
        {
            id: "002",
            name: "Alchymick",
        }
    ],
    messagesData: [
        {
            message: "Hi!"
        },
        {
            message: "Hi?"
        },
    ],
};

export const messengerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            state.messagesData.push({
                message: state.newMessageText,
            })
            state.newMessageText = "";
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state
        }
        default:
            return state
    }
}

export default messengerReducer;