import { Paper } from '@mui/material';

export default function Item(props){
    const pics = require(`../pics/img${props.item.id}.jpg`);

    return (<>
        <Paper>
            <div style={{ position: 'relative' }}>
                
                <img src={pics} alt={props.item.id} style={{ width: '100%', height: '700px', filter: 'brightness(70%)' }} />
                
                <fieldset style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1', border: 'none', padding: '20px', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                    <legend style={{ fontSize: '2em', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>Welcome to the Continental Hotel</legend>
                    <p style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
                        A place you can call home
                    </p>
                </fieldset>
            </div>
        </Paper>
        
        </>
    );
}
