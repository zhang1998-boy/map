let common = {
	checkRules(params, rules) {		//表单校验
		for (let key in rules) {
			let arr = rules[key]
			for (let i = 0; i < arr.length; i++) {
				let rule = arr[i],
					val = params[key]===0?'0':params[key] || ''
				if (rule.required && val==='') {	//非空
					uni.showToast({
						title: rule.message,
						icon: "none"
					});
					return false
				}
				if(rule.pattern && !rule.pattern.test(val)){	//正则
					uni.showToast({
						title: rule.message,
						icon: "none"
					});
					return false
				}
			}
		}
		return true
	}

}

module.exports = common
