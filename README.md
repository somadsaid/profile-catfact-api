# 🐱 Profile + Cat Fact API

A simple Node.js + Express REST API that returns your profile information and a random cat fact 🐾.  
This project was created as part of a backend assignment to demonstrate API development, external API integration, and JSON formatting.

---

## 🚀 Features
- Returns user details (name, email, and stack)
- Fetches a random cat fact from [Cat Fact API](https://catfact.ninja/fact)
- Includes dynamic UTC timestamp in ISO 8601 format
- Handles errors gracefully if the external API fails
- Uses environment variables for sensitive data

---

## ⚙️ Environment Variables

Create a `.env` file in the project root directory and add your own information:

```env
PORT=3000
USER_EMAIL=your_email@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express
````

For reference, a `.env.example` file is also included:

```env
PORT=3000
USER_EMAIL=you@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express
CATFACT_URL=https://catfact.ninja/fact
CATFACT_TIMEOUT_MS=3000
NODE_ENV=development
```

---

## 🧰 Dependencies

| Package | Purpose                                     |
| ------- | ------------------------------------------- |
| express | For building the RESTful API                |
| axios   | For fetching cat facts from external API    |
| dotenv  | For loading environment variables from .env |

To install dependencies, run:

```bash
npm install
```

---

## 🧑‍💻 Run Locally

Follow these steps to run the API on your computer:

```bash
# 1. Clone this repository
git clone https://github.com/<your-username>/profile-catfact-api.git

# 2. Navigate to the project folder
cd profile-catfact-api

# 3. Install dependencies
npm install

# 4. Create and configure your .env file
cp .env.example .env
# Then open .env and update your details

# 5. Start the server
npm start
```

---

## 🧪 Test the Endpoint

After the server starts, visit:

```
http://localhost:3000/me
```

You should get a response in this exact format:

```json
{
  "status": "success",
  "user": {
    "email": "your_email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

Every new request will give you a new cat fact 🐈

---

## 🌍 Deployment

You can host this API using any of the following platforms:

* Railway.app
* Render.com ❌ (forbidden this cohort)
* Heroku
* AWS
* PXXL App

> 🚫 Vercel is not allowed for this task.

---

## 🧾 Submission Info

This API fulfills the following task requirements:

* Working GET `/me` endpoint
* Returns correct JSON response format
* Integrates with external API (cat facts)
* Includes dynamic timestamp and proper HTTP status codes
* Contains clear README and setup instructions

---

## ✍️ Author

**Somad Said**
📧 [abdulsomadsaid05@gmail.com](mailto:abdulsomadsaid05@gmail.com)
💻 Stack: Node.js / Express

---

## 🪶 Notes

* Tested locally and returns correct JSON response
* If any error occurs fetching a cat fact, the endpoint handles it gracefully
* Open to feedback and improvements

---

## 💬 Connect

If you’d like to see my process and experience with this task, I’ll be posting a write-up soon on **Twitter** with screenshots and details.

