# Social Media API with NoSQL Database

This project is a social media API that utilizes a NoSQL database (MongoDB) to handle large amounts of unstructured data for a social network startup. It provides various API routes to manage users, thoughts, reactions, and friends. This README will guide you through the setup and usage of the API.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To use this API for your social network startup, follow the steps below to get started.

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB installed and running.

## Usage

You can use tools like Insomnia to interact with the API. The following sections detail the available API routes and their functionalities.

## API Routes

Users
GET /api/users: Get a list of all users.
GET /api/users/:userId: Get a specific user by their ID.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update a user's information.
DELETE /api/users/:userId: Delete a user.
Thoughts
GET /api/thoughts: Get a list of all thoughts.
GET /api/thoughts/:thoughtId: Get a specific thought by its ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update a thought.
DELETE /api/thoughts/:thoughtId: Delete a thought.
Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## Links

[Video]()

[GitHub](https://github.com/M1TCH3llM/Myface);

## License

This project is licensed under the MIT License.



