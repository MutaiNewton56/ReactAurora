import { useState } from "react";

import { useEffect } from "react";

function Basics() {
  const [click1, setClick1] = useState(0);
  const [click2, setClick2] = useState(0);
  const [click3, setClick3] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(function () {
    let d = Date.now();
    console.log("Use Effect Run", d);
    if (click2 < 20) {
      return;
    }
  }, []);

  useEffect(function () {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "_octo=GH1.1.1797787014.1712236268; logged_in=no"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    setTimeout(() => {
      fetch("https://api.github.com/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setUsers(result);
        })
        .catch((error) => console.error(error));
    }, 8000);
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <img src={user.avatar_url} alt="" width="200px" />
            </div>

            <div>
              <span>Name</span>
              <span>{user.login}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Basics;
