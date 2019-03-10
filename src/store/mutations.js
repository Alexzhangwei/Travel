export default {
	//state为公用数据，city为外部传入的city
	changeCity(state, city) {
		state.city = city
		//1.
		try {
			localStorage.city = city
		} catch (e) {}

	}
}
