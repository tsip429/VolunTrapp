//var mylistofusers= new Firebase("https://crackling-fire-4161.firebaseio.com");

//mylistofusers.push({user:"dana",password:"hello"});
//mylistofusers.push({user:"aisha",password:"salut"});



function CheckLogin(){

	console.log("inside CheckLogin");

	var mylistofusers= new Firebase("https://crackling-fire-4161.firebaseio.com");
	//printing all the users and passwords
	var userName=$("#Username").val();
	var passWord=$("#Password").val();

	mylistofusers.once("value",function(snapshot){
		var MyData=snapshot.val();

		for (var key in MyData){
			var entry=MyData[key];
			if (entry.user == userName && entry.password == passWord){
				console.log("correct user")
			}
			//console.log(entry.user);
			//console.log(entry.password);
		}
	});
	
}

$(function(){
	$("#LoginButton").click(CheckLogin);
});
