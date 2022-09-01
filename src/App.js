import React from 'react'
import { useDataMutation } from '@dhis2/app-runtime'
import {Button} from '@dhis2/ui'
import {CircularLoader} from  '@dhis2/ui'
import classes from './App.module.css'

const mutation = {
        resource: 'dataStore/trial/key_3',
        type: 'update', 
        dataStoreTtpe:{
            id: 'xyU123'
        },
        data:({name}) => ({
            name  
        })
}

const  AddDataStore= ({onCreate}) => {
    const [mutate, {loading}]= useDataMutation(mutation, 
        {
        onComplete:onCreate,
        variables:{
        name: 'Information_Technology'
            }
        });

    const onClick = async() => {
        await mutate()
        refetch()
    }
    
    return(
    <div className={classes.container}>
         <>
             <h3>Add Value in DataStore</h3>
                    <Button primary  onClick={onClick}>
                        Update 
                    </Button> 
                    {loading && <CircularLoader />}          
         </>     
    </div>   
    )    
}

export default AddDataStore
