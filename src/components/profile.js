import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {
  const [redir, setRedir] = useState(false);
  console.log(props)

  const redirect = () => {
    if (redir) {
      return (
        // props.history.push('/')
        <Redirect to="/" />
      )
    }
  }

  return (
    <>
      {redirect()}
      <Link to={{
        pathname: `${props.match.url}/post`
      }}>
        Post of profile
      </Link>
      {/* <Link to="/profile/post">Post of Profile</Link> */}
      <hr />

      <button
        onClick={() => setRedir(true)}
      >
        Redir
      </button>

    </>
  )
}

export default Profile;