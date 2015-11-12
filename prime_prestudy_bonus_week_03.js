// Ok, console logs are great, but lets actually make functions that do things. Create three functions, each taking in a single number. Then do something to that number and return a new number. Then call each of those functions in one giant chain. Example: functionA(functionB(functionC( 2 ) ) ) ; Assuming that you set this up correctly, you should get a numerical return that is a combination of all the functions running, taking in a function in the place of a number. EVEN IF YOU GET THIS WORKING AND ARE UNSURE OF 'WHY' IT WORKS, thats OK. This is just showing you that you can use functions in place of many things. We will deep dive these concepts in class! Once you are complete, check it into a repo titled "prime_prestudy_bonus_week_03"

function doubleIt (x) {
	return x*2;
}

function tripleIt (x) {
	return x*3;
}

function quarterIt (x) {
	return x/4;
}

console.log(doubleIt(quarterIt(tripleIt(4))))

//hey cool, it works, and i can see the answer in the console!