var current="On-line"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var least = document.getElementById("least");
function countdown(yr,m,d){
    theyear=yr;themonth=m;theday=d
    var today=new Date()
    var todayy=today.getYear()
    if (todayy < 1000) todayy+=1900
    var todaym=today.getMonth()
    var todayd=today.getDate()
    var todayh=today.getHours()
    var todaymin=today.getMinutes()
    var todaysec=today.getSeconds()
    var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
    futurestring=montharray[m-1]+" "+d+", "+yr
    dd=Date.parse(futurestring)-Date.parse(todaystring)
    dday=Math.floor(dd/(60*60*1000*24)*1)
    dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
    dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
    dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
            if(dday<=0&&dhour<=0&&dmin<=0){
            least.innerHTML=current
            return
            }else if(dday<=0&&dhour<=0){
            least.innerHTML=dmin+" : "+dsec
            setTimeout("countdown(theyear,themonth,theday)",1000)
            }else if(dday<=0){
            least.innerHTML=dhour+" : "+dmin+" : "+dsec
            setTimeout("countdown(theyear,themonth,theday)",1000)
            }else{
            least.innerHTML=dday+ " : "+dhour+" : "+dmin+" : "+dsec
            setTimeout("countdown(theyear,themonth,theday)",1000)
            }
}
countdown(2017,11,23)