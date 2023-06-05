const email = process.env.REACT_APP_REMAX_EMAIL;
const TokenGen = async () => {
  let data;
  const url = "https://api.rexsoftware.com/v1/rex/Authentication/login";
  const payload = {
    email: "rise@remax.com.au",
    password: "Rise9realestate",
  };

  console.log(email);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
  return data.result;
};

export default TokenGen;
