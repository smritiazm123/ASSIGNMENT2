var arr=[];
document.getElementById("submit").addEventListener("click",e=>
{
    e.preventDefault();
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;

    let people=document.getElementById("select_people").value;
    //let selected_people=people.options[people.selectedIndex].value;
    
   

    let mobile=document.getElementById("mobile").value;
    let date=document.getElementById("date").value;
    let time=document.getElementById("selectbox").value;
    //let selected_time=time.options[time.selectedIndex].value;

    if(fname.length<5)
    {
        document.getElementById("name1").innerHTML="*Length of name is too short";
        return 0;
    }
    else{
        document.getElementById("name1").innerHTML="";
    }
    //for lname
    if(lname.length<5)
    {
        document.getElementById("name2").innerHTML="*Length of name is too short";
        return 0;
    }
    else{
        document.getElementById("name2").innerHTML="";
    }
    
    //for number of people
    if(people>20)
    {
        document.getElementById("people1").innerHTML="Sorry You Have to book two table, Number of maximim people can sit together is 20 only";
        return 0;
    }
    else{
        document.getElementById("people1").innerHTML="";
    }
    //phone number
    if(isNaN(mobile)==true)
    {
        document.getElementById("mobile1").innerHTML="Only digits are allowed here";
        return 0;
    }
    if(mobile.length<10 || mobile.length>10)
    {
        document.getElementById("mobile1").innerHTML="mobile number always contain 10 digits";
        return 0;
    }
    /*if(mobile.charAt(0)!=9||mobile.charAt(0)!=8||mobile.charAt(0)!=7||mobile.charAt(0)!=6)
    {
        document.getElementById("mobile1").innerHTML="mobile number cannot start with this digit";
    }
    */
    else{
        document.getElementById("mobile1").innerHTML="";
    }

    //for date
    const d = new Date();

    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.

    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate);
    console.log(date);
    let cur_date=new Date(date);
    console.log(cur_date);
    
    if(cur_date.getMonth()+1<month||cur_date.getFullYear()<year||cur_date.getDate()<day)
    {
        document.getElementById("date1").innerHTML="You cant enter the past dates";
        return 0;
    }
    
    else{
        document.getElementById("date1").innerHTML="";
    }
    
    //console.log(currentDate); // "17-6-2022"

    //for time
    if(time=="10:00 AM" ||time=="12:00 PM"||time=="02:00 PM"||time=="04:00 PM"||time=="06:00 PM"||time=="08:00 PM"||time=="10:00 PM")
    {
        document.getElementById("time1").innerHTML="";
    }
    else{
        document.getElementById("time1").innerHTML="Please enter the date in the valid formate as mentioned";
        return 0;
    }
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]['date']==date && arr[i]['time']==time)//selected_time
        {
            alert("The table is already reserved for this particular time please try with another Time :)");
            return -1;
        }
    }
    

    
    arr.push({
        fname:fname,
        lname:lname,
        people:people,//selected_people
        mobile:mobile,
        date:date,
        time:time//selected time
    }
    );
    localStorage.setItem('arr', JSON.stringify(arr));
    done_messege();
});

function done_messege()
{
    document.getElementsByClassName("popup")[0].style.display="flex";
}
 let ok=document.getElementById("OK");
 ok.addEventListener("click",e=>
 {
    e.preventDefault();
    document.getElementsByClassName("popup")[0].style.display="none";
 })

let clear=document.getElementById("clear");
clear.addEventListener("click",e=>
{
    e.preventDefault();
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    let people=document.getElementById("select_people");
   // people.options[people.selectedIndex].value=people.options[0];
   people.value="";
    document.getElementById("mobile").value="";
    document.getElementById("date").value="";
    let time=document.getElementById("selectbox");
    time.value="";
    //time.options[time.selectedIndex].value="";
});