import React from 'react'

const NedarimIFrame = () => {
    //שימו לב!! שיטת הפוסטמסג' לא עובדת בשרת מקומי (localhost). חובה להעלות את הקוד שלכם לדומיין שלכם.
    window.onerror = function (msg, url, line, col, error) {
        alert("שגיאת תוכנה. פנה לתמיכה טכנית. שגיאה: " + msg)
    }

    //זהירות! את השורת קוד הזו יש להפעיל רק פעם אחת בעת פתיחת הדף
    window.onload = function () {
        if (window.addEventListener) { window.addEventListener("message", ReadPostMessage, false); } else { window.attachEvent("onmessage", ReadPostMessage); }
        document.getElementById('NedarimFrame').onload = function () { console.log('StartNedarim'); PostNedarim({ 'Name': 'GetHeight' }) }
        document.getElementById('NedarimFrame').src = "https://matara.pro/nedarimplus/iframe?language=en";
    }
    ///////////////////////////////

    function PostNedarim(Data) { var iframeWin = document.getElementById('NedarimFrame').contentWindow; iframeWin.postMessage(Data, "*"); };
    function ReadPostMessage(event) {
        console.log(event.data);
        switch (event.data.Name) {
            case 'Height':
                //Here you get the height of iframe | event.data.Value
                document.getElementById('NedarimFrame').style.height = (parseInt(event.data.Value) + 15) + "px";
                document.getElementById('WaitNedarimFrame').style.display = 'none';
                break;

            case 'TransactionResponse':
                document.getElementById('Result').innerHTML = '<b>TransactionResponse:<br/>' + JSON.stringify(event.data.Value) + '</b><br/>see full data in console';
                console.log(event.data.Value)
                if (event.data.Value.Status == 'Error') {
                    document.getElementById('ErrorDiv').innerHTML = event.data.Value.Message
                    document.getElementById('WaitPay').style.display = 'none';
                    document.getElementById('PayBtDiv').style.display = 'block';
                } else {
                    document.getElementById('WaitPay').style.display = 'none';
                    document.getElementById('OkDiv').style.display = 'block';
                }
        }
    }

    function PayBtClick() {
        document.getElementById('Result').innerHTML = ''
        document.getElementById('PayBtDiv').style.display = 'none';
        document.getElementById('OkDiv').style.display = 'none';
        document.getElementById('WaitPay').style.display = 'block';
        document.getElementById('ErrorDiv').innerHTML = '';
        PostNedarim({
            'Name': 'FinishTransaction2',
            'Value': {
                'Mosad': document.getElementById('MosadId').value,
                'ApiValid': document.getElementById('ApiValid').value,
                'PaymentType': document.getElementById("PaymentType").value,
                'Currency': '1',

                'Zeout': '',
                'FirstName': document.getElementById('ClientName').value,
                'LastName': '',
                'Street': document.getElementById('Street').value,
                'City': document.getElementById('City').value,
                'Phone': '',
                'Mail': '',

                'Amount': document.getElementById('Amount').value,
                'Tashlumim': '1',

                'Groupe': '',
                'Comment': 'בדיקת אייפרם 2',

                'Param1': 'פרמטר 1',
                'Param2': '',
                'ForceUpdateMatching': '1', //מיועד לקמפיין אם מעוניינים שהמידע יידחף ליעד, למרות שזה לא נהוג באייפרם

                'CallBack': '', //מיועד לקבלת WEBHOOK לאחר כל עסקה / סירוב
                'CallBackMailError': '', //מיועד לקבלת התראה על תקלת בשליחת קאלבק למייל של המפתח במקום למייל של אנשי הקשר של המוסד

                'Tokef': document.getElementById('Tokef').value //אם אתם מנהלים את התוקף בדף שלכם (מיועד למי שרוצה להפריד בין חודש לשנה ורוצה לעצב מותאם אישית)

            }
        });
    }
    return (
        <div>

            <div id="Flow" style="width:80%;padding:20px;margin-right:auto;margin-left:auto;text-align:left;display:none" dir="ltr">
                <p>Stage 1: Send client data (Name,FirstName etc) to your server www.xxxxxxxx.com and Create Transaction with DebitIframe API.</p>
                <p>Stage 2: Send TransactionId to iframe via PostNedarim()</p>
                <p>Stage 3: When iframe finish transaction, you will receive TransactionResponse via ReadPostMessage()</p >

            </div>



            <div style="width:80%;max-width:500px;border:2px solid cadetblue;padding:20px;margin-right:auto;margin-left:auto">
                <div style="text-align:center">
                    <h3>Nedarim-Frame sample 2</h3>
                    <span>The red border is the secured iframe.</span>
                </div>

                <div style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;min-width:100%">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">Name:</span><br />
                    <input id="ClientName" type="text" maxlength="30" class="TextBox" /><br />
                </div>

                <div style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;min-width:100%">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">Street:</span><br />
                    <input id="Street" type="text" maxlength="30" class="TextBox" /><br />
                </div>

                <div style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;min-width:100%">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">City:</span><br />
                    <input id="City" type="text" maxlength="30" class="TextBox" /><br />
                </div>

                <div style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;min-width:100%">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">Amount:</span><br />
                    <input id="Amount" type="text" maxlength="30" class="TextBox" /><br />
                </div>

                <div id="TokefDiv" style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;min-width:100%;display:none">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">Expiration:</span><br />
                    <input id="Tokef" type="text" maxlength="30" class="TextBox" /><br />
                </div>

                <div id="PaymentTypeDiv" style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;min-width:100%">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">PaymentType:</span><br />
                    <select id="PaymentType">
                        <option value="Ragil">Ragil</option>
                        <option value="HK">HK</option>
                        <option value="CreateToken">CreateToken</option>
                    </select>
                    <br />
                </div>


                <iframe id="NedarimFrame" style="width:100%;-webkit-box-sizing:border-box;height:0px;border:1px solid indianred;" scrolling="no" src="about:blank"></iframe>
                <div style="text-align:center;padding:10px 0px;font-family:Assistant,Arial;color:#808080" id="WaitNedarimFrame"><img src="waitnew.gif" style="width:50px;" /><br />Connecting to PCI Server...</div>

                <div id="OkDiv" style="font-weight:bold;color:#47ba18;padding:5px;display:none;text-align:center">Transaction Done - העסקה בוצעה בהצלחה</div>

                <div id="PayBtDiv" style="margin:20px 0px 15px 0px;text-align:center">
                    <input type="button" id="PayBt" style="cursor:pointer;color:white;background-color:#17a2b8;text-align:center" value="ביצוע תשלום" class="TextBox" onclick="PayBtClick()" />
                    <div id="ErrorDiv" style="font-weight:bold;color:firebrick;padding:5px"></div>
                </div>
                <div style="text-align:center;padding:10px 0px;font-family:Assistant,Arial;color:#808080;display:none" id="WaitPay"><img src="waitnew.gif" style="width:50px;" /><br />מבצע חיוב, נא להמתין...</div>

                <div id="Result" style="text-align:center" dir="ltr"></div>


            </div>
            <div style="width:80%;max-width:500px;padding:20px;margin-right:auto;margin-left:auto;font-size:small;text-align:center">
                <div style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;width:40%;display:inline-block">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">MosadId:</span><br />
                    <input id="MosadId" type="text" maxlength="30" class="TextBox" style="font-size:small" value="0" /><br />
                </div>

                <div style="vertical-align:top;text-align:left;margin:15px 0px 15px 0px;width:40%;display:inline-block">
                    <span style="text-align:left; min-width:100%;margin-right:1px;color:#808080">ApiValid:</span><br />
                    <input id="ApiValid" type="text" maxlength="30" class="TextBox" style="font-size:small" value="j+iyEFN3bE" /><br />
                </div>

                <input type="button" value="ניהול שדה תוקף בדף ולא באייפרם" onclick="document.getElementById('NedarimFrame').src = 'https://matara.pro/nedarimplus/iframe?language=en&Tokef=Hide';document.getElementById('TokefDiv').style.display = 'block'" />
                <input type="button" value="הסתרת אייקוני אבטחה" onclick="document.getElementById('NedarimFrame').src = 'https://matara.pro/nedarimplus/iframe?language=en&Picture=Hide';document.getElementById('TokefDiv').style.display = 'none'" />
                <input type="button" value="תצוגה בעברית" onclick="document.getElementById('NedarimFrame').src = 'https://matara.pro/nedarimplus/iframe';document.getElementById('TokefDiv').style.display = 'none'" />
                <input type="button" value="הוסף קאפצ'ה" onclick="document.getElementById('NedarimFrame').src = 'https://matara.pro/nedarimplus/iframe?Captcha=1';document.getElementById('TokefDiv').style.display = 'none'" />

            </div>
        </div> 
    )
}

export default NedarimIFrame