console.log("Learn Ajax in one Vedio");

let getFetchData = document.getElementById("fetchbtn");
getFetchData.addEventListener("click", buttonclickhandler);//prototype

function buttonclickhandler() 
{
  console.log("Click hogya");
  //---->initaite an object
  const xhr = new XMLHttpRequest();
  //---->open object
  //1: Data to get
  //2:from where

  //synchronus or Asynchronus
 	  //------>from file
  	 //xhr.open("GET", "zain.txt", true);
	//------->get request
   // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  //------->post request
 	 xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
	  //we need to pass data when we are using post request
	  xhr.getResponseHeader('content-type','application/json');
  //---->what to do on progress(optional)
  xhr.onprogress = function () 
  {
    console.log("Progress ho rhi ha bhia");
  };
  //---->in which state your code is
  //Value	State					Description
	//0		UNSENT					Client has been created. open() not called yet.
	//1		OPENED					open() has been called.
	//2		HEADERS_RECEIVED		send() has been called, and headers and status are available.
	//3		LOADING	Downloading; 	responseText holds partial data.
	//4		DONE					The operation is complete.
  /*xhr.onreadystatechange = function () 
  {
    console.log("ready state is ",xhr.readyState);
  };*/
  xhr.onload = function () 
  {
    if (this.status === 200)
	{
      //200 mtlb response okay
      console.log(this.responseText);
    }
	 else
	{
      console.log("some error occured");
    }
  };
  //---->send request for get method
  //xhr.send();
  //---->send request for post method
  sendDataVar = '{ "name:","zzain","salary:","100000","age:23" }';
  //if duplicate then it will throw error
  xhr.send(sendDataVar);
  console.log('we are done');
 
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

