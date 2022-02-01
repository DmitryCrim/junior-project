let state = {
    profilePage: {
        posts: [{id: 1, message: "Hello, glad to see you", likesCount: 12},
            {id: 2, message: "Best props", likesCount: 15}]
        },
    dialogsPage: {
        dialogs: [{id: 1, name: "Evgen"},
            {id: 2, name: "Dmitry"},
            {id: 3, name: "Sophia"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Valera"},
            {id: 6, name: "Sergo"},],
        messages:[{id: 1, message: "Hi"},
            {id: 2, message: "What is your name?"},
            {id: 3, message: "How old are you"},
            {id: 4, message: "Learn JavaScript"},
            {id: 5, message: "Learn React"},
            {id: 6, message: "Learn HTML and CSS"},],
    }
}

export default state