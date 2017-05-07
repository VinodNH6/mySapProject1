export const getQuestions = (bookid) => {
    console.log("Get Questions for Book_Id: ", bookid);
    return {
        type: 'GET_QUESTIONS',
        payload: bookid
    }
};


export const addQuestions = (bookid) => {
    console.log("Add Questions for Book_Id: ", bookid);
    return {
        type: 'ADD_QUESTIONS',
        payload: bookid,
        data:        {
                        "qno" : 5,
                        "answers" : [
                          "answer 1",
                          "answer 2",
                          "answer 3",
                          "answer 4"
                        ]
                      }
    }
};

export const addItem = (item) => {
    console.log("Add item: ", item.brand);
    return {
        type: 'ADD_ITEM',
        payload: item
    }
};

export const removeItem = (index) => {
    console.log("Delete item with index: ", index);
    return {
        type: 'DELETE_ITEM',
        payload: index
    }
};
