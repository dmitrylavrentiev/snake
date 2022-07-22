import { v4 as uuidv4 } from 'uuid';

export default function initFieldBuilder(size, startPoint = [size / 2, size / 2]) {
    const field = [[]]

    for(let i = 0; i < size; i++) {
        if(i === 0 || i === size - 1) {
            field[i] = Array.from('1'.repeat(size)).map(el => ({id: uuidv4(), data: el}))
        } else {
            field[i] = Array.from('0'.repeat(size)).map(el => ({id: uuidv4(), data: el}))
            field[i][0].data = '1'
            field[i][size - 1].data = '1'
        }
    }

    field[startPoint[0]][startPoint[1]].data = 'o'

    return field
}