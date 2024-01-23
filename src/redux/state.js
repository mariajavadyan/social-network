const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "My first post",
          likesCount: 15,
        },

        {
          id: 2,
          message: "My second post",
          likesCount: 12,
        },
        {
          id: 3,
          message: "My third post",
          likesCount: 17,
        },
        {
          id: 4,
          message: "My fourth post",
          likesCount: 14,
        },
      ],
      newPostText: "it-kamasutra.com",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Maria",
        },

        {
          id: 2,
          name: "Anna",
        },

        {
          id: 3,
          name: "Ani",
        },

        {
          id: 4,
          name: "Armen",
        },
        {
          id: 5,
          name: "Artak",
        },
        {
          id: 6,
          name: "Argam",
        },
      ],
      messages: [
        {
          id: 1,
          message: "Hi",
        },

        {
          id: 2,
          message: "How are you",
        },

        {
          id: 3,
          message: "Lalala",
        },

        {
          id: 4,
          message: "Dididi",
        },
        {
          id: 5,
          message: "Dododo",
        },
        {
          id: 6,
          message: "Pararam",
        },
      ],

      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("state  changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({
        id: 7,
        message: body,
      });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export const subscribe = (observer) => {
  this._callSubscriber = observer;
};

export default store;
window.store = store;
