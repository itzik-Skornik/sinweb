import React, { useContext , useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { userContext } from '../App'; // נניח שזהו הקונטקסט בו מאוחסנים פרטי המשתמש

function PersonalInfo() {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(userContext); // משיכת המידע הנוכחי של המשתמש
    useEffect(() => {
        reset({
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            number: user.number,
            number1: user.number1,
            number2: user.number2,
            email: user.email,
            password: user.password,
            business: user.business,
        });
    }, [user, reset]);
    
    const onSubmit = (data) => {
     
        const { firstName, lastName, address, number, number1, number2 ,email,  password,business} = data;


        let body = JSON.stringify({ 
            id: user.id, // מזהה המשתמש
            firstName, 
            lastName, 
            address, 
            number,
            number1, 
            number2, 
            email, 
            password,
            business,
        });

     
        let requestOptions = {
            method: 'POST', // כאן צריך להיות POST כדי להתאים לשרת
            headers: { "Content-Type": "application/json" },
            body: body,
        };
        
console.log("123",body);
        fetch("http://localhost:5000/auth/updatePersonal", requestOptions)

            .then(response =>  response.json())
            .then(res => {
                
                if (res.msg) {
                   
                    alert(res.msg);
                    return;
                }
               
            })
            .catch(error => alert(error));

        reset(); // איפוס הטופס לאחר שליחה
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', marginTop: '50px' }}>
                <TextField
                    {...register('firstName')}
                    label="שם פרטי"
                    defaultValue={user.firstName} // ערך ברירת מחדל הוא הערך הנוכחי
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />

<TextField
                    {...register('lastName')}
                    label="שם משפחה"
                    defaultValue={user.lastName} // ערך ברירת מחדל הוא הערך הנוכחי
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />


                <TextField
                    {...register('address')}
                    label="כתובת"
                    defaultValue={user.address}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />

                <TextField
                    {...register('number')}
                    label="מספר טלפון"
                    defaultValue={user.number}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />
                <TextField
                    {...register('number1')}
                    label="מספר טלפון נוסף 1"
                    defaultValue={user.number1}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />

                <TextField
                    {...register('number2')}
                    label="מספר טלפון נוסף 2"
                    defaultValue={user.number2}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />

                <TextField
                    {...register('email')}
                    label="דואר אלקטרוני"
                    defaultValue={user.email}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />

            

                

                <TextField
                    {...register('password')}
                    label="סיסמא"
                    type="password"
                    defaultValue={user.password}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />
                    <TextField
                    {...register('business')}
                    label="עסק"
                    defaultValue={user.business}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    עדכון פרטים
                </Button>
            </form>
        </div>
    );
}

export default PersonalInfo;
