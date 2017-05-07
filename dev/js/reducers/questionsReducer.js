let initialState = {

  "questions" : [

    {
      "qno" : 1,
      "answers" : [
        "answer 1",
        "answer 2",
        "answer 3",
        "answer 4"
      ]
    },

    {
      "qno" : 2,
      "answers" : [
        "answer 1",
        "answer 2",
        "answer 3",
        "answer 4"
      ]
    },

    {
      "qno" : 3,
      "answers" : [
        "answer 1",
        "answer 2",
        "answer 3",
        "answer 4"
      ]
    },

    {
      "qno" : 4,
      "answers" : [
        "answer 1",
        "answer 2",
        "answer 3",
        "answer 4"
      ]
    }

  ]

};


let initialState2 = {

  questions : [

    {
      qno : 1
    },

    {
      qno : 2
    },

    {
      qno : 3
    },

    {
      qno : 4
    }

  ]

};



export default function (state = initialState2, action) {


    switch (action.type) {


        case 'GET_QUESTIONS' :
          /* return state.questions */
          /* BUG1: return state */
          return state;
          break;


          case 'ADD_QUESTIONS' :
            /* return state.questions */
            /* BUG1: return state */

            //return state;

            //initialState
            // return {
            //   ...state,
            //   questions: [
            //     ...state.questions,
            //     action.data
            //   ]
            // }

            //initialState2
            var a = {
               questions: [ ...state.questions,
                 action.data
              ]
            };

            return a;

            break;



        case 'ADD_ITEM':

         return [
            ...state,                   /*It holds old/existing data*/
            action.payload                            /*It adds new todo item.. when "add" button is clicked.*/
         ]

            /*todo(undefined, action) */

            /*state.push(action.payload);
            console.log(state);
            return state;*/

        	break;


        case 'DELETE_ITEM':

        //console.log(...state);

         return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
         ]


            /*state.splice(action.payload, 1);
            console.log(state);
            return state;*/

            /*...state.splice(action.payload, 1)*/

        	break;




        case 'INC_QTY_PRICE':

            //console.log("INC_QTY_PRICE");
            //console.log(state);          //BOTH ARE SAME
            //console.log(...state);

            state.forEach(function(item){
                if(item.brand === action.payload.brand)
                {
                    var aprice = item.price/item.qty;
                    item.qty++;
                    item.price = item.price + aprice;
                }
            });

            return [
                ...state
            ]

            break;




        case 'DEC_QTY_PRICE':

            state.forEach(function(item){
                if(item.brand === action.payload.brand)
                {
                    var aprice = item.price/item.qty;
                    item.qty--;
                    item.price = item.price - aprice;
                }
            });

            return [
                ...state
            ]

            break;





       	default:
            return state;
    }

}
