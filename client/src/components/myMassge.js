import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
function MyMassge() {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const { id,Messages } = data
        console.log( id, Messages);

        let body = JSON.stringify({ id, Messages });
        console.log(body);
        let requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: body,
        };
        fetch("http://localhost:5000/auth/MyMassge", requestOptions)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                if (res.msg) {
                    alert(res.msg)
                    return;
                }
            })
            .catch(error => alert(error));
        //   מודפסים נתוני הטופס בקונסולה
        reset();
        // איפוס הטופס לאחר שליחה
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px' }}>
                <TextField {...register('id')} label="מספר הודעה" variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }} />
                   
                <TextField {...register('Messages')} label="הודעה" variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    style={{ marginBottom: '10px' }} />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    שליחה
                </Button>
            </form>
        </div>
    );
}

export default MyMassge