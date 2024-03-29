const measureExecutionTime = async (callback) => {
	const startTime = performance.now();
	await callback();
	const endTime = performance.now();

	const executionTimeMs = endTime - startTime;
	const executionTimeSec = executionTimeMs / 1000;
	console.log('>>> Execution time:', executionTimeSec, 'seconds <<<');
};

export default measureExecutionTime;
