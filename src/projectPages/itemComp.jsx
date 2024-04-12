import { Paper } from '@mui/material'

export default function Item(props){

    const pics = require(`../pics/img${props.item.id}.jpg`)
    return (
        <Paper>
        
            <img src={pics} alt={props.item.id} style={{width : "100%" , height : "700px"}} />
            
        </Paper>
    )
}