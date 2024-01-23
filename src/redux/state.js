let rerenderEntireTree = () => {
  console.log("state  changed");
};

let state = {
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
  },
};

export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
