let arr = [1,2,3,4,5,6,7,8,9,10]
export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH': {
            
            let newArr = arr.map((item, id)=> {
                const operators = ['+', '-' , '/' ,'*']
                let a = Math.floor(Math.random() * (100 - 1) + 1)
                let b = Math.floor(Math.random() * (100 - 1) + 1)
                let index = Math.floor(Math.random() * (3 - 0) + 0);
                let sum = eval(`${a} ${operators[index]} ${b}`)
                return {id ,a , b , operator: operators[index], sum: Number(sum.toFixed(2))}
            })
            
            return {...state, auth: action.payload.auth,name: action.payload.name ,examples: newArr }
        }

        case 'RESULT': {
            return {...state, result: action.payload}
        }
        case 'ANSWER': {
            let newAnswer = state.examples.filter((item)=> item.sum === Number(action.payload[item.id]))
            return {...state, answer: newAnswer}
        }
        case 'REPEAT': {
            return {...state, auth: false}
        }
        default:
            return state
    }
}