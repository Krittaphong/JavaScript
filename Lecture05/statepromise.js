const promise = new Promise((resolve, reject) => {
    const res = false;
    if (res) {
        resolve('Resolved!');
    } else {
        reject(Error('Fatal Error ผิดแล้ว 5555'));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)