const notifyByEmail = (email) => {
  return (`Email sent to: ${email}`);
}

const notifyByText = (phonenumber) => {
  return (`Text sent to: ${phonenumber}`);
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
console.log(notify('mike@mike.com', notifyByEmail));
console.log(notify('+10000000001', notifyByText));