import React from 'react'
import { useForm } from 'react-hook-form';
function Messages() {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const { email, Messages } = data
        console.log(data);
        //   המתנהלת בלחיצה על שליחת הטופס
        let body = JSON.stringify({ email, Messages });

        let requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: body,
        };
        fetch("http://localhost:5000/auth/Messages", requestOptions)
            .then(response => response.json())
            .then(res => {
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email')} placeholder="כתובת דואר אלקטרוני" />
                <textarea {...register('Messages')} placeholder="הודעה" />

                <button type="submit">שליחה</button>
            </form>
        </div>
    );
};



export default Messages