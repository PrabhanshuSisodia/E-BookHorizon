export async function login(authDetail) {
  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);

  if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText} (status code: ${response.status})`);
  }

  const data = await response.json();
  console.log(data);

  if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("bhid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail) {
  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);

  if (!response.ok) {
      throw new Error(`Registration failed: ${response.statusText} (status code: ${response.status})`);
  }

  const data = await response.json();
  // console.log(data)
  if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("bhid", JSON.stringify(data.user.id));
  }

  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("bhid");
}