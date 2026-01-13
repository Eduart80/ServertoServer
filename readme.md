# 🎯 Server-to-Server API Communication

Node.js Express application demonstrating API communication using Axios to fetch random facts from an external API.

## 📋 Project Overview

This project showcases how to create a middleware API server that fetches data from an external API

## 🚀 Features

- **Express Server** - RESTful API endpoint for fetching random facts
- **Axios Integration** - HTTP client for making external API requests
- **Error Handling** - Robust try-catch blocks with appropriate error responses
- **Data Transformation** - Clean, minimal JSON responses for clients
- **Environment Configuration** - Using dotenv for port management

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Axios** - HTTP client for API requests
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-restart tool

## 🔌 API Endpoint

### Get Random Fact
```
GET /api/fun-fact
```

**Response Example:**
```json
{
  "fact": "A standard deck of cards is a calendar..."
}
```

**Error Response:**
```json
{
  "message": "Could not fetch fun fact"
}
```

## 📝 Code Structure

```javascript
app.get('/api/fun-fact', async (req, res) => {
  try {
    const getData = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    res.json({"fact": getData.data.text});
  } catch(error) {
    res.status(500).json({ message: "Could not fetch fun fact" });
  }
});
```

## 🎓 Learning Outcomes

### 1. **Why Re-format API Data?**
Re-formatting eliminates unnecessary data, reduces response size, and gives you control over your API contract. Clients get only what they need, making the response faster to transmit and easier to consume. It also decouples your API from the external API's structure.

### 2. **Why Use Generic Error Messages?**
Generic errors prevent exposing sensitive information like API keys, internal server paths, or network details that could be exploited. They also provide a consistent, user-friendly experience rather than technical stack traces.

### 3. **How to Support Multiple Languages?**
Accept a query parameter in your route (e.g., `/api/fun-fact?language=de`), then pass it to the external API:

```javascript
app.get('/api/fun-fact', async (req, res) => {
  const language = req.query.language || 'en';
  const response = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`);
  res.json({"fact": response.data.text});
});
```
## 📂 Project Structure

```
ServertoServer/
├── server.js          # Main application file
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
├── readme.md         # Project documentation
└── text.tx           # Lab instructions
```
