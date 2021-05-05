import Counter from './Counter'


const MultiButton = (num)=>{
    var list = []
    for(var i = 0;i<num;i++){
        list.push(<Counter />)
    }
    return list
}

export default MultiButton