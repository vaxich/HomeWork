import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType =  'high' | 'low' | 'middle' ;
export type AffairType = {
    _id:number,
    name:string,
    priority:AffairPriorityType
}
export type FilterType =  'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter:FilterType): any => { // need to fix any
    if (filter === 'all') {
        return affairs
    }

    if (filter === 'high') {
        return affairs.filter((affair: AffairType) => affair.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs.filter((affair: AffairType) => affair.priority === 'middle')
    }

    else  
        return  affairs.filter((affair: AffairType) => affair.priority === 'low')
    } // need to fix

export const deleteAffair = (affairs: any, _id: number): AffairType => { // need to fix any
    return affairs.filter((affair: AffairType) => affair._id != _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeAffairs/>
            <hr/>
        </div>
    )
}

export default HW2
