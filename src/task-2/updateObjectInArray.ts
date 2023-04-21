export interface ObjectShape{
    id: number;
    title: string;
    text: string;
}

export const arr: ObjectShape[] = [
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

export function updateObjectInArray<ObjectShape>(initialArray: Array<ObjectShape>,
                                          key: keyof ObjectShape,
                                          value: string | number,
                                          patch: Partial<ObjectShape>): Array<ObjectShape>{
    const copyArray = [...initialArray]
    for(const i in copyArray){
        if(copyArray[i][key] === value){
            copyArray[i] = {...copyArray[i], ...patch}
        }
    }
    return copyArray
}

// updateObjectInArray<ObjectShape>(arr, "title", "title1", {title: "changedTitle"})