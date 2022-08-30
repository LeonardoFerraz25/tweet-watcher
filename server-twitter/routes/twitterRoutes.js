const express = require('express');

const router = express.Router();

router.get('/tweets/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://api.twitter.com/2/users/${id}/tweets?tweet.fields=author_id,created_at`
  const tweet = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAEdYgQEAAAAAtYtd2KQbp2rExsCC%2BvmV%2F346rSk%3D3npyjtHjJLRjCOz79JHk9TCv9THCp8FWeG8eDuLzUEIywiYI54`
      }
    })
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error('error:' + err));

  res.send(tweet);
})

router.get('/user/:name', async (req, res) => {
  const { name } = req.params;
  const url = `https://api.twitter.com/2/users/by/username/${name}?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld`
  const user = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAEdYgQEAAAAAtYtd2KQbp2rExsCC%2BvmV%2F346rSk%3D3npyjtHjJLRjCOz79JHk9TCv9THCp8FWeG8eDuLzUEIywiYI54`
      }
    })
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error('error:' + err));

  res.send(user);
})

router.get('/userById/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://api.twitter.com/2/users/${id}?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld`
  const user = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAEdYgQEAAAAAtYtd2KQbp2rExsCC%2BvmV%2F346rSk%3D3npyjtHjJLRjCOz79JHk9TCv9THCp8FWeG8eDuLzUEIywiYI54`
      }
    })
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error('error:' + err));

  res.send(user);
})

module.exports = router;