export interface MyObject{
    id: number;
    title: string;
    text: string;
}

export const arr: MyObject[] = [
    {
        id: 1,
        title: 'title1',
        text: 'text1'
    },
    {
        id: 2,
        title: 'title2',
        text: 'text2'
    },
    {
        id: 3,
        title: 'title3',
        text: 'text3'
    },
]

export function updateObjectInArray<MyObject>(initialArray: Array<MyObject>,
                                          key: keyof MyObject,
                                          value: string | number,
                                          patch: Partial<MyObject>): Array<MyObject>{
    const copyArray = [...initialArray]

    for(const i in copyArray){
        if(copyArray[i][key] === value){
            copyArray[i] = {...copyArray[i], ...patch}
        }
    }
    return copyArray
}

// updateObjectInArray<MyObject>(arr, "title", "title1", {title: "changedTitle"})