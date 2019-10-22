let a = 'Hello after 4 seconds'
let count = 0
for (let char of a){
		setTimeout(() => {
			process.stdout.write(char)}, count );
		count += 50
	};
	setTimeout(()=>{
		process.stdout.write("\n")
	}, count += 100);
