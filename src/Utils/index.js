
// It will convert objects of objects data to array of objects
export const ConvertObjectToArray = (data) => {
    let array = []

    if (data && Object.keys(data).length > 0) {
        array = (Object.values(data));
    }

    return array
}

// Remove empty name data 
export const EmptyFieldData = (data) => {
    if (data && data.length > 0) {
        data.map((obj => {
            if (obj.name == "") {
                obj.name = "Empty";
            }
        }));
    }
    return data;
}

// It will sort the data based on given field
export const getSortedData = (data, field = 'bananas', order = 'desc', num = 10) => {
    data = EmptyFieldData(data);
    if (data && data.length > 0) {
        data.sort((a, b) => {
            if (order === 'asc')
                return a[field] - b[field];
            if (order === 'desc')
                return b[field] - a[field];
        });
    }

    return data.slice(0, num)
}

// Find in array
const findInArray = (array, keyword) => {
    if (array && array.length > 0) {

        return (array.find(item => item.name === keyword))
    }

}

// Find Index Of
const findIndexOfItem = (array, keyword) => {
    if (array && array.length > 0) {
        return array.findIndex(object => {
            return object.name === keyword.trim();
        });
    }
    return false
}


// Filter fron an array
export const FilterFormArray = (array, keyword) => {


    let resArray = getSortedData(array);
    let foundOnIndex = findIndexOfItem(resArray, keyword)

    // For Ranking
    for (let i in resArray) {
        const rank = Number(i) + 1;
        resArray[i].id = rank;
        if (i == foundOnIndex) {
            resArray[i].isSearched = true;
        } else {
            resArray[i].isSearched = false;
        }

    }

    // If Found
    if (foundOnIndex < 0) {

        let found = findInArray(array, keyword);
        let foundFullItemIndex = findIndexOfItem(array, keyword)
        if (found) {
            found.id = +foundFullItemIndex + 1;
            found.isSearched = true;
            resArray['9'] = found;
        }
        else {
            return []
        }
    }

    return resArray;
}
