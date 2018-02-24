const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  function getlikes(blog, index) {
    return blog.likes
}

  var tykkaykset = blogs.map(getlikes)

  const reducer = (sum, item) => {
    return sum + item
  }
  return tykkaykset.length === 0 ? 0 : tykkaykset.reduce(reducer)
}

module.exports = {
  dummy,
  totalLikes
}