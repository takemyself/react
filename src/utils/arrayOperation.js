/*
* 数组操作的方法
* */

/**
 * 数组合并，取并集(合并去重)
 * @param arr1 数组1
 * @param arr2 数组2
 * @param type 普通数组（false）或含对象的数组（true）
 * @param key 合集的关联/判断 key
 * @returns {Array}
 */
export function arrayUnion(arr1, arr2, type = false, key = 'id') {
    let result = [],mergeArr = [];
    if (!type){
        mergeArr = [...arr1,...arr2]
        result = [...new Set(mergeArr)];
    }else {
        mergeArr = [...arr1,...arr2];
        let obj = {};
        result = mergeArr.reduce(function(prev, cur) {
            obj[cur[key]] || (obj[cur[key]] = true && prev.push(cur));
            return prev;
        }, []);
    }
    return result;
}

/**
 * 数组合并，取交集(合并取重)
 * @param arr1 数组1
 * @param arr2 数组2
 * @param type 普通数组（false）或含对象的数组（true）
 * @param key 合集的关联/判断 key
 * @returns {Array}
 */
export function arrayIntersection(arr1, arr2, type = false, key = 'id') {
    let result = [];
    if (!type) {
        result = arr1.filter(v => arr2.includes(v));
    }else {
        let intersectionIds = arr1.map((item)=>item[key])
        result = arr2.filter((node)=>intersectionIds.indexOf(node[key])!==-1)
    }
    return result;
}


export function arrayDifference() {
    let arr1 = [{name:'name1',id:1},{name:'name2',id:2},{name:'name3',id:3}];
    let arr1Id = [1,2,3];
    let arr2 = [{name:'name1',id:1},{name:'name4',id:4},{name:'name5',id:5}];
    let arr2Id = [1,4,5];
    let arr3 = arr1.concat(arr2);
    let result = arr3.filter(function(v){
        return arr1Id.indexOf(v.id)===-1 || (arr2Id.indexOf(v.id)===-1)
    })
    return result
}