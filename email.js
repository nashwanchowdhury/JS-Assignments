let email = {
        name: 'Gmail',
        mailboxes: { inbox: [{name: 'Erin', text: 'Buy sum car insurance', status: 'recieved' }, 
                             {name: 'Jake', text: 'Im Mr.Beast', status: 'recieved' }, 
                             {name: 'Paul', text: 'Turn around', status: 'recieved' },],

                     draft: [{name: 'Rich', text: 'We are trying to reach you about your warranty'},],

                     sent:  [{name: 'Ester', text: 'I was looking to buy some manure'},],
                    
}



}
console.log(email.mailboxes);

console.log(email.mailboxes.inbox);

console.log(email.mailboxes.inbox[1].text);

email.mailboxes.inbox[0].status = 'sent';

console.log(email.mailboxes.inbox[0]);

email.mailboxes.draft[1] = ({name: 'Paul', text: 'how u doin'});

console.log(email.mailboxes.draft);