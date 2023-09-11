/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].capital)
    }
}*/
let json ={
    "basic":
    {
        "name":"gayathri",
        "email id":"gayu.abgl@gmail.com",
        "phone": 9788776099,
        "degree": "B.E computer science",
        "Gender": "Female",
        "location": "Dindigul",
         "address": "No 8 Thirumalaisamypuram nagalnagar dindigul",
         "postalCode": "621003",
         "city": "Dindigul",
        "region": "hindu"
    
    },
    "Academic Profile":[
    {
        "B.E computer science":2010-2013,
        "Name of Institue":"Idhaya Enginnering college for women",
        "percentage":70,
        "Diploma in computer science":2008-2010,
        "Name of Institue":"Elumalai polytechnic college",
        "percentage":74.5,
        "seconday school":2008,
        "Name of Institue":"A.K.T academy matric hr sc school",
        "percentage":70,
}],
    "Work Experience":[
    {
      "system analysis":"SMC COOPERATIVE HOUSE BUILDING SOCITY LTD (MAY 2022 TO FEB 2023",
        "Telecalling and system analyst":"ANNAMALAI INDANE AGENCY (JUNE 2015 TO FEB 2019",
        "Trainee":"OPTIMUS SOFTWARE SOLUTION(APRIL 2014 TO MAY 2015",
    }],
    "Course Attend":[
    {
        "PHP, Java and J2EE":"Attended the  course in college campus for 10 days by PEARLSYS.SALEM",
        "Full stack Developer":"guvi geek network private limited,chennai",
    }],
    "Acadamic project":[
    {
        "project":"Knowledge trackers in DIP and Discovery pattern for text mining using .NET",
    }],
    "known language":[{
        "language":"English,Tamil",
    }],
    "Technical skill":[
        {
            "Languages": "C, C++, PHP",
            "Web Developing": "HTML 5",
            "Database": "My SQL",
            "Productivity Software": "MS-Office (Word, Excel & Power Point)",
            "Operating Systems": "Windows Family",

        },
    ]
}
console.log(json);
