

export default function oneStep(keyCode, state, generateRandomFood) {
    let {snake, food} = state
    const field = JSON.parse(JSON.stringify(state.field))
    const newPosition = [...snake[0]]
    let newState = {}
   
    if(keyCode === 39) { // to the right
        newPosition[1]++
    }
    if(keyCode === 37) { // to the left
        newPosition[1]--
    }
    if(keyCode === 38) { // to the up
        newPosition[0]--
    }
    if(keyCode === 40) { // to the down
        newPosition[0]++
    }
    
    if(field[newPosition[0]][newPosition[1]].data === '0') {
        const tail = snake.pop()
        snake.unshift(newPosition)

        field[tail[0]][tail[1]] = {...field[tail[0]][tail[1]], data: '0'} 
        field[newPosition[0]][newPosition[1]] = {...field[newPosition[0]][newPosition[1]], data: 'o'} 

    }

    if(field[newPosition[0]][newPosition[1]].data === 'f') {
        snake.unshift(newPosition)
        field[newPosition[0]][newPosition[1]] = {...field[newPosition[0]][newPosition[1]], data: 'o'} 
        food = generateRandomFood(state).food
        
        field[food[0]][food[1]] = {...field[food[0]][food[1]], data: 'f'} 
    }
    

    return {...newState, field, snake, food}
}