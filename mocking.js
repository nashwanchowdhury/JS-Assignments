let users = [
        {
        id: 1,
        name: ' SpongeBob Squarepants',
        email: 'krabbypatty@gmail.com'
        }, 
        {
        id: 2,
        name: 'Patrick Star',
        email: 'arock@gmail.com'
        },
        {
        id: 3,
        name: 'Squidward Tentacles',
        email: 'clarinet@gmail.com'
        }];

        function idExists(x) {
            return users.some(function(y) {
                return y.id === x;
            });
        }

        function fetchUserById(x) {
           return new Promise(function(resolve, reject) {
            let t = users.findIndex(e => e.id === x)
            if (idExists(x)) {
                setTimeout(() => {
                resolve(console.log(users[t]))
            }, 1000);
            }else {
                setTimeout(() => {
                reject(new Error('Oops an error occurred'));
            }, 1000);
            }
           })
        }  

        fetchUserById(1)
        .then(() => {
            fetchUserById(2);
        })
        .catch((error) => {
            console.error('Oops an error occurred', error)
        })




            // .then(() => {
            //     fetchUserById(7);
            // })
            // .catch(() => {
            //     console.log('Error');
            // });