

  let yearC = document.getElementById("yearC")
  let monthC = document.getElementById("monthC")
  let dayC = document.getElementById("dayC")
  let hourC = document.getElementById("hourC")
  
  var date =  new Date()
  console.log(date)
  var houer = date.getHours()
  var month = date.getMonth()
  var day = date.getDay()
  var year  = date.getFullYear()
  var sec= date.getSeconds()
  
  console.log(houer ,month ,day,year ,sec)
  yearC.innerHTML=year
  
  // get Month 
  var infoMonth =["january","fabraury","march","april","may","june","july","august","septemper","october","novamber","december"]
  var monthEnglish ; 
  for(var i =0 ; i<infoMonth.length ;i++){
      if(month === i){
          monthEnglish=infoMonth[month]
      }  
  }
  // get Houers 
  if(houer > 12){
      console.log(houer-12)
      hourC.innerHTML=houer-12
  
  }else{
      console.log(houer)
      hourC.innerHTML=houer
  
  }
  console.log(monthEnglish)
  
  
  // get Day
  var infoDay = ["saturday","sunday","monday","tusday","wednesday","thursday","friday"]
  var dayEnglish ;
  for(var d =0 ; d<infoMonth.length ;d++){
      if(day === d){
          dayEnglish=infoDay[day]
      }
  }
  console.log(dayEnglish)
  dayC.innerHTML=dayEnglish
  monthC.innerHTML=monthEnglish
  
  
  // setInterval(function(){
  //     console.log(dayEnglish);
  //     console.log(houer)
  //     console.log(houer ,month ,day,year ,sec)
  
  //     // var sec= date.getSeconds()
  //     sec++
  // if(sec<=60){
  //     console.log(sec)
  
  // }else if(sec>60){
  //   sec=1
  //   sec++
  //   console.log(sec)
  // }
  // },1000)
  
  
  
  // $(window).load(function(){
  //     $('.preloader').fadeOut(1000); // set duration in brackets    
  //   });
  
   