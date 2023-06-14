function range(start, end, step){
    let result = [];
    if(start === undefined || end === undefined || step === undefined || start > end || step <= 0){
        return result;
    }
    for (let index = start ;index < end; index=index+step){
        result.push(index);
    }

    return result;
        
      
}
