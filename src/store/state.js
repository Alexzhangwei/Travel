let defaultCity="北京"
try{
	if(localStorage.city){
		defaultCity=localStorage.city
	}
}catch(e){
	
}


export default{
	//2.
	//state的默认值首先考虑localStorage.city,取不到再用默认值北京
	city:defaultCity
}