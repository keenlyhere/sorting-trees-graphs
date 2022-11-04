let userFollowing = [1,2,3]
let userFollowingFollows = []
let follows = [3,4,5]

userFollowingFollows= [...userFollowing]
userFollowingFollows = userFollowingFollows.concat(follows)
let set = new Set()

console.log(userFollowingFollows)
