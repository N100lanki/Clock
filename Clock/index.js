
    setInterval(function () {  
        let date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = date.getHours() >= 12 ? "PM" : "AM";     
        document.getElementById('hour').innerHTML=hh;
        document.getElementById('minute').innerHTML=mm;
        document.getElementById('second').innerHTML=ss;
        document.getElementById('ampm').innerHTML=session;
    
    }, 1000);