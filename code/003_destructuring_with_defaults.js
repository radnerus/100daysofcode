const welcomeUser = (user) => {
    const {name: username = 'Anonymous', topics} = user;
    console.log(`${username} has subscribed to the following topics - ${topics.join(', ')}`);
}

welcomeUser({
    name: 'John Doe',
    topics: ['nodejs', 'javascript', 'deno']
});
// John Doe has subscribed to the following topics - nodejs, javascript, deno

welcomeUser({
    topics: ['react', 'javascript', 'angular']
});
// Anonymous has subscribed to the following topics - react, javascript, angular