import('node-fetch').then(({ default: fetch }) => {
    const githubUsernames = [
      'Mridulklra',
      'anuragg-98',
      'sohamsshah',
      'priyankavergadia',
      'ananyaneogi'
    ];
  
    async function fetchUserInfo(username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      return response.json();
    }
  
    async function main() {
      try {
        const userInfos = await Promise.all(githubUsernames.map(fetchUserInfo));
        userInfos.forEach(userInfo => {
          console.log(`Username: ${userInfo.login}`);
          console.log(`Name: ${userInfo.name || 'Not provided'}`);
          console.log(`Bio: ${userInfo.bio || 'Not provided'}`);
          console.log(`Location: ${userInfo.location || 'Not provided'}`);
          console.log(`Public Repositories: ${userInfo.public_repos}`);
          console.log('-------------------------');
        });
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    }
  
    main();
  }).catch(error => {
    console.error('Error importing node-fetch:', error);
  });
  