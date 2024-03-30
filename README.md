# Backend Development Standard (4 min read)

### Project Structure

1. **Directories:**

   - `/src/config`: Configuration files (Default: Cors Options).
   - `/src/controllers`: API controllers.
   - `/src/db`: DataBase Connection Handler.
   - `/src/middlewares`: Middlewares (Default: Multer).
   - `/src/models`: DataBase Schema & Models (Default: User [including JWT, bcrypt hashing, etc], Video).
   - `/src/routes`: API routes.
   - `/src/services`: Services (Default: Cloudinary).
   - `/src/utils`: Utilities (ApiError & ApiResponse Classes, asyncWrapper).
   - `/public/temp`: Store temporary multer files.

2. **Files:**
   - `app.js`: Settings & other configurations.
   - `constants.js`: Application constants (Default: DataBaseName).
   - `index.js`: Entry point for the application.
   - `README.md`: Project documentation.
   - `.env.sample`: Dummy .env file (Standalone, editable).
   - `.gitignore`: NodeJS gitignore template.
   - `.prettierrc`: Formatting rules (Do NOT modify).
   - `.prettierignore`: Exclude files from prettier.
   - `.package.json`: Type set to 'moduleJS' explicitly (ES6 standards)

### API Design

1. **HTTP Methods:**

   - Use `GET` for fetching data.
   - Use `POST` for creating a resource.
   - Use `PUT` for updating a resource.
   - Use `PATCH` for updating a certain field of a resource.
   - Use `DELETE` for deleting a resource.

   - NOTE - For soft deletions, use the field `exists`

2. **Status Codes:**

   - `100 Continue`: Continue with request body.
   - `101 Switching Protocols`: Changing protocols according to Upgrade header.
   - `200 OK`: Successful operation.
   - `201 Created`: Resource successfully created.
   - `204 No Content`: Successful operation with no response body.
   - `206 Partial Content`: Successfully fulfilled a partial GET request.
   - `300 Multiple Choices`: Resource corresponds to multiple representations.
   - `301 Moved Permanently`: Resource has been permanently moved.
   - `303 See Other`: Response can be found under a different URI.
   - `400 Bad Request`: Invalid request or missing parameters.
   - `401 Unauthorized`: Authentication failure.
   - `403 Forbidden`: Authorization failure.
   - `404 Not Found`: Resource not found.
   - `406 Not Acceptable`: Server cannot produce a response matching acceptable values.
   - `409 Conflict`: Request could not be completed due to a conflict.
   - `500 Internal Server Error`: Unexpected server error.
   - `501 Not Implemented`: Server does not support required functionality.
   - `503 Service Unavailable`: Server is not ready to handle the request.
   - `504 Gateway Timeout`: Server did not receive a timely response from upstream server.

3. **API Response Format:**

   - Follow a consistent JSON structure for API responses.

   ```json
   {
     /* Set the status code accordingly first */
     "success": true,
     "message": "Operation Successful",
     "payload": {
       /* response data */
     }
   }
   ```

### Coding Conventions (Mandatory)

1. **Indentation:**

   - Use 2 spaces for `indentation`.

2. **Semicolons:**

   - Use `semicolons` at the end of each statement.

3. **Quotes:**

   - Use `double quotes` consistently.

4. **Variables and Functions:**

   - Use `camelCase` for variable and function names.
   - All file names, except class names, README, LICENSE must be in `lowercase`.

5. **Constants:**

   - Use uppercase letters with underscores for `constants` (Eg: constants.js, .env, etc).

6. **Error Handling:**

   - Implement proper error handling for all critical sections of code.
   - Use try-catch blocks for synchronous code and handle promises with `.catch()`.

7. **Logging:**

   - Implement logging for important events and errors.

### Documentation

1. **Code Comments:**

   - Add comments for complex logic or where clarity is needed.

2. **API Documentation:**

   - Use tools like Swagger/OpenAPI for API documentation.
   - Include sample requests and responses.

3. **README:**
   - Provide a comprehensive README.md with instructions on setting up and running the project.

### Security

1. **Input Validation:**

   - Validate all user inputs to prevent security vulnerabilities.

2. **Authentication and Authorization:**

   - Implement secure authentication and proper authorization mechanisms.

3. **Sensitive Data:**

   - Never store sensitive information in code or configuration files.

### Tools

1. **Version Control:**

   - Use Git for version control.
   - Follow a branching strategy (e.g., Gitflow).

2. **Linting:**

   - Use a linter (e.g., ESLint & SonarLint) to enforce coding standards.

3. **Formatting:**

   - Use a code formatter (e.g., Prettier) to maintain consistent code style.

4. **Package Management:**
   - Use a package manager (e.g., npm ) for dependency management.

### Conclusion

Thank you for helping us maintain a cleaner developing environment!
