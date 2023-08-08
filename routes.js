const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>input message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">here</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = []; // this is reference, body variable holds a pointer to the address where the array is stored,
    // so even though the elements in the array changed, the body(pointer) doesn't change, that's why const doesn't oupput any error,
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      parsedBody = Buffer.concat(body).toString();
      message = parsedBody.split("=")[1];

      fs.writeFile("./dummy.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); // fs.writeFileSync this is syncronous function, meaning until this execution is done, the program will stop executing other codes.
      // fs.writeFile, this is asynchronous function, meaning node.js just tells system to do this execution, then move on to other excution, so it won't interrupt other program
    });
  }
  return;
  res.write("<p>Home</p>");
  res.end();
};

module.exports = {
  handler: requestHandler,
  text: "hard coded",
};
