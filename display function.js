function display(){
	currentUserRef.child("total_Hours").once("value", function(snapshot){
		var MyData=snapshot.val();
		var myHours = myData.total_Hours;
		$("#totalhours").innerHTML = myHours + "hours";
	}
}
