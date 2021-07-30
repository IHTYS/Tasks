interface Student {
	name: string;
    avgMark: number;
}

interface Statistics {
	avgMark: number;
	highestMark: string;
	lowestMark: string;
}

function getStatistics (marks: Student[]): Statistics {
	
	return { avgMark: marks.reduce((ac,a) => a.avgMark + ac,0)/marks.length, 
			highestMark: marks.reduce((a, v) => (v.avgMark > a.avgMark ? a = v: {}, a)).name,
			lowestMark: marks.reduce((a, v) => (v.avgMark < a.avgMark ? a = v: {}, a)).name	
			
}}

const testMarks = [{
	name: 'Vasya',
	avgMark: 3.72
}, {
	name: 'Lena',
	avgMark: 4.89
}]

console.log(getStatistics(testMarks))
